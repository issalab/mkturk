//================== INITIALIZE VARIABLES ==================//
var astat = {
  manualtriggerval: 0, trial: -1, plotdata: 0,
  tdrop: [], trise: [], dur: [], corr: [], tsc: [],
};

let fileMeta = { 
  activeAgentList: [],
  activeAgent: '',
  filename: '',
  trialnum: -1
}
const rtdb = firebase.database();
let rtdbBroadcastRef = rtdb.ref('instances');
rtdbBroadcastRef.on('child_added', function(childSnapshot, prevChildKey) {
  getActiveAgents();
  console.log(childSnapshot.key + ' is now live; adding agent to list.')
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
  rtdb.ref(`instances/${fileMeta.activeAgent}/trialnum`).on('value', (snap) => 
  {
    fileMeta.trialnum = snap.val();
  })
  rtdb.ref(`instances/${fileMeta.activeAgent}/filename`).on('value', (snap) => 
  {
    fileMeta.filename = snap.val();
  })
  getFileMeta()
}//FUNCTION agentSelectionListener

function getFileMeta(){ 
  rtdb.ref(`instances/${fileMeta.activeAgent}`).once('value').then( (snap) =>{
    try {
      fileMeta.filename = snap.val()['filename'];
      fileMeta.trialnum = snap.val()['trialnum'];
    } catch (err) {
      console.error("error: trouble getting filename & trialnum from realtime db");
    }
  } )
}//FUNCTION getFileMeta


//=======(END)======= INITIALIZE VARIABLES =================//

//---------------------------------------------//
//----------- BOILERPLATE WEBUSB CODE ---------//
//---------------------------------------------//

// STEP 0: Port Initialization - Open (instantiate) port before assigning callbacks to it
async function findUSBDevice(event) {
  //User connects to Port
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
      deviceWorker.postMessage({
        action: 'get-device',
        vendorId: device.vendorId,
        productId: device.productId,
      })//postMessage(get-device)      
    } catch (error) {
      console.log(error);
    }
    waitforClick.next(1);
  }
}//FUNCTION findUSBDevice
//============= SERIAL OBJECT =====================//

//----------------------------------------------------//
//----(END)------- BOILERPLATE WEBUSB CODE ----------//
//--------------------------------------------------//

function updatePlots(abuff){
  astat.trial[abuff.ntrials] = fileMeta.trialnum;
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

  document.getElementById('titletext').innerHTML = 
          'MkSensor &nbsp&nbsp' + 
          "<font size=-1>" + Math.round(100*abuff.ph.length / pipe.dur )/100 + ' kHz ' +
          '(pipe: ' + Math.round(pipe.SR*100)/100 + ') __ ' + fileMeta.filename + '</font>'
//----- Sampling stats

//----- MkTurk Meta
document.getElementById('metatext').innerHTML = 
          '<font color=blue> Trial_mk ' + fileMeta.trialnum + '</font>'+
          ' (n=' + abuff.ntrials + ')'

//----- Display stats
  astat.tsc[abuff.ntrials] = abuff.t0;
  const isSmallNumber = (element) => element < 0.3*(Math.max(...abuff.ph) - Math.min(...abuff.ph)) + Math.min(...abuff.ph);
  astat.tdrop[abuff.ntrials] = Math.round(abuff.t[abuff.ph.findIndex(isSmallNumber)])

  const isLargeNumber = (element) => element > 0.7*(Math.max(...abuff.ph) - Math.min(...abuff.ph)) + Math.min(...abuff.ph);
  astat.trise[abuff.ntrials] = Math.round(abuff.t[abuff.ph.findIndex(isLargeNumber)])
  console.log('tRise~>' + astat.trise[abuff.ntrials] + ', tDrop~>' + astat.tdrop[abuff.ntrials] + ' ms');

  astat.dur[abuff.ntrials] = abuff.t[abuff.ph.length-1]

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
  deviceWorker.postMessage({action: "toggleTrigger", val: astat.manualtriggerval});
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

function saveTrialData(){
  const data = {
    agent: fileMeta.activeAgent,
    filename: fileMeta.filename,
    trial_num: fileMeta.trialnum,
    timestamp: abuff.t0,
    photodiode: abuff.ph,
    t: abuff.t
  }
  if (fileMeta.activeAgent !== '') {
    bqInsertPhotodiodeData(data);
  }
}//FUNCTION saveTrialData