function runCallibration() {
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

  for (
    let i = 0, len = EVENTS['trialseries']['FixationGridIndex'].length;
    i < len;
    i++
  ) {
    if (EVENTS['trialseries']['FixationTouchEvent'][i] == 'theld') {
      //ACTUAL TARGET LOCATIONS
      xactual.push(
        ENV.XGridCenter[EVENTS['trialseries']['FixationGridIndex'][i]]
      );
      yactual.push(
        ENV.YGridCenter[EVENTS['trialseries']['FixationGridIndex'][i]] +
          CANVAS.offsettop
      );

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

function evaluateCalibration() {
  // Only accumulate test trials and only if successful
  let numHeld = 0;
  let xActual = [];
  let yActual = [];
  let xPred = [];
  let yPred = [];
  for (let i = 0; i < EVENTS['trialseries']['FixationGridIndex'].length; i++) {
    if (EVENTS['trialseries']['FixationTouchEvent'][i] == 'theld') {
      numHeld += 1;
      if (numHeld > TASK.CalibrateEye) {
        //ACTUAL
        xActual.push(
          ENV.XGridCenter[EVENTS['trialseries']['FixationGridIndex'][i]]
        );
        yActual.push(
          ENV.YGridCenter[EVENTS['trialseries']['FixationGridIndex'][i]] +
            CANVAS.offsettop
        );

        //PREDICTED
        xPred.push(EVENTS['trialseries']['FixationXYT'][0][i]);
        yPred.push(EVENTS['trialseries']['FixationXYT'][1][i]);
      } //IF test point
    } //IF held
  } //FOR i trials

  // Compute GOF
  let mse = [];
  mse[0] = compute_mse(xPred, xActual);
  mse[1] = compute_mse(yPred, yActual);

  return mse;
} //FUNCTION evaluateCalibration

function fitLinearRegression(X, y) {
  const m = y.length;
  const xMat = math.concat(math.ones(m, 1), math.matrix(X));
  const yMat = math.matrix(y);

  //NORMAL EQUATION
  const XT = math.transpose(xMat);
  const XTX = math.multiply(XT, xMat);
  const XTy = math.multiply(XT, yMat);
  const theta = math.multiply(math.inv(XTX), XTy);

  return theta;
} //FUNCTION fitLinearRegression

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
} //FUNCTION applyLinearTransform

function compute_mse(predicted, actual) {
  if (predicted.length === undefined) {
    return Math.pow(predicted - actual, 2);
  } //if scaler values

  let err = 0;
  // sum sq. error
  for (let i = 0, predLen = predicted.length; i < predLen; i++) {
    err += Math.pow(predicted[i] - actual[i], 2);
  }
  console.log(err);
  return err / predicted.length; //compute mean
} //FUNCTION	compute_mse
