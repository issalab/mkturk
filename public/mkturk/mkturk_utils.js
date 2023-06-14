function index_init(){
  // Check Availability of APIs
  if (!ENV.MTurkWorkerId) {
    if (typeof navigator.usb == 'object') { ENV.WebUSBAvailable = 1; }
    if (typeof navigator.bluetooth == 'object') { ENV.WebBluetoothAvailable = 1; }
    if (typeof navigator.getBattery == 'function') { ENV.BatteryAPIAvailable = 1; }
  }//IF !AmazonMTurk

  //Set SampleCommand line back to 0 before close window
  window.addEventListener('beforeunload', async (evt) => {
    usbDeviceWorker.postMessage({ action: "writeSampleCommandTriggertoUSB", val: 'b0' });
    await sleep(20)
  });

  // Button callbacks for inline connection to arduino device
  document.querySelector('button[id=googlesignin]').style.display = 'block';
  document.querySelector('button[id=googlesignin]').style.visibility = 'visible';
  document.querySelector('button[id=googlesignin').addEventListener('pointerup', firebaseRedirectSignIn, false);
  document.querySelector('button[id=reloadpage]').addEventListener('pointerup', () => { window.location.reload(); },false);

  //---- for Safari
  document.querySelector('button[id=googlesignin]').addEventListener('click', firebaseRedirectSignIn, false);
  document.querySelector('button[id=reloadpage]').addEventListener('click',() => {window.location.reload();},false);
  //---- (END) for Safari

  document.addEventListener('keyup', manualPumpKeyboardCallback, false);

  //============= Initialize Audio & Battery Objects ==================//
  // Prevent window scrolling and bounce back effect
  document.body.addEventListener('touchmove',(event) => { event.preventDefault(); }, { capture: false, passive: false });

  //Audio pulses for reward
  audiocontext = new (window.AudioContext || window.webkitAudioContext)();
  gainNode = audiocontext.createGain();
  gainNode.connect(audiocontext.destination);

  ENV.DevicePixelRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;

  var visiblecontext = VISIBLECANVAS.getContext('2d', { desynchronized: true,});

  ENV.BackingStoreRatio =
    visiblecontext.webkitBackingStorePixelRatio || visiblecontext.mozBackingStorePixelRatio ||
    visiblecontext.msBackingStorePixelRatio || visiblecontext.oBackingStorePixelRatio ||
    visiblecontext.backingStorePixelRatio || 1;

  ENV.CanvasRatio = ENV.BackingStoreRatio / ENV.DevicePixelRatio;

  // Check Availability of Battery API
  if (ENV.BatteryAPIAvailable) {
    // Monitor Battery - from: https://www.w3.org/TR/battery-status/
    navigator.getBattery().then((batteryobj) => {
      logEVENTS('Battery',[batteryobj.level, batteryobj.dischargingTime],'timeseries');
      batteryobj.addEventListener('levelchange', () => {
        logEVENTS('Battery', [batteryobj.level, batteryobj.dischargingTime], 'timeseries');
      });
    });//getBattery.then
  } // Do nothing if BatteryAPI unavailable
  //============= (end) Initialize Audio & Battery Objects ==================//
}//FUNCTION index_init()

async function index_init_awaits(){
  document.querySelector('button[id=quickload]').addEventListener('pointerup', quickLoad_listener, false);
  document.querySelector('button[id=quickload]').addEventListener('click', quickLoad_listener, false); //for Safari

  if (ENV.WebUSBAvailable) {
    await usb_scriptLoaded;
    document.querySelector('button[id=connectusb]').addEventListener('pointerup', findUSBDevice, false);
    document.querySelector('button[id=nousb]').addEventListener('pointerup', skipHardwareDevice, false);
    document.querySelector('button[id=preemptRFID]').addEventListener('pointerup', preemptRFID_listener, false);

    //---- for Safari
    document.querySelector('button[id=connectusb]').addEventListener('click', findUSBDevice, false);
    document.querySelector('button[id=nousb]').addEventListener('click', skipHardwareDevice, false);
    document.querySelector('button[id=preemptRFID]').addEventListener('click', preemptRFID_listener, false);
    //---- (END) for Safari
  }//IF WEBUSBAvailable

  if (ENV.WebBluetoothAvailable) {
    await ble_scriptLoaded;
    await blescale_scriptLoaded;
    //Button callback for asynchronous connection to bluetooth scale
    document.querySelector('button[id=connectblescale]').addEventListener('pointerup', blescaleconnect, false);

    //---- for Safari
    document.querySelector('button[id=connectblescale]').addEventListener('click', blescaleconnect, false);
    //---- (END) for Safari
  }//IF WEBBluetoothAvailable

  document.querySelector('button[id=donePracticingTask]').addEventListener('pointerup', donePracticingTask_listener, false);
  document.querySelector('button[id=stressTest]').addEventListener('touchstart', stressTest_listener, false);
  document.querySelector('button[id=gridPoints]').addEventListener('touchstart', gridPoints_listener, false);

  //---- for Safari
  document.querySelector('button[id=donePracticingTask]').addEventListener('click', donePracticingTask_listener, false);
  document.querySelector('button[id=stressTest]').addEventListener('click', stressTest_listener, false);
  document.querySelector('button[id=gridPoints]').addEventListener('click', gridPoints_listener, false);
  //---- (END) for Safari

  //====================== Retrieve device's screen properties ===========================//
  ENV.WebAppUrl = window.location.href;
  ENV.UserAgent = window.navigator.userAgent;
  ENV.DeviceScreenWidth = window.screen.width;
  ENV.DeviceScreenHeight = window.screen.height;

  var deviceProperties = await deviceDetect();
  ENV.DeviceType = deviceProperties.data.device.type;
  ENV.DeviceBrand = deviceProperties.data.device.brand;
  ENV.DeviceName = deviceProperties.data.device.model;
  ENV.DeviceGPU = deviceProperties.data.gpu.renderer;
  ENV.DeviceBrowserName = deviceProperties.data.client.name;
  ENV.DeviceBrowserVersion = deviceProperties.data.client.version;
  ENV.DeviceOSName = deviceProperties.data.os.name;
  ENV.DeviceOSVersion = deviceProperties.data.os.version;
  ENV.DeviceTouchscreen = deviceProperties.data.touchscreen;

  let screenSpecs;
  ENV.FrameRateMovie = 60;
  const fps = await estimatefps();
  ENV.FrameRateDisplay = fps;

  updateHeadsUpDisplay();
  //====================== (END) Retrieve device's screen properties ===========================//

  //====================== Quickload Button Set-up ===========================//
  // GET PARAMFILE NAME
  var subjectlistobj = document.getElementById('subjectID_select');

  subjectlistobj.addEventListener('change', subjectlist_listener, false);
  subjectlistobj.style.visibility = 'visible';

  if (localStorage.getItem('Agent') != null) {
    // IF agent stored locally, show quickload button
    QuickLoad.agent = localStorage.getItem('Agent');
    console.log('QuickLoad.agent:', QuickLoad.agent);
    QuickLoad.connectusb = localStorage.getItem('ConnectUSB');

    if (QuickLoad.connectusb == null) {
      QuickLoad.connectusb = 0;
    }

    document.querySelector('button[id=quickload]').style.display = 'block';
    document.querySelector('button[id=quickload]').style.visibility = 'visible';

    if (QuickLoad.connectusb == 0) {
      document.querySelector('button[id=quickload]').innerHTML = QuickLoad.agent;
    } else if (QuickLoad.connectusb == 1) {
      document.querySelector('button[id=quickload]').innerHTML = QuickLoad.agent + ' <i>USB</i>';
    }
  } else {
    // ELSE don't show button
    document.querySelector('button[id=quickload]').style.display = 'none';
  }
  //====================== (END) Quickload Set-up ===========================//

  if (ENV.WebUSBAvailable){
    if (typeof port.connected == 'undefined' || port.connected == false) {
      await usbAutoConnectPromise()
    }
  }//(init) IF WebUSBAvailable, try to autoconnect

  return 1
}//FUNCTION index_init_awaits()

async function index_init_params_screen_automator(){
  //================== AWAIT LOAD SUBJECT PARAMS ==================//
  document.querySelector('div[id=subjectID_div]').style.display = 'block';
  document.querySelector('div[id=subjectID_div]').style.visibility = 'visible';
  await subjectIDPromise();
  document.querySelector('button[id=quickload]').style.display = 'none';
  document.querySelector('div[id=subjectID_div]').style.display = 'none';

  localStorage.setItem('Agent', ENV.Subject);

  if (ENV.MTurkWorkerId) {
    ENV.ParamFileName = PARAM_DIRPATH + ENV.MTurkWorkerId + '_' +
                        ENV.AssignmentId + '_' + ENV.HITId + '_params.json';
  }//IF Amazon MTurk agent
  else {
    ENV.ParamFileName = PARAM_DIRPATH + ENV.Subject + '_params.json';
  }//ELSE standard agent
  await loadParametersfromFirebase(ENV.ParamFileName);

  if (TASK.Automator != 0) {
    automator_data = await loadTextfromFirebase(TASK.AutomatorFilePath);
  }//IF Automator

  if (TASK.Agent == 'SaveImages') {
    if (TASK.Automator != 0 ){
      var concat_imagebagsample = [];
      for (i = 0; i < automator_data.length; i++) {
        concat_imagebagsample.push(...automator_data[i].ImageBagsSample);
      }//FOR i automator stages
    }//IF Automator
    else{
      var concat_imagebagsample = TASK.ImageBagsSample;
    }//IF !Automator
    FLAGS.DirHandle = await window.showDirectoryPicker();
    concat_imagebagsample.forEach(async (sceneFilePath) => {
      let sceneFileName = sceneFilePath.split('/').slice(-1)[0];
      let sceneFileDir = sceneFilePath.split('/').slice(-1)[0].split('.json')[0];
      let subDirHandle = await FLAGS.DirHandle.getDirectoryHandle( sceneFileDir, { create: true,} );
      let sceneFileHandle = await subDirHandle.getFileHandle(sceneFileName, { create: true,});

      let wrStream = await sceneFileHandle.createWritable();
      let sceneFileRef = storage.ref().child(sceneFilePath);
      sceneFileRef.getDownloadURL().then(async (url) => {
        let response = await fetch(url);
        let blob = await response.blob();
        await wrStream.write(blob);
        await wrStream.close();
      });
    });
    FLAGS.SaveImagesCvs = document.querySelector('#save-images-canvas');
    FLAGS.SaveImagesCtx = FLAGS.SaveImagesCvs.getContext('2d');
  } //IF SaveImages, ask to stream to local disk

  if (TASK.DeviceConfig !== '') {
    screenSpecs = await queryDevice(TASK.DeviceConfig, 'docname');
    if (screenSpecs.isEmpty) {
      console.error(`TASK.DeviceConfig was defined but no record of ${TASK.DeviceConfig} was found in firestore/devices. Behavior of all downstream display code is no longer guaranteed`);
    }
    else {
      console.log("Success querying firestore record using user-specified TASK.DeviceConfig")
    }
    ENV.ScreenSizeInches = screenSpecs.screenSizeInches;
    ENV.ScreenPhysicalPixels = screenSpecs.screenPhysicalPixels;
    ENV.ScreenRatio = screenSpecs.screenRatio;
    ENV.PhysicalPPI = screenSpecs.ppi;
    ENV.FrameRateMovie = screenSpecs.frameRateMovie === -1 ? 60 : screenSpecs.frameRateMovie;
    
    if (window.innerWidth < window.innerHeight) {
      ENV.ScreenSizeInches =
        [ ENV.ScreenSizeInches[1], ENV.ScreenSizeInches[0],ENV.ScreenSizeInches[2],];

      ENV.ScreenPhysicalPixels =
        [ ENV.ScreenPhysicalPixels[1], ENV.ScreenPhysicalPixels[0],];
    }// IF PORTRAIT flip horizontal and vertical
    ENV.ViewportPixels[0] = ENV.ScreenPhysicalPixels[0] / ENV.DevicePixelRatio;
    ENV.ViewportPixels[1] = ENV.ScreenPhysicalPixels[1] / ENV.DevicePixelRatio;
    if (ENV.DevicePixelRatio !== ENV.ScreenRatio) {
      console.log('User is not running screen at native pixelratio which affects image scaling, will attempt to compensate');
    }//IF !using native pixelratio

    //Compute PPI based on the larger dimension for consistency across portrait/landscape modes
    if (ENV.ViewportPixels[0] >= ENV.ViewportPixels[1]) { ENV.ViewportPPI = ENV.ViewportPixels[0] / ENV.ScreenSizeInches[0];}
    else { ENV.ViewportPPI = ENV.ViewportPixels[1] / ENV.ScreenSizeInches[1];}
  }//IF TASK.DeviceConfig is defined
  else {
    screenSpecs = await queryDevice(ENV.DeviceName, 'model');
    if (!screenSpecs.isEmpty) {
      console.log("Success querying firestore/devices using auto-detected device name with deviceDetect API")
      ENV.ScreenSizeInches = screenSpecs.screenSizeInches;
      ENV.ScreenPhysicalPixels = screenSpecs.screenPhysicalPixels;
      ENV.ScreenRatio = screenSpecs.screenRatio;
      ENV.PhysicalPPI = screenSpecs.ppi;
      ENV.FrameRateMovie = screenSpecs.frameRateMovie === -1 ? 60 : screenSpecs.frameRateMovie;
      if (window.innerWidth < window.innerHeight) {
        ENV.ScreenSizeInches = [ ENV.ScreenSizeInches[1], ENV.ScreenSizeInches[0], ENV.ScreenSizeInches[2],];

        ENV.ScreenPhysicalPixels = [ ENV.ScreenPhysicalPixels[1], ENV.ScreenPhysicalPixels[0],];
      }// IF PORTRAIT flip horizontal and vertical
      ENV.ViewportPixels[0] = ENV.ScreenPhysicalPixels[0] / ENV.DevicePixelRatio;
      ENV.ViewportPixels[1] = ENV.ScreenPhysicalPixels[1] / ENV.DevicePixelRatio;

      //Compute PPI based on the larger dimension for consistency across portrait/landscape modes
      if (ENV.ViewportPixels[0] >= ENV.ViewportPixels[1]) { ENV.ViewportPPI = ENV.ViewportPixels[0] / ENV.ScreenSizeInches[0]; }
      else { ENV.ViewportPPI = ENV.ViewportPixels[1] / ENV.ScreenSizeInches[1];}
    }//IF successful queryDevice
    else {
      console.log('Failure findind device in firestore/devices. Will attempt findDPI code for the optimal ViewportPPI');
      ENV.ViewportPPI = findDPI();
      ENV.ViewportPixels[0] = document.body.clientWidth;
      ENV.ViewportPixels[1] = document.body.clientHeight;
    }//ELSE queryDevice did not retrieve any info, find DPI
  }//ELSE DeviceConfig !defined, try to queryDevice

  if (ENV.FrameRateMovie > ENV.FrameRateDisplay) {
    console.error('Movie is animating at a higher frame rate than display refresh rate');
  }//IF frameRateMovie high
  //================== (END) AWAIT LOAD SUBJECT PARAMS ==================//

  //====================== Connect USB ===========================//
  if (ENV.WebUSBAvailable) {
    if (typeof port.connected == 'undefined' || port.connected == false) {
      await usbAutoConnectPromise()
    }//(subject params load) IF !port.connected, findUSBDevice

    if (
      (typeof port.connected == 'undefined' || port.connected == false) &&
      (QuickLoad.load == 0 || (QuickLoad.load == 1 && QuickLoad.connectusb == 1))
    ) {
      //=============== AWAIT CONNECT TO HARDWARE (via USB) ===============//
      port.connected = false;
      document.querySelector('button[id=connectusb]').style.display = 'block';
      document.querySelector('button[id=connectusb]').style.visibility = 'visible';
      document.querySelector('button[id=nousb]').style.display = 'block';
      document.querySelector('button[id=nousb]').style.visibility = 'visible';

      await connectHardwareButtonPromise();
    }//IF !QuickLoad.load

    document.querySelector('button[id=connectusb]').style.display = 'none';
    document.querySelector('button[id=nousb]').style.display = 'none';
  }//IF WebUSB available
  else {
    port = {
      statustext_connect: '',
      statustext_sent: '',
      statustext_received: '',
      connected: false,
    };
  }//ELSE skip USB
  //====================== (END) Connect USB ===========================//

  //=============== AWAIT CONNECT TO HARDWARE (via Bluetooth) ===============//
  if (ENV.WebBluetoothAvailable == 0) {
    blescale = {
      connected: 0,
      statustext_connect: '',
      statustext_sent: '',
      statustext_received: '',
    };
    ble = {
      connected: 0,
    };
  }//IF WebBLE !available, skip
  //====================== (END) Connect Bluetooth ===========================//

  // =================== LOAD MKMODELS IF SPECIES = MODEL =================//
  // let mkm; XXconverted to globalvar, not sure about this (Oct 29, 2022, EI)
  if (TASK.Species == 'model') {
    TASK.PunishTimeOut = 0;
    mkm = new MkModels();
    let fromTFHub = TASK.ModelConfig.modelURL.includes('tfhub');
    await mkm.loadFeatureExtractor(TASK.ModelConfig.modelURL, {
      fromTFHub: fromTFHub,
    });
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
    var history_file_paths = await getMostRecentBehavioralFilePathsFromFirebase(
      ndatafiles2read,ENV.Subject, subject_behavior_save_directory);
    trialhistory = await readTrialHistoryFromFirebase(history_file_paths);
  }//IF TASK.Automator

  //===================== AWAIT INITIALIZE AUTOMATOR =================//
  // Initialize automator - change TASK to that specified by TASK.CurrentAutomatorStage.
  var num_prebuffer_trials = 300;
  if (TASK.Automator > 0) {
    automateTask(automator_data, trialhistory);
    await saveParameterstoFirebase();
    await loadParametersfromFirebase(ENV.ParamFileName);
  } //IF TASK.Automator > 0

  //============= AWAIT LOAD SOUNDS =============//
  soundpromises = sounds.serial.map(loadSoundfromFirebase); //create array of sound load Promises
  await Promise.all(soundpromises); //simultaneously evaluate array of sound load promises
  updateStatusText('');

  //========= Start in TEST mode =======//
  document.querySelector('button[id=googlesignin]').style.display = 'none'; //if do style.visibility=hidden, element will still occupy space
  document.querySelector('button[id=reloadpage]').style.display = 'block';
  document.querySelector('button[id=reloadpage]').style.visibility = 'visible';

  document.querySelector('button[id=donePracticingTask]').style.display = 'block';
  document.querySelector('button[id=donePracticingTask]').style.visibility ='visible';
  document.querySelector('button[id=gridPoints]').style.display = 'block';
  document.querySelector('button[id=gridPoints]').style.visibility = 'visible';

  return 1;
}//FUNCTION index_init_params_screen_automator()

async function index_reloadparameters(){
  if (port.connected) {
    usbDeviceWorker.postMessage({ action: "writeSampleCommandTriggertoUSB", val: 'b0' });
    usbDeviceWorker.postMessage({ action: "writepumptopauseeyetoUSB", val: '|' });//pause eyetracker
  }
  FLAGS.need2loadParameters = await loadParametersfromFirebase(ENV.ParamFileName);

  if (TASK.Agent == 'SaveImages') {
    document.querySelector('button[id=stressTest]').innerHTML = 'Save Images';
    TASK.SamplingStrategy = 'sequential';
    console.log('Automatically using sequential sampling since SAVE IMAGES was specified.');
    // FLAGS.DirHandle = await window.showDirectoryPicker();
  } //IF SaveImages

  //load previous calibration if available
  if (ENV.Eye.TrackEye > 0) {
    // IF trackeye
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

    if (ENV.Eye.CalibXTransform.length == 0) {
      // Default calibration
      var xrange = 0.5;
      var yrange = 0.5;
      var xscale = ENV.ViewportPixels[0] / xrange;
      var yscale = ENV.ViewportPixels[1] / yrange;

      ENV.Eye.CalibXTransform = [xscale, 0, -(0.5 - xrange / 2) * xscale];
      ENV.Eye.CalibYTransform = [0,-yscale, ENV.ViewportPixels[1] + (0.5 - yrange / 2) * yscale,];

      saveEyeCalibrationtoFirestore(
        ENV.Eye.CalibXTransform, ENV.Eye.CalibYTransform,
        ENV.Eye.NCalibPoints, ENV.Eye.CalibType
      );
    } //IF ENV.Eye.CalibXTransform.length==0

    // will calibrate using TASK.CalibrateEye number of trials for train & same number for test
    if (TASK.CalibrateEye > 0) {
      // IF CalibrateEye
      ENV.Eye.calibration = 1;
      ENV.Eye.NCalibPointsTrain = 0;
      ENV.Eye.NCalibPointsTest = 0;
      ENV.Eye.CalibTrainMSE = [];
      ENV.Eye.CalibTestMSE = [];
    } //IF TASK.CalibrateEye
  } //IF ENV.Eye.TrackEye

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

  CANVAS.workspace = [0, 0, VISIBLECANVAS.width, VISIBLECANVAS.height];

  TQS = undefined;
  FLAGS.need2loadScenes = 1;

  //Determine task type
  if (TASK.RewardStage == 0) {
    ENV.Task = 'FIXATION';
  } //IF RewardStage==0
  else if (TASK.RewardStage == 1) {
    if (TASK.NRSVP > 0) {
      ENV.Task = 'RSVP';
    } else if (TASK.SameDifferent > 0 && TASK.ChoiceGridIndex.length == 2) {
      ENV.Task = 'SD'; //Same-Different
    } else if (TASK.ObjectGridIndex.length == TASK.ImageBagsSample.length) {
      ENV.Task = 'SR'; //Stimulus-Response
    } else {
      ENV.Task = 'MTS'; //Match-to-Sample
    }
  } //ELSEIF RewardStage==1

  //Size of Fixation screen circle or image
  ENV.FixationRadius = (TASK.FixationSizeInches / 2) * ENV.ViewportPPI;

  //Size of Choice screen circle or square
  ENV.ChoiceRadius = (TASK.ChoiceSizeInches / 2) * ENV.ViewportPPI;

  //Fixation dot, if >0, will appear on both fixation & sample screens
  ENV.FixationDotRadius = (TASK.FixationDotSizeInches / 2) * ENV.ViewportPPI;
  
  //Fixation window, if specified, operates on both fixation & sample screens
  ENV.FixationWindowRadius = (TASK.FixationWindowSizeInches / 2) * ENV.ViewportPPI;

  // Photodiode Square to display on the bottom right (hard coded size & position)
  ENV.PhotodiodeSquareWidth = ENV.PhotodiodeSquareSizeInches * ENV.ViewportPPI;
  ENV.PhotodiodeSquareX = ENV.ViewportPixels[0] - ENV.PhotodiodeSquareWidth / 2 - CANVAS.offsetleft;
  ENV.PhotodiodeSquareY = ENV.ViewportPixels[1] - ENV.PhotodiodeSquareWidth / 2 - CANVAS.offsettop;

  // define image display grid
  funcreturn = defineImageGrid(
    TASK.NGridPoints,
    TASK.GridSpacingInches * ENV.ViewportPPI,
    TASK.GridXOffsetInches * ENV.ViewportPPI,
    TASK.GridYOffsetInches * ENV.ViewportPPI
  );
  xcanvascenter = funcreturn[0];
  ycanvascenter = funcreturn[1];
  ENV.XGridCenter = funcreturn[2];
  ENV.YGridCenter = funcreturn[3];

  //Reward/Punish Square to display at grid center (hard coded size & position)
  ENV.RewardSquareWidth = Math.max(VISIBLECANVAS.width, VISIBLECANVAS.height)/3
  ENV.RewardSquareSizeInches = ENV.RewardSquareWidth/ENV.ViewportPPI
  ENV.RewardSquareXY[0] = xcanvascenter;
  ENV.RewardSquareXY[1] = ycanvascenter;
  
  ENV.PunishSquareWidth = Math.max(VISIBLECANVAS.width, VISIBLECANVAS.height)
  ENV.PunishSquareSizeInches = ENV.PunishSquareWidth/ENV.ViewportPPI
  ENV.PunishSquareXY = ENV.RewardSquareXY

  FLAGS.purge = 1;
  FLAGS.createnewfirestore = 1;
  CURRTRIAL.reset();
  EVENTS.reset_trialseries();
  EVENTS.reset_timeseries();
  return 1
}//FUNCTION index_reloadparameters()

async function index_loadScenes(){
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
  FLAGS.usecanvas2D = 1
  for (let i = 0; i < TASK.ImageBagsSample.length; i++) {
    IMAGES.Sample[i] = await loadTextfromFirebase(TASK.ImageBagsSample[i]);
    if (typeof(IMAGES.Sample[i]['CAMERAS']) != "undefined" ||
        typeof(IMAGES.Sample[i]['LIGHTS']) != "undefined" ||
        typeof(IMAGES.Sample[i]['OBJECTS']) != "undefined"){
      FLAGS.usecanvas2D = 0;
    }//IF
  }//FOR i samplebags

  for (let i = 0; i < TASK.ImageBagsTest.length; i++) {
    IMAGES.Test[i] = await loadTextfromFirebase(TASK.ImageBagsTest[i]);
    if (typeof(IMAGES.Test[i]['CAMERAS']) != "undefined" ||
        typeof(IMAGES.Test[i]['LIGHTS']) != "undefined" ||
        typeof(IMAGES.Test[i]['OBJECTS']) != "undefined"){
      FLAGS.usecanvas2D = 0;
    }//IF
  }//FOR i testbags

  // find the longest scene param array in IMAGES (ie # of stim)
  for (let i = 0; i < IMAGES.Sample.length; i++) {
    IMAGES.Sample[i].nimages = getLongestArray(IMAGES.Sample[i]);
    IMAGES.Test[i].nimages = getLongestArray(IMAGES.Test[i]);

    //Determine if images will also be rendered
    IMAGES.Sample[i].nbackgroundimages = IMAGES.Sample[i].IMAGES.imageidx.length;
    IMAGES.Test[i].nbackgroundimages = IMAGES.Test[i].IMAGES.imageidx.length;

    FLAGS.movieper['Sample'][i] = [];
    FLAGS.movieper['Test'][i] = [];
  } //FOR i samplebags
  //============ (END) 0: LOAD SCENES from JSON ============//

if (!FLAGS.usecanvas2D)
{
  //============ 1: LOAD MESHES FOR SCENES ============//
  OBJECTS = { Sample: {}, Test: {} };
  for (let taskscreen in OBJECTS) {
    let meshPaths = [];
    let meshIdxs = [];

    for (
      let classLabel = 0;
      classLabel < IMAGES[taskscreen].length;
      classLabel++
    ) {
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
    renderer.compile(scene[scenetype],scene[scenetype].getObjectByName('cam0'));
  }
  console.log('3js: compiled scene');
  //============ (END) 4: PRELOAD SHADERS (COMPILE) ============//
}//IF !FLAGS.usecanvas2D

if (FLAGS.usecanvas2D){
  for (let scenetype in IMAGES) { expandImage2DFrames(scenetype) }
}//IF FLAGS.usecanvas2D

  FLAGS.need2loadScenes = 0;

  // Make a scene trial queue TQS (overrides TQ)
  TQS = new TrialQueueScene(TASK.SamplingStrategy);
  await TQS.build(ENV.NumPrebufferTrials);

  // Store scene metadata
  let sampleSceneMeta = objectomeSceneNamesToLatentVars(
    TASK.ImageBagsSample,
    TQS.testbag_labels,
    IMAGES.Sample
  );
  let sampleSceneMetaKeys = Object.keys(sampleSceneMeta);
  for (let i = 0; i < sampleSceneMetaKeys.length; i++) {
    IMAGEMETA['Sample' + sampleSceneMetaKeys[i]] =
      sampleSceneMeta[sampleSceneMetaKeys[i]];
  }

  let testSceneMeta = objectomeSceneNamesToLatentVars(
    TASK.ImageBagsTest,
    TQS.testbag_labels,
    IMAGES.Test
  );
  let testSceneMetaKeys = Object.keys(testSceneMeta);
  for (let i = 0; i < testSceneMetaKeys.length; i++) {
    IMAGEMETA['Test' + testSceneMetaKeys[i]] =
      testSceneMeta[testSceneMetaKeys[i]];
  }
  return 1
}//FUNCTION index_loadScenes()

function index_expandframes(taskscreen,ind){
  let t0=0;
  if (taskscreen == 'Sample'){
    //Start with blank for max(100,SampleOFF), then append SampleON+blank (eg, blank,Sample,blank,Sample,blank)
    //EXPAND SAMPLE (for rsvp & movies)
    //Start with blank for max(100,SampleOFF), then append SampleON+blank (eg, blank,Sample,blank,Sample,blank)
    // FOR i RSVP Sample
    if (ind >= 1){ t0 = CURRTRIAL.tsequencedesired[CURRTRIAL.tsequencedesired.length - 1]; }
    let sampleon = chooseArrayElement(
      IMAGES['Sample'][CURRTRIAL.sample_scenebag_label[ind][0]].durationMS,
      CURRTRIAL.sample_scenebag_index[ind][0],0
    );

    let blankdurationpre;
    if (ind == 0) { blankdurationpre = TASK.SamplePRE; }//IF 1st stim
    else { blankdurationpre = 0; }

    let taskscreen = 'Sample'
    if (sampleon <=0 && TASK.KeepSampleON){
      sampleon = 1000/ENV.FrameRateMovie;
      taskscreen = 'SampleBlank';
    }//instanstiate one frame if need for test screen, but then hide for sample screen

    // Create Movie Sequence
    [ movie_sequence, movie_tsequence, movie_framenum ] =
      createMovieSeq_frames(taskscreen, blankdurationpre, sampleon, TASK.SampleOFF, ENV.FrameRateMovie);
    movie_tsequence = movie_tsequence.map((a) => { return a + t0; });
    return [ movie_sequence, movie_tsequence, movie_framenum ]
  }//IF Sample

  if (taskscreen == "Test"){
    t0 = CURRTRIAL.tsequencedesired[CURRTRIAL.tsequencedesired.length - 1];
    let teston = chooseArrayElement(
      IMAGES['Test'][CURRTRIAL.test_scenebag_labels[0][0]].durationMS,
      CURRTRIAL.test_scenebag_indices[0][0],
      0
    );

    if (typeof teston == 'undefined') {
      console.log(
        'Without this if, then print-to-console code, teston is undefined. Not clear why this strange behavior happens. Something to do with chooseArrayElement returning in time.'
      );
    }

    [movie_sequence, movie_tsequence, movie_framenum] = 
      createMovieSeq_frames('Test', TASK.SampleOFF, teston, TASK.TestOFF, ENV.FrameRateMovie);
    movie_tsequence = movie_tsequence.map((a) => { return a + t0; });
    return [ movie_sequence, movie_tsequence, movie_framenum ]
  }//IF Test

  if (taskscreen == "Choice"){
    t0 = CURRTRIAL.tsequencedesired[CURRTRIAL.tsequencedesired.length - 1];
    let seq;
    let tseq;

    if (TASK.TestOFF > 0) {
      seq = ['blank', 'choice'];
      tseq = [t0, t0 + TASK.TestOFF];
    } else {
      seq = ['choice'];
      tseq = [t0];
    }

    return [ seq, tseq, [] ]
  }//IF Choice
}//FUNCTION index_expandframes

async function index_checkrfid(){
    /**
     * If no matching read in the last TASK.CheckRFID seconds, wait for matching read
     * (kicks-them-off model where they can work as long as reading, but then get
     * kicked off within TASK.CheckRFID seconds if they are the wrong agent or no reads)
     */
    if (!port.connected) {
      console.log('NO USB DEVICE CONNECTED: cannot check RFID!!');
    }
    else {
      let nreads = Object.keys(EVENTS['timeseries']['RFIDTag']).length;
      // IF RFID does not check out, wait for a recent RFID read before proceeding with the next trial
      if (
        !(
          nreads > 0 &&
          EVENTS['timeseries']['RFIDTag'][nreads - 1][2] == ENV.AgentRFID &&
          Date.now() - new Date(EVENTS['timeseries']['RFIDTag'][nreads - 1][1]) < TASK.CheckRFID
        )
      ) {
        await rfid_promise(ENV.AgentRFID, TASK.CheckRFID);
      }//IF !detected agent in CheckRFID seconds
    }
    return 1
}//FUNCTION index_checkrfid()

async function index_send_filecode(){
  //Get file's time
  let ind_start = ENV.DataFileName.lastIndexOf('T');
  let ind_end = ENV.DataFileName.indexOf('_');
  let filetime = ENV.DataFileName.substring(ind_start + 1, ind_end);
  let time_digits = [
    Number(filetime[0]), Number(filetime[1]), //hours
    Number(filetime[3]), Number(filetime[4]), //minutes
    Number(filetime[filetime.length-2]), Number(filetime[filetime.length-1]) //seconds
];
  for (let i=0; i<=time_digits.length-1; i++){
    usbDeviceWorker.postMessage({ action: "writeSampleCommandTriggertoUSB", val: 'f1' });
    await sleep(10*(time_digits[i]+1));
    usbDeviceWorker.postMessage({ action: "writeSampleCommandTriggertoUSB", val: 'f0' });
    await sleep(25);//milliseconds  
  }//FOR i digits

  FLAGS.filecodeSent = 1;
  return 1
}//FUNCTION index_send_filecode()

async function index_send_trialcode(){
  var str = String(CURRTRIAL.num).padStart(4,'0') //max trial# 9999

  for (var i=0; i<=str.length-1; i++){
    usbDeviceWorker.postMessage({ action: "writeTrialCodetoUSB", val: 1 });
    await sleep(10*(Number(str[i])+1));
    usbDeviceWorker.postMessage({ action: "writeTrialCodetoUSB", val: 0 });
    if (i<str.length-1){
      await sleep(25);//milliseconds
    }//postpend gap between digits
  }//FOR i digits
  return 1
}//FUNCTION index_send_trialcode()

function index_log_displaytimes(){
  //Store timing of clip presentations
  CURRTRIAL.tsequencedesiredclip = [];
  CURRTRIAL.tsequenceactualclip = [];

  for (let f = 0; f < CURRTRIAL.sequencetaskscreen.length; f++) {
    if ( f == 0 ||
      CURRTRIAL.sequencetaskscreen[f] != CURRTRIAL.sequencetaskscreen[f - 1] ||
      CURRTRIAL.sequenceclip[f] != CURRTRIAL.sequenceclip[f - 1]
    ){
      CURRTRIAL.tsequencedesiredclip.push(CURRTRIAL.tsequencedesired[f]);
      if ( f > CURRTRIAL.tsequenceactual.length - 1 || CURRTRIAL.tsequenceactual[f] === undefined) {
        CURRTRIAL.tsequenceactualclip.push(-1);
      }//IF clip not shown OR tsequenceactual[f] undefined
      else {
        CURRTRIAL.tsequenceactualclip.push(CURRTRIAL.tsequenceactual[f]);
      }//ELSE clip shown
    }// IF new clip || new taskscreen within that clip
  }//FOR f frames

  logEVENTS('TSequenceDesiredClip',CURRTRIAL.tsequencedesiredclip,'trialseries');
  logEVENTS('TSequenceActualClip',CURRTRIAL.tsequenceactualclip,'trialseries');
  logEVENTS('SampleStartTime', CURRTRIAL.samplestarttime, 'trialseries');
  logEVENTS('FrameNum', CURRTRIAL.sequenceframe, 'timeseries');
  logEVENTS('TSequenceDesired', CURRTRIAL.tsequencedesired, 'timeseries');
  logEVENTS('TSequenceActual', CURRTRIAL.tsequenceactual, 'timeseries');

  // Store absolute timestamp of beginning of display, since display times are relative
  let lastFrameIdx = Object.keys(EVENTS['timeseries']['FrameNum']).length - 1;
  let lastTSequenceDesiredIdx = Object.keys(EVENTS['timeseries']['TSequenceDesired']).length - 1;
  let lastTSequenceActualIdx = Object.keys(EVENTS['timeseries']['TSequenceActual']).length - 1;

  EVENTS['timeseries']['FrameNum'][lastFrameIdx][1] = CURRTRIAL.samplestarttime_string;
  EVENTS['timeseries']['TSequenceDesired'][lastTSequenceDesiredIdx][1] = CURRTRIAL.samplestarttime_string;
  EVENTS['timeseries']['TSequenceActual'][lastTSequenceActualIdx][1] = CURRTRIAL.samplestarttime_string;
  
  //Frame Irregularities
  var dframe = [];
  for (var f=0; f<=CURRTRIAL.tsequenceactual.length-1; f++){
    if (CURRTRIAL.tsequenceactual[f] > 0){
      dframe[f] = CURRTRIAL.tsequenceactual[f] - CURRTRIAL.tsequencedesired[f];
    }//If frame shown
  }//FOR f frames
  try{
    funcreturn = getMeanStandardDeviation(dframe);
    console.log("Display timing (actual-desired): " + funcreturn[0] + " +- " + funcreturn[1] + ' ms');
  }
  catch{
    console.log("ISSUE computing ∆ of actual-desired display times -->"
                + "  actual:" + CURRTRIAL.tsequenceactual 
                + "  desired:" + CURRTRIAL.tsequencedesired)
  }
  if (FLAGS.savedata == 0) {
    updateImageLoadingAndDisplayText(' '); // displays frame tactual - tdesired
  }
}//FUNCTION index_log_displaytimes()

function index_determine_numrewards(){
  if (TASK.RewardStage == 0 && CURRTRIAL.samplereward == 0) {
    CURRTRIAL.nreward = -1;
  }//skip reward/punish
  else if ( TASK.RewardStage>0 && 
            ENV.NRSVPMin>0 && ENV.NRSVPMax>0 && ENV.NRSVPMax > ENV.NRSVPMin) {
    if (CURRTRIAL.nclipshown < ENV.NRSVPMin) {
      CURRTRIAL.nreward = 0;
    }//IF viewed <min clips, no reward
    else { // exponential reward = 1*exp(a*(nseen - nmin)), where a = ln(rmax)/(nmax-nmin)
      CURRTRIAL.nreward =
        Math.exp( (Math.log1p(TASK.NRewardMax - 1) / (ENV.NRSVPMax - ENV.NRSVPMin)) * (CURRTRIAL.nclipshown - ENV.NRSVPMin) );
      CURRTRIAL.nreward = Math.round(CURRTRIAL.nreward);
    }//ELSE reward exponentially based on nclips fixated
  }//IF RSVP, reward based on nclips fixated in RSVP sequence
  else if ( CURRTRIAL.correct && (CURRTRIAL.samplereward == -1 || TASK.RewardStage == 0) ) {
    let lastStartTimeIdx = trialhistory.starttime.length - 1;
    if ( FLAGS.savedata ) {
        FLAGS.consecutivehits++;
    }//IF correct during data saving, accumulates consecutive hits
    else {
      FLAGS.consecutivehits = 1;
    }//ELSE took too long, reset consecutive hits
    CURRTRIAL.nreward = 1 + Math.floor(FLAGS.consecutivehits / TASK.NConsecutiveHitsforBonus);

    if (CURRTRIAL.nreward > TASK.NRewardMax) {
      CURRTRIAL.nreward = TASK.NRewardMax;
    }//IF cap to Max allowable NRewards
  }//ELSE IF choice task, default behavior for correct choice
  else if (CURRTRIAL.correct && CURRTRIAL.samplereward >= 1) {
    // Override if user had manually set reward for that sample image in image_reward_list file
    CURRTRIAL.nreward = CURRTRIAL.samplereward;
  }//ELSE IF user-specified reward per stimulus
  else if (!CURRTRIAL.correct) {
    FLAGS.consecutivehits = 0;
    CURRTRIAL.nreward = 0;
  }//ELSE IF incorrect choice
}//FUNCTION index_determine_numberrrewards()

function index_housekeeping_eye(){
  // Calibrate eye
  if (ENV.Eye.TrackEye > 0) {
    // 1 - Can manually adjust xform params only when on practice trials
    // 2 - Will automatically determine calibration xform when on test trials

    if (FLAGS.savedata == 1 && ENV.Eye.calibration == 1) {
      // IF train eye calibration
      if (CURRTRIAL.fixationtouchevent.includes('held')) {
        ENV.Eye.NCalibPointsTrain++;
      }

      if (ENV.Eye.NCalibPointsTrain == TASK.CalibrateEye) {
        //IF enough points, run calibration fitting
        let calibreturn = runcalibration();
        ENV.Eye.CalibXTransform = calibreturn.xtform;
        ENV.Eye.CalibYTransform = calibreturn.ytform;
        ENV.Eye.NCalibPoints = calibreturn.n;
        ENV.Eye.CalibType = calibreturn.type;

        // Compute GOF
        ENV.Eye.CalibTrainMSE[0] = compute_mse( calibreturn.predictedx, calibreturn.actualx );
        ENV.Eye.CalibTrainMSE[1] = compute_mse( calibreturn.predictedy, calibreturn.actualy );

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

        ENV.Eye.calibration = 0;
      }//IF enough points for calibration
    }//IF ENV.Eye.calibration==1
    else if (FLAGS.savedata == 1 && ENV.Eye.calibration == 0) {
      if (CURRTRIAL.fixationtouchevent.includes('held')) {
        ENV.Eye.NCalibPointsTest++;
        var mse = evaluateCalibration(); //GOF test
        ENV.Eye.CalibTestMSE = mse[0];
        ENV.Eye.CalibTestMSETarg.x = mse[1][0];
        ENV.Eye.CalibTestMSETarg.y = mse[1][1];
        ENV.Eye.CalibTestMSETarg.n = mse[1][2];
      }//IF held
    }//ELSEIF testing calibration

    if (typeof EVENTS['timeseries']['EyeData'][0] != 'undefined') {
      let firstTimestamp = new Date(EVENTS['timeseries']['EyeData'][0][1]);
      let lastIdx = Object.keys(EVENTS['timeseries']['EyeData']).length - 1;
      let lastTimestamp = new Date( EVENTS['timeseries']['EyeData'][lastIdx][1]);

      let interval = (lastTimestamp.valueOf() - firstTimestamp.valueOf()) / lastIdx;
      logEVENTS('EyetrackerSampleInterval', interval, 'trialseries');
    }//IF EyeData, compute SR (n samples / total interval)
    else {
      logEVENTS('EyetrackerSampleInterval', 0, 'trialseries');
    }//ELSE no eye tracking data
  }//IF trackeye

  if (FLAGS.savedata == 0 || CURRTRIAL.num <= 1) {
    EYETRACKERCANVAS.getContext('2d').clearRect(0,0, EYETRACKERCANVAS.width,EYETRACKERCANVAS.height);
  }//IF practice screen, clear eye tracker canvas at end of trial
}//FUNCTION index_housekeeping_eye

function index_housekeeping_effector_data(){
  //funnels touch or eye timeseries data to json data file
    eventtype = 'timeseries';
    if (ENV.Eye.TrackEye){ eventname = 'EyeData';}
    else if (!ENV.Eye.TrackEye){ eventname = 'TouchData';}
    let t = [];
    let x = [];
    let y = [];
    let w = [];
    let a = [];
    let q = [];

    let nsamples = Object.keys(EVENTS[eventtype][eventname]).length;
    for (let i=0; i<=nsamples-1; i++ ){
      var trialnum = EVENTS[eventtype][eventname][i][0]
      var timestamp = new Date(EVENTS[eventtype][eventname][i][1]) - ENV.CurrentDate
      if (trialnum == CURRTRIAL.num && timestamp >= EVENTS['trialseries']['StartTime'][trialnum]+ENV.EffectorSaveJSONDataRelativetoFixationDotDisplayMS){
        t.push(timestamp - EVENTS['trialseries']['StartTime'][trialnum])

        if (eventname == 'EyeData'){
          x.push(EVENTS[eventtype][eventname][i][3])
          y.push(EVENTS[eventtype][eventname][i][4])
          // w.push(EVENTS[eventtype][eventname][i][5])
          // a.push(EVENTS[eventtype][eventname][i][6])
        }//IF Eye
        else if (eventname == 'TouchData'){
          x.push( EVENTS[eventtype][eventname][i][2] + CANVAS.offsetleft )
          y.push( -EVENTS[eventtype][eventname][i][3] + ENV.ViewportPixels[1] )
          // q.push(EVENTS[eventtype][eventname][i][4])
        }//IF Touch
      }//IF within ENV.EffectorSaveJSONDataRelativetoFixationDotDisplayMS of currtrial
    }//FOR i times sampled
// console.log('N=' + t.length + '  t_effector ' + [...t] )
    EVENTS['timeseries']['EffectorData'].t[CURRTRIAL.num] = new Int16Array(t)
    EVENTS['timeseries']['EffectorData'].x[CURRTRIAL.num] = new Int16Array(x)
    EVENTS['timeseries']['EffectorData'].y[CURRTRIAL.num] = new Int16Array(y)
    // EVENTS['timeseries']['EffectorData'].w[CURRTRIAL.num] = new Int16Array(w)
    // EVENTS['timeseries']['EffectorData'].a[CURRTRIAL.num] = new Int16Array(a)
    // EVENTS['timeseries']['EffectorData'].q[CURRTRIAL.num] = new Int16Array(q)
}//FUNCTION index_housekeeping_effector_xyt

function index_housekeeping_cloudstorage(){
  if (FLAGS.savedata == 1) {
    //Update trial EVENTS & trial tracking variables only if saving data
    updateTrialHistory(); //appends to running trial history

    //GOOGLE CLOUD STORAGE: Save data asynchronously to json
    saveBehaviorDatatoFirebase(TASK, ENV, CANVAS, EVENTS);

    //FIRESTORE DATABASE
    if (TASK.Agent != "SaveImages"){
      // Firestore Database: Save data asynchronously to database
      if (FLAGS.createnewfirestore == 1) {
        saveBehaviorDatatoFirestore(TASK, ENV, CANVAS); //write once
      }//IF new firestore, create firestore doc
      else{
        updateEventDataonFirestore(EVENTS); //event data updates to upload to firestore
      }//ELSE update EVENT data of firestore doc

      //BIGQUERY Eye/Touch
      if (ENV.Eye.TrackEye > 0) {
        if ( TASK.BQSaveEye > 0 ) { saveEyeDatatoBigQuery() }//IF BQsaveEye
      }//IF trackeye
      else if ( TASK.BQSaveTouch > 0 ) { bigQuerySaveTouchData();
      } //IF BQsaveTouch

      //BIGQUERY DisplayTimes
      if ( TASK.BQSaveDisplayTimes > 0 ) { saveDisplayTimestoBigQuery() }//IF BQsaveDisplayTimes
    }//IF !SaveImages, then save to databases      
  }//IF savedata

  if (FLAGS.need2saveParameters == 1) {
    FLAGS.need2saveParameters = saveParameterstoFirebase(); // Save parameters asynchronously
  }
}//FUNCTION index_housekeeping_cloudstorage()

function index_housekeeping_exits(){
  //EXIT: if new day OR MaxTrialsPerFile
  if ( TASK.Agent != "SaveImages" ){
    if ( new Date().getDate() != ENV.CurrentDate.getDate() || CURRTRIAL.num == ENV.MaxTrialsPerFile)
    {
      updateEventDataonFirestore(EVENTS);
      FLAGS.need2loadParameters = 1;

      if (CURRTRIAL.num == ENV.MaxTrialsPerFile){
        console.log('MKTURK RELOADING -- completed ' + ENV.MaxTrialsPerFile + ' trials')
      }
      else{
        console.log('MKTURK RELOADING -- new day started')      
      }
    }//IF new day, start new file or reached 1000 trials
  }//IF !SaveImages

  if ( TASK.Agent == 'SaveImages' && TASK.Automator == 0)
  {
    if (TASK.NRSVP > 1){
      if (CURRTRIAL.num >= Math.ceil(TQS.samplebag_indices.length/TASK.NRSVP)) { 
        console.log('MKTURK EXITING -- all images shown once for SaveImages')
        return 1
      }
    }//IF NRSVP>1
    else{
      if (CURRTRIAL.num >= TQS.samplebag_indices.length - 1) { 
        console.log('MKTURK EXITING -- all images shown once for SaveImages')
        return 1
      }
    }//ELSE
  }//IF saving all images and ran through them once


  if ( TASK.Species == 'model' && CURRTRIAL.num >= TQS.samplebag_indices.length - 1)
  {
    console.log('MKTURK EXITING -- all images shown once for Model')
    return 1
  }//IF model

  if (TASK.CalibrateEye > 0 && ENV.Eye.calibration == 0){
    console.log('MKTURK EXITING -- Done calibrating eye')
    return 1
  }

  return 0
}//FUNCTION index_housekeeping_exits()

function index_update_blocknum(){
  //---- Sequential sampling of samplebags ----//
  TQS.currentbag = TQS.currentbag + 1; //go to next bag
  if (TQS.currentbag > Math.max(...TQS.samplebag_labels)){
    TQS.currentbag = 0; //go back to first bag
  }
  CURRTRIAL.blocknum++
  TQS.currentbag_starttime = -1;//update to Date.now() only when trigger in screenfunctions
}//FUNCTION index_update_blocknum

(function (window) {
  window.utils = {
    parseQueryString: function (str) {
      var ret = Object.create(null);

      if (typeof str !== 'string') {
        return ret;
      }

      str = str.trim().replace(/^(\?|#|&)/, '');

      if (!str) {
        return ret;
      }

      str.split('&').forEach(function (param) {
        var parts = param.replace(/\+/g, ' ').split('=');
        // Firefox (pre 40) decodes `%3D` to `=`
        // https://github.com/sindresorhus/query-string/pull/37
        var key = parts.shift();
        var val = parts.length > 0 ? parts.join('=') : undefined;

        key = decodeURIComponent(key);

        // missing `=` should be `null`:
        // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
        val = val === undefined ? null : decodeURIComponent(val);

        if (ret[key] === undefined) {
          ret[key] = val;
        } else if (Array.isArray(ret[key])) {
          ret[key].push(val);
        } else {
          ret[key] = [ret[key], val];
        }
      });
      return ret;
    },
  };
})(window);

// convert base64 to buffer array (from: http://stackoverflow.com.80bola.com/questions/27524283/save-image-to-dropbox-with-data-from-canvas?rq=1)
function _base64ToArrayBuffer(base64) {
  base64 = base64.split('data:image/png;base64,').join('');
  var binary_string = window.atob(base64),
    len = binary_string.length,
    bytes = new Uint8Array(len),
    i;
  for (i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
}

// ----- Array equality ----
if (Array.prototype.equals)
  console.warn(
    "Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code."
  );
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
  // if the other array is a falsy value, return
  if (!array) return false;

  // compare lengths - can save a lot of time
  if (this.length != array.length) return false;

  for (var i = 0, l = this.length; i < l; i++) {
    // Check if we have nested arrays
    if (this[i] instanceof Array && array[i] instanceof Array) {
      // recurse into the nested arrays
      if (!this[i].equals(array[i])) return false;
    } else if (this[i] != array[i]) {
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      return false;
    }
  }
  return true;
};
// Hide method from for-in loops
Object.defineProperty(Array.prototype, 'equals', { enumerable: false });

// Gets "filename.ext" from some /.../path/filename.ext
function get_filename_from_pathstring(pathstring) {
  var filename = pathstring.replace(/^.*[\\\/]/, '');
  return filename;
}

// Return all indices of val in arr
function getAllInstancesIndexes(arr, val) {
  var indexes = [];
  for (var i = 0; i < arr.length; i++) if (arr[i] === val) indexes.push(i);
  return indexes;
}

// Shuffles an array...in place?
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// convert base64 to buffer array (from: http://stackoverflow.com.80bola.com/questions/27524283/save-image-to-dropbox-with-data-from-canvas?rq=1)
function _base64ToArrayBuffer(base64) {
  base64 = base64.split('data:image/png;base64,').join('');
  var binary_string = window.atob(base64),
    len = binary_string.length,
    bytes = new Uint8Array(len),
    i;
  for (i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
}

function toBytesInt16(num) {
  arr = new ArrayBuffer(2); //2 bytes
  view = new DataView(arr);
  view.setUint16(0, num); //arg1: byteOffset arg3: false || undefined -> bigEndian
  arr = new Uint8Array([view.getUint8(1), view.getUint8(0)]);
  return arr;
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


// async function waitUntil(condition) {
//   return await new Promise(resolve => {
//     const interval = setInterval(() => {
//       if (condition) {
//         resolve('foo');
//         clearInterval(interval);
//       };
//     }, 1000);
//   });
// }
// const asyncInterval = async (callback, ms, triesLeft = 5) => {
//   return new Promise((resolve, reject) => {
//     const interval = setInterval(async () => {
//       if (await callback()) {
//         resolve();
//         clearInterval(interval);
//       } else if (triesLeft <= 1) {
//         reject();
//         clearInterval(interval);
//       }
//       triesLeft--;
//     }, ms);
//   });
// }
// const interval = setInterval(() => {
//   const currentDate = Date.now()

//   if (currentDate - startDate === 1000) {
//     // it was a second

//     clearInterval(interval)
//     return
//   } 

//   // it was not a second
// }, 50)

// Async: play sound
async function playSound(idx) {
  audiocontext.resume();
  var source = audiocontext.createBufferSource(); // creates a sound source
  source.buffer = sounds.buffer[idx]; // tell the source which sound to play
  if (idx == 0) {
    gainNode.gain.value = 0.15; //set boost pedal to 15% volume
  } else if ((idx == 2) | (idx == 3)) {
    gainNode.gain.value = 0.15; //set boost pedal to 5% volume
  }
  source.connect(gainNode);
  // gainNode.connect(audiocontext.destination); //Connect boost pedal to output
  // source.connect(audiocontext.destination);       // connect the source to the context's destination (the speakers)
  source.start(0); // play the source now
}

// Promise: choice time-out
function choiceTimeOut(timeout) {
  return new Promise(function (resolve, reject) {
    var timer_return = { type: 'TimeOut', cxyt: [-1, -1, -1, -1] };
    setTimeout(function () {
      // clearTimeout(touchTimer);
      resolve(timer_return);
    }, timeout); //setTimeout
  });
}

// Promise: punish time-out
function dispensePunish() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(1);
    }, TASK.PunishTimeOut); //milliseconds
  }).then();
}

//================== UTILITIES ==================//
async function runPumpButtonCallback(str) {
  var dur = 0;
  var npulse = 0;

  if (FLAGS.runPump == 0) {
    FLAGS.runPump = 1;
    if (str == 'flush') {
      dur = 5000; //milliseconds
      npulse = (4*60*1000)/5000; //4 minutes
    } else if (str == 'trigger') {
      dur = TASK.RewardDuration //milliseconds
      npulse = 50;
    }
    document.querySelector('button[id=pumpflush]').innerHTML = 'Stop Pump';
    document.querySelector('button[id=pumptrigger]').innerHTML = 'Stop Pump';
  } else if (FLAGS.runPump == 1) {
    //user pressed button again to stop pump
    FLAGS.runPump = 0;
    port.statustext_connect = '!!!! USER STOPPED PUMP !!!!';
    document.querySelector('button[id=pumpflush]').innerHTML = '4min';
    document.querySelector('button[id=pumptrigger]').innerHTML = '50x';
    updateHeadsUpDisplayDevices();
    return;
  }

  //------ Run pump
  for (var i = 1; i <= npulse; i++) {
    if (ble.connected == false && port.connected == false) {
      break; //no pump connected
    } else if (FLAGS.runPump == 0) {
      port.statustext_connect = '!!!! USER STOPPED PUMP !!!!';
      document.querySelector('button[id=pumpflush]').innerHTML = 'Flush 1min';
      document.querySelector('button[id=pumptrigger]').innerHTML = '50 pulses';
      updateHeadsUpDisplayDevices();
      return; //pump was stopped by user
    } else if (FLAGS.runPump == 1 && ble.connected == true) {
      await writepumpdurationtoBLE(Math.round(dur));
    } //if ble pump
    else if (FLAGS.runPump == 1 && port.connected == true) {
      if (blescale.connected == true && i == 1) {
        //get start weight
        var startweight = blescale.weights[blescale.weights.length - 1];
      }

      usbDeviceWorker.postMessage({ action: "writepumpdurationtoUSB", val: Math.round(dur) });
      await sleep(Math.round(dur))

      var endweight = blescale.weights[blescale.weights.length - 1];
      port.statustext_connect =
        '***** Calibrating Pump ' + i + '/' + npulse + ' pulses, wt='
        + Math.round([endweight - startweight] * 100) / 100 + ' grams';
      updateHeadsUpDisplayDevices();
    } //if usb pump

    await sleep(500);
    console.log('pulse' + i);
  } //for i pulses

  if (port.connected == true) {
    port.statustext_connect =
      'DONE RUNNING PUMP (' + npulse + ' pulses @ ' + Math.round(dur) + ' ms/pulse)';
    if (blescale.connected == true) {
      var endweight = blescale.weights[blescale.weights.length - 1];
      port.statustext_connect = '!!!! DONE PUMP CALIBRATION !!!!';
      port.statustext_sent = '!!!! Weight after ' + i + ' pulses @ ' + dur + 'ms = '
                              + Math.round([endweight - startweight] * 100) / 100 +
                              'g vs 50 pulses calibration';
    }//IF blescale
    console.log(port.statustext_sent);
    document.querySelector('button[id=pumpflush]').innerHTML = '4min';
    document.querySelector('button[id=pumptrigger]').innerHTML = '50x';
    FLAGS.runPump = 0;
    updateHeadsUpDisplayDevices();
  } //if usb pump
}//FUNCTION runPumpButtonCallback()

async function manualPumpKeyboardCallback(event)
{
  var name = event.key;
  var code = event.code;
  if (name === 'Alt') {
    return; //Do nothing
  }
  if (event.altKey && code == 'KeyR') {
    if (port.connected == true){
      playSound(2);
      usbDeviceWorker.postMessage({ action: "writepumpdurationtoUSB", val: Math.round(TASK.RewardDuration) });
      console.log(`~~~MANUAL REWARD PULSE~~~ \n Combination of altKey + ${name} with Key code Value: ${code}`);
    }
  }//IF manual reward
  else if (event.altKey && (code == 'Digit1' || code == 'Digit2' || code == 'Digit3' || code == 'Digit4') ) {
    if (port.connected == true){
      let num = Number(code[code.length-1])
      console.log(`~~~FLUSHING PUMP ${num} minutes ~~~ \n Combination of altKey + ${name} with Key code Value: ${code}`);
      //Digit1 = 1 minutes, ..., Digit4 = 4 minutes (in 30ms pulses)
       for (let i=1; i<=num; i++){
        playSound(2);
        usbDeviceWorker.postMessage({ action: "writepumpdurationtoUSB", val: Math.round(30 * 1000) });
        await sleep(30000 + 500);

        playSound(2);
        usbDeviceWorker.postMessage({ action: "writepumpdurationtoUSB", val: Math.round(30 * 1000) });
        await sleep(30000 + 500);
      }//FOR i seconds
      console.log('~~~DONE FLUSHING PUMP~~~')
    }//IF port.connected
  }//ELSE IF flush
}//FUNCTION manualPumpKeyboardCallback(event)

function objectomeSceneNamesToLatentVars(scenefilepaths, scenelabels, scenes) {
  var images = {
    ImageSetDir: '',
    Nouns: [],
    Objects: [],
    BagNames: [],
    BagIdx: [],
    ImageIdx: [],
  };

  var imagecollection = '';
  if (scenefilepaths[0].indexOf('objectome3d') > 0) {
    imagecollection = 'objectome3d';
  } else if (scenefilepaths[0].indexOf('objectome') > 0) {
    imagecollection = 'objectome';
  } else {
    imagecollection = 'imagebags';
  }

  images.ImageSetDir =
    scenefilepaths[0].slice(0, scenefilepaths[0].indexOf(imagecollection)) +
    imagecollection +
    '/';

  for (var i = 0; i <= scenefilepaths.length - 1; i++) {
    var nimages = Math.max(scenes[i].nimages, scenes[i].nbackgroundimages);

    images.BagIdx.push(...Array(nimages).fill(scenelabels[i])); //array of nimage labels
    images.ImageIdx.push(...Array(nimages).keys()); //1 to nimages
    var strs = scenefilepaths[i].split('/'); //split path into words

    // Noun, object model, image folder
    var findnext = 0;
    for (var j = 0; j <= strs.length - 1; j++) {
      if (findnext == 0 && strs[j] == imagecollection) {
        findnext++;
      } else if (findnext == 1) {
        images.Nouns[scenelabels[i]] = strs[j];
        findnext++;
      } //else if noun
      else if (findnext == 2) {
        images.Objects[scenelabels[i]] = strs[j];
        findnext++;
      } //else if object
      else if (findnext == 3) {
        images.BagNames[scenelabels[i]] = strs[j];
        findnext++;
      } //else if scene json
    } //for j strs
  } //for i scenebags

  return images;
} //FUNCTION objectomeImageNamesToLatentVars

function getLongestArray(x) {
  var n = 0;
  if (typeof x != 'object') {
    if (Array.isArray(x) == 'array') {
      var n_new = x.length;
    } else {
      n_new = 0;
    }
    return n_new;
  } //if not an enumerable object
  else {
    for (keys in x) {
      if (keys != 'baseVertexInd') {
        if (Array.isArray(x[keys])) {
          var n_new = x[keys].length;
        } //IF array
        else if (typeof x[keys] == 'object') {
          var n_new = getLongestArray(x[keys]);
        } //ELSE !array
        else {
          var n_new = 0;
        }

        if (n_new > n) {
          n = n_new;
        } //IF
      } //IF array of raw vertexinds
    } //FOR keys
  } //IF object
  return n;
} //FUNCTION getLongestArray

async function deviceDetect() {
  let navigator = window.navigator;

  // GPU INFO
  let canvas = document.createElement('canvas');
  let gl, debugInfo, vendor, renderer;

  try {
    gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  } catch (e) {
    console.error('WebGL Context Error:', e);
  }

  if (gl) {
    debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
    renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
  }

  /**
   * TOUCH INFO
   * Chrome (desktop) used to lie about its support on this,
   * but that has since been rectified: https://bugs.chromium.org/p/chromium/issues/detail?id=36415
   *
   * Chrome also changed its behaviour since v70 and recommends
   * the TouchEvent object for detection: https://www.chromestatus.com/feature/4764225348042752
   */
  let touchscreen = 0;
  if (
    'ontouchstart' in window ||
    window.TouchEvent ||
    (window.DoucumentTouch && document instanceof DoucmentTouch)
  ) {
    touchscreen = 1;
  }

  // DEVICE INFO
  let deviceInfo = await detectDevice(navigator.userAgent);

  if (deviceInfo.data.device == null) {
    deviceInfo.data.device = { type: '', brand: '', model: '' };
  }

  if (deviceInfo.data.client == null) {
    deviceInfo.data.client = { name: '', version: '' };
  }

  if (deviceInfo.data.os == null) {
    deviceInfo.data.os = { name: '', version: '' };
  }

  deviceInfo.data.gpu = {};
  deviceInfo.data.gpu.vendor = vendor;
  deviceInfo.data.gpu.renderer = renderer;
  deviceInfo.data.touchscreen = touchscreen;
  return deviceInfo;
}

function connectHardwareButtonPromise() {
  let resolveFunc;
  let errFunc;

  let p = new Promise((resolve, reject) => {
    resolveFunc = resolve;
    errFunc = reject;
  }).then((resolveVal) => {
    console.log(`User clicked ${resolveVal}`);
  });

  function* waitforclickGenerator() {
    let buttonClicked = [-1];
    while (true) {
      buttonClicked = yield buttonClicked;
      resolveFunc(buttonClicked);
    }
  }

  waitforClick = waitforclickGenerator(); // start async function
  waitforClick.next(); // move out of default sate
  return p;
}

function skipHardwareDevice(event) {
  event.preventDefault(); // prevents additional downstream call of click listener
  localStorage.setItem('ConnectUSB', 0);
  waitforClick.next(1);
}

function getMeanStandardDeviation (array) {
  const n = array.length
  const mean = array.reduce((a, b) => a + b) / n
  return [mean, Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)]
}