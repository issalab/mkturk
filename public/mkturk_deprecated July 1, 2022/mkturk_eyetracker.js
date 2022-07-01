function runCallibration() {
	var xactual =[]
	var yactual =[]
	var fixation_meanxy = []

	// Inverting back from calibrated eye xy to raw eye xy
	var inverse_of_old_xcalib = math.inv([ ENV.Eye.CalibXTransform.slice(0,2), ENV.Eye.CalibYTransform.slice(0,2) ])
	var xtform_inverse = inverse_of_old_xcalib[0]
	var ytform_inverse = inverse_of_old_xcalib[1]
	xtform_inverse[2] = 0
	ytform_inverse[2] = 0


	for (var i =0; i <= EVENTS['trialseries']['FixationGridIndex'].length-1; i++){
		if (EVENTS['trialseries']['FixationTouchEvent'][i] == 'theld'){
			//ACTUAL TARGET LOCATIONS
			xactual.push(ENV.XGridCenter[EVENTS['trialseries']['FixationGridIndex'][i]])
			yactual.push(ENV.YGridCenter[EVENTS['trialseries']['FixationGridIndex'][i]] + CANVAS.offsettop)

			//RAW EYE POSITIONS (invert back to raw coords)
			xy = apply_linear_transform(
				EVENTS['trialseries']['FixationXYT'][0][i] - ENV.Eye.CalibXTransform[2],//X shifted back prior to inverse
				EVENTS['trialseries']['FixationXYT'][1][i] - ENV.Eye.CalibYTransform[2],//Y shifted back prior to inverse
				xtform_inverse, ytform_inverse)
			fixation_meanxy.push([xy[0],xy[1]])		
		}//IF touch held, keep data
	}//FOR i calib trials

	//FITTING
	var xparams = fit_linear_regression(fixation_meanxy, xactual)
	var yparams = fit_linear_regression(fixation_meanxy, yactual)
	var xtform = [ xparams._data[1], xparams._data[2], xparams._data[0] ]
	var ytform = [ yparams._data[1], yparams._data[2], yparams._data[0] ]

	//PREDICTION
	var xpred = []
	var ypred = []
	var xy = []
	for (var i=0; i<= xactual.length-1; i++){
		var xy = apply_linear_transform(fixation_meanxy[i][0],fixation_meanxy[i][1],xtform,ytform) //Calibrated		
		xpred.push(xy[0])
		ypred.push(xy[1])
	}//FOR i points

	return {'xtform': xtform,
			'ytform': ytform,
			'n': xactual.length,
			'type': 'linear',
			'predictedx': xpred,
			'predictedy': ypred,
			'actualx': xactual,
			'actualy': yactual
		}
}//FUNCTION

function evaluateCalibration(){
	// Only accumulate test trials and only if successful
	var nheld = 0
	var actualx=[]
	var actualy=[]
	var predictedx=[]
	var predictedy=[]
	for (var i = 0; i <= EVENTS['trialseries']['FixationGridIndex'].length-1; i++){
		if (EVENTS['trialseries']['FixationTouchEvent'][i] == "theld"){
			nheld += 1
			if (nheld > TASK.CalibrateEye){
				//ACTUAL
				actualx.push(ENV.XGridCenter[EVENTS['trialseries']['FixationGridIndex'][i]])
				actualy.push(ENV.YGridCenter[EVENTS['trialseries']['FixationGridIndex'][i]] + CANVAS.offsettop)

				//PREDICTED
				predictedx.push(EVENTS['trialseries']['FixationXYT'][0][i])
				predictedy.push(EVENTS['trialseries']['FixationXYT'][1][i])
			}//IF test point
		}//IF held
	}//FOR i trials

	// Compute GOF
	var mse = []
	mse[0] = compute_mse(predictedx,actualx)
	mse[1] = compute_mse(predictedy,actualy)

	return mse
}//FUNCTION evaluateCalibration

function fit_linear_regression(X, y) {
			X = math.matrix(X);
			var m = y.length;

			X = math.concat(math.ones(m,1), X);
			y = math.matrix(y);

			//NORMAL EQUATION
			var XT = math.transpose(X);
			var XTX = math.multiply(XT, X);
			var XTy = math.multiply(XT, y);
			var theta = math.multiply( math.inv(XTX), XTy );

			return theta
}//FUNCTION fit_linear_regression

function apply_linear_transform(eye_x, eye_y,xform,yform){
	x_screen = math.multiply(math.matrix(math.concat([eye_x, eye_y],[1])),xform);
	y_screen = math.multiply(math.matrix(math.concat([eye_x, eye_y],[1])),yform);
	return [ x_screen, y_screen ]
}//FUNCTION apply_linear_transform

function compute_mse(predicted, actual){
	if (predicted.length == undefined){
		return Math.pow((predicted - actual), 2)
	} //if scaler values

	var  err = 0 
	// sum sq. error
	for( var i = 0; i< predicted.length; i++){
		err += Math.pow((predicted[i] - actual[i]), 2)
	}
	console.log(err)
	return err / predicted.length //compute mean
}//FUNCTION	compute_mse