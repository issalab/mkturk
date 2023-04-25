//============== VARIABLES ==============//
let usbport = {
  statustext_connect: '',
  statustext_sent: '',
  statustext_received: '',
  connected: false,

  USBDeviceType: '',
  USBDeviceName: '',
  arduinofilters: [
    { vendorId: 0x2341, productId: 0x8036 },
    { vendorId: 0x2341, productId: 0x8037 },
    { vendorId: 0x2341, productId: 0x804d },
    { vendorId: 0x2341, productId: 0x804e },
    { vendorId: 0x2341, productId: 0x804f },
    { vendorId: 0x2341, productId: 0x8050 },
  ],
  deviceind: -1
};
let serial = {};
let selectedDevice;
var eyebuffer = {
  accumulateEye: 0,
  maxbufferlength_HARDCODED: 17,
  buffer: '',
  numeyes_HARDCODED: 2,
  fail: 0,
  success: 0,
  dt: 0,
  tstart: 0,
  tlast: 0,
};
//============== (END) VARIABLES ==============//

onmessage = async function(event) {
let devices
switch(event.data.action) {
  case 'connect':
    devices = await navigator.usb.getDevices({ filters: usbport.arduinofilters });
    let ntaken = 0
    let deviceind = -1
    if (event.data.connections == null || typeof(event.data.connections) == 'undefined' || typeof(event.data.connections) == 'string'){
      event.data.connections = []
      for (let i=0; i<=devices.length-1; i++){
        event.data.connections[i] = [0]
      }
    }//IF empty, populate connections

    if (event.data.val == 'Reconnect'){
      //use existing usbport.deviceind
      if (usbport.deviceind >=0 ){
        deviceind = usbport.deviceind
      }
      else if(usbport.deviceind <0 && devices.length>=1){
        deviceind = 0
      }
      else{
        deviceind = -1;
      }
    }//IF Reconnect
    else{
      for (let i=devices.length-1; i>=0; i--){
        if (event.data.connections[i] == 0){
          deviceind = i
        }//if not connected
        else{
          ntaken++
        }
      }//FOR i devices  
    }//ELSE find an open device

    if (devices.length == 0 || deviceind < 0) {
      usbport.connected = false
    }//IF no available devices
    else {
      let ports = devices.map((device) => new serial.Port(device)); //return port
      usbport = ports[deviceind];
      usbport.deviceind = deviceind
      try {
        await usbport.connect();
      } catch (error) {
        if (event.data.val == 'AutoConnect'){
          event.ports[0].postMessage({error: e});
        }
        console.log(error);
      }
    }//ELSE
    usbport.statustext_connect = 'Worker -- USB DEVICE CONNECTED BY USER ACTION!';

    if (event.data.val == 'AutoConnect'){
      if (usbport.connected == 0){
        usbport.statustext_connect = 'Worker -- NO USB DEVICE automatically connected on page load'+
                                      ' found ' + devices.length + ' devices, ' + ntaken + ' already in use';
      }
      else {
        usbport.statustext_connect = 'Worker -- ' + event.data.val + 'ed ' + 'USB DEVICE ON PAGE LOAD!';
      }
      event.ports[0].postMessage(
        {message: 'USBConnect', val: usbport.statustext_connect,
         connected: usbport.connected, deviceind: usbport.deviceind});
    }
    else if (event.data.val == 'Reconnect'){
      usbport.statustext_connect = 'Worker -- RECONNECTED USB DEVICE!';
      this.postMessage({message: 'USBConnect', val: usbport.statustext_connect,
                        connected: usbport.connected, deviceind: usbport.deviceind})
    }
    break;
  
  case 'writepumpdurationtoUSB':
    usbport.writepumpdurationtoUSB(event.data.val)
    break;
  case 'writepumptopauseeyetoUSB':
    usbport.writepumptopauseeyetoUSB(event.data.val)
    break;
  case 'writeSampleCommandTriggertoUSB':
    usbport.writeSampleCommandTriggertoUSB(event.data.val)
    break;
  case 'writeTrialCodetoUSB':
    usbport.writeTrialCodetoUSB(event.data.val)
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

  postMessage({message: 'SerialPortConnect', devicetype: 'mi', devicename: 'ard'})
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

  usbport.statustext_connect = 'Worker -- Port USB DEVICE DISCONNECTED';
  let closeddeviceind = usbport.deviceind
  usbport.deviceind = -1
  postMessage({message: 'USBDisconnect', val: usbport.statustext_connect, closeddeviceind: closeddeviceind});
};//FUNCTION port.disconnect

//PORT - readLoop
async function readLoop(port) {
  try {
    let result = await port.device_.transferIn(5, 128); //(endpoint#,length)->requesting a 64 byte buffer
    port.onReceive(result.data); //calls TextDecoder to parse data
    readLoop(port);
  } catch (error) {
    port.onReceiveError(error);
  }
}//FUNCTION readLoop

//PORT - onReceive
serial.Port.prototype.onReceive = (data) => {
  let textDecoder = new TextDecoder();
  let onReceiveTime = Date.now();
  let textReceived = textDecoder.decode(data);
  usbport.statustext_received = textReceived;
  
  if (textReceived.includes('sa')) {
    postMessage({message: 'SampleCommandReturn', val: textReceived, time: onReceiveTime})
    return;
  }//IF "sa", samplecommand 

  //EYE
  if ( usbport.statustext_received.includes('///') ) {
    var dt = performance.now() - eyebuffer.tlast
    if (dt > 15){
      console.log('eyetracker >15ms dt=' + Math.round(dt) + 'ms, ' + usbport.statustext_received);
    }
    eyebuffer.tlast = performance.now();

    if (usbport.statustext_received.length > 20){
      usbport.statustext_received = usbport.statustext_received.slice(0,usbport.statustext_received.indexOf('}') + 1)
    }

    for (var q = 0; q <= usbport.statustext_received.length - 1; q++) {
      if (usbport.statustext_received[q] == '/') {
        var lastslash = q;
      }
    }//FOR q char

    //strip start characters (eg, '/') up front
    usbport.statustext_received = usbport.statustext_received.slice( lastslash + 1, usbport.statustext_received.length);
    eyebuffer.accumulateEye=3;
  }//IF '///'

  //RFID
  var tagstart = usbport.statustext_received.indexOf('{tag', 0);

  //=============== RFID ===============//
  if (tagstart >= 0) {
    //rfid: arduino sends whole tag at once
    var tagend = usbport.statustext_received.indexOf('}', 0);
    logEVENTS('RFIDTag',usbport.statustext_received.slice(tagstart + 4, tagend),'timeseries');
    postMessage({message: 'RFIDRead', val: usbport.statustext_received})
  }//IF RFID Tag

  //=============== EYE ===============//
  else if (eyebuffer.accumulateEye >= 3) {
    // eye: arduino sends one character at a time, but have to handle the case of receiving 2 characters
    eyebuffer.buffer = usbport.statustext_received; //accumulate ascii vals
    var n_character_close = 0;
    if ( usbport.statustext_received.indexOf('}') >= 0 &&
          eyebuffer.buffer.length >= eyebuffer.maxbufferlength_HARDCODED
    ) {
        n_character_close = 1;
        eyebuffer.buffer = eyebuffer.buffer.slice(0, eyebuffer.buffer.length - 1);
    } else if (
      usbport.statustext_received == '}/' &&
      eyebuffer.buffer.length == eyebuffer.maxbufferlength_HARDCODED - 1
    ) {
        n_character_close = 2;
        eyebuffer.buffer = eyebuffer.buffer.slice(0, eyebuffer.buffer.length - 2);
    }

    //=============== PARSED EYE (X,Y,D,A) ===============//
    if (n_character_close > 0) {
      var x = eyebuffer.buffer.slice(0, 4); //pupil x_center
      var y = eyebuffer.buffer.slice(4, 8); //pupil y_center
      var w = eyebuffer.buffer.slice(9, 12); //pupil diameter
      var a = eyebuffer.buffer.slice(13, 16); //pupil aspect ratio

      x = parseInt('0x' + x) / 32767; //Raw
      y = parseInt('0x' + y) / 32767; //Raw
      w = parseInt('0x' + w) / 32767; //Raw
      a = parseInt('0x' + a) / 32767; //Raw
      postMessage({message: 'EyeRead', 
                    x: x, y: y, w: w, a: a, numeyes: eyebuffer.numeyes_HARDCODED, time: onReceiveTime})

      eyebuffer.success = eyebuffer.success + 1;
      if (n_character_close == 1) {
        eyebuffer.buffer = '';
        eyebuffer.accumulateEye = 0;
      } else if (n_character_close == 2) {
        eyebuffer.buffer = '';
        eyebuffer.accumulateEye = 1;
      }
    }//IF found end character
    else if (eyebuffer.buffer.length >= eyebuffer.maxbufferlength_HARDCODED) {
      eyebuffer.fail = eyebuffer.fail + 1;
      eyebuffer.buffer = '';
      eyebuffer.accumulateEye = 0;
    }//ELSE didn't receive end character, failed to parse eye data

    //DISPLAY STATS FOR EYE DATASTREAM
    if (eyebuffer.fail + eyebuffer.success >= 900) {
      eyedataratestr =
        '<font color=green>' +
        'EYE: Success=' +
            Math.round( (1000 * eyebuffer.success) / (eyebuffer.fail + eyebuffer.success)) / 10 + '%' +
        ' (dt_u = ' +
            Math.round( (10 * (performance.now() - eyebuffer.tstart)) /
                        (eyebuffer.success + eyebuffer.fail) )/10 +
        ' ms)' + '</font>';

      usbport.statustext_received = eyedataratestr;
      postMessage({message: 'EyeSuccessRate', val: eyedataratestr})
      eyebuffer.fail = 0;
      eyebuffer.success = 0;
      eyebuffer.dt = 0;
      eyebuffer.tstart = performance.now();
    }//IF display eye stats
  }//IF EYE

  //=============== NOT RFID/EYE ===============//
  else {
    // postMessage({ message: 'OtherRead', val: usbport.statustext_received })
  }//ELSE not RFID or EYE
}//FUNCTION onReceive(data)

//PORT - onReceiveError
serial.Port.prototype.onReceiveError = (error) => { console.log(error); };

//PORT - transferOut
serial.Port.prototype.writepumpdurationtoUSB = async function (data) {
  let msgstr = '{' + data.toString() + '}'; // start(<), end(>) characters
  let textEncoder = new TextEncoder();
  await this.device_.transferOut(4, textEncoder.encode(msgstr));

  usbport.statustext_sent = 'Worker -- TRANSFERRED pump dur --> USB:' + msgstr;
  postMessage({message: 'SerialPortWrite', val: usbport.statustext_sent})
};//port.writepumpdurationUSB

//PORT - pause eyetracker
serial.Port.prototype.writepumptopauseeyetoUSB = async function (data) {
  let msgstr = '{' + data + '}'; // start(<), end(>) characters
  let textEncoder = new TextEncoder();
  await this.device_.transferOut(4, textEncoder.encode(msgstr));

  if (data == '|'){
    usbport.statustext_sent = 'Worker -- TRANSFERRED pause eye --> USB:' + msgstr;
  }
  else if (data == '~'){
    usbport.statustext_sent = 'Worker -- TRANSFERRED unpause eye --> USB:' + msgstr;
  }
  postMessage({message: 'SerialPortWrite', val: usbport.statustext_sent})
};//port.writepumptopauseeyetoUSB

//PORT - transferOut sample command to external devices (eg, Camera)
serial.Port.prototype.writeSampleCommandTriggertoUSB = async function (data) {
  let msgstr = '$' + data.toString() + '%'; // start($), end(%) characters
  let textEncoder = new TextEncoder();

  await this.device_.transferOut(4, textEncoder.encode(msgstr)); //SANITY CHECK what the 4 is

  usbport.statustext_sent = 'Worker -- TRANSFERRED SampleCommandSignal --> USB:' + msgstr;
  postMessage({message: 'SerialPortWrite', val: usbport.statustext_sent})
};//port.writeSampleCommandTriggertoUSB

//PORT - transferOut - write each digit of trial num
serial.Port.prototype.writeTrialCodetoUSB = async function (data) {
  let msgstr = '@' + data.toString() + '#'; // start(@), end(%) characters
  let textEncoder = new TextEncoder();

  await this.device_.transferOut(4, textEncoder.encode(msgstr)); //SANITY CHECK what the 4 is

  usbport.statustext_sent = 'Worker -- TRANSFERRED Trial# --> USB:' + msgstr;
  // postMessage({message: 'SerialPortWrite', val: usbport.statustext_sent})
};//port.writeTrialcodetoUSB

navigator.usb.onconnect = function (device) {
  if (typeof usbport.connected == 'undefined' || usbport.connected == false) {
    usbport.statustext_connect = 'Worker -- New USB device connection detected...';
    console.log(usbport.statustext_connect);
    let event = {data: {action: 'connect',val: 'Reconnect'}}
    onmessage(event)
  }//IF port !connected
};//FUNCTION navigator.usb.onconnect

navigator.usb.ondisconnect = function (device) {
  // USB device disconnected
  usbport.connected = false;
  usbport.statustext_connect = 'Worker -- Navigator USB DEVICE DISCONNECTED';

  let closeddeviceind = usbport.deviceind
  usbport.deviceind = -1
  postMessage({message: 'USBDisconnect', val: usbport.statustext_connect, closeddeviceind: closeddeviceind});
};//FUNCTION navigator.usb.ondisconnect