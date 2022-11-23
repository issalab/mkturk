function computeBasicStats(data){
    let ncorrect = 0;
  for (let i=0; i<=data.TRIALEVENTS.Response.length-1; i++){
    if (data.TRIALEVENTS.Response[i] == data.TRIALEVENTS.CorrectItem[i]){ ncorrect++}
  }

  mkeye.stats.agent = data.TASK.Agent
  mkeye.stats.pctCorrect = Math.round(100*ncorrect/data.TRIALEVENTS.Response.length);
  mkeye.stats.trials = data.TRIALEVENTS.Response.length;

  if ( typeof(data.ENV.Eye.TrackEye) == 'undefined' || data.ENV.Eye.TrackEye<=0){
    mkeye.stats.effector = 'touch'
  }
  else{
    mkeye.stats.effector = 'eye'
  }
}//basicStats

function smooth(data, n) {
  let smoothedData = [];
  for (let i = 0; i < data.length; i++) {
    if (i < n - 1) {
      let tmp = data.slice(0, i + 1);
      smoothedData[i] = tmp.reduce((a, b) => {
        return a + b;
      });
      smoothedData[i] /= (i + 1);
    } else {
      let tmp = data.slice(i - n + 1, i + 1);
      smoothedData[i] = tmp.reduce((a, b) => {
        return a + b;
      });
      smoothedData[i] /= n;
    }
  }
  return smoothedData;
}//FUNCTION smooth(data,nbins)

function getCalibInverse(xparam,yparam){
  let calibInv = math.inv([xparam.slice(0,2), yparam.slice(0,2)]) //inverse gains
  calibInv[0][2] = 0; //no x offset
  calibInv[1][2] = 0; //no y offset
  calibInv[2] = [xparam[2], yparam[2]] //Store offsets separately
  return calibInv
}//getCalibInverse

function applyLinearTransform(xEye, yEye, xform, yform) {
  const xScreen = math.multiply(
    math.matrix(math.concat([xEye, yEye], [1])),
    xform
  );
  const yScreen = math.multiply(
    math.matrix(math.concat([xEye, yEye], [1])),
    yform
  );
  return [xScreen, yScreen];
}//FUNCTION applyLinearTransform

function instantCalib(screen,effectorvariable){ 
  screen = screen.toLowerCase()
  let targetXY = []
  let effectorXY = []
  let targetName = []

  for (var i=0; i<=mkeye.data.TRIALEVENTS.Response.length - 1; i++){
    if (mkeye.data.TRIALEVENTS.Response[i] == mkeye.data.TRIALEVENTS.CorrectItem[i]){
      let bbx = (mkeye.boundingBoxes[screen].bb[i][0][0] +
                mkeye.boundingBoxes[screen].bb[i][0][1])/2
      let bby = (mkeye.boundingBoxes[screen].bb[i][0][2] +
                mkeye.boundingBoxes[screen].bb[i][0][3])/2
      targetXY.push([bbx, bby])
      effectorXY.push([ mkeye.data.TRIALEVENTS[effectorvariable][0][i], mkeye.data.TRIALEVENTS[effectorvariable][1][i]])
      targetName.push(mkeye.boundingBoxes[screen].name[i][0])
    }//IF correct
  }//FOR i trials
  let X = math.transpose(math.matrix(effectorXY)) //dim: 2 x ntrials
  let Y = math.transpose(math.matrix(targetXY)) //dim: 2 x ntrials

  //Current calibration
  let xform = []
  let yform = []
  if ( mkeye.data.ENV.Eye.CalibXTransform.length>0 ){
    xform = mkeye.data.ENV.Eye.CalibXTransform
    yform = mkeye.data.ENV.Eye.CalibYTransform
  }//IF
  else {
    xform = [1, 0, 0];
    yform = [0, 1, 0];
  }//ELSE

  let xy0 = []
  for (let i=0; i<=X._size[1]-1; i++){
    xy0.push([ xform[2], yform[2] ])
  }
  let offset0 = math.transpose(math.matrix(xy0))
  let calib0 = math.matrix( [ [xform[0], xform[1]], [yform[0], yform[1]] ] )

  //Invert to raw coords
  let X_raw = math.multiply( math.inv(calib0), math.subtract(X, offset0) ) // Ainv * (x - x0) = x_raw

  //Linear fit without cross terms
  mkeye.instantCalib[screen] ={ xparam: [],yparam: [],xrmse: [],yrmse: [], xpred: [], ypred: [], xactual: [], yactual: [] }
  let A_x
  let A_y
  let rmse_x
  let rmse_y
  let pred_x
  let pred_y
  let actual_x
  let actual_y
  [A_x, rmse_x, pred_x, actual_x] = fitLinearRegression(math.row(X_raw,0),math.row(Y,0),targetName)
  [A_y, rmse_y, pred_y, actual_y] = fitLinearRegression(math.row(X_raw,0),math.row(Y,0),targetName)
  let funcreturn = fitLinearRegression(math.row(X_raw,1),math.row(Y,1),targetName)
  A_y = funcreturn[0]
  rmse_y = funcreturn[1]
  pred_y = funcreturn[2]
  actual_y = funcreturn[3]
  
  let ntform
  if (A_x != [] && A_y != []){
    ntform = A_x.length
    for (let i=0; i<=ntform-1; i++){
      mkeye.instantCalib[screen].xparam[i] = [ A_x[i]._data[0][0], 0, A_x[i]._data[0][1] ]
      mkeye.instantCalib[screen].yparam[i] = [ 0, A_y[i]._data[0][0], A_y[i]._data[0][1] ]
      mkeye.instantCalib[screen].xrmse[i] = rmse_x[0][i]
      mkeye.instantCalib[screen].yrmse[i] = rmse_y[0][i]
      mkeye.instantCalib[screen].xpred[i] = pred_x[0][i]
      mkeye.instantCalib[screen].ypred[i] = pred_y[0][i]
      mkeye.instantCalib[screen].xactual[i] = actual_x[0][i]
      mkeye.instantCalib[screen].yactual[i] = actual_y[0][i]
    }//FOR i xforms  
  }//IF determinant wasn't 0

  //Linear fit with cross terms
  let A_xy
  let rmse_xy
  let pred_xy
  let actual_xy
  [A_xy, rmse_xy, pred_xy, actual_xy] = fitLinearRegression(X_raw,Y,targetName)

  if (A_xy != []){
    ntform = A_xy.length
    for (let i=0; i<=ntform-1; i++){
      mkeye.instantCalib[screen].xparam[i+ntform] = A_xy[i]._data[0]
      mkeye.instantCalib[screen].yparam[i+ntform] = A_xy[i]._data[1]
      mkeye.instantCalib[screen].xrmse[i+ntform] = rmse_xy[0][i]
      mkeye.instantCalib[screen].yrmse[i+ntform] = rmse_xy[1][i]
      mkeye.instantCalib[screen].xpred[i+ntform] = pred_xy[0][i]
      mkeye.instantCalib[screen].ypred[i+ntform] = pred_xy[1][i]
      mkeye.instantCalib[screen].xactual[i+ntform] = actual_xy[0][i]
      mkeye.instantCalib[screen].yactual[i+ntform] = actual_xy[1][i]
    }//FOR i xforms  
  }//IF determinant wasn't 0
}//FUNCTION instantCalib

function fitLinearRegression(x,y,targs){
  let A = []
  let rmse_all = []
  let pred_all = []
  let actual_all = []
  let nvar = x._size[0]

  for (let i=0; i<=nvar-1; i++){
    rmse_all[i] = [[],[]]
    pred_all[i] = [[],[]]
    actual_all[i] = [[],[]]
  }//FOR i vars, initialize

  //Average data by target
  targSet = math.setDistinct(targs)
  let x_targ = math.zeros(nvar,targSet.length)
  let y_targ = math.zeros(nvar,targSet.length)
  for (let i=0; i<=targSet.length-1; i++){
    let inds = []
    for (let j=0; j<=targs.length-1; j++){
      if (targs[j] == targSet[i]){ inds.push(j) }//IF match
    }//FOR j trials

    //effector
    for (let j=0; j<=nvar-1; j++){
      //effector
      x_targ = math.subset(x_targ, math.index(j,i), math.mean( math.subset(x,math.index(j,inds)) )) //set x as average
      //actual
      y_targ = math.subset(y_targ, math.index(j,i), math.mean( math.subset(y,math.index(j,inds)) )) //set x as average
    }
  }//FOR i possible targs

  let ones = math.ones(1,x._size[1])
  let x3 = x._data
  x3.push(...ones._data)

  ones = math.ones(1,x_targ._size[1])
  let x3_targ = x_targ._data
  x3_targ.push(...ones._data)

  // if (math.det(x3) == 0 || math.det(x3_targ) == 0){
  //   console.log('Determinant was 0. Singular matrix')
  //   return [ [], [], [], [] ]
  // }//IF determinant==0

  //Pseudoinverse for all trials: transform(raw->screen)
  A[0] = math.multiply(y,math.pinv(x3))
  
  //Pseudoinverse for averaging per target
  A[1] = math.multiply(y_targ,math.pinv(x3_targ))

  //Predictions per target
  let ytargest = math.multiply(A[0],x3_targ);
  let ytargest_targ = math.multiply(A[1],x3_targ);
  for (let i=0; i<=x3_targ[0].length-1; i++){
    for (let j=0; j<=nvar-1; j++){
      pred_all[j][0][i] = math.subset(ytargest,math.index(j,i))
      pred_all[j][1][i] = math.subset(ytargest_targ,math.index(j,i))

      actual_all[j][0][i] = math.subset(y_targ,math.index(j,i))
      actual_all[j][1][i] = math.subset(y_targ,math.index(j,i))
    }//for j variables
  }//FOR i targs

  //Predictions per trial
  let yest = math.multiply(A[0],x3);
  let yest_targ = math.multiply(A[1],x3);
  
  //Errors
  mse = math.map(math.subtract(yest,y),math.square);
  mse_targ = math.map(math.subtract(yest_targ,y),math.square);

  //Per target errors
  for (let i=0; i<=targSet.length-1; i++){
    let inds = []
    for (let j=0; j<=targs.length-1; j++){
      if (targs[j] == targSet[i]){ inds.push(j) }//IF match
    }//FOR j trials

    for (let j=0; j<=nvar-1; j++){
      //from pinv_trials
      rmse_all[j][0][i] = math.sqrt(math.mean(math.subset(mse,math.index(j,inds))))
    
      //from pinv_targ
      rmse_all[j][1][i] = math.sqrt(math.mean(math.subset(mse_targ,math.index(j,inds))))
    }//FOR j vars
  }//FOR i possible targs

  return [A, rmse_all, pred_all, actual_all]
}//FUNCTION fitLinearRegression