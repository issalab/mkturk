const storage = firebase.storage();
const storageRef = storage.ref();

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
    // console.log('rawFile', rawStorageFile);

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
  // console.log('file:', file);
  return file;
}//FUNCTION getStorageFile(path)

async function getStorageFileMetadata(path) {
  let fileRef = storageRef.child(path);
  let metadata = await fileRef.getMetadata();
  return metadata;
}//FUNCTION getStorageFileMetadata

async function processData(data) {
  console.time('flattenData');
  mkeye.file.data = flattenData(data);
  console.timeEnd('flattenData');
  // loadDataToEditor(mkeye.file.data);
  // console.log(this.file.data);

  let metadata = await getStorageFileMetadata(mkeye.file.name);
  console.log('Success! Loaded File Size:', metadata.size / 1000, 'KB');
  mkeye.file.ver = metadata.generation;
  mkeye.file.dateSaved = new Date(metadata.updated);
  console.log(mkeye.file.dateSaved);

  if (mkeye.file.fileChanged) {
    initializeChartData();
    checkFileStatus();
    mkeye.file.fileChanged = false;
    mkeye.file.dataChanged = false;
  } else if (mkeye.file.dataChanged) {
    updateCharts();
    mkeye.file.dataChanged = false;
    checkFileStatus();
  }
}//FUNCTION processData(data)

function flattenData(data) {
  let tmp = {};

  for (let outerKey in data) {
    if (data.hasOwnProperty(outerKey)) {
      for (let innerKey in data[outerKey]) {
        if (data[outerKey].hasOwnProperty(innerKey)) {
          tmp[innerKey] = data[outerKey][innerKey];
        }
      }
    }//IF
  }//FOR outerKey

  return tmp;
}//FUNCTION flattendata