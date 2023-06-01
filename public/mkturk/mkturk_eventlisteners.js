function hold_promise_simple(touchduration, outsideGracePeriod, broadcast_over_rtdb) {
  var resolveFunc;
  var errFunc;
  let finished = false;
  let cancel = () => finished = true;

  p = new Promise(function (resolve, reject) {
    resolveFunc = resolve;
    errFunc = reject;

    cancel = () => {
			// In case the promise has already resolved/rejected, don't run cancel behavior!
			if (finished) { return; }

			// Cancel-path scenario
      // console.log('HoldPromise -- cancel (reject) promise since not finished yet')
			reject();
		};//CANCEL
  }).then(function (resolveval) {
    FLAGS.touchGeneratorCreated = 0;
    finished = true
    return resolveval;
  }).catch(e => {
    // console.log('HoldPromise -- canceled promise throws error as return value of reject():' + e);
  });
;
  function* waitforeventGenerator() {
    var touchevent;
    var return_event = { type: '', cxyt: [] };
    while (true) {
      touchevent = yield touchevent;
      let boundingBoxes = FLAGS.bbTarget //fetch latest target bounding box

      //0a-EVENT COORDS, 0b-EVENT BOX
      //1a-INITIATE, 1b-CLICKED/DRAGGED, 1c-RELEASED
      //2a-STORE VALS, 2b-LOG STATE & PLOT COORDS
      
    //==== 0a - EVENT COORDINATES ==================//
      if (touchevent.type == 'touchstart' || touchevent.type == 'touchmove'){
        var x = touchevent.targetTouches[0].pageX;
        var y = touchevent.targetTouches[0].pageY;
      }//IF touch
      else if (touchevent.type == 'mousedown' || touchevent.type == 'mousemove' || touchevent.type == 'mouseup'){
        var x = touchevent.pageX;
        var y = touchevent.pageY;
      }//IF mouse
      else if (touchevent.type == 'touchend'){
        x = FLAGS.effectorState.x
        y = FLAGS.effectorState.y
      }//IF touchend, it's a special case where need to store the prior touchmove value
      else if (touchevent.type == 'eye'){
        var x = touchevent.x_val;
        var y = touchevent.y_val;
      }//IF eye
    //==== (END) 0a - EVENT COORDINATES ==================//

    //==== 0b - EVENT BOX ================//
      let boxID = -1;
      let boxClass = -1;
      let taskscreen = -1
      for (var q = 0; q <= boundingBoxes.x.length - 1; q++) {
        if ( x >= boundingBoxes.x[q][0] && x <= boundingBoxes.x[q][1] &&
              y >= boundingBoxes.y[q][0] && y <= boundingBoxes.y[q][1]) {
          boxID = q
          boxClass = boundingBoxes.class[q];
          taskscreen = boundingBoxes.taskscreen[q];
        }//IF in bounding box
      }//FOR q boxes

      if (typeof(boundingBoxes.taskscreen[0]) == 'undefined'){
        boxID = -1
        boxClass = 99
      }//IF no defined targets, default to inside
    //==== (END) 0b - EVENT BOX ================//

    //==== 1a - INITIATED ================//
      let holdstart = FLAGS.effectorState.holdstart
      if ( holdstart <= 0 && touchevent.type != 'touchend' && touchevent.type != 'mouseup'){
        if (taskscreen == 'Touchfix' && touchevent.type != 'eye'){
          if (boxClass >= 0 && (touchevent.type == 'touchstart' || touchevent.type == 'mousedown') ){
            holdstart = Date.now() - ENV.CurrentDate.valueOf();
            CURRTRIAL.xhold = []
            CURRTRIAL.yhold = []
            // console.log('HoldPromise -- INITIATED IN BOX, holddur=0ms')
          }//IF clicked in box
        }//ONLY IF fixation screen && mouse || touch, then have to click to initiate trial
        else{
          if (boxClass >= 0){
            holdstart = Date.now() - ENV.CurrentDate.valueOf();
            CURRTRIAL.xhold = []
            CURRTRIAL.yhold = []
            // console.log('HoldPromise -- INITIATED IN BOX, holddur=0ms')
          }//IF went into box or clicked in box  
        }//ELSE in all other cases, can drag to activate target
      }//IF hadn't moved into box or clicked in box yet
    //==== (END) 1a - INITIATED ================//

    //==== 1b - CLICKED/DRAGGED ================//
      if ( touchevent.type == 'touchstart' || touchevent.type == 'mousedown' ||
          touchevent.type == 'touchmove' || touchevent.type == 'mousemove' ||
          touchevent.type == 'eye') {
        if (boxClass >= 0) {
          if ( holdstart >=0 && (Date.now()- ENV.CurrentDate.valueOf()) - holdstart >= touchduration){
            return_event.type = 'held'
          }//IF held long enough
          else {
            FLAGS.effectorState.timeOfLastGlanceInBox = Date.now() - ENV.CurrentDate.valueOf();
            return_event.type = 'holding'  
          }//ELSE
        }//IF within a bounding box, just wait
        else if ( boxClass<0 ){
          if (performance.now() - tStartGenerator < outsideGracePeriod && holdstart <= 0){
            holdstart = -1;
            return_event.type = 'grace'
          }//IF during start grace period, just wait
          else if (Date.now() - ENV.CurrentDate.valueOf() - FLAGS.effectorState.timeOfLastGlanceInBox <= TASK.BlinkGracePeriod){
            return_event.type = 'blinkgrace'
          }//ELSE IF during eye blink grace period, just wait         
          else {
            return_event.type = 'broke_outside';
          }//ELSE moved out not during grace
        }//ELSE IF outside box
      }//IF move
    //==== (END) 1b - CLICKED/DRAGGED ================//

    //==== 1c - RELEASED ================//
      if (touchevent.type == 'touchend' || touchevent.type == 'mouseup') {
        if (boxClass >= 0){
          if (holdstart >= 0 && (Date.now()- ENV.CurrentDate.valueOf()) - holdstart >= touchduration){
            return_event.type = 'held'
          }//IF held long enough
          else if (holdstart <= 0 && performance.now() - tStartGenerator < outsideGracePeriod){
            //weird case: mouseup before initiated but most recently in box --> do nothing
            return_event.type = 'weird_grace'
          }
          else {
            return_event.type = 'broke_early'
          }//ELSE released early
        }//IF ended within box, state--> 'held'
        else if (boxClass < 0){
          if ( performance.now() - tStartGenerator < outsideGracePeriod && holdstart<=0){
            holdstart = -1;
            return_event.type = 'grace'
          }//IF during start grace period, just wait
          else {
            return_event.type = 'broke_outside';
          }//ELSE released outside of box not during grace  
        }//ELSE IF outside box
      }//IF touchend, mouseup
    //==== (END) 1c - RELEASED ================//

    //==== 2a - STORE VALS ==================//
      let holdduration = 0
      if (holdstart > 0){
        holdduration = (Date.now()- ENV.CurrentDate.valueOf()) - holdstart

        if (boxClass >= 0){
          CURRTRIAL.xhold.push(x)
          CURRTRIAL.yhold.push(y)
        }//IF in box, also accumulate vals for current position  
      }//IF started hold

      let md_xy = [null,null]
      if (CURRTRIAL.xhold.length >0){
        md_xy = [math.median(CURRTRIAL.xhold), math.median(CURRTRIAL.yhold)]
      }

      FLAGS.effectorState = {
        x: x, y: y, xmedian: md_xy[0], ymedian: md_xy[1],
        chosenbox: boxID, choice: boxClass,
        holdduration: holdduration, holdstart: holdstart,
        touchevent: touchevent.type, state: return_event.type,
        timestamp: Date.now() - ENV.CurrentDate.valueOf(),
      }//FLAGS.effectorState
    //==== (END) 2a - STORE VALS ==================//

    //==== 2b - LOG STATE, PLOT COORDS ==================//
    if (!isNaN(x) && !isNaN(y)) {
      if (touchevent.type != 'eye') {
        logEVENTS('TouchData', [x, y, boxClass],'timeseries');
      }//IF !eye event
    }//IF x,y

    let holdGeneratorStatus = 
          touchevent.type + ' ' + return_event.type + '__' +
          'choice: ' + boxID + ',' + boxClass + '__' +
          '(' + Math.round(x) + ',' + Math.round(y) + ', ' + holdduration + 'ms)' 
      // console.log(holdGeneratorStatus)        

      if (broadcast_over_rtdb){
        broadcastBoundingBoxes(FLAGS.bbDisplay, 0)
        broadcastBoundingBoxes(FLAGS.bbTarget, 1)  
      }//IF not called along with displayTrial, then go ahead and broadcast from here

      //PLOT ON PRACTICE SCREEN (depends on GLOBAL var xyplot)
      if (FLAGS.savedata == 0) {
        //old dots in blue
        if (typeof xyplot != 'undefined') {
          renderDotOnCanvas('blue', xyplot, 2, EYETRACKERCANVAS);
        }
        xyplot = [x - CANVAS.offsetleft, y - CANVAS.offsettop];

        //if x coordinate out-of-bounds, draw on border
        if (xyplot[0] < 0) { xyplot[0] = 0 + 1; }
        else if (xyplot[0] > EYETRACKERCANVAS.clientWidth) { xyplot[0] = EYETRACKERCANVAS.clientWidth - 1; }

        //if y coordinate out-of-bounds, draw on border
        if (xyplot[1] < 0) { xyplot[1] = 0 + 1; }
        else if (xyplot[1] > EYETRACKERCANVAS.clientHeight) { xyplot[1] = EYETRACKERCANVAS.clientHeight - 1; }

        //new dot in red if in box, otherwise yellow
        if (boxClass != -1) { renderDotOnCanvas('red', xyplot, 2, EYETRACKERCANVAS); }
        else { renderDotOnCanvas('yellow', xyplot, 2, EYETRACKERCANVAS); }
      }//IF practice mode, overlay dots      
    //==== (END) 2b - LOG STATE, PLOT COORDS ==================//

      if (return_event.type.includes('held') || return_event.type.includes('broke')){
        break
      }//IF held or broke, break out of loop
    }//WHILE events
    return_event.cxyt = [ FLAGS.effectorState.choice,
      FLAGS.effectorState.xmedian, FLAGS.effectorState.ymedian,
      FLAGS.effectorState.timestamp
    ];
    console.log('HoldPromise -- RESOLVE HOLD_SIMPLE --> ' + return_event.type + '__' + return_event.cxyt)
    resolveFunc(return_event);
  }//Generator
  FLAGS.effectorState.holdstart = -1
  CURRTRIAL.xhold = [];
  CURRTRIAL.yhold = [];

  waitforEvent = waitforeventGenerator(); // start async function
  let tStartGenerator = performance.now()
  FLAGS.touchGeneratorCreated = 1;
  console.log('HoldPromise --  STARTING GENERATOR HOLD_SIMPLE')
    
  waitforEvent.next(); //move out of default state
  return {p, cancel};
}//FUNCTION hold_promise(touchduration,outsideGracePeriod)

//================== MOUSE & TOUCH EVENTS ==================//
function touchstart_listener(event) {
  event.preventDefault(); //prevents additional downstream call of click listener
  if (typeof event === 'undefined') {
    // console.log('no click, loading images, initializing responsepromise');
    return;
  }
  if (!FLAGS.touchGeneratorCreated) {
    //wait for touch generator promise to be created before registering new touches
    // console.log("IGNORING TOUCH EVENT: no active touch generators")
  } //if no click generator created
  else {
    waitforEvent.next(event);
  }
} //touchstart_listener

function touchmove_listener(event) {
  if (!FLAGS.touchGeneratorCreated) {
    //wait for touch generator promise to be created before registering new touches
    // console.log("IGNORING TOUCH EVENT: no active touch generators")
  } //if no click generator created
  else {
    waitforEvent.next(event);
  } //ELSE touchGenerator
} //touchmove_listener

function touchend_listener(event) {
  if (!FLAGS.touchGeneratorCreated) {
    //wait for touch generator promise to be created before registering new touches
    // console.log("IGNORING TOUCH EVENT: no active touch generators")
  } //if no click generator created
  else {
    waitforEvent.next(event);
  }
} //touchend_listener

async function donePracticingTask_listener(event) {
  event.preventDefault();
  console.log('START SAVING DATA');
  FLAGS.savedata = 1;
  FLAGS.purge = 1;
  purgeTrackingVariables('donePractice');
  FLAGS.purge = 0;

  if (port.connected && FLAGS.savedata) {
    if (FLAGS.filecodeSent <= 0){
      await index_send_filecode(CURRTRIAL.starttime)
    }//IF first trial, send filecode pulse on sample command line
  }//IF

  document.querySelector('p[id=imageloadingtext]').style.display = 'none'; //if do style.visibility=hidden, element will still occupy space
  document.querySelector('button[id=donePracticingTask]').style.display = 'none';
  document.querySelector('button[id=stressTest]').style.display = 'none';
  document.querySelector('button[id=gridPoints]').style.display = 'none';
  EYETRACKERCANVAS.style.display = 'none';
  return;
}

function stressTest_listener(event) {
  event.preventDefault();
  console.log('User is done practicing. Performing STRESS TEST');
  FLAGS.savedata = 1;
  FLAGS.createnewfirestore = 1;
  FLAGS.purge = 1;
  purgeTrackingVariables();
  FLAGS.purge = 0;

  if (ENV.StressTest == 0) {
    ENV.StressTest = 1;
  } else if (ENV.StressTest == 1) {
    ENV.StressTest = 0;
  }

  document.querySelector('p[id=imageloadingtext]').style.display = 'none'; //if do style.visibility=hidden, element will still occupy space
  document.querySelector('button[id=donePracticingTask]').style.display = 'none';
  document.querySelector('button[id=gridPoints').style.display = 'none';
  return;
}

function gridPoints_listener(event) {
  event.preventDefault();
  console.log('Show Grid Points as underlay. This might delay rendering.');

  if (FLAGS.underlayGridPoints == 0) {
    FLAGS.underlayGridPoints = 1;
    event.currentTarget.innerHTML = '<font color = red>G</font>';
    document.querySelector('p[id=imageloadingtext]').style.display = 'block';
    document.querySelector('p[id=imageloadingtext]').style.visibility = 'visible';
    document.querySelector('button[id=stressTest]').style.display = 'block';
    document.querySelector('button[id=stressTest]').style.visibility = 'visible';
  } else if (FLAGS.underlayGridPoints == 1) {
    FLAGS.underlayGridPoints = 0;
    event.currentTarget.innerHTML = '<font color = black>G</font>';
    document.querySelector('p[id=imageloadingtext]').style.display = 'none'; //if do style.visibility=hidden, element will still occupy space
    document.querySelector('button[id=stressTest]').style.display = 'none';
  }
  return;
}

function subjectlist_listener(event) {
  ENV.Subject = subjectlist[this.value];
  waitforClick.next(1);
  return;
}

//================== SUBJECT PROMISE ==================//
// Promise: Select Subject
function subjectIDPromise() {
  var resolveFunc;
  var errFunc;
  p = new Promise(function (resolve, reject) {
    resolveFunc = resolve;
    errFunc = reject;
    if (ENV.MTurkWorkerId) {
      resolveFunc(ENV.MTurkWorkerId);
    }
  }).then(function (resolveval) {
    console.log('User selected agent ' + resolveval);
  });

  function* waitforclickGenerator() {
    var imclicked = [-1];
    while (true) {
      imclicked = yield imclicked;
      resolveFunc(imclicked);
    }
  }

  waitforClick = waitforclickGenerator(); // start async function
  waitforClick.next(); //move out of default state
  return p;
}

//================== RFID PROMISE ==================//
// // Promise: Check for correct agent RFID
function rfid_promise(agentTag, recencyInMS) {
  var resolveFunc;
  var errFunc;
  p = new Promise(function (resolve, reject) {
    resolveFunc = resolve;
    errFunc = reject;
  }).then(function (resolveval) {
    FLAGS.RFIDGeneratorCreated = 0;
    if (CANVAS.headsupfraction > 0) {
      //button on headsupdisplay to preempt RFID tag check
      document.querySelector('button[id=preemptRFID]').style.display = 'none';
    }
    updateHeadsUpDisplay();
    return resolveval;
  });
  function* waitforRFIDEventGenerator() {
    var rfidevent;
    var return_event = '';
    while (true) {
      rfidevent = yield rfidevent;

      if (
        typeof agentTag == 'undefined' ||
        (rfidevent.tag == agentTag &&
          Date.now() - new Date(rfidevent.time) <= recencyInMS)
      ) {
        return_event = 'done';
        break;
      } else {
        //keep processing rfid until register agent's RFID
      }
    } //while events
    // console.log('RETURN_EVENT', return_event.type)
    resolveFunc(return_event);
  } //generator
  waitforRFIDEvent = waitforRFIDEventGenerator(); // start async function
  FLAGS.RFIDGeneratorCreated = 1;
  if (CANVAS.headsupfraction > 0) {
    //button on headsupdisplay to preempt RFID tag check
    document.querySelector('button[id=preemptRFID]').style.display = 'block';
    document.querySelector('button[id=preemptRFID]').style.visibility =
      'visible';
  }
  updateHeadsUpDisplay();
  waitforRFIDEvent.next(); //move out of default state
  return p;
}

async function moviestart_promise() {
  var resolveFunc;
  var errFunc;
  p = new Promise(function (resolve, reject) {
    resolveFunc = resolve;
    errFunc = reject;
  }).then(function (resolveval) {
    return resolveval;
  });
  function* waitforMovieGenerator() {
    var movieevent;
    while (FLAGS.movieplaying == 0) {
      movieevent = yield movieevent;
      if (FLAGS.movieplaying == 1) {
        break;
      }
    } //while movieplaying
    resolveFunc(
      'movie started, 1st frame pre-rendered & bounding boxes determined'
    );
  } //generator
  waitforMovieStart = waitforMovieGenerator(); // start async function
  waitforMovieStart.next(); //move out of default state
  return p;
} //FUNCTION moviestart_promise

async function moviefinish_promise() {
  var resolveFunc;
  var errFunc;
  p = new Promise(function (resolve, reject) {
    resolveFunc = resolve;
    errFunc = reject;
  }).then(function (resolveval) {
    return resolveval;
  });
  function* waitforMovieGenerator() {
    var movieevent;
    while (FLAGS.movieplaying == 1) {
      movieevent = yield movieevent;
      if (FLAGS.movieplaying == 0) {
        break;
      }
    } //while movieplaying
    resolveFunc('movie done');
  } //generator
  waitforMovieFinish = waitforMovieGenerator(); // start async function
  waitforMovieFinish.next(); //move out of default state
  return p;
} //FUNCTION moviefinish_promise

function preemptRFID_listener(event) {
  event.preventDefault();
  document.querySelector('button[id=preemptRFID]').style.display = 'none';
  waitforRFIDEvent.next({ tag: ENV.AgentRFID, time: Date.now() });
  return;
}

function quickLoad_listener(event) {
  event.preventDefault();
  QuickLoad.load = 1;
  ENV.Subject = QuickLoad.agent;
  waitforClick.next(1);

  if (ENV.WebUSBAvailable) {
    if (QuickLoad.connectusb == 1 && port.connected == false) {
      findUSBDevice(event);
    } //automatically call USB device finder
    else if (QuickLoad.connectusb == 0) {
      skipHardwareDevice(event);
    }
  } else {
    //do nothing
  }
}