const storage = firebase.storage();
const storageRef = storage.ref();

const rtdb = firebase.database();
var db = firebase.firestore();

async function populateFileList(elem) {
try {
    let fileList = await getFileList(mkeye.file.path);

    fileList.sort((a, b) => {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();

      if (nameA > nameB) { return -1; }
      if (nameA < nameB) { return 1; }

      return 0;
    });

    mkeye.file.list = fileList;

    for (let i = 0; i < fileList.length; i++) {
      let opt = document.createElement('option');
      opt.value = i.toString();
      opt.innerHTML = fileList[i].name;
      elem.appendChild(opt);
    }

    mkeye.file.name = mkeye.file.list[0].fullpath;
    mkeye.file.fileChanged = true;
    let rawStorageFile = await getStorageFile(mkeye.file.name);

    processData(rawStorageFile);
  } catch (error) {
    console.error('ERROR #file-list:', error);
  }
}//FUNCTION populateFileList(elem)

async function getFileList(path, ext) {
  let fileList = await storageRef.child(path).listAll();
  /* only keep files within the last 6 months*/
  let year = new Date().getFullYear();
  let month = new Date().getMonth();
  let files = [];

  for (let item of fileList.prefixes) {
    let subFileList = (
      await this.getFileList(path + item.name + '/', ext)
    );
    files = [...files, ...subFileList];
  }//FOR items

  for (let i = 0; i < fileList.items.length; i++) {
    if (typeof(ext) == 'string') {
      if (fileList.items[i].name.endsWith(ext)) { // if file extension is correct
        files.push({
          fullpath: fileList.items[i].fullPath,
          name: fileList.items[i].name
        });
      }
    } else{
        let year_file = parseInt(fileList.items[i].name.slice(0, 4));
        let month_file = parseInt(fileList.items[i].name.slice(5,7));
        if ( (year_file*12 + month_file) >= (year*12 + month - 6) ) {
          files.push({
            fullpath: fileList.items[i].fullPath,
            name: fileList.items[i].name
          });
        }//ELSE IF within last 6 months
    }//ELSE
  }//FOR i fileList.items

  return files;
}//FUNCTION getFileList(path)

async function getStorageFile(path) {
  let fileRef = storageRef.child(path);
  // console.log('fileRef:', fileRef);
  let file = await storageRef.child(path).getDownloadURL().then(async (url) => {
    let response = await fetch(url);
    return response.json();
  }).catch(e => {
    console.error('Error Getting URL:', e);
  });
processData(file)
  return file;
}//FUNCTION getStorageFile(path)

async function getStorageFileMetadata(path) {
  let fileRef = storageRef.child(path);
  let metadata = await fileRef.getMetadata();
  return metadata;
}//FUNCTION getStorageFileMetadata

async function processData(data) {
  mkeye.data = data;

  //----- Store EffectorXY data more efficiently
  if (typeof(mkeye.data.TIMEEVENTS.EffectorXY) != 'undefined'){
    mkeye.data.TIMEEVENTS.EffectorXY = convertToInt16Array(mkeye.data.TIMEEVENTS.EffectorXY);
  }//IF EffectorXY

  //----- Bounding Boxes Sample & Test Objects
  mkeye.boundingBoxes.sample = getObjectBoundingBoxes(mkeye.data.SCENES.SampleScenes);
  mkeye.boundingBoxes.test = getObjectBoundingBoxes(mkeye.data.SCENES.TestScenes)

  //----- Bounding Boxes Fixation, SampleFixation
  let fixRad
  let sampleFixRad
  if (mkeye.data.TASK.FixationWindowSizeInches > 0){
    fixRad = mkeye.data.ENV.FixationWindowRadius
    sampleFixRad = mkeye.data.ENV.FixationWindowRadius
  }
  else{
    fixRad = mkeye.data.ENV.FixationRadius
    sampleFixRad = 0
  }
  for (var i=0; i<=mkeye.data.TRIALEVENTS.FixationGridIndex.length-1; i++){
    mkeye.boundingBoxes.fixation.bb[i] = [ convertToBB( mkeye.data.TRIALEVENTS.FixationGridIndex[i], fixRad) ]
    mkeye.boundingBoxes.fixation.name[i] = [ mkeye.data.TRIALEVENTS.FixationGridIndex[i] ]

    if ( typeof(mkeye.data.TRIALEVENTS.SampleGridIndex[0]) != 'undefined' ){
      mkeye.boundingBoxes.samplefixation.bb[i] = [ convertToBB( mkeye.data.TRIALEVENTS.SampleGridIndex[i], sampleFixRad) ]
      mkeye.boundingBoxes.samplefixation.name[i] = [ mkeye.data.TRIALEVENTS.SampleGridIndex[i] ]
    }//IF samplegrid exists
  }//FOR i trials

  //----- Bounding Boxes Choice
  mkeye.boundingBoxes.choice.bb[0]=[];
  mkeye.boundingBoxes.choice.name[0]=[];
  for (let i=0; i<=mkeye.data.TASK.ChoiceGridIndex.length-1; i++){
    mkeye.boundingBoxes.choice.bb[0][i] = convertToBB(mkeye.data.TASK.ChoiceGridIndex[i], mkeye.data.ENV.ChoiceRadius)
    if (i==0){
      mkeye.boundingBoxes.choice.name[0][i] = 'Same_circle'
    }
    else if (i==1){
      mkeye.boundingBoxes.choice.name[0][i] = 'Different_square'
    }
  }//FOR i choices

  //----- Create a TestGridIndex (complements FixationGridIndex & SampleGridIndex)
  mkeye.data.TRIALEVENTS.TestGridIndex = [];
  if (mkeye.data.TASK.RewardStage > 0 ){
    if (mkeye.data.TASK.NRSVP<=0){
      let correctchoice = mkeye.data.TRIALEVENTS.CorrectItem
      let testgridindices = mkeye.data.TASK.TestGridIndex
      for (let i=0; i<=correctchoice.length-1; i++){
        mkeye.data.TRIALEVENTS.TestGridIndex[i] = testgridindices[correctchoice[i]]
      }//FOR i trials
    }//IF choice task
    else if (mkeye.data.TASK.NRSVP>0){
      mkeye.data.TRIALEVENTS.SampleFixationXYT = mkeye.data.TRIALEVENTS.ResponseXYT
      mkeye.data.TRIALEVENTS.ResponseXYT = [];
    }//ELSE IF RSVP
  }//IF not fixation only task

  // loadDataToEditor(mkeye.data);
  // console.log(this.file.data);

  let metadata = await getStorageFileMetadata(mkeye.file.name);
  console.log('Success! Loaded File Size:', metadata.size / 1000, 'KB');
  mkeye.file.ver = metadata.generation;
  mkeye.file.dateSaved = new Date(metadata.updated);
  console.log(mkeye.file.dateSaved);

  if (mkeye.file.fileChanged) {
    initializeFirestoreCallbacks();
    initializeRTDBCallbacks();
    initializeChartData();
    checkFileStatus();
    mkeye.file.fileChanged = false;
    mkeye.dataChanged = false;
  } else if (mkeye.dataChanged) {
    updateCharts();
    mkeye.dataChanged = false;
    checkFileStatus();
  }
}//FUNCTION processData(data)

//FIRESTORE DATABASE (calibration parameters)
function initializeFirestoreCallbacks(){
  if (typeof(unsubscribeFirestore) != 'undefined'){
    unsubscribeFirestore()
  }//IF previous callback exists, detach listener
  unsubscribeFirestore = db.collection("eyecalibrations").doc(mkeye.data.TASK.Agent)
      .onSnapshot((doc) => {
        mkeye.calib.xparam = doc.data().CalibXTransform;
        mkeye.calib.yparam = doc.data().CalibYTransform;

        updateManualCalibGUI()
    });//listener
}//FUNCTION initializeFirestoreCallbacks()

function uploadCalibrationToFirestore(){
  db.collection("eyecalibrations").doc(mkeye.data.TASK.Agent).set(
    {
      Doctype: 'calibration',
      //General
      Agent: mkeye.data.TASK.Agent,
      ResearcherID: 'mkeye', //XX'ENV.ResearcherID',
      ResearcherDisplayName: 'mkeye', //XXENV.ResearcherDisplayName,
      CurrentDate: new Date(),
      CurrentDateValue: new Date().valueOf(),
      Docname: mkeye.data.TASK.Agent,
      Taskdoc: 'mkeye_manual',
      //Calib specific
      CalibXTransform: mkeye.calib.xparam,
      CalibYTransform: mkeye.calib.yparam,
      CalibType: 'linear',
      NCalibPointsTrain: 0,
      NCalibPointsTest: 0,
      CalibTrainMSE: null, //XX
      CalibTestMSE: null, //XX
    }
  ).then(function () {
    console.log('FIRESTORE: Wrote manual EyeCalibration');
  })
  .catch(function (error) {
    console.error('FIRESTORE: !Error creating eye calibration doc: ', error);
  });
}//FUNCTION writeCalibrationToFirestore

//REALTIME DATABASE (effector tracking)
function initializeRTDBCallbacks(){
  rtdb.ref(`instances/${mkeye.data.TASK.Agent}`).on('value', (snap) => {
    mkeye.live.trial = snap.val().trialnum
    mkeye.live.filename = snap.val().filename
    mkeye.live.performance = snap.val().performance
  })//ON CALLBACK for mkturk instances

  rtdb.ref(`data/${mkeye.data.TASK.Agent}`).on('value', (snap) => {
    if (typeof(mkeye.realtimescatter != "undefined")){
      mkeye.realtimescatter.update(snap.val())

      mkeye.live.x = snap.val().x
      mkeye.live.y = snap.val().y
      mkeye.live.boundingBoxes = snap.val().boundingBoxes
      mkeye.live.meta = snap.val().meta
      mkeye.live.timestamp = new Date(snap.val().timestamp)
    }//IF plot initialized
  })//ON CALLBACK for effector data
}//FUNCTION initializeRTDBCallbacks()

function getObjectBoundingBoxes(scenes){
  let allbb = { bb: [], name: [] }
  let stimind = 0
  for (let i=0; i<=scenes.length-1; i++){
    stimind = allbb.bb.length;

    //Prepend background images bounding box
    for (let j=0; j<=scenes[i].IMAGES.boundingBoxCube2DPixels.length-1; j++){
      allbb.bb[ stimind + j ] = []
      allbb.name[ stimind + j ] = []

      if ( typeof(scenes[i].IMAGES.boundingBoxCube2DPixels[0][0]) == 'undefined' ){
        continue
      }//IF no bounding boxes available because screen not used in task

      if (scenes[i].IMAGES.boundingBoxCube2DPixels[j][0] == null){
        allbb.bb[ stimind + j ].push( [null, null, null, null] )
        allbb.name [ stimind + j ].push('no image')
      }
      else{
        allbb.bb[ stimind + j ].push(
                  [...scenes[i].IMAGES.boundingBoxCube2DPixels[j][0].x,
                   ...scenes[i].IMAGES.boundingBoxCube2DPixels[j][0].y])
        allbb.name[ stimind + j ].push('backgroundimage')
      }
    }//FOR j images

    for (let obj in scenes[i].OBJECTS){
      if (typeof(scenes[i].OBJECTS[obj].boundingBox2DPixels[0][0]) == 'undefined'){
        continue
      }//IF no bounding boxes available because screen not used in task

      for (let j=0; j<=scenes[i].OBJECTS[obj].boundingBox2DPixels.length-1; j++){
        if ( scenes[i].OBJECTS[obj].visible[j] == 0){
          allbb.bb[ stimind + j ].push( [null, null, null, null] )
          allbb.name [ stimind + j ].push('no ' + obj)  
        }
        else{
          allbb.bb[ stimind + j ].push( [...scenes[i].OBJECTS[obj].boundingBox2DPixels[j][0].x, 
            ...scenes[i].OBJECTS[obj].boundingBox2DPixels[j][0].y ] )
          allbb.name[ stimind + j ].push(obj)
        }
      }//FOR j images
    }//FOR obj
  }//FOR i scenes
  return allbb
}//FUNCTION getObjectBoundingBoxes(scenes)

function convertToInt16Array(data){
  for (let outerKey in data){
    for (let innerKey in data[outerKey]){
      //Object.values: converts object entries to array
      //Int16Array: converts array to int16
      data[outerKey][innerKey] = new Int16Array( Object.values( data[outerKey][innerKey] ) )
    }//FOR innerKey
  }//FOR outerKey
  return data
}//FUNCTION convertToInt16Array(data)

function fileSelectionChangedListener(elem) {
  elem.addEventListener('input', (evt) => {
    evt.stopPropagation();
    evt.preventDefault();
    mkeye.file.name = mkeye.file.list[parseInt(elem.value)].fullpath;
    mkeye.file.fileChanged = true;
  });
}//FUNCTION fileSelectionChangedListener(elem)

async function checkFileStatus() {
  try {
    let metadata = await getStorageFileMetadata(mkeye.file.name);

    if (mkeye.file.ver != metadata.generation) {
      mkeye.file.ver = metadata.generation;
      mkeye.file.dateSaved = new Date(metadata.updated);
      console.log(mkeye.file.dateSaved);
      mkeye.dataChanged = true;
      console.log('File was updated ver=' + mkeye.file.ver);
    } else {
      mkeye.dataChanged = false;
    }

    if (mkeye.file.fileChanged == true || mkeye.dataChanged == true) {
      let rawStorageFile = await getStorageFile(mkeye.file.name);
      processData(rawStorageFile);
    } else {
      setTimeout(() => { checkFileStatus(); }, 1000);
    }
  } catch (error) {
    console.error('checkFileStatus Error:', error);
  }
  return false; // why needed
}//FUNCTION checkFileStatus()

function saveEyeCalibrationtoFirestore(
  xparams,yparams,calibtype,
  ntrain,trainmse,ntest,testmse)
{
  db.collection(FIRESTORECOLLECTION.CALIBRATION)
    .doc(ENV.Subject)
    .set({
      Doctype: 'calibration',
      //General
      Agent: ENV.Subject,
      ResearcherID: ENV.ResearcherID,
      ResearcherDisplayName: ENV.ResearcherDisplayName,
      CurrentDate: ENV.CurrentDate,
      CurrentDateValue: ENV.CurrentDate.valueOf(),
      Docname: ENV.Subject,
      Taskdoc: ENV.FirestoreDocRoot + '_task',
      //Calib specific
      CalibXTransform: xparams,
      CalibYTransform: yparams,
      CalibType: calibtype,
      NCalibPointsTrain: ntrain,
      NCalibPointsTest: ntest,
      CalibTrainMSE: trainmse,
      CalibTestMSE: testmse,
    }) //link docs
    .then(function () {
      console.log('FIRESTORE: New EyeCalibration');
    })
    .catch(function (error) {
      console.error('FIRESTORE: !Error creating eye calibration doc: ', error);
    });
}//FUNCTION saveEyeCalibrationtoFirestore


function convertToBB(gridind,rad){
  let xcent = mkeye.data.ENV.XGridCenter[ gridind ]
  let ycent = mkeye.data.ENV.YGridCenter[ gridind ]
  return [ xcent-rad, xcent+rad, ycent-rad, ycent+rad]
}//FUNCTION convertToBB