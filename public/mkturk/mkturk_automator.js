async function automateTask(automatorData, trialhistory) {
  // Input: automator array; trialhistory (.trainingstage, .correct), current_automator_stage
  // Globals: TASK.currentAutomatorStage (for reading); TASK.stuff (for writing to)

  // Actions: if [mintrials of minpctcorrect] has been achieved, move on to the next automator stage by updating TASK.stuff.
  // Set flags for updating params file, starting new datafile

  // IF THERE ARE DISCREPANCIES, SET TASK.STUFF TO AUTOMATOR DATA [ CURRENT_STAGE ]
  // Check for consistency between automatorData[currentStage] and TASK.stuff:
  // currentStageIdx is the master; the ground truth for what TASK.stuff should be.

  let currentStageIdx = TASK.CurrentAutomatorStage;
  let currentStage = stageHash(TASK);
  let automatorEvents = [];

  // This is essentially an union operation. If the same property exists
  // in both TASK and automatorData[currentStageIdx], then the property in
  // TASK is replaced by the one in automatorData[currentStageIdx]
  // discrepency check takes ~5 ms
  const updatedTask = Object.fromEntries(
    Object.entries(
      Object.assign({}, TASK, automatorData[currentStageIdx])
    ).flatMap(([key, value]) => {
      if (
        key == 'CurrentAutomatorStageName' ||
        key == 'MinPercentCriterion' ||
        key == 'MinTrialsCriterion'
      ) {
        return [];
      }
      try {
        if (TASK[key].toString() !== value.toString()) {
          const automatorEventStr = `[AUTOMATOR] WRITE NEW PARAMS: Discrepency between TASK[${key}] and AutomatorData[${key}]`;
          automatorEvents.push(automatorEventStr);
          console.log(automatorEvents[automatorEvents.length - 1]);
          FLAGS.need2saveParameters = 1;
        }
      } catch {
        const automatorEventStr = `[AUTOMATOR] WRITE NEW PARAMS: TASK did not have property ${key}`;
        automatorEvents.push(automatorEventStr);
        console.log(automatorEvents[automatorEvents.length - 1]);
        FLAGS.need2saveParameters = 1;
      }
      return [[key, value]];
    })
  );
  TASK = updatedTask;

  // ---------- CHECK IF STAGE TRANSITION CRITERIA HAS BEEN MET: ---------------------
  // Read transition criteria from automatorData
  ENV.MinPercentCriterion = automatorData[currentStageIdx].MinPercentCriterion;
  ENV.MinTrialsCriterion = automatorData[currentStageIdx].MinTrialsCriterion;
  ENV.CurrentAutomatorStageName =
    automatorData[currentStageIdx].CurrentAutomatorStageName;

  // Calculate current pctcorrect and ntrials
  const runningHistoryStats = computeRunningHistory(
    ENV.MinTrialsCriterion,
    currentStage,
    trialhistory.trainingstage,
    trialhistory.correct
  );
  ENV.StagePctCorrect = runningHistoryStats[0];
  ENV.StageNTrials = runningHistoryStats[1];

  console.log(`Performance history: ${ENV.StageNTrials} trials, pctcorrect=${ENV.StagePctCorrect}`);

  // ---------- CHANGE TASK.STUFF TO AUTOMATOR DATA [ NEXT_STAGE ] ----------------------
  // If transition criteria are met,
  if (    
    ( TASK.Agent !='SaveImages' &&
      ENV.StagePctCorrect > ENV.MinPercentCriterion && ENV.StageNTrials >= ENV.MinTrialsCriterion )
    ||
    ( TASK.Agent =='SaveImages' && TASK.NRSVP>1 && typeof(TQS) !='undefined' &&
      CURRTRIAL.num >= Math.ceil(TQS.samplebag_indices.length/TASK.NRSVP)
      )
    ||
    ( TASK.Agent =='SaveImages' && !(TASK.NRSVP>1) && typeof(TQS) !='undefined' &&
      CURRTRIAL.num >= TQS.samplebag_indices.length - 1)
    )
  {
    // If finished final stage of automator,
    if (TASK.CurrentAutomatorStage + 1 >= automatorData.length) {
      // Stay in current stage settings, and turn automator off
      TASK.Automator = 0;
      FLAGS.need2saveParameters = 1;

      automatorEvents.push('MKTURK AUTOMATOR COMPLETED FINAL STAGE, TURNING AUTOMATOR OFF');
      FLAGS.automatortext = updateHeadsUpDisplayAutomator(
        ENV.CurrentAutomatorStageName,
        ENV.StagePctCorrect,
        ENV.StageNTrials,
        ENV.MinPercentCriterion,
        ENV.MinTrialsCriterion,
        automatorEvents
      );
      updateHeadsUpDisplay();
      console.log('MKTURK EXITING AUTOMATOR -- automator completed final stage, turning automator off')
      console.log(
        'With ' +
          ENV.StagePctCorrect +
          '% performance on n=' +
          ENV.StageNTrials +
          ', subject completed the final stage ' +
          currentStageIdx +
          ' of ' +
          (automatorData.length - 1) +
          ' (zero indexing) of automator.'
      );
      if (ENV.MTurkWorkerId) {
        let mturkUser = {
          wid: ENV.MTurkWorkerId,
          aid: ENV.AssignmentId,
          hid: ENV.HITId,
        };
        let submitAssignmentResult = await submitAssignment(mturkUser);
        if (submitAssignmentResult.data.status === 'success') {
          window.location.replace(
            `https://mkturk.com/mturksurvey/?WID=${ENV.MTurkWorkerId}&AID=${ENV.AssignmentId}&HID=${ENV.HITId}`
          );
        }
      }
      return;
    } //IF finished final automator state

    // Otherwise, advance to the next stage.
    TASK.CurrentAutomatorStage += 1;
    const automatorEventStr = `SUBJECT ADVANCED TO STAGE IDX ${
      currentStageIdx + 1
    } of ${automatorData.length - 1} with ${
      ENV.StagePctCorrect
    }% performance on n=${ENV.StageNTrials}`;

    automatorEvents.push(automatorEventStr);
    console.log('MKTURK RELOADING -- ' + automatorEventStr);

    // Reset tracking variables
    purgeTrackingVariables();

    // Update TASK
    const updatedTaskTransition = Object.fromEntries(
      Object.entries(
        Object.assign({}, TASK, automatorData[currentStageIdx + 1])
      ).flatMap(([key, value]) => {
        console.log('automator transition');
        if (
          key == 'CurrentAutomatorStageName' ||
          key == 'MinPercentCriterion' ||
          key == 'MinTrialsCriterion'
        ) {
          return [];
        }
        try {
          if (TASK[key].toString() !== value.toString()) {
            console.log(`Property ${key} changed`);
          }
        } catch {
          console.log(`TASK did not have property ${key}`);
        }
        return [[key, value]];
      })
    );

    TASK = updatedTaskTransition;

    FLAGS.need2saveParameters = 1;
    FLAGS.need2loadParameters = 1;
  }//IF stage transition

  FLAGS.automatortext = updateHeadsUpDisplayAutomator(
    ENV.CurrentAutomatorStageName,
    ENV.StagePctCorrect,
    ENV.StageNTrials,
    ENV.MinPercentCriterion,
    ENV.MinTrialsCriterion,
    automatorEvents
  );
  updateHeadsUpDisplay();
  return;
}//FUNCTION automateTask(automatorData,trialhistory)

function stageHash(task) {
  // Returns a value that uniquely describes the automator and stage of the automator
  let currentStageHashStr = '';
  if (task.Automator > 0) {
    currentStageHashStr = `${task.AutomatorFilePath}_stage${task.CurrentAutomatorStage}`;
  } else {
    currentStageHashStr = 'automator_off';
  }
  // console.log('[Automator] CurrentStageHashStr:', currentStageHashStr);
  return currentStageHashStr;
} //FUNCTION stageHash(task)

async function readTrialHistoryFromFirebase(filepaths) {
  var trialhistory = {};
  trialhistory.trainingstage = [];
  trialhistory.starttime = [];
  trialhistory.correct = [];
  trialhistory.response = [];

  if (typeof filepaths == 'string') {
    filepaths = [filepaths];
  }

  // Sort in ascending order, such that the OLDEST file is FIRST in trialhistory
  // trialhistory: [oldest TRIALs... most recent TRIALs]
  filepaths.sort();

  // Iterate over files and add relevant variables
  for (var i = 0; i < filepaths.length; i++) {
    const data = await loadTextfromFirebase(filepaths[i]);

    // if mturk, only load trialhistory if same hitid
    if (ENV.MTurkWorkerId) {
      if (ENV.HITId) {
        if (data.ENV.HITId == ENV.HITId) {
          let numTrials = data.TRIALEVENTS.Response.length;
          // Iterate over TRIALs
          for (let i_trial = 0; i_trial < numTrials; i_trial++) {
            //Correct/incorrect trial
            const correct =
              data.TRIALEVENTS.Response[i_trial] ==
              data.TRIALEVENTS.CorrectItem[i_trial]
                ? 1
                : 0;
            trialhistory.correct.push(correct);

            //Response
            const response = data.TRIALEVENTS.Response[i_trial];
            trialhistory.response.push(response);

            //Current automator stage
            const currentStage = stageHash(data.TASK);
            trialhistory.trainingstage.push(currentStage);

            //Start time (fixation dot appears) of trial
            const starttime = data.TRIALEVENTS.StartTime[i_trial];
            trialhistory.starttime.push(starttime);
          }
        }
      }
    } else {
      let numTrials = data.TRIALEVENTS.Response.length;
      // Iterate over TRIALs
      for (let i_trial = 0; i_trial < numTrials; i_trial++) {
        //Correct/incorrect trial
        const correct =
          data.TRIALEVENTS.Response[i_trial] ==
          data.TRIALEVENTS.CorrectItem[i_trial]
            ? 1
            : 0;
        trialhistory.correct.push(correct);

        //Response
        const response = data.TRIALEVENTS.Response[i_trial];
        trialhistory.response.push(response);

        //Current automator stage
        const currentStage = stageHash(data.TASK);
        trialhistory.trainingstage.push(currentStage);

        //Start time (fixation dot appears) of trial
        const starttime = data.TRIALEVENTS.StartTime[i_trial];
        trialhistory.starttime.push(starttime);
      }
    }
  }
  console.log(
    `Read ${trialhistory.trainingstage.length} past trials from ${filepaths.length} datafiles.`
  );
  return trialhistory;
} //FUNCTION readTrialHistoryFromFirebase(filepaths)

function computeRunningHistory(
  minTrials,
  currentStage,
  trainingStageHistory,
  correctsHistory
) {
  // console.time('computeRunningHistory');
  // console.log(
  //   'minTrials:',
  //   minTrials,
  //   'currentStage:',
  //   currentStage,
  //   'trainingStageHistory:',
  //   trainingStageHistory,
  //   'correctsHistory:',
  //   correctsHistory
  // );
  // todo:
  // should trials that are performed with the automator off, but with the SAME settings as an automator stage,
  // be counted as being part of the automator? (nope, explicit is always better. -MLee. )

  if (trainingStageHistory.length != correctsHistory.length) {
    // console.log('trainingstage vec. length' + trainingStageHistory.length);
    // console.log('corrects vec. length ' + correctsHistory.length);
    throw 'The history arrays are of different length. Check what went wrong; cannot compute performance history.';
  }

  // Returns: The at most current-minTrials trial which starts a contiguous sequence to current trial with the same trainingstage/automatorfilepath as the current state,
  // trialhistory is assumed to include all trials except the current one
  // trialhistory is arranged in [oldest, ..., current-1] order

  // Starting from the most recent trial, move backwards until you hit either 1) minTrials or 2) another automatorstage
  var startingindex = trainingStageHistory.length;
  for (var i = trainingStageHistory.length - 1; i >= 0; i--) {
    if (trainingStageHistory[i] == currentStage) {
      if (trainingStageHistory.length - i <= minTrials) {
        startingindex = i;
      } else if (trainingStageHistory.length - i > minTrials) {
        break;
      } else {
        throw 'Something went wrong';
      }
    } else if (trainingStageHistory[i] != currentStage) {
      break;
    } else {
      // console.log(trainingStageHistory[i]);
      // console.log(currentStage);
      throw 'Something went wrong 2';
    }
  } //FOR i trials

  var ndiscrepancy = 0;
  var ncountedtrials = 0;
  for (let i = startingindex; i < trainingStageHistory.length; i++) {
    if (trainingStageHistory[i] != currentStage) {
      ndiscrepancy = ndiscrepancy + 1;
      // console.log(trainingStageHistory[i]);
      // console.log(currentStage);
      throw 'Something went wrong 3';
    }
    ncountedtrials = ncountedtrials + 1;
  }

  var ntrial = 0;
  var ncorrect = 0;
  var pctcorrect = NaN;
  if (startingindex == correctsHistory.length) {
    pctcorrect = 0;
    return [pctcorrect, ntrial];
  }

  for (let i = startingindex; i < correctsHistory.length; i++) {
    if (correctsHistory[i] == 1) {
      ncorrect = ncorrect + 1;
    }

    ntrial++;
  }
  pctcorrect = (100 * ncorrect) / ntrial;
  // console.timeEnd('computeRunningHistory');
  return [pctcorrect, ntrial];
} //FUNCTION computeRunningHistory(minTrials, currentStage, trainingStageHistory, correctsHistory)
