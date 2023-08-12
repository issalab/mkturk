var port = {
  statustext_connect: '',
  statustext_sent: '',
  statustext_received: '',
  connected: false,

  USBDeviceType: '',
  USBDeviceName: '',
};

let usbDeviceWorker = new Worker('mkturk_usbworker.js');

async function usbAutoConnectPromise(){
  return new Promise((res, rej) => {
    const channel = new MessageChannel(); 

    channel.port1.onmessage = ({data}) => {
      if (data.connected == true){
        port.connected = true
        localStorage.setItem('ConnectUSB', 1);
        hideHardwareButton()
      }
      else { port.connected = false }
      port.statustext_connect = data.val
      updateHeadsUpDisplayDevices();
  
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

//Update upon message output from the device
usbDeviceWorker.onmessage = function(event) {
  if (event.data.message == 'USBDisconnect'){
    port.connected = false
    FLAGS.runPump = 0;
    showHardwareButton()

    console.log(event.data.val);
    port.statustext_connect = event.data.val
    updateHeadsUpDisplayDevices();
    return
  }//IF disconnected usb
  
  if (event.data.message == 'USBConnect'){
    port.connected = true
    localStorage.setItem('ConnectUSB', 1);
    hideHardwareButton()

    console.log(event.data.val);
    port.statustext_connect = event.data.val
    updateHeadsUpDisplayDevices();
    return
  }//IF connected usb

  if (event.data.message == 'SerialPortConnect'){
    port.connected = true
    ENV.USBDeviceType = event.data.devicetype;//XX
    ENV.USBDeviceName = event.data.devicename;
    return
  }//IF serialportconnect

  if (event.data.message == 'EyeRead'){
    ENV.Eye.TrackEye = 1;
    let x = event.data.x
    let y = event.data.y
    let w = event.data.w
    let a = event.data.a
    let numeyes = event.data.numeyes
    let timestamp = event.data.time

    if (ENV.Eye.CalibXTransform.length > 0) {
      var xy = applyLinearTransform(x,y,ENV.Eye.CalibXTransform,ENV.Eye.CalibYTransform); //Calibrated
    }
    else {
      xy = ['null', 'null'];
      console.log('recording null eye values')
    }
return
    // STORE calibrated eye signal
    logEVENTS('EyeData',[ numeyes,xy[0],xy[1],w,a,null,null,null,null ],'timeseries',timestamp);

    if (ENV.Eye.TrackEye > 0 && FLAGS.touchGeneratorCreated == 1) {
      //Send calibrated signal, convert from eye coordinates to tablet coordinates

      // DISPLAY median filtered calibrated eye signal
      //EVENTS[idx] -- 3:X 4:Y 5:Diameter 6:Aspect
      var eyedatalen = Object.keys(EVENTS['timeseries']['EyeData']).length;
      if (eyedatalen >= 4) {
        var X_mdn = math.median([
          EVENTS['timeseries']['EyeData'][eyedatalen - 4][3],
          EVENTS['timeseries']['EyeData'][eyedatalen - 3][3],
          EVENTS['timeseries']['EyeData'][eyedatalen - 2][3],
          EVENTS['timeseries']['EyeData'][eyedatalen - 1][3],
        ]);

        var Y_mdn = math.median([
          EVENTS['timeseries']['EyeData'][eyedatalen - 4][4],
          EVENTS['timeseries']['EyeData'][eyedatalen - 3][4],
          EVENTS['timeseries']['EyeData'][eyedatalen - 2][4],
          EVENTS['timeseries']['EyeData'][eyedatalen - 1][4],
        ]);

        xy[0] = X_mdn;
        xy[1] = Y_mdn;
      } //compute median

      var event_xytt = {
        x_val: xy[0],
        y_val: xy[1],
        time: Date.now(),
        type: 'eye',
      };
      waitforEvent.next(event_xytt); //send to hold_promise generator
    }//IF TrackEye
    return
  }//IF EyeRead

  if (event.data.message == 'EyeSuccessRate'){
    console.log(event.data.val);
    eyedataratestr = event.data.val
    if (FLAGS.savedata == 0) {
      updateImageLoadingAndDisplayText('');
    }
    return
  }//IF EyeSuccessRate

  if (event.data.message == 'OtherRead'){
    console.log(event.data.val);
    port.statustext_received = event.data.val
    updateHeadsUpDisplayDevices()
    return
  }//IF OtherRead

  if (event.data.message == 'RFIDRead'){
    var tagend = event.data.val.indexOf('}', 0);
    logEVENTS('RFIDTag',event.data.val.slice(tagstart + 4, tagend),'timeseries');

    var nrfid = Object.keys(EVENTS['timeseries']['RFIDTag']).length;
    if (nrfid >= 2) {
      var dt =
        new Date(EVENTS['timeseries']['RFIDTag'][nrfid - 1][1]) -
        new Date(EVENTS['timeseries']['RFIDTag'][nrfid - 2][1]);
    }
    port.statustext_received = 
      'Parsed TAG ' + EVENTS['timeseries']['RFIDTag'][nrfid - 1][2] +
      ' @ ' + new Date().toLocaleTimeString('en-US') +
      ' dt=' + dt + 'ms';

    if (FLAGS.RFIDGeneratorCreated == 1) {
      var event = {
        tag: EVENTS['timeseries']['RFIDTag'][nrfid - 1][2],
        time: EVENTS['timeseries']['RFIDTag'][nrfid - 1][1],
      };
      waitforRFIDEvent.next(event);
    }
    if (ENV.Subject == '') {
      queryRFIDTagonFirestore(EVENTS['timeseries']['RFIDTag'][nrfid - 1][2]);
    } //IF no subject chosen yet, auto-find in firestore based on their RFIDTag, which will then QuickLoad the page
    updateHeadsUpDisplayDevices();
    return 
  }//IF RFIDRead

  if (event.data.message == 'SampleCommandReturn'){
    if (event.data.val.includes('1')){
      logEVENTS('SampleCommandReturnTime',event.data.time - ENV.CurrentDate.valueOf(),'trialseries');
    }
    else if (event.data.val.includes('0')){
      logEVENTS('SampleCommandOffReturnTime',event.data.time - ENV.CurrentDate.valueOf(),'trialseries');
    }
    return
  }//IF SampleCommandReturn

  if (event.data.message == 'SerialPortWrite'){
    console.log(event.data.val)
    port.statustext_sent = event.data.val
    updateHeadsUpDisplayDevices()
    return
  }//IF SerialPortWrite
};//FUNCTION usbDeviceWorker.onmessage

function hideHardwareButton(){
  //Hide manual connect button upon successful connect
  document.querySelector('button[id=connectusb]').style.display = 'none';
}//FUNCTION hideHardwareButton

function showHardwareButton(){
  // Expose button in case need to manually reconnect
  // (note: navigator.usb.onconnect doesn't seem to work on all chrome for android)
  document.querySelector('button[id=connectusb]').style.display = 'block';
  document.querySelector('button[id=connectusb]').style.visibility = 'visible';
  document.querySelector('button[id=connectusb]').style.top = '5%';
}//FUNCTION showHardwareButton