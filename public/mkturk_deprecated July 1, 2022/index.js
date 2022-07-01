// Delete imports after developing. Solely for type checking pursposes.
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/storage';

// Check Availability of APIs
if (typeof(navigator.usb) == "object"){ ENV.WebUSBAvailable = 1 }
if (typeof(navigator.bluetooth) == "object"){ ENV.WebBluetoothAvailable = 1 }
if (typeof(navigator.getBattery) == "function"){ ENV.BatteryAPIAvailable = 1 }
if (typeof(OffscreenCanvas) == "function"){ ENV.OffscreenCanvasAvailable = 1 }
ENV.OffscreenCanvasAvailable = 0;

// Button callbacks for inline connection to arduino device
document.querySelector("button[id=googlesignin]").style.display = "block";
document.querySelector("button[id=googlesignin]").style.visibility = "visible";
document.querySelector('button[id=googlesignin')
  .addEventListener('pointerup', firebaseRedirectSignIn, false);
document.querySelector('button[id=reloadpage]')
  .addEventListener('pointerup', () => {
    window.location.reload();
  }, false);


//---- for Safari
document.querySelector('button[id=googlesignin]')
  .addEventListener('click', firebaseRedirectSignIn, false);
document.querySelector('button[id=reloadpage]')
  .addEventListener('click', () => {
    window.location.reload();
  }, false);
//---- (END) for Safari


var textobj = document.getElementById("headsuptext");
textobj.addEventListener('pointerup', headsuptext_listener, false);

//---- for Safari
textobj.addEventListener('click', headsuptext_listener, false);
//---- (END) for Safari


//============= Initialize Audio & Battery Objects ==================//

// Prevent window scrolling and bounce back effect
	// document.body.addEventListener('touchmove',function(event){
	// 	event.preventDefault();
  // }, {capture: false, passive:false});
  
document.body.addEventListener('touchmove', (event) => {
  event.preventDefault();
}, { capture: false, passive: false });

//Audio pulses for reward
var audiocontext = new (window.AudioContext || window.webkitAudioContext)();
var gainNode = audiocontext.createGain();
gainNode.connect(audiocontext.destination);

// Check availability of OffScreenCanvas API
// ENV.DevicePixelRatio = window.devicePixelRatio || 1;
ENV.DevicePixelRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;

if (ENV.OffscreenCanvasAvailable) {
	var visiblecontext = VISIBLECANVAS.getContext("bitmaprenderer");
}	else {
	var visiblecontext = VISIBLECANVAS.getContext("2d");
}
var backingStoreRatio = visiblecontext.webkitBackingStorePixelRatio
  || visiblecontext.mozBackingStorePixelRatio
  || visiblecontext.msBackingStorePixelRatio
  || visiblecontext.oBackingStorePixelRatio
  || visiblecontext.backingStorePixelRatio
  || 1;

ENV.CanvasRatio = backingStoreRatio / ENV.DevicePixelRatio;
	

// Check Availability of Battery API
if (ENV.BatteryAPIAvailable) {
  // Monitor Battery - from: https://www.w3.org/TR/battery-status/
  navigator.getBattery()
    .then((batteryobj) => {
      logEVENTS('Battery', [batteryobj.level, batteryobj.dischargingTime], 'timeseries');

      batteryobj.addEventListener('levelchange', () => {
        logEVENTS('Battery', [batteryobj.level, batteryobj.dischargingTime], 'timeseries');
      });

    });
} // Do nothing if BatteryAPI unavailable
//============= (end) Initialize Audio & Battery Objects ==================//

(async function(){
	document.querySelector('button[id=quickload]')
    .addEventListener('pointerup', quickLoad_listener, false);

  //--- for Safari
  document.querySelector('button[id=quickload]')
    .addEventListener('click', quickLoad_listener, false);

  if (ENV.WebUSBAvailable) {
    await usb_scriptLoaded;
    document.querySelector('button[id=connectusb]')
      .addEventListener('pointerup', findUSBDevice, false);
    document.querySelector("button[id=nousb]")
      .addEventListener('pointerup', skipHardwareDevice, false);
    document.querySelector("button[id=preemptRFID]")
      .addEventListener('pointerup', preemptRFID_listener, false);	

    //---- for Safari
    document.querySelector ("button[id=connectusb]")
      .addEventListener('click', findUSBDevice, false);
    document.querySelector("button[id=nousb]")
      .addEventListener('click', skipHardwareDevice, false);
    document.querySelector("button[id=preemptRFID]")
      .addEventListener('click', preemptRFID_listener, false);	
		//---- (END) for Safari
  }

	if (ENV.WebBluetoothAvailable) {
		await ble_scriptLoaded;
		await blescale_scriptLoaded;
		//Button callback for asynchronous connection to bluetooth scale
    document.querySelector("button[id=connectblescale]")
      .addEventListener('pointerup', blescaleconnect, false);

		//---- for Safari
    document.querySelector("button[id=connectblescale]")
      .addEventListener('click', blescaleconnect, false);
		//---- (END) for Safari
  }
  
  document.querySelector("button[id=doneEditingParams]")
    .addEventListener('pointerup', doneEditingParams_listener, false);
  document.querySelector("button[id=doneTestingTask]")
    .addEventListener('pointerup', doneTestingTask_listener, false);
  document.querySelector("button[id=stressTest]")
    .addEventListener('touchstart', stressTest_listener, false);
  document.querySelector("button[id=gridPoints]")
    .addEventListener('touchstart', gridPoints_listener, false);

	//---- for Safari
  document.querySelector("button[id=doneEditingParams]")
    .addEventListener('click', doneEditingParams_listener, false);
  document.querySelector("button[id=doneTestingTask]")
    .addEventListener('click', doneTestingTask_listener, false);
  document.querySelector("button[id=stressTest]")
    .addEventListener('click', stressTest_listener, false);
  document.querySelector("button[id=gridPoints]")
    .addEventListener('click', gridPoints_listener, false);
  //---- (END) for Safari


	//====================== Retrieve device's screen properties ===========================//
  ENV.WebAppUrl = window.location.href;
	ENV.UserAgent = window.navigator.userAgent;
	ENV.DeviceScreenWidth = window.screen.width;
	ENV.DeviceScreenHeight = window.screen.height;

	var deviceProperties = await deviceDetect();
	ENV.DeviceType = deviceProperties.data.device.type
	ENV.DeviceBrand = deviceProperties.data.device.brand
	ENV.DeviceName = deviceProperties.data.device.model
	ENV.DeviceGPU = deviceProperties.data.gpu.renderer
	ENV.DeviceBrowserName = deviceProperties.data.client.name
	ENV.DeviceBrowserVersion = deviceProperties.data.client.version
	ENV.DeviceOSName = deviceProperties.data.os.name
	ENV.DeviceOSVersion = deviceProperties.data.os.version
	ENV.DeviceTouchscreen = deviceProperties.data.touchscreen

	var screenSpecs = await queryDeviceonFirestore(ENV.DeviceName);
	//if device not identified by deviceAPI or no matching firestore devices record found for an identified device
	if (screenSpecs.screenSizeInches < 0 && ENV.DeviceType == "desktop") {
		var screenSpecs = await queryDeviceonFirestore('32ul750'); //default to desktop monitor
		console.log('Desktop detected, defaulting to LG 32ul750 monitor for screen ppi');
	} else if (screenSpecs.screenSizeInches < 0 && ENV.DeviceType == "tablet") {
		var screenSpecs = await queryDeviceonFirestore('pixel c'); //default to pixel c
		console.log('Tablet detected, defaulting to pixel c tablet for screen ppi');
	} else if (screenSpecs.screenSizeInches < 0 && ENV.DeviceType == "mobile") {
		var screenSpecs = await queryDeviceonFirestore('pixel 4 xl'); //default to pixel 4 xl
		console.log('Mobile detected, defaulting to pixel 4 xl phone for screen ppi');
  }	else if (
    screenSpecs.screenSizeInches < 0
    && (ENV.DeviceType == "Not available" || ENV.DeviceType == '')
  ) {
		var screenSpecs = await queryDeviceonFirestore('pixel c'); //default to pixel c
		console.log('Device type unidentified, defaulting to pixel c tablet for screen ppi');
	}

	ENV.ScreenSizeInches = screenSpecs.screenSizeInches;
	ENV.ScreenPhysicalPixels = screenSpecs.screenPhysicalPixels; //display pixels (<= physical screen pixels)
	ENV.ScreenRatio = screenSpecs.screenRatio; //scaling from physical pixels to display pixels (retina display)
	ENV.PhysicalPPI = screenSpecs.ppi; //physical device pixels per inch

	if (window.innerWidth < window.innerHeight) {
		ENV.ScreenSizeInches = (
      [ENV.ScreenSizeInches[1], ENV.ScreenSizeInches[0], ENV.ScreenSizeInches[2]]
    );
		ENV.ScreenPhysicalPixels = [ENV.ScreenPhysicalPixels[1], ENV.ScreenPhysicalPixels[0]];
	} //IF PORTRAIT flip horizontal and vertical

	if (ENV.DevicePixelRatio != ENV.ScreenRatio) {
		console.log("User is not running screen at native pixelratio which affects image scaling, will attempt to compensate");
	} //IF user not running screen at native scaling

	ENV.ViewportPixels[0] = ENV.ScreenPhysicalPixels[0] / ENV.DevicePixelRatio;
	ENV.ViewportPixels[1] = ENV.ScreenPhysicalPixels[1] / ENV.DevicePixelRatio;		

	//always compute PPI based on the larger dimension for consistency across portrait/landscape modes
	if (ENV.ViewportPixels[0] >= ENV.ViewportPixels[1]){
		ENV.ViewportPPI = ENV.ViewportPixels[0] / ENV.ScreenSizeInches[0]; //viewport pixels per inch
	}
	else{
		ENV.ViewportPPI = ENV.ViewportPixels[1] / ENV.ScreenSizeInches[1]; //viewport pixels per inch
	}//IF
	updateHeadsUpDisplay()
	//====================== (END) Retrieve device's screen properties ===========================//

  if (ENV.WebUSBAvailable) {
		var event = {};
		event.type = "AutoConnect";
		await findUSBDevice(event);
  }

	//====================== Quickload Button Set-up ===========================//
	// GET PARAMFILE NAME
  var subjectlistobj = document.getElementById("subjectID_select");
  

  // console.log('index.js subjectlist:', subjectlist);
  // for (let i = subjectlist.length - 1; i >= 0; i--) {
  //   console.log('subjectlist i:', i);
  //   let opt = document.createElement('option');
  //   opt.value = i;
  //   opt.innerHTML = subjectlist[i];
  //   subjectlistobj.appendChild(opt);
  // }
	
	subjectlistobj.addEventListener("change", subjectlist_listener, false);
  subjectlistobj.style.visibility = "visible";
  
  if (localStorage.getItem('Agent') != null) { // IF agent stored locally, show quickload button
    QuickLoad.agent = localStorage.getItem('Agent');
    QuickLoad.connectusb = localStorage.getItem('ConnectUSB');

    if (QuickLoad.connectusb == null) {
      QuickLoad.connectusb = 0;
    }

    document.querySelector('button[id=quickload]').style.display = 'block';
    document.querySelector('button[id=quickload]').style.visibility = 'visible';

    if (QuickLoad.connectusb == 0) {
			document.querySelector("button[id=quickload]").innerHTML = QuickLoad.agent;
		} else if (QuickLoad.connectusb == 1) {
			document.querySelector("button[id=quickload]").innerHTML = QuickLoad.agent + " <i>USB</i>";
		}
  } else { // ELSE don't show button
    document.querySelector("button[id=quickload]").style.display = 'none';
  }
	//====================== (END) Quickload Set-up ===========================//

  //================== AWAIT LOAD SUBJECT PARAMS ==================//
	document.querySelector("div[id=subjectID_div]").style.display = "block";
	document.querySelector("div[id=subjectID_div]").style.visibility = "visible";
	await subjectIDPromise();
	document.querySelector("button[id=quickload]").style.display = "none";
	document.querySelector("div[id=subjectID_div]").style.display = "none";

	localStorage.setItem("Agent",ENV.Subject)	;

  if (ENV.MTurkWorkerId) {
    ENV.ParamFileName = PARAM_DIRPATH + ENV.MTurkWorkerId + '_' + ENV.AssignmentId + '_' + ENV.HITId + '_params.json';
  } else {
    ENV.ParamFileName = PARAM_DIRPATH + ENV.Subject + "_params.json";
  }
	await loadParametersfromFirebase(ENV.ParamFileName);
	
	let rtdbAgentRef = rtdb.ref('agents/' + ENV.Subject);
	let rtdbAgentConnectionRef = rtdb.ref(`agents/${ENV.Subject}/numConnections`);
	FLAGS.rtdbDataRef = rtdb.ref('data/' + ENV.Subject);
  //================== (END) AWAIT LOAD SUBJECT PARAMS ==================//


	//====================== Connect USB ===========================//
	// if ( ENV.WebUSBAvailable ){

	// 	if (typeof(port.connected) == 'undefined' || port.connected == false){
	// 		var event = {}
	// 		event.type = "AutoConnect"
	// 		await findUSBDevice(event)
	// 	}

	// 	if ( (typeof(port.connected) == 'undefined' || port.connected == false) &&
	// 	     (QuickLoad.load == 0 || (QuickLoad.load == 1 && QuickLoad.connectusb == 1))){
	// 		//=============== AWAIT CONNECT TO HARDWARE (via USB) ===============//
	// 		port.connected = false
	// 		document.querySelector("button[id=connectusb]").style.display = "block"
	// 		document.querySelector("button[id=connectusb]").style.visibility = "visible"
	// 		document.querySelector("button[id=nousb]").style.display = "block"
	// 		document.querySelector("button[id=nousb]").style.visibility = "visible"

	// 		await connectHardwareButtonPromise()
	// 	} //IF !QuickLoad.load

	// 	document.querySelector("button[id=connectusb]").style.display = "none"
	// 	document.querySelector("button[id=nousb]").style.display = "none"
	// }
	// else {
	// 	//skip usb device connection
	// 	port={
	// 	  statustext_connect: "",
	// 	  statustext_sent: "",
	// 	  statustext_received: "",
	// 	  connected: false
	// 	}
  // }
  
	if (ENV.WebUSBAvailable) {
		if (
      typeof(port.connected) == 'undefined'
      || port.connected == false
    ) {
			var event = {};
			event.type = "AutoConnect";
			await findUSBDevice(event);
		}

		if (
      (typeof(port.connected) == 'undefined' || port.connected == false)
      && (
        QuickLoad.load == 0
        || (QuickLoad.load == 1 && QuickLoad.connectusb == 1)
      )
    ) {
			//=============== AWAIT CONNECT TO HARDWARE (via USB) ===============//
			port.connected = false;
			document.querySelector("button[id=connectusb]").style.display = "block";
			document.querySelector("button[id=connectusb]").style.visibility = "visible";
			document.querySelector("button[id=nousb]").style.display = "block";
			document.querySelector("button[id=nousb]").style.visibility = "visible";

			await connectHardwareButtonPromise();
		} //IF !QuickLoad.load

		document.querySelector("button[id=connectusb]").style.display = "none";
    document.querySelector("button[id=nousb]").style.display = "none";
    
	} else {
		//skip usb device connection
		port = {
		  statustext_connect: "",
		  statustext_sent: "",
		  statustext_received: "",
		  connected: false
		};
	}
	//====================== (END) Connect USB ===========================//

	if (ENV.WebBluetoothAvailable == 0){
		blescale = {
			connected: 0,
			statustext_connect: "",
			statustext_sent: "",
			statustext_received: "",
		};
		ble = {
			connected: 0,
		};
	}

	//================== AWAIT USER CAN EDIT SUBJECT PARAMS ==================//
	if (QuickLoad.load == 0) {
		updateStatusText(JSON.stringify(TASK, null, ' '));
    document.querySelector("p[id=headsuptext]").setAttribute("contentEditable", true);
		document.querySelector("button[id=doneEditingParams]").style.display = "block";
		document.querySelector("button[id=doneEditingParams]").style.visibility = "visible";

		await editParamsPromise();
		document.querySelector("button[id=doneEditingParams]").style.display = "none";
		var textobj = document.getElementById("headsuptext");
		textobj.removeEventListener('touchend', headsuptext_listener);
		textobj.removeEventListener('mouseup', headsuptext_listener);
    document.querySelector("p[id=headsuptext]").setAttribute("contentEditable", false);

		if (FLAGS.need2saveParameters == 1) {
			var user_param_text = document.getElementById("headsuptext").innerHTML; //get new params
			await saveParameterTexttoFirebase(user_param_text); //write new params
			await loadParametersfromFirebase(ENV.ParamFileName); //then read them
		} //IF 
	} //IF !QuickLoad.load
  //================== (END) AWAIT USER CAN EDIT SUBJECT PARAMS ==================//

  // //======================== CHECK IF FIRST NEED TO SAVE OUT IMAGE BAGS ==========================//
  // if (TASK.Agent != "SaveImages"){
	 //  var needsImageBag = []
	 //  var needsImageBagStr = ''
	 //  for (var i=0; i<=TASK.ImageBagsSample.length-1; i++){
		// scenebag = TASK.ImageBagsSample[i]
		// scenebag_dir = scenebag.slice(0,scenebag.lastIndexOf('/')+1)
		// // var filelist = await getFileListRecursiveFirebase(scenebag_dir)
		// var fileList = await storage.ref().child(scenebag_dir).listAll()
		// needsImageBag[i] = 1
		// for (var j=0; j<=fileList.prefixes.length-1; j++){
		// 	var containsSceneBagName = fileList.prefixes[j].name.indexOf(scenebag)
		// 	if (containsSceneBagName >= 0){
		// 		needsImageBag[i] = 0
		// 	}//IF found imagebag folder
		// }//FOR j folders
		// if (needsImageBag[i] == 1){
		// 	needsImageBagStr = needsImageBagStr + "<br>"
		// 					+ "Scene bag <b><i><font color=yellow>" + scenebag + "</font color></b></i> needs an image bag"
		// }
	 //  }//FOR i scenebag files
	 //  if (needsImageBagStr != ''){
		// var textobj = document.getElementById("headsuptext");
		// textobj.innerHTML = needsImageBagStr + "<br><br><b><font color=red> !!! PLEASE SAVE OUT IMAGES FIRST, THEN RELOAD TASK !!! <font color></b>"
		// return
	 //  }//IF needsImageBagStr
  // }//IF !SaveImages
	// //===================== (END) CHECK IF FIRST NEED TO SAVE OUT IMAGE BAGS =======================//
	
  // =================== LOAD MKMODELS IF SPECIES = MODEL =================//
	let mkm;
	if (TASK.Species == 'model') {
    TASK.PunishTimeOut = 0;
		mkm = new MkModels();
		let fromTFHub = TASK.ModelConfig.modelURL.includes('tfhub');
		await mkm.loadFeatureExtractor(TASK.ModelConfig.modelURL, { fromTFHub: fromTFHub });
		let cvs = document.getElementById('model-canvas');
		mkm.bindCanvasElement(cvs);
		mkm.buildClassifier(TASK);
    // mkm.buildSvmClassifier(TASK.ModelConfig);
	}
  // ======================== (END) LOAD MKMODELS ========================//


  //============= AWAIT READ SUBJECT PERFORMANCE HISTORY =============//
	// Read performance history
  var subject_behavior_save_directory = DATA_SAVEPATH + ENV.Subject + '/';
  if (ENV.MTurkWorkerId) {
    subject_behavior_save_directory = DATA_SAVEPATH;
  }
	if (TASK.Automator != 0) {
		var history_file_paths = (
      await getMostRecentBehavioralFilePathsFromFirebase(
        ndatafiles2read,
        ENV.Subject,
        subject_behavior_save_directory,
      )
    );
		trialhistory = await readTrialHistoryFromFirebase(history_file_paths);		
	}

	//===================== AWAIT INITIALIZE AUTOMATOR =================//
	// Initialize automator - change TASK to that specified by TASK.CurrentAutomatorStage. 
	var num_prebuffer_trials = 200;
	if (TASK.Automator != 0) {
		automator_data = await loadTextfromFirebase(TASK.AutomatorFilePath);
		automateTask(automator_data, trialhistory);
		await saveParameterstoFirebase();
		await loadParametersfromFirebase(ENV.ParamFileName);
	}//IF TASK.Automator != 0

	//============= AWAIT LOAD SOUNDS =============//
	soundpromises = sounds.serial.map(loadSoundfromFirebase); //create array of sound load Promises
	await Promise.all(soundpromises); //simultaneously evaluate array of sound load promises
	updateStatusText("");

  //============= AWAIT ESTIMATE SCREEN REFRESH RATE =========//
  var fps = await estimatefps();
  ENV.FrameRateDisplay = fps;
  ENV.FrameRateMovie = fps / 2;

	//========= Start in TEST mode =======//
	document.querySelector("button[id=googlesignin]").style.display = "none"; //if do style.visibility=hidden, element will still occupy space
	document.querySelector("button[id=reloadpage]").style.display = "block";
	document.querySelector("button[id=reloadpage]").style.visibility = "visible";

	document.querySelector("button[id=doneTestingTask]").style.display = "block";
	document.querySelector("button[id=doneTestingTask]").style.visibility = "visible";
	document.querySelector("button[id=gridPoints]").style.display = "block";
	document.querySelector("button[id=gridPoints]").style.visibility = "visible";

	FLAGS.need2loadParameters = 1;
	FLAGS.need2loadScenes = 1;
	CURRTRIAL.num = 0;
	EVENTS.trialnum = 0;
  FLAGS.savedata = 0; // test trials can be performed, but data won't be saved
	
	// await mkmodels.loadFeatureExtractor('https://tfhub.dev/google/tfjs-model/imagenet/resnet_v2_50/feature_vector/3/default/1');

// =========================================================================================================== // 
// ============ MAIN LOOP ==================================================================================== // 
// =========================================================================================================== // 
  while(true){

	//============= AWAIT LOAD PARAMS =============//
    if (FLAGS.need2loadParameters == 1) {
      FLAGS.need2loadParameters = await loadParametersfromFirebase(ENV.ParamFileName);

      if (TASK.Agent == "SaveImages") { 
        document.querySelector("button[id=stressTest]").innerHTML = "Save Images";
        TASK.SamplingStrategy = "sequential";
        console.log("Automatically using sequential sampling since SAVE IMAGES was specified.");
      }//IF SaveImages

      if (typeof(TASK.DragtoRespond) == 'undefined') {
        if (ENV.Eye.TrackEye == 0) { // IF touch, then only clicking
          TASK.DragtoRespond = 0; // click in box
        } else if (ENV.Eye.TrackEye != 0) { // ELSE IF eyetracker, allow dragging
          TASK.DragtoRespond = 1; // drag into box
        }
      }

      //load previous calibration if available
      if (ENV.Eye.TrackEye > 0){ // IF trackeye
        //Calibration
        ENV.Eye.calibration = 0;
        ENV.Eye.CalibXTransform = [];
        ENV.Eye.CalibYTransform = [];
        ENV.Eye.CalibType = 'default';
        ENV.Eye.NCalibPointsTrain = 0;
        ENV.Eye.NCalibPointsTest = 0;
        ENV.Eye.CalibTrainMSE = [];
        ENV.Eye.CalibTestMSE = [];
  
        await loadEyeCalibrationfromFirestore(ENV.Subject);

        if (ENV.Eye.CalibXTransform.length == 0) { // Default calibration
  
          var xrange = 0.5;
          var yrange = 0.5;
          var xscale = ENV.ViewportPixels[0] / xrange;
          var yscale = ENV.ViewportPixels[1] / yrange;
  
          ENV.Eye.CalibXTransform = [xscale, 0, -(0.5 - xrange/2)*xscale]
          ENV.Eye.CalibYTransform = [
            0,
            -yscale,
            ENV.ViewportPixels[1] + (0.5 - yrange / 2 ) * yscale,
          ];
  
          // ENV.Eye.CalibXTransform = [ 1, 0, 0]
          // ENV.Eye.CalibYTransform = [ 0, 1, 0]
  
          saveEyeCalibrationtoFirestore(
            ENV.Eye.CalibXTransform,
            ENV.Eye.CalibYTransform,
            ENV.Eye.NCalibPoints,
            ENV.Eye.CalibType,
          );

        }

        // will calibrate using TASK.CalibrateEye number of trials for train & same number for test
        if (TASK.CalibrateEye > 0) { // IF CalibrateEye
          ENV.Eye.calibration = 1;
          ENV.Eye.NCalibPointsTrain = 0;
          ENV.Eye.NCalibPointsTest = 0;
          ENV.Eye.CalibTrainMSE = [];
          ENV.Eye.CalibTestMSE = [];
        }

      }

      //============= SET UP CANVAS =============//
      // Update canvas based on latest TASK state: 
      refreshCanvasSettings(TASK); 
      setupCanvasHeadsUp();
      setupImageLoadingText();
      windowWidth = document.body.clientWidth; //get true window dimensions at last possible moment
      windowHeight = document.body.clientHeight;
      setupCanvas(VISIBLECANVAS);

      //Foreground canvas that displays eye position during practice screen
      setupEyeTrackerCanvas();

      if (ENV.DevicePixelRatio !== 1) {
        scaleCanvasforHiDPI(VISIBLECANVAS);
        scaleCanvasforHiDPI(EYETRACKERCANVAS);
      }
      
      if (ENV.OffscreenCanvasAvailable) {
        OFFSCREENCANVAS = new OffscreenCanvas(VISIBLECANVAS.width, VISIBLECANVAS.height);
        OFFSCREENCANVAS.commitTo = (dest) => {
          try {
            let bitmap = OFFSCREENCANVAS.transferToImageBitmap();
            dest.transferFromImageBitmap(bitmap);
            return { status: 'succeeded' };
          } catch (e) {
            console.error('[OFFSCREENCANVAS.commitTo] Error:', e);
            return { status: 'failed' };
          }
        }
        // OFFSCREENCANVAS.commitTo = function(dest) {
        //   try {
        //     var bitmap = this.transferToImageBitmap()
        //     dest.transferFromImageBitmap(bitmap)
        //     str = {status: "succeeded"}
        //     return str
        //   }
        //   catch(error){
        //     console.log(error)
        //     str = {status: "failed"}
        //     return str				
        //   }
        // }
      } else {
        OFFSCREENCANVAS = VISIBLECANVAS;
      }

      CANVAS.workspace = [
        0,
        0,
        VISIBLECANVAS.width,
        VISIBLECANVAS.height
      ];

      TQS = undefined;
      FLAGS.need2loadScenes = 1; 

      //Determine task type
      if (TASK.RewardStage == 0) {
        ENV.Task = "FIXATION"
      } else if (TASK.RewardStage == 1) { // IF Task.RewardStage
        if (TASK.NRSVP > 0) {
          ENV.Task = 'RSVP';
        } else if (TASK.SameDifferent > 0 && TASK.ChoiceGridIndex.length == 2) { // Task is SameDifferent
          // Same-Different (SD)
          ENV.Task = 'SD';
        } else if (TASK.ObjectGridIndex.length == TASK.ImageBagsSample.length) { // Task is Stimulus-Response
          // Stimulus-Response (SR)
          ENV.Task = 'SR';
        } else { // Task is Match-to-Sample
          // Match-to-Sample
          ENV.Task = 'MTS';
        }
      }

      //Size of Fixation screen circle or image
      ENV.FixationRadius = TASK.FixationSizeInches / 2 * ENV.ViewportPPI;
  
      //Size of Choice screen circle or square
      ENV.ChoiceRadius = TASK.ChoiceSizeInches / 2 * ENV.ViewportPPI;
  
      //Fixation dot, if >0, will appear on both fixation & sample screens
      ENV.FixationDotRadius = TASK.FixationDotSizeInches / 2 * ENV.ViewportPPI;
  
      //Fixation window, if specified, operates on both fixation & sample screens
      ENV.FixationWindowRadius = TASK.FixationWindowSizeInches / 2 * ENV.ViewportPPI;

      // Photodiode Square to display on the bottom right (hard coded size & position)
      ENV.PhotodiodeSquareWidth = ENV.PhotodiodeSquareSizeInches * ENV.ViewportPPI;
			ENV.PhotodiodeSquareX = (
        ENV.ViewportPixels[0] - ENV.PhotodiodeSquareWidth / 2 - CANVAS.offsetleft
      );
			ENV.PhotodiodeSquareY = (
        ENV.ViewportPixels[1] - ENV.PhotodiodeSquareWidth / 2 - CANVAS.offsettop
      );

      // define image display grid
      funcreturn = defineImageGrid(
        TASK.NGridPoints,
        TASK.GridSpacingInches * ENV.ViewportPPI,
        TASK.GridXOffsetInches * ENV.ViewportPPI,
        TASK.GridYOffsetInches * ENV.ViewportPPI,
      );
      xcanvascenter = funcreturn[0];
      ycanvascenter = funcreturn[1];
      ENV.XGridCenter = funcreturn[2];
      ENV.YGridCenter = funcreturn[3];

      FLAGS.purge = 1;
      FLAGS.createnewfirestore = 1;
      CURRTRIAL.reset();
      EVENTS.reset_trialseries();
      EVENTS.reset_timeseries();

	    if (typeof(TASK.Photodiode) == 'undefined') {
	      TASK.Photodiode = 0;
	    }
    } //IF need2loadParameters

    if (FLAGS.purge == 1) {
      purgeTrackingVariables();
      FLAGS.purge = 0; 
    } //IF purge


    //======================== 3D SCENE SET-UP =======================//
    if (FLAGS.need2loadScenes) {
      IMAGES = { Sample: [], Test: [] };
      IMAGEMETA = {};
      // STEPS FOR 3D SCENE SET-UP
      // ---- 0: load scene params from JSON
      // 0: expand trial params & get mesh paths
      // ---- 1: load meshes
      // ---- 2: init scene & camera
      // ---- 3: add all lights & objects
      // ---- 4: compile shaders
      // 5: select frame to render
      // 5: animate <--> render loop within trial

      //============ 0: LOAD SCENES from JSON ============//
      for (let i = 0; i < TASK.ImageBagsSample.length; i++) {
        IMAGES.Sample[i] = await loadTextfromFirebase(TASK.ImageBagsSample[i]);
      }

      for (let i = 0; i < TASK.ImageBagsTest.length; i++) {
        IMAGES.Test[i] = await loadTextfromFirebase(TASK.ImageBagsTest[i]);
      }

      // find the longest scene param arry in IMAGES (ie # of trials)
      for (let i = 0; i < IMAGES.Sample.length; i++) {
        IMAGES.Sample[i].nimages = getLongestArray(IMAGES.Sample[i]);
        IMAGES.Test[i].nimages = getLongestArray(IMAGES.Test[i]);

        //Determine if images will also be rendered
			  IMAGES.Sample[i].nbackgroundimages = IMAGES.Sample[i].IMAGES.imageidx.length;
        IMAGES.Test[i].nbackgroundimages = IMAGES.Test[i].IMAGES.imageidx.length;
        
        FLAGS.movieper['Sample'][i] = [];
        FLAGS.movieper['Test'][i] = [];
      }
      //============ (END) 0: LOAD SCENES from JSON ============//

      //============ 1: LOAD MESHES FOR SCENES ============//
      OBJECTS = { Sample: {}, Test: {} };
      for (let taskscreen in OBJECTS) {
        let meshPaths = [];
        let meshIdxs = [];

        for (let classLabel = 0; classLabel < IMAGES[taskscreen].length; classLabel++) {
          for (const obj in IMAGES[taskscreen][classLabel].OBJECTS) {
            meshPaths.push(IMAGES[taskscreen][classLabel].OBJECTS[obj].meshpath);
            meshIdxs.push([classLabel, obj]); 
          }
        }

        let meshes = await loadMeshArrayfromFirebase(meshPaths);

        // FOR i meshes, initialize corresponding label to an empty array
        for (let i = 0; i < meshes.length; i++) {
          let meshLabel = meshIdxs[i][0];
          OBJECTS[taskscreen][meshLabel] = { meshes: [] };
        }

        // For i meshes, store in corresponding labels
        for (let i = 0; i < meshes.length; i++) {
          let meshLabel = meshIdxs[i][0];
          let meshName = meshIdxs[i][1];
          OBJECTS[taskscreen][meshLabel].meshes[meshName] = meshes[i];
        }
      }
      //============ (END) 1: LOAD MESHES FOR SCENES ============//


      //============ 2: INIT SCENE & CAMERA ============//
      setupCanvas(VISIBLECANVASWEBGL);
		  await initThreeJS(IMAGES);
      //============ (END) 2: INIT SCENE & CAMERA ============//

      //============ 3: ADD ALL LIGHTS/OBJECTS TO SCENE ============//
	    CAMERAS = { Sample: {}, Test: {} };
	    LIGHTS = { Sample: {}, Test: {} };
		  for (let scenetype in scene) {
			  await addToScene(scenetype);
		  } 
		  console.log('3js: added lights & objects');
      //============ (END) 3: ADD ALL LIGHTS/OBJECTS TO SCENE ============//

   		//============ 4: PRELOAD SHADERS (COMPILE) ============//
       for (let scenetype in scene) {
        renderer.compile(
          scene[scenetype],
          scene[scenetype].getObjectByName('cam0')
        );
      }
      console.log('3js: compiled scene')
      //============ (END) 4: PRELOAD SHADERS (COMPILE) ============//
       
      FLAGS.need2loadScenes = 0;

      // Make a scene trial queue TQS (overrides TQ)
      TQS = new TrialQueueScene(TASK.SamplingStrategy);
      await TQS.build(num_prebuffer_trials);

      // Store scene metadata
      let sampleSceneMeta = (
        objectomeSceneNamesToLatentVars(
          TASK.ImageBagsSample,
          TQS.testbag_labels,
          IMAGES.Sample
        )
      );
      let sampleSceneMetaKeys = Object.keys(sampleSceneMeta);
      for (let i = 0; i < sampleSceneMetaKeys.length; i++) {
        IMAGEMETA['Sample' + sampleSceneMetaKeys[i]] = sampleSceneMeta[sampleSceneMetaKeys[i]];
      }

      let testSceneMeta = (
        objectomeSceneNamesToLatentVars(
          TASK.ImageBagsTest,
          TQS.testbag_labels,
          IMAGES.Test
        )
      );
      let testSceneMetaKeys = Object.keys(testSceneMeta);
      for (let i = 0; i < testSceneMetaKeys.length; i++) {
        IMAGEMETA['Test' + testSceneMetaKeys[i]] = testSceneMeta[testSceneMetaKeys[i]];
      }
    }

    if (typeof(TASK.BackgroundColor2D) == 'undefined') {
      TASK.BackgroundColor2D = '#7F7F7F';
    }
    document.body.style.background = TASK.BackgroundColor2D;
    //========================(END) 3D SCENE SET-UP =======================//


    //============ SELECT SAMPLE & TEST IMAGES ============//
    if (typeof(TASK.NRSVP) != "undefined" && TASK.NRSVP > 0){
    	ENV.NRSVPMax = TASK.NRSVP
    	ENV.NRSVPMin = TASK.NRSVP

    	if (typeof(TASK.NRSVPMax) != "undefined" && TASK.NRSVPMax > TASK.NRSVP){
	    	ENV.NRSVPMax = TASK.NRSVPMax
    	}//IF NRSVPMax
    }//IF NRSVP

    let imgSeqLen = (
      (typeof(TASK.NRSVP) == 'undefined' || TASK.NRSVP <= 0) ? 1 : ENV.NRSVPMax
    );

    for (let i = 0; i < imgSeqLen; i++) {
      let x = await TQS.get_next_trial();
      CURRTRIAL.sampleimage[i] = x[0];
      CURRTRIAL.sampleindex[i] = x[1];

      // Sample can have multiple sequential scenes (items are over time; eg, RSVP)
      CURRTRIAL.sampleindex_nonarray[i] = x[1][0];
      CURRTRIAL.sample_scenebag_label[i] = x[5];
      CURRTRIAL.sample_scenebag_index[i] = x[6];

      // Test can have multiple simultaneous scenes (items are over space; ev, MtS)
      if (i == 0) { // IF first image
        CURRTRIAL.testimages[i] = x[2];
        CURRTRIAL.testindices[i] = x[3]
        CURRTRIAL.test_scenebag_labels[i] = x[7]
        CURRTRIAL.test_scenebag_indices[i] = x[8]
        CURRTRIAL.correctitem = x[4]
        samplereward = x[9]
      }
    }

    logEVENTS("Sample", CURRTRIAL.sampleindex_nonarray, "trialseries");
    logEVENTS("Test", CURRTRIAL.testindices[0], "trialseries");
    //============(END) SELECT SAMPLE & TEST IMAGES ============//

    //============ SET UP SAMPLE & TEST SEQUENCE ============//
    // when & where to display
    CURRTRIAL.tsequence = [0];
    CURRTRIAL.sequencegridindex = [[-1]];

    // what to display
    CURRTRIAL.sequenceclip = [-1]; //movieclip# in RSVP
    CURRTRIAL.sequenceframe = [-1]; //frame# in movie
    CURRTRIAL.sequencetaskscreen = ['blank'];
    CURRTRIAL.sequencelabel = [[0]]; //image class
    CURRTRIAL.sequenceindex = [[0]]; //image index

    //EXPAND SAMPLE (for rsvp & movies)
    //Start with blank for max(100,SampleOFF), then append SampleON+blank (eg, blank,Sample,blank,Sample,blank)
    //EXPAND SAMPLE (for rsvp & movies)
    //Start with blank for max(100,SampleOFF), then append SampleON+blank (eg, blank,Sample,blank,Sample,blank)
    for (let i = 0; i < CURRTRIAL.sample_scenebag_index.length; i++) { // FOR i RSVP Sample
      let t0 = CURRTRIAL.tsequence[CURRTRIAL.tsequence.length - 1];
      let sampleon = (
        chooseArrayElement(
          IMAGES['Sample'][CURRTRIAL.sample_scenebag_label[i][0]].durationMS,
          CURRTRIAL.sample_scenebag_index[i][0],
          0
        )
      );

      // Timing: blankdurationpre, sampleon, framerate
      let blankdurationpre;

      if (i == 0) {
        if (typeof TASK.SamplePRE === 'undefined' || TASK.SamplePRE === null || TASK.SamplePRE < 0) {
          blankdurationpre = Math.max(100, TASK.SampleOFF);
        } else {
          blankdurationpre = TASK.SamplePRE;
        }
      } else {
        blankdurationpre = TASK.SampleOFF;
      }



      // Create Movie Sequence
      [movie_sequence, movie_tsequence, movie_framenum] = (
        createMovieSeq('Sample', blankdurationpre, sampleon, TASK.SampleOFF, ENV.FrameRateMovie)
      );
      movie_tsequence = (
        movie_tsequence.map((a) => {
          return a + t0;
        })
      );

      CURRTRIAL.tsequence.push(...movie_tsequence);
      CURRTRIAL.sequencegridindex.push(
        ...Array(movie_tsequence.length).fill([TASK.SampleGridIndex])
      );

      CURRTRIAL.sequenceclip.push(
        ...Array(movie_tsequence.length).fill(i)
      );

      CURRTRIAL.sequenceframe.push(...movie_framenum);
      CURRTRIAL.sequencetaskscreen.push(...movie_sequence);
      CURRTRIAL.sequencelabel.push(
        ...Array(movie_tsequence.length).fill(CURRTRIAL.sample_scenebag_label[i])
      );

      CURRTRIAL.sequenceindex.push(
        ...Array(movie_tsequence.length).fill(CURRTRIAL.sample_scenebag_index[i])
      );
    }

    // APPEND TEST OR CHOICE
    if (TASK.NRSVP <= 0) { // IF !RSVP, then show test/choice screen
      let t0 = CURRTRIAL.tsequence[CURRTRIAL.tsequence.length - 1];
      let teston = (
        chooseArrayElement(
          IMAGES["Test"][CURRTRIAL.test_scenebag_labels[0][0]].durationMS,
          CURRTRIAL.test_scenebag_indices[0][0],
          0,
        )
      );

      if (typeof(teston) == 'undefined') {
        console.log('Without this if, then print-to-console code, teston is undefined. Not clear why this strange behavior happens. Something to do with chooseArrayElement returning in time.');
      }

      [movie_sequence, movie_tsequence, movie_framenum] = (
        createMovieSeq('Test', TASK.SampleOFF, teston, TASK.TestOFF, ENV.FrameRateMovie)
      );
      movie_tsequence = (
        movie_tsequence.map((a) => {
          return a + t0;
        })
      );

      CURRTRIAL.tsequence.push(...movie_tsequence);
      CURRTRIAL.sequencegridindex.push(
        ...Array(movie_tsequence.length).fill(TASK.TestGridIndex)
      );

      CURRTRIAL.sequenceclip.push(
        ...Array(movie_tsequence.length).fill(0)
      );

      CURRTRIAL.sequenceframe.push(...movie_framenum);
      CURRTRIAL.sequencetaskscreen.push(...movie_sequence);
      CURRTRIAL.sequencelabel.push(
        ...Array(movie_tsequence.length).fill(CURRTRIAL.test_scenebag_labels[0])
      );

      CURRTRIAL.sequenceindex.push(
        ...Array(movie_tsequence.length).fill(CURRTRIAL.test_scenebag_indices[0])
      );

      // Append choice if needed
      if (TASK.SameDifferent > 0) { // IF Same-Different, show test & choice
        let t0 = CURRTRIAL.tsequence[CURRTRIAL.tsequence.length - 1];
        let seq;
        let tseq;
        
        if (TASK.TestOFF > 0) {
          seq = ['blank', 'choice'];
          tseq = [t0, t0 + TASK.TestOFF];
        } else {
          seq = ['choice'];
          tseq = [t0];
        }

        CURRTRIAL.tsequence.push(...tseq);
        CURRTRIAL.sequencegridindex.push(
          ...Array(tseq.length).fill(TASK.ChoiceGridIndex)
        );

        CURRTRIAL.sequenceclip.push(...Array(tseq.length).fill(0));
        CURRTRIAL.sequenceframe.push(...Array(tseq.length).fill(0));
        CURRTRIAL.sequencetaskscreen.push(...seq);
        CURRTRIAL.sequencelabel.push(...Array(tseq.length).fill([0]));
        CURRTRIAL.sequenceindex.push(...Array(tseq.length).fill([0]));
      }

    }
    //============(END) SET UP SAMPLE & TEST SEQUENCE ============//


    //================= RFID check =================//
    /**
     * If no matching read in the last TASK.CheckRFID seconds, wait for matching read
     * (kicks-them-off model where they can work as long as reading, but then get 
     * kicked off within TASK.CheckRFID seconds if they are the wrong agent or no reads)
     */
    if (
      TASK.CheckRFID > 0
      && ENV.AgentRFID != 'XX'
      && FLAGS.savedata == 1
    ) {
      if (!port.connected) {
        console.log('NO USB DEVICE CONNECTED: cannot check RFID!!');
      } else {
        let nreads = Object.keys(EVENTS['timeseries']['RFIDTag']).length;
        // IF RFID does not check out, wait for a recent RFID read before proceeding with the next trial
        if (
          !(nreads > 0
          && EVENTS['timeseries']['RFIDTag'][nreads - 1][2] == ENV.AgentRFID
          && (Date.now() - new Date(EVENTS['timeseries']['RFIDTag'][nreads - 1][1])) < TASK.CheckRFID)
        ) {
          await rfid_promise(ENV.AgentRFID, TASK.CheckRFID);
        } 
      }
    }
    //================= (end) RFID check =================//


    // FIXATION   FIXATION   FIXATION   FIXATION   FIXATION   FIXATION   //
    // FIXATION   FIXATION   FIXATION   FIXATION   FIXATION   FIXATION   //
    // FIXATION   FIXATION   FIXATION   FIXATION   FIXATION   FIXATION   //
    //============ WHILE RUN FIXATION SCREEN ============//
    FLAGS.waitingforTouches = TASK.NFixations;
    if (TASK.RewardStage == 0) {
      FLAGS.punishOutsideTouch = 1;
    }

    while (FLAGS.waitingforTouches > 0) {
      // Choose fixation grid index at random
      if (TASK.FixationGridIndex > 0) {
        CURRTRIAL.fixationgridindex = TASK.FixationGridIndex;
      } else if (TASK.FixationGridIndex < 0) {
        CURRTRIAL.fixationgridindex = Math.floor(
          Math.random() * ENV.XGridCenter.length
        );
      }
      logEVENTS('FixationGridIndex', CURRTRIAL.fixationgridindex, 'trialseries');

      if (TASK.FixationUsesSample <= 0) { // IF !FixationUsesSample, show fixation dot
        // Render fixation screen
        if (TASK.Species == 'macaque' || TASK.Species == 'human') {
          ENV.FixationColor = 'white';
        } else if (TASK.Species == 'marmoset' || TASK.Species == 'model') {
          ENV.FixationColor = 'blue';
        }
        frame.shown = [];
        frame.frames = [];
        frame.current = 0;
        for (let i in CANVAS.sequencepre) {
          frame.shown[i] = 0;
          frame.frames[i] = [i];
        }
      } else if (TASK.FixationUsesSample > 0) { // IF Sample, show first image/movie
        // Update grid location of sample to current fixation grid index
        frame.shown = [];
        frame.frames = [];
        frame.current = 0;
        
        for (let i = 0; i < CURRTRIAL.sequencegridindex.length; i++) {
          for (let j = 0; j < CURRTRIAL.sequencegridindex[i].length; j++) {
            if (CURRTRIAL.sequencetaskscreen[i] == 'Sample') { // IF sample
              // Set location to fixation
              CURRTRIAL.sequencegridindex[i][j] = CURRTRIAL.fixationgridindex;

              if (CURRTRIAL.sequenceclip[i] == 0 && j == 0) { // IF first clip, add frame
                frame.shown.push(0);
                frame.frames.push([i]);
              }
            }
          }
        }
      }

      // Start timer for this fixation render trial
      CURRTRIAL.starttime = Date.now() - ENV.CurrentDate.valueOf();
      logEVENTS('StartTime', CURRTRIAL.starttime, 'trialseries');

      //========= AWAIT SHOW FIXATION =========//
      // TODO: move to appropriate location
      if (TASK.Species == 'marmoset' || TASK.Species == 'model') {
        playSound(0);
      }

      if (TASK.FixationUsesSample <= 0) { // IF !FixationUsesSample, show fixation dot
        // displayTrial(time, grid, frame, screen, obj, idx)
        await displayTrial(
          CANVAS.tsequencepre,
          [CURRTRIAL.fixationgridindex],
          [0],
          CANVAS.sequencepre,
          [0],
          [0],
          mkm
        );
      } else if (TASK.FixationUsesSample > 0) { // IF FixationUsesSample, show image/movie
        displayTrial(
          CURRTRIAL.tsequence,
          CURRTRIAL.sequencegridindex,
          CURRTRIAL.sequenceframe,
          CURRTRIAL.sequencetaskscreen,
          CURRTRIAL.sequencelabel,
          CURRTRIAL.sequenceindex,
          mkm
        );
        await moviestart_promise();
      }

      audiocontext.suspend()

      //========= AWAIT HOLD FIXATION TOUCH =========//
      if (ENV.FixationWindowRadius > 0) { // IF FixationWindow, then override object size
        // TODO: contain the scope of funcreturn to each file.
        funcreturn = getFixationWindowBoundingBox(
          CURRTRIAL.fixationgridindex,
          ENV.FixationWindowRadius
        );
        boundingBoxesFixation.x[0] = funcreturn[0];
        boundingBoxesFixation.y[0] = funcreturn[1];
      } else if (
        TASK.FixationUsesSample > 0
        && ENV.FixationWindowRadius <= 0
      ) { // alt. fixation window
        boundingBoxesFixation = boundingBoxesChoice3D;
      }

      let touchhold_return; 
      if (ENV.StressTest == 1) { //IF automated stress test
        if (TASK.Species == 'model') {
          
          // let ctx = mkm.cvs.getContext('2d');
          // ctx.clearRect(0, 0, mkm.cvs.width, mkm.cvs.height);

          touchhold_return = { type: 'theld' };
          

          // ctx.drawImage(VISIBLECANVAS, sx, sy, sWidth, sHeight, 0, 0, 224, 224);
          // let tensor = mkm.normalizePixelValues(mkm.cvs);
          // let feature = mkm.featureExtractor.execute(tensor);
          // feature = feature.reshape([2048]);
          // let moments = tf.moments(feature);
          // let subtracted = feature.sub(moments.mean);
          // let scaledFeature = subtracted.divNoNan(moments.variance);
          // scaledFeature.print();
          // if (CURRTRIAL.num <= TASK.ModelConfig.trainIdx) {
          //   console.log('CURRTRIAL.num:', CURRTRIAL.num);
          //   mkm.dataObj.xTrain.push(feature);
          //   if (CURRTRIAL.correctitem == 0) {
          //     mkm.dataObj.yTrain.push([-1]);
          //     // mkm.dataObj.yTrain.push([1, 0]);
          //   } else if (CURRTRIAL.correctitem == 1) {
          //     mkm.dataObj.yTrain.push([1]);
          //     // mkm.dataObj.yTrain.push([0, 1]);
          //   }
          // } else {
          //   mkm.dataObj.xTest = feature;
          //   mkm.dataObj.yTest = CURRTRIAL.correctitem;
          // }

          

          let x = (
            boundingBoxesFixation.x[0][0]
            + Math.round(
              Math.random() * (boundingBoxesFixation.x[0][1] - boundingBoxesFixation.x[0][0])
            )
          );

          let y = (
            boundingBoxesFixation.y[0][0]
            + Math.round(
              Math.random() * (boundingBoxesFixation.y[0][1] - boundingBoxesFixation.y[0][0])
            )
          );

          touchhold_return.cxyt = [
            0,
            x,
            y,
            Date.now() - ENV.CurrentDate.valueOf()
          ];
          FLAGS.waitingforTouches--;
        } else {
          touchhold_return = { type: 'theld' };
          let x = (
            boundingBoxesFixation.x[0][0]
            + Math.round(
              Math.random() * (boundingBoxesFixation.x[0][1] - boundingBoxesFixation.x[0][0])
            )
          );

          let y = (
            boundingBoxesFixation.y[0][0]
            + Math.round(
              Math.random() * (boundingBoxesFixation.y[0][1] - boundingBoxesFixation.y[0][0])
            )
          );

          touchhold_return.cxyt = [
            0,
            x,
            y,
            Date.now() - ENV.CurrentDate.valueOf()
          ];

          FLAGS.waitingforTouches--;
        }
      } else { // ELSE await fixation hold
        FLAGS.acquiredTouch = 0;
        let p1 = hold_promise(
          TASK.FixationDuration,
          boundingBoxesFixation,
          FLAGS.punishOutsideTouch,
        );
        let p2 = choiceTimeOut(TASK.FixationTimeOut);
        touchhold_return = await Promise.race([p1, p2]);
      }

      if (FLAGS.movieplaying == 1) { // IF movie is playing
        // So that sample movie does not continue playing after fixation acquired
        frame.current = frame.shown.length - 1;
        frame.shown[frame.current] = 1;
        await moviefinish_promise()
      }

      CURRTRIAL.fixationtouchevent = touchhold_return.type
      CURRTRIAL.fixationxyt = [
        touchhold_return.cxyt[1],
        touchhold_return.cxyt[2],
        touchhold_return.cxyt[3]
      ];

      logEVENTS("FixationTouchEvent", CURRTRIAL.fixationtouchevent, "trialseries");
      logEVENTS("FixationXYT", CURRTRIAL.fixationxyt, "trialseries");

      //IF held fixaton & fixation task, count as correct
      if (CURRTRIAL.fixationtouchevent == "theld") {
        if (TASK.RewardStage == 0 && FLAGS.waitingforTouches == 0) {
          CURRTRIAL.response = 1;
          CURRTRIAL.correctitem = 1;
          logEVENTS('Response', CURRTRIAL.response, 'trialseries');
        }

        // ELSE IF broke fixation & fixation task, count as incorrect
      } else if (TASK.RewardStage == 0 && CURRTRIAL.fixationtouchevent == "tbroken") {
        CURRTRIAL.response = 0;
        CURRTRIAL.correctitem = 1;
        FLAGS.waitingforTouches = 0; //exit loop
        logEVENTS("Response", CURRTRIAL.response, "trialseries");
      }
      
      // else if ( (CURRTRIAL.fixationtouchevent == "tbroken" && TASK.RewardStage == 1)
      //           || (CURRTRIAL.fixationtouchevent == "TimeOut")){
      //     }//IF timed out OR dms task, ok if touched outside, just wait for touch inside fixation area

      //========= AWAIT CLEAR FIXATION =========//
      for (let q in CANVAS.sequenceblank) {
        frame.shown[q] = 0;
        frame.frames[q] = [q];
      }
      frame.current = 0;
      if (FLAGS.waitingforTouches > 0) { // blank out screen
        await displayTrial(
          CANVAS.tsequenceblank,
          [-1, -1],
          [0, 1],
          CANVAS.sequenceblank,
          [0, 0],
          [0, 0],
          mkm
        );
      }
    }//WHILE waiting for NFixations
	  //============ (end) WHILE RUN FIXATION SCREEN ============//


    //SAMPLE TEST    SAMPLE TEST    SAMPLE TEST    SAMPLE TEST    SAMPLE TEST    //
    //SAMPLE TEST    SAMPLE TEST    SAMPLE TEST    SAMPLE TEST    SAMPLE TEST    //
    //SAMPLE TEST    SAMPLE TEST    SAMPLE TEST    SAMPLE TEST    SAMPLE TEST    //
	  //============== AWAIT SHOW SAMPLE THEN TEST ==============//
    if (TASK.RewardStage === 1){

       // Set where to display
      if (TASK.SampleGridIndex > 0) { // IF fixed sample location
        CURRTRIAL.samplegridindex = TASK.SampleGridIndex;
      } else if (TASK.SampleGridIndex < 0) { // ELSE IF random sample location
        if (TASK.FixationGridIndex < 0) { // IF moving fixation, use its grid location for sample
          CURRTRIAL.samplegridindex = CURRTRIAL.fixationgridindex;
        } else { // ELSE use random grid location for sample
          CURRTRIAL.samplegridindex = Math.floor(
            ENV.XGridCenter.length * Math.random()
          );
        }
      }

      // Update grid location of each Sample frame
      for (let i = 0; i < CURRTRIAL.sequencegridindex.length; i++) {
        for (let j = 0; j < CURRTRIAL.sequencegridindex[i].length; j++) {
          if (CURRTRIAL.sequencetaskscreen[i] == 'Sample') {
            CURRTRIAL.sequencegridindex[i][j] = CURRTRIAL.samplegridindex;
          }
        }
      }
          
      logEVENTS("SampleGridIndex", CURRTRIAL.samplegridindex, "trialseries");
      frame.shown = [];
      frame.frames = [];
      frame.current = 0;
      for (let q in CURRTRIAL.sequencetaskscreen) {
        frame.shown[q] = 0;
        frame.frames[q] = [q];
      } // FOR q frames

      // KeepSampleON
      if (TASK.KeepSampleON == 1) {
        let idxArr = [];
        let idx = CURRTRIAL.sequencetaskscreen.indexOf('Sample');
        while (idx != -1) {
          idxArr.push(idx);
          idx = CURRTRIAL.sequencetaskscreen.indexOf('Sample', idx + 1);
        }

        // FOR i remaining frames after Sample
        for (let i = idxArr[idxArr.length - 1] + 1; i < frame.frames.length; i++) {
          // console.log('keepsampleon FRAME:', frame);
          // Append last Sample scene rendered
          frame.frames[i].push(idxArr[idxArr.length - 1]);
        }
      }

      // KeepTestON
      if (TASK.KeepTestON == 1 && TASK.SameDifferent > 0) {
        let idxArr = [];
        let idx = CURRTRIAL.sequencetaskscreen.indexOf('Test');
        while (idx != -1) {
          idxArr.push(idx);
          idx = CURRTRIAL.sequencetaskscreen.indexOf('Test', idx + 1);
        }

        // FOR i remaining frames after TEst
        for (let i = idxArr[idxArr.length - 1] + 1; i < frame.frames.length; i++) {
          // Append last Test scene rendered
          frame.frames[i].push(idxArr[idxArr.length - 1]);
        }
      }

          //Display Sample & Test/Choice
      if (TASK.NRSVP > 0 && TASK.FixationWindowSizeInches > 0) { // IF RSVP, hold sample fixation
        let fixationWindowBoundingBox = (
          getFixationWindowBoundingBox(CURRTRIAL.samplegridindex, ENV.FixationWindowRadius)
        );
        boundingBoxesSampleFixation.x[0] = fixationWindowBoundingBox[0];
        boundingBoxesSampleFixation.y[0] = fixationWindowBoundingBox[1];
        FLAGS.punishOutsideTouch = 1;
        FLAGS.waitingforTouches = 1;
        FLAGS.acquiredTouch = 1;
        if (ENV.Eye.TrackEye) {
          ENV.Eye.EventType = 'eyemove';
        }
               
        let p1 = hold_promise(
          0,
          boundingBoxesSampleFixation,
          FLAGS.punishOutsideTouch,
        )
        let p2 = displayTrial(
          CURRTRIAL.tsequence,
          CURRTRIAL.sequencegridindex,
          CURRTRIAL.sequenceframe,
          CURRTRIAL.sequencetaskscreen,
          CURRTRIAL.sequencelabel,
          CURRTRIAL.sequenceindex,
          mkm
        );

        if (port.connected && FLAGS.savedata) {
          port.writeSampleCommandTriggertoUSB('1');
        }

        CURRTRIAL.samplestarttime = Date.now() - ENV.CurrentDate.valueOf();
        console.log('[SAMPLE START TIME LOGGED]:', Date.now());
        CURRTRIAL.samplestarttime_string = (
          new Date(
            CURRTRIAL.samplestarttime
            + ENV.CurrentDate.valueOf()
          ).toJSON()
        );
        let race_return = await Promise.race([p1, p2]);
        FLAGS.acquiredTouch = 0;
        FLAGS.waitingforTouches = 0;

        //Determine number of clips fixated
       	var nclipshown = CURRTRIAL.sequenceclip[frame.shown.lastIndexOf(1)]
       	if (typeof(race_return.type) == 'undefined') {
       		nclipshown++
       	}//IF held until completeion, count all i clips; otw only count i-1

        if (FLAGS.movieplaying == 1) {
          // So that sample movie does not continue playing after fixation broken
          frame.current = frame.shown.length - 1;
          frame.shown[frame.current] = 1;
          await moviefinish_promise();
        }

        if (ENV.Eye.TrackEye > 0) {
          ENV.Eye.EventType = 'eyestart'; // Reset eye state
        }

        if (typeof(race_return.type) == 'undefined') { // IF held sample fixation
          CURRTRIAL.samplefixationtouchevent = 'theld';
          CURRTRIAL.samplefixationxyt = [
            0,
            0,
            Date.now() - ENV.CurrentDate.valueOf(),
          ];
        }
        else { // ELSE broke samplefixation
          CURRTRIAL.samplefixationtouchevent = race_return.type;
          // Quick Fix for race_return.cxyt[1:4] returning undefined
          for (let i = 1; i < 4; i++) { 
            if (typeof race_return.cxyt[i] == 'undefined') {
              race_return.cxyt[i] = -1;
            }
          }
          CURRTRIAL.samplefixationxyt = [
            race_return.cxyt[1],
            race_return.cxyt[2],
            race_return.cxyt[3],
          ];
        }
      } else { // ELSE !RSVP, no fixation hold
        boundingBoxesChoice3D = { x: [], y: [] } // determined on the fly during display
        CURRTRIAL.samplefixationtouchevent = '';
        CURRTRIAL.samplefixationxyt = [];

        if (port.connected && FLAGS.savedata) {
          port.writeSampleCommandTriggertoUSB('1');
        }

        CURRTRIAL.samplestarttime = Date.now() - ENV.CurrentDate.valueOf();
        console.log('[SAMPLE START TIME LOGGED [!RSVP]]:', Date.now());
        CURRTRIAL.samplestarttime_string = new Date(CURRTRIAL.samplestarttime + ENV.CurrentDate.valueOf()).toJSON();
        
        await displayTrial(
          CURRTRIAL.tsequence,
          CURRTRIAL.sequencegridindex,
          CURRTRIAL.sequenceframe,
          CURRTRIAL.sequencetaskscreen,
          CURRTRIAL.sequencelabel,
          CURRTRIAL.sequenceindex,
          mkm
        );
      }

      logEVENTS("SampleFixationTouchEvent", CURRTRIAL.samplefixationtouchevent, "trialseries");
      logEVENTS("SampleFixationXYT", CURRTRIAL.samplefixationxyt, "trialseries");

      //Store timing of clip presentations
      CURRTRIAL.tsequencedesiredclip = [];
      CURRTRIAL.tsequenceactualclip = [];

      // FOR f frames
      for (let f = 0; f < CURRTRIAL.sequencetaskscreen.length; f++) {
        // IF new clip || new taskscreen within that clip
        if (
          f==0
          || CURRTRIAL.sequencetaskscreen[f] != CURRTRIAL.sequencetaskscreen[f - 1]
          || CURRTRIAL.sequenceclip[f] != CURRTRIAL.sequenceclip[f - 1]
        ) {
          CURRTRIAL.tsequencedesiredclip.push(CURRTRIAL.tsequence[f])
          if (f > CURRTRIAL.tsequenceactual.length - 1) { // IF clip not shown
            CURRTRIAL.tsequenceactualclip.push(-1);
          } else {
            CURRTRIAL.tsequenceactualclip.push(CURRTRIAL.tsequenceactual[f]);
          }
        }
      }

      logEVENTS("TSequenceDesiredClip", CURRTRIAL.tsequencedesiredclip, "trialseries");
    	logEVENTS("TSequenceActualClip", CURRTRIAL.tsequenceactualclip, "trialseries");
      logEVENTS("SampleStartTime", CURRTRIAL.samplestarttime, "trialseries");
      logEVENTS("FrameNum", CURRTRIAL.sequenceframe, 'timeseries');
      logEVENTS("TSequenceDesired", CURRTRIAL.tsequence, "timeseries");
      logEVENTS("TSequenceActual", CURRTRIAL.tsequenceactual, "timeseries");

          // //Store timestamp from beginnning of display
          // EVENTS["timeseries"]["FrameNum"][Object.keys(EVENTS["timeseries"]["FrameNum"]).length-1][1] = CURRTRIAL.samplestarttime_string
          // EVENTS["timeseries"]["TSequenceDesired"][Object.keys(EVENTS["timeseries"]["TSequenceDesired"]).length-1][1] = CURRTRIAL.samplestarttime_string
          // EVENTS["timeseries"]["TSequenceActual"][Object.keys(EVENTS["timeseries"]["TSequenceActual"]).length-1][1] = CURRTRIAL.samplestarttime_string
          // if (FLAGS.savedata == 0){
          //     updateImageLoadingAndDisplayText(' ') //displays frame tactual - tdesired
          // }

      // Store timestamp from beginning of display
      let lastFrameIdx = Object.keys(EVENTS['timeseries']['FrameNum']).length - 1;
      let lastTSequenceDesiredIdx = (
        Object.keys(EVENTS['timeseries']['TSequenceDesired']).length - 1
      );
      let lastTSequenceActualIdx = (
        Object.keys(EVENTS['timeseries']['TSequenceActual']).length - 1
      );
      EVENTS["timeseries"]["FrameNum"][lastFrameIdx][1] = CURRTRIAL.samplestarttime_string;
      EVENTS["timeseries"]["TSequenceDesired"][lastTSequenceDesiredIdx][1] = (
        CURRTRIAL.samplestarttime_string
      );
      EVENTS["timeseries"]["TSequenceActual"][lastTSequenceActualIdx][1] = (
        CURRTRIAL.samplestarttime_string
      );
      if (FLAGS.savedata == 0) {
        updateImageLoadingAndDisplayText(' ') // displays frame tactual - tdesired
      }

      audiocontext.suspend()

      //RESPONSE    RESPONSE    RESPONSE    RESPONSE    RESPONSE    RESPONSE    RESPONSE    //
      //RESPONSE    RESPONSE    RESPONSE    RESPONSE    RESPONSE    RESPONSE    RESPONSE    //
      //RESPONSE    RESPONSE    RESPONSE    RESPONSE    RESPONSE    RESPONSE    RESPONSE    //
      //========= AWAIT TOUCH RESPONSE =========//
      FLAGS.waitingforTouches = 1
		  if (TASK.HideTestDistractors >= 1) {
			  FLAGS.punishOutsideTouch = 1;
		  } else {
			  FLAGS.punishOutsideTouch = 0;
      }

      let race_return = { type: 'theld' };
      let currchoice;
      if (ENV.StressTest == 1) {
        let nchoices = boundingBoxesChoice3D.x.length;
        let distractor_array;
        let x;
        let y;

        if (TASK.Species == 'model') {
          currchoice = 0;
          x = 0;
          y = 0;

          if (CURRTRIAL.num == TASK.ModelConfig.trainIdx - 1) {
            EVENTS['trainseries'] = {
              TrainingAccuracy: [],
              TrainingLoss: [],
              MsPerEpoch: [],
            };
            
            let modelConfigKeys = Object.keys(TASK.ModelConfig);
            // batchSize defaults to 4 if not specified
            let batchSz = modelConfigKeys.includes('batchSize') ? TASK.ModelConfig.batchSize : 4;
            let shuffleSz = (
              modelConfigKeys.includes('shuffleSize') ? TASK.ModelConfig.shuffleSize : 4
            );
            let yTrainLabelsObj = {};
            for (let i = 0; i < mkm.units; i++) {
              yTrainLabelsObj[`Label ${i}`] = mkm.dataObj.yTrainLabels.filter(x => x === i).length;
            }
            console.log('yTrainLabels:', mkm.dataObj.yTrainLabels);
            console.log('yTrainLabelsObj:', yTrainLabelsObj);

            let xTrain = tf.data.array(mkm.dataObj.xTrain);
            let yTrain = tf.data.array(mkm.dataObj.yTrain);
            let trainDataset = tf.data.zip({ xs: xTrain, ys: yTrain })
              .batch(batchSz)
              .shuffle(shuffleSz);

            const beginMs = performance.now();
            await mkm.model.fitDataset(trainDataset, {
              epochs: TASK.ModelConfig.epochs,
              callbacks: {
                onEpochEnd: async(epoch, logs) => {
                  const msPerEpoch = (performance.now() - beginMs) / (epoch + 1);
                  const secPerEpoch = msPerEpoch / 1000;
                  console.log('Training model ... Approx. ' + `${secPerEpoch.toFixed(4)} sec/epoch`);
                  console.log('logs:', logs);
                  EVENTS['trainseries'].TrainingAccuracy.push(logs.acc);
                  EVENTS['trainseries'].TrainingLoss.push(logs.loss);
                  EVENTS['trainseries'].MsPerEpoch.push(msPerEpoch);
                }
              }
            });
            console.log(EVENTS['trainseries']);
          }

          if (CURRTRIAL.num >= TASK.ModelConfig.trainIdx) {
            let yPred = [];
            if (TASK.SameDifferent > 0) {
              mkm.dataObj.xTest.forEach(feature => {
                let pred = mkm.model.predict(feature.reshape([1, mkm.inputShape[0]]));
                pred.print();
                pred = pred.reshape([mkm.units]).argMax(0);
                pred = pred.dataSync();
                yPred.push(pred[0]);
              });
              let allEqual = arr => arr.every(v => v === arr[0]);
              if (allEqual(yPred)) {
                currchoice = 0;
              } else {
                currchoice = 1;
              }
            } else {
              mkm.dataObj.xTest.forEach(feature => {
                let pred = mkm.model.predict(feature.reshape([1, mkm.inputShape[0]]));
                pred.print();
                pred = pred.reshape([mkm.units]).argMax(0);
                pred = pred.dataSync();
                yPred.push(pred[0]);
              });
              currchoice = yPred[0];
            }
            // let yPred = mkm.model.predict(mkm.dataObj.xTest.reshape([1, 2048]));
            // yPred.print();
					  // yPred = yPred.reshape([2]).argMax(0);
					  // yPred = yPred.dataSync();
					  // currchoice = yPred[0];
            console.log('yPred:', currchoice, 'yTrue:', CURRTRIAL.correctitem);
            mkm.dataObj.xTest = [];
            mkm.dataObj.yTest = [];
            
            if (TASK.ModelConfig.saveImages == 1) {
              if (currchoice != CURRTRIAL.correctitem) {
                let mkmodelsRef = storageRef.child('mkturkfiles/mkmodels/');
                let cvsData = mkm.cvs.toDataURL();
                let path = (
                  `${TASK.Agent}/${ENV.CurrentDate.toJSON()}/${CURRTRIAL.num}_incorrect.png`
                );
                mkmodelsRef.child(path).putString(cvsData, 'data_url');
              }
            } else if (TASK.ModelConfig.saveImages == 2) {
              let mkmodelsRef = storageRef.child('mkturkfiles/mkmodels/');
              let cvsData = mkm.cvs.toDataURL();
              let path = (
                (currchoice == CURRTRIAL.correctitem) 
                ? `${TASK.Agent}/${ENV.CurrentDate.toJSON()}/${CURRTRIAL.num}_correct.png`
                : `${TASK.Agent}/${ENV.CurrentDate.toJSON()}/${CURRTRIAL.num}_incorrect.png`
              );
              // if (currchoice != CURRTRIAL.correctitem) {
              //   let path = (
              //     `${TASK.Agent}/${ENV.CurrentDate.toJSON()}/${CURRTRIAL.num}_incorrect.png`
              //   );
              // } else if (currchoice == CURRTRIAL.correctitem) {
              //   let path = (
              //     `${TASK.Agent}/${ENV.CurrentDate.toJSON()}/${CURRTRIAL.num}_correct.png`
              //   );
              // }
              mkmodelsRef.child(path).putString(cvsData, 'data_url');
            }
          }

        } else { // ELSE TASK.Species != 'model'
          let hitrate = 0;

          if (TASK.Agent == 'Youno') {
            hitrate = 0.9;
          } else if (TASK.Agent == 'Eliaso') {
            hitrate = 0.7;
          } else if (TASK.Agent == 'SaveImages') {
            hitrate = 1.0;
          }

          if (Math.random() < hitrate) {
            currchoice = CURRTRIAL.correctitem;
          } else {
            distractor_array = [];
            for (let i = 0; i < nchoices; i++) {
              if (i != CURRTRIAL.correctitem) {
                distractor_array.push(i);
              }
            }
            
            distractor_array = shuffle(distractor_array);
            currchoice = distractor_array[0];
          }

          x = (
            boundingBoxesChoice3D.x[currchoice][0]
            + Math.round(
              Math.random()
              * (boundingBoxesChoice3D.x[currchoice][1] - boundingBoxesChoice3D.x[currchoice][0])
            )
          );

          y = (
            boundingBoxesChoice3D.y[currchoice][0]
            + Math.round(
              Math.random()
              * (boundingBoxesChoice3D.y[currchoice][1] - boundingBoxesChoice3D.y[currchoice][0])
            )
          );
        }

        race_return.cxyt = [
          currchoice,
          x,
          y,
          Date.now() - ENV.CurrentDate.valueOf()
        ];
        FLAGS.waitingforTouches--

      } else { // ELSE !ENV.StressTest
        if (TASK.NRSVP > 0) { // IF RSVP, skip choice
          CURRTRIAL.correctitem = 1;
          if (TASK.FixationWindowSizeInches <= 0) { // IF no fixation required
            race_return = { type: 'theld' };
            currchoice = 1;
          } else { // fixation required
            race_return = { type: CURRTRIAL.samplefixationtouchevent };

            if (CURRTRIAL.samplefixationtouchevent == 'theld' || nclipshown >= ENV.NRSVPMin) { // held samplefixation
              currchoice = 1;
            } else { // broke samplefixation
              currchoice = 0;
            }
          }

          race_return.cxyt = [
            currchoice,
            -1,
            -1,
            CURRTRIAL.samplefixationxyt[2],
          ];
          FLAGS.waitingforTouches--;
        } else { // IF !RSVP, require choiuce
          let p1 = hold_promise(0, boundingBoxesChoice3D, FLAGS.punishOutsideTouch);
          let p2 = choiceTimeOut(TASK.ChoiceTimeOut);
          race_return = await Promise.race([p1, p2]);
        }
      }

      CURRTRIAL.responsetouchevent = race_return.type;
		  CURRTRIAL.response = race_return.cxyt[0];
		  CURRTRIAL.responsexyt = [
        race_return.cxyt[1],
        race_return.cxyt[2],
        race_return.cxyt[3]
      ];

      logEVENTS("ResponseXYT", CURRTRIAL.responsexyt, "trialseries");
		  logEVENTS("ResponseTouchEvent", CURRTRIAL.responsetouchevent, "trialseries");
      logEVENTS("Response", CURRTRIAL.response, "trialseries");

      // Keep track of repeated responses to one side
      // Keep track of repeated responses to one side
      if (
        TASK.NRSVP <= 0
        && CURRTRIAL.num > 0
        && FLAGS.savedata
        && CURRTRIAL.responsetouchevent == 'theld'
      ) {
        if (CURRTRIAL.response == trialhistory.response[trialhistory.correct.length - 1]) {
          FLAGS.stickyresponse++;
        } else {
          FLAGS.stickyresponse = 0;
        }
      }
    } //if TASK.RewardStage
    logEVENTS("CorrectItem", CURRTRIAL.correctitem, "trialseries");



    //REWARD PUNISH    REWARD PUNISH    REWARD PUNISH    REWARD PUNISH    REWARD PUNISH    //
    //REWARD PUNISH    REWARD PUNISH    REWARD PUNISH    REWARD PUNISH    REWARD PUNISH    //
    //REWARD PUNISH    REWARD PUNISH    REWARD PUNISH    REWARD PUNISH    REWARD PUNISH    //
    // Determine if Choice was correct
    // if (CURRTRIAL.response == CURRTRIAL.correctitem){ CURRTRIAL.correct = 1; }
    // else { CURRTRIAL.correct=0; }
    
    CURRTRIAL.correct = (CURRTRIAL.response == CURRTRIAL.correctitem) ? 1 : 0;

    

    //============ DETERMINE NUMBER OF REWARDS ============//
    if (TASK.RewardStage == 0 && samplereward == 0) {
      CURRTRIAL.nreward = -1; // skip reward/punish
    }
    else if (ENV.NRSVPMin > 0 && ENV.NRSVPMax > 0 
    		&& ENV.NRSVPMax > ENV.NRSVPMin
    		 && TASK.RewardStage > 0){
    	if (nclipshown < ENV.NRSVPMin){
    		CURRTRIAL.nreward = 0
    	}
    	else {
    		// exponential reward = 1*exp(a*(nseen - nmin)), where a = ln(rmax)/(nmax-nmin)
    		CURRTRIAL.nreward = Math.exp(
    			( Math.log1p(TASK.NRewardMax)/(ENV.NRSVPMax - ENV.NRSVPMin) ) * (nclipshown - ENV.NRSVPMin) )

    		CURRTRIAL.nreward = Math.round(CURRTRIAL.nreward)
    	}
    }//IF NRSVP && reward based on nclips fixated before break
    else if (
      CURRTRIAL.correct
      && (samplereward == -1 || TASK.RewardStage == 0)
    ) { // default behavior
      let lastStartTimeIdx = trialhistory.starttime.length - 1;
      if (
        FLAGS.savedata
        && (
          CURRTRIAL.starttime - trialhistory.starttime[lastStartTimeIdx] < TASK.ConsecutiveHitsITI
          || CURRTRIAL.num==0
        )
      ) { // if correct within bonus interval
        FLAGS.consecutivehits++;
      } else { // took too long, set to 1
        FLAGS.consecutivehits = 1;
      }
      CURRTRIAL.nreward = 1 + Math.floor(FLAGS.consecutivehits / TASK.NConsecutiveHitsforBonus);

      if (CURRTRIAL.nreward > TASK.NRewardMax) {
        CURRTRIAL.nreward = TASK.NRewardMax;
      }
    } else if (CURRTRIAL.correct && samplereward >= 1) {
      // Override if user had manually set reward for that sample image in image_reward_list file
      CURRTRIAL.nreward = samplereward;
    } else if (!CURRTRIAL.correct) {
      FLAGS.consecutivehits = 0;
			CURRTRIAL.nreward = 0;
    }
    //========= (END) DETERMINE NUMBER OF REWARDS =========//

    ENV.RewardDuration = setReward();
    logEVENTS("NReward", CURRTRIAL.nreward, "trialseries");
	
    //============ DELIVER REWARD/PUNISH ============//
    //NO FEEDBACK
    if (CURRTRIAL.nreward == -1) { // IF no feedback
      CANVAS.sequencepost[1] = "blank";
		  CANVAS.tsequencepost[2] = 2 * CANVAS.tsequencepost[1];
      frame.shown = [];
      frame.frames = [];
      frame.current = 0;

      for (let q in CANVAS.sequencepost) {
        frame.shown[q] = 0;
        frame.frames[q] = [q];
      }

      renderShape2D(CANVAS.sequencepost[0], -1, OFFSCREENCANVAS);

      let lenTsequencePost = CANVAS.tsequencepost.length;
      // displayTrial(time, grid, frame, screen, obj, idx)
      await displayTrial(
        CANVAS.tsequencepost,
				Array(lenTsequencePost).fill(-1),
				range(0, lenTsequencePost - 1, 1),
				CANVAS.sequencepost,
				Array(lenTsequencePost).fill(0),
				Array(lenTsequencePost).fill(0),
        mkm
      );
    } else if (CURRTRIAL.correct) { // ELSE IF correct, then REWARD
      CANVAS.sequencepost[1] = "reward";
      CANVAS.tsequencepost[2] = CANVAS.tsequencepost[1] + ENV.RewardDuration * 1000;
      
      for (let i = 0; i < CURRTRIAL.nreward; i++) { // FOR nrewards
        frame.shown = [];
        frame.frames = [];
        frame.current = 0;

        for (let j in CANVAS.sequencepost) {
          frame.shown[j] = 0;
          frame.frames[j] = [j];
        }

        playSound(2);
        renderShape2D(CANVAS.sequencepost[0], -1, OFFSCREENCANVAS);
        let lenTsequencePost = CANVAS.tsequencepost.length;
        // displayTrial(time, grid, frame, screen, obj, idx);
        let p1 = displayTrial(
          CANVAS.tsequencepost,
					Array(lenTsequencePost).fill(-1),
					range(0, lenTsequencePost - 1, 1),
					CANVAS.sequencepost,
					Array(lenTsequencePost).fill(0),
					Array(lenTsequencePost).fill(0),
          mkm
        );

		CURRTRIAL.reinforcementtime = Date.now() - ENV.CurrentDate.valueOf();
		logEVENTS("ReinforcementTime", CURRTRIAL.reinforcementtime, "trialseries")


        if (ble.connected == false && port.connected == false) {
          await Promise.all([p1]);
        } else if (ble.connected == true) {
          let p2 = writepumpdurationtoBLE(Math.round(ENV.RewardDuration * 1000));
          await Promise.all([p1, p2]);
        } else if (port.connected == true) {
          let p2 = port.writepumpdurationtoUSB(Math.round(ENV.RewardDuration * 1000));
          await Promise.all([p1, p2]);
        }

      }
    } else if (!CURRTRIAL.correct) { // ELSE IF wrong, then timeout (PUNISH)
      CANVAS.sequencepost[1] = "punish";
		  CANVAS.tsequencepost[2] = CANVAS.tsequencepost[1] + TASK.PunishTimeOut;
      frame.shown = [];
      frame.frames = [];
      frame.current = 0;
		  for (let q in CANVAS.sequencepost) {
        frame.shown[q] = 0;
        frame.frames[q] = [q];
      }

      renderShape2D(CANVAS.sequencepost[0], -1, OFFSCREENCANVAS);
      let lenSequencepost = CANVAS.sequencepost.length
      // displayTrial(time, grid, frame, screen, obj, idx);
		  let p1 = displayTrial(
        CANVAS.tsequencepost,
				Array(lenSequencepost).fill(-1),
				range(0, lenSequencepost -1, 1),
				CANVAS.sequencepost,
				Array(lenSequencepost).fill(0),
        Array(lenSequencepost).fill(0),
        mkm
      );

      let numTrialsToBufferPunishPeriod = 50;
      let p2 = TQS.generate_trials(numTrialsToBufferPunishPeriod * TASK.RSVP);
      playSound(3);

      CURRTRIAL.reinforcementtime = Date.now() - ENV.CurrentDate.valueOf();
			logEVENTS("ReinforcementTime", CURRTRIAL.reinforcementtime, "trialseries");
      console.log('[REINFORCEMENT TIME LOGGED]:', Date.now());
      
      await Promise.all([p1, p2]);
    }

    if (port.connected && FLAGS.savedata) {
      port.writeSampleCommandTriggertoUSB('0');
    }
    

    // Log trial end time
    CURRTRIAL.endtime = Date.now() - ENV.CurrentDate.valueOf();
    console.log('[END TIME LOGGED]:', Date.now());
		logEVENTS("EndTime", CURRTRIAL.endtime, "trialseries")

    //============ (end) DELIVER REWARD/PUNISH ============//
    //HOUSEKEEPING    HOUSEKEEPING    HOUSEKEEPING    HOUSEKEEPING    HOUSEKEEPING    //
    //HOUSEKEEPING    HOUSEKEEPING    HOUSEKEEPING    HOUSEKEEPING    HOUSEKEEPING    //
    //HOUSEKEEPING    HOUSEKEEPING    HOUSEKEEPING    HOUSEKEEPING    HOUSEKEEPING    //
	  //================= HOUSEKEEPING =================//
    let ITIstart = performance.now();

    // if (FLAGS.savedata == 0) {
    //   let photodiode = { t: [], v: [] };

    //   for (let q in EVENTS['timeseries']['Arduino']) { // FOR q Arduino events
    //     let evt = EVENTS['timeseries']['Arduino'][q];
    //     if (evt[0] != CURRTRIAL.num) {
    //       continue;
    //     }

    //     let tArduino = new Date(evt[1]).valueOf() - ENV.CurrentDate.valueOf();

    //     if (evt[2].indexOf('sa') == 0) { // IF sample command return
    //       if (evt[2][2] == 1) {
    //         let dSampleCommandOn = tArduino - EVENTS['trialseries']['SampleStartTime'];
    //         console.log(`d_roundtrip_commandON=${dSampleCommandOn}`);
    //       } else if (evt[2][2] == 0) {
    //         let dSampleCommandOff = tArduino - EVENTS['trialseries']['EndTime'];
    //         console.log(`d_roundtrip_commandOFF=${dSampleCommandOff}`);
    //       }

    //     } else if (evt[2].indexOf('pu') == 0) {
    //       console.log(`d_roundtrip_pumpON=${tArduino - EVENTS['trialseries']['ReinforcementTime']}`);
    //     }

    //     if (evt[2].indexOf('ph') == 0) {
    //       photodiode.t.push(tArduino - EVENTS['trialseries']['SampleStartTime']); // measure re: sample start
    //       photodiode.v.push(evt[2].slice(2, evt[2].length));
    //     }
    //   }

    //   // IF photodiode vals
    //   if (photodiode.t.length > 1) {
    //     let tDisplay = {
    //       d: [],
    //       a: [],
    //       p: [],
    //       v: []
    //     };
    //     let dt = { software: [], hardware: [] };
    //     let n = EVENTS['timeseries']['TSequenceDesired'][CURRTRIAL.num].length;
    //     tDisplay.d = EVENTS['timeseries']['TSequenceDesired'][CURRTRIAL.num].slice(2, n);
    //     tDisplay.a = EVENTS['timeseries']['TSequenceDesired'][CURRTRIAL.num].slice(2, n);

    //     for (let i = tDisplay.d.length - 1; i >= 0; i--) { // backwards traversal
    //       dt.software[i] = Math.round(tDisplay.a[i] - tDisplay.d[i]);
    //       for (let j = 0; j < photodiode.t.length; j++) {
    //         if (photodiode.t[j] > tDisplay.a[i]) {
    //           tDisplay.p[i] = photodiode.t[j];
    //           tDisplay.v[i] = photodiode.v[j];
    //           dt.hardware[i] = Math.round(tDisplay.p[i] - tDisplay.a[i]);
    //           photodiode.t[j] = -99999;
    //           break;
    //         }
    //       }
    //     }

    //     console.log(tDisplay.a);
    //     console.log(tDisplay.p);
    //     console.log(dt.software);
    //     console.log(dt.hardware);
    //     console.log(tdisplay.v);
    //     console.log(CURRTRIAL.sequencetaskscreen);
    //   }

    //   updateImageLoadingAndDisplayText(' '); // displays relevant timing information
    // }

    // Calibrate eye
    if (ENV.Eye.TrackEye > 0) { // IF track eye
      /**
       * Can manually adjust params only when on practice screen
       * Can automatically calibrate when on test screen
       */

      if (FLAGS.savedata == 1 && ENV.Eye.calibration == 1) { // IF train eye calibration
        if (CURRTRIAL.fixationtouchevent == 'theld') {
          ENV.Eye.NCalibPointsTrain++;
        }

        if (ENV.Eye.NCalibPointsTrain == TASK.CalibrateEye){ //IF enough points
					// Run calibration fitting 
					let calibreturn = runCallibration();
					ENV.Eye.CalibXTransform = calibreturn.xtform;
					ENV.Eye.CalibYTransform = calibreturn.ytform;
					ENV.Eye.NCalibPoints = calibreturn.n;
					ENV.Eye.CalibType = calibreturn.type;

					// Compute GOF
					ENV.Eye.CalibTrainMSE[0] = compute_mse(calibreturn.predictedx, calibreturn.actualx);
					ENV.Eye.CalibTrainMSE[1] = compute_mse(calibreturn.predictedy, calibreturn.actualy);

					// Store calibration
					saveEyeCalibrationtoFirestore(
            ENV.Eye.CalibXTransform,
            ENV.Eye.CalibYTransform,
            ENV.Eye.CalibType,
            ENV.Eye.NCalibPointsTrain,
            ENV.Eye.CalibTrainMSE,
            ENV.Eye.NCalibPointsTest,
            ENV.Eye.CalibTestMSE,
          );

					ENV.Eye.calibration = 0;
				}//IF enough points
      } else if (FLAGS.savedata == 1 && ENV.Eye.calibration == 0) { // ELSEIF test eye calibration
        if (CURRTRIAL.fixationtouchevent == 'theld'){ // IF held fixation
          ENV.Eye.NCalibPointsTest++;
        }

        if (ENV.Eye.NCalibPointsTest == TASK.CalibrateEye) { // IF enough points
          //cross-validate on same number of trials used for training
          ENV.Eye.CalibTestMSE = evaluateCalibration(); //GOF test
          
          // Store calibration
				  saveEyeCalibrationtoFirestore(
            ENV.Eye.CalibXTransform,
            ENV.Eye.CalibYTransform,
            ENV.Eye.CalibType,
            ENV.Eye.NCalibPointsTrain,
            ENV.Eye.CalibTrainMSE,
            ENV.Eye.NCalibPointsTest,
            ENV.Eye.CalibTestMSE
          );
        }

      }

      if (typeof(EVENTS['timeseries']['EyeData'][0]) != "undefined"){
        let intervalArr = [];
        for (let i = 0; i < Object.keys(EVENTS['timeseries']['EyeData']).length; i++) {
          if (EVENTS['timeseries']['EyeData'][i][0] == CURRTRIAL.num) {
            intervalArr.push(EVENTS['timeseries']['EyeData'][i][1]);
          }
        }


	      let firstTimestamp = new Date(intervalArr[0]);
	      let lastIdx = Object.keys(intervalArr).length - 1;
	      let lastTimestamp = new Date(
	        intervalArr[lastIdx]
	      );
	      
	      let interval = (
	        (lastTimestamp.valueOf() - firstTimestamp.valueOf()) / lastIdx
	      );      
	      logEVENTS('EyetrackerSampleInterval', interval, 'trialseries');
      }//IF defined
      else{
      	logEVENTS('EyetrackerSampleInterval', 0, 'trialseries');
      }//ELSE
    }//IF trackeye
    
    //clear tracker canvas at end of trial
    if (FLAGS.savedata == 0 || CURRTRIAL.num <= 1) { //IF practice screen
      EYETRACKERCANVAS.getContext('2d')
        .clearRect(0, 0, EYETRACKERCANVAS.width, EYETRACKERCANVAS.height);
    }

    CURRTRIAL.lastTrialCompleted = new Date();

    // Update EVENTS only if saving data
    if (FLAGS.savedata == 1){
      // Update trial tracking variables
      updateTrialHistory() //appends to running trial history

      // // Run automator
      // if (TASK.Automator !=0){	
      //   await automateTask(automator_data, trialhistory);
      // }

      if (TASK.Agent != "SaveImages"){
        // Cloud Storage: Save data asynchronously to json
        saveBehaviorDatatoFirebase(TASK, ENV, CANVAS, EVENTS);

        // Firestore Database: Save data asynchronously to database
        if (FLAGS.createnewfirestore == 1) {
          saveBehaviorDatatoFirestore(TASK, ENV, CANVAS); //write once
          pingFirestore() //every 10 seconds, will check for data updates to upload to firestore
        }//IF new firestore, kick off firestore database writes

        // BigQuery Data Stream
        if (CURRTRIAL.num == 0) {
          if (ENV.Eye.TrackEye > 0) {
            if (TASK.BQSaveEye === undefined || TASK.BQSaveEye > 0) {
              // uploads eyedata to BigQuery every 10 seconds
              console.log('BIGQUERY::START EYE TABLE');
              pingBigQueryEyeTable();
            }
          } else {
            if (TASK.BQSaveTouch === undefined || TASK.BQSaveTouch > 0) {
              // uploads touch data to BigQuery every 10 seconds
              console.log('BIGQUERY::START TOUCH TABLE');
              pingBigQueryTouchTable();
            }
          }

          if (TASK.BQSaveDisplayTimes === undefined || TASK.BQSaveDisplayTimes > 0) {
            //uploads display times data to bigquery every 10 seconds
            console.log('BIGQUERY::START DISPLAY TABLE');
            pingBigQueryDisplayTimesTable();
          }
        }
        
      }//IF not saving images, save data
    }//IF savedata

    if (FLAGS.need2saveParameters == 1) {
      FLAGS.need2saveParameters = saveParameterstoFirebase(); // Save parameters asynchronously
    }

    await checkParameterFileStatusFirebase();
    if (
      new Date().getDate() != ENV.CurrentDate.getDate()
      || CURRTRIAL.num == 1000
    ) {
      updateEventDataonFirestore(EVENTS);
	  	FLAGS.need2loadParameters = 1;
    } //if new day, start new file or reached 1000 trials

    rtdbAgentRef.once('value').then(snap => {
      try {
        FLAGS.rtdbAgentNumConnections = Object.keys(snap.val()).length;
      } catch (err) {
        FLAGS.rtdbAgentNumConnections = 0;
        // console.error(`rtdbAgentRef most likely not yet instantiated: ${err}`);
      }
    });

    if (
      TASK.Agent == "SaveImages"
      && CURRTRIAL.num >= TQS.samplebag_indices.length - 1
    ) {
      return;
    }//IF saved all images

    // Run automator only after everything is saved
    if (TASK.Automator != 0) {
      await automateTask(automator_data, trialhistory);
    }

    if (FLAGS.need2saveParameters == 1) {
      FLAGS.need2saveParameters = saveParameterstoFirebase();
      // Save parameters asynchronously
    }

    //================= (end) HOUSEKEEPING =================//

    updateHeadsUpDisplay();
	  console.log('END OF TRIAL ', CURRTRIAL.num);
	  CURRTRIAL.num++
    EVENTS.trialnum = CURRTRIAL.num;
    
    if (typeof(TASK.InterTrialInterval) != 'undefined') {
      let remainingInterTrialInterval = (
        TASK.InterTrialInterval - (performance.now() - ITIstart)
      );
      if (remainingInterTrialInterval > 0) {
        await sleep(remainingInterTrialInterval);
      }
    }
  }

})();