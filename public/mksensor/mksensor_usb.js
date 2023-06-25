var astat = {
  manualtriggerval: 0, trial: -1, plotdata: 0,
  tdrop: [], trise: [], dur: [], corr: [], tsc: [],
};

var alldata = { 't0':[],'t': [], 'a0': [], 'manualpulse': [], 'd0pulse': {}, 'd1pulse': {},
                'starttrial': -1, 'nsamples': 0, 'nsamples_max': 500000 }
alldata['d0pulse'] = {trial:[],tstart:[],tend:[],filecode:[],mktrial:[],mkblock:[],mkfilecode:[],dur:[]}
alldata['d1pulse'] = {trial:[],tstart:[],tend:[],filecode:[],mktrial:[],mkblock:[],mkfilecode:[],dur:[]}
              
let fileMeta = { 
  activeAgentList: [],
  activeAgent: '',
  filename: '',
  trial: -1,
  block: -1,
  filecode: [-1,-1,-1,-1,-1,-1],
}
const storage = firebase.storage();

//=============== USB DEVICE =============//
var port = {
  statustext_connect: '',
  statustext_sent: '',
  statustext_received: '',
  connected: false,

  USBDeviceType: '',
  USBDeviceName: '',
};
let usbDeviceWorker = new Worker('mksensor_usbworker.js');

async function usbAutoConnectPromise(){
  return new Promise((res, rej) => {
    const channel = new MessageChannel(); 

    channel.port1.onmessage = ({data}) => {
      if (data.connected == true){
        port.connected = true
        hideHardwareButton()
      }
      else { port.connected = false }
      port.statustext_connect = data.val
  
      channel.port1.close();
      if (data.error) {
        rej(data.error);
      }
      else {
        res(data.val);
      }
    };//channel.onmessage
    usbDeviceWorker.postMessage({action: 'connect', val: 'AutoConnect'},[channel.port2]);
  })
}//FUNCTION usbAutoConnectPromise()

async function findUSBDevice(event) {
  //User manually connects to Port
  if ( event.type == 'pointerup' || event.type == 'touchend' || event.type == 'mouseup')
  {
    event.preventDefault(); //prevents additional downstream call of click listener
    try {
      //STEP 1B: RequestPorts - User based
      // -Get device list based on Arduino filter
      // -Look for user activation to select device
      const filters = [
        { vendorId: 0x2341, productId: 0x8036 },
        { vendorId: 0x2341, productId: 0x8037 },
        { vendorId: 0x2341, productId: 0x804d },
        { vendorId: 0x2341, productId: 0x804e },
        { vendorId: 0x2341, productId: 0x804f },
        { vendorId: 0x2341, productId: 0x8050 },
      ];

      device = await navigator.usb.requestDevice({ filters: filters });
      if (port.connected == false){
        usbDeviceWorker.postMessage({action: 'connect', val: 'ManualConnect'})//postMessage(get-device)        
      }//(in case of a reconnect event) IF hadn't allready reconnected in time it took user to select
    } catch (error) {
      console.log(error);
    }
    waitforClick.next(1);
  }//IF user select
}//FUNCTION findUSBDevice

// Update the pre element with output from the device.
usbDeviceWorker.onmessage = function(event) {
  console.log(event.data.message);
  if (event.data.message == 'USBDisconnect'){
    port.connected = false
    port.statustext_connect = event.data.val
    showHardwareButton()
  }//IF disconnected usb

  if (event.data.message == 'USBConnect'){
    port.connected = true
    port.statustext_connect = event.data.val
    hideHardwareButton()
  }//IF connected usb

  if (event.data.message == 'SerialPortConnect'){
    port.connected = true
    port.USBDeviceType = event.data.devicetype;
    port.USBDeviceName = event.data.devicename;
  }//IF serialportconnect

  if (event.data.message == 'zeroTrigger'){
    astat.manualtriggerval = 0;
  }

  if (event.data.message == 'saveData'){
    if (alldata.starttrial == -1){
      if (event.data.starttrial >=0){
        alldata.starttrial = event.data.val.starttrial
      }//IF trialnum recorded concurrent with sample command pulse
      else{
        alldata.starttrial = fileMeta.trial
        console.log('!! WARNING: mkturk was not open to receive data; but async external pulse sent to mksensor')
      }//ELSE sample command not received yet (external trig), just use rtdb trialnum
    }
    saveAllData(event.data.val)
    saveTrialData(event.data.val)
  }

  if (event.data.message == 'plotTrial'){
    updatePlots(event.data.val)
  }

  if (event.data.message == 'trigger'){
    let pulsedata = {
      trial: event.data.val.trial, 
      tstart: event.data.val.tstart,
      tend: event.data.val.tend,
      filecode: event.data.val.filecode,
      mktrial: event.data.val.mktrial, 
      mkblock: event.data.val.mkblock, 
      mkfilecode: event.data.val.mkfilecode,
      dur: Math.round(10*(event.data.val.tend - event.data.val.tstart))/10,
    }

    let linestr = event.data.val.inputkey + 'pulse'
    console.log('Pushing into alldata.' + linestr)
    alldata[linestr]['trial'].push(pulsedata.trial);
    alldata[linestr]['tstart'].push(pulsedata.tstart);
    alldata[linestr]['tend'].push(pulsedata.tend);
    alldata[linestr]['filecode'].push(pulsedata.filecode);
    alldata[linestr]['mktrial'].push(pulsedata.mktrial);
    alldata[linestr]['mkblock'].push(pulsedata.mkblock);
    alldata[linestr]['mkfilecode'].push(pulsedata.mkfilecode);
    alldata[linestr]['dur'].push(pulsedata.dur);

    rtdb.ref('daq/' + fileMeta.activeAgent + '/' + event.data.val.inputkey).set(pulsedata)
    console.log('<--to MkTurk input' + event.data.val.inputkey + ' (digital pulse)')
  }//IF trigger
};//usbDeviceWorker.onmessage

const rtdb = firebase.database();
let rtdbBroadcastRef = rtdb.ref('instances');
rtdbBroadcastRef.on('child_added', function(childSnapshot, prevChildKey) {
  getActiveAgents();
  // console.log(childSnapshot.key + ' is now live; adding agent to list.')
})//CALLBACK for when agents are added

function getActiveAgents(){
  rtdbBroadcastRef.once('value').then((snap) => {
    try {
       fileMeta.activeAgentList = Object.keys(snap.val());

        var listobj = document.getElementById('agent-list');

        fileMeta.activeAgentList.forEach(agent => {
            let opt = document.createElement('option');
            opt.innerHTML = agent;
            listobj.appendChild(opt)
          }
        )//forEach agent
    } catch (err) {
      fileMeta.activeAgentList = [];
      console.error("error: trouble getting active agent list from realtime db");
    }
  });  
}//FUNCTION getActiveAgents
// getActiveAgents();//Initialize List

function agentSelectionListener(event){
  fileMeta.activeAgent = event.target.value;
  if (fileMeta.activeAgent == ''){
    document.getElementById('titletext').innerHTML = 'MkSensor'
  }//IF no agent selected
  else{
    document.getElementById('titletext').innerHTML = 'MkSensor'
    + '<font color=red><b>'
    + '   (saving to ' + fileMeta.activeAgent + ')'
    + '</b></font>'
  }//ELSE agent, add saving in bold, red text

  rtdb.ref(`instances/${fileMeta.activeAgent}/trialnum`).on('value', (snap) => 
  {
    fileMeta.trial = snap.val();
    usbDeviceWorker.postMessage({ action: 'updateMkTurkMeta',
        val: {trial: fileMeta.trial, block: fileMeta.block, filecode: fileMeta.filecode}
    })
    console.log('-->Received from MkTurk (trial)')
  })//listener for mktrial

  rtdb.ref(`instances/${fileMeta.activeAgent}/blocknum`).on('value', (snap) => 
  {
    fileMeta.block = snap.val();
    usbDeviceWorker.postMessage({ action: 'updateMkTurkMeta',
        val: {trial: fileMeta.trial, block: fileMeta.block, filecode: fileMeta.filecode}
    })
    console.log('-->Received from MkTurk (block)')
  })//listener for mkblock

  rtdb.ref(`instances/${fileMeta.activeAgent}/filecode`).on('value', (snap) => 
  {
    fileMeta.filecode = snap.val();
    usbDeviceWorker.postMessage({ action: 'updateMkTurkMeta',
        val: {trial: fileMeta.trial, block: fileMeta.block, filecode: fileMeta.filecode}
    })
    console.log('-->Received from MkTurk (filecode)')
  })//listener for mkfilecode

  rtdb.ref(`instances/${fileMeta.activeAgent}/filename`).on('value', (snap) => 
  {
    if (fileMeta.filename != ''){
      resetAllData()
    }//IF this is a filename switch, then assume trial 0
    fileMeta.filename = snap.val();
    usbDeviceWorker.postMessage({ action: 'updateMkTurkMeta',
        val: {trial: fileMeta.trial, block: fileMeta.block, filecode: fileMeta.filecode}
    })
    console.log('-->Received from MkTurk (filename)')
  })//listener for mkfilename

  getFileMeta()
}//FUNCTION agentSelectionListener

function getFileMeta(){ 
  rtdb.ref(`instances/${fileMeta.activeAgent}`).once('value').then( (snap) =>{
    try {
      fileMeta.filename = snap.val()['filename'];
      fileMeta.trial = snap.val()['trialnum'];
      fileMeta.block = snap.val()['blocknum'];
      fileMeta.filecode = snap.val()['filecode'];
      console.log('-->Received from MkTurk (trial,block,filecode)')
      usbDeviceWorker.postMessage({ action: 'updateMkTurkMeta',
                                    val: {trial: fileMeta.trial, block: fileMeta.block, filecode: fileMeta.filecode}
                                  })
    } catch (err) {
      console.error("error: trouble getting filename & trialnum from realtime db");
    }
  } )
}//FUNCTION getFileMeta

function updatePlots(abuff){
  astat.trial[abuff.ntrials] = fileMeta.trial;
  astat.manualtriggerval = 0;

//----- Sampling stats
  var pipe = {dt: [], dur: 0, npackets: 0, SR: 0}
  for (var i=0; i<=abuff.trec.length-1; i++){
    if ( i>0 && abuff.trec[i] != abuff.trec[i-1] ){
      pipe.dt.push(abuff.trec[i] - abuff.trec[i-1])
      pipe.npackets = pipe.npackets + 1
    }
  }//FOR i
  pipe.dur = abuff.trec[abuff.trec.length-1]
  pipe.SR = pipe.npackets/(pipe.dur)

  console.log('SR=' + Math.round(abuff.ph.length / pipe.dur ) + ' kHz (pipe: ' + Math.round(pipe.SR) + ')');
  console.log('ANALOG: dt=[' + Math.min(...abuff.dt) + ', ' + Math.max(...abuff.dt) + '] ms')

  let titlestr = 'MkSensor'
  if (fileMeta.activeAgent != ''){
    titlestr = 'MkSensor'
                + '<font color=red><b>'
                + '   (saving to ' + fileMeta.activeAgent + ')'
              + '</b></font>'
  }//IF agent, add 'saving' in bold, red text

  document.getElementById('titletext').innerHTML = 
          titlestr + '&nbsp&nbsp' + 
          "<font size=-1>" + Math.round(100*abuff.ph.length / pipe.dur )/100 + ' kHz ' +
          '(pipe: ' + Math.round(pipe.SR*100)/100 + ') __ ' + fileMeta.filename + '</font>'
//----- Sampling stats

//----- MkTurk Meta
  document.getElementById('metatext').innerHTML = 
          '<font color=blue> Trial_mk ' + fileMeta.trial + '</font>'+' (n=' + abuff.ntrials + ')'

//----- Display stats
  astat.tsc[abuff.ntrials] = abuff.t0;
  const isSmallNumber = (element) => element < 0.3*(Math.max(...abuff.ph) - Math.min(...abuff.ph)) + Math.min(...abuff.ph);
  astat.tdrop[abuff.ntrials] = Math.round(10*abuff.t[abuff.ph.findIndex(isSmallNumber)])/10

  const isLargeNumber = (element) => element > 0.7*(Math.max(...abuff.ph) - Math.min(...abuff.ph)) + Math.min(...abuff.ph);
  astat.trise[abuff.ntrials] = Math.round(10*abuff.t[abuff.ph.findIndex(isLargeNumber)])/10
  console.log('tRise~>' + astat.trise[abuff.ntrials] + ', tDrop~>' + astat.tdrop[abuff.ntrials] + ' ms');

  astat.dur[abuff.ntrials] = abuff.t[abuff.ph.length-1]

  rtdb.ref('daq/' + fileMeta.activeAgent + '/ph').set({
    trise: astat.trise[abuff.ntrials],
    tdrop: astat.tdrop[abuff.ntrials],
    threshrise: 0.7*(Math.max(...abuff.ph) - Math.min(...abuff.ph)) + Math.min(...abuff.ph),
    threshdrop: 0.3*(Math.max(...abuff.ph) - Math.min(...abuff.ph)) + Math.min(...abuff.ph),
    dursamplecommand: Math.round(10*astat.dur[abuff.ntrials])/10,
    mktrial: fileMeta.trial, 
    mkblock: fileMeta.block, 
    mkfilecode: fileMeta.filecode,
  })

  var prevind = abuff.indtrace - 1
  if (prevind < 0){prevind = abuff.ntraces-1};

  var dt = 0.5; //milliseconds
  var tmax = abuff.t[abuff.ph.length-1];
  var npoints = Math.round(tmax/dt)
  var tinterp = [...Array(npoints).keys() ].map( i => i*dt);
  var xinterp = everpolate.linear(tinterp, abuff.t, abuff.ph);

  if (abuff.ntrials>=1){
    var tmax = abuff.t_cum[prevind][abuff.ph_cum[prevind].length-1];
    var npoints = Math.round(tmax/dt)
    var tinterp_prev = [...Array(npoints).keys() ].map( i => i*dt);
    var yinterp = everpolate.linear(tinterp_prev, abuff.t_cum[prevind], abuff.ph_cum[prevind]);

    try {
      r = pcorr(xinterp, yinterp);
      r = Math.round(r*100)/100
    } catch (error) {
      console.log('error computing correlation')    
    }
    astat.corr[abuff.ntrials-1] = r;

    console.log('Trial ' + abuff.ntrials + 'v' + (abuff.ntrials-1) + ' ' 
                + abuff.indtrace + 'v' + prevind
                + ' ---- dstart=' + Math.round(astat.trise[abuff.ntrials] - astat.trise[abuff.ntrials-1])
                + ' ddur=' + Math.round(abuff.t[abuff.ph.length-1] - abuff.t_cum[prevind][abuff.ph_cum[prevind].length-1])
                + ' r=' + r )

    //Update displaystat chip
    usd1 = getMeanStandardDeviation(astat.trise)
    usd2 = getMeanStandardDeviation(astat.tdrop)
    usd3 = getMeanStandardDeviation(astat.dur)
    usd4 = getMeanStandardDeviation(astat.corr)

    var d1 = Math.max(...astat.trise) - Math.min(...astat.trise);
    var d2 = Math.max(...astat.tdrop) - Math.min(...astat.tdrop);
    var d3 = Math.max(...astat.dur) - Math.min(...astat.dur);
    var d4 = Math.max(...astat.corr) - Math.min(...astat.corr);

    var str = '<font size=+1>' + 'rise, fall, dur ' +
          '<font color=green><b>' +
          Math.round(astat.trise[abuff.ntrials]) + ', ' + //rise
          Math.round(astat.tdrop[abuff.ntrials]) + ', ' + //fall
          Math.round(astat.dur[abuff.ntrials]) + '</font></b> &nbsp(∆=' + //dur
          Math.round(astat.trise[abuff.ntrials] - astat.trise[abuff.ntrials-1]) + ', ' + //drise
          Math.round(astat.tdrop[abuff.ntrials] - astat.tdrop[abuff.ntrials-1]) + ', ' + //dfall
          Math.round(astat.dur[abuff.ntrials] - astat.dur[abuff.ntrials-1]) + ') ' + //ddur
          '  r=' + r + '</font>' //correlation
    document.getElementById("displaystatschip").innerHTML = str;

    var str =
    '<font size=+1><b>Summary:</b> µ=' + 
      Math.round(usd1[0]) + ', ' + Math.round(usd2[0]) + ', ' + Math.round(usd3[0]) + ', ' + Math.round(usd4[0]*100)/100+
    '&nbsp&nbsp sd=' + 
      Math.round(usd1[1]) + ', ' + Math.round(usd2[1]) + ', ' + Math.round(usd3[1]) + ', ' + Math.round(usd4[1]*100)/100 +
    '&nbsp&nbsp [max-min]='+
      Math.round(d1) + ', ' + Math.round(d2) + ', ' + Math.round(d3) + ', ' + Math.round(d4*100)/100 + 
    '</font>'
    document.getElementById("summarydisplaystatschip").innerHTML = str;
  }//IF >1 trial
  //----- Display stats

  //----- Draw plot
  if (astat.plotdata == 1){
    for (let currind=0; currind<=abuff.t.length-1; currind++){
      //----- Update Plot Data
      if (abuff.ntrials >= 1){
        var prevind = abuff.indtrace - 1
        if (prevind < 0){ prevind = abuff.ntraces-1 };
        var yprev = everpolate.linear(abuff.t[currind], abuff.t_cum[prevind], abuff.ph_cum[prevind]);
        yprev = yprev[0]
      }
      else{
        var yprev = null;
      }

      if (abuff.manualtriggerval > 0){
        var yprev = abuff.ph[currind];
      }

      dataRunning.addRow([
        {v:  abuff.t[currind], f:''},
        {v:  yprev, f:''},
        {v:  abuff.ph[currind], f:''}
      ]); //avoid  formatting of domain data to speed  up    
      //----- Update Plot Data
    }//FOR i timepoints

    runningOptions.hAxis = {viewWindow: {min: 0, max: tinterp[tinterp.length-1]} }
    lineRunning.draw(dataRunning, google.charts.Line.convertOptions(runningOptions));
    dataRunning.removeRows(0,dataRunning.getNumberOfRows());
  }//IF plotting
}//FUNCTION updatePlot

function pcorr(x, y)
{
  let sumX = 0,
    sumY = 0,
    sumXY = 0,
    sumX2 = 0,
    sumY2 = 0;
  const minLength = x.length = y.length = Math.min(x.length, y.length),
    reduce = (xi, idx) => {
      const yi = y[idx];
      sumX += xi;
      sumY += yi;
      sumXY += xi * yi;
      sumX2 += xi * xi;
      sumY2 += yi * yi;
    }
  x.forEach(reduce);
  return (minLength * sumXY - sumX * sumY) / Math.sqrt((minLength * sumX2 - sumX * sumX) * (minLength * sumY2 - sumY * sumY));
};

function getMeanStandardDeviation (array) {
  const n = array.length
  var mean = array.reduce((a, b) => a + b) / n
  var sd = Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
  return [mean,sd]
}

async function toggleTrigger(event){
  if (astat.manualtriggerval == 0){
    astat.manualtriggerval = 2;
    document.querySelector('button[id=manualtrigger]').style.color = 'green';
  }
  else if (astat.manualtriggerval == 2){
    astat.manualtriggerval = 1; //ready to triggerdown
    document.querySelector('button[id=manualtrigger]').style.color = 'black';
  } 
  usbDeviceWorker.postMessage({action: "toggleTrigger", val: astat.manualtriggerval});
}//FUNCTION toggleTrigger

async function togglePlotData(event){
    if (astat.plotdata == 0){
      astat.plotdata = 1;
      document.querySelector('button[id=plotdata]').style.color = 'green';
    }//IF start saving
    else {
      astat.plotdata = 0;
      document.querySelector('button[id=plotdata]').style.color = 'black';
    }//ELSE stop plotting
  }//FUNCTION togglePlotData

function saveTrialData(abuff){
  const bqdata = {
    agent: fileMeta.activeAgent,
    filename: fileMeta.filename,
    trial_num: fileMeta.trial,
    timestamp: abuff.t0,
    photodiode: abuff.ph,
    t: abuff.t
  }
  if (fileMeta.activeAgent !== '') {
    bqInsertPhotodiodeData(bqdata);
  }
}//FUNCTION saveTrialData

async function saveAllData(abuff){
  alldata.t0.push(abuff.t0);
  alldata.t.push(abuff.t);
  alldata.a0.push(new Uint8Array(abuff.ph))
  alldata.nsamples = alldata.nsamples + abuff.ph.length

  let blob = new Blob([JSON.stringify(alldata)], { type: 'application/json' });

  let filename =  '/mkturkfiles/daq/'
              + fileMeta.filename.substring(fileMeta.filename.lastIndexOf('datafiles/')+10, fileMeta.filename.lastIndexOf('.json'))
              + '_daq' + alldata.starttrial.toString().padStart(4,'0') + '.json'
  
  // Create file metadata including the content type
  let metadata = { contentType: 'application/json' };

  // Upload the file and metadata
  let response = await storage.ref().child(filename).put(blob, metadata);
  // CURRTRIAL.lastFirebaseSave = new Date(response.metadata.updated);

  //RESET ALLDATA WHEN TOO LARGE
  if (alldata.nsamples > alldata.nsamples_max){
    resetAllData()
  }//IF alldata large, start new arrays and file
}//FUNCTION saveAllData

function resetAllData(){
  alldata.t0 = []
  alldata.t = []
  alldata.a0 = []
  alldata.manualpulse = []
  alldata['d0pulse'] = {trial:[],tstart:[],tend:[],filecode:[],mktrial:[],mkblock:[],mkfilecode:[],dur:[]}
  alldata['d1pulse'] = {trial:[],tstart:[],tend:[],filecode:[],mktrial:[],mkblock:[],mkfilecode:[],dur:[]}
  alldata.nsamples = 0;  

  alldata.starttrial = -1;
  console.log('STARTING NEW ALLDATA FILE')
}//FUNCTION resetAllData