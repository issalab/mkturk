/**
 * mkturk_automator2.js
 * Automator Module
 */

/**
 * 
 * @param {*} data 
 * @param {*} hist 
 */
export async function automateTask(data, hist) {
  
  let currentStageIdx = TASK.CurrentAutomatorStage;
  let currentStage = stageHash(TASK);
  let automatorEvtStrArr = [];

  // IF stage name or criteria, then these are stored in ENV not TASK
  for (let key in data[currentStageIdx]) {
    if (
      key == 'CurrentAutomatorStageName'
      || key == 'MinPercentCriterion'
      || key == 'MinTrialsCriterion'
    ) {
      continue;
    }

    if (data[currentStageIdx].hasOwnProperty(key)) {

      //IF need to update TASK property to property in current automator stage
      if (TASK[key].toString() != data[currentStageIdx][key].toString()) {
        let automatorEvtStr = (
          `WRITE NEW PARAMS: Discrepancy between TASK. ${key}=${TASK[key]} and automator_data[${currentStageIdx}][${key}]=${data[currentStageIdx][key]}`
        );
        automatorEvtStrArr.push(automatorEvtStr);

        console.log(automatorEvtStrArr[automatorEvtStrArr.length - 1]);

        TASK[key] = data[currentStageIdx][key];
        FLAGS.need2saveParameters = 1;
      }
    }
  }

  ENV.MinPercentCriterion
}