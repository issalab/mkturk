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
      mkeye.file.dataChanged = true;
      console.log('File was updated ver=' + mkeye.file.ver);
    } else {
      mkeye.file.dataChanged = false;
    }

    if (mkeye.file.fileChanged == true || mkeye.file.dataChanged == true) {
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