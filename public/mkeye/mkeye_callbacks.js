function updateManualCalibVar(event){
  event.target.value

  //X
  if (event.target.name == 'xgain'){
    mkeye.calib.xparam[0] = event.target.value  
  }
  else if (event.target.name == 'xoffset'){
    mkeye.calib.xparam[2] = event.target.value  
  }
  else if (event.target.name == 'ycross'){
    mkeye.calib.xparam[1] = event.target.value  
  }

  //Y
  if (event.target.name == 'ygain'){
    mkeye.calib.yparam[0] = event.target.value  
  }
  else if (event.target.name == 'yoffset'){
    mkeye.calib.yparam[2] = event.target.value  
  }
  else if (event.target.name == 'xcross'){
    mkeye.calib.yparam[1] = event.target.value  
  }
}//FUNCTION updateManualCalibVar(event)

function updateManualCalibGUI(){
  let xind = [0,2,1]
  for(let i=0; i<=xind.length-1; i++){
    mkeye.calib.guiIDs[xind[i]].value = mkeye.calib.xparam[i]
  }//FOR i xparam

  let yind = [3,5,4]
  for(let i=0; i<=yind.length-1; i++){
    mkeye.calib.guiIDs[yind[i]].value = mkeye.calib.yparam[i]
  }//FOR i xparam
}//FUNCTION updateManualCalibGUI()