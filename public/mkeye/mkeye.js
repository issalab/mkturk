//============== INITIALIZE VARIABLES
const DATA_PATH = 'mkturkfiles/datafiles/';
const DATA_REF = storageRef.child(DATA_PATH);
const PARAM_PATH = 'mkturkfiles/parameterfiles/subjects/';
const PARAM_REF = storageRef.child(PARAM_PATH);

var mkeye = {}
mkeye.file ={
  path: DATA_PATH,
  list: [],
  name: '',
  ver: null,
  date: null,
  dataChanged: false,
  fileChanged: false,
};

mkeye.stats = {
  agent: null,
  pctCorrect: 0,
  trials: 0,
};
let fileListSelector = document.querySelector('#file-list');
//============== (END) INITIALIZE VARIABLES

//============== KICK-OFF MKEYE =================//
//Overarching Logic:
// (open mkeye) --> populateFileList --> (getFileList, getStorageFile) --> processData
// (listen for file || data changes) --> processData
// processData --> (flattenData, getStorageFileMetadata) --> (initializeCharts+updatePlots || updatePlots)
fileSelectionChangedListener(fileListSelector);//adds listener to dom element
populateFileList(fileListSelector);

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


const labels = ['January', 'February', 'March', 'April', 'May','June',];

const data = {
  labels: labels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {}
};

const myChart = new Chart( document.getElementById('myChart'), config );