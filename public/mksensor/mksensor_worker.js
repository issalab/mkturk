//============== VARIABLES ==============//
let port = {
    statustext_connect: '',
    statustext_sent: '',
    statustext_received: '',
    connected: false,
  
    USBDeviceType: '',
    USBDeviceName: ''
  };
let serial = {};

let selectedDevice;

let abuff = {
  //receives over webusb pipe
  trec: [],

  //current
  t0: 0, t: [], ph: [], sa: [], currind: 0, dt: [], prev_sa: 0,

  //cumulative
  t_cum: [], ph_cum: [], ntraces: 2,
  ttrig: [], trigON: 0, indtrace: -1,
  ntrials: -1,

  lastreceive: performance.now(),
  lastdraw: performance.now(),
  manualtriggerval: 0,
  manualtriggertime: 0,
};
//============== (END) VARIABLES ==============//

onmessage = async function(event) {
  let devices
  switch(event.data.action) {
    // Open the device specified with vendorId and productId.
    case 'get-device':
      devices = await navigator.usb.getDevices();
      for (let device of devices) {
        if (device.vendorId === event.data.vendorId
            && device.productId === event.data.productId) {
          selectedDevice = device;
          port = new serial.Port(selectedDevice); //return port
          await port.connect();
          port.statustext_connect = 'USB DEVICE CONNECTED BY USER ACTION!';
          console.log(port.statustext_connect);
          postMessage(port.statustext_connect);
          break;
        }//IF
      }//FOR        
      break;

    case 'reconnect':
      devices = await navigator.usb.getDevices();
      let ports = devices.map((device) => new serial.Port(device)); //return port

      if (ports.length == 0) {
        port.statustext_connect = 'NO USB DEVICE automatically found on page load';
        console.log(port.statustext_connect);
      }
      else {
        var statustext = '';
        if (event.data.action == 'AutoConnect') {
          statustext = 'AUTO-CONNECTED USB DEVICE ON PAGE LOAD!';
        }//IF AutoConnect
        else if (event.data.action == 'reconnect') {
          statustext = 'RECONNECTED USB DEVICE!';
        }//IF reconnect
        port = ports[0];
        try {
          await port.connect();
        } catch (error) {
          console.log(error);
        }
      }//ELSE
      port.statustext_connect = statustext;
      console.log(port.statustext_connect);
      this.postMessage(port.statustext_connect)
      break;
        
    // Read data from the opened device and send to the page.
    case 'read-device':
      try {
        await selectedDevice.selectConfiguration(1);
        await selectedDevice.claimInterface(2);
        await selectedDevice.controlTransferOut({
          requestType: 'class',
          recipient: 'interface',
          request: 0x22,
          value: 0x01,
          index: 0x02
        });
        let result = await selectedDevice.transferIn(5, 64);
        let decoder = new TextDecoder();
        postMessage(decoder.decode(result.data));
      } catch(error) {
        postMessage(error);
      }
      break;
    case 'toggleTrigger':
      abuff.manutaltriggerval = event.data.val
      break;
  }//SWITCH event.data.action
}//onmessage

//PORT - attach device(s)
serial.Port = function (device) { this.device_ = device;};

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
};//port.connect

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

  port.statustext_connect = 'Port USB DEVICE DISCONNECTED';
  postMessage(port.statustext_connect);
};//FUNCTION port.disconnect

async function readLoop(port) {
try {
  // console.time('sample')
  let result = await port.device_.transferIn(5, 128); //(endpoint#,length)->requesting a 64 byte buffer
    port.onReceive(result.data); //calls TextDecoder to parse data
    // console.timeEnd('sample')
    readLoop(port);
} catch (error) {
    port.onReceiveError(error);
}
}//FUNCTION readLoop

//PORT - onReceive
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
    if (abuff.manualtriggerval == 2){
      currvals = 1; //overrided with manual triggering
    }

    if (s <= indt.length-2){
      currvalp = Number(textReceived.slice(indp[s]+1,indt[s+1]))
    }
    else{
    currvalp = Number(textReceived.slice(indp[s]+1,textReceived.length))
    }
    if (currvalp == NaN || currvals == NaN){
      console.log(textReceived)

      //BigQuery prefers null over NaN
      if (currvalp == NaN){ currvalp = null }
      if (currvals == NaN){ currvals = null }
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
      abuff.t0 = Date.now()

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
    if (abuff.manualtriggerval==0){
      var dt=currvalt;  
    }//IF zeroed on arduino already
    else{
      if (abuff.currind == 0){
        abuff.manualtriggertime = currvalt;
      }
      var dt = currvalt - abuff.manualtriggertime; 
    }//ELSE manualtrigger, zero arduino time
    
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
    // if (abuff.trigON && abuff.plotdata == 1){
    //   if (abuff.ntrials >= 1){
    //     var prevind = abuff.indtrace - 1
    //     if (prevind < 0){ prevind = abuff.ntraces-1 };
    //     var yprev = everpolate.linear(abuff.t[abuff.currind], abuff.t_cum[prevind], abuff.ph_cum[prevind]);
    //     yprev = yprev[0]
    //   }
    //   else{
    //     var yprev = null;
    //   }

    //   if (abuff.manualtriggerval > 0){
    //     var yprev = abuff.ph[abuff.currind];
    //   }
    // }//IF not saving data, then plot

    if (abuff.trigON){
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
      abuff.manualtriggerval = 0;

      // saveTrialData()
      // updatePlots()

      postMessage({action: "zeroTrigger", val: 0})
      postMessage({action: "plotTrial", val: abuff});
      abuff.lastdraw = performance.now();
    }//IF triggered down, then plot
  }//FOR s samples
}//FUNCTION onReceive(data)

//PORT - onReceiveError
serial.Port.prototype.onReceiveError = (error) => {
  console.log(error);
};

navigator.usb.onconnect = function (device) {
  if (typeof port.connected == 'undefined' || port.connected == false) {
    port.statustext_connect = 'New USB device connection detected...';
    console.log(port.statustext_connect);
    let event = {'data': {'action': 'reconnect'}}
    onmessage(event)
  }//IF port !connected
};//FUNCTION navigator.usb.onconnect

navigator.usb.ondisconnect = function (device) {
  // USB device disconnected
  port.connected = false;
  port.statustext_connect = 'Navigator USB DEVICE DISCONNECTED';
  postMessage(port.statustext_connect)
};//FUNCTION navigator.usb.ondisconnect