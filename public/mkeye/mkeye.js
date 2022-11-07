//============== INITIALIZE VARIABLES
const DATA_PATH = 'mkturkfiles/datafiles/';
const DATA_REF = storageRef.child(DATA_PATH);
const PARAM_PATH = 'mkturkfiles/parameterfiles/subjects/';
const PARAM_REF = storageRef.child(PARAM_PATH);

var mkeye = {}
mkeye.file ={
  path: DATA_PATH,
  list: [],
  // name: 'mkturkfiles/datafiles/Eliaso/2022-11-02T20:58:51_Eliaso.json',
  // name: 'mkturkfiles/datafiles/Eliaso/2022-11-03T11:34:33_Eliaso.json', //15.8MB
  // name: 'mkturkfiles/datafiles/Eliaso/2022-11-04T14:41:07_Eliaso.json',
  // name: 'mkturkfiles/datafiles/Eliaso/2022-11-07T00:29:48_Eliaso.json',
  // name: 'mkturkfiles/datafiles/Eliaso/2022-11-07T04:29:41_Eliaso.json',
  name: 'mkturkfiles/datafiles/Eliaso/2022-11-07T05:16:52_Eliaso.json',
  ver: null,
  date: null,
  dataChanged: false,
  fileChanged: true,
};
mkeye.data = []
mkeye.stats = {
  agent: null,
  pctCorrect: 0,
  trials: 0,
};
mkeye.colors = { 'grid': [] }
mkeye.scatters = [];

let fileListSelector = document.querySelector('#file-list');
//============== (END) INITIALIZE VARIABLES

//============== KICK-OFF MKEYE =================//
//Overarching Logic:
// (open mkeye) --> populateFileList --> (getFileList, getStorageFile) --> processData
// (listen for file || data changes) --> processData
// processData --> (flattenData, getStorageFileMetadata) --> (initializeCharts+updatePlots || updatePlots)
fileSelectionChangedListener(fileListSelector);//adds listener to dom element
// populateFileList(fileListSelector);
getStorageFile(mkeye.file.name)

let provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
firebase.auth().getRedirectResult().then(function(result) {
  if (result.user) {
    // User just signed in. you can get the result.credential.
	  console.log('Sign-In Redirect Result, USER ' + result.user.email + ' is signed in')
  }
  else if (firebase.auth().currentUser) {
    // User already signed in.
	  console.log('Sign-In Redirect Result, USER is signed in')
  }
  else {
    // No user signed in, update your UI, show the redirect sign-in screen.
	  firebase.auth().signInWithRedirect(provider)
  }
});//FIREBASE.auth