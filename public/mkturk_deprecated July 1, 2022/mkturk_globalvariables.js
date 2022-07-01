//================== INITIALIZE GLOBALS ==================//
// In the interest of code readability and spaghetti-minimization, the use of globals should be kept to a minimum, and instead explicit passage of variables into and out of functions is encouraged.
// For certain things, globals make sense and may even be required, like event listeners and async processes.

//================ TASK,ENV,EVENTS (SAVED) ================//
// TASK <-- Read from Subject Parameter file
// ENV <-- TASK drives creation of ENV
// TASK,ENV,EVENTS --> Saved to Behavioral Data file
//
var TASK = {}; // Global that encapsulates state of the current task, read from Subject's Params file
var ENV = {}; // Task specific variables that are slaves to TASK settings, but still desired to be recorded. Hence, they should not appear in the TASK-based params file, but should be logged on their own.
var EVENTS = {}; // Global that contains data variables that are incremented every trial or are timestamped data streams, and are dumped to disk (cloud storage or bigquery) for scientific purposes.
var IMAGES = {
  Sample: {},
  Test: {},
  object: { sample: {}, test: {} },
  imagepaths: {
    Ordered_Samplebag_Filenames: {},
    Ordered_Testbag_Filenames: {},
  },
};

var OBJECTS = {};
var CAMERAS = {};
var LIGHTS = {};

var ImageRewardList = {};
var QuickLoad = { load: 0, agent: '', connectusb: 0 };

ENV.ResearcherDisplayName = '';
ENV.ResearcherEmail = '';
ENV.ResearcherID = '';
ENV.USBDeviceType = '';
ENV.USBDeviceName = '';
ENV.Subject = '';
ENV.AgentRFID = 'XX';
ENV.CurrentDate = new Date();
ENV.CanvasRatio = 1;
ENV.DevicePixelRatio = 1;
ENV.ThreeJSRenderRatio = 2;
ENV.FixationRadius = 0;
ENV.FixationWindowRadius = 0;
ENV.FixationColor = '';
ENV.FixationDotRadius = 0;
ENV.FixationDotColor = 'white';
ENV.ChoiceRadius = 0;
ENV.ChoiceColor = 'white';
ENV.XGridCenter = [];
ENV.YGridCenter = [];
ENV.RewardDuration = NaN;
ENV.ParamFileName = '';
ENV.ParamFileRev = '';
ENV.ParamFileDate = ''; //stores complete path to subject parameter file
ENV.DataFileName = ''; //stores complete path to behavioral data file
ENV.FirestoreDocRoot = '';
ENV.CurrentAutomatorStageName = '';
ENV.MinPercentCriterion = -1;
ENV.MinTrialsCriterion = -1;
ENV.StagePctCorrect = -1;
ENV.StageNTrials = -1;
ENV.NRSVPMin = -1;
ENV.NRSVPMax = -1;

ENV.WebBluetoothAvailable = 0;
ENV.WebUSBAvailable = 0;
ENV.BatteryAPIAvailable = 0;
ENV.OffscreenCanvasAvailable = 0;

ENV.UserAgent = window.navigator.userAgent;
ENV.WebAppUrl = window.location.href;
ENV.DeviceType = '';
ENV.DeviceBrand = '';
ENV.DeviceName = '';
ENV.DeviceScreenWidth = '';
ENV.DeviceScreenHeight = '';
ENV.DeviceGPU = '';
ENV.DeviceBrowserName = '';
ENV.DeviceBrowserVersion = '';
ENV.DeviceOSName = '';
ENV.DeviceOSCodename = '';
ENV.DeviceOSVersion = '';
ENV.DeviceTouchscreen = '';

ENV.ScreenRatio = -1;
ENV.ScreenSizePixels = [-1, -1];
ENV.ScreenSizeInches = [-1, -1, -1];
ENV.ViewportPixels = [-1, -1];

ENV.ViewportPPI = -1;
ENV.PhysicalPPI = -1;
ENV.FrameRateDisplay = 60;
ENV.FrameRateMovie = 30;

ENV.Task = '';

ENV.MTurkWorkerId = '';
ENV.AssignmentId = '';
ENV.HITId = '';

ENV.StressTest = 0;

//================ EYE GLOBALS ================//
ENV.Eye = {};

//Eye states
ENV.Eye.TrackEye = 0;
ENV.Eye.EventType = 'eyestart';
ENV.Eye.timeOfLastGlanceInBB = -1;
ENV.Eye.BlinkGracePeriod = 200;

//Calibration
ENV.Eye.calibration = 0;
ENV.Eye.CalibXTransform = [];
ENV.Eye.CalibYTransform = [];
ENV.Eye.CalibType = 'default';
ENV.Eye.NCalibPointsTrain = 0;
ENV.Eye.NCalibPointsTest = 0;
ENV.Eye.CalibTrainMSE = [];
ENV.Eye.CalibTestMSE = [];

ENV.PhotodiodeSquareSizeInches = 1;
ENV.PhotodiodeSquareX = 0;
ENV.PhotodiodeSquareY = 0;

//================ OTHER GLOBALS (NOT SAVED) ================//
var FLAGS = {}; // Global that keeps track of the task's requests to the Dropbox/server/disk/whatever; buffering requests; etc.
// The scientist does not care about tracking this variable into the behavioral files.
FLAGS.consecutivehits = 0;
FLAGS.need2loadImagesTrialQueue = 1;
FLAGS.need2loadScenes = 1;
FLAGS.movieper = { Sample: [], Test: [] };
FLAGS.movieplaying = 0;
FLAGS.need2loadParameters = 1;
FLAGS.need2saveParameters = 0;
FLAGS.savedata = 0;
FLAGS.stage = 0;
FLAGS.imagesPresent = 0;
FLAGS.stickyresponse = 0;

FLAGS.waitingforTouches = 0;
FLAGS.touchduration = -1;
FLAGS.punishOutsideTouch = 0;
FLAGS.acquiredTouch = 0;
FLAGS.touchGeneratorCreated = 0;
FLAGS.runPump = 0;
FLAGS.firestorecreatedoc = 0;
FLAGS.firestorelastsavedtrial = 0;
FLAGS.firestoretimeron = 0;
FLAGS.underlayGridPoints = 0;
FLAGS.RFIDGeneratorCreated = 0;
FLAGS.automatortext = '';
FLAGS.rtdbAgentNumConnections = null;

var CANVAS = {};
var CANVAS = {
  sequenceblank: ['Blank', 'Blank'],
  tsequenceblank: [0, 50],
  sequencepre: ['Touchfix'],
  tsequencepre: [0],
  sequencepost: ['Blank', 'Reward', 'Blank'], // blank, reward
  tsequencepost: [0, 50, 100],
  headsupfraction: NaN,
  offsetleft: 0,
  offsettop: 0,
};

var OFFSCREENCANVAS = null;
var VISIBLECANVAS = document.getElementById('canvasvisible');
var VISIBLECANVASWEBGL = document.getElementById('canvasvisiblewebgl');
var EYETRACKERCANVAS = document.getElementById('canvaseyetracker');

var frame = {
  current: 0,
  shown: [],
};

// States of the current trial, entered into running trialhistory
var CURRTRIAL = {};
CURRTRIAL.reset = function () {
  this.num = 0;
  this.starttime = NaN;
  this.reinforcementtime = NaN;
  this.endtime = NaN;
  this.samplestarttime = NaN;
  this.samplestarttime_string = '';
  this.fixationgridindex = NaN;
  this.fixationxyt = [];
  this.samplegridindex = NaN;
  this.sampleindex = [];
  this.sampleindex_nonarray = [];
  this.sampleimage = [];
  this.testindices = [];
  this.testimages = [];
  this.samplefixationxyt = [];
  this.responsexyt = [];
  this.response = [];
  this.correctitem = NaN;
  this.correct = [];
  this.nreward = NaN;
  this.fixationtouchevent = '';
  this.samplefixationtouchevent = '';
  this.responsetouchevent = '';
  this.lastTrialCompleted = new Date();
  this.lastFirebaseSave = new Date();
  this.tsequenceactual = [];
  this.tsequencedesired = [];
  this.tsequenceactualclip = [];
  this.tsequencedesiredclip = [];
  this.xyt = [];

  this.sample_scenebag_label = [];
  this.sample_scenebag_index = [];
  this.test_scenebag_labels = [];
  this.test_scenebag_indices = [];
};
CURRTRIAL.reset();

EVENTS.reset_trialseries = function () {
  this.trialnum = CURRTRIAL.num;
  this.trialseries = {};
  this.imageseries = {};
  this.trialseries.Sample = {};
  this.trialseries.Test = {};
  this.trialseries.CorrectItem = {};
  this.trialseries.FixationGridIndex = {};
  this.trialseries.StartTime = {};
  this.trialseries.ReinforcementTime = {};
  this.trialseries.EndTime = {};
  this.trialseries.SampleStartTime = {};
  this.trialseries.FixationTouchEvent = {};
  this.trialseries.FixationXYT = {};
  this.trialseries.Response = {};
  this.trialseries.TSequenceDesiredClip = {};
  this.trialseries.TSequenceActualClip = {};
  this.trialseries.SampleGridIndex = {};
  this.trialseries.SampleFixationTouchEvent = {};
  this.trialseries.SampleFixationXYT = {};
  this.trialseries.ResponseTouchEvent = {};
  this.trialseries.ResponseXYT = {};
  this.trialseries.Response = {};
  this.trialseries.NReward = {};
};
EVENTS.reset_timeseries = function () {
  this.timeseries = {};
  this.timeseries.Battery = {};
  this.timeseries.BLEBattery = {};
  this.timeseries.RFIDTag = {};
  this.timeseries.Weight = {};
  this.timeseries.FrameNum = {};
  this.timeseries.TSequenceDesired = {};
  this.timeseries.TSequenceActual = {};
  this.timeseries.EyeData = {};
  this.timeseries.Arduino = {};
  this.timeseries.TouchData = {};

  // Initialize battery value
  if (ENV.BatteryAPIAvailable) {
    //Monitor Battery - from: http://www.w3.org/TR/battery-status/
    navigator.getBattery().then(function (batteryobj) {
      logEVENTS(
        'Battery',
        [batteryobj.level, batteryobj.dischargingTime],
        'timeseries'
      );

      batteryobj.addEventListener('levelchange', function () {
        logEVENTS(
          'Battery',
          [batteryobj.level, batteryobj.dischargingTime],
          'timeseries'
        );
      }); //batteryobj.addEventListener
    }); //navigator.getBattery()
  } //IF battery API present
  else {
    //do nothing
  } //ELSE no battery api present
}; //EVENTS.reset_timeseries
EVENTS.reset_trialseries();
EVENTS.reset_timeseries();

var trialhistory = {};
trialhistory.trainingstage = [];
trialhistory.starttime = [];
trialhistory.response = [];
trialhistory.correct = [];

var sounds = {
  serial: [0, 1, 2, 3, 4],
  buffer: [],
};
var boundingBoxesFixation = { x: [], y: [] }; //where the fixation touch targets are on the canvas
var boundingBoxesSampleFixation = { x: [], y: [] };
var boundingBoxesChoice = { x: [], y: [] }; //where the choice touch targets are on the canvas
var waitforClick; //variable to hold generator
var waitforEvent; //variable to hold generator
var touchTimer; //variable to hold timer
var xcanvascenter = [];
var ycanvascenter = [];
var curridx = null;
var datafiles = [];
var displayoutofboundsstr = '';
var imageloadingtimestr = 'Loaded: ';
var eyedataratestr = '';
var samplecommand_roundtripstr = '';
var pumpcommand_roundtripstr = '';

//================ UPDATE VARIABLE FUNCTIONS ================//
function updateTrialHistory() {
  var current_stage = stageHash(TASK);
  trialhistory.trainingstage.push(current_stage);
  trialhistory.starttime.push(CURRTRIAL.starttime);
  trialhistory.response.push(CURRTRIAL.response);
  trialhistory.correct.push(CURRTRIAL.correct);
}

function logEVENTS(eventname, eventval, eventtype) {
  //log events for a trial
  if (eventtype == 'trialseries' || eventtype == 'imageseries') {
    //index by trial
    var indevent = EVENTS.trialnum;
    if (FLAGS.savedata == 0) {
      indevent = 0; //store most recent trial in first position until start saving data
    }

    if (typeof eventval == 'number' || typeof eventval == 'string') {
      if (!Array.isArray(EVENTS[eventtype][eventname])) {
        EVENTS[eventtype][eventname] = []; //initialize to array
      } //if initialized as object, convert to array
      EVENTS[eventtype][eventname][indevent] = eventval;
    } else if (typeof eventval == 'object' || eventval.length > 1) {
      for (var i = 0; i <= eventval.length - 1; i++) {
        if (typeof EVENTS[eventtype][eventname][i.toString()] == 'undefined') {
          EVENTS[eventtype][eventname][i.toString()] = {}; //initialize array
          EVENTS[eventtype][eventname][i.toString()] = [];
        } //if not initialized
        EVENTS[eventtype][eventname][i.toString()][indevent] = eventval[i];
      }
    }
  } else if (eventtype == 'timeseries') {
    //running index
    var indevent = Object.keys(EVENTS[eventtype][eventname]).length;
    var trialtime = [EVENTS.trialnum, new Date(Date.now()).toJSON()];
    EVENTS[eventtype][eventname][indevent.toString()] =
      trialtime.concat(eventval);
  }
}

function purgeTrackingVariables() {
  // Purges heresies committed in the test period
  EVENTS.reset_timeseries();

  ENV.CurrentDate = new Date();
  var datestr = ENV.CurrentDate.toISOString();
  if (ENV.MTurkWorkerId) {
    ENV.DataFileName = `${DATA_SAVEPATH}${datestr.slice(
      0,
      datestr.indexOf('.')
    )}_${ENV.Subject}.json`;
  } else {
    ENV.DataFileName =
      DATA_SAVEPATH +
      ENV.Subject +
      '/' +
      datestr.slice(0, datestr.indexOf('.')) +
      '_' +
      ENV.Subject +
      '.json';
  }
  ENV.FirestoreDocRoot =
    datestr.slice(0, datestr.indexOf('.')) + '_' + ENV.Subject;

  if (FLAGS.waitingforTouches > 0 || FLAGS.purge == 1) {
    // purge requested by user at beginning of trial during fixation (most likely)
    CURRTRIAL.num = 0;
    EVENTS.trialnum = 0;
    CURRTRIAL.starttime = Date.now() - ENV.CurrentDate.valueOf();
    logEVENTS('StartTime', CURRTRIAL.starttime, 'trialseries');
  } else {
    // purge requested by automator at end of trial
    CURRTRIAL.num = -1;
  }

  FLAGS.sampleblockcount = 0;
  FLAGS.consecutivehits = 0;

  return;
}
