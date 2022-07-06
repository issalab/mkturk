// For each experimenter's installation of mkturk, this contains information for dropbox keys, savepaths, stimuli
// Also used for liveplot to identify where to look for behavioral files

// ------ Subject settings ------ 
// var subjectlist = [
// "Eliaso","Youno","Hectoro","Ericao","Alexo",
// "You-Nah","Tahereh","Hector","Erica","Elias","Andrea","Alex",
// "West","Waffles","Shirley","Sherlock","Sausage",
// "Rafiki","Ollie","Hutch","East",
// "Bourgeois","Boris","Bolshevik",
// "Bool","Bolo","Boba",
// "Bloo","Blizzard","Blintz",
// "Blast","Blasco","Blaise",
// "Barb",
// "AJ"
// ];

// const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const storageRef = storage.ref();
const rtdb = firebase.database();

const functions = firebase.functions();

const bqInsertEyeData = functions.httpsCallable('bqInsertEyeData');
const bqInsertDisplayTimes = functions.httpsCallable('bqInsertDisplayTimes');
const detectDevice = functions.httpsCallable('detectDevice');
const processMturkUser = functions.httpsCallable('processMturkUser');
const submitAssignment = functions.httpsCallable('submitAssignment');


// ------ Save location settings ------
var DATA_SAVEPATH = "/mkturkfiles/datafiles/"
var PARAM_DIRPATH = "/mkturkfiles/parameterfiles/subjects/"
var SOUND_FILEPREFIX = "/mkturkfiles/sounds/au"

var FIRESTORECOLLECTION =	{ 	DATA: 'mkturkdata',
								DEVICES: 'devices',
								AGENTS: 'marmosets',
								CALIBRATION: 'eyecalibrations',
							}

// ------ Misc. -----------------------
var ndatafiles2read=5; // todo: change to trials. and use as upper bound (stop reading once you hit the first discrepancy). maybe this is effectively synonymous with mintrials


let subjectlist = [];
// var DATA_SAVEPATH;
// var PARAM_DIRPATH;
// var SOUND_FILEPREFIX;
// var FIRESTORECOLLECTION = {};

if (!ENV.MTurkWorkerId) {
	storageRef.child(PARAM_DIRPATH).listAll()
		.then((res) => {
			res.items.slice().reverse().forEach((itemRef) => {
				let subjectName = itemRef.name.split('_')[0];
				subjectlist.push(subjectName);
			});
		})
		.catch(err => {
			console.error('error:', err);
		});
} else {
	subjectlist.push(ENV.MTurkWorkerId);
	DATA_SAVEPATH = `/mkturkfiles_mturk/userfiles/${ENV.MTurkWorkerId}/data/`;
	FIRESTORECOLLECTION.DATA = 'mturkdata';
	FIRESTORECOLLECTION.AGENTS = 'mturkusers';
}


// ------ todo: move into params file -