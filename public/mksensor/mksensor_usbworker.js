//============== VARIABLES ==============//
let usbport = {
    statustext_connect: '',
    statustext_sent: '',
    statustext_received: '',
  
    USBDeviceType: '',
    USBDeviceName: ''
  };
var arduinofilters = [
  { vendorId: 0x2341, productId: 0x8036 },
  { vendorId: 0x2341, productId: 0x8037 },
  { vendorId: 0x2341, productId: 0x804d },
  { vendorId: 0x2341, productId: 0x804e },
  { vendorId: 0x2341, productId: 0x804f },
  { vendorId: 0x2341, productId: 0x8050 },
]

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
let dbuff = {
  sa: {t: [], x: []},
  ex: {t: [], x: []},
}
let pulse = {
  sa: {onset: [], offset: [], type: [], trial: -1,filecode: [-1], mktrial: [], mkblock: [], mkfilecode: [],},
  ex: {onset: [], offset: [], type: [], trial: -1,filecode: [-1], mktrial: [], mkblock: [], mkfilecode: [],},
}
let mkturkMeta = { trial: -1, block: -1, filecode: -1, }
var activedevices = [];
var usbstatus = {connected: 0, makeconnection: 0, deviceind: -1}
//============== (END) VARIABLES ==============//

//============== BROADCAST CHANNEL ==============//
var bc = new BroadcastChannel("mkturk.com");
bc.onmessage = (event) => {
  // console.log('BROADCAST: ' + event.data)
  if (event.data == 'send me your device states'){
    bc.postMessage(usbstatus.deviceind)
  }
  else if (event.data >= 0){
    activedevices[event.data] = performance.now()
  }//IF last time device was active needs to be updated
}//broadcast.onmessage callback
bc.postMessage('send me your device states')

function pingBroadcast(){
	if ( typeof(broadcastTimer) != "undefined"){
    bc.postMessage(usbstatus.deviceind)
  }//if timer expired & new data added
	broadcastTimer = setTimeout(function(){ clearTimeout(broadcastTimer); pingBroadcast() },2000)
}//FUNCTION pingBroadcast
//============== (END) BROADCAST CHANNEL ==============//

onmessage = async function(event) {
  let devices
  console.log(event.data.action + ', ' + event.data.val)
  switch(event.data.action) {
    case 'connect':
      devices = await navigator.usb.getDevices({ filters: arduinofilters });
      let ntaken = 0
      usbstatus.deviceind = -1
      for (let i=devices.length-1; i>=0; i--){
        if (typeof(activedevices[i]) == 'undefined' || performance.now() - activedevices[i] > 2500){
          usbstatus.deviceind = i
          console.log('Will take device' + usbstatus.deviceind)
        }//if no recent broadcast from a tab using this device
        else{
          ntaken++
          console.log('Device' + i + ' already in use')
        }
      }//FOR i devices, find an inactive device that is open
  
      if (devices.length == 0 || usbstatus.deviceind < 0) {
        usbstatus.connected = 0
        usbstatus.deviceind = -1
      }//IF no available devices
      else {
        let ports = devices.map((device) => new serial.Port(device)); //return port
        usbport = ports[usbstatus.deviceind];
        try {
          usbstatus.makeconnection = 1
          await usbport.connect();
          usbstatus.connected = 1
          usbstatus.makeconnection = 0
        } catch (error) {
          if (event.data.val == 'AutoConnect'){
            event.ports[0].postMessage({error: e});
          }
          console.log(error);
        }//catch(error)
      }//ELSE
      usbport.statustext_connect = 'USB Worker -- USB DEVICE CONNECTED BY USER ACTION!';
  
      if (event.data.val == 'AutoConnect'){
        if (usbstatus.connected == 0){
          usbport.statustext_connect = 'Worker -- NO USB DEVICE automatically connected on page load'+
                                        ' found ' + devices.length + ' devices, ' + ntaken + ' already in use';
        }
        else if (usbstatus.connected == 1) {
          usbport.statustext_connect = 'Worker -- ' + event.data.val + 'ed ' + 'USB DEVICE ON PAGE LOAD!';
        }
        event.ports[0].postMessage({message: 'USBConnect', val: usbport.statustext_connect,connected: usbstatus.connected});
      }//IF AutoConnect
      else if (event.data.val == 'Reconnect'){
        usbport.statustext_connect = 'Worker -- RECONNECTED USB DEVICE!';
        this.postMessage({message: 'USBConnect', val: usbport.statustext_connect,connected: usbstatus.connected})
      }
      console.log(usbstatus.connected + ', ' + usbstatus.deviceind + ', ' + activedevices)
      break;

    case 'toggleTrigger':
      abuff.manutaltriggerval = event.data.val
      break;
    
    case 'updateMkTurkMeta':
      mkturkMeta.trial = event.data.val.trial
      mkturkMeta.block = event.data.val.block
      mkturkMeta.filecode = event.data.val.filecode
      break;
  }//SWITCH event.data.action
}//onmessage

//PORT - attach device(s)
serial.Port = function (device) { this.device_ = device;};

//PORT - connect
serial.Port.prototype.connect = async function () {
  if (usbstatus.makeconnection == 0){
    return
  } //IF already connected to a device, don't connect to this new one

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
  pingBroadcast();
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
  usbstatus.deviceind = -1
  postMessage({message: 'USBDisconnect', val: usbport.statustext_connect});
};//FUNCTION port.disconnect

async function readLoop(port) {
try {
  // console.time('sample')
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
  let onReceiveTime = performance.now();
  let textReceived = textDecoder.decode(data);
  usbport.statustext_received = textReceived;
//---- Parse Arduino Data
  var nt = textReceived.split('t').length - 1;
  var ns = textReceived.split('s').length - 1;
  var ne = textReceived.split('e').length - 1;
  var np = textReceived.split('p').length - 1;

  if (nt != ns || ns != ne || ne != np){
    console.log('FAILURE --> ' + usbport.statustext_received)
    return; //incomplete sample
  }

  var indt = [];
  var inds = [];
  var inde = [];
  var indp = [];
  for (i=0; i<=textReceived.length-1; i++){
    if (textReceived[i] == 't'){indt.push(i)}
    if (textReceived[i] == 's'){inds.push(i)}
    if (textReceived[i] == 'e'){inde.push(i)}
    if (textReceived[i] == 'p'){indp.push(i)}
  }//FOR i characters

  var currvalt
  var currvals
  var currvalp
  var currvale
//---- (END) Parse Arduino Data

  for (var s=0; s<=indt.length-1; s++){
    // currvalt = Number(textReceived.slice(indt[s]+1,inds[s]))/1000 //microsec -> millisec
    currvalt = performance.now();
    currvals = Number(textReceived.slice(inds[s]+1,inde[s]))
    if (abuff.manualtriggerval == 2){
      currvals = 1; //overrided with manual triggering
    }
    currvale = Number(textReceived.slice(inde[s]+1,indp[s]))

    if (s <= indt.length-2){
      currvalp = Number(textReceived.slice(indp[s]+1,indt[s+1]))
    }
    else{
      currvalp = Number(textReceived.slice(indp[s]+1,textReceived.length))
    }
    if (currvalp == NaN || currvals == NaN || currvale == NaN){
      if (currvalp == NaN){ currvalp = null }
      if (currvals == NaN){ currvals = null }
      console.log(textReceived)
    }//IF NaN, BigQuery prefers null over NaN

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
      abuff.t0 = performance.now()

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
      var dt=currvalt - abuff.t0;  
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

    if (abuff.trigON){
      abuff.currind++
    }
  //--------- CURRENT ---------//

//--------- PULSE DETECTION ---------//
//--------- PULSE DETECTION ---------//
//--------- PULSE DETECTION ---------//
  // //Digital Buffer
  // dbuff.sa.t.push(currvalt)
  // dbuff.sa.x.push(currvals)
  // dbuff.ex.t.push(currvalt)
  // dbuff.ex.x.push(currvale)

  // let nsamples
  // let npulses

  // // //SAMPLE COMMAND
  // nsamples = dbuff.sa.x.length
  // if (nsamples>3){
  //   for (let i=nsamples-4; i>=0; i--){
  //     dbuff.sa.t.shift()
  //     dbuff.sa.x.shift()
  //     dbuff.ex.t.shift()
  //     dbuff.ex.x.shift()
  //   }
  // }//If accumulated >3, only keep 3

  // nsamples = dbuff.sa.x.length
  // if (nsamples >= 3){
  //   //WHEN GOES HIGH
  //   if (dbuff.sa.x[nsamples-1]==1 && dbuff.sa.x[nsamples-2]==1 && dbuff.sa.x[nsamples-3]==0){
  //     pulse.sa.mktrial.push(mkturkMeta.trial)
  //     pulse.sa.mkblock.push(mkturkMeta.block);
  //     pulse.sa.mkfilecode.push(mkturkMeta.filecode)
  //     pulse.sa.onset.push(dbuff.sa.t[ nsamples-2 ])
  //   }//IF 0,1,1 (triggered up), store current mkturk meta

  //   //WHEN GOES LOW
  //   npulses = pulse.sa.onset.length
  //   if (dbuff.sa.x[nsamples-1]==0 && dbuff.sa.x[nsamples-2]==0 && dbuff.sa.x[nsamples-3]==1){
  //     if (npulses > pulse.sa.offset.length){
  //       pulse.sa.offset.push(dbuff.sa.t[ nsamples-2 ])
  //       if (pulse.sa.onset[npulses-1] - pulse.sa.offset[npulses-2] < 120){
  //         pulse.sa.type[npulses-1] = 'f'
  //         pulse.sa.type[npulses-2] = 'f'
  //       }//IF filecode
  //       else{
  //         pulse.sa.type[npulses-1] = 't'
  //         // analyzePulses('sa')
  //       }//ELSE trigger    
  //     }//IF onset present
  //     else{
  //       //ignore because no preceding onset
  //     }
  //   }//IF 1,0,0 (triggered down), pulse completed
  // }//IF at least 3 samples

  //EXTERNAL SYNC

//--------- (END) PULSE DETECTION ---------//
//--------- (END) PULSE DETECTION ---------//
//--------- (END) PULSE DETECTION ---------//

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

      postMessage({message: "zeroTrigger", val: 0})
      postMessage({message: "plotTrial", val: abuff});
      //postMessage({action: "saveTrialData", val: XX})
      
      abuff.lastdraw = performance.now();
    }//IF triggered down, then plot
  }//FOR s samples
}//FUNCTION onReceive(data)

// function analyzePulses(inputLine){
//   let npulses = pulse[inputLine].onset.length

//   //Check if trigger preceded by filecode
//   if (npulses>=2 && x[inputLine].type[npulses-2] == 'f'){
//     let filecode = []
//     let indstart = -1
//     for (let i=npulses-2; i>=0; i--){
//       if (pulse[inputLine].type[i] == 'f'){
//         indstart = i
//         filecode.push(Math.round((pulse[inputLine].offset[i] - pulse[inputLine].onset[i])/10))
//       }
//       else {  break; }
//     }//for i pulses
//     pulse[inputLine].filecode = filecode.reverse()
//     pulse[inputLine].trial = -1;

//     // postMessage({
//     //   message: "trigger",
//     //   val: {trialnum: pulse[inputLine].trial,
//     //         tstart: pulse[inputLine.onset[indstart]],
//     //         tend: pulse[inputLine].offset[npulses-2],
//     //         filecode: pulse[inputLine].filecode,
//     //         mktrial: pulse[inputLine].mktrial[indstart],
//     //         mkblock: pulse[inputLine].mkblock[indstart], 
//     //         mkfilecode: pulse[inputLine].mkfilecode[indstart],
//     //     }//val
//     //   })//postMessage filecode
//   }//IF preceded by end of a filecode

//   dbuff[inputLine].t = []
//   dbuff[inputLine].x = []

//   pulse[inputLine].trial++
//   // postMessage({
//   //   message: "trigger",
//   //   val: {trialnum: pulse[inputLine].trial,
//   //         tstart: pulse[inputLine].onset[npulses-1],
//   //         tend: pulse[inputLine].offset[npulses-1],
//   //         filecode: pulse[inputLine].filecode,
//   //         mktrial: pulse[inputLine].mktrial[npulses-1],
//   //         mkblock: pulse[inputLine].mkblock[npulses-1], 
//   //         mkfilecode: pulse[inputLine].mkfilecode[npulses-1],
//   //     }//val
//   //   })//postMessage trial trigger
// }//FUNCTION analyzePulses(x,inputLine)

//PORT - onReceiveError
serial.Port.prototype.onReceiveError = (error) => {console.log(error);};

navigator.usb.onconnect = function (device) {
  if (usbstatus.connected == 0) {
    usbstatus.deviceind = -1
    usbport.statustext_connect = 'Worker -- New USB device connection detected...';
    let event = {data: {action: 'connect',val: 'Reconnect'}}
    onmessage(event)
  }//IF port !connected
};//FUNCTION navigator.usb.onconnect

navigator.usb.ondisconnect = function (device) {
  // USB device disconnected
  usbstatus.connected = 0;
  usbstatus.deviceind = -1
  usbport.statustext_connect = 'USB Worker -- Navigator USB DEVICE DISCONNECTED';

  console.log(' D I S C O N N E C T: usbstatus.connected = false !!!!')
  postMessage({message: 'USBDisconnect', val: usbport.statustext_connect});
};//FUNCTION navigator.usb.ondisconnect