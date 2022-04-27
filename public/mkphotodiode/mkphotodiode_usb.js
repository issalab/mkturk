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

  //current
  t: [], ph: [], sa: [], currind: 0, dt: [], prev_sa: 0,

  //cumulative
  t_cum: [], ph_cum: [],
  ntraces: 2,

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

//---- Parse Arduino Data
  var nt = textReceived.split('t').length - 1;
  var ns = textReceived.split('s').length - 1;
  var np = textReceived.split('p').length - 1;

  if (nt != ns || ns != np){
    return; //incomplete sample
  }

  var cnt = 0;
  var indt = [];
  var inds = [];
  var indp = [];
  for (i=0; i<=textReceived.length-1; i++){
    if (textReceived[i] == 't'){
      indt.push(i)
    }
    if (textReceived[i] == 's'){
      inds.push(i)
    }
    if (textReceived[i] == 'p'){
      indp.push(i)
    }
  }//FOR i characters

  var currvalt
  var currvals
  var currvalp
  for (i=0; i<=indt.length-1; i++){
  }//FOR i values
//---- Parse Arduino Data

for (var s=0; s<=indt.length-1; s++){
  currvalt = Number(textReceived.slice(indt[s]+1,inds[s]))/1000 //microsec -> millisec
  currvals = Number(textReceived.slice(inds[s]+1,indp[s]))
  if (s <= indt.length-2){
    currvalp = Number(textReceived.slice(indp[s]+1,indt[s+1]))
  }
  else{
   currvalp = Number(textReceived.slice(indp[s]+1,textReceived.length))
  }
  if (currvalp == NaN){
    console.log(textReceived)
  }

//--------- TRIGGER ---------//
  var trigDown = 0;
  if (currvals == 1 && abuff.prev_sa == 0){
    //TRIGGERED UP -- start new trace
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
    //TRIGGERED DOWN
    abuff.trigON = 0; //stop storing until next trigger
  }//IF trigger OFF
  abuff.prev_sa = currvals
//--------- TRIGGER ---------//

//--------- CURRENT ---------//
  var dt=currvalt;
  if (typeof(abuff.ttrig[abuff.indtrace]) != "undefined"){
    var dtpipe = onReceiveTime - abuff.ttrig[abuff.indtrace]
  }//IF trigger
  else{ var dtpipe = onReceiveTime} //no triggers yet

  if (trigDown){console.log('***** TRIGGERED DOWN ' + Math.round(dt) + ' ms')}
  
  abuff.t[abuff.currind] = dt;
  if (abuff.currind > 0){ abuff.dt[abuff.currind-1] = abuff.t[abuff.currind] - abuff.t[abuff.currind-1] }
  abuff.sa[abuff.currind] = currvals;
  abuff.ph[abuff.currind] = currvalp;

  abuff.trec[abuff.currind] = dtpipe;

  //---------- Update plot data (0:time  1:sc  2:photodiode)
  if (abuff.trigON){
    if (abuff.ntrials >= 1){
      var prevind = abuff.indtrace - 1
      if (prevind < 0){ prevind = abuff.ntraces-1 };
      var yprev = everpolate.linear(abuff.t[abuff.currind], abuff.t_cum[prevind], abuff.ph_cum[prevind]);
      yprev = yprev[0]
    }
    else{
      var yprev = null;
    }

    dataRunning.addRow([  abuff.t[abuff.currind],
                          yprev,
                          abuff.ph[abuff.currind] ])
    abuff.currind++
  }
//--------- CURRENT ---------//


//--------- CUMULATIVE ---------//
  if (abuff.trigON){
    if (abuff.ph_cum.length < abuff.indtrace+1){
      abuff.t_cum[abuff.indtrace] = [];
      abuff.ph_cum[abuff.indtrace] = []
    }
    abuff.t_cum[abuff.indtrace][abuff.t_cum[abuff.indtrace].length] = dt
    abuff.ph_cum[abuff.indtrace][abuff.ph_cum[abuff.indtrace].length] = currvalp
  }//IF triggered
//--------- CUMULATIVE ---------//

  if (trigDown){
    updatePlots()
  } //IF triggered down, then plot
}//FOR s samples
}//FUNCTION onReceive

function updatePlots(){
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
          'MkPhotodiode &nbsp&nbsp' + 
          '<font color=green>Trial ' + abuff.ntrials + '&nbsp&nbsp</font>' + 
          "<font size=-1>" + Math.round(100*abuff.ph.length / pipe.dur )/100 + ' kHz ' +
          '(pipe: ' + Math.round(pipe.SR*100)/100 + ') </font>'
//----- Sampling stats

//----- Display stats
  const isSmallNumber = (element) => element < 0.3*(Math.max(...abuff.ph) - Math.min(...abuff.ph)) + Math.min(...abuff.ph);
  abuff.tdrop[abuff.ntrials] = Math.round(abuff.t[abuff.ph.findIndex(isSmallNumber)])

  const isLargeNumber = (element) => element > 0.7*(Math.max(...abuff.ph) - Math.min(...abuff.ph)) + Math.min(...abuff.ph);
  abuff.trise[abuff.ntrials] = Math.round(abuff.t[abuff.ph.findIndex(isLargeNumber)])
  console.log('tRise~>' + abuff.trise[abuff.ntrials] + ', tDrop~>' + abuff.tdrop[abuff.ntrials] + ' ms');

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
    abuff.corr[abuff.ntrials-1] = r;

    console.log('Trial ' + abuff.ntrials + 'v' + (abuff.ntrials-1) + ' ' 
                + abuff.indtrace + 'v' + prevind
                + ' ---- dstart=' + Math.round(abuff.trise[abuff.ntrials] - abuff.trise[abuff.ntrials-1])
                + ' ddur=' + Math.round(abuff.t[abuff.ph.length-1] - abuff.t_cum[prevind][abuff.ph_cum[prevind].length-1])
                + ' r=' + r )

    //Update displaystat chip
    var str = '<font size=+2>' + 'rise,fall,dur ' +
          '<font color=green><b>' +
          Math.round(abuff.trise[abuff.ntrials]) + ', ' + //rise
          Math.round(abuff.tdrop[abuff.ntrials]) + ', ' + //fall
          Math.round(abuff.t[abuff.ph.length-1]) + '</font></b> &nbsp(' + //dur
          Math.round(abuff.trise[abuff.ntrials] - abuff.trise[abuff.ntrials-1]) + ', ' + //drise
          Math.round(abuff.tdrop[abuff.ntrials] - abuff.tdrop[abuff.ntrials-1]) + ', ' + //dfall
          Math.round(abuff.t[abuff.ph.length-1] - abuff.t_cum[prevind][abuff.ph_cum[prevind].length-1]) + ') ms' + //ddur
          '  ______  r=' + r + '</font>'; //correlation
    document.getElementById("displaystatschip").innerHTML = str;
  }//IF >1 trial
//----- Display stats

  runningOptions.hAxis = {viewWindow: {min: 0, max: tinterp[tinterp.length-1]} }
  lineRunning.draw(dataRunning, google.charts.Line.convertOptions(runningOptions));
  dataRunning.removeRows(0,dataRunning.getNumberOfRows());

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