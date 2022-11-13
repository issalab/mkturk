//============== INITIALIZE VARIABLES
const DATA_PATH = 'mkturkfiles/datafiles/';
const DATA_REF = storageRef.child(DATA_PATH);
const PARAM_PATH = 'mkturkfiles/parameterfiles/subjects/';
const PARAM_REF = storageRef.child(PARAM_PATH);

var mkeye = {}
mkeye.file ={
  path: DATA_PATH,
  list: [],
  // name: 'mkturkfiles/datafiles/Eliaso/2022-11-03T11:34:33_Eliaso.json', //15.8MB
  name: '/mkturkfiles/datafiles/Eliaso/2022-11-09T14:40:17_Eliaso.json',
  ver: null,
  date: null,
  dataChanged: false,
  fileChanged: true,
}//file
mkeye.data = []
mkeye.boundingBoxes = { fixation: {'bb': [], 'name': []},
                        sample: {'bb': [], 'name': []},
                        samplefixation: {'bb': [], 'name': [] },
                        test: {'bb': [], 'name': []},
                        choice: {'bb': [], 'name': []}
                      }//boundingBoxes
mkeye.stats = {
  agent: null,
  pctCorrect: 0,
  trials: 0,
  effector: '',
}//stats
mkeye.colors = { grid: [],
   fixation: 'rgb(50,50,200)',
   samplefixation: 'rgb(200,200,100)',
   sample: 'rgb(200,50,50)',
   test: 'rgb(50,200,50)',
   choice: 'rgb(100,100,100)',
   realtime: 'rgb(50,50,200)',
   realtime_manual: 'rgb(120,120,255)',
   realtime_bb: 'rgb(0,0,0)'
}//colors
mkeye.scatters = [];
mkeye.line = [];

mkeye.live = {
  trial: null,
  filename: null,
  performance: null,
  x: null,
  y: null,
  boundingBoxes: [],
  meta: '',
  timestamp: new Date().toJSON(),
}//live data from realtime database

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