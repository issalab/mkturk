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
  //running
  t: [], ph: [], sa: [], currind: 0,
  maxlen_ph: 3000, maxlen_sa: 3000,

  //cumulative triggered
  t_cum: [], sa_cum: [], ph_cum: [],
  ttrig: [], trigON: 0, indtrace: -1,
  ntraces: 10,

  drawinterval: 2000, //milliseconds
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

  if (abuff.currind_ph/1000 == Math.round(abuff.currind_ph/1000)){
    console.log( (onReceiveTime - abuff.lastreceive) + ': ' + textReceived)
  }
  abuff.lastreceive = onReceiveTime;

  // var nchar = (textReceived.match(/\,/g) || []).length;
  var ns = textReceived.split('s').length - 1;
  var np = textReceived.split('p').length - 1;
  if (textReceived.includes('s') && textReceived.includes('p') &&
     ns == 1 && np == 1){
    var inds = textReceived.indexOf('s',0);
    var indp = textReceived.indexOf('p',0);

    var currvals = textReceived.slice(inds+1,indp)
    var currvalp = textReceived.slice(indp+1,textReceived.length)
  }//IF received valid sample
  else{
    console.log('received incomplete sample: ' + port.statustext_received)
    return;
  }//ELSE incomplete sample

  //Check for trigger
  var prevval = abuff.sa[abuff.currind-1]
  if (currvals == 1 && typeof(prevval) != "undefined" && prevval == 0){
    abuff.trigON = 1
    abuff.indtrace++
    if (abuff.indtrace >= abuff.ntraces){
      abuff.indtrace = 0
    }//IF >ntraces, wrap back around

    //Delete any existing trace in that position in the stack
    abuff.t_cum[abuff.indtrace] = []
    abuff.ph_cum[abuff.indtrace] = []
    ttrig[abuff.indtrace] = onReceiveTime;
  }//IF received trigger
  else if (currvals == 0){
    abuff.trigON = 0; //stop storing until next trigger
  }//IF trigger OFF



  //SAMPLE COMMAND
  //---------- Running Sample Command timeseries




  abuff.t_sa[abuff.currind_sa] = onReceiveTime 
  abuff.sa[abuff.currind_sa] = currvals;

  abuff.currind_sa++
  if (abuff.currind_sa > abuff.maxlen_sa){
    abuff.currind_sa = 0;
  }//IF longer than max sequence length, wrap back around
  //----------

  //-------- Trigger
  if (currvals == 1 && typeof(prevval) != "undefined" && prevval == 0){
    abuff.trigON = 1
    abuff.indtrace++
    if (abuff.indtrace >= abuff.ntraces){
      abuff.indtrace = 0
    }//IF >ntraces, wrap back around

    //Delete any existing trace in that position in the stack
    abuff.t_ph_cum[abuff.indtrace] = []
    abuff.ph_cum[abuff.indtrace] = []

    abuff.ttrig[abuff.indtrace] = onReceiveTime
  }//IF trigger ON
  else if (currvals == 0){
    abuff.trigON = 0; //stop storing until next trigger
  }//IF trigger OFF


  //PHOTODIODE
  //---------- Running Photodiode timeseries
    abuff.t_ph[abuff.currind_ph] = onReceiveTime 
    abuff.ph[abuff.currind_ph] = currvalp

    abuff.currind_ph++
    if (abuff.currind_ph > abuff.maxlen_ph){
      abuff.currind_ph = 0;
    }//IF longer than max sequence length, wrap back around

    //Update plot data (0:time  1:sc  2:photodiode)
    dataRunning.setValue(abuff.currind_ph+1,0,onReceiveTime)
    dataRunning.setValue(abuff.currind_ph+1,1,currvalp)
    dataRunning.setValue(abuff.currind_sa+1,2,currvals)
  //----------

  //--------- Triggered Photodiode traces
  if (abuff.trigON){
    if (abuff.ph_cum.length < abuff.indtrace+1){
      abuff.t_ph_cum[abuff.indtrace] = [];
      abuff.ph_cum[abuff.indtrace] = []
    }
    abuff.t_ph_cum[abuff.indtrace][abuff.t_ph_cum[abuff.indtrace].length] = onReceiveTime - abuff.ttrig[abuff.indtrace]
    abuff.ph_cum[abuff.indtrace][abuff.ph_cum[abuff.indtrace].length] = currvals
  }//IF triggered
  //-----------

  //DRAW
  if (performance.now() - abuff.lastdraw > abuff.drawinterval && currvals == 0) {
    updatePlots();
  }//IF refresh plots
  else{
  }//ELSE don't update plots
}//FUNCTION onReceive

function updatePlots(){
    // lineCumulative.draw(dataCumulative, google.charts.Line.convertOptions(cumulativeOptions));
    lineRunning.draw(dataRunning, google.charts.Line.convertOptions(runningOptions));
    abuff.lastdraw = performance.now();  
    console.log("draw called")
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