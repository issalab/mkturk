var port={
  statustext_connect: "",
  statustext_sent: "",
  statustext_received: "",
  connected: false,
}
var serial = {}
var eyebuffer = { accumulateEye: 0, maxbufferlength_HARDCODED: 17, buffer: "", numeyes_HARDCODED: 2, 
				fail: 0, success: 0, dt: 0 , tstart: 0}

navigator.usb.onconnect = function(device){
	if (typeof(port.connected) == 'undefined' || port.connected == false){
		port.statustext_connect = "ATTEMPTING TO RECONNECT USB DEVICE..."
		console.log(port.statustext_connect)
		updateHeadsUpDisplayDevices()

		var event = {}
		event.type = 'Reconnect'
		findUSBDevice(event)
	}
};

// function autoconnectLoop(device){
// 	if (typeof(port.connected) == 'undefined' || port.connected == false){
// 		navigator.usb.onconnect(device)
// 		setTimeout(autoconnectLoop, 5000) //attempt to autoreconnect every 5 seconds
// 	}
// } //FUNCTION autoconnectLoop

navigator.usb.ondisconnect = function(device){
  // USB device disconnected
	port.connected = false
	port.statustext_connect = "USB DEVICE DISCONNECTED"
	FLAGS.runPump = 0
	console.log(port.statustext_connect)
	updateHeadsUpDisplayDevices()

	// Expose button in case need to manually reconnect (navigator.usb.onconnect doesn't seem to work on all chrome for android)
	document.querySelector("button[id=connectusb]").style.display = "block"
	document.querySelector("button[id=connectusb]").style.visibility = "visible"
	document.querySelector("button[id=connectusb]").style.top = "5%"

// 	// Attempt to auto-reconnect
// 	autoconnectLoop(device)
};


// STEP 0: Port Initialization - Open (instantiate) port before assigning callbacks to it
async function findUSBDevice(event){
	// STEP 1A: Auto-Select first port
	if (event.type == "AutoConnect" || 
		event.type == "Reconnect"){
// 		ports = await getPorts()
		//STEP 1A: GetPorts - Automatic at initialization
		// -Enumerate all attached devices
		// -Check for permission based on vendorID & productID
		devices = await navigator.usb.getDevices()
		ports = devices.map(device => new serial.Port(device)); //return port

		if (ports.length == 0) {
			port.statustext_connect = "NO USB DEVICE automatically found on page load"
			console.log(port.statustext_connect)
			updateHeadsUpDisplayDevices()
		}
		else {
			var statustext = ""
			if (event.type == "AutoConnect"){
				statustext = "AUTO-CONNECTED USB DEVICE ON PAGE LOAD!"
			}
			else if (event.type == "Reconnect"){
				statustext = "RECONNECTED USB DEVICE!"
			}
			port = ports[0];
			try{
				await port.connect()				
			}
			catch (error){
				console.log(error)
			}
			port.statustext_connect = statustext
			console.log(port.statustext_connect)
			updateHeadsUpDisplayDevices()
			localStorage.setItem("ConnectUSB",1)

			//Hide manual connect button upon successful connect
			document.querySelector("button[id=connectusb]").style.display = "none"
		}
	}

	// STEP 1B: User connects to Port
	if (event.type == "pointerup" || event.type == "touchend" || event.type == "mouseup"){
		event.preventDefault(); //prevents additional downstream call of click listener
		try{
			//STEP 1B: RequestPorts - User based
			// -Get device list based on Arduino filter
			// -Look for user activation to select device
			const filters = [
			  { 'vendorId': 0x2341, 'productId': 0x8036 },
			  { 'vendorId': 0x2341, 'productId': 0x8037 },
			  { 'vendorId': 0x2341, 'productId': 0x804d },
			  { 'vendorId': 0x2341, 'productId': 0x804e },
			  { 'vendorId': 0x2341, 'productId': 0x804f },
			  { 'vendorId': 0x2341, 'productId': 0x8050 },
			];

			device = await navigator.usb.requestDevice({ 'filters': filters })
			port = new serial.Port(device) //return port

			await port.connect()

		  	port.statustext_connect = "USB DEVICE CONNECTED BY USER ACTION!"
		  	console.log(port.statustext_connect)
			updateHeadsUpDisplayDevices()
			localStorage.setItem("ConnectUSB",1)

			//Hide manual connect button upon successful connect
			document.querySelector("button[id=connectusb]").style.display = "none"
		}
		catch(error){
		  console.log(error);
		}
		waitforClick.next(1)
	}
} //FUNCTION findUSBDevice

//============= SERIAL OBJECT =====================//

//PORT - attach device(s)
serial.Port = function(device) {
  this.device_ = device;
};

//PORT - connect
serial.Port.prototype.connect = async function(){
  await this.device_.open()

  if (this.device_.configuration === null)
  {
    return this.device_.selectConfiguration(1);
  }

  await this.device_.claimInterface(2)
  await this.device_.selectAlternateInterface(2,0)
  await this.device_.controlTransferOut({
      'requestType': 'class',
      'recipient': 'interface',
      'request': 0x22, //vendor-specific request (i.e. enable channels)
      'value': 0x01, //requested channels
      'index': 0x02 //interface 2 is the recipient
    }) //send controlTransferOut to work with channels

	ENV.USBDeviceType = 'microcontroller'
	ENV.USBDeviceName = 'Arduino Leonardo'

  this.connected = true
  readLoop(this)
  // pingUSB()
}//port.connect

//PORT  - onReceive
serial.Port.prototype.onReceive = data => {
	let textDecoder = new TextDecoder();
	let onReceiveTime = Date.now();
	let textReceived = textDecoder.decode(data);
	port.statustext_received = textDecoder.decode(data);

	if (textReceived.includes('sa')) {
		console.log('[SAMPLE COMMAND::onReceive] textReceived:', textReceived);
		console.log('[SAMPLE COMMAND::onReceive] Time Received:', onReceiveTime - ENV.CurrentDate.valueOf());
		if (textReceived.includes('1')) {
			logEVENTS(
				'SampleCommandReturnTime',
				onReceiveTime - ENV.CurrentDate.valueOf(),
				'trialseries'
			);
		}
		return
	}//IF "sa", samplecommand

	//rfid
	var tagstart = port.statustext_received.indexOf('{tag',0);

	//EYE - waits for "///" to be robust
	if ( port.statustext_received.indexOf('/') != -1 && eyebuffer.accumulateEye < 3 ){
		for (var q=0; q<= port.statustext_received.length-1; q++){
			if (port.statustext_received[q] == '/'){
				var lastslash = q
				eyebuffer.accumulateEye++				
			}
		}
		if (eyebuffer.accumulateEye == 3){
			//strip start characters (eg, '/') up front
			port.statustext_received = port.statustext_received.slice(lastslash+1, port.statustext_received.length-1);
			ENV.Eye.TrackEye = 1;
			
		}//IF '///'
	}//IF '/'

//=============== RFID ===============//
	if (tagstart >= 0){
		//rfid: arduino sends whole tag at once
		var tagend = port.statustext_received.indexOf('}',0);
		logEVENTS("RFIDTag",port.statustext_received.slice(tagstart+4,tagend),"timeseries");

		var nrfid = Object.keys(EVENTS['timeseries']['RFIDTag']).length
		if (nrfid >= 2){
			var dt = new Date(EVENTS['timeseries']['RFIDTag'][nrfid-1][1]) - 
					new Date(EVENTS['timeseries']['RFIDTag'][nrfid-2][1])
		}
		port.statustext_received = 'Parsed TAG ' + EVENTS['timeseries']['RFIDTag'][nrfid-1][2] + 
									' @ ' + new Date().toLocaleTimeString("en-US") + 
									' dt=' + dt + 'ms'

		if (FLAGS.RFIDGeneratorCreated == 1){
			var event = {tag: EVENTS['timeseries']['RFIDTag'][nrfid-1][2], time: EVENTS['timeseries']['RFIDTag'][nrfid-1][1]}
			waitforRFIDEvent.next(event)
		}
		if (ENV.Subject == ""){
			queryRFIDTagonFirestore(EVENTS['timeseries']['RFIDTag'][nrfid-1][2])
		} //IF no subject chosen yet, auto-find in firestore based on their RFIDTag, which will then QuickLoad the page
		updateHeadsUpDisplayDevices()
	} //IF RFID Tag

//=============== EYE ===============//
	else if (eyebuffer.accumulateEye >= 3){
		// eye: arduino sends one character at a time, but have to handle the case of receiving 2 characters

		eyebuffer.buffer += port.statustext_received; //accumulate ascii vals

		var n_character_close = 0
		if ( port.statustext_received.indexOf('}') >= 0 && eyebuffer.buffer.length >= eyebuffer.maxbufferlength_HARDCODED){
			n_character_close = 1
			eyebuffer.buffer = eyebuffer.buffer.slice(0,eyebuffer.buffer.length-1)
		} 
		else if ( port.statustext_received == '}/' && eyebuffer.buffer.length == eyebuffer.maxbufferlength_HARDCODED-1){
			n_character_close = 2
			eyebuffer.buffer = eyebuffer.buffer.slice(0,eyebuffer.buffer.length-2)
		}

		//=============== PARSED EYE (X,Y,D,A) ===============//
		if (n_character_close > 0){
			var x = eyebuffer.buffer.slice(0,4); //pupil x_center
			var y = eyebuffer.buffer.slice(4,8); //pupil y_center
			var w = eyebuffer.buffer.slice(9,12); //pupil diameter
			var a = eyebuffer.buffer.slice(13,16); //pupil aspect ratio

			x = parseInt('0x'+x)/32767; //Raw
			y = parseInt('0x'+y)/32767; //Raw
			w = parseInt('0x'+w)/32767; //Raw
			a = parseInt('0x'+a)/32767; //Raw
			if (ENV.Eye.CalibXTransform.length > 0){
				var xy = apply_linear_transform(x,y,ENV.Eye.CalibXTransform,ENV.Eye.CalibYTransform) //Calibrated
			}
			else {
				xy = ["nan","nan"]
			}

			// STORE calibrated eye signal
			if (TASK.LogEyeData > 0) {
				logEVENTS(
					"EyeData",
					[eyebuffer.numeyes_HARDCODED, xy[0], xy[1], w, a, null, null, null, null],
					"timeseries"
				);
			}
			


			if (FLAGS.touchGeneratorCreated == 1 && ENV.Eye.TrackEye > 0){
				//Send calibrated signal, convert from eye coordinates to tablet coordinates

				// DISPLAY median filtered calibrated eye signal
				//EVENTS[idx] -- 3:X 4:Y 5:Diameter 6:Aspect
			 	var eyedatalen = Object.keys(EVENTS['timeseries']['EyeData']).length
				if (eyedatalen >= 4){
					var X_mdn = math.median( [ EVENTS['timeseries']['EyeData'][eyedatalen-4][3],
									EVENTS['timeseries']['EyeData'][eyedatalen-3][3],
									EVENTS['timeseries']['EyeData'][eyedatalen-2][3],
									EVENTS['timeseries']['EyeData'][eyedatalen-1][3]
								 ] )

					var Y_mdn = math.median( [ EVENTS['timeseries']['EyeData'][eyedatalen-4][4],
									EVENTS['timeseries']['EyeData'][eyedatalen-3][4],
									EVENTS['timeseries']['EyeData'][eyedatalen-2][4],
									EVENTS['timeseries']['EyeData'][eyedatalen-1][4]
								 ] )

					var D_mdn = math.median( [ EVENTS['timeseries']['EyeData'][eyedatalen-4][5],
									EVENTS['timeseries']['EyeData'][eyedatalen-3][5],
									EVENTS['timeseries']['EyeData'][eyedatalen-2][5],
									EVENTS['timeseries']['EyeData'][eyedatalen-1][5]
								 ] )

					var A_mdn = math.median( [ EVENTS['timeseries']['EyeData'][eyedatalen-4][6],
									EVENTS['timeseries']['EyeData'][eyedatalen-3][6],
									EVENTS['timeseries']['EyeData'][eyedatalen-2][6],
									EVENTS['timeseries']['EyeData'][eyedatalen-1][6]
								 ] )
					xy[0] = X_mdn
					xy[1] = Y_mdn
				}//compute median

				var event_xytt = {x_val: xy[0], y_val: xy[1], time: Date.now(), type: "undefined"}
				waitforEvent.next(event_xytt) //send to hold_promise generator
			}//if generated created

		 // 	var eyedatalen = Object.keys(EVENTS['timeseries']['EyeData']).length
			// if (eyedatalen > 1){
			// 	var dt = EVENTS['timeseries']['EyeData'][eyedatalen-1][1] - EVENTS['timeseries']['EyeData'][eyedatalen-2][1]
			// 	eyebuffer.dt = eyebuffer.dt + dt
			// }

			eyebuffer.success = eyebuffer.success + 1 
			// if ( eyedatalen%20 == 0 ){
			// 	port.statustext_received = 'Parsed EYE: xy_raw(calib)= ' + Math.round(x*100)/100 + ', ' + Math.round(y*100)/100 + 
			// 							', ' + Math.round(w*100)/100 + ', ' + Math.round(a*100)/100 + 
			// 							' (' + Math.round(10*xy[0])/10 + ',' + Math.round(10*xy[1])/10 + ') ' +  
			// 							' @ ' + new Date().toLocaleTimeString("en-US") + 
			// 							' dt=' + dt + 'ms' + 'buff=' + eyebuffer.buffer + port.statustext_received
			// 	console.log(port.statustext_received)
			// 	updateHeadsUpDisplayDevices()		
			// } //SUBSAMPLE

			if (n_character_close == 1){
				eyebuffer.buffer = ""
				eyebuffer.accumulateEye = 0;										
			}
			else if (n_character_close == 2){ //received "}/"
				eyebuffer.buffer = ""
				eyebuffer.accumulateEye = 1;										
			}
		} //IF found end character

		//=============== FAILED TO PARSE EYE DATA ===============//
		else if ( eyebuffer.buffer.length >= eyebuffer.maxbufferlength_HARDCODED){
			eyebuffer.fail = eyebuffer.fail + 1
			// port.statustext_received = 'EYE PARSE FAILED : buffer size exceeded without end character:' +
			// 						eyebuffer.buffer + ' bits: ' + port.statustext_received + 
			// 						' @ ' + new Date().toLocaleTimeString("en-US")
			// updateHeadsUpDisplayDevices()

			eyebuffer.buffer = ""
			eyebuffer.accumulateEye = 0;
		} //ELSE didn't receive end character

		//DISPLAY STATS FOR EYE DATASTREAM
		if ( (eyebuffer.fail+eyebuffer.success) >= 900){
			eyedataratestr = "<font color=green>"
							+ 'EYE: Success=' + Math.round(1000*eyebuffer.success/(eyebuffer.fail+eyebuffer.success))/10 + '%'
							+ ' (dt_u = ' + Math.round(10*(performance.now()-eyebuffer.tstart)/(eyebuffer.success+eyebuffer.fail))/10 + ' ms)'
							+ "</font>"
			if (FLAGS.savedata == 0) {
				updateImageLoadingAndDisplayText('');
			}
			// console.log(eyedataratestr)

			port.statustext_received = eyedataratestr
			updateHeadsUpDisplayDevices()
			eyebuffer.fail = 0
			eyebuffer.success = 0
			eyebuffer.dt = 0
			eyebuffer.tstart = performance.now()
		}// IF display eye stats
	}//IF EYE

	//=============== NOT RFID/EYE ===============//
	else {

		// if (textReceived.includes('sa')) {
		// 	console.log('[SAMPLE COMMAND::onReceive] textReceived:', textReceived);
		// 	console.log('[SAMPLE COMMAND::onReceive] Time Received:', onReceiveTime - ENV.CurrentDate.valueOf());
		// 	if (textReceived.includes('1')) {
		// 		logEVENTS(
		// 			'SampleCommandReturnTime',
		// 			onReceiveTime - ENV.CurrentDate.valueOf(),
		// 			'trialseries'
		// 		);
		// 	}
		// }
		updateHeadsUpDisplayDevices()
	}//ELSE not RFID or EYE
} //port.onReceive

serial.Port.prototype.onReceiveError = error => {
  console.log(error);
};

//PORT - transferOut
serial.Port.prototype.writepumpdurationtoUSB = async function(data){
	let msgstr = "{" + data.toString() + "}" // start(<), end(>) characters
	let textEncoder = new TextEncoder();
	await this.device_.transferOut(4, textEncoder.encode(msgstr));

	port.statustext_sent = "TRANSFERRED CHAR --> USB:" + msgstr
	// console.log(port.statustext_sent)
	updateHeadsUpDisplayDevices()
} //port.writepumpdurationUSB



//PORT - transferOut sample command to external devices (eg, Camera)
serial.Port.prototype.writeSampleCommandTriggertoUSB = async function(data){
    let msgstr = "$" + data.toString() + "%" // start($), end(%) characters
    let textEncoder = new TextEncoder();

	console.log('[SAMPLE COMMAND::writeSampleCommandTriggertoUSB] Before Await:', Date.now(), 'Trigger:', data);

  await this.device_.transferOut(4, textEncoder.encode(msgstr)); //SANITY CHECK what the 4 is

	console.log('[SAMPLE COMMAND::writeSampleCommandTriggertoUSB] After Await:', Date.now(), 'Trigger:', data);

  port.statustext_sent = "TRANSFERRED SampleCommandSignal --> USB:" + msgstr
  console.log(port.statustext_sent)
  updateHeadsUpDisplayDevices()
} //port.writepumpdurationUSB

//PORT - disconnect
serial.Port.prototype.disconnect = async function() {
	await this.device_.controlTransferOut({
			'requestType': 'class',
			'recipient': 'interface',
			'request': 0x22,
			'value': 0x00,
			'index': 0x02
		})
	this.device_.close()

	port.statustext_connect = "USB DEVICE DISCONNECTED"
	console.log(port.statustext_connect)
	updateHeadsUpDisplayDevices()
}; //port.disconnect


//PORT - readloop
async function readLoop(port){
  try{
    let result = await port.device_.transferIn(5, 128) //(endpoint#,length)->requesting a 64 byte buffer
    // serial.tread=performance.now()
    // serial.dt.push(performance.now()-serial.treadOld); //-serial.twrite)
    // serial.treadOld=performance.now()
    // var textstr = 'Serial roundtrip write->read << ' +
    //           Math.round(serial.tread - serial.twrite) + 'ms'
    // console.log(textstr)
    port.onReceive(result.data) //calls TextDecoder to parse data
    // slider_callback()
    readLoop(port)
  }
  catch(error){
    port.onReceiveError(error);
  }
} //FUNCTION readLoop

function pingUSB(){
  if (port.connected == true){
  	var pingdur = 100
	let msgstr = "{" + pingdur.toString() + "}" // start({), end(}) characters
	let textEncoder = new TextEncoder();
	port.device_.transferOut(4, textEncoder.encode(msgstr))

	port.statustext_sent = "PINGING! TRANSFERRED CHAR --> USB:" + msgstr
	console.log(port.statustext_sent)
	updateHeadsUpDisplayDevices()

    pingTimer = setTimeout(function(){
      clearTimeout(pingTimer)
      pingUSB()
    },5000)
  }
} //FUNCTION pingUSB

//____________________LEGACY________________________

//PORT - send pump duration to arduino
serial.Port.prototype.writepumpdurationtoUSBBYTE = async function(data) {
	serial.twrite_pumpduration= Date.now() - ENV.CurrentDate.valueOf()
	let view = new Uint16Array(1);
	view[0] = parseInt(data,10);
	view[0] = parseInt("5000",10);
	await this.device_.transferOut(4, view);

	port.statustext_sent = "TRANSFERRED BYTE --> USB:" + view
	console.log(port.statustext_sent)
	updateHeadsUpDisplayDevices()
};

function pingUSBBYTE(){
  if (port.connected == true){

    let view = new Uint8Array(1);
    view[0] = parseInt("200",10);
    port.device_.transferOut(4,view)

    pingTimer = setTimeout(function(){
      clearTimeout(pingTimer)
      pingUSB()
    },3000)
  }
}
