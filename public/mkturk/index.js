index_init();
(async function () {
  await index_init_awaits();
  await index_init_params_screen_automator();

  //Start in Practice mode
  FLAGS.need2loadParameters = 1;
  FLAGS.need2loadScenes = 1;
  CURRTRIAL.num = 0;
  EVENTS.trialnum = 0;
  FLAGS.savedata = 0; // practice trials can be performed, but data won't be saved

  // IF MTurkWorker, start immediately in Test mode
  if (ENV.MTurkWorkerId) {
    document.querySelector('button[id=donePracticingTask]').dispatchEvent(new Event('pointerup'));
  }//IF Amazon MTurk

  // =========================================================================================================== //
  // ============ MAIN TASK LOOP ==================================================================================== //
  // =========================================================================================================== //
  while (true) {
    if (FLAGS.need2loadParameters == 1) {
      await index_reloadparameters();
    }//IF reload TASK parameters
    if (FLAGS.purge == 1) {
      purgeTrackingVariables();
      FLAGS.purge = 0;
    }//IF purge trial tracking variables

    //Real-time Broadcast of {filename, trial#, performance} for Agent
    var frac_correct=0;
    if (EVENTS['trialseries']['Response'].length>0){
      var ncorrect = 0;
      EVENTS['trialseries']['Response'].forEach( (element, index) => { if (element==EVENTS['trialseries']['CorrectItem'][index]){ncorrect++} })
      frac_correct = ncorrect/EVENTS['trialseries']['Response'].length
    }
    rtdb.ref('instances/' + ENV.Subject).set( { 'trialnum': CURRTRIAL.num, 'filename': ENV.DataFileName, 'performance': frac_correct } );

    if (typeof TASK.BackgroundColor2D == 'undefined') { TASK.BackgroundColor2D = '#7F7F7F';}
    document.body.style.background = TASK.BackgroundColor2D;
    if (typeof TASK.THREEJSRenderRatio == 'undefined' || TASK.THREEJSRenderRatio < 0) { TASK.THREEJSRenderRatio = 2; }
    if (typeof TASK.THREEJScameraZDist == 'undefined') { TASK.THREEJScameraZDist = 10; }
    if (typeof TASK.THREEJScameraFOV == 'undefined') { TASK.THREEJScameraFOV = 45; }
    if (FLAGS.need2loadScenes) {
      await index_loadScenes(); //3D Scene Set-up
    }//IF need2LoadScenes

    //Resume eyetracker
    if (CURRTRIAL.num <= 0 && port.connected){ port.writepumptopauseeyetoUSB('~'); }

    //============ SELECT SAMPLE & TEST IMAGES ============//
    if (typeof TASK.NRSVP != 'undefined' && TASK.NRSVP > 0) {
      ENV.NRSVPMax = TASK.NRSVP;
      ENV.NRSVPMin = TASK.NRSVP;
      if (typeof TASK.NRSVPMax != 'undefined' && TASK.NRSVPMax > TASK.NRSVP) {
        ENV.NRSVPMax = TASK.NRSVPMax;
      }//IF NRSVPMax
    }//IF NRSVP

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

      // Test can have multiple simultaneous scenes (items are over space; eg, MtS)
      if (i == 0) {
        // IF first image
        CURRTRIAL.images.testimages[i] = x[2];
        CURRTRIAL.testindices[i] = x[3];
        CURRTRIAL.test_scenebag_labels[i] = x[7];
        CURRTRIAL.test_scenebag_indices[i] = x[8];
        CURRTRIAL.correctitem = x[4];
        CURRTRIAL.samplereward = x[9];
      }
    }//FOR imgSeqLen

    logEVENTS('Sample', CURRTRIAL.sampleindex_nonarray, 'trialseries');
    logEVENTS('Test', CURRTRIAL.testindices[0], 'trialseries');
    //============(END) SELECT SAMPLE & TEST IMAGES ============//

    //============ SET UP SAMPLE & TEST SEQUENCE ============//
    // when & where to display
    CURRTRIAL.tsequencedesired = [];
    CURRTRIAL.sequencegridindex = [];

    // what to display
    CURRTRIAL.sequenceclip = []; //movieclip# in RSVP
    CURRTRIAL.sequenceframe = []; //frame# in movie
    CURRTRIAL.sequencetaskscreen = [];
    CURRTRIAL.sequencelabel = []; //image class
    CURRTRIAL.sequenceindex = []; //image index

    //EXPAND SAMPLE (for rsvp & movies)
    for (let i = 0; i < CURRTRIAL.sample_scenebag_index.length; i++) {
      let [movie_sequence, movie_tsequence, movie_framenum] = index_expandframes('Sample',i)
 
      CURRTRIAL.tsequencedesired.push(...movie_tsequence);
      CURRTRIAL.sequencegridindex.push(...Array(movie_tsequence.length).fill([TASK.SampleGridIndex]));
      CURRTRIAL.sequenceclip.push(...Array(movie_tsequence.length).fill(i));
      CURRTRIAL.sequenceframe.push(...movie_framenum);
      CURRTRIAL.sequencetaskscreen.push(...movie_sequence);
      CURRTRIAL.sequencelabel.push(...Array(movie_tsequence.length).fill(CURRTRIAL.sample_scenebag_label[i]));
      CURRTRIAL.sequenceindex.push(...Array(movie_tsequence.length).fill(CURRTRIAL.sample_scenebag_index[i]));
    } // FOR i RSVP Sample

    // APPEND TEST
    if (TASK.NRSVP <= 0) {
      let [movie_sequence, movie_tsequence, movie_framenum] = index_expandframes('Test')

      CURRTRIAL.tsequencedesired.push(...movie_tsequence);
      CURRTRIAL.sequencegridindex.push(...Array(movie_tsequence.length).fill(TASK.TestGridIndex));
      CURRTRIAL.sequenceclip.push(...Array(movie_tsequence.length).fill(0));
      CURRTRIAL.sequenceframe.push(...movie_framenum);
      CURRTRIAL.sequencetaskscreen.push(...movie_sequence);
      CURRTRIAL.sequencelabel.push(...Array(movie_tsequence.length).fill(CURRTRIAL.test_scenebag_labels[0]));
      CURRTRIAL.sequenceindex.push(...Array(movie_tsequence.length).fill(CURRTRIAL.test_scenebag_indices[0]));
    }//IF !NRSVP, append test

    //APPEND CHOICE
    if (TASK.NRSVP <= 0 && TASK.SameDifferent > 0){
      let [movie_sequence, movie_tsequence, movie_framenum] = index_expandframes('Choice')

      CURRTRIAL.tsequencedesired.push(...movie_tsequence);
      CURRTRIAL.sequencegridindex.push(...Array(movie_tsequence.length).fill(TASK.ChoiceGridIndex));
      CURRTRIAL.sequenceclip.push(...Array(movie_tsequence.length).fill(0));
      CURRTRIAL.sequenceframe.push(...Array(movie_tsequence.length).fill(0));
      CURRTRIAL.sequencetaskscreen.push(...movie_sequence);
      CURRTRIAL.sequencelabel.push(...Array(movie_tsequence.length).fill([0]));
      CURRTRIAL.sequenceindex.push(...Array(movie_tsequence.length).fill([0]));
    }//IF Same-Different
    //============(END) SET UP SAMPLE & TEST SEQUENCE ============//

    if (TASK.CheckRFID > 0 && ENV.AgentRFID != 'XX' && FLAGS.savedata == 1){
      index_checkrfid();
    }//IF CheckRFID

    // FIXATION   FIXATION   FIXATION   FIXATION   FIXATION   FIXATION   //
    // FIXATION   FIXATION   FIXATION   FIXATION   FIXATION   FIXATION   //
    // FIXATION   FIXATION   FIXATION   FIXATION   FIXATION   FIXATION   //
    //============ WHILE RUN FIXATION SCREEN ============//
    FLAGS.waitingforTouches = TASK.NFixations;
    if (TASK.RewardStage == 0) { FLAGS.punishOutsideTouch = 1; }

    while (FLAGS.waitingforTouches > 0) {
      //Fixation grid index
      if (TASK.FixationGridIndex >= 0) {
        CURRTRIAL.fixationgridindex = TASK.FixationGridIndex;
      }//IF user-specified fixation position
      else if (TASK.FixationGridIndex < 0) {
        CURRTRIAL.fixationgridindex = Math.floor(
          Math.random() * ENV.XGridCenter.length
        );
      }//ELSE randomly choose fixation position
      logEVENTS('FixationGridIndex',CURRTRIAL.fixationgridindex,'trialseries');

      if (TASK.FixationUsesSample <= 0) {
        // IF !FixationUsesSample, show fixation dot
        if (TASK.Species == 'macaque' || TASK.Species == 'human') { ENV.FixationColor = 'white'; }
        else if (TASK.Species == 'marmoset' || TASK.Species == 'model') { ENV.FixationColor = 'blue';}
        frame.reset(CANVAS.sequencepre)
      }//IF fixation dot
      else if (TASK.FixationUsesSample > 0) {
        // IF Sample, show first image/movie
        // Update grid location of sample to current fixation grid index
        frame.shown = [];
        frame.frames = [];
        frame.current = 0;

        for (let i = 0; i < CURRTRIAL.sequencegridindex.length; i++) {
          for (let j = 0; j < CURRTRIAL.sequencegridindex[i].length; j++) {
            if (CURRTRIAL.sequencetaskscreen[i] == 'Sample') {
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
      }//ELSEIF FixationUsesSample

      // Start timer for this fixation render trial
      CURRTRIAL.starttime = Date.now() - ENV.CurrentDate.valueOf();
      logEVENTS('StartTime', CURRTRIAL.starttime, 'trialseries');
      if (port.connected && FLAGS.savedata) {
        await index_send_trialcode();
      }//IF USB, send trial# on trial line

      //========= AWAIT SHOW FIXATION =========//
      if (TASK.Species == 'marmoset' || TASK.Species == 'model') {
        playSound(0);
      }

      if (TASK.FixationUsesSample <= 0) {
        await displayTrial(CANVAS.tsequencepre,[CURRTRIAL.fixationgridindex],[0],[0],CANVAS.sequencepre,[0],[0],[],mkm);
      }//IF !FixationUsesSample, show fixation dot
      else if (TASK.FixationUsesSample > 0) {
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
      }//ELSEIF FixationUsesSample, show movie

      audiocontext.suspend();

      //========= AWAIT HOLD FIXATION TOUCH =========//
      if (ENV.FixationWindowRadius > 0) {
        // TODO: contain the scope of funcreturn to each file.
        funcreturn = getFixationWindowBoundingBox(CURRTRIAL.fixationgridindex,ENV.FixationWindowRadius);
        boundingBoxesFixation.x[0] = funcreturn[0];
        boundingBoxesFixation.y[0] = funcreturn[1];
      }//IF FixationWindowRadius, then override object size
      else if (TASK.FixationUsesSample > 0 && ENV.FixationWindowRadius <= 0) {
        // alt. fixation window
        boundingBoxesFixation = boundingBoxesChoice3D;
      }//ELSE fixation window is object size

      let touchhold_return;
      if (ENV.StressTest == 1) {
        touchhold_return = { type: 'theld' };
        let x = boundingBoxesFixation.x[0][0] +
                Math.round( Math.random() * (boundingBoxesFixation.x[0][1] - boundingBoxesFixation.x[0][0]) );
        let y = boundingBoxesFixation.y[0][0] +
                Math.round( Math.random() * (boundingBoxesFixation.y[0][1] - boundingBoxesFixation.y[0][0]) );

        touchhold_return.cxyt = [ 0, x, y, Date.now() - ENV.CurrentDate.valueOf() ];
        FLAGS.waitingforTouches--;
      }//IF StressTest, automate fixation
      else {
        FLAGS.acquiredTouch = 0;
        let p1 = hold_promise( TASK.FixationDuration, boundingBoxesFixation, FLAGS.punishOutsideTouch );
        let p2 = choiceTimeOut(TASK.FixationTimeOut);
        touchhold_return = await Promise.race([p1, p2]);
      }//ELSE await fixation hold

      if (FLAGS.movieplaying == 1) {
        frame.current = frame.shown.length - 1;
        frame.shown[frame.current] = 1;
        await moviefinish_promise();
      }//IF movie still playing after acquire fixation, stop movie

      try {
        CURRTRIAL.fixationtouchevent = touchhold_return.type;
        CURRTRIAL.fixationxyt = [ touchhold_return.cxyt[1], touchhold_return.cxyt[2], touchhold_return.cxyt[3] ];
      } catch (e) {
        console.error('touchhold_return did not return properly:', e);
        CURRTRIAL.fixationtouchevent = 'tbroken';
        CURRTRIAL.fixationxyt = [-1, -1, -1];
      }

      logEVENTS('FixationTouchEvent',CURRTRIAL.fixationtouchevent,'trialseries');
      logEVENTS('FixationXYT', CURRTRIAL.fixationxyt, 'trialseries');

      //IF held fixaton & fixation task, count as correct
      if (TASK.RewardStage == 0 && CURRTRIAL.fixationtouchevent == 'theld' && FLAGS.waitingforTouches == 0){
          CURRTRIAL.response = 1;
          CURRTRIAL.correctitem = 1;
          logEVENTS('Response', CURRTRIAL.response, 'trialseries');
      }//IF held && RewardStage==0, then reward
      else if ( TASK.RewardStage == 0 && CURRTRIAL.fixationtouchevent == 'tbroken'){
        CURRTRIAL.response = 0;
        CURRTRIAL.correctitem = 1;
        FLAGS.waitingforTouches = 0; //exit loop
        logEVENTS('Response', CURRTRIAL.response, 'trialseries');
      }//ELSE IF broke && RewardStage==0, then punish

      //Clear Fixation
      frame.reset(CANVAS.sequenceblank)
      if (FLAGS.waitingforTouches > 0) {
        await displayTrial(CANVAS.tsequenceblank,[-1],[0],[0],CANVAS.sequenceblank,[0],[0],[],mkm);
      }//IF waiting for more touches
    } //WHILE waiting for NFixations
    //============ (end) WHILE RUN FIXATION SCREEN ============//

    //SAMPLE TEST    SAMPLE TEST    SAMPLE TEST    SAMPLE TEST    SAMPLE TEST    //
    //SAMPLE TEST    SAMPLE TEST    SAMPLE TEST    SAMPLE TEST    SAMPLE TEST    //
    //SAMPLE TEST    SAMPLE TEST    SAMPLE TEST    SAMPLE TEST    SAMPLE TEST    //
    //============== AWAIT SHOW SAMPLE THEN TEST ==============//
    if (TASK.RewardStage === 1) {
      // Set where to display
      if (TASK.SampleGridIndex >= 0) {
        CURRTRIAL.samplegridindex = TASK.SampleGridIndex;
      }//IF user-specified sample position
      else if (TASK.SampleGridIndex < 0) {
        if (TASK.FixationGridIndex < 0) {
          CURRTRIAL.samplegridindex = CURRTRIAL.fixationgridindex;
        }//tie position of sample to randomized fixation position
        else {
          CURRTRIAL.samplegridindex = Math.floor( ENV.XGridCenter.length * Math.random() );
        }//randomize position of sample
      }//ELSEIF !user-specified

      // Update grid location of each Sample frame
      for (let i = 0; i < CURRTRIAL.sequencegridindex.length; i++) {
        for (let j = 0; j < CURRTRIAL.sequencegridindex[i].length; j++) {
          if (CURRTRIAL.sequencetaskscreen[i] == 'Sample') {
            CURRTRIAL.sequencegridindex[i][j] = CURRTRIAL.samplegridindex;
          }//IF Sample screen
        }//FOR j gridindex
      }//FOR i gridindex
      logEVENTS('SampleGridIndex', CURRTRIAL.samplegridindex, 'trialseries');

      frame.reset(CURRTRIAL.sequencetaskscreen)

      // KeepSampleON
      if (TASK.KeepSampleON == 1) {
        let idx = CURRTRIAL.sequencetaskscreen.indexOf('SampleBlank');
        while (idx != -1) {
          CURRTRIAL.sequencetaskscreen[idx] = 'Sample';
          idx = CURRTRIAL.sequencetaskscreen.indexOf('SampleBlank', idx + 1);
        }//WHILE --> Remove Blank after Sample

        let idxArr = [];
        idx = CURRTRIAL.sequencetaskscreen.indexOf('Sample');
        while (idx != -1) {
          idxArr.push(idx);
          idx = CURRTRIAL.sequencetaskscreen.indexOf('Sample', idx + 1);
        }//WHILE --> Add Sample to Test screen

        for (let i = idxArr[idxArr.length - 1] + 1; i < frame.frames.length; i++){
          frame.frames[i].push(idxArr[idxArr.length - 1]);
        }//FOR i remaining frames after Sample, append last sample scene rendered
      }//IF KeepSampleON

      // KeepTestON
      if (TASK.KeepTestON == 1 && TASK.SameDifferent > 0) {
        let idxArr = [];
        let idx = CURRTRIAL.sequencetaskscreen.indexOf('Test');
        while (idx != -1) {
          idxArr.push(idx);
          idx = CURRTRIAL.sequencetaskscreen.indexOf('Test', idx + 1);
        }//WHILE --> Add Test to Choice Screen

        for (let i = idxArr[idxArr.length - 1] + 1; i < frame.frames.length; i++) {
          frame.frames[i].push(idxArr[idxArr.length - 1]);
        }//FOR i remaining frames after Test, append last test scene rendered
      }//IF KeepTestON

      //Display Sample & Test/Choice
      if (TASK.NRSVP > 0 && TASK.FixationWindowSizeInches > 0) {
        // IF RSVP, hold sample fixation
        let fixationWindowBoundingBox = getFixationWindowBoundingBox( CURRTRIAL.samplegridindex, ENV.FixationWindowRadius );
        boundingBoxesSampleFixation.x[0] = fixationWindowBoundingBox[0];
        boundingBoxesSampleFixation.y[0] = fixationWindowBoundingBox[1];
        FLAGS.punishOutsideTouch = 1;
        FLAGS.waitingforTouches = 1;
        FLAGS.acquiredTouch = 1;
        if (ENV.Eye.TrackEye) {
          ENV.Eye.EventType = 'eyemove';
        }

        let p1 = hold_promise(0, boundingBoxesSampleFixation, FLAGS.punishOutsideTouch);
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
        CURRTRIAL.nclipshown = frame.shown.lastIndexOf(1) !== undefined ? CURRTRIAL.sequenceclip[frame.shown.lastIndexOf(1)] : 0;
        if (typeof race_return.type == 'undefined') {
          CURRTRIAL.nclipshown++;
        }//IF held until completion, count all i clips; otw only count i-1

        if (FLAGS.movieplaying == 1) {
          frame.current = frame.shown.length - 1;
          frame.shown[frame.current] = 1;
          await moviefinish_promise();
        }//IF movie still playing after broke fixation, stop Sample movie

        if (ENV.Eye.TrackEye > 0) {
          ENV.Eye.EventType = 'eyestart'; // Reset eye state
        }

        if (typeof race_return.type == 'undefined') {
          CURRTRIAL.samplefixationtouchevent = 'theld';
          CURRTRIAL.samplefixationxyt = [ 0, 0, Date.now() - ENV.CurrentDate.valueOf() ];
        }//IF held fixation during Sample
        else {
          CURRTRIAL.samplefixationtouchevent = race_return.type;
          // Quick Fix for race_return.cxyt[1:4] returning undefined
          for (let i = 1; i < 4; i++) {
            if (typeof race_return.cxyt[i] == 'undefined') {
              race_return.cxyt[i] = -1;
            }
          }//FOR i
          CURRTRIAL.samplefixationxyt = [ race_return.cxyt[1], race_return.cxyt[2], race_return.cxyt[3] ];
        }//ELSE broke fixation during Sample
      }//IF RSVP, fixation hold required
      else {
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
      }//ELSE !RSVP --> display Sample movie, no fixation hold required

      logEVENTS('SampleFixationTouchEvent',CURRTRIAL.samplefixationtouchevent,'trialseries');
      logEVENTS('SampleFixationXYT',CURRTRIAL.samplefixationxyt,'trialseries');

      index_log_displaytimes();
      audiocontext.suspend();

      //CHOICE    CHOICE    CHOICE    CHOICE    CHOICE    CHOICE    CHOICE    //
      //CHOICE    CHOICE    CHOICE    CHOICE    CHOICE    CHOICE    CHOICE    //
      //CHOICE    CHOICE    CHOICE    CHOICE    CHOICE    CHOICE    CHOICE    //
      //========= AWAIT TOUCH CHOICE =========//
      FLAGS.waitingforTouches = 1;

      //XX HideTestDistractors
      if (TASK.HideTestDistractors >= 1) { FLAGS.punishOutsideTouch = 1; }
      else { FLAGS.punishOutsideTouch = 0;}

      let race_return = { type: 'theld' };
      let currchoice;
      if (ENV.StressTest == 1){
        let nchoices = boundingBoxesChoice3D.x.length;
        let distractor_array;
        let x;
        let y;

        if (TASK.Species == 'model') {
          currchoice = 0; x = 0; y = 0;

          if (CURRTRIAL.num == TASK.ModelConfig.trainIdx - 1) {
            EVENTS['trainseries'] = { TrainingAccuracy: [], TrainingLoss: [], MsPerEpoch: [] };

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
              yTrainLabelsObj[`Label ${i}`] = mkm.dataObj.yTrainLabels.filter( (x) => x === i ).length;
            }//FOR i
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
                  const msPerEpoch = (performance.now() - beginMs) / (epoch + 1);
                  const secPerEpoch = msPerEpoch / 1000;
                  console.log( 'Training model ... Approx. ' + `${secPerEpoch.toFixed(4)} sec/epoch`);
                  console.log('logs:', logs);
                  EVENTS['trainseries'].TrainingAccuracy.push(logs.acc);
                  EVENTS['trainseries'].TrainingLoss.push(logs.loss);
                  EVENTS['trainseries'].MsPerEpoch.push(msPerEpoch);
                },
              },
            });
            console.log(EVENTS['trainseries']);
          }//IF training model

          if (CURRTRIAL.num >= TASK.ModelConfig.trainIdx) {
            let yPred = [];
            if (TASK.SameDifferent > 0) {
              mkm.dataObj.xTest.forEach((feature) => {
                let pred = mkm.model.predict( feature.reshape([1, mkm.inputShape[0]]) );
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
                let pred = mkm.model.predict( feature.reshape([1, mkm.inputShape[0]]) );
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
                let path = `${TASK.Agent}/${ENV.CurrentDate.toJSON()}/${CURRTRIAL.num}_incorrect.png`;
                mkmodelsRef.child(path).putString(cvsData, 'data_url');
              }//IF incorrect choice
            }
            else if ( TASK.ModelConfig.saveImages == 2 || TASK.ModelConfig.saveImages == 3 ) {
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
            }//ELSE IF
          }//IF testing model
        }
        else { //ELSE TASK.Species != 'model'
          let hitrate = 0.5;

          if (TASK.Agent == 'Youno') { hitrate = 0.9; }
          else if (TASK.Agent == 'Eliaso') { hitrate = 0.7; }
          else if (TASK.Agent == 'SaveImages') { hitrate = 1.0; }

          if (TASK.NRSVP>0){
            CURRTRIAL.correctitem = 1;
            race_return = { type: 'theld' };
            currchoice = 1;
            x=-1; y=-1;
          }//IF RSVP, skip Choice
          else{
            if (Math.random() < hitrate) {
              currchoice = CURRTRIAL.correctitem;
            }//simulate correct
            else {
              distractor_array = [];
              for (let i = 0; i < nchoices; i++) {
                if (i != CURRTRIAL.correctitem) {
                  distractor_array.push(i);
                }
              }//FOR i choices

              distractor_array = shuffle(distractor_array);
              currchoice = distractor_array[0];
            }//simulate incorrect

            x = boundingBoxesChoice3D.x[currchoice][0] +
                Math.round( Math.random() * (boundingBoxesChoice3D.x[currchoice][1] - boundingBoxesChoice3D.x[currchoice][0]) );

            y = boundingBoxesChoice3D.y[currchoice][0] +
                Math.round( Math.random() * (boundingBoxesChoice3D.y[currchoice][1] - boundingBoxesChoice3D.y[currchoice][0]) );
          }//ELSE !RSVP
        }//ELSE TASK.Species != 'model'

        race_return.cxyt = [ currchoice, x, y, Date.now() - ENV.CurrentDate.valueOf(),];
        FLAGS.waitingforTouches--;
      }//IF STRESSTEST
      else { // ELSE !ENV.StressTest
        if (TASK.NRSVP > 0) {
          CURRTRIAL.correctitem = 1;
          if (TASK.FixationWindowSizeInches <= 0) {
            race_return = { type: 'theld' };
            currchoice = 1;
          }//IF no fixation required
          else {
            race_return = { type: CURRTRIAL.samplefixationtouchevent };
            if ( CURRTRIAL.samplefixationtouchevent == 'theld' || CURRTRIAL.nclipshown >= ENV.NRSVPMin) {
              currchoice = 1;
            }//held samplefixation
            else {
              currchoice = 0;
            }//broke samplefixation
          }//ELSE RSVP fixation required

          race_return.cxyt = [ currchoice, -1, -1, CURRTRIAL.samplefixationxyt[2] ];
          FLAGS.waitingforTouches--;
        }//IF RSVP, skip choice
        else {
          let p1 = hold_promise(0, boundingBoxesChoice3D, FLAGS.punishOutsideTouch);
          let p2 = choiceTimeOut(TASK.ChoiceTimeOut);
          race_return = await Promise.race([p1, p2]);
        }//ELSE !RSVP, require choice
      }//ELSE !STRESSTEST

      CURRTRIAL.responsetouchevent = race_return.type;
      CURRTRIAL.response = race_return.cxyt[0];
      CURRTRIAL.responsexyt = [race_return.cxyt[1], race_return.cxyt[2], race_return.cxyt[3]];

      logEVENTS('ResponseXYT', CURRTRIAL.responsexyt, 'trialseries');
      logEVENTS('ResponseTouchEvent', CURRTRIAL.responsetouchevent,'trialseries');
      logEVENTS('Response', CURRTRIAL.response, 'trialseries');

      // Keep track of repeated responses to one side
      if ( TASK.NRSVP <= 0 && CURRTRIAL.num > 0 && FLAGS.savedata && CURRTRIAL.responsetouchevent == 'theld') {
        if ( CURRTRIAL.response == trialhistory.response[trialhistory.correct.length - 1] ) {
          FLAGS.stickyresponse++;
        } else {
          FLAGS.stickyresponse = 0;
        }
      }//IF held fixation
    }//IF TASK.RewardStage === 1, get choice
    logEVENTS('CorrectItem', CURRTRIAL.correctitem, 'trialseries');
    CURRTRIAL.correct = CURRTRIAL.response == CURRTRIAL.correctitem ? 1 : 0;

    //REWARD PUNISH    REWARD PUNISH    REWARD PUNISH    REWARD PUNISH    REWARD PUNISH    //
    //REWARD PUNISH    REWARD PUNISH    REWARD PUNISH    REWARD PUNISH    REWARD PUNISH    //
    //REWARD PUNISH    REWARD PUNISH    REWARD PUNISH    REWARD PUNISH    REWARD PUNISH    //

    index_determine_numrewards();
    ENV.RewardDuration = setReward();
    logEVENTS('NReward', CURRTRIAL.nreward, 'trialseries');

    //============ DELIVER REWARD/PUNISH ============//
    //NO FEEDBACK
    if (CURRTRIAL.nreward == -1) {
      // IF no feedback
      CANVAS.sequencepost[1] = 'Blank';
      CANVAS.tsequencepost[1] = 0;
      frame.reset(CANVAS.sequencepost);
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
    }//IF no reward/punish feedback
    else if (CURRTRIAL.correct) {
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
        frame.reset(CANVAS.tsequencepost)
        playSound(2);
        renderShape2D(CANVAS.sequencepost[0], -1, VISIBLECANVAS);
        let lenTsequencePost = CANVAS.tsequencepost.length;
        let p1 = displayTrial(
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

        CURRTRIAL.reinforcementtime = Date.now() - ENV.CurrentDate.valueOf();
        logEVENTS('ReinforcementTime',CURRTRIAL.reinforcementtime,'trialseries');

        if (ble.connected == false && port.connected == false) {
          await Promise.all([p1]);
        }//IF no hardware delivery
        else if (ble.connected == true) {
          let p2 = writepumpdurationtoBLE( Math.round(ENV.RewardDuration * 1000) );
          await Promise.all([p1, p2]);
        }//ELSE IF bluetooth hardware
        else if (port.connected == true) {
          port.writepumpdurationtoUSB( Math.round(ENV.RewardDuration * 1000) );
          await Promise.all([p1]);
        }//ELSE IF USB
      }//FOR i rewards
    }//ELSE IF Reward, then reward (blank, reward, blank)
    else if (!CURRTRIAL.correct) {
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

      frame.reset(CANVAS.sequencepost)
      renderShape2D(CANVAS.sequencepost[0], -1, VISIBLECANVAS);
      let lenSequencePost = CANVAS.sequencepost.length;
      let p1 = displayTrial(
        CANVAS.tsequencepost,
        Array(lenSequencePost).fill(-1),
        Array(lenSequencePost).fill(-1),
        range(0, lenSequencePost - 1, 1),
        CANVAS.sequencepost,
        Array(lenSequencePost).fill(0),
        Array(lenSequencePost).fill(0),
        [],
        mkm
      );

      let numTrialsToBufferPunishPeriod = 50;
      let p2 = TQS.generate_trials(numTrialsToBufferPunishPeriod * TASK.NRSVP);
      playSound(3);
      CURRTRIAL.reinforcementtime = Date.now() - ENV.CurrentDate.valueOf();
      logEVENTS('ReinforcementTime',CURRTRIAL.reinforcementtime,'trialseries');

      await Promise.all([p1, p2]);
    }//ELSE IF PUNISH, then timeout (Blank, Punish, Blank)

    // Log trial end time
    if (port.connected && FLAGS.savedata) {
      port.writeSampleCommandTriggertoUSB('0');
      CURRTRIAL.endtime = Date.now() - ENV.CurrentDate.valueOf();
      await sleep(5);
    }//IF usb, zero sample command line
    else{ CURRTRIAL.endtime = Date.now() - ENV.CurrentDate.valueOf(); }
    logEVENTS('EndTime', CURRTRIAL.endtime, 'trialseries');

    //============ (end) DELIVER REWARD/PUNISH ============//

    //HOUSEKEEPING    HOUSEKEEPING    HOUSEKEEPING    HOUSEKEEPING    HOUSEKEEPING    //
    //HOUSEKEEPING    HOUSEKEEPING    HOUSEKEEPING    HOUSEKEEPING    HOUSEKEEPING    //
    //HOUSEKEEPING    HOUSEKEEPING    HOUSEKEEPING    HOUSEKEEPING    HOUSEKEEPING    //

    let ITIstart = performance.now();
    CURRTRIAL.lastTrialCompleted = new Date();//for display purposes only
    index_housekeeping_eye();
    index_housekeeping_effector_data();
    index_housekeeping_cloudstorage();
    if ( TASK.Agent != "SaveImages" ){ await checkParameterFileStatusFirebase();}  
    index_housekeeping_exits();

    // Run automator only after everything is saved
    if (TASK.Automator != 0) {
      await automateTask(automator_data, trialhistory);
      if (TASK.Automator == 0){
        console.log('MKTURK EXITING -- automator completed last stage')
        return;
      }
    }//IF Automator
    
    if (FLAGS.need2saveParameters == 1) {
      FLAGS.need2saveParameters = await saveParameterstoFirebase(); //Save parameters synchronously
    }
    updateHeadsUpDisplay();
    //================= (end) HOUSEKEEPING =================//

    //Await remaining ITI
    if (typeof TASK.InterTrialInterval != 'undefined') {
      let remainingInterTrialInterval = TASK.InterTrialInterval - (performance.now() - ITIstart);
      if (remainingInterTrialInterval > 0) {
        await sleep(remainingInterTrialInterval);
      }
    }//IF InterTrialInterval
    console.log('END OF TRIAL ', CURRTRIAL.num);
    CURRTRIAL.num++;
    EVENTS.trialnum = CURRTRIAL.num;
  }//WHILE(true): Main Task Loop
})();//Async function (anonymous function)