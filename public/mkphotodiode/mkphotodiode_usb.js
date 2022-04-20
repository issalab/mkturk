//================== INITIALIZE VARIABLES ==================//
var port = {
  statustext_connect: '',
  statustext_sent: '',
  statustext_received: '',
  connected: false,

  USBDeviceType: '',
  USBDeviceName: '',
};
var serial = {};

var abuff = {
  //receives over webusb pipe
  trec: [],
  nrec: [],
  indrec: 0,

  //current
  t: [], ph: [], sa: [], currind: 0, dt: [], prev_sa: 0,

  //cumulative
  t_cum: [], ph_cum: [],
  ntraces: 10,

  //triggers
  ttrig: [], trigON: 0, indtrace: -1,
  tdrop: [], trise: [], corr: [],
  ntrials: -1,

  lastdraw: performance.now(),
  lastreceive: performance.now(),
};
//=======(END)======= INITIALIZE VARIABLES =================//

//---------------------------------------------//
//----------- BOILERPLATE WEBUSB CODE ---------//
//---------------------------------------------//
navigator.usb.onconnect = function (device) {
  if (typeof port.connected == 'undefined' || port.connected == false) {
    port.statustext_connect = 'ATTEMPTING TO RECONNECT USB DEVICE...';
    console.log(port.statustext_connect);

    var event = {};
    event.type = 'Reconnect';
    findUSBDevice(event);
  }
};

navigator.usb.ondisconnect = function (device) {
  // USB device disconnected
  port.connected = false;
  port.statustext_connect = 'USB DEVICE DISCONNECTED';
  FLAGS.runPump = 0;
  console.log(port.statustext_connect);

  // Expose button in case need to manually reconnect (navigator.usb.onconnect doesn't seem to work on all chrome for android)
  document.querySelector('button[id=connectusb]').style.display = 'block';
  document.querySelector('button[id=connectusb]').style.visibility = 'visible';
  document.querySelector('button[id=connectusb]').style.top = '5%';
};

// STEP 0: Port Initialization - Open (instantiate) port before assigning callbacks to it
async function findUSBDevice(event) {
  // STEP 1A: Auto-Select first port
  if (event.type == 'AutoConnect' || event.type == 'Reconnect') {
    //    ports = await getPorts()
    //STEP 1A: GetPorts - Automatic at initialization
    // -Enumerate all attached devices
    // -Check for permission based on vendorID & productID
    devices = await navigator.usb.getDevices();
    ports = devices.map((device) => new serial.Port(device)); //return port

    if (ports.length == 0) {
      port.statustext_connect =
        'NO USB DEVICE automatically found on page load';
      console.log(port.statustext_connect);
    } else {
      var statustext = '';
      if (event.type == 'AutoConnect') {
        statustext = 'AUTO-CONNECTED USB DEVICE ON PAGE LOAD!';
      } else if (event.type == 'Reconnect') {
        statustext = 'RECONNECTED USB DEVICE!';
      }
      port = ports[0];
      try {
        await port.connect();
      } catch (error) {
        console.log(error);
      }
      port.statustext_connect = statustext;
      console.log(port.statustext_connect);

      //Hide manual connect button upon successful connect
      document.querySelector('button[id=connectusb]').style.display = 'none';
    }
  }

  // STEP 1B: User connects to Port
  if (
    event.type == 'pointerup' ||
    event.type == 'touchend' ||
    event.type == 'mouseup'
  ) {
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
      port = new serial.Port(device); //return port

      await port.connect();

      port.statustext_connect = 'USB DEVICE CONNECTED BY USER ACTION!';
      console.log(port.statustext_connect);

      //Hide manual connect button upon successful connect
      document.querySelector('button[id=connectusb]').style.display = 'none';
    } catch (error) {
      console.log(error);
    }
    waitforClick.next(1);
  }
} //FUNCTION findUSBDevice
//============= SERIAL OBJECT =====================//


//PORT - attach device(s)
serial.Port = function (device) {
  this.device_ = device;
};

//PORT - connect
serial.Port.prototype.connect = async function () {
  await this.device_.open();

  if (this.device_.configuration === null) {
    return this.device_.selectConfiguration(1);
  }

  await this.device_.claimInterface(2);
  await this.device_.selectAlternateInterface(2, 0);
  await this.device_.controlTransferOut({
    requestType: 'class',
    recipient: 'interface',
    request: 0x22, //vendor-specific request (i.e. enable channels)
    value: 0x01, //requested channels
    index: 0x02, //interface 2 is the recipient
  }); //send controlTransferOut to work with channels

  port.USBDeviceType = 'microcontroller';
  port.USBDeviceName = 'Arduino Leonardo';

  this.connected = true;
  readLoop(this);
}; //port.connect

serial.Port.prototype.onReceiveError = (error) => {
  console.log(error);
};
//PORT - disconnect
serial.Port.prototype.disconnect = async function () {
  await this.device_.controlTransferOut({
    requestType: 'class',
    recipient: 'interface',
    request: 0x22,
    value: 0x00,
    index: 0x02,
  });
  this.device_.close();

  port.statustext_connect = 'USB DEVICE DISCONNECTED';
  console.log(port.statustext_connect);
};//FUNCTION port.disconnect
//----------------------------------------------------//
//----(END)------- BOILERPLATE WEBUSB CODE ----------//
//--------------------------------------------------//


serial.Port.prototype.onReceive = (data) => {
  let textDecoder = new TextDecoder();
  let onReceiveTime = performance.now();
  let textReceived = textDecoder.decode(data);
  port.statustext_received = textReceived;
  // if (abuff.currind/1000 == Math.round(abuff.currind/1000)){
  //   console.log( (onReceiveTime - abuff.lastreceive) + ': ' + textReceived)
  // }

  // var nchar = (textReceived.match(/\,/g) || []).length;
  var ns = textReceived.split('s').length - 1;
  var np = textReceived.split('p').length - 1;
  if (textReceived.includes('s') && textReceived.includes('p') && ns == 1 && np == 1){
    var inds = textReceived.indexOf('s',0);
    var indp = textReceived.indexOf('p',0);

    var currvals = [ Number(textReceived.slice(inds+1,indp)) ]
    var currvalp = [ Number(textReceived.slice(indp+1,textReceived.length)) ]
  }//IF received valid sample
  else{
    return;
  }//ELSE incomplete sample

//--------- TRIGGER ---------//
  var trigDown = 0;
  if (currvals == 1 && abuff.prev_sa == 0){
    abuff.trigON = 1
    abuff.indtrace++
    if (abuff.indtrace >= abuff.ntraces){
      abuff.indtrace = 0
    }//IF >ntraces, wrap back around

    //Delete any existing trace in that position in the stack
    abuff.t_cum[abuff.indtrace] = []
    abuff.ph_cum[abuff.indtrace] = []
    abuff.ttrig[abuff.indtrace] = onReceiveTime;

    abuff.trec = []
    abuff.nrec = []
    abuff.indrec = 0;

    abuff.t=[];
    abuff.ph=[];
    abuff.sa=[];
    abuff.currind=0;
    abuff.dt=[0];

    abuff.ntrials++
    console.log('\n')
    console.log('***** TRIGGERED UP')
  }//IF received trigger
  else if (currvals == 0 && abuff.prev_sa == 1){
    var trigDown = 1;
  }
  else if (currvals == 0){
    abuff.trigON = 0; //stop storing until next trigger
  }//IF trigger OFF
  abuff.prev_sa = currvals
//--------- TRIGGER ---------//


//--------- CURRENT ---------//
  if (typeof(abuff.ttrig[abuff.indtrace]) != "undefined"){
    var dt = onReceiveTime - abuff.ttrig[abuff.indtrace]
  }//IF trigger
  else{ dt = onReceiveTime} //no triggers yet

  if (trigDown){console.log('***** TRIGGERED DOWN ' + Math.round(dt) + ' ms')}
  
  abuff.t[abuff.currind] = dt;
  if (abuff.currind > 0){ abuff.dt[abuff.currind-1] = abuff.t[abuff.currind] - abuff.t[abuff.currind-1] }
  abuff.sa[abuff.currind] = currvals[0];
  abuff.ph[abuff.currind] = currvalp[0];

  abuff.trec[abuff.indrec] = dt;
  abuff.nrec[abuff.indrec] = currvalp.length;

  //---------- Update plot data (0:time  1:sc  2:photodiode)
  if (abuff.trigON){
    dataRunning.addRow([  abuff.t[abuff.currind],
                          abuff.sa[abuff.currind],
                          abuff.ph[abuff.currind]  ])

    if (abuff.ntrials >= 1){
      var prevind = abuff.indtrace - 1
      if (prevind < 0){prevind = abuff.ntraces-1};
      if (abuff.currind <= abuff.t_cum[prevind].length-1){
        dataCumulative.addRow([  abuff.t_cum[prevind][abuff.currind],
                               0,
                               abuff.ph_cum[prevind][abuff.currind] ])
      }
    } //IF

    abuff.currind++
    abuff.indrec++
  }
//--------- CURRENT ---------//


//--------- CUMULATIVE ---------//
  if (abuff.trigON){
    if (abuff.ph_cum.length < abuff.indtrace+1){
      abuff.t_cum[abuff.indtrace] = [];
      abuff.ph_cum[abuff.indtrace] = []
    }
    abuff.t_cum[abuff.indtrace][abuff.t_cum[abuff.indtrace].length] = dt
    abuff.ph_cum[abuff.indtrace][abuff.ph_cum[abuff.indtrace].length] = currvalp[0]
  }//IF triggered
//--------- CUMULATIVE ---------//

  if (trigDown){
    updatePlots()

    // //report first timepoint below threshold
    // var darkthresh = 250
    // var darkthresh = 300

    // const isLargeNumber = (element) => element < 260;
    // abuff.tdrop[abuff.tdrop.length] = Math.round(abuff.t[abuff.ph.findIndex(isLargeNumber)])
    // console.log('~~TDROP~> ' + abuff.tdrop + ' MS');
    // console.log('~~TDROP~> ' + abuff.tdrop[abuff.tdrop.length-1] + ' MS');

    // const isLargeNumber2 = (element) => element > 280;
    // abuff.tdrop2[abuff.tdrop2.length] = Math.round(abuff.t[abuff.ph.findIndex(isLargeNumber2)])
    // console.log('~~TRISE~> ' + abuff.tdrop2 + ' MS');
    // console.log('~~TRISE~> ' + abuff.tdrop2[abuff.tdrop.length-1] + ' MS');
  } //IF triggered down, then plot
}//FUNCTION onReceive

function updatePlots(){


//----- Sampling stats
var pipe = {dt: [], dur: 0, nsamples: 0, SR: 0}
for (var i=0; i<=abuff.trec.length-1; i++){
  if (i>0){
    pipe.dt[i-1] = abuff.trec[i] - abuff.trec[i-1]
  }
  pipe.nsamples = pipe.nsamples + abuff.nrec[i]
}
pipe.dur = abuff.trec[abuff.trec.length-1]
pipe.SR = pipe.nsamples/(pipe.dur)

console.log('SR=' + Math.round(abuff.ph.length / pipe.dur ) + ' kHz (pipe: ' + Math.round(pipe.SR) + ')');
console.log('ANALOG: dt=[' + Math.min(...abuff.dt) + ', ' + Math.max(...abuff.dt) + '] ms')
//----- Sampling stats

//----- Display stats
const isSmallNumber = (element) => element < 0.3*(Math.max(...abuff.ph) - Math.min(...abuff.ph)) + Math.min(...abuff.ph);
abuff.tdrop[abuff.ntrials] = Math.round(abuff.t[abuff.ph.findIndex(isSmallNumber)])

const isLargeNumber = (element) => element > 0.7*(Math.max(...abuff.ph) - Math.min(...abuff.ph)) + Math.min(...abuff.ph);
abuff.trise[abuff.ntrials] = Math.round(abuff.t[abuff.ph.findIndex(isLargeNumber)])
console.log('tRise~>' + abuff.trise[abuff.ntrials] + ', tDrop~>' + abuff.tdrop[abuff.ntrials] + ' ms');

var prevind = abuff.indtrace - 1
if (prevind < 0){prevind = abuff.ntraces-1};
if (abuff.ntrials>=1){

  var dt = 0.5; //milliseconds
  var tmax = abuff.t[abuff.ph.length-1];
  var npoints = Math.round(tmax/dt)
  var tinterp = [...Array(npoints).keys() ].map( i => i*dt);
  var xinterp = everpolate.linear(tinterp, abuff.t, abuff.ph);

  var tmax = abuff.t_cum[prevind][abuff.ph_cum[prevind].length-1];
  var npoints = Math.round(tmax/dt)
  var tinterp = [...Array(npoints).keys() ].map( i => i*dt);
  var yinterp = everpolate.linear(tinterp, abuff.t_cum[prevind], abuff.ph_cum[prevind]);

  try {
    r = pcorr(xinterp, yinterp);
    r = Math.round(r*100)/100
  } catch (error) {
    console.log('error computing correlation')    
  }
  console.log('Trial ' + abuff.ntrials + 'v' + (abuff.ntrials-1) + ' ' 
              + abuff.indtrace + 'v' + prevind
              + ' ---- dstart=' + Math.round(abuff.trise[abuff.ntrials] - abuff.trise[abuff.ntrials-1])
              + ' ddur=' + Math.round(abuff.t[abuff.ph.length-1] - abuff.t_cum[prevind][abuff.ph_cum[prevind].length-1])
              + ' r=' + r )
  abuff.corr[abuff.ntrials-1] = r;
}
//----- Display stats


//---------- Update plot
  // dataRunning.setValue(abuff.currind+1,0,dt)
  // dataRunning.setValue(abuff.currind+1,1,currvalp[0])
  // dataRunning.setValue(abuff.currind+1,2,currvals[0])

  cumulativeOptions.hAxis = {viewWindow: {min: 0, max: abuff.t[abuff.t.length-1]} }
  lineCumulative.draw(dataCumulative, google.charts.Line.convertOptions(cumulativeOptions));

  runningOptions.hAxis = {viewWindow: {min: 0, max: abuff.t[abuff.t.length-1]} }
  lineRunning.draw(dataRunning, google.charts.Line.convertOptions(runningOptions));

  dataRunning.removeRows(0,dataRunning.getNumberOfRows());
  dataCumulative.removeRows(0,dataCumulative.getNumberOfRows());

  abuff.lastdraw = performance.now();
}//FUNCTION updatePlot

async function readLoop(port) {
  try {
    let result = await port.device_.transferIn(5, 128); //(endpoint#,length)->requesting a 64 byte buffer
    port.onReceive(result.data); //calls TextDecoder to parse data
    readLoop(port);
  } catch (error) {
    port.onReceiveError(error);
  }
}//FUNCTION readLoop


function binTimeSeries(t,x,dt){
  var count = 0;
  var tbin = []
  var xbin = [];
  for (var tbin = 0; tbin <= Math.round(t[t.length-1]); tbin=tbin+dt){

  } //FOR i
} //FUNCTION binTimeSeries



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