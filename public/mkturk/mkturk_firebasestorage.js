//------------- LOAD JSON TEXT --------------//
async function loadTextfromFirebase(textfile_path) {
  // console.log('textfile_path', textfile_path);
  var textfileRef = storage.ref().child(textfile_path);
  // console.log('textfile ref:', textfileRef);
  let url = await textfileRef.getDownloadURL();
  // console.log('url:', url);
  let response = await fetch(url);
  return response.json();
} //ReadFromFirebase

//------------- LOAD IMAGE AS IMAGE or AS TEXTURE --------------//
async function loadImagefromFirebase(imagefile_path){
if (FLAGS.usecanvas2D){
  try{
    var imagefileRef = await storage.ref().child(imagefile_path)
    var url = await imagefileRef.getDownloadURL()
    .catch((error) => console.log(error));

    return new Promise(
      function(resolve, reject){
        try {
          var image = new Image(); 
          image.crossOrigin = "Anonymous"; //to allow saving of a 'tainted canvas', see https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image
          image.onload = function(){
            updateImageLoadingAndDisplayText('Loaded: ' + imagefile_path)
            console.log('Loaded IMG: ' + imagefile_path)
            resolve(image)        
          }
          image.src = url
        } //TRY
        catch (error){
          console.log(error)
        } //CATCH
      }
    ) //Promise
  }
  catch (error){
    console.log(error)
  }  
} //IF 2D canvas
else if (FLAGS.usecanvas2D == 0){
  try {
    var texturefileRef = await storage.ref().child(imagefile_path);
    var url = await texturefileRef
      .getDownloadURL()
      .catch((error) => console.log(error));

    var loader = new THREE.TextureLoader();
    loader.crossOrigin = true;
    return new Promise(function (resolve, reject) {
      try {
        loader.load(url, function (texture) {
          resolve(texture);
          texture.encoding = THREE.sRGBEncoding;
        });
      } catch (error) {
        console.log(error);
      } //catch
    }); // Promise
  } catch (error) {
    console.log(error);
  }
}//ELSEIF 3D canvas
} //LOADIMAGEFROMFIREBASE

//------------- LOAD MESH --------------//
async function loadMeshfromFirebase(meshfile_path) {
  //file ext = gltf or obj
  try {
    var meshfileRef = await storage.ref().child(meshfile_path);
    var url = await meshfileRef
      .getDownloadURL()
      .catch((error) => console.log(error));

    var strs = meshfile_path.split('.');
    var ext = strs[1];

    if (ext == 'gltf' || ext == 'glb') {
      var loader = new THREE.GLTFLoader();

      return new Promise(function (resolve, reject) {
        try {
          loader.load(url, function (gltfmesh) {
            resolve(gltfmesh);
          });
        } catch (error) {
          //try
        } //catch
      }); //promise
    } //gltf loader
    else if (ext == 'obj') {
      var loader = new THREE.OBJLoader();

      return new Promise(function (resolve, reject) {
        try {
          loader.load(url, function (objmesh) {
            resolve(objmesh);
          });
        } catch (error) {
          //try
        } //catch
      }); //promise
    } // obj loader
  } catch (error) {
    console.log(error);
  }
} //FUNCTION loadMeshFromFirebase

async function loadMeshArrayfromFirebase(meshfile_pathlist) {
  try {
    var object_requests = meshfile_pathlist.map(loadMeshfromFirebase);
    console.log('FIREBASE: buffering ' + meshfile_pathlist.length + ' objects');
    var tstart = performance.now();
    var object_array = await Promise.all(object_requests)
      .catch(function (error) {
        console.log(error);
      })
      .then();

    return object_array;
  } catch (err) {
    console.log(err);
  }
} //FUNCTION loadMeshArrayfromFirebase

//------------- GET METADATA --------------//
async function getFileMetadataFirebase(file_path) {
  return await storage.ref().child(file_path).getMetadata();
  // Even without Object Versioning enabled, all Cloud Storage objects have generation numbers and meta-generation numbers.
  // GENERATION: The generation number changes each time the object is overwritten, and the meta-generation number changes each time the object's metadata is updated.
  // MD5HASH: A Base64-encoded MD5 hash of the object being uploaded.
  // https://firebase.google.com/docs/reference/js/firebase.storage.FullMetadata.html
}

async function getFileListRecursiveFirebase(dir, ext) {
  var fileList = await storage.ref().child(dir).listAll();

  var files = [];
  for (const item of fileList.prefixes) {
    var subfileList = await getFileListRecursiveFirebase(
      dir + item.name + '/',
      ext
    );
    files = [...files, ...subfileList];
  }
  for (i = 0; i <= fileList.items.length - 1; i++) {
    if (typeof ext == 'string') {
      if (fileList.items[i].name.endsWith(ext)) {
        files.push(dir + fileList.items[i].name);
      } //if correct file extension
      else {
        // file does not have requested extension
      }
    } else {
      files.push(dir + fileList.items[i].name);
    } //if file extension required
  }
  return files;
} //recursviely accumulate files from subfolders (if any)

async function getFileListFirebase(dir) {
  // returns an array of size 6, each of them corresponds to each side of a cube
  // if there's no folder corresponding to the cube's sides, or if the folder has fewer images than other folders,
  // place an empty string

  var folderList = await storage.ref().child(dir).listAll();
  var availableFolders = [];
  for (var i = 0; i <= folderList.prefixes.length - 1; i++) {
    availableFolders.push(folderList.prefixes[i].name);
  }

  var cubeSides = ['zfront', 'zback', 'ytop', 'ybottom', 'xright', 'xleft'];

  // get the maximum number of files across folders

  var max_num_files = 0;
  var allfiles = [];
  for (var side of cubeSides) {
    if (availableFolders.includes(side)) {
      var subfileList = await storage
        .ref()
        .child(dir + side + '/')
        .listAll();
      var subfiles = [];
      for (var i = 0; i <= subfileList.items.length - 1; i++) {
        subfiles.push(subfileList.items[i].name);
      }
      allfiles.push(subfiles);
      max_num_files = Math.max(max_num_files, subfileList.items.length);
    } else {
      allfiles.push([]);
    }
  }

  var files = new Array(max_num_files);

  for (var j = 0; j < max_num_files; j++) {
    // change index to a string
    files[j] = ['', '', '', '', '', ''];

    for (var side of cubeSides) {
      var subfiles = allfiles[cubeSides.indexOf(side)];
      if (subfiles.length > 0 && subfiles[j] != null) {
        files[j][cubeSides.indexOf(side)] = dir + side + '/' + subfiles[j];
      } else {
        files[j][cubeSides.indexOf(side)] = '';
      }
    }
  }

  return files;
} // create a nested array of files

//======================================//
//======================================//

//------- NON-ATOMIC OPERATIONS -------//

//------- LIST IMAGES FROM MULTIPLE FOLDERS -------//
async function loadImageBagPathsParallelFirebase(imagebagroots) {
  if (FLAGS.usecanvas2D){
    var imagepath_promises = imagebagroots.map(file => getFileListRecursiveFirebase(file,'.png')); //create array of recursive path load Promises  
  }
  else if (!FLAGS.usecanvas2D){
    var imagepath_promises = imagebagroots.map((file) =>
      getFileListFirebase(file)
    ); // returns a nested array of paths for the backgroundCube  
  }

  var funcreturn = await Promise.all(imagepath_promises);
  //Assemble images and add labels
  var bagitems_paths = []; // Can also be paths to a single .png file.
  var bagitems_labels = []; // The labels are integers that index elements of imagebagroot_s. So, a label of '0' means the image belongs to the first imagebag.
  for (var i = 0; i <= funcreturn.length - 1; i++) {
    bagitems_paths.push(...funcreturn[i]);
    for (var j = 0; j <= funcreturn[i].length - 1; j++) {
      bagitems_labels.push(i);
    }
  } //for i labels

  return [bagitems_paths, bagitems_labels];
}

async function loadImageArrayfromFirebase(imagepathlist) {
  try {
    var MAX_SIMULTANEOUS_REQUESTS = 2600; // Need to empirically test GCS API's download request limit in a "short" amount of time.
    var MAX_TOTAL_REQUESTS = 5200; // Not empirically tested yet

    if (imagepathlist.length > MAX_TOTAL_REQUESTS) {
      throw (
        'Under the Firebase Cloud Storage API, cannot load more than ' +
        MAX_TOTAL_REQUESTS +
        ' images at a short time period. You have requested ' +
        imagepathlist.length +
        '. Consider using an image loading strategy that reduces the request rate on Google Cloud Storage.'
      );
      return;
    }
    if (imagepathlist.length == 0){
      return []
    }

    if (imagepathlist.length > MAX_SIMULTANEOUS_REQUESTS) {
      console.log(
        'FIREBASE: Chunking your ' + imagepathlist.length +
          ' image requests into ' + Math.ceil(imagepathlist.length / MAX_SIMULTANEOUS_REQUESTS) +
          ' chunks of (up to) ' + MAX_SIMULTANEOUS_REQUESTS + ' each. '
      );
      var image_array = [];

      for (var i = 0; i < Math.ceil(imagepathlist.length / MAX_SIMULTANEOUS_REQUESTS); i++)
      {
        var lb = i * MAX_SIMULTANEOUS_REQUESTS;
        var ub = i * MAX_SIMULTANEOUS_REQUESTS + MAX_SIMULTANEOUS_REQUESTS;
        var partial_pathlist = imagepathlist.slice(lb, ub);

        var partial_image_requests = [];
        for (var j = 0; j < partial_pathlist.length; j++) {
          partial_image_requests.push(
            loadImagefromFirebase(partial_pathlist[j])
          );
        }

        var partial_image_array = await Promise.all(partial_image_requests);
        image_array.push(...partial_image_array);
      }
    } else {
      // If number of images is less than MAX_SIMULTANEOUS_REQUESTS, request them all simultaneously:
      for (var i = 0; i < 3; i++) {
        var image_requests = imagepathlist.map(loadImagefromFirebase);

        console.log('FIREBASE: Buffering ' + imagepathlist.length + ' images');
        var tstart = performance.now();
        var image_array = await Promise.all(image_requests)
          .catch(function (error) {
            console.log(error);
          })
          .then();

        var load_success = 1;
        for (var j = 0; j < image_array.length; j++) {
          if (image_array[j].src == 'failed') {
            load_success = 0;
          }
        }

        if (load_success == 1) {
          imageloadingtimestr =
            imageloadingtimestr +
            image_array.length +
            ' images in ' +
            Math.round((100 * (performance.now() - tstart)) / 1000) / 100 +
            ' seconds, ';
          updateImageLoadingAndDisplayText(' ');
          break;
        } else if (load_success <= 0) {
          await timeout(i * 250);
          console.log(
            'FIREBASE: RETRYING IMAGE LOAD for ' + i + 'th time!!!!!'
          );
        }
      } //for 3 retry attempts
    }
    return image_array;
  } catch (err) {
    console.log(err);
  }
} //loadImageArrayfromFirebase

//------------- CHECK PARAMS VERSION --------------//
async function checkParameterFileStatusFirebase() {
  try {
    var filemeta = await getFileMetadataFirebase(ENV.ParamFileName);
    if (ENV.ParamFileRev != filemeta.generation) {
      ENV.ParamFileRev = filemeta.generation;
      ENV.ParamFileDate = new Date(filemeta.updated);

      FLAGS.need2loadParameters = 1;
      updateEventDataonFirestore(EVENTS);

      console.log(
        'FIREBASE: Parameter file on disk was changed. New rev =' +
          ENV.ParamFileRev
      );
    } //if file updated
  } catch (error) {
    //try
    console.log('FIREBASE getmeta: ' + error);
  } //catch
}

//------------- LOAD PARAMS --------------//
async function loadParametersfromFirebase(paramfile_path) {
  try {
    data = await loadTextfromFirebase(paramfile_path);
    TASK = {};
    TASK = data;
    if (TASK.Species == 'model') {
      TASK.PunishTimeOut = 0;
    }
    await loadAgentRFIDfromFirestore(ENV.Subject, TASK.Species);

    var filemeta = await getFileMetadataFirebase(paramfile_path);
    ENV.ParamFileName = '/' + filemeta.fullPath;
    ENV.ParamFileRev = filemeta.generation;
    ENV.ParamFileDate = new Date(filemeta.updated);

    // FIXATION SCREEN OPTIONS
    if (typeof TASK.FixationDotSizeInches == 'undefined'){TASK.FixationDotSizeInches = 0;}
    if (typeof TASK.FixationDuration == 'undefined'){TASK.FixationDuration = 0;}
    if (typeof TASK.NFixations == 'undefined'){TASK.NFixations = 1;}
    if (typeof TASK.FixationUsesSample == 'undefined'){TASK.FixationUsesSample = 0;}
    if (typeof TASK.FixationTimeOut == 'undefined'){TASK.FixationTimeOut = 3000;}
    if (typeof TASK.FixationOutsideGracePeriod == 'undefined'){TASK.FixationOutsideGracePeriod = 0}

    // TASK OPTONS
    if (typeof TASK.RewardStage == 'undefined'){TASK.RewardStage = 0;}
    if (typeof TASK.NRSVP == 'undefined'){TASK.NRSVP = 0;}
    if (typeof TASK.SameDifferent == 'undefined'){TASK.SameDifferent = 0;}
    if (typeof TASK.VisualSearch == 'undefined'){TASK.VisualSearch = 0;}

    // SAMPLE SCREEN
    if (typeof TASK.SampleGridIndex == 'undefined'){TASK.SampleGridIndex = 0;}
    if (typeof TASK.SamplePRE == 'undefined'){TASK.SamplePRE = 0;}
    if (typeof TASK.SampleOFF == 'undefined'){TASK.SampleOFF = 0;}
    if (typeof TASK.SampleOutsideGracePeriod == 'undefined'){TASK.SampleOutsideGracePeriod = 0}
    if (typeof TASK.ImageBagsSample == 'undefined'){
      TASK.ImageBagsSample = [
        "/mkturkfiles/scenebags/objectome3d/camel/20200709_camel_token.js",
        "/mkturkfiles/scenebags/objectome3d/wrench/20200709_wrench_token.js"
    ]}

    // TEST SCREEN
    if (typeof TASK.ImageBagsTest == 'undefined'){
      TASK.ImageBagsTest = [
        "/mkturkfiles/scenebags/objectome3d/camel/20200709_camel_token.js",
        "/mkturkfiles/scenebags/objectome3d/wrench/20200709_wrench_token.js"
    ]}
    if (typeof TASK.TestGridIndex == 'undefined'){ 
      if (TASK.ImageBagsTest.length == 1){
        TASK.TestGridIndex = [0]        
      }
      else{
        TASK.TestGridIndex = [0,1]
      }//ELSE 2-way task using first two gridpoints
    }
    if (typeof TASK.ObjectGridIndex == 'undefined'){TASK.ObjectGridIndex = [];}
    if (typeof TASK.TestOFF == 'undefined'){TASK.TestOFF = 0;}
    if (typeof TASK.KeepSampleON == 'undefined'){TASK.KeepSampleON = 0;}

    // CHOICE SCREEN
    if (typeof TASK.ChoiceGridIndex == 'undefined'){TASK.ChoiceGridIndex = [0,1];}
    if (typeof TASK.ChoiceSizeInches == 'undefined'){TASK.ChoiceSizeInches = 1;}
    if (typeof TASK.KeepTestON == 'undefined'){TASK.KeepTestON = 0;}

    if (typeof TASK.ChoiceTimeOut == 'undefined'){TASK.ChoiceTimeOut = 5000;}
    if (typeof TASK.HideChoiceDistractors == 'undefined'){TASK.HideChoiceDistractors = 0;}
    if (typeof TASK.ChoiceOutsideGracePeriod == 'undefined'){TASK.ChoiceOutsideGracePeriod = TASK.ChoiceTimeOut+1}

    // SAMPLING STRATEGY
    if (typeof TASK.SamplingStrategy == 'undefined'){ TASK.SamplingStrategy = 'uniform_without_replacement'; }
    if (typeof TASK.NStimuliPerBagBlock == 'undefined'){ TASK.NStimuliPerBagBlock = 0; }

    // RESPONSE
    if (typeof TASK.Target == 'undefined'){TASK.Target = 'object';}
    if (typeof TASK.FixationWindowSizeInches == 'undefined'){TASK.FixationWindowSizeInches = 0;}
    if (typeof TASK.NStickyResponse == 'undefined' || TASK.ImageBagsTest.length <= 1){TASK.NStickyResponse = 0;}
    if (typeof TASK.BlinkGracePeriod == 'undefined'){TASK.BlinkGracePeriod = 200;}

    // REWARD
    if (typeof TASK.NConsecutiveHitsforBonus == 'undefined'){TASK.NConsecutiveHitsforBonus = 0;}
    if (typeof TASK.NRewardMax == 'undefined'){TASK.NRewardMax = 1;}
    if (typeof TASK.NRSVPMax == 'undefined'){TASK.NRSVPMax = 0;}

    // AUTOMATOR
    if (typeof TASK.Automator == 'undefined'){TASK.Automator = 0;}
    if (typeof TASK.AutomatorFilePath == 'undefined'){TASK.AutomatorFilePath = '';}
    if (typeof TASK.CurrentAutomatorStage == 'undefined'){TASK.CurrentAutomatorStage = 0;}

    // DISPLAY
    if (typeof TASK.GridXOffsetInches == 'undefined'){TASK.GridXOffsetInches = 0}
    if (typeof TASK.GridYOffsetInches == 'undefined'){TASK.GridYOffsetInches = 0}
    if (typeof TASK.BackgroundColor2D == 'undefined') {TASK.BackgroundColor2D = '#7F7F7F';}
    if (typeof TASK.HeadsupDisplayFraction == 'undefined') {TASK.HeadsupDisplayFraction = 0;}
    if (typeof TASK.Photodiode == 'undefined'){TASK.Photodiode = 1;}
    if (typeof TASK.THREEJScameraFOV == 'undefined'){TASK.THREEJScameraFOV=45;} 
    if (typeof TASK.THREEJScameraZDist == 'undefined'){TASK.THREEJScameraZDist=10;} 
    if (typeof TASK.THREEJSRenderRatio == 'undefined'){TASK.THREEJSRenderRatio=2;} 
    if (typeof TASK.SaveImagesResolution == 'undefined'){TASK.SaveImagesResolution = 0;}
    if (typeof TASK.DeviceConfig == 'undefined'){TASK.DeviceConfig = '';}

    // DATA SAVING
    if (typeof TASK.BQSaveDisplayTimes == 'undefined'){TASK.BQSaveDisplayTimes = 1;}
    if (typeof TASK.BQSaveEye == 'undefined'){TASK.BQSaveEye = 1;}
    if (typeof TASK.BQSaveTouch == 'undefined'){TASK.BQSaveTouch = 1;}

    // MISCELLANEOUS
    if (typeof TASK.CalibrateEye == 'undefined'){TASK.CalibrateEye = 0;}
    if (typeof TASK.CalibrateEyeCrossTerms == 'undefined'){TASK.CalibrateEyeCrossTerms = 0;}
    if (typeof TASK.CheckRFID == 'undefined'){TASK.CheckRFID = 0;}
    if (typeof TASK.InterTrialInterval == 'undefined'){TASK.InterTrialInterval = 0}

    return 0; //need2loadParameters
  } catch (error) {
    console.error('loadParametersfromFirebase() error: ' + error)
    return 1; //need2loadParameters
  }
}

//------------- SAVE PARAMS FROM TEXT --------------//
async function saveParameterTexttoFirebase(parameter_text) {
  try {
    datastr = parameter_text;

    var success = false;
    var i = 1;
    var timeout_seed = 1000;
    var max_retries = 10;

    while (!success && i < max_retries) {
      try {
        var blob = new Blob([datastr], { type: 'application/json' });

        // Create file metadata including the content type
        var metadata = { contentType: 'application/json' };

        // Upload the file and metadata
        var response = await storage
          .ref()
          .child(ENV.ParamFileName)
          .put(blob, metadata);
        CURRTRIAL.lastFirebaseSave = new Date(response.metadata.timeCreated);
        console.log(
          'FIREBASE: Save TaskParams. Size:' +
            Math.round(response.totalBytes / 1000) +
            'kb'
        );
      } catch (error) {
        console.log(error);
        console.log(
          'FIREBASE: Trying to write in ' +
            timeout_seed * i +
            'ms...on try ' +
            i
        );
        sleep(timeout_seed * i);
        i++;
        continue;
      } //catch
      success = true;
    } //while
  } catch (error) {
    //try
    console.error(error);
  }

  try {
    var filemeta = await getFileMetadataFirebase(ENV.ParamFileName);
    if (ENV.ParamFileRev != filemeta.generation) {
      ENV.ParamFileRev = filemeta.generation;
      ENV.ParamFileDate = new Date(filemeta.updated);
      console.log('FIREBASE: Update TaskParams. Rev=' + ENV.ParamFileRev);
    } //if
  } catch (error) {
    //try
    console.error(error);
  } //catch
}

//------------- SAVE PARAMS FROM OBJECT --------------//
async function saveParameterstoFirebase() {
  try {
    var datastr = JSON.stringify(TASK, null, ' ');
    var blob = new Blob([datastr], { type: 'application/json' });

    // Create file metadata including the content type
    var metadata = { contentType: 'application/json' };

    // Upload the file and metadata
    var response = await storage
      .ref()
      .child(ENV.ParamFileName)
      .put(blob, metadata);
    var filemeta = await getFileMetadataFirebase(ENV.ParamFileName);
    if (ENV.ParamFileRev != filemeta.generation) {
      ENV.ParamFileRev = filemeta.generation;
      ENV.ParamFileDate = new Date(filemeta.updated);
    } //if filemeta

    console.log(
      'FIREBASE: TASK written to disk as ' +
        ENV.ParamFileName +
        '. Size: ' +
        Math.round(response.totalBytes / 1000) +
        'kb'
    );
    return 0; //need2saveParameters
  } catch (error) {
    console.error(error);
    return 1; //need2saveParameters
  }
}

//------------- SAVE DATA --------------//
async function saveBehaviorDatatoFirebase(TASK, ENV, CANVAS, EVENTS) {
  let dataObj;
  if (TASK.Species == 'model' && Object.keys(EVENTS).includes('trainseries')) {
    dataObj = {
      TASK: TASK,
      ENV: ENV,
      CANVAS: CANVAS,
      SCENEMETA: IMAGEMETA,
      SCENES: { SampleScenes: IMAGES.Sample, TestScenes: IMAGES.Test },
      TRIALEVENTS: EVENTS['trialseries'],
      TIMEEVENTS: {
        Battery: EVENTS['timeseries']['Battery'],
        RFIDTag: EVENTS['timeseries']['RFIDTag'],
        Weight: EVENTS['timeseries']['Weight'],
        // 'Arduino': EVENTS['timeseries']['Arduino'],
      },
      CLASSIFIERSTATS: EVENTS['trainseries'],
    };
  }//IF Object training
  else if (TASK.Agent == 'SaveImages') {
    dataObj = {
      TASK: TASK,
      ENV: ENV,
      CANVAS: CANVAS,
      SCENEMETA: IMAGEMETA,
      SCENES: { SampleScenes: IMAGES.Sample, TestScenes: IMAGES.Test },
      TRIALEVENTS: EVENTS['trialseries'],
      TIMEEVENTS: {
        Battery: EVENTS['timeseries']['Battery'],
        RFIDTag: EVENTS['timeseries']['RFIDTag'],
        Weight: EVENTS['timeseries']['Weight'],
        // 'Arduino': EVENTS['timeseries']['Arduino'],
      },
    };
    let dataFileName = ENV.DataFileName.split('/')
      .slice(-1)[0]
      .replaceAll(':', '_');
    // console.log(dataFileName);
    let dataFileHandle = await FLAGS.DirHandle.getFileHandle(dataFileName, {
      create: true,
    });

    let wrStream = await dataFileHandle.createWritable();
    let blob = new Blob([JSON.stringify(dataObj)], {
      type: 'application/json',
    });
    await wrStream.write(blob);
    await wrStream.close();
  }//ELSE IF saveImages
  else {
    dataObj = {
      TASK: TASK,
      ENV: ENV,
      CANVAS: CANVAS,
      SCENEMETA: IMAGEMETA,
      SCENES: { SampleScenes: IMAGES.Sample, TestScenes: IMAGES.Test },
      TRIALEVENTS: EVENTS['trialseries'],
      TIMEEVENTS: {
        Battery: EVENTS['timeseries']['Battery'],
        RFIDTag: EVENTS['timeseries']['RFIDTag'],
        Weight: EVENTS['timeseries']['Weight'],
        EffectorXY: EVENTS['timeseries']['EffectorData'],
        // 'Arduino': EVENTS['timeseries']['Arduino'],
      },
    };//dataObj
  }//ELSE agent doing task (!model, !saveimages)

  // let datastr = JSON.stringify(dataObj); //no pretty print for now, saves space and data file is unwieldy to look at for larger numbers of trials
  let blob = new Blob([JSON.stringify(dataObj)], { type: 'application/json' });

  // Create file metadata including the content type
  let metadata = { contentType: 'application/json' };

  // Upload the file and metadata
  let response = await storage.ref().child(ENV.DataFileName).put(blob, metadata);
  CURRTRIAL.lastFirebaseSave = new Date(response.metadata.updated);
  console.log('FIREBASE: Save Data, ' + Math.round(response.totalBytes / 1000) + 'kb');
}//FUNCTION saveBehaviorDatatoFirebase

//------------- LOAD AUDIO --------------//
function loadSoundfromFirebase(src, idx) {
  return new Promise(async function (resolve, reject) {
    try {
      var fileRef = storage.ref().child(SOUND_FILEPREFIX + src + '.wav');
      url = await fileRef.getDownloadURL();
      response = await fetch(url);
      fileBlob = await response.blob();

      var reader = new FileReader();
      reader.onload = function (e) {
        // // promises not used in safari webkit decodeAudioData
        // 				audiocontext.decodeAudioData(reader.result).then(function(buffer){
        // 					sounds.buffer[idx] = buffer;
        // 					resolve(idx)
        // 				})

        // Cross-browser compatible: doesn't use promises
        audiocontext.decodeAudioData(
          reader.result,
          (buffer) => {
            sounds.buffer[idx] = buffer;
            resolve(idx);
          },
          (e) => {
            reject(e);
          }
        );
      }; //reader.onload
      reader.readAsArrayBuffer(fileBlob);
    } catch (error) {
      //try
      console.error(error);
      reject('reject');
    } //catch
  }); //promise
} //loadSoundfromFirebase

//------------- GET RECENT BEHAVIOR FILE PATHS --------------//
async function getMostRecentBehavioralFilePathsFromFirebase(
  num_files_to_get,
  subject_id,
  save_directory
) {
  var file_list = [];
  try {
    // TODO: add code for reading huge folders -- (see getImageListDropboxRecursive)
    response = await getFileListRecursiveFirebase(save_directory, '.json');

    var q2 = 0;
    for (var q = 0; q <= response.length - 1; q++) {
      if (response[q].indexOf(subject_id) != -1) {
        file_list[q2] = response[q];
        q2++;
      }
    } //for

    // [oldest,...,most recent]
    file_list.sort();

    // Return most recent files
    num_files = file_list.length;
    return file_list.slice(num_files - num_files_to_get, num_files);
  } catch (error) {
    console.error(error);
  } //try
} //getMostRecentBehavioralFilePathsFromFirebase
