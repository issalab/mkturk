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
const processProlificUser = functions.httpsCallable('processProlificUser');

// ------ Save location settings ------
var DATA_SAVEPATH = '/mkturkfiles/datafiles/';
var PARAM_DIRPATH = '/mkturkfiles/parameterfiles/subjects/';
var SOUND_FILEPREFIX = '/mkturkfiles/sounds/au';

var FIRESTORECOLLECTION = {
  DATA: 'mkturkdata',
  DEVICES: 'devices',
  AGENTS: 'marmosets',
  CALIBRATION: 'eyecalibrations',
};

// ------ Misc. -----------------------
var ndatafiles2read = 5; // todo: change to trials. and use as upper bound (stop reading once you hit the first discrepancy). maybe this is effectively synonymous with mintrials
var subjectlist = [];

let mturkUserConfig = {};
let prolificUserConfig = {};

// console.log('window.location.search:', window.location.search);

if (window.location.search) {
  try {
    let mturkCfgPairStr = window.location.search.split('?')[1].split('&');
    mturkCfgPairStr.forEach((str) => {
      let pair = str.split('=');
      if (pair[0] == 'AID') {
        // AID: assignmentId
        mturkUserConfig.aid = pair[1];
      } else if (pair[0] == 'HID') {
        // HID: hitId
        mturkUserConfig.hid = pair[1];
      } else if (pair[0] == 'WID') {
        // WID: workerId
        mturkUserConfig.wid = pair[1];
      } else if (pair[0] == 'TASK') {
        // TASK: name of the pre-staged params template (mkturkfiles/parameterfiles/{mturk,prolific}_params/{TASK}_params.json)
        mturkUserConfig.task = pair[1];
        prolificUserConfig.task = pair[1];
      } else if (pair[0] == 'PROLIFIC_PID') {
        // Prolific's own participant-id placeholder; unique per participant
        prolificUserConfig.pid = pair[1];
      } else if (pair[0] == 'STUDY_ID') {
        prolificUserConfig.studyId = pair[1];
      } else if (pair[0] == 'SESSION_ID') {
        prolificUserConfig.sessionId = pair[1];
      } else if (pair[0] == 'CC') {
        // CC: Prolific completion code, set ahead of time per Study
        prolificUserConfig.completionCode = pair[1];
      }
    });
  } catch (e) {
    console.error('Error Parsing User Config:', e);
  }
}
console.log('mturkUserConfig:', mturkUserConfig);
console.log('prolificUserConfig:', prolificUserConfig);

let provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

// Wire the sign-in button for initial authentication (before index.js loads).
// index_init() re-wires it to firebaseRedirectSignIn after the app starts.
function _initialSignInHandler() {
  auth.signInWithPopup(provider)
    .then((result) => {
      if (result.user) {
        ENV.ResearcherDisplayName = result.user.displayName;
        ENV.ResearcherEmail = result.user.email;
        ENV.ResearcherID = result.user.uid;
        console.log(`Popup Sign-In, USER ${result.user.email} is signed in`);
      }
    })
    .catch((err) => console.error('[Popup Sign-In Error]:', err));
}
document.getElementById('googlesignin').addEventListener('pointerup', _initialSignInHandler, false);
document.getElementById('googlesignin').addEventListener('click', _initialSignInHandler, false); // Safari

auth.getRedirectResult().then((redirectResult) => {
    if (redirectResult.user) {
      // Handle any redirect result (e.g., from production where redirect may be used)
      ENV.ResearcherDisplayName = redirectResult.user.displayName;
      ENV.ResearcherEmail = redirectResult.user.email;
      ENV.ResearcherID = redirectResult.user.uid;

      console.log(
        `Sign-In Redirect Result, USER ${redirectResult.user.email} is signed in`
      );
      updateHeadsUpDisplay();
    } else if (auth.currentUser) {
      // Persisted session — user already signed in
      ENV.ResearcherDisplayName = auth.currentUser.displayName;
      ENV.ResearcherEmail = auth.currentUser.email;
      ENV.ResearcherID = auth.currentUser.uid;

      console.log(`Persisted session, USER ${auth.currentUser.email} is signed in`);
      updateHeadsUpDisplay();
    } else {
      console.log('User not authenticated. Click the sign-in button to continue.');
    }
  })//.then
  .catch((authError) => {
    console.error(`[Authentication Error]: ${authError}`);
  });

// Prolific participants arrive via a direct task link (?PROLIFIC_PID=...) and should
// never see the sign-in button or subject picker -- authenticate anonymously right away.
// (Requires the "Anonymous" provider enabled in Firebase Console > Authentication > Sign-in method.)
if (prolificUserConfig.pid && !auth.currentUser) {
  auth.signInAnonymously().catch((err) => console.error('[Anonymous Sign-In Error]:', err));
}

auth.onAuthStateChanged((user) => {
  console.log('[onAuthStateChanged] fired. user:', user ? user.uid : null, 'mturkUserConfig keys:', Object.keys(mturkUserConfig).length, 'prolificUserConfig keys:', Object.keys(prolificUserConfig).length);
  if (user && mturkUserConfig.wid) {
    user.getIdToken(true).then(async (idToken) => {
      mturkUserConfig.token = idToken;
      // console.log(`Auth Token: ${idToken}`);
      await processMturkUser(mturkUserConfig)
        .then(async (res) => {
          console.log('res:', res);
          // if ((await res.data.message) == 'assignment entry already exists') {
          //   console.log('window will close here');
          //   // window.close();
          // }
          if (
            (await res.data.status) == 'success' ||
            (await res.data.message) == 'assignment entry already exists'
          ) {
            ENV.MTurkWorkerId = mturkUserConfig.wid;
            ENV.HITId = mturkUserConfig.hid;
            ENV.AssignmentId = mturkUserConfig.aid;
            ENV.ExternalSubjectId = ENV.MTurkWorkerId;
            ENV.Subject = ENV.MTurkWorkerId;
            localStorage.setItem('Agent', ENV.MTurkWorkerId);
            DATA_SAVEPATH = `/mkturkfiles_mturk/userfiles/${ENV.MTurkWorkerId}/data/`;
            PARAM_DIRPATH = `/mkturkfiles_mturk/userfiles/${ENV.MTurkWorkerId}/params/`;
            FIRESTORECOLLECTION.DATA = 'mturkdata';
            const tag = document.createElement('script');
            tag.src = 'index.js';
            document.getElementsByTagName('body')[0].appendChild(tag);
          }
        })
        .catch((error) => {
          console.error(`[processMturkUser] Error: ${error}`);
        });
    });
  } else if (user && prolificUserConfig.pid) {
    console.log('[Prolific] onAuthStateChanged matched, user.uid =', user.uid, '- requesting ID token...');
    user.getIdToken(true).then(async (idToken) => {
      console.log('[Prolific] Got ID token, calling processProlificUser...');
      prolificUserConfig.token = idToken;
      // console.log(`Auth Token: ${idToken}`);
      await processProlificUser(prolificUserConfig)
        .then(async (res) => {
          console.log('res:', res);
          if (
            (await res.data.status) == 'success' ||
            (await res.data.message) == 'session entry already exists'
          ) {
            ENV.ProlificId = prolificUserConfig.pid;
            ENV.StudyId = prolificUserConfig.studyId;
            ENV.SessionId = prolificUserConfig.sessionId;
            ENV.CompletionCode = prolificUserConfig.completionCode;
            ENV.ExternalSubjectId = ENV.ProlificId;
            ENV.Subject = ENV.ProlificId;
            localStorage.setItem('Agent', ENV.ProlificId);
            DATA_SAVEPATH = `/mkturkfiles_prolific/userfiles/${ENV.ProlificId}/data/`;
            PARAM_DIRPATH = `/mkturkfiles_prolific/userfiles/${ENV.ProlificId}/params/`;
            FIRESTORECOLLECTION.DATA = 'prolificdata';
            const tag = document.createElement('script');
            tag.src = 'index.js';
            document.getElementsByTagName('body')[0].appendChild(tag);
          }
        })
        .catch((error) => {
          console.error(`[processProlificUser] Error: ${error}`);
        });
    }).catch((error) => {
      console.error('[Prolific] getIdToken Error:', error);
    });
  } else {
    storageRef
      .child(PARAM_DIRPATH)
      .listAll()
      .then((res) => {
        res.items
          .slice()
          .reverse()
          .forEach((itemRef) => {
            let subjectName = itemRef.name.split('_')[0];
            if (subjectName) {
              subjectlist.push(subjectName);
            }
          });
        let subjectlistobj = document.getElementById('subjectID_select');
        for (let i = subjectlist.length - 1; i >= 0; i--) {
          let opt = document.createElement('option');
          opt.value = i;
          opt.innerHTML = subjectlist[i];
          subjectlistobj.appendChild(opt);
        }
        const tag = document.createElement('script');
        tag.src = 'index.js';
        document.getElementsByTagName('body')[0].appendChild(tag);
      })
      .catch((err) => {
        console.error('error:', err);
      });
  }
});

function firebaseRedirectSignIn() {
  // Sign out then re-authenticate via popup (avoids redirect loop issues)
  auth.signOut().then(() => {
    auth.signInWithPopup(provider)
      .catch((err) => console.error('[Popup Sign-In Error]:', err));
  });
}