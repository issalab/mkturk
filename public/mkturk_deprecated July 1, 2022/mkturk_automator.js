async function automateTask(automator_data, trialhistory){
	// Input: automator array; trialhistory (.trainingstage, .correct), current_automator_stage
	// Globals: TASK.currentAutomatorStage (for reading); TASK.stuff (for writing to)

	// Actions: if [mintrials of minpctcorrect] has been achieved, move on to the next automator stage by updating TASK.stuff.
	// Set flags for updating params file, starting new datafile

	// IF THERE ARE DISCREPANCIES, SET TASK.STUFF TO AUTOMATOR DATA [ CURRENT_STAGE ]
	// Check for consistency between automator_data[current_stage] and TASK.stuff: 
	// i_current_stage is the master; the ground truth for what TASK.stuff should be.

	var i_current_stage = TASK.CurrentAutomatorStage; 
	var current_stage = stageHash(TASK); 
	var automator_eventstring = []

	for (var property in automator_data[i_current_stage]){
		if (property == "CurrentAutomatorStageName" || property == "MinPercentCriterion" || property == "MinTrialsCriterion"){
			continue
		}//IF stage name or criteria, then these are stored in ENV not TASK
		if (automator_data[i_current_stage].hasOwnProperty(property)){ // Apparently a necessary 'if' statement, as explained in: http://stackoverflow.com/questions/8312459/iterate-through-object-properties
			if (TASK[property].toString() != automator_data[i_current_stage][property].toString()){
				automator_eventstring.push('WRITE NEW PARAMS: ' 
					+ 'Discrepancy between TASK.'+property+'='+TASK[property]
					+ ' and automator_data['+i_current_stage+']['+property+']='
					+ automator_data[i_current_stage][property]
				)
				console.log(automator_eventstring[automator_eventstring.length-1])

				TASK[property] = automator_data[i_current_stage][property]
				FLAGS.need2saveParameters = 1;
			}//IF need to update TASK property to property in current automator stage
		}//IF
	}//FOR property

	// ---------- CHECK IF STAGE TRANSITION CRITERIA HAS BEEN MET: ---------------------
	// Read transition criteria from automator_data
	ENV.MinPercentCriterion = automator_data[i_current_stage].MinPercentCriterion;
	ENV.MinTrialsCriterion = automator_data[i_current_stage].MinTrialsCriterion; 
	ENV.CurrentAutomatorStageName = automator_data[i_current_stage].CurrentAutomatorStageName;

	// Calculate current pctcorrect and ntrials
	var funcreturn = computeRunningHistory(ENV.MinTrialsCriterion, current_stage, trialhistory.trainingstage, trialhistory.correct)
	ENV.StagePctCorrect = funcreturn[0];
	ENV.StageNTrials = funcreturn[1];

	console.log('Performance history: '+ENV.StageNTrials+' trials, pctcorrect='+ ENV.StagePctCorrect)

	// ---------- CHANGE TASK.STUFF TO AUTOMATOR DATA [ NEXT_STAGE ] ----------------------
	// If transition criteria are met, 
	if (ENV.StagePctCorrect > ENV.MinPercentCriterion && ENV.StageNTrials >= ENV.MinTrialsCriterion){
		// If finished final stage of automator,
		if (automator_data.length <= TASK.CurrentAutomatorStage+1){
			// Stay in current stage settings, and turn automator off
			TASK.Automator = 0;
			FLAGS.need2saveParameters = 1;
			
			automator_eventstring.push('COMPLETED FINAL STAGE, TURNING AUTOMATOR OFF')
			FLAGS.automatortext = updateHeadsUpDisplayAutomator(ENV.CurrentAutomatorStageName,ENV.StagePctCorrect,ENV.StageNTrials,ENV.MinPercentCriterion,ENV.MinTrialsCriterion,automator_eventstring)
			updateHeadsUpDisplay()
			console.log('With '+ENV.StagePctCorrect+'\% performance on n='+ENV.StageNTrials
						+', subject completed the final stage '+(i_current_stage)
						+' of '+(automator_data.length-1)+' (zero indexing) of automator.')
			console.log('Turning automator OFF.')
			if (ENV.MTurkWorkerId) {
				let mturkUser = {
					wid: ENV.MTurkWorkerId,
					aid: ENV.AssignmentId,
					hid: ENV.HITId
				}
				let submitAssignmentResult = await submitAssignment(mturkUser);
				if (submitAssignmentResult.data.status === 'success') {
					window.location.replace(`https://mkturk.com/mturksurvey/?WID=${ENV.MTurkWorkerId}&AID=${ENV.AssignmentId}&HID=${ENV.HITId}`);
				}
			}
			return 
		}//IF finished final automator state

		// Otherwise, advance to the next stage.
		TASK.CurrentAutomatorStage = TASK.CurrentAutomatorStage + 1; 
		automator_eventstring.push( 'SUBJECT ADVANCED TO STAGE ' + (i_current_stage+1) 
									+ ' of '+(automator_data.length-1)
									+ ' with ' + ENV.StagePctCorrect+'\% performance on n='+ENV.StageNTrials)
		console.log('With '+ENV.StagePctCorrect+'\% performance on n='+ENV.StageNTrials
					+', subject advanced to stage '+(i_current_stage+1)
					+' of '+(automator_data.length-1)+' (zero indexing) of automator.')

		// Reset tracking variables 
		purgeTrackingVariables();

		// Update TASK
		for (var property in automator_data[i_current_stage+1]){
			if (property == "CurrentAutomatorStageName" || property == "MinPercentCriterion" || property == "MinTrialsCriterion"){
				continue
			}//IF stage name or criteria, these ENV variables don't need to be stored in TASK

			if (automator_data[i_current_stage+1].hasOwnProperty(property)){ 
				if (TASK[property].toString() != automator_data[i_current_stage+1][property].toString())
				{
					TASK[property] = automator_data[i_current_stage+1][property]

					console.log('\"'+property+'\" changed from '+TASK[property]
								+' to '+automator_data[i_current_stage+1][property])
				}//IF need to update TASK property
			}//IF property
		}//FOR property
		FLAGS.need2saveParameters = 1;
		FLAGS.need2loadParameters = 1;
	}//IF stage transition

	FLAGS.automatortext = updateHeadsUpDisplayAutomator(
		ENV.CurrentAutomatorStageName,
		ENV.StagePctCorrect, ENV.StageNTrials, ENV.MinPercentCriterion, ENV.MinTrialsCriterion,
		automator_eventstring)
	updateHeadsUpDisplay()
	return 
}//FUNCTION automateTask(automator_data,trialhistory)


function stageHash(task){
	// Returns a value that uniquely describes the automator and stage of the automator
	var current_stage_hash_string = ''
	if (task.Automator != 0){
		current_stage_hash_string = task.AutomatorFilePath+'_stage'+task.CurrentAutomatorStage; 
	}

	else{
		current_stage_hash_string = 'automator_off'
	}

	return current_stage_hash_string

	// Todo: decide whether to count trials which have TASK that is consistent with an automator stage, as being part of that stage
}//FUNCTION stageHash(task)


async function readTrialHistoryFromFirebase(filepaths){
	var trialhistory = {}
	trialhistory.trainingstage = []
	trialhistory.starttime = []
	trialhistory.correct = []
	trialhistory.response = []

	if (typeof filepaths == "string"){
		filepaths = [filepaths]
	}

	// Sort in ascending order, such that the OLDEST file is FIRST in trialhistory 
	// trialhistory: [oldest TRIALs... most recent TRIALs]
	filepaths.sort()

	// Iterate over files and add relevant variables
	for (var i = 0; i< filepaths.length; i++){
		data = await loadTextfromFirebase(filepaths[i])

		var numTRIALs = data.TRIALEVENTS.Response.length; 
		// Iterate over TRIALs
		for (var i_trial = 0; i_trial<numTRIALs; i_trial++){
			//Correct/incorrect trial
			var correct = Number(data.TRIALEVENTS.Response[i_trial] == data.TRIALEVENTS.CorrectItem[i_trial])
			trialhistory.correct.push(correct)

			//Response
			var response = data.TRIALEVENTS.Response[i_trial]
			trialhistory.response.push(response)

			//Current automator stage 
			var current_stage = stageHash(data.TASK)
			trialhistory.trainingstage.push(current_stage)

			//Start time (fixation dot appears) of trial 
			var starttime = data.TRIALEVENTS.StartTime[i_trial]
			trialhistory.starttime.push(starttime)
		}
	}
	console.log('Read '+trialhistory.trainingstage.length+' past trials from ', filepaths.length, ' datafiles.')
	return trialhistory
}//FUNCTION readTrialHistoryFromFirebase(filepaths)


function computeRunningHistory(mintrials, current_stage, history_trainingstage, history_corrects){
	// todo: 
	// should trials that are performed with the automator off, but with the SAME settings as an automator stage, 
	// be counted as being part of the automator? (nope, explicit is always better. -MLee. )

	if (history_trainingstage.length!=history_corrects.length){
	 	console.log('trainingstage vec. length'+history_trainingstage.length)
	 	console.log('corrects vec. length '+history_corrects.length)
 		throw('The history arrays are of different length. Check what went wrong; cannot compute performance history.')
	}

	// Returns: The at most current-mintrials trial which starts a contiguous sequence to current trial with the same trainingstage/automatorfilepath as the current state,  
	// trialhistory is assumed to include all trials except the current one
	// trialhistory is arranged in [oldest, ..., current-1] order

	// Starting from the most recent trial, move backwards until you hit either 1) mintrials or 2) another automatorstage
	var startingindex = history_trainingstage.length;
	for (var i = history_trainingstage.length-1; i >= 0; i--){
		if (history_trainingstage[i] == current_stage){
			if(history_trainingstage.length - i <= mintrials){
				startingindex = i;
			}
			else if(history_trainingstage.length - i > mintrials){
				break; 
			}
			else{throw "Something went wrong"}
		}

		else if (history_trainingstage[i] != current_stage){
			break
		}
		else{
			console.log(history_trainingstage[i])
			console.log(current_stage)
			throw "Something went wrong 2"
		}
	}//FOR i trials

	var ndiscrepancy = 0
	var ncountedtrials = 0
	for (var i = startingindex; i<history_trainingstage.length; i++){
		if (history_trainingstage[i] != current_stage){
			ndiscrepancy = ndiscrepancy+1
			console.log(history_trainingstage[i])
			console.log(current_stage)
			throw "Something went wrong 3"
		}
		ncountedtrials = ncountedtrials+1
	}

	var ntrial=0;
	var ncorrect=0;
	var pctcorrect = NaN
	if (startingindex == history_corrects.length){
		pctcorrect = 0;
		return [pctcorrect, ntrial]
	}

	for (var i=startingindex; i<history_corrects.length; i++){
		if (history_corrects[i]==1){
			ncorrect = ncorrect+1;
		}
		
		ntrial++;
	}
	pctcorrect = 100 * ncorrect/ntrial;
	return [pctcorrect, ntrial]
}//FUNCTION computeRunningHistory(mintrials, current_stage, history_trainingstage, history_corrects)