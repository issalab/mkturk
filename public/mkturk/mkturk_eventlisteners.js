//================== TOUCH PROMISE ==================//
// TouchHold either by clicking in or dragging in
function hold_promise(touchduration, outsideGracePeriod) {
  var resolveFunc;
  var errFunc;
  p = new Promise(function (resolve, reject) {
    resolveFunc = resolve;
    errFunc = reject;
  }).then(function (resolveval) {
    FLAGS.touchGeneratorCreated = 0;
    return resolveval;
  });
  function* waitforeventGenerator() {
    var touchevent;
    var return_event = { type: '', cxyt: [] };
    while (true) {
      touchevent = yield touchevent;
      console.log(FLAGS.effectorState)

      let boundingBoxes = FLAGS.bbTarget //fetch latest target bounding box
      if (ENV.Eye.TrackEye > 0) {
        //Ignore touches if tracking eye, this could be removed if we want to use touches as surrogates when available
        if ( touchevent.type.indexOf('touch') > 0 || touchevent.type.indexOf('mouse') > 0) {
          continue;
        }
        touchevent.type = ENV.Eye.EventType;
      }//IF TrackEye

      // THE END of touch or fixation, either held or broke
      if (touchevent.type == 'theld' || touchevent.type == 'tbroken') {
        return_event.type = touchevent.type;

        if (ENV.Eye.TrackEye > 0) {
          ENV.Eye.EventType = 'eyestart'; //Reset eye state
        }
        console.log('exit @ line 59 ' + return_event.type)
        break; //EXIT LOOP
      }//IF end of touch or eye fixation
      else {
        // keep processing touchstart, touchmove, touchend events
      }//ELSE

      //================== 1-GET XYT & CHOSEN BOX ==================//
      //RECOVER X,Y coordinates from eye, touch, or click
      if ( touchevent.type == 'touchstart' || touchevent.type == 'touchmove' ||
            touchevent.type == 'eyestart' || touchevent.type == 'eyemove' ) {
        if (ENV.Eye.TrackEye > 0) {
          var x = touchevent.x_val;
          var y = touchevent.y_val;
        }//IF TrackEye
        else {
          var x = touchevent.targetTouches[0].pageX;
          var y = touchevent.targetTouches[0].pageY;
        }//ELSE touch
      }//IF touchstart/move, eyestart/move
      else if ( touchevent.type == 'mousedown' || touchevent.type == 'mousemove') {
        var x = touchevent.clientX;
        var y = touchevent.clientY;
      }//IF mousedown/move
      var touchcxyt = [-1, x, y, Date.now() - ENV.CurrentDate.valueOf()];

      //CHECK if in box
      if ( FLAGS.waitingforTouches > 0 && !(touchevent.type=='touchend' || touchevent.type=='mouseup') ) {
        var chosenbox = -1;
        var choice = -1

        //RECOVER BOX, if any
        for (var q = 0; q <= boundingBoxes.x.length - 1; q++) {
          if ( x >= boundingBoxes.x[q][0] && x <= boundingBoxes.x[q][1] &&
                y >= boundingBoxes.y[q][0] && y <= boundingBoxes.y[q][1]) {
            chosenbox = q
            choice = boundingBoxes.class[q];
          }//IF in bounding box
        }//FOR q boxes
        touchcxyt[0] = choice;

        // let touchDataObj = {
        //   x: x, y: y,
        //   boundingBoxes: boundingBoxes,
        //   meta: chosenbox >= 0 ? 1 : 0,
        //   timestamp: new Date().toJSON(),
        // };

        FLAGS.effectorState = {x: x, y: y, touchevent: touchevent.type, state: '', choice: choice, chosenbox: chosenbox, timestamp: new Date().toJSON()}

        if (!isNaN(x) && !isNaN(y)) {
          if (!ENV.Eye.TrackEye) {
            logEVENTS('TouchData', [x, y, choice],'timeseries');
            // let tm_bq_file = new Date(new Date(Date.now()).toJSON()) - ENV.CurrentDate;
            // let tm_bq_trial = tm_bq_file - EVENTS['trialseries']['StartTime'][CURRTRIAL.num]
            // console.log('Trial ' + CURRTRIAL.num + 
            //             ', Start ' + EVENTS['trialseries']['StartTime'][CURRTRIAL.num] +
            //             ', BQ ' + tm_bq_file +
            //             ', BQ-Start ' + tm_bq_trial);
          }//IF !TrackEye
        }//IF touchDataObj

        //Accumulate cxyt in box for greater eyetracker accuracy
        if (choice != -1) {
          CURRTRIAL.cxyt.push(touchcxyt); //also accumulate for current trial
        }//IF in box, accumulate cxyt

        //Plot the point on the screen if hold generator is on & in practice mode
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
          if (choice != -1) { renderDotOnCanvas('red', xyplot, 2, EYETRACKERCANVAS); }
          else { renderDotOnCanvas('yellow', xyplot, 2, EYETRACKERCANVAS); }
        }//IF practice mode, overlay dots
        console.log('choice ' + choice + ' touchevent ' + touchevent.type
                + ' acquired=' + FLAGS.acquiredTouch)
      }//IF waiting for touches, get cxyt data && whether in box
      //================== (END) 1-GET XYT & CHOSEN BOX ==================//

      if (!FLAGS.acquiredTouch){ FLAGS.effectorState.state = '!acquired'}
      else {FLAGS.effectorState.state = 'acquired'}

      //================== 2-INIATE HOLD ==================//
      if ( !FLAGS.acquiredTouch && touchevent.type != 'touchend' && touchevent.type != 'mouseup' &&
          ( (TASK.DragtoRespond == 0 && touchevent.type != 'touchmove' && touchevent.type != 'mousemove') //click in
              || TASK.DragtoRespond == 1 //drag in
      ) ){
          //IF clicked outside box
          if (choice == -1) {
            if ( performance.now() - tStartGenerator > outsideGracePeriod) {
              FLAGS.acquiredTouch = 0;
              clearTimeout(touchTimer);
              return_event.type = 'tbroken';
              FLAGS.effectorState.state = FLAGS.effectorState.state + '_initiate outside-->tbroken'
              break;
            }//IF touched outside fixation, advance to punish
            else {
              touchcxyt[0] = -1; //do nothing during outsideGracePeriod
              FLAGS.effectorState.state = FLAGS.effectorState.state + '_initiate outside-->grace'
            }//ELSE ignore outside touch if choice screen
          }//IF touched outside box
          else if (choice >= 0) {
            FLAGS.acquiredTouch = 1;
            console.log('Acquired touch -- STEP 2')

            //EYE ENTERED BOX
            if (ENV.Eye.TrackEye > 0) {
              ENV.Eye.timeOfLastGlanceInBB = touchcxyt[3];
              ENV.Eye.EventType = 'eyemove'; //in box, so future states are "eyemove" (from "undefined" in usb code)
            }//IF TrackEye
            
            //START TIMER touchduration milliseconds
            if (touchduration > 0) {
              clearTimeout(touchTimer)
              touchTimer = setTimeout(function () {
                FLAGS.waitingforTouches--;
                FLAGS.acquiredTouch = 0;
                FLAGS.touchGeneratorCreated = 0; //block other callbacks
                if (ENV.Eye.TrackEye > 0) { ENV.Eye.EventType = 'theld'; }
                FLAGS.effectorState.state = FLAGS.effectorState.state + '_held inside--> theld!'
                waitforEvent.next({ type: 'theld' });
              }, touchduration);//start touchTimer
            }//IF touchduration, hold required
            else {
              FLAGS.waitingforTouches--;
              FLAGS.acquiredTouch = 0;
              FLAGS.touchGeneratorCreated = 0; //block other callbacks
              return_event.type = 'theld';
              FLAGS.effectorState.state = FLAGS.effectorState.state + '_clicked inside--> theld!'
              break;
            }//ELSE no hold required
          }//IF touched inside box
      }//IF !acquiredTouch
      //================== (END) 2-INIATE HOLD ==================//

      //================== 3-HOLDING ==================//
      if ( FLAGS.acquiredTouch && (touchevent.type == 'touchmove' || touchevent.type == 'mousemove' || touchevent.type == 'eyemove') ) {
        if (choice >= 0) {
          ENV.Eye.timeOfLastGlanceInBB = touchcxyt[3];
          FLAGS.effectorState.state = FLAGS.effectorState.state + '_remain inside--> holding'
        }//IF moving within a touch bounding box, just wait
        else if ( ( ENV.Eye.TrackEye > 0 || TASK.DragtoRespond>0) &&
          Date.now() - ENV.CurrentDate.valueOf() - ENV.Eye.timeOfLastGlanceInBB <= TASK.BlinkGracePeriod
        ){
          console.log('outside but blink');
          FLAGS.effectorState.state = FLAGS.effectorState.state + '_remain outside--> blinkgrace'
        }//ELSE IF during eye blink grace period, just wait
        else if ( performance.now() - tStartGenerator < outsideGracePeriod){
          console.log('outside but still within grace period')
          FLAGS.effectorState.state = FLAGS.effectorState.state + '_remain outside--> grace'
        }
        else if ( choice == -1 &&
                (ENV.Eye.TrackEye == 0 && TASK.DragtoRespond == 0) || //click
                  ( (ENV.Eye.TrackEye>0 || TASK.DragtoRespond>0) //drag
                    && Date.now() - ENV.CurrentDate.valueOf() - ENV.Eye.timeOfLastGlanceInBB > TASK.BlinkGracePeriod ) //blink expired
                )
          {
              FLAGS.acquiredTouch = 0;
              clearTimeout(touchTimer);
              if (ENV.Eye.TrackEye > 0) { ENV.Eye.EventType = 'eyestart'; }
              return_event.type = 'tbroken';
              FLAGS.effectorState.state = FLAGS.effectorState.state + '_remained outside--> tbroken!'
              break;
        }//ELSE IF
      }//IF touch/eyemove
      //================== (END) 3-HOLDING ==================//

      //================== 4-END HOLD prematurely ==================//
      if (FLAGS.acquiredTouch && (touchevent.type == 'touchend' || touchevent.type == 'mouseup') ) {
        if ( performance.now() - tStartGenerator < outsideGracePeriod){
          console.log('released but still within outside grace period')
          FLAGS.effectorState.state = FLAGS.effectorState.state + '_mouseup--> grace'
        }
        else{
          FLAGS.acquiredTouch = 0;
          clearTimeout(touchTimer);
          return_event.type = 'tbroken';
          console.log('exit @ line 228 ' + return_event.type)
          FLAGS.effectorState.state = FLAGS.effectorState.state + '_mouseup--> tbroken!'
          break;  
        }
      }//IF ended touch early
      //================== (END) 4-END HOLD prematurely ==================//
    }//WHILE events
    
    //Median x,y = final position estimate
    var xs = [];
    var ys = [];
    if (CURRTRIAL.cxyt.length > 0) {
      for (var q = 0; q <= CURRTRIAL.cxyt.length - 1; q++) {
        xs.push(CURRTRIAL.cxyt[q][1]);
        ys.push(CURRTRIAL.cxyt[q][2]);
      } //FOR q samples
      touchcxyt[1] = math.median(xs);
      touchcxyt[2] = math.median(ys);
    }//IF xy data
    else { console.log('NO EFFECTOR POINTS ' + CURRTRIAL.cxyt); }//ELSE no xy samples
    return_event.cxyt = touchcxyt;
    console.log('line 240: calling resolveFunc' + return_event)
    resolveFunc(return_event);
  }//Generator
  waitforEvent = waitforeventGenerator(); // start async function
  FLAGS.touchGeneratorCreated = 1;
  CURRTRIAL.cxyt = [];
  var tStartGenerator = performance.now()
  waitforEvent.next(); //move out of default state
  return p;
}//FUNCTION hold_promise(touchduration,boundingBoxes,punishOutsideTouch)

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

function headsuptext_listener(event) {
  FLAGS.need2saveParameters = 1;
  return;
}
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
    document.querySelector('p[id=imageloadingtext]').style.visibility =
      'visible';
    document.querySelector('button[id=stressTest]').style.display = 'block';
    document.querySelector('button[id=stressTest]').style.visibility =
      'visible';
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
    if (QuickLoad.connectusb == 1 && port.connect == false) {
      findUSBDevice(event);
    } //automatically call USB device finder
    else if (QuickLoad.connectusb == 0) {
      skipHardwareDevice(event);
    }
  } else {
    //do nothing
  }
}
