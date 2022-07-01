/**
 * mkturk_auth.js
 * Authentication procedure for MkTurk.
 * TODO: Change mkturk_installsettings.js based on authentication result
 */

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const storageRef = storage.ref();
const rtdb = firebase.database();

const functions = firebase.functions();

const bqInsertEyeData = functions.httpsCallable('bqInsertEyeData');
const bqInsertDisplayTimes = functions.httpsCallable('bqInsertDisplayTimes');
const bqInsertTouchData = functions.httpsCallable('bqInsertTouchData');
const detectDevice = functions.httpsCallable('detectDevice');
const processMturkUser = functions.httpsCallable('processMturkUser');
const submitAssignment = functions.httpsCallable('submitAssignment');

// ------ Save location settings ------
var DATA_SAVEPATH = "/mkturkfiles/datafiles/"
var PARAM_DIRPATH = "/mkturkfiles/parameterfiles/subjects/"
var SOUND_FILEPREFIX = "/mkturkfiles/sounds/au"

var FIRESTORECOLLECTION =	{
  DATA: 'mkturkdata',
	DEVICES: 'devices',
	AGENTS: 'marmosets',
	CALIBRATION: 'eyecalibrations',
};

// ------ Misc. -----------------------
var ndatafiles2read = 5; // todo: change to trials. and use as upper bound (stop reading once you hit the first discrepancy). maybe this is effectively synonymous with mintrials
var subjectlist = [];


let mturkUserConfig = {};

console.log('window.location.search:', window.location.search);

if (window.location.search) {
  try {
    let mturkCfgPairStr = window.location.search.split('?')[1].split('&');
    mturkCfgPairStr.forEach(str => {
      let pair = str.split('=');
      if (pair[0] == 'AID') { // AID: assignmentId
        mturkUserConfig.aid = pair[1];
      } else if (pair[0] == 'HID') { // HID: hitId
        mturkUserConfig.hid = pair[1];
      } else if (pair[0] == 'WID') { // WID: workerId
        mturkUserConfig.wid = pair[1];
      } else if (pair[0] == 'TASK') { // TASK: name of task in params_storage
        mturkUserConfig.task = pair[1];
      }
    });
  } catch (e) {
    console.error('Error Parsing User Config:', e);
  }
}

console.log('mturkUserConfig:', mturkUserConfig);

let provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/user.emails.read');
provider.addScope('https://www.googleapis.com/auth/userinfo.email');


auth.getRedirectResult().then((redirectResult) => {
  if (redirectResult.user) {
    // User just signed in
    ENV.ResearcherDisplayName = redirectResult.user.displayName;
    ENV.ResearcherEmail = redirectResult.user.email;
    ENV.ResearcherID = redirectResult.user.uid;

    console.log(`Sign-In Redirect Result, USER ${redirectResult.user.email} is signed in`);
    updateHeadsUpDisplay();
  } else if (auth.currentUser) {
    // User already signed in.
    ENV.ResearcherDisplayName = auth.currentUser.displayName;
    ENV.ResearcherEmail = auth.currentUser.email;
    ENV.ResearcherID = auth.currentUser.uid;

    console.log(`Sign-In Redirect Result, USER ${auth.currentUser.email} is signed in`);
    updateHeadsUpDisplay();
  } else {
    // User not yet authenticated
    console.log('User Not Yet Authenticated');
    auth.signInWithRedirect(provider);    
  }
}).catch((authError) => {
  console.error(`[Authentication Error]: ${authError}`);
});


auth.onAuthStateChanged((user) => {
  console.log('user:', user);
  if (user && Object.keys(mturkUserConfig).length) {
    user.getIdToken(true)
      .then(async (idToken) => {
        mturkUserConfig.token = idToken;
        console.log(`Auth Token: ${idToken}`);
        await processMturkUser(mturkUserConfig).then(async (res) => {
          console.log('res:', res);
          if (await res.data.message == 'assignment entry already exists') {
            console.log('window will close here');
            //window.close();
          }
          if (await res.data.status == 'success') {
            console.log('HELLO');
            ENV.MTurkWorkerId = mturkUserConfig.wid;
            ENV.HITId = mturkUserConfig.hid;
            ENV.AssignmentId = mturkUserConfig.aid;
            subjectlist.push(ENV.MTurkWorkerId);
            DATA_SAVEPATH = `/mkturkfiles_mturk/userfiles/${ENV.MTurkWorkerId}/data/`;
            PARAM_DIRPATH = `/mkturkfiles_mturk/userfiles/${ENV.MTurkWorkerId}/params/`
            FIRESTORECOLLECTION.DATA = 'mturkdata';
            let subjectlistobj = document.getElementById("subjectID_select");
            let opt = document.createElement('option');
            opt.value = 0;
            opt.innerHTML = subjectlist[0];
            subjectlistobj.appendChild(opt);
            console.log(subjectlist);
            console.log(subjectlistobj);
          }
        }).catch((error) => {
          console.error(`[processMturkUser] Error: ${error}`);
        });
      });
  } else {
	  storageRef.child(PARAM_DIRPATH).listAll()
		.then((res) => {
			res.items.slice().reverse().forEach((itemRef) => {
        let subjectName = itemRef.name.split('_')[0];
        if (subjectName) {
          subjectlist.push(subjectName);
        }
      });
      let subjectlistobj = document.getElementById("subjectID_select");
      for (let i = subjectlist.length - 1; i >= 0; i--) {
        // console.log('subjectlist i:', i);
        let opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = subjectlist[i];
        subjectlistobj.appendChild(opt);
      }
		})
		.catch(err => {
			console.error('error:', err);
		});
  }
});



function firebaseRedirectSignIn() {
  //log out and show the redirect sign-in screen
  //default behavior of redirect ui is to automatically log-in if there is one user
  //go to accounts.google.com to log-in a second user

  auth.signOut().then(() => {
    auth.signInWithRedirect(provider);
  });
}
