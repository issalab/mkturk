function pingBigQueryEyeTable(){
	if (Object.keys(EVENTS['timeseries']['EyeData']).length > 0  && 
		typeof(bigqueryEyeTimer) != "undefined"){
		saveEyeDatatoBigQuery()
	} //if timer expired & new data added
	else {
		bigqueryEyeTimer = setTimeout(function(){
			clearTimeout(bigqueryEyeTimer)
			pingBigQueryEyeTable()
		}, 10000)
	} //else check again in 10 seconds
}//FUNCTION pingBigQueryEyeTable


function pingBigQueryDisplayTimesTable(){
	if (Object.keys(EVENTS['timeseries']['TSequenceActual']).length > 0  && 
		typeof(bigqueryDisplayTimer) != "undefined"){
		saveDisplayTimestoBigQuery()
	} //if timer expired & new data added
	else {
		bigqueryDisplayTimer = setTimeout(function(){
			clearTimeout(bigqueryDisplayTimer)
			pingBigQueryDisplayTimesTable()
		}, 10000)
	} //else check again in 10 seconds
}//FUNCTION pingBigQueryEyeTable()

function pingBigQueryTouchTable() {
	if (
		Object.keys(EVENTS['timeseries']['TouchData']).length > 0
		&& typeof(bigQueryTouchTimer) != 'undefined'
	) {
		bigQuerySaveTouchData();
	} else {
		bigQueryTouchTimer = setTimeout(() => {
			clearTimeout(bigQueryTouchTimer);
			pingBigQueryTouchTable()
		}, 10000);
	}
}

function saveEyeDatatoBigQuery() {
	eventtype = 'timeseries';
	eventname = 'EyeData';
	let nsamples = Object.keys(EVENTS[eventtype][eventname]).length;

	var eyedata = []
	for (var i=0; i<=nsamples-1; i++){
		var trialnum = EVENTS[eventtype][eventname][i][0]
		var timestamp = new Date(EVENTS[eventtype][eventname][i][1]) - ENV.CurrentDate
		if (timestamp >= EVENTS['trialseries']['StartTime'][trialnum]-2000){
			let obj = {
				'agent': ENV.Subject,
					'timestamp': EVENTS[eventtype][eventname][i][1],
		  		'trial_num': EVENTS[eventtype][eventname][i][0],
					'num_eyes': EVENTS[eventtype][eventname][i][2],
					'left_x': EVENTS[eventtype][eventname][i][3],
					'left_y': EVENTS[eventtype][eventname][i][4],
					'left_aux_0': EVENTS[eventtype][eventname][i][5],
					'left_aux_1': EVENTS[eventtype][eventname][i][6],
					'right_x': EVENTS[eventtype][eventname][i][7],
					'right_y': EVENTS[eventtype][eventname][i][8],
					'right_aux_0': EVENTS[eventtype][eventname][i][9],
					'right_aux_1': EVENTS[eventtype][eventname][i][10]
			};
			
			for (let key in obj) {
				if (Number.isNaN(obj[key])) {
					console.error('Eyedata contains NaN:', obj, key);
					obj[key] = -10000;
				}
			}

			eyedata.push(obj); //push single event			
		}//IF after trial start minus 2 seconds
	}//FOR i events

	bqInsertEyeData(eyedata);

	console.log("BIGQUERY: Upload EyeData");

	//reset eye event accumulation in mkturk (reduce memory load)
	EVENTS[eventtype][eventname] = {};

	delete bigqueryEyeTimer; //to start a new timer
	pingBigQueryEyeTable();
}//FUNCTION saveEyeDatatoBigQuery

function bigQuerySaveTouchData() {
	let numSamples = Object.keys(EVENTS['timeseries']['TouchData']).length;

	let touchDataArr = [];

	for (let i = 0; i < numSamples; i++) {
		let touchDataObj = {
			'agent': ENV.Subject,
			'timestamp': EVENTS['timeseries']['TouchData'][i][1],
			'trial_num': EVENTS['timeseries']['TouchData'][i][0],
			'touch_x': EVENTS['timeseries']['TouchData'][i][2],
			'touch_y': EVENTS['timeseries']['TouchData'][i][3],
			'meta': EVENTS['timeseries']['TouchData'][i][4],
		};

		for (let key in touchDataObj) {
			if (Number.isNaN(touchDataObj[key])) {
				console.error('TouchData contains NaN:', touchDataObj, key);
				touchDataObj[key] = -10000;
			}
		}

		touchDataArr.push(touchDataObj);
	}

	bqInsertTouchData(touchDataArr);
	
	console.log('BIGQUERY::Upload TouchData');

	// RESET TOUCH DATA ACCUMULATION IN MKTURK
	EVENTS['timeseries']['TouchData'] = {};

	delete bigQueryTouchTimer;
	pingBigQueryTouchTable();
}

function saveDisplayTimestoBigQuery() {
	eventtype = 'timeseries';
	eventname1 = 'FrameNum';
	eventname2 = 'TSequenceDesired';
	eventname0 = 'TSequenceActual';
	var nsamples = Object.keys(EVENTS[eventtype][eventname0]).length;

	var displaydata = [];
	for (let i = 0; i < nsamples; i++) {
		let obj = {
			'agent': ENV.Subject,
			'timestamp': EVENTS[eventtype][eventname0][i][1],
			'trial_num': EVENTS[eventtype][eventname0][i][0],
			'frame_num': EVENTS[eventtype][eventname1][i].slice(2,EVENTS[eventtype][eventname1][i].length),
			't_desired': EVENTS[eventtype][eventname2][i].slice(2,EVENTS[eventtype][eventname2][i].length),
			't_actual': EVENTS[eventtype][eventname0][i].slice(2,EVENTS[eventtype][eventname0][i].length)
		};
		for (let key in obj) {
			if (Number.isNaN(obj[key])) {
				console.error('Eyedata contains NaN:', obj, key);
				obj[key] = -10000;
			}
		}
		//push single event
		displaydata.push(obj);
		
	}//FOR i events

	bqInsertDisplayTimes(displaydata);

	console.log("BIGQUERY: Upload DisplayTimes");

	//reset eye event accumulation in mkturk (reduce memory load)
	EVENTS[eventtype][eventname0] = {};
	EVENTS[eventtype][eventname1] = {};
	EVENTS[eventtype][eventname2] = {};

	delete bigqueryDisplayTimer; //to start a new timer
	pingBigQueryDisplayTimesTable();
}//FUNCTION saveDisplayTimestoBigQuery()