// Check Availability of APIs
if (!ENV.MTurkWorkerId) {
  if (typeof navigator.usb == 'object') {
    ENV.WebUSBAvailable = 1;
  }
  if (typeof navigator.bluetooth == 'object') {
    ENV.WebBluetoothAvailable = 1;
  }
  if (typeof navigator.getBattery == 'function') {
    ENV.BatteryAPIAvailable = 1;
  }
}

window.addEventListener('beforeunload', async (evt) => {
  if (port.connected) {
    await port.writeSampleCommandTriggertoUSB('0');
  }
});

// Button callbacks for inline connection to arduino device
document.querySelector('button[id=googlesignin]').style.display = 'block';
document.querySelector('button[id=googlesignin]').style.visibility = 'visible';
document
  .querySelector('button[id=googlesignin')
  .addEventListener('pointerup', firebaseRedirectSignIn, false);
document.querySelector('button[id=reloadpage]').addEventListener(
  'pointerup',
  () => {
    window.location.reload();
  },
  false
);

//---- for Safari
document
  .querySelector('button[id=googlesignin]')
  .addEventListener('click', firebaseRedirectSignIn, false);
document.querySelector('button[id=reloadpage]').addEventListener(
  'click',
  () => {
    window.location.reload();
  },
  false
);
//---- (END) for Safari

var textobj = document.getElementById('headsuptext');
textobj.addEventListener('pointerup', headsuptext_listener, false);

//---- for Safari
textobj.addEventListener('click', headsuptext_listener, false);
//---- (END) for Safari

//============= Initialize Audio & Battery Objects ==================//

// Prevent window scrolling and bounce back effect
document.body.addEventListener(
  'touchmove',
  (event) => {
    event.preventDefault();
  },
  { capture: false, passive: false }
);

//Audio pulses for reward
var audiocontext = new (window.AudioContext || window.webkitAudioContext)();
var gainNode = audiocontext.createGain();
gainNode.connect(audiocontext.destination);

ENV.DevicePixelRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;

var visiblecontext = VISIBLECANVAS.getContext('2d', { 
  desynchronized: true,
});

var backingStoreRatio =
  visiblecontext.webkitBackingStorePixelRatio ||
  visiblecontext.mozBackingStorePixelRatio ||
  visiblecontext.msBackingStorePixelRatio ||
  visiblecontext.oBackingStorePixelRatio ||
  visiblecontext.backingStorePixelRatio ||
  1;

ENV.CanvasRatio = backingStoreRatio / ENV.DevicePixelRatio;

// Check Availability of Battery API
if (ENV.BatteryAPIAvailable) {
  // Monitor Battery - from: https://www.w3.org/TR/battery-status/
  navigator.getBattery().then((batteryobj) => {
    logEVENTS(
      'Battery',
      [batteryobj.level, batteryobj.dischargingTime],
      'timeseries'
    );

    batteryobj.addEventListener('levelchange', () => {
      logEVENTS(
        'Battery',
        [batteryobj.level, batteryobj.dischargingTime],
        'timeseries'
      );
    });
  });
} // Do nothing if BatteryAPI unavailable
//============= (end) Initialize Audio & Battery Objects ==================//

(async function () {
  document
    .querySelector('button[id=quickload]')
    .addEventListener('pointerup', quickLoad_listener, false);

  //--- for Safari
  document
    .querySelector('button[id=quickload]')
    .addEventListener('click', quickLoad_listener, false);

  if (ENV.WebUSBAvailable) {
    await usb_scriptLoaded;
    document
      .querySelector('button[id=connectusb]')
      .addEventListener('pointerup', findUSBDevice, false);
    document
      .querySelector('button[id=nousb]')
      .addEventListener('pointerup', skipHardwareDevice, false);
    document
      .querySelector('button[id=preemptRFID]')
      .addEventListener('pointerup', preemptRFID_listener, false);

    //---- for Safari
    document
      .querySelector('button[id=connectusb]')
      .addEventListener('click', findUSBDevice, false);
    document
      .querySelector('button[id=nousb]')
      .addEventListener('click', skipHardwareDevice, false);
    document
      .querySelector('button[id=preemptRFID]')
      .addEventListener('click', preemptRFID_listener, false);
    //---- (END) for Safari
  }

  if (ENV.WebBluetoothAvailable) {
    await ble_scriptLoaded;
    await blescale_scriptLoaded;
    //Button callback for asynchronous connection to bluetooth scale
    document
      .querySelector('button[id=connectblescale]')
      .addEventListener('pointerup', blescaleconnect, false);

    //---- for Safari
    document
      .querySelector('button[id=connectblescale]')
      .addEventListener('click', blescaleconnect, false);
    //---- (END) for Safari
  }

  document
    .querySelector('button[id=doneEditingParams]')
    .addEventListener('pointerup', doneEditingParams_listener, false);
  document
    .querySelector('button[id=doneTestingTask]')
    .addEventListener('pointerup', doneTestingTask_listener, false);
  document
    .querySelector('button[id=stressTest]')
    .addEventListener('touchstart', stressTest_listener, false);
  document
    .querySelector('button[id=gridPoints]')
    .addEventListener('touchstart', gridPoints_listener, false);

  //---- for Safari
  document
    .querySelector('button[id=doneEditingParams]')
    .addEventListener('click', doneEditingParams_listener, false);
  document
    .querySelector('button[id=doneTestingTask]')
    .addEventListener('click', doneTestingTask_listener, false);
  document
    .querySelector('button[id=stressTest]')
    .addEventListener('click', stressTest_listener, false);
  document
    .querySelector('button[id=gridPoints]')
    .addEventListener('click', gridPoints_listener, false);
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

  if (ENV.WebUSBAvailable) {
    var event = {};
    event.type = 'AutoConnect';
    await findUSBDevice(event);
  }

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
      document.querySelector('button[id=quickload]').innerHTML =
        QuickLoad.agent;
    } else if (QuickLoad.connectusb == 1) {
      document.querySelector('button[id=quickload]').innerHTML =
        QuickLoad.agent + ' <i>USB</i>';
    }
  } else {
    // ELSE don't show button
    document.querySelector('button[id=quickload]').style.display = 'none';
  }
  //====================== (END) Quickload Set-up ===========================//

  //================== AWAIT LOAD SUBJECT PARAMS ==================//
  document.querySelector('div[id=subjectID_div]').style.display = 'block';
  document.querySelector('div[id=subjectID_div]').style.visibility = 'visible';
  await subjectIDPromise();
  document.querySelector('button[id=quickload]').style.display = 'none';
  document.querySelector('div[id=subjectID_div]').style.display = 'none';

  localStorage.setItem('Agent', ENV.Subject);

  if (ENV.MTurkWorkerId) {
    ENV.ParamFileName =
      PARAM_DIRPATH +
      ENV.MTurkWorkerId +
      '_' +
      ENV.AssignmentId +
      '_' +
      ENV.HITId +
      '_params.json';
  } else {
    ENV.ParamFileName = PARAM_DIRPATH + ENV.Subject + '_params.json';
  }
  await loadParametersfromFirebase(ENV.ParamFileName);

  if (TASK.Automator != 0) {
    automator_data = await loadTextfromFirebase(TASK.AutomatorFilePath);
  }

  if (TASK.Agent == 'SaveImages') {
    if (TASK.Automator != 0 ){
      var concat_imagebagsample = [];
      for (i = 0; i < automator_data.length; i++) {
        concat_imagebagsample.push(...automator_data[i].ImageBagsSample);
      }//FOR i automator stages
    }//IF Automator
    else{
      var concat_imagebagsample = TASK.ImageBagsSample;
    }
    FLAGS.DirHandle = await window.showDirectoryPicker();
    concat_imagebagsample.forEach(async (sceneFilePath) => {
      let sceneFileName = sceneFilePath.split('/').slice(-1)[0];
      let sceneFileDir = sceneFilePath
        .split('/')
        .slice(-1)[0]
        .split('.json')[0];
      let subDirHandle = await FLAGS.DirHandle.getDirectoryHandle(
        sceneFileDir,
        {
          create: true,
        }
      );
      let sceneFileHandle = await subDirHandle.getFileHandle(sceneFileName, {
        create: true,
      });

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

  if (TASK.DeviceConfig !== undefined) {
    screenSpecs = await queryDevice(TASK.DeviceConfig, 'docname');
    if (screenSpecs.isEmpty) {
      console.error(
        `TASK.DeviceConfig was defined but no record of ${TASK.DeviceConfig} was found in firestore/devices. All downstream code is no longer guaranteed to work`
      );
    }
    ENV.ScreenSizeInches = screenSpecs.screenSizeInches;
    ENV.ScreenPhysicalPixels = screenSpecs.screenPhysicalPixels;
    ENV.ScreenRatio = screenSpecs.screenRatio;
    ENV.PhysicalPPI = screenSpecs.ppi;
    ENV.FrameRateMovie =
      screenSpecs.frameRateMovie === -1 ? 60 : screenSpecs.frameRateMovie;
    // IF PORTRAIT flip horizontal and vertical
    if (window.innerWidth < window.innerHeight) {
      ENV.ScreenSizeInches = [
        ENV.ScreenSizeInches[1],
        ENV.ScreenSizeInches[0],
        ENV.ScreenSizeInches[2],
      ];

      ENV.ScreenPhysicalPixels = [
        ENV.ScreenPhysicalPixels[1],
        ENV.ScreenPhysicalPixels[0],
      ];
    }
    ENV.ViewportPixels[0] = ENV.ScreenPhysicalPixels[0] / ENV.DevicePixelRatio;
    ENV.ViewportPixels[1] = ENV.ScreenPhysicalPixels[1] / ENV.DevicePixelRatio;
    if (ENV.DevicePixelRatio !== ENV.ScreenRatio) {
      console.log(
        'User is not running screen at native pixelratio which affects image scaling, will attempt to compensate'
      );
    }
    //always compute PPI based on the larger dimension for consistency across portrait/landscape modes
    if (ENV.ViewportPixels[0] >= ENV.ViewportPixels[1]) {
      ENV.ViewportPPI = ENV.ViewportPixels[0] / ENV.ScreenSizeInches[0];
    } else {
      ENV.ViewportPPI = ENV.ViewportPixels[1] / ENV.ScreenSizeInches[1];
    }
  } else {
    screenSpecs = await queryDevice(ENV.DeviceName, 'model');
    if (!screenSpecs.isEmpty) {
      ENV.ScreenSizeInches = screenSpecs.screenSizeInches;
      ENV.ScreenPhysicalPixels = screenSpecs.screenPhysicalPixels;
      ENV.ScreenRatio = screenSpecs.screenRatio;
      ENV.PhysicalPPI = screenSpecs.ppi;
      ENV.FrameRateMovie =
        screenSpecs.frameRateMovie === -1 ? 60 : screenSpecs.frameRateMovie;
      if (window.innerWidth < window.innerHeight) {
        ENV.ScreenSizeInches = [
          ENV.ScreenSizeInches[1],
          ENV.ScreenSizeInches[0],
          ENV.ScreenSizeInches[2],
        ];

        ENV.ScreenPhysicalPixels = [
          ENV.ScreenPhysicalPixels[1],
          ENV.ScreenPhysicalPixels[0],
        ];
      }
      ENV.ViewportPixels[0] = ENV.ScreenPhysicalPixels[0] / ENV.DevicePixelRatio;
      ENV.ViewportPixels[1] = ENV.ScreenPhysicalPixels[1] / ENV.DevicePixelRatio;
      //always compute PPI based on the larger dimension for consistency across portrait/landscape modes
      if (ENV.ViewportPixels[0] >= ENV.ViewportPixels[1]) {
        ENV.ViewportPPI = ENV.ViewportPixels[0] / ENV.ScreenSizeInches[0];
      } else {
        ENV.ViewportPPI = ENV.ViewportPixels[1] / ENV.ScreenSizeInches[1];
      }
    } else {
      console.log(
        'Device not detected in firestore/devices. Will attempt findDPI code for the optimal ViewportPPI'
      );
      ENV.ViewportPPI = findDPI();

      ENV.ViewportPixels[0] = document.body.clientWidth;
      ENV.ViewportPixels[1] = document.body.clientHeight;
    }//ELSE queryDevice did not retrieve any info, find DPI
  } //ELSE try to queryDevice

  if (ENV.FrameRateMovie > ENV.FrameRateDisplay) {
    console.error(
      'Movie is animating at a higher frame rate than display refresh rate'
    );
  }

  let rtdbBroadcastRef = rtdb.ref('instances/' + ENV.Subject);
  let rtdbAgentRef = rtdb.ref('agents/' + ENV.Subject);
  let rtdbAgentConnectionRef = rtdb.ref(`agents/${ENV.Subject}/numConnections`);
  FLAGS.rtdbDataRef = rtdb.ref('data/' + ENV.Subject);
  //================== (END) AWAIT LOAD SUBJECT PARAMS ==================//

  //====================== Connect USB ===========================//
  if (ENV.WebUSBAvailable) {
    if (typeof port.connected == 'undefined' || port.connected == false) {
      var event = {};
      event.type = 'AutoConnect';
      await findUSBDevice(event);
    }

    if (
      (typeof port.connected == 'undefined' || port.connected == false) &&
      (QuickLoad.load == 0 ||
        (QuickLoad.load == 1 && QuickLoad.connectusb == 1))
    ) {
      //=============== AWAIT CONNECT TO HARDWARE (via USB) ===============//
      port.connected = false;
      document.querySelector('button[id=connectusb]').style.display = 'block';
      document.querySelector('button[id=connectusb]').style.visibility =
        'visible';
      document.querySelector('button[id=nousb]').style.display = 'block';
      document.querySelector('button[id=nousb]').style.visibility = 'visible';

      await connectHardwareButtonPromise();
    } //IF !QuickLoad.load

    document.querySelector('button[id=connectusb]').style.display = 'none';
    document.querySelector('button[id=nousb]').style.display = 'none';
  } else {
    //skip usb device connection
    port = {
      statustext_connect: '',
      statustext_sent: '',
      statustext_received: '',
      connected: false,
    };
  }
  //====================== (END) Connect USB ===========================//

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
  }

  //================== AWAIT USER CAN EDIT SUBJECT PARAMS ==================//
  // IF MTurkWorker, DoneEditingParam button is automatically pressed
  if (QuickLoad.load == 0) {
    updateStatusText(JSON.stringify(TASK, null, ' '));
    document
      .querySelector('p[id=headsuptext]')
      .setAttribute('contentEditable', true);
    document.querySelector('button[id=doneEditingParams]').style.display =
      'block';
    document.querySelector('button[id=doneEditingParams]').style.visibility =
      'visible';

    await editParamsPromise();
    document.querySelector('button[id=doneEditingParams]').style.display =
      'none';
    var textobj = document.getElementById('headsuptext');
    textobj.removeEventListener('touchend', headsuptext_listener);
    textobj.removeEventListener('mouseup', headsuptext_listener);
    document
      .querySelector('p[id=headsuptext]')
      .setAttribute('contentEditable', false);

    if (FLAGS.need2saveParameters == 1) {
      var user_param_text = document.getElementById('headsuptext').innerHTML; //get new params
      await saveParameterTexttoFirebase(user_param_text); //write new params
      await loadParametersfromFirebase(ENV.ParamFileName); //then read them
    } //IF
  } //IF !QuickLoad.load
  //================== (END) AWAIT USER CAN EDIT SUBJECT PARAMS ==================//

  // =================== LOAD MKMODELS IF SPECIES = MODEL =================//
  let mkm;
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
      ndatafiles2read,
      ENV.Subject,
      subject_behavior_save_directory
    );
    trialhistory = await readTrialHistoryFromFirebase(history_file_paths);
  }

  //===================== AWAIT INITIALIZE AUTOMATOR =================//
  // Initialize automator - change TASK to that specified by TASK.CurrentAutomatorStage.
  var num_prebuffer_trials = 300;
  if (TASK.Automator != 0) {
    automateTask(automator_data, trialhistory);
    await saveParameterstoFirebase();
    await loadParametersfromFirebase(ENV.ParamFileName);
  } //IF TASK.Automator != 0

  //============= AWAIT LOAD SOUNDS =============//
  soundpromises = sounds.serial.map(loadSoundfromFirebase); //create array of sound load Promises
  await Promise.all(soundpromises); //simultaneously evaluate array of sound load promises
  updateStatusText('');

  //========= Start in TEST mode =======//
  document.querySelector('button[id=googlesignin]').style.display = 'none'; //if do style.visibility=hidden, element will still occupy space
  document.querySelector('button[id=reloadpage]').style.display = 'block';
  document.querySelector('button[id=reloadpage]').style.visibility = 'visible';

  document.querySelector('button[id=doneTestingTask]').style.display = 'block';
  document.querySelector('button[id=doneTestingTask]').style.visibility =
    'visible';
  document.querySelector('button[id=gridPoints]').style.display = 'block';
  document.querySelector('button[id=gridPoints]').style.visibility = 'visible';

  FLAGS.need2loadParameters = 1;
  FLAGS.need2loadScenes = 1;
  CURRTRIAL.num = 0;
  EVENTS.trialnum = 0;
  FLAGS.savedata = 0; // test trials can be performed, but data won't be saved

  // IF MTurkWorker, start in TRIAL mode
  if (ENV.MTurkWorkerId) {
    document
      .querySelector('button[id=doneTestingTask]')
      .dispatchEvent(new Event('pointerup'));
  }

  // =========================================================================================================== //
  // ============ MAIN LOOP ==================================================================================== //
  // =========================================================================================================== //
  while (true) {
    //============= AWAIT LOAD PARAMS =============//
    if (FLAGS.need2loadParameters == 1) {
      if (port.connected) {
        port.writeSampleCommandTriggertoUSB('0');
        port.writepumptopauseeyetoUSB('|');//pause eyetracker
      }
      FLAGS.need2loadParameters = await loadParametersfromFirebase(
        ENV.ParamFileName
      );

      if (TASK.Agent == 'SaveImages') {
        document.querySelector('button[id=stressTest]').innerHTML =
          'Save Images';
        TASK.SamplingStrategy = 'sequential';
        console.log(
          'Automatically using sequential sampling since SAVE IMAGES was specified.'
        );
        // FLAGS.DirHandle = await window.showDirectoryPicker();
      } //IF SaveImages

      if (typeof TASK.DragtoRespond == 'undefined') {
        if (ENV.Eye.TrackEye == 0) {
          // IF touch, then only clicking
          TASK.DragtoRespond = 0; // click in box
        } else if (ENV.Eye.TrackEye != 0) {
          // ELSE IF eyetracker, allow dragging
          TASK.DragtoRespond = 1; // drag into box
        }
      } //IF TASK.DragtoRespond

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
          ENV.Eye.CalibYTransform = [
            0,
            -yscale,
            ENV.ViewportPixels[1] + (0.5 - yrange / 2) * yscale,
          ];

          // ENV.Eye.CalibXTransform = [ 1, 0, 0]
          // ENV.Eye.CalibYTransform = [ 0, 1, 0]

          saveEyeCalibrationtoFirestore(
            ENV.Eye.CalibXTransform,
            ENV.Eye.CalibYTransform,
            ENV.Eye.NCalibPoints,
            ENV.Eye.CalibType
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
      } //IF ENV.TrackEye

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
        // IF Task.RewardStage
        if (TASK.NRSVP > 0) {
          ENV.Task = 'RSVP';
        } else if (TASK.SameDifferent > 0 && TASK.ChoiceGridIndex.length == 2) {
          // Task is SameDifferent
          // Same-Different (SD)
          ENV.Task = 'SD';
        } else if (TASK.ObjectGridIndex.length == TASK.ImageBagsSample.length) {
          // Task is Stimulus-Response
          // Stimulus-Response (SR)
          ENV.Task = 'SR';
        } else {
          // Task is Match-to-Sample
          // Match-to-Sample
          ENV.Task = 'MTS';
        }
      } //ELSEIF RewardStage==1

      //Size of Fixation screen circle or image
      ENV.FixationRadius = (TASK.FixationSizeInches / 2) * ENV.ViewportPPI;

      //Size of Choice screen circle or square
      ENV.ChoiceRadius = (TASK.ChoiceSizeInches / 2) * ENV.ViewportPPI;

      //Fixation dot, if >0, will appear on both fixation & sample screens
      ENV.FixationDotRadius =
        (TASK.FixationDotSizeInches / 2) * ENV.ViewportPPI;

      if (TASK.FixationDotSizeInches !== undefined) {
        ENV.FixationSquareWidth = TASK.FixationDotSizeInches * ENV.ViewportPPI;
        ENV.FixationSquareColor = 'white';
      }

      //Fixation window, if specified, operates on both fixation & sample screens
      ENV.FixationWindowRadius = (TASK.FixationWindowSizeInches / 2) * ENV.ViewportPPI;

      // Photodiode Square to display on the bottom right (hard coded size & position)
      ENV.PhotodiodeSquareWidth = ENV.PhotodiodeSquareSizeInches * ENV.ViewportPPI;
      ENV.PhotodiodeSquareX = 
        ENV.ViewportPixels[0] -
        ENV.PhotodiodeSquareWidth / 2 -
        CANVAS.offsetleft;
      ENV.PhotodiodeSquareY =
        ENV.ViewportPixels[1] -
        ENV.PhotodiodeSquareWidth / 2 -
        CANVAS.offsettop;

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

      FLAGS.purge = 1;
      FLAGS.createnewfirestore = 1;
      CURRTRIAL.reset();
      EVENTS.reset_trialseries();
      EVENTS.reset_timeseries();

      if (typeof TASK.Photodiode == 'undefined') {
        TASK.Photodiode = 0;
      }
    } //IF FLAGS.need2loadParameters

    if (FLAGS.purge == 1) {
      purgeTrackingVariables();
      FLAGS.purge = 0;
    } //IF purge

    var frac_correct=0;
    if (EVENTS['trialseries']['Response'].length>0){
      var ncorrect = 0;
      EVENTS['trialseries']['Response'].forEach( (element, index) => { if (element==EVENTS['trialseries']['CorrectItem'][index]){ncorrect++} })    
      frac_correct = ncorrect/EVENTS['trialseries']['Response'].length
    }
    rtdbBroadcastRef.set( { 'trialnum': CURRTRIAL.num, 'filename': ENV.DataFileName, 'performance': frac_correct } );

    //======================== 3D SCENE SET-UP =======================//
    if (typeof TASK.THREEJSRenderRatio == 'undefined' || TASK.THREEJSRenderRatio < 0)
    {
      TASK.THREEJSRenderRatio = 2;
    }
    if (typeof TASK.THREEJScameraZDist == 'undefined') {
      TASK.THREEJScameraZDist = 10;
    }
    if (typeof TASK.THREEJScameraFOV == 'undefined') {
      TASK.THREEJScameraFOV = 45;
    }

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
      FLAGS.usecanvas2D = 1
      for (let i = 0; i < TASK.ImageBagsSample.length; i++) {
        IMAGES.Sample[i] = await loadTextfromFirebase(TASK.ImageBagsSample[i]);
        if (typeof(IMAGES.Sample[i]['CAMERAS']) != "undefined" ||
            typeof(IMAGES.Sample[i]['LIGHTS']) != "undefined" ||
            typeof(IMAGES.Sample[i]['OBJECTS']) != "undefined"){
          FLAGS.usecanvas2D = 0;
        } //IF
      } //FOR i samplebags

      for (let i = 0; i < TASK.ImageBagsTest.length; i++) {
        IMAGES.Test[i] = await loadTextfromFirebase(TASK.ImageBagsTest[i]);
        if (typeof(IMAGES.Test[i]['CAMERAS']) != "undefined" ||
            typeof(IMAGES.Test[i]['LIGHTS']) != "undefined" ||
            typeof(IMAGES.Test[i]['OBJECTS']) != "undefined"){
          FLAGS.usecanvas2D = 0;
        } //IF
      } //FOR i testbags

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
            meshPaths.push(
              IMAGES[taskscreen][classLabel].OBJECTS[obj].meshpath
            );
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
      console.log('3js: compiled scene');
      //============ (END) 4: PRELOAD SHADERS (COMPILE) ============//
    }//IF !FLAGS.usecanvas2D

    if (FLAGS.usecanvas2D){
      for (let scenetype in IMAGES) {
        expandImage2DFrames(scenetype)
      }
    } //IF FLAGS.usecanvas2D

      FLAGS.need2loadScenes = 0;

      // Make a scene trial queue TQS (overrides TQ)
      TQS = new TrialQueueScene(TASK.SamplingStrategy);
      await TQS.build(num_prebuffer_trials);

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
    } //IF need2LoadScenes

    if (typeof TASK.BackgroundColor2D == 'undefined') {
      TASK.BackgroundColor2D = '#7F7F7F';
    }
    document.body.style.background = TASK.BackgroundColor2D;

    if (CURRTRIAL.num <= 0 && port.connected){
      port.writepumptopauseeyetoUSB('~');//resume eyetracker
    }
    //========================(END) 3D SCENE SET-UP =======================//

    //============ SELECT SAMPLE & TEST IMAGES ============//
    if (typeof TASK.NRSVP != 'undefined' && TASK.NRSVP > 0) {
      ENV.NRSVPMax = TASK.NRSVP;
      ENV.NRSVPMin = TASK.NRSVP;

      if (typeof TASK.NRSVPMax != 'undefined' && TASK.NRSVPMax > TASK.NRSVP) {
        ENV.NRSVPMax = TASK.NRSVPMax;
      } //IF NRSVPMax
    } //IF NRSVP

    let imgSeqLen =
      typeof TASK.NRSVP == 'undefined' || TASK.NRSVP <= 0 ? 1 : ENV.NRSVPMax;

    for (let i = 0; i < imgSeqLen; i++) {
      let x = await TQS.get_next_trial();
      CURRTRIAL.images.sampleimage[i] = x[0];
      CURRTRIAL.sampleindex[i] = x[1];

      // Sample can have multiple sequential scenes (items are over time; eg, RSVP)
      CURRTRIAL.sampleindex_nonarray[i] = x[1][0];
      CURRTRIAL.sample_scenebag_label[i] = x[5];
      CURRTRIAL.sample_scenebag_index[i] = x[6];

      // Test can have multiple simultaneous scenes (items are over space; ev, MtS)
      if (i == 0) {
        // IF first image
        CURRTRIAL.images.testimages[i] = x[2];
        CURRTRIAL.testindices[i] = x[3];
        CURRTRIAL.test_scenebag_labels[i] = x[7];
        CURRTRIAL.test_scenebag_indices[i] = x[8];
        CURRTRIAL.correctitem = x[4];
        samplereward = x[9];
      }
    } //FOR imgSeqLen

    logEVENTS('Sample', CURRTRIAL.sampleindex_nonarray, 'trialseries');
    logEVENTS('Test', CURRTRIAL.testindices[0], 'trialseries');
    //============(END) SELECT SAMPLE & TEST IMAGES ============//

    //============ SET UP SAMPLE & TEST SEQUENCE ============//
    // when & where to display
    CURRTRIAL.tsequencedesired = [];
    CURRTRIAL.sequencegridindex = [];
    let t0=0;

    // what to display
    CURRTRIAL.sequenceclip = []; //movieclip# in RSVP
    CURRTRIAL.sequenceframe = []; //frame# in movie
    CURRTRIAL.sequencetaskscreen = [];
    CURRTRIAL.sequencelabel = []; //image class
    CURRTRIAL.sequenceindex = []; //image index

    //EXPAND SAMPLE (for rsvp & movies)
    //Start with blank for max(100,SampleOFF), then append SampleON+blank (eg, blank,Sample,blank,Sample,blank)
    //EXPAND SAMPLE (for rsvp & movies)
    //Start with blank for max(100,SampleOFF), then append SampleON+blank (eg, blank,Sample,blank,Sample,blank)
    for (let i = 0; i < CURRTRIAL.sample_scenebag_index.length; i++) {
      // FOR i RSVP Sample
      if (i >= 1){
        t0 = CURRTRIAL.tsequencedesired[CURRTRIAL.tsequencedesired.length - 1];      
      }
      let sampleon = chooseArrayElement(
        IMAGES['Sample'][CURRTRIAL.sample_scenebag_label[i][0]].durationMS,
        CURRTRIAL.sample_scenebag_index[i][0],
        0
      );

      let blankdurationpre;
      if (i == 0) {
        if ( typeof TASK.SamplePRE === 'undefined' || TASK.SamplePRE === null || TASK.SamplePRE < 0)
        {
          blankdurationpre = Math.max(100, TASK.SampleOFF);
        } else {
          blankdurationpre = TASK.SamplePRE;
        }
      } else {
        blankdurationpre = 0;
      }

      let taskscreen = 'Sample'
      if (sampleon <=0 && TASK.KeepSampleON){
        sampleon = 1000/ENV.FrameRateMovie;
        taskscreen = 'SampleBlank';
      }//instanstiate one frame if need for test screen, but then hide for sample screen

      // Create Movie Sequence
      [movie_sequence, movie_tsequence, movie_framenum] =
        createMovieSeq_frames(taskscreen, blankdurationpre, sampleon, TASK.SampleOFF, ENV.FrameRateMovie);
      movie_tsequence = movie_tsequence.map((a) => { return a + t0; });

      CURRTRIAL.tsequencedesired.push(...movie_tsequence);
      CURRTRIAL.sequencegridindex.push(...Array(movie_tsequence.length).fill([TASK.SampleGridIndex]));
      CURRTRIAL.sequenceclip.push(...Array(movie_tsequence.length).fill(i));
      CURRTRIAL.sequenceframe.push(...movie_framenum);
      CURRTRIAL.sequencetaskscreen.push(...movie_sequence);
      CURRTRIAL.sequencelabel.push(...Array(movie_tsequence.length).fill(CURRTRIAL.sample_scenebag_label[i]));
      CURRTRIAL.sequenceindex.push(...Array(movie_tsequence.length).fill(CURRTRIAL.sample_scenebag_index[i]));
    } // FOR i RSVP Sample

    // APPEND TEST OR CHOICE
    if (TASK.NRSVP <= 0) {
      // IF !RSVP, then show test/choice screen
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

      CURRTRIAL.tsequencedesired.push(...movie_tsequence);
      CURRTRIAL.sequencegridindex.push(...Array(movie_tsequence.length).fill(TASK.TestGridIndex));
      CURRTRIAL.sequenceclip.push(...Array(movie_tsequence.length).fill(0));
      CURRTRIAL.sequenceframe.push(...movie_framenum);
      CURRTRIAL.sequencetaskscreen.push(...movie_sequence);
      CURRTRIAL.sequencelabel.push(...Array(movie_tsequence.length).fill(CURRTRIAL.test_scenebag_labels[0]));
      CURRTRIAL.sequenceindex.push(...Array(movie_tsequence.length).fill(CURRTRIAL.test_scenebag_indices[0]));

      // Append choice if needed
      if (TASK.SameDifferent > 0) {
        // IF Same-Different, show test & choice
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

        CURRTRIAL.tsequencedesired.push(...tseq);
        CURRTRIAL.sequencegridindex.push(...Array(tseq.length).fill(TASK.ChoiceGridIndex));
        CURRTRIAL.sequenceclip.push(...Array(tseq.length).fill(0));
        CURRTRIAL.sequenceframe.push(...Array(tseq.length).fill(0));
        CURRTRIAL.sequencetaskscreen.push(...seq);
        CURRTRIAL.sequencelabel.push(...Array(tseq.length).fill([0]));
        CURRTRIAL.sequenceindex.push(...Array(tseq.length).fill([0]));
      }
    } //IF !NRSVP, append test or choice screen
    //============(END) SET UP SAMPLE & TEST SEQUENCE ============//

    //================= RFID check =================//
    /**
     * If no matching read in the last TASK.CheckRFID seconds, wait for matching read
     * (kicks-them-off model where they can work as long as reading, but then get
     * kicked off within TASK.CheckRFID seconds if they are the wrong agent or no reads)
     */
    if (TASK.CheckRFID > 0 && ENV.AgentRFID != 'XX' && FLAGS.savedata == 1) {
      if (!port.connected) {
        console.log('NO USB DEVICE CONNECTED: cannot check RFID!!');
      } else {
        let nreads = Object.keys(EVENTS['timeseries']['RFIDTag']).length;
        // IF RFID does not check out, wait for a recent RFID read before proceeding with the next trial
        if (
          !(
            nreads > 0 &&
            EVENTS['timeseries']['RFIDTag'][nreads - 1][2] == ENV.AgentRFID &&
            Date.now() -
              new Date(EVENTS['timeseries']['RFIDTag'][nreads - 1][1]) <
              TASK.CheckRFID
          )
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
      if (TASK.FixationGridIndex >= 0) {
        CURRTRIAL.fixationgridindex = TASK.FixationGridIndex;
      } else if (TASK.FixationGridIndex < 0) {
        CURRTRIAL.fixationgridindex = Math.floor(
          Math.random() * ENV.XGridCenter.length
        );
      }
      logEVENTS('FixationGridIndex',CURRTRIAL.fixationgridindex,'trialseries');

      if (TASK.FixationUsesSample <= 0) {
        // IF !FixationUsesSample, show fixation dot
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
      } else if (TASK.FixationUsesSample > 0) {
        // IF Sample, show first image/movie
        // Update grid location of sample to current fixation grid index
        frame.shown = [];
        frame.frames = [];
        frame.current = 0;

        for (let i = 0; i < CURRTRIAL.sequencegridindex.length; i++) {
          for (let j = 0; j < CURRTRIAL.sequencegridindex[i].length; j++) {
            if (CURRTRIAL.sequencetaskscreen[i] == 'Sample') {
              // IF sample
              // Set location to fixation
              CURRTRIAL.sequencegridindex[i][j] = CURRTRIAL.fixationgridindex;

              if (CURRTRIAL.sequenceclip[i] == 0 && j == 0) {
                // IF first clip, add frame
                frame.shown.push(0);
                frame.frames.push([i]);
              }
            } //IF Sample
          } //FOR j clips
        } //FOR i stim
      } //ELSEIF FixationUsesSample

      // Start timer for this fixation render trial
      CURRTRIAL.starttime = Date.now() - ENV.CurrentDate.valueOf();
      logEVENTS('StartTime', CURRTRIAL.starttime, 'trialseries');

      //========= AWAIT SHOW FIXATION =========//
      // TODO: move to appropriate location
      if (TASK.Species == 'marmoset' || TASK.Species == 'model') {
        playSound(0);
      }

      if (TASK.FixationUsesSample <= 0) {
        // IF !FixationUsesSample, show fixation dot
        await displayTrial(CANVAS.tsequencepre,[CURRTRIAL.fixationgridindex],[0],[0],CANVAS.sequencepre,[0],[0],[],mkm);
      } else if (TASK.FixationUsesSample > 0) {
        // IF FixationUsesSample, show image/movie
        displayTrial(
          CURRTRIAL.tsequencedesired,
          CURRTRIAL.sequencegridindex,
          CURRTRIAL.sequenceclip,
          CURRTRIAL.sequenceframe,
          CURRTRIAL.sequencetaskscreen,
          CURRTRIAL.sequencelabel,
          CURRTRIAL.sequenceindex,
          CURRTRIAL.images,
          mkm
        );
        await moviestart_promise();
      } //ELSEIF FixationUsesSample

      audiocontext.suspend();

      //========= AWAIT HOLD FIXATION TOUCH =========//
      if (ENV.FixationWindowRadius > 0) {
        // IF FixationWindow, then override object size
        // TODO: contain the scope of funcreturn to each file.
        funcreturn = getFixationWindowBoundingBox(CURRTRIAL.fixationgridindex,ENV.FixationWindowRadius);
        boundingBoxesFixation.x[0] = funcreturn[0];
        boundingBoxesFixation.y[0] = funcreturn[1];
      } else if (TASK.FixationUsesSample > 0 && ENV.FixationWindowRadius <= 0) {
        // alt. fixation window
        boundingBoxesFixation = boundingBoxesChoice3D;
      }

      let touchhold_return;
      if (ENV.StressTest == 1) {
        //IF automated stress test
        if (TASK.Species == 'model') {
          touchhold_return = { type: 'theld' };
          let x =
            boundingBoxesFixation.x[0][0] +
            Math.round(
              Math.random() *
                (boundingBoxesFixation.x[0][1] - boundingBoxesFixation.x[0][0])
            );

          let y =
            boundingBoxesFixation.y[0][0] +
            Math.round(
              Math.random() *
                (boundingBoxesFixation.y[0][1] - boundingBoxesFixation.y[0][0])
            );

          touchhold_return.cxyt = [
            0,
            x,
            y,
            Date.now() - ENV.CurrentDate.valueOf(),
          ];
          FLAGS.waitingforTouches--;
        }//IF MODEL STRESSTEST
        else {
          touchhold_return = { type: 'theld' };
          let x =
            boundingBoxesFixation.x[0][0] +
            Math.round(
              Math.random() *
                (boundingBoxesFixation.x[0][1] - boundingBoxesFixation.x[0][0])
            );

          let y =
            boundingBoxesFixation.y[0][0] +
            Math.round(
              Math.random() *
                (boundingBoxesFixation.y[0][1] - boundingBoxesFixation.y[0][0])
            );

          touchhold_return.cxyt = [
            0,
            x,
            y,
            Date.now() - ENV.CurrentDate.valueOf(),
          ];

          FLAGS.waitingforTouches--;
        }//IF !MODEL STRESSTEST
      }//IF STRESSTEST
      else {
        // ELSE await fixation hold
        FLAGS.acquiredTouch = 0;
        let p1 = hold_promise(
          TASK.FixationDuration,
          boundingBoxesFixation,
          FLAGS.punishOutsideTouch
        );
        let p2 = choiceTimeOut(TASK.FixationTimeOut);
        touchhold_return = await Promise.race([p1, p2]);
      }//ELSE !STRESSTEST

      if (FLAGS.movieplaying == 1) {
        // So that sample movie does not continue playing after fixation acquired
        frame.current = frame.shown.length - 1;
        frame.shown[frame.current] = 1;
        await moviefinish_promise();
      }

      try {
        CURRTRIAL.fixationtouchevent = touchhold_return.type;
        CURRTRIAL.fixationxyt = [
          touchhold_return.cxyt[1],
          touchhold_return.cxyt[2],
          touchhold_return.cxyt[3],
        ];
      } catch (e) {
        console.error('touchhold_return did not return properly:', e);
        CURRTRIAL.fixationtouchevent = 'tbroken';
        CURRTRIAL.fixationxyt = [-1, -1, -1];
      }

      logEVENTS('FixationTouchEvent',CURRTRIAL.fixationtouchevent,'trialseries');
      logEVENTS('FixationXYT', CURRTRIAL.fixationxyt, 'trialseries');

      //IF held fixaton & fixation task, count as correct
      if (CURRTRIAL.fixationtouchevent == 'theld') {
        if (TASK.RewardStage == 0 && FLAGS.waitingforTouches == 0) {
          CURRTRIAL.response = 1;
          CURRTRIAL.correctitem = 1;
          logEVENTS('Response', CURRTRIAL.response, 'trialseries');
        }

        // ELSE IF broke fixation & fixation task, count as incorrect
      } else if (
        TASK.RewardStage == 0 &&
        CURRTRIAL.fixationtouchevent == 'tbroken'
      ) {
        CURRTRIAL.response = 0;
        CURRTRIAL.correctitem = 1;
        FLAGS.waitingforTouches = 0; //exit loop
        logEVENTS('Response', CURRTRIAL.response, 'trialseries');
      }

      //========= AWAIT CLEAR FIXATION =========//
      for (let q in CANVAS.sequenceblank) {
        frame.shown[q] = 0;
        frame.frames[q] = [q];
      }
      frame.current = 0;
      if (FLAGS.waitingforTouches > 0) {
        // blank out screen
        await displayTrial(CANVAS.tsequenceblank,[-1],[0],[0],CANVAS.sequenceblank,[0],[0],[],mkm);
      }
    } //WHILE waiting for NFixations
    //============ (end) WHILE RUN FIXATION SCREEN ============//

    //SAMPLE TEST    SAMPLE TEST    SAMPLE TEST    SAMPLE TEST    SAMPLE TEST    //
    //SAMPLE TEST    SAMPLE TEST    SAMPLE TEST    SAMPLE TEST    SAMPLE TEST    //
    //SAMPLE TEST    SAMPLE TEST    SAMPLE TEST    SAMPLE TEST    SAMPLE TEST    //
    //============== AWAIT SHOW SAMPLE THEN TEST ==============//
    if (TASK.RewardStage === 1) {
      // Set where to display
      if (TASK.SampleGridIndex >= 0) {
        // IF fixed sample location
        CURRTRIAL.samplegridindex = TASK.SampleGridIndex;
      }//IF
      else if (TASK.SampleGridIndex < 0) {
        // ELSE IF random sample location
        if (TASK.FixationGridIndex < 0) {
          // IF moving fixation, use its grid location for sample
          CURRTRIAL.samplegridindex = CURRTRIAL.fixationgridindex;
        }
        else {
          // ELSE use random grid location for sample
          CURRTRIAL.samplegridindex = Math.floor(
            ENV.XGridCenter.length * Math.random()
          );
        }//ELSE random grid location
      }//ELSEIF grid<0

      // Update grid location of each Sample frame
      for (let i = 0; i < CURRTRIAL.sequencegridindex.length; i++) {
        for (let j = 0; j < CURRTRIAL.sequencegridindex[i].length; j++) {
          if (CURRTRIAL.sequencetaskscreen[i] == 'Sample') {
            CURRTRIAL.sequencegridindex[i][j] = CURRTRIAL.samplegridindex;
          }
        }//FOR j gridindex
      }//FOR i gridindex

      logEVENTS('SampleGridIndex', CURRTRIAL.samplegridindex, 'trialseries');
      frame.shown = [];
      frame.frames = [];
      frame.current = 0;
      for (let q in CURRTRIAL.sequencetaskscreen) {
        frame.shown[q] = 0;
        frame.frames[q] = [q];
      } // FOR q frames

      // KeepSampleON
      if (TASK.KeepSampleON == 1) {
        //Remove Blank after Sample if keeping on
        let idx = CURRTRIAL.sequencetaskscreen.indexOf('SampleBlank');
        while (idx != -1) {
          CURRTRIAL.sequencetaskscreen[idx] = 'Sample';
          idx = CURRTRIAL.sequencetaskscreen.indexOf('SampleBlank', idx + 1);
        }

        //Add Sample to test screen
        let idxArr = [];
        idx = CURRTRIAL.sequencetaskscreen.indexOf('Sample');
        while (idx != -1) {
          idxArr.push(idx);
          idx = CURRTRIAL.sequencetaskscreen.indexOf('Sample', idx + 1);
        }

        // FOR i remaining frames after Sample
        for (
          let i = idxArr[idxArr.length - 1] + 1;
          i < frame.frames.length;
          i++
        ) {
          // Append last Sample scene rendered
          frame.frames[i].push(idxArr[idxArr.length - 1]);
        }
      }//IF KeepSampleON

      // KeepTestON
      if (TASK.KeepTestON == 1 && TASK.SameDifferent > 0) {
        let idxArr = [];
        let idx = CURRTRIAL.sequencetaskscreen.indexOf('Test');
        while (idx != -1) {
          idxArr.push(idx);
          idx = CURRTRIAL.sequencetaskscreen.indexOf('Test', idx + 1);
        }

        // FOR i remaining frames after Test
        for (
          let i = idxArr[idxArr.length - 1] + 1;
          i < frame.frames.length;
          i++
        ) {
          // Append last Test scene rendered
          frame.frames[i].push(idxArr[idxArr.length - 1]);
        }
      }

      //Display Sample & Test/Choice
      if (TASK.NRSVP > 0 && TASK.FixationWindowSizeInches > 0) {
        // IF RSVP, hold sample fixation
        let fixationWindowBoundingBox = getFixationWindowBoundingBox(
          CURRTRIAL.samplegridindex,
          ENV.FixationWindowRadius
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
          FLAGS.punishOutsideTouch
        );
        let p2 = displayTrial(
          CURRTRIAL.tsequencedesired,
          CURRTRIAL.sequencegridindex,
          CURRTRIAL.sequenceclip,
          CURRTRIAL.sequenceframe,
          CURRTRIAL.sequencetaskscreen,
          CURRTRIAL.sequencelabel,
          CURRTRIAL.sequenceindex,
          CURRTRIAL.images,
          mkm,FLAGS.savedata
        );

        let race_return = [];
        if (ENV.StressTest == 0){
          race_return = await Promise.race([p1, p2]);
        }
        else{
          race_return = await p2;
        }//ELSE STRESSTEST
        FLAGS.acquiredTouch = 0;
        FLAGS.waitingforTouches = 0;

        //Determine number of clips fixated
        var nclipshown =
          frame.shown.lastIndexOf(1) !== undefined
            ? CURRTRIAL.sequenceclip[frame.shown.lastIndexOf(1)]
            : 0;
        if (typeof race_return.type == 'undefined') {
          nclipshown++;
        } //IF held until completeion, count all i clips; otw only count i-1

        if (FLAGS.movieplaying == 1) {
          // So that sample movie does not continue playing after fixation broken
          frame.current = frame.shown.length - 1;
          frame.shown[frame.current] = 1;
          await moviefinish_promise();
        }

        if (ENV.Eye.TrackEye > 0) {
          ENV.Eye.EventType = 'eyestart'; // Reset eye state
        }

        if (typeof race_return.type == 'undefined') {
          // IF held sample fixation
          CURRTRIAL.samplefixationtouchevent = 'theld';
          CURRTRIAL.samplefixationxyt = [
            0,
            0,
            Date.now() - ENV.CurrentDate.valueOf(),
          ];
        } else {
          // ELSE broke samplefixation
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
      } else {
        // ELSE !RSVP, no fixation hold
        boundingBoxesChoice3D = { x: [], y: [] }; // determined on the fly during display
        CURRTRIAL.samplefixationtouchevent = '';
        CURRTRIAL.samplefixationxyt = [];

        await displayTrial(
          CURRTRIAL.tsequencedesired,
          CURRTRIAL.sequencegridindex,
          CURRTRIAL.sequenceclip,
          CURRTRIAL.sequenceframe,
          CURRTRIAL.sequencetaskscreen,
          CURRTRIAL.sequencelabel,
          CURRTRIAL.sequenceindex,
          CURRTRIAL.images,
          mkm, FLAGS.savedata
        );
      } //ELSE !RSVP

      logEVENTS('SampleFixationTouchEvent',CURRTRIAL.samplefixationtouchevent,'trialseries');
      logEVENTS('SampleFixationXYT',CURRTRIAL.samplefixationxyt,'trialseries');

      //Store timing of clip presentations
      CURRTRIAL.tsequencedesiredclip = [];
      CURRTRIAL.tsequenceactualclip = [];

      // FOR f frames
      for (let f = 0; f < CURRTRIAL.sequencetaskscreen.length; f++) {
        // IF new clip || new taskscreen within that clip
        if (
          f == 0 ||
          CURRTRIAL.sequencetaskscreen[f] !=
            CURRTRIAL.sequencetaskscreen[f - 1] ||
          CURRTRIAL.sequenceclip[f] != CURRTRIAL.sequenceclip[f - 1]
        ) {
          CURRTRIAL.tsequencedesiredclip.push(CURRTRIAL.tsequencedesired[f]);
          if (
            f > CURRTRIAL.tsequenceactual.length - 1 ||
            CURRTRIAL.tsequenceactual[f] === undefined
          ) {
            // IF clip not shown OR tsequenceactual[f] undefined
            CURRTRIAL.tsequenceactualclip.push(-1);
          } else {
            CURRTRIAL.tsequenceactualclip.push(CURRTRIAL.tsequenceactual[f]);
          }
        }
      }

      logEVENTS('TSequenceDesiredClip',CURRTRIAL.tsequencedesiredclip,'trialseries');
      logEVENTS('TSequenceActualClip',CURRTRIAL.tsequenceactualclip,'trialseries');
      logEVENTS('SampleStartTime', CURRTRIAL.samplestarttime, 'trialseries');
      logEVENTS('FrameNum', CURRTRIAL.sequenceframe, 'timeseries');
      logEVENTS('TSequenceDesired', CURRTRIAL.tsequencedesired, 'timeseries');
      logEVENTS('TSequenceActual', CURRTRIAL.tsequenceactual, 'timeseries');

      // Store timestamp from beginning of display
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
      funcreturn = getMeanStandardDeviation(dframe);
      console.log("Display timing (actual-desired): " + funcreturn[0] + " +- " + funcreturn[1] + ' ms');

      if (FLAGS.savedata == 0) {
        updateImageLoadingAndDisplayText(' '); // displays frame tactual - tdesired
      }

      audiocontext.suspend();

      //RESPONSE    RESPONSE    RESPONSE    RESPONSE    RESPONSE    RESPONSE    RESPONSE    //
      //RESPONSE    RESPONSE    RESPONSE    RESPONSE    RESPONSE    RESPONSE    RESPONSE    //
      //RESPONSE    RESPONSE    RESPONSE    RESPONSE    RESPONSE    RESPONSE    RESPONSE    //
      //========= AWAIT TOUCH RESPONSE =========//
      FLAGS.waitingforTouches = 1;
      if (TASK.HideTestDistractors >= 1) {
        FLAGS.punishOutsideTouch = 1;
      } else {
        FLAGS.punishOutsideTouch = 0;
      }

      let race_return = { type: 'theld' };
      let currchoice;
      if (ENV.StressTest == 1){
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
            let batchSz = modelConfigKeys.includes('batchSize')
              ? TASK.ModelConfig.batchSize
              : 4;
            let shuffleSz = modelConfigKeys.includes('shuffleSize')
              ? TASK.ModelConfig.shuffleSize
              : 4;
            let yTrainLabelsObj = {};
            for (let i = 0; i < mkm.units; i++) {
              yTrainLabelsObj[`Label ${i}`] = mkm.dataObj.yTrainLabels.filter(
                (x) => x === i
              ).length;
            }
            console.log('yTrainLabels:', mkm.dataObj.yTrainLabels);
            console.log('yTrainLabelsObj:', yTrainLabelsObj);

            let xTrain = tf.data.array(mkm.dataObj.xTrain);
            let yTrain = tf.data.array(mkm.dataObj.yTrain);
            let trainDataset = tf.data
              .zip({ xs: xTrain, ys: yTrain })
              .batch(batchSz)
              .shuffle(shuffleSz);

            const beginMs = performance.now();
            await mkm.model.fitDataset(trainDataset, {
              epochs: TASK.ModelConfig.epochs,
              callbacks: {
                onEpochEnd: async (epoch, logs) => {
                  const msPerEpoch =
                    (performance.now() - beginMs) / (epoch + 1);
                  const secPerEpoch = msPerEpoch / 1000;
                  console.log(
                    'Training model ... Approx. ' +
                      `${secPerEpoch.toFixed(4)} sec/epoch`
                  );
                  console.log('logs:', logs);
                  EVENTS['trainseries'].TrainingAccuracy.push(logs.acc);
                  EVENTS['trainseries'].TrainingLoss.push(logs.loss);
                  EVENTS['trainseries'].MsPerEpoch.push(msPerEpoch);
                },
              },
            });
            console.log(EVENTS['trainseries']);
          }

          if (CURRTRIAL.num >= TASK.ModelConfig.trainIdx) {
            let yPred = [];
            if (TASK.SameDifferent > 0) {
              mkm.dataObj.xTest.forEach((feature) => {
                let pred = mkm.model.predict(
                  feature.reshape([1, mkm.inputShape[0]])
                );
                pred.print();
                pred = pred.reshape([mkm.units]).argMax(0);
                pred = pred.dataSync();
                yPred.push(pred[0]);
              });
              let allEqual = (arr) => arr.every((v) => v === arr[0]);
              if (allEqual(yPred)) {
                currchoice = 0;
              } else {
                currchoice = 1;
              }
            } else {
              mkm.dataObj.xTest.forEach((feature) => {
                let pred = mkm.model.predict(
                  feature.reshape([1, mkm.inputShape[0]])
                );
                pred.print();
                pred = pred.reshape([mkm.units]).argMax(0);
                pred = pred.dataSync();
                yPred.push(pred[0]);
              });
              currchoice = yPred[0];
            }
            console.log('yPred:', currchoice, 'yTrue:', CURRTRIAL.correctitem);
            mkm.dataObj.xTest = [];
            mkm.dataObj.yTest = [];

            if (TASK.ModelConfig.saveImages == 1) {
              if (currchoice != CURRTRIAL.correctitem) {
                let mkmodelsRef = storageRef.child('mkturkfiles/mkmodels/');
                let cvsData = mkm.cvs.toDataURL();
                let path = `${TASK.Agent}/${ENV.CurrentDate.toJSON()}/${
                  CURRTRIAL.num
                }_incorrect.png`;
                mkmodelsRef.child(path).putString(cvsData, 'data_url');
              }
            } else if (
              TASK.ModelConfig.saveImages == 2 ||
              TASK.ModelConfig.saveImages == 3
            ) {
              let mkmodelsRef = storageRef.child('mkturkfiles/mkmodels/');
              let cvsData = mkm.cvs.toDataURL();
              let path =
                currchoice == CURRTRIAL.correctitem
                  ? `${TASK.Agent}/${ENV.CurrentDate.toJSON()}/${
                      CURRTRIAL.num
                    }_correct_yTrue-${
                      CURRTRIAL.correctitem
                    }_yPred-${currchoice}.png`
                  : `${TASK.Agent}/${ENV.CurrentDate.toJSON()}/${
                      CURRTRIAL.num
                    }_incorrect_yTrue-${
                      CURRTRIAL.correctitem
                    }_yPred-${currchoice}.png`;
              mkmodelsRef.child(path).putString(cvsData, 'data_url');
            }
          }
        } else {
          // ELSE TASK.Species != 'model'
          let hitrate = 0.5;

          if (TASK.Agent == 'Youno') {
            hitrate = 0.9;
          } else if (TASK.Agent == 'Eliaso') {
            hitrate = 0.7;
          } else if (TASK.Agent == 'SaveImages') {
            hitrate = 1.0;
          }

          if (TASK.NRSVP>0){
            // IF RSVP, skip choice
            CURRTRIAL.correctitem = 1;
            race_return = { type: 'theld' };
            currchoice = 1;
            x=-1; y=-1;
          }//IF RSVP
          else{
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

            x =
              boundingBoxesChoice3D.x[currchoice][0] +
              Math.round(
                Math.random() *
                  (boundingBoxesChoice3D.x[currchoice][1] -
                    boundingBoxesChoice3D.x[currchoice][0])
              );

            y =
              boundingBoxesChoice3D.y[currchoice][0] +
              Math.round(
                Math.random() *
                  (boundingBoxesChoice3D.y[currchoice][1] -
                    boundingBoxesChoice3D.y[currchoice][0])
              );


            }//ELSE !RSVP
        }//ELSE TASK.Species != 'model'

        race_return.cxyt = [
          currchoice,
          x,
          y,
          Date.now() - ENV.CurrentDate.valueOf(),
        ];
        FLAGS.waitingforTouches--;
      }//IF STRESSTEST
      else {
        // ELSE !ENV.StressTest
        if (TASK.NRSVP > 0) {
          // IF RSVP, skip choice
          CURRTRIAL.correctitem = 1;
          if (TASK.FixationWindowSizeInches <= 0) {
            // IF no fixation required
            race_return = { type: 'theld' };
            currchoice = 1;
          } else {
            // fixation required
            race_return = { type: CURRTRIAL.samplefixationtouchevent };

            if (
              CURRTRIAL.samplefixationtouchevent == 'theld' ||
              nclipshown >= ENV.NRSVPMin
            ) {
              // held samplefixation
              currchoice = 1;
            } else {
              // broke samplefixation
              currchoice = 0;
            }
          }//ELSE RSVP fixation required

          race_return.cxyt = [
            currchoice,
            -1,
            -1,
            CURRTRIAL.samplefixationxyt[2],
          ];
          FLAGS.waitingforTouches--;
        } else {
          // IF !RSVP, require choice
          let p1 = hold_promise(
            0,
            boundingBoxesChoice3D,
            FLAGS.punishOutsideTouch
          );
          let p2 = choiceTimeOut(TASK.ChoiceTimeOut);
          race_return = await Promise.race([p1, p2]);
        }//ELSE !RSVP
      }//ELSE !STRESSTEST

      CURRTRIAL.responsetouchevent = race_return.type;
      CURRTRIAL.response = race_return.cxyt[0];
      CURRTRIAL.responsexyt = [
        race_return.cxyt[1],
        race_return.cxyt[2],
        race_return.cxyt[3],
      ];

      logEVENTS('ResponseXYT', CURRTRIAL.responsexyt, 'trialseries');
      logEVENTS(
        'ResponseTouchEvent',
        CURRTRIAL.responsetouchevent,
        'trialseries'
      );
      logEVENTS('Response', CURRTRIAL.response, 'trialseries');

      // Keep track of repeated responses to one side
      if (
        TASK.NRSVP <= 0 &&
        CURRTRIAL.num > 0 &&
        FLAGS.savedata &&
        CURRTRIAL.responsetouchevent == 'theld'
      ) {
        if (
          CURRTRIAL.response ==
          trialhistory.response[trialhistory.correct.length - 1]
        ) {
          FLAGS.stickyresponse++;
        } else {
          FLAGS.stickyresponse = 0;
        }
      }
    }//IF TASK.RewardStage === 1
    logEVENTS('CorrectItem', CURRTRIAL.correctitem, 'trialseries');

    //REWARD PUNISH    REWARD PUNISH    REWARD PUNISH    REWARD PUNISH    REWARD PUNISH    //
    //REWARD PUNISH    REWARD PUNISH    REWARD PUNISH    REWARD PUNISH    REWARD PUNISH    //
    //REWARD PUNISH    REWARD PUNISH    REWARD PUNISH    REWARD PUNISH    REWARD PUNISH    //
    // Determine if Choice was correct
    // if (CURRTRIAL.response == CURRTRIAL.correctitem){ CURRTRIAL.correct = 1; }
    // else { CURRTRIAL.correct=0; }

    CURRTRIAL.correct = CURRTRIAL.response == CURRTRIAL.correctitem ? 1 : 0;

    //============ DETERMINE NUMBER OF REWARDS ============//
    if (TASK.RewardStage == 0 && samplereward == 0) {
      CURRTRIAL.nreward = -1; // skip reward/punish
    } else if (
      ENV.NRSVPMin > 0 &&
      ENV.NRSVPMax > 0 &&
      ENV.NRSVPMax > ENV.NRSVPMin &&
      TASK.RewardStage > 0
    ) {
      if (nclipshown < ENV.NRSVPMin) {
        CURRTRIAL.nreward = 0;
      } else {
        // exponential reward = 1*exp(a*(nseen - nmin)), where a = ln(rmax)/(nmax-nmin)
        CURRTRIAL.nreward = Math.exp(
          (Math.log1p(TASK.NRewardMax - 1) / (ENV.NRSVPMax - ENV.NRSVPMin)) *
            (nclipshown - ENV.NRSVPMin)
        );
        CURRTRIAL.nreward = Math.round(CURRTRIAL.nreward);
      }
    } //IF NRSVP && reward based on nclips fixated before break
    else if (
      CURRTRIAL.correct &&
      (samplereward == -1 || TASK.RewardStage == 0)
    ) {
      // default behavior
      let lastStartTimeIdx = trialhistory.starttime.length - 1;
      if (
        FLAGS.savedata &&
        (CURRTRIAL.starttime - trialhistory.starttime[lastStartTimeIdx] <
          TASK.ConsecutiveHitsITI ||
          CURRTRIAL.num == 0)
      ) {
        // if correct within bonus interval
        FLAGS.consecutivehits++;
      } else {
        // took too long, set to 1
        FLAGS.consecutivehits = 1;
      }
      CURRTRIAL.nreward =
        1 + Math.floor(FLAGS.consecutivehits / TASK.NConsecutiveHitsforBonus);

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
    logEVENTS('NReward', CURRTRIAL.nreward, 'trialseries');

    //============ DELIVER REWARD/PUNISH ============//
    //NO FEEDBACK
    if (CURRTRIAL.nreward == -1) {
      // IF no feedback
      CANVAS.sequencepost[1] = 'Blank';
      CANVAS.tsequencepost[1] = 0;
      frame.shown = [];
      frame.frames = [];
      frame.current = 0;

      for (let q in CANVAS.sequencepost) {
        frame.shown[q] = 0;
        frame.frames[q] = [q];
      }

      renderShape2D(CANVAS.sequencepost[0], -1, VISIBLECANVAS);

      let lenTsequencePost = CANVAS.tsequencepost.length;
      await displayTrial(
        CANVAS.tsequencepost,
        Array(lenTsequencePost).fill(-1),
        Array(lenTsequencePost).fill(-1),   
        range(0, lenTsequencePost - 1, 1),
        CANVAS.sequencepost,
        Array(lenTsequencePost).fill(0),
        Array(lenTsequencePost).fill(0),
        [],
        mkm
      );
    } else if (CURRTRIAL.correct) {
      // ELSE IF correct, then REWARD (blank, reward, blank)
      CANVAS.tsequencepost = [];
      CANVAS.sequencepost = [];
      funcreturn = makeSequencePost(50,"Blank",ENV.FrameRateMovie);
      CANVAS.tsequencepost = funcreturn[0];
      CANVAS.sequencepost = funcreturn[1];

      funcreturn = makeSequencePost(ENV.RewardDuration*1000,"Reward",ENV.FrameRateMovie);
      CANVAS.tsequencepost.push(...funcreturn[0]);
      CANVAS.sequencepost.push(...funcreturn[1]);

      funcreturn = makeSequencePost(0,"Blank",ENV.FrameRateMovie);
      CANVAS.tsequencepost.push(...funcreturn[0]);
      CANVAS.sequencepost.push(...funcreturn[1]);

      for (let i = 0; i < CURRTRIAL.nreward; i++) {
        // FOR nrewards
        frame.shown = [];
        frame.frames = [];
        frame.current = 0;

        for (let j in CANVAS.sequencepost) {
          frame.shown[j] = 0;
          frame.frames[j] = [j];
        }

        playSound(2);
        renderShape2D(CANVAS.sequencepost[0], -1, VISIBLECANVAS);
        let lenTsequencePost = CANVAS.tsequencepost.length;
        let p1 = displayTrial(CANVAS.tsequencepost,
          Array(lenTsequencePost).fill(-1),Array(lenTsequencePost).fill(-1),range(0, lenTsequencePost - 1, 1),
          CANVAS.sequencepost,
          Array(lenTsequencePost).fill(0), Array(lenTsequencePost).fill(0), [],
          mkm
        );

        CURRTRIAL.reinforcementtime = Date.now() - ENV.CurrentDate.valueOf();
        logEVENTS('ReinforcementTime',CURRTRIAL.reinforcementtime,'trialseries');

        if (ble.connected == false && port.connected == false) {
          await Promise.all([p1]);
        } else if (ble.connected == true) {
          let p2 = writepumpdurationtoBLE(
            Math.round(ENV.RewardDuration * 1000)
          );
          await Promise.all([p1, p2]);
        } else if (port.connected == true) {
          port.writepumpdurationtoUSB(Math.round(ENV.RewardDuration * 1000));
          await Promise.all([p1]);
        } //ELSEIF USB
      } //FOR i rewards
    } else if (!CURRTRIAL.correct) {
      // ELSE IF wrong, then timeout (Blank, Punish, Blank)
      CANVAS.tsequencepost = [];
      CANVAS.sequencepost = [];
      funcreturn = makeSequencePost(50,"Blank",ENV.FrameRateMovie);
      CANVAS.tsequencepost = funcreturn[0];
      CANVAS.sequencepost = funcreturn[1];

      funcreturn = makeSequencePost(TASK.PunishTimeOut,"Punish",ENV.FrameRateMovie);
      CANVAS.tsequencepost.push(...funcreturn[0]);
      CANVAS.sequencepost.push(...funcreturn[1]);

      funcreturn = makeSequencePost(0,"Blank",ENV.FrameRateMovie);
      CANVAS.tsequencepost.push(...funcreturn[0]);
      CANVAS.sequencepost.push(...funcreturn[1]);

      frame.shown = [];
      frame.frames = [];
      frame.current = 0;
      for (let q in CANVAS.sequencepost) {
        frame.shown[q] = 0;
        frame.frames[q] = [q];
      }

      renderShape2D(CANVAS.sequencepost[0], -1, VISIBLECANVAS);
      let lenSequencePost = CANVAS.sequencepost.length;
      let p1 = displayTrial(CANVAS.tsequencepost,
        Array(lenSequencePost).fill(-1),Array(lenSequencePost).fill(-1),range(0, lenSequencePost - 1, 1),
        CANVAS.sequencepost,
        Array(lenSequencePost).fill(0), Array(lenSequencePost).fill(0),[],mkm
      );

      let numTrialsToBufferPunishPeriod = 50;
      let p2 = TQS.generate_trials(numTrialsToBufferPunishPeriod * TASK.NRSVP);
      playSound(3);
      CURRTRIAL.reinforcementtime = Date.now() - ENV.CurrentDate.valueOf();
      logEVENTS('ReinforcementTime',CURRTRIAL.reinforcementtime,'trialseries');

      await Promise.all([p1, p2]);
    } //IF PUNISH

    if (port.connected && FLAGS.savedata) {
      port.writeSampleCommandTriggertoUSB('0');
      // Log trial end time
      CURRTRIAL.endtime = Date.now() - ENV.CurrentDate.valueOf();
      await sleep(5);
    }
    else{
      // Log trial end time
      CURRTRIAL.endtime = Date.now() - ENV.CurrentDate.valueOf();      
    }

    logEVENTS('EndTime', CURRTRIAL.endtime, 'trialseries');
    //============ (end) DELIVER REWARD/PUNISH ============//

    //HOUSEKEEPING    HOUSEKEEPING    HOUSEKEEPING    HOUSEKEEPING    HOUSEKEEPING    //
    //HOUSEKEEPING    HOUSEKEEPING    HOUSEKEEPING    HOUSEKEEPING    HOUSEKEEPING    //
    //HOUSEKEEPING    HOUSEKEEPING    HOUSEKEEPING    HOUSEKEEPING    HOUSEKEEPING    //
    //================= HOUSEKEEPING =================//
    let ITIstart = performance.now();

    // Calibrate eye
    if (ENV.Eye.TrackEye > 0) {
      // IF track eye
      /**
       * Can manually adjust params only when on practice screen
       * Can automatically calibrate when on test screen
       */

      if (FLAGS.savedata == 1 && ENV.Eye.calibration == 1) {
        // IF train eye calibration
        if (CURRTRIAL.fixationtouchevent == 'theld') {
          ENV.Eye.NCalibPointsTrain++;
        }

        if (ENV.Eye.NCalibPointsTrain == TASK.CalibrateEye) {
          //IF enough points
          // Run calibration fitting
          let calibreturn = runCallibration();
          ENV.Eye.CalibXTransform = calibreturn.xtform;
          ENV.Eye.CalibYTransform = calibreturn.ytform;
          ENV.Eye.NCalibPoints = calibreturn.n;
          ENV.Eye.CalibType = calibreturn.type;

          // Compute GOF
          ENV.Eye.CalibTrainMSE[0] = compute_mse(
            calibreturn.predictedx,
            calibreturn.actualx
          );
          ENV.Eye.CalibTrainMSE[1] = compute_mse(
            calibreturn.predictedy,
            calibreturn.actualy
          );

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
        } //IF enough points
      }//IF ENV.Eye.calibration==1
      else if (FLAGS.savedata == 1 && ENV.Eye.calibration == 0) {
        // ELSEIF test eye calibration
        if (CURRTRIAL.fixationtouchevent == 'theld') {
          // IF held fixation
          ENV.Eye.NCalibPointsTest++;
        }

        if (ENV.Eye.NCalibPointsTest == TASK.CalibrateEye) {
          // IF enough points
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
      }//ELSEIF calibrate test data

      if (typeof EVENTS['timeseries']['EyeData'][0] != 'undefined') {
        let firstTimestamp = new Date(EVENTS['timeseries']['EyeData'][0][1]);
        let lastIdx = Object.keys(EVENTS['timeseries']['EyeData']).length - 1;
        let lastTimestamp = new Date(
          EVENTS['timeseries']['EyeData'][lastIdx][1]
        );

        let interval =
          (lastTimestamp.valueOf() - firstTimestamp.valueOf()) / lastIdx;
        logEVENTS('EyetrackerSampleInterval', interval, 'trialseries');
      } //IF defined
      else {
        logEVENTS('EyetrackerSampleInterval', 0, 'trialseries');
      } //ELSE
    } //IF trackeye

    //clear tracker canvas at end of trial
    if (FLAGS.savedata == 0 || CURRTRIAL.num <= 1) {
      //IF practice screen
      EYETRACKERCANVAS.getContext('2d').clearRect(
        0,
        0,
        EYETRACKERCANVAS.width,
        EYETRACKERCANVAS.height
      );
    }

    CURRTRIAL.lastTrialCompleted = new Date();

    // Update EVENTS only if saving data
    if (FLAGS.savedata == 1) {
      // Update trial tracking variables
      updateTrialHistory(); //appends to running trial history

      // // Run automator
      // if (TASK.Automator !=0){
      //   await automateTask(automator_data, trialhistory);
      // }

      // Cloud Storage: Save data asynchronously to json
      saveBehaviorDatatoFirebase(TASK, ENV, CANVAS, EVENTS);

if (TASK.Agent != "SaveImages"){
      // Firestore Database: Save data asynchronously to database
      if (FLAGS.createnewfirestore == 1) {
        saveBehaviorDatatoFirestore(TASK, ENV, CANVAS); //write once
        pingFirestore(); //every 10 seconds, will check for data updates to upload to firestore
      } //IF new firestore, kick off firestore database writes

      // BigQuery Data Stream
      if (ENV.Eye.TrackEye > 0) {
        if ( (TASK.BQSaveEye === undefined || TASK.BQSaveEye > 0) && FLAGS.pingedBQEyeTable==0 ) {
          // uploads eyedata to BigQuery every 10 seconds
          pingBigQueryEyeTable();
        console.log('BIGQUERY: ' + 'Kick off save EYE (trial ' + CURRTRIAL.num +')')
        } //IF BQsaveEye
      } // IF trackeye
      else if ( (TASK.BQSaveTouch === undefined || TASK.BQSaveTouch > 0) && FLAGS.pingedBQTouchTable==0 ) {
        // uploads touch data to BigQuery every 10 seconds
        pingBigQueryTouchTable();
        console.log('BIGQUERY: ' + 'Kick off save TOUCH (trial ' + CURRTRIAL.num +')')
      } //IF BQsaveTouch

      if ( (TASK.BQSaveDisplayTimes === undefined || TASK.BQSaveDisplayTimes > 0) && FLAGS.pingedBQDisplayTimesTable==0 ) {
        //uploads display times data to bigquery every 10 seconds
        pingBigQueryDisplayTimesTable();
        console.log('BIGQUERY: ' + 'Kick off save DISPLAY TIMES (trial ' + CURRTRIAL.num +')')
      } //IF BQsaveDisplayTimes
}//IF !SaveImages, save to databases      
    } //IF savedata

    if (FLAGS.need2saveParameters == 1) {
      FLAGS.need2saveParameters = saveParameterstoFirebase(); // Save parameters asynchronously
    }

if (TASK.Agent != "SaveImages"){
    await checkParameterFileStatusFirebase();  
    if ( new Date().getDate() != ENV.CurrentDate.getDate() || CURRTRIAL.num == 1000)
    {
      updateEventDataonFirestore(EVENTS);
      FLAGS.need2loadParameters = 1;

      if (CURRTRIAL.num == 1000){
        console.log('MKTURK RELOADING -- completed 1000 trials')
      }
      else{
        console.log('MKTURK RELOADING -- new day started')      
      }
    } //if new day, start new file or reached 1000 trials
}//IF !SaveImages

    rtdbAgentRef.once('value').then((snap) => {
      try {
        FLAGS.rtdbAgentNumConnections = Object.keys(snap.val()).length;
      } catch (err) {
        FLAGS.rtdbAgentNumConnections = 0;
        // console.error(`rtdbAgentRef most likely not yet instantiated: ${err}`);
      }
    });

  if ( TASK.Agent == 'SaveImages' && TASK.Automator == 0)
  {
    if (TASK.NRSVP > 1){
      if (CURRTRIAL.num >= Math.ceil(TQS.samplebag_indices.length/TASK.NRSVP)) { 
        console.log('MKTURK EXITING -- all images shown once for SaveImages')
        return
      }
    }//IF NRSVP>1
    else{
      if (CURRTRIAL.num >= TQS.samplebag_indices.length - 1) { 
        console.log('MKTURK EXITING -- all images shown once for SaveImages')
        return;
      }
    }
  }//IF saving all images and ran through them once


    if ( TASK.Species == 'model' && CURRTRIAL.num >= TQS.samplebag_indices.length - 1)
    {
      console.log('MKTURK EXITING -- all images shown once for Model')
      return;
    }

    // Run automator only after everything is saved
    if (TASK.Automator != 0) {
      await automateTask(automator_data, trialhistory);
      if (TASK.Automator == 0){
        console.log('MKTURK EXITING -- automator completed last stage')
        return;
      }
    }//IF Automator

    if (FLAGS.need2saveParameters == 1) {
      FLAGS.need2saveParameters = saveParameterstoFirebase();
      // Save parameters asynchronously
    }

    //================= (end) HOUSEKEEPING =================//

    updateHeadsUpDisplay();
    if (typeof TASK.InterTrialInterval != 'undefined') {
      let remainingInterTrialInterval =
        TASK.InterTrialInterval - (performance.now() - ITIstart);
      if (remainingInterTrialInterval > 0) {
        await sleep(remainingInterTrialInterval);
      }
    }

    console.log('END OF TRIAL ', CURRTRIAL.num);
    CURRTRIAL.num++;
    EVENTS.trialnum = CURRTRIAL.num;
  }
})();