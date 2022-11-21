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

function runcalibration() {
  let xactual = [];
  let yactual = [];
  let fixationMeanXY = [];
  let fixationMeanX = [];
  let fixationMeanY = [];

  // Inverting back from calibrated eye xy to raw eye xy
  let oldXCalibInv = math.inv([
    ENV.Eye.CalibXTransform.slice(0, 2),
    ENV.Eye.CalibYTransform.slice(0, 2),
  ]);
  let xtformInverse = oldXCalibInv[0];
  let ytformInverse = oldXCalibInv[1];
  xtformInverse[2] = 0;
  ytformInverse[2] = 0;

  for (let i = 0, len = EVENTS['trialseries']['FixationGridIndex'].length; i < len; i++)
  {
    if (EVENTS['trialseries']['FixationTouchEvent'][i] == 'theld') {
      //ACTUAL TARGET LOCATIONS
      xactual.push(ENV.XGridCenter[EVENTS['trialseries']['FixationGridIndex'][i]]);
      yactual.push(ENV.YGridCenter[EVENTS['trialseries']['FixationGridIndex'][i]] + CANVAS.offsettop);

      //RAW EYE POSITIONS (invert back to raw coords)
      const xy = applyLinearTransform(
        EVENTS['trialseries']['FixationXYT'][0][i] - ENV.Eye.CalibXTransform[2], //X shifted back prior to inverse
        EVENTS['trialseries']['FixationXYT'][1][i] - ENV.Eye.CalibYTransform[2], //Y shifted back prior to inverse
        xtformInverse,
        ytformInverse
      );
      fixationMeanXY.push([xy[0], xy[1]]);
      fixationMeanX.push([xy[0]]); // for no cross term
      fixationMeanY.push([xy[1]]); // for no cross term
    } //IF touch held, keep data
  } //FOR i calib trials

  //FITTING
  let xtform = [];
  let ytform = [];
  if (TASK.CalibrateEyeCrossTerms == 0) {
    const xParams = fitLinearRegression(fixationMeanX, xactual);
    const yParams = fitLinearRegression(fixationMeanY, yactual);
    xtform = [xParams._data[1], 0, xParams._data[0]];
    ytform = [0, yParams._data[1], yParams._data[0]];
  } else {
    const xParams = fitLinearRegression(fixationMeanXY, xactual);
    const yParams = fitLinearRegression(fixationMeanXY, yactual);
    xtform = [xParams._data[1], xParams._data[2], xParams._data[0]];
    ytform = [yParams._data[1], yParams._data[2], yParams._data[0]];
  }

  //PREDICTION
  let xpred = [];
  let ypred = [];
  for (let i = 0, xactualLen = xactual.length; i < xactualLen; i++) {
    const xy = applyLinearTransform(
      fixationMeanXY[i][0],
      fixationMeanXY[i][1],
      xtform,
      ytform
    ); //Calibrated
    xpred.push(xy[0]);
    ypred.push(xy[1]);
  } //FOR i points

  return {
    xtform: xtform,
    ytform: ytform,
    n: xactual.length,
    type: 'linear',
    predictedx: xpred,
    predictedy: ypred,
    actualx: xactual,
    actualy: yactual,
  };
} //FUNCTION

