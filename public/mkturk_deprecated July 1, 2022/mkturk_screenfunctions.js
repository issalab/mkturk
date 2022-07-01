//================== IMAGE RENDERING ==================//
function displayTrial(ti, gr, fr, sc, ob, id, mkm) {
  let lenArgs = arguments.length;
  // if (arguments.length == 7) {
  // 	console.log('mkm:', mkm);
  // }
  // ti = time, gr = grid, fr = frame
  // sc = screen, ob = object label, id = index of renderparam
  var resolveFunc;
  var errFunc;
  updated2d = 0;
  updated3d = 0;
  boundingBoxesChoice2D = { x: [], y: [] };
  boundingBoxesChoice3JS = { x: [], y: [] };
  boundingBoxesChoice3D = { x: [], y: [] };
  p = new Promise(function (resolve, reject) {
    resolveFunc = resolve;
    errFunc = reject;
  }).then();
  var start = null;
  CURRTRIAL.tsequenceactual = [];
  async function updateCanvas(timestamp) {
    if (!start) start = timestamp; //IF start has not been set to a float timestamp, set it now.

    if (frame.shown[frame.current - 1] != 1 && frame.current > 0) {
      CURRTRIAL.tsequenceactual[frame.current - 1] =
        Math.round(100 * (timestamp - start)) / 100; //in milliseconds, rounded to nearest hundredth of a millisecond
      frame.shown[frame.current - 1] = 1;
    } //IF first time shown, store this time as the first transition to the new frame

    if (timestamp - start > ti[frame.current]) {
      //----- RENDER ALL ELEMENTS
      renderShape2D('Blank', [-1], OFFSCREENCANVAS);

      if (frame.current <= frame.shown.length - 1) {
        //Skip rendering if already did last frame and just waiting for it to show
        for (var s = 0; s <= frame.frames[frame.current].length - 1; s++) {
          f = frame.frames[frame.current][s];
          var taskscreen = sc[f].charAt(0).toUpperCase() + sc[f].slice(1);
          // console.log('taskscreen:', taskscreen);

          if (s == 0) {
            var taskscreen0 = taskscreen;
          } //IF primary screen

          //------------------- DISPLAY THE FRAME 2D ---------------------//
          //RENDER 2D directly onscreen
          render2D(taskscreen, s, f, gr, fr, sc, ob, id, OFFSCREENCANVAS);

          //------------------- DISPLAY THE FRAME 3D ---------------------//
          if (taskscreen == 'Sample' || taskscreen == 'Test') {
            render3D(taskscreen, s, f, gr, fr, sc, ob, id);
          } //IF sample || test
          else {
            updated3d = 0;
          } //ELSE hide 3D when plotting 2D elements like buttons and not keeping (overlaying) sample/test

          if (
            taskscreen == 'Touchfix' ||
            taskscreen == 'Sample' ||
            taskscreen == 'Blank'
          ) {
            //Overlay fixation dot
            if (typeof gr[f] == 'number') {
              renderShape2D('FixationDot', gr[f], OFFSCREENCANVAS);
            } else {
              renderShape2D('FixationDot', gr[f][0], OFFSCREENCANVAS);
            }

            if (port.connected && TASK.Photodiode > 0) {
              renderShape2D(
                'PhotodiodeSquare',
                [ENV.PhotodiodeSquareX, ENV.PhotodiodeSquareY],
                OFFSCREENCANVAS
              );
            } //IF port.connected
          } //IF touchfix || sample
        } //FOR s screens within frame

        //----- (1) Merge Bounding Boxes
        if (updated2d) {
          boundingBoxesChoice3D.x = boundingBoxesChoice2D.x;
          boundingBoxesChoice3D.y = boundingBoxesChoice2D.y;
        }
        if (updated3d) {
          boundingBoxesChoice3D.x = boundingBoxesChoice3JS.x;
          boundingBoxesChoice3D.y = boundingBoxesChoice3JS.y;
        }

        //----- MkModel Logic
        if (lenArgs == 7 && mkm) {
          if (TASK.SameDifferent > 0) {
            if (taskscreen == 'Sample' && !mkm.hasSampleFeatures) {
              let ctx = mkm.cvs.getContext('2d');
              ctx.clearRect(0, 0, mkm.cvs.width, mkm.cvs.height);
              let label = CURRTRIAL.sample_scenebag_label[0][0];
              let params = {
                image: IMAGES.Sample[label].IMAGES,
                object: IMAGES.Sample[label].OBJECTS,
                idx: CURRTRIAL.sample_scenebag_index[0][0],
                ViewportPPI: ENV.ViewportPPI,
                ScreenRatio: ENV.ScreenRatio,
                offsettop: CANVAS.offsettop,
                boundingBoxes3D: boundingBoxesChoice3D,
                boundingBoxes2D: boundingBoxesChoice2D,
              };

              let mkmBoundingBox = mkm.getMkModelBoundingBox(params);

              // mkmBoundingBox SANITY CHECK CODE
              // console.log(`SAMPLE sx=${mkmBoundingBox.sx}; sy=${mkmBoundingBox.sy}; sWidth=${mkmBoundingBox.sWidth}; sHeight=${mkmBoundingBox.sHeight}`);
              // let visiblecvs = document.getElementById("canvaseyetracker");
              // let ctx2 = visiblecvs.getContext('2d');
              // ctx2.clearRect(0, 0, EYETRACKERCANVAS.width, EYETRACKERCANVAS.height);
              // ctx2.rect(mkmBoundingBox.sx, mkmBoundingBox.sy, mkmBoundingBox.sWidth, mkmBoundingBox.sHeight);
              // ctx2.stroke();

              ctx.drawImage(
                VISIBLECANVAS,
                mkmBoundingBox.sx,
                mkmBoundingBox.sy,
                mkmBoundingBox.sWidth,
                mkmBoundingBox.sHeight,
                0,
                0,
                224,
                224
              );
              let featureVec = mkm.featureExtractor.execute(
                mkm.normalizePixelValues(mkm.cvs),
                mkm.outputNode
              );
              featureVec = featureVec.reshape(mkm.inputShape);

              if (CURRTRIAL.num < TASK.ModelConfig.trainIdx) {
                let oneHotIdx = mkm.getOneHotIdx(
                  CURRTRIAL.sample_scenebag_label[0][0]
                );
                mkm.dataObj.yTrainLabels.push(oneHotIdx);
                mkm.dataObj.yTrain.push(mkm.oneHotArr[oneHotIdx]);
                mkm.dataObj.xTrain.push(featureVec);

                // if (CURRTRIAL.sample_scenebag_label[0][0] == 0) {
                // 	mkm.dataObj.yTrainLabels.push(0);
                // 	// mkm.dataObj.yTrain.push([0]);
                // 	mkm.dataObj.yTrain.push([1, 0]);
                // 	// for SVM
                // 	// mkm.dataObj.yTrain.push([-1])
                // } else if (CURRTRIAL.sample_scenebag_label[0][0] == 1) {
                // 	mkm.dataObj.yTrainLabels.push(1);
                // 	// mkm.dataObj.yTrain.push([1]);
                // 	mkm.dataObj.yTrain.push([0, 1]);
                // }
              } else {
                let oneHotIdx = mkm.getOneHotIdx(
                  CURRTRIAL.sample_scenebag_label[0][0]
                );
                mkm.dataObj.xTest.push(featureVec);
                // mkm.dataObj.yTest.push(CURRTRIAL.sample_scenebag_label[0][0]);
                mkm.dataObj.yTest.push(oneHotIdx);
              }
              // mkm.cvs SANITY CHECK CODE
              let mkmodelsRef = storageRef.child('mkturkfiles/mkmodels/');
              let cvsData = mkm.cvs.toDataURL();
              let path = `${TASK.Agent}/${ENV.CurrentDate.toJSON()}/${
                CURRTRIAL.num
              }_sample.png`;
              mkmodelsRef.child(path).putString(cvsData, 'data_url');
              // ctx2.clearRect(0, 0, EYETRACKERCANVAS.width, EYETRACKERCANVAS.height);
              mkm.hasSampleFeatures = true;
            } else if (taskscreen == 'Test' && !mkm.hasTestFeatures) {
              let ctx = mkm.cvs.getContext('2d');
              ctx.clearRect(0, 0, mkm.cvs.width, mkm.cvs.height);
              let label = CURRTRIAL.test_scenebag_labels[0][0];
              let params = {
                image: IMAGES.Test[label].IMAGES,
                object: IMAGES.Test[label].OBJECTS,
                idx: CURRTRIAL.test_scenebag_indices[0][0],
                ViewportPPI: ENV.ViewportPPI,
                ScreenRatio: ENV.ScreenRatio,
                offsettop: CANVAS.offsettop,
                boundingBoxes3D: boundingBoxesChoice3D,
                boundingBoxes2D: boundingBoxesChoice2D,
              };

              let mkmBoundingBox = mkm.getMkModelBoundingBox(params);

              // mkmBoundingBox SANITY CHECK CODE
              // console.log(`TEST sx=${mkmBoundingBox.sx}; sy=${mkmBoundingBox.sy}; sWidth=${mkmBoundingBox.sWidth}; sHeight=${mkmBoundingBox.sHeight}`);
              // let visiblecvs = document.getElementById("canvaseyetracker");
              // let ctx2 = visiblecvs.getContext('2d');
              // ctx2.clearRect(0, 0, EYETRACKERCANVAS.width, EYETRACKERCANVAS.height);
              // ctx2.rect(mkmBoundingBox.sx, mkmBoundingBox.sy, mkmBoundingBox.sWidth, mkmBoundingBox.sHeight);
              // ctx2.stroke();

              ctx.drawImage(
                VISIBLECANVAS,
                mkmBoundingBox.sx,
                mkmBoundingBox.sy,
                mkmBoundingBox.sWidth,
                mkmBoundingBox.sHeight,
                0,
                0,
                224,
                224
              );
              let featureVec = mkm.featureExtractor.execute(
                mkm.normalizePixelValues(mkm.cvs),
                mkm.ouputNode
              );
              featureVec = featureVec.reshape(mkm.inputShape);

              if (CURRTRIAL.num < TASK.ModelConfig.trainIdx) {
                let oneHotIdx = mkm.getOneHotIdx(
                  CURRTRIAL.test_scenebag_labels[0][0]
                );
                mkm.dataObj.yTrainLabels.push(oneHotIdx);
                mkm.dataObj.yTrain.push(mkm.oneHotArr[oneHotIdx]);
                mkm.dataObj.xTrain.push(featureVec);
                // if (CURRTRIAL.test_scenebag_labels[0][0] == 0) {
                // 	mkm.dataObj.yTrainLabels.push(0);
                // 	// mkm.dataObj.yTrain.push([0]);
                // 	mkm.dataObj.yTrain.push([1, 0]);
                // 	// for SVM
                // 	// mkm.dataObj.yTrain.push([-1])
                // } else if (CURRTRIAL.test_scenebag_labels[0][0] == 1) {
                // 	mkm.dataObj.yTrainLabels.push(1);
                // 	// mkm.dataObj.yTrain.push([1]);
                // 	mkm.dataObj.yTrain.push([0, 1]);
                // }
              } else {
                let oneHotIdx = mkm.getOneHotIdx(
                  CURRTRIAL.test_scenebag_labels[0][0]
                );
                mkm.dataObj.xTest.push(featureVec);
                // mkm.dataObj.yTest.push(CURRTRIAL.test_scenebag_labels[0][0]);
                mkm.dataObj.yTest.push(oneHotIdx);
              }

              // mkm.cvs SANITY CHECK HERE
              let mkmodelsRef = storageRef.child('mkturkfiles/mkmodels/');
              let cvsData = mkm.cvs.toDataURL();
              let path = `${TASK.Agent}/${ENV.CurrentDate.toJSON()}/${
                CURRTRIAL.num
              }_test.png`;
              mkmodelsRef.child(path).putString(cvsData, 'data_url');
              // ctx2.clearRect(0, 0, EYETRACKERCANVAS.width, EYETRACKERCANVAS.height);
              mkm.hasTestFeatures = true;
            } else if (
              taskscreen == 'Choice' &&
              mkm.hasSampleFeatures &&
              mkm.hasTestFeatures
            ) {
              mkm.hasSampleFeatures = false;
              mkm.hasTestFeatures = false;
            }
          } else {
            if (taskscreen == 'Sample' && !mkm.hasSampleFeatures) {
              let ctx = mkm.cvs.getContext('2d');
              ctx.clearRect(0, 0, mkm.cvs.width, mkm.cvs.height);
              let label = CURRTRIAL.sample_scenebag_label[0][0];
              let params = {
                image: IMAGES.Sample[label].IMAGES,
                object: IMAGES.Sample[label].OBJECTS,
                idx: CURRTRIAL.sample_scenebag_index[0][0],
                ViewportPPI: ENV.ViewportPPI,
                ScreenRatio: ENV.ScreenRatio,
                offsettop: CANVAS.offsettop,
                boundingBoxes3D: boundingBoxesChoice3D,
                boundingBoxes2D: boundingBoxesChoice2D,
              };

              let mkmBoundingBox = mkm.getMkModelBoundingBox(params);

              // mkmBoundingBox SANITY CHECK CODE
              // console.log(`SAMPLE sx=${mkmBoundingBox.sx}; sy=${mkmBoundingBox.sy}; sWidth=${mkmBoundingBox.sWidth}; sHeight=${mkmBoundingBox.sHeight}`);
              // let visiblecvs = document.getElementById("canvaseyetracker");
              // let ctx2 = visiblecvs.getContext('2d');
              // ctx2.rect(mkmBoundingBox.sx, mkmBoundingBox.sy, mkmBoundingBox.sWidth, mkmBoundingBox.sHeight);
              // ctx2.stroke();

              ctx.drawImage(
                VISIBLECANVAS,
                mkmBoundingBox.sx,
                mkmBoundingBox.sy,
                mkmBoundingBox.sWidth,
                mkmBoundingBox.sHeight,
                0,
                0,
                224,
                224
              );
              // console.log(mkm.featureExtractor);
              let featureVec = mkm.featureExtractor.execute(
                mkm.normalizePixelValues(mkm.cvs),
                mkm.ouputNode
              );
              // console.log('featureVec:', featureVec);

              featureVec = featureVec.reshape(mkm.inputShape);
              if (CURRTRIAL.num < TASK.ModelConfig.trainIdx) {
                console.log('CURRTRIAL.num:', CURRTRIAL.num);
                mkm.dataObj.xTrain.push(featureVec);
                let oneHotIdx = mkm.getOneHotIdx(CURRTRIAL.correctitem);
                mkm.dataObj.yTrainLabels.push(oneHotIdx);
                mkm.dataObj.yTrain.push(mkm.oneHotArr[oneHotIdx]);
              } else {
                let oneHotIdx = mkm.getOneHotIdx(CURRTRIAL.correctitem);
                mkm.dataObj.xTest.push(featureVec);
                // mkm.dataObj.yTest.push(CURRTRIAL.sample_scenebag_label[0][0]);
                mkm.dataObj.yTest.push(oneHotIdx);
              }
              // mkm.cvs SANITY CHECK CODE
              // let mkmodelsRef = storageRef.child('mkturkfiles/mkmodels/');
              // let cvsData = mkm.cvs.toDataURL();
              // let path = (
              // 	`${TASK.Agent}/${ENV.CurrentDate.toJSON()}/${CURRTRIAL.num}_sample.png`
              // );
              // mkmodelsRef.child(path).putString(cvsData, 'data_url');
              // ctx2.clearRect(0, 0, EYETRACKERCANVAS.width, EYETRACKERCANVAS.height);
              mkm.hasSampleFeatures = true;
            } else if (taskscreen != 'Sample' && mkm.hasSampleFeatures) {
              mkm.hasSampleFeatures = false;
            }
          }
        } //IF MkModel

        //----- (2) Update Status
        updated2d = 0;
        updated3d = 0;
        if (FLAGS.movieplaying == 0) {
          FLAGS.movieplaying = 1;
          if (typeof waitforMovieStart != 'undefined') {
            waitforMovieStart.next();
          }
        } //IF movieplaying

        //----- (3) Save Out Images
        if (
          (taskscreen0 == 'Sample' || taskscreen0 == 'Test') &&
          TASK.Agent == 'SaveImages' &&
          FLAGS.savedata == 1
        ) {
          if (
            (FLAGS.movieper[taskscreen0][ob[frame.current][0]][
              id[frame.current][0]
            ] < 1 &&
              (frame.current == 0 ||
                sc[frame.current] != sc[frame.current - 1] ||
                ob[frame.current][0] != ob[frame.current - 1][0] ||
                id[frame.current][0] != id[frame.current - 1][0])) || //if !movie, save when screen changes
            FLAGS.movieper[taskscreen0][ob[frame.current][0]][
              id[frame.current][0]
            ] >= 1
          ) {
            //OR movie
            saveScreenshot(
              VISIBLECANVAS,
              CURRTRIAL.num,
              taskscreen0,
              frame.current,
              ob[frame.current],
              id[frame.current]
            );
          } //IF need to save out this frame
        } //IF sample or test screen & save out images

        frame.current++;
      } //IF haven't rendered last frame
    } //IF time to show new frame
    //---------------- (end) DISPLAY THE FRAME ------------------//

    if (frame.current >= frame.shown.length) {
      frame.current = frame.shown.length;
    } //IF prematurely ending movies externally

    if (frame.shown[frame.shown.length - 1] != 1) {
      window.requestAnimationFrame(updateCanvas);
    } //IF frames left to show
    else {
      FLAGS.movieplaying = 0;
      if (typeof waitforMovieFinish != 'undefined') {
        waitforMovieFinish.next();
      }
      resolveFunc(CURRTRIAL.tsequenceactual);
    } //ELSE all frames shown, promise resolve, exit animation loop
  } //FUNCTION updateCanvas

  //Kick off async work with window.requestAnimationFrame:
  //Goes on next screen refresh and syncs to browser's refresh rate on separate clock (not js clock)
  window.requestAnimationFrame(updateCanvas);
  return p;
} //FUNCTION displayTrial

function render3D(taskscreen, s, f, gr, fr, sc, ob, id) {
  f = frame.frames[frame.current][s];
  //var taskscreen = sc[f].charAt(0).toUpperCase() + sc[f].slice(1)

  renderer.autoClear = false;
  for (var j = 0; j < ob[f].length; j++) {
    renderer.clear();

    var boundingBox = updateSingleFrame3D(
      taskscreen,
      ob[f][j],
      id[f][j],
      fr[f],
      gr[f][j]
    );

    if (
      s == 0 &&
      typeof boundingBox != 'undefined' &&
      typeof boundingBox[ob[f][j]] != 'undefined' &&
      typeof boundingBox[ob[f][j]][0] != 'undefined'
    ) {
      boundingBoxesChoice3JS.x[j] = boundingBox[ob[f][j]][0].x;
      boundingBoxesChoice3JS.y[j] = boundingBox[ob[f][j]][0].y;
      updated3d = 1;
    } //IF first screen
    setViewport(gr[f][j]);
    var camera = scene[taskscreen].getObjectByName('cam' + ob[f][j]);
    renderer.render(scene[taskscreen], camera); //takes >1ms, do before the fast 2D swap (<1ms)

    if (
      (taskscreen == 'Test' || taskscreen == 'Sample') &&
      TASK.Agent == 'SaveImages' &&
      FLAGS.savedata == 1
    ) {
      if (
        (FLAGS.movieper[taskscreen][ob[frame.current][0]][
          id[frame.current][0]
        ] < 1 &&
          (frame.current == 0 ||
            sc[frame.current] != sc[frame.current - 1] ||
            ob[frame.current][0] != ob[frame.current - 1][0] ||
            id[frame.current][0] != id[frame.current - 1][0])) || //if !movie, save when screen changes
        FLAGS.movieper[taskscreen][ob[frame.current][0]][
          id[frame.current][0]
        ] >= 1
      ) {
        //OR movie
        saveScreenshot(
          VISIBLECANVASWEBGL,
          CURRTRIAL.num,
          taskscreen,
          fr[f],
          ob[f][j],
          id[f][j]
        );
      } //IF movie
    } //IF taskscreen

    //Post-render 2D filtering in pixel space
    var [objFilterSingleFrame, imgFilterSingleFrame] = updateFilterSingleFrame(
      taskscreen,
      ob[f][j],
      id[f][j],
      fr[f],
      gr[f][j]
    );

    OFFSCREENCANVAS.getContext('2d').filter = objFilterSingleFrame;
    OFFSCREENCANVAS.getContext('2d').drawImage(
      renderer.domElement,
      0,
      0,
      OFFSCREENCANVAS.width,
      OFFSCREENCANVAS.height
    );
    OFFSCREENCANVAS.getContext('2d').filter = 'none';
  } //FOR j display items
} //FUNCTION render3D

async function render2D(taskscreen, s, f, gr, fr, sc, ob, id, canvasobj) {
  if (FLAGS.savedata == 0 && s == 0 && FLAGS.underlayGridPoints == 1) {
    renderBlankWithGridMarkers(
      ENV.XGridCenter,
      ENV.YGridCenter,
      CURRTRIAL.FixationGridIndex,
      CURRTRIAL.samplegridindex,
      TASK.TestGridIndex,
      TASK.ChoiceGridIndex,
      ENV.FixationRadius,
      ENV.ChoiceRadius,
      ENV.CanvasRatio,
      canvasobj
    );
  } //IF !savedata, underlay grid

  if (
    f == 0 ||
    taskscreen != sc[f - 1] ||
    id[f] != id[f - 1] ||
    fr[f] != fr[f - 1]
  ) {
    if (taskscreen == 'Sample' || taskscreen == 'Test') {
      if (taskscreen == 'Sample') {
        var ims = [CURRTRIAL.sampleimage[CURRTRIAL.sequenceclip[f]][fr[f]]]; //fr[f] frame within clip
      } else if (taskscreen == 'Test') {
        var clip = 0;
        var ims = CURRTRIAL.testimages[clip][fr[f]];
      }
      if (typeof ims != 'undefined' && typeof ims[0] == 'object') {
        for (var j = 0; j <= ob[f].length - 1; j++) {
          var [objFilterSingleFrame, imgFilterSingleFrame] =
            updateFilterSingleFrame(
              taskscreen,
              ob[f][j],
              id[f][j],
              fr[f],
              gr[f][j]
            );
          var boundingBox = renderImage2D(
            ims[j],
            taskscreen,
            ob[f][j],
            id[f][j],
            fr[f],
            gr[f][j],
            imgFilterSingleFrame,
            canvasobj
          ); //render 2D image offscreen prior to next frame draw
          if (
            s == 0 &&
            typeof boundingBox[0] != 'undefined' &&
            boundingBox[0].length > 0
          ) {
            boundingBoxesChoice2D.x[j] = boundingBox[0];
            boundingBoxesChoice2D.y[j] = boundingBox[1];
          }
          updated2d = 1;
        } //FOR j display items
      } //IF image available
    } //IF 2D image
    else {
      var boundingBox = renderShape2D(taskscreen, gr[f], canvasobj);
      if (s == 0 && taskscreen == 'Choice') {
        boundingBoxesChoice2D = boundingBox;
      }
      updated2d = 1;
    } //ELSE 2D shape
  } //IF new taskscreen
} //FUNCTION render2D

function renderImage2D(
  im,
  sc,
  ob,
  id,
  fr,
  gr,
  imgFilterSingleFrame,
  canvasobj
) {
  var sz = chooseArrayElement(IMAGES[sc][ob].IMAGES.sizeInches, id, 0);
  var wdpixels = (sz * ENV.ViewportPPI) / ENV.CanvasRatio;
  var htpixels = (wdpixels * im.height) / im.width;
  var context = canvasobj.getContext('2d');
  var xleft = NaN;
  var ytop = NaN;
  var xbound = [];
  var ybound = [];
  xleft = Math.round(ENV.XGridCenter[gr] / ENV.CanvasRatio - 0.5 * wdpixels);
  ytop = Math.round(ENV.YGridCenter[gr] / ENV.CanvasRatio - 0.5 * htpixels);

  context.filter = imgFilterSingleFrame;
  context.drawImage(im, xleft, ytop, wdpixels, htpixels);
  context.filter = 'none';

  // Bounding boxes of images on canvas
  xbound = [xleft * ENV.CanvasRatio, (xleft + wdpixels) * ENV.CanvasRatio];
  ybound = [ytop * ENV.CanvasRatio, (ytop + htpixels) * ENV.CanvasRatio];

  xbound[0] = xbound[0] + CANVAS.offsetleft;
  xbound[1] = xbound[1] + CANVAS.offsetleft;
  ybound[0] = ybound[0] + CANVAS.offsettop;
  ybound[1] = ybound[1] + CANVAS.offsettop;

  return [xbound, ybound];
} //FUNCTION renderImage2D
//XX hidetestdistractors needs to go somewhere

function renderShape2D(sc, gr, canvasobj) {
  switch (sc) {
    case 'Blank':
      renderBlank(canvasobj, TASK.BackgroundColor2D);
      break;
    case 'Touchfix':
      if (TASK.SameDifferent <= 0) {
        bufferFixationUsingDot(
          ENV.FixationColor,
          gr,
          ENV.FixationRadius,
          canvasobj
        );
      } //IF !same-different
      else if (TASK.SameDifferent > 0) {
        bufferFixationUsingTriangle(
          ENV.ChoiceColor,
          gr,
          ENV.FixationRadius,
          canvasobj
        );
      } //IF same-different
      break;
    case 'FixationDot':
      if (ENV.FixationDotRadius > 0) {
        renderSquareOnCanvas(
          ENV.FixationDotColor,
          gr,
          2 * ENV.FixationDotRadius,
          canvasobj
        );
      }
      if (
        ENV.FixationWindowRadius > 0 &&
        FLAGS.savedata == 0 &&
        FLAGS.underlayGridPoints == 1
      ) {
        renderFixationWindow(
          ENV.XGridCenter,
          ENV.YGridCenter,
          gr,
          ENV.FixationWindowRadius,
          ENV.CanvasRatio,
          canvasobj
        );
      } //IF !savedata, overlay fixation window
      break;
    case 'PhotodiodeSquare':
      if (Math.round(frame.current / 2) == frame.current / 2) {
        renderSquareOnCanvas('white', gr, ENV.PhotodiodeSquareWidth, canvasobj);
      } //IF even frame, draw white square
      else {
        renderSquareOnCanvas('black', gr, ENV.PhotodiodeSquareWidth, canvasobj);
      } //ELSE go back to blank
    case 'Choice':
      return bufferChoiceUsingCircleSquare(
        ENV.ChoiceColor,
        ENV.ChoiceRadius,
        gr,
        canvasobj
      );
    case 'Reward':
      renderReward(canvasobj);
      break;
    case 'Punish':
      renderPunish(canvasobj);
      break;
    default:
  } //SWITCH taskscreen
} //FUNCTION renderShape2D

//========== BUFFER CHOICE CANVAS ==========//
function bufferChoiceUsingCircleSquare(
  choice_color,
  choice_radius,
  choice_grid_indices,
  canvasobj
) {
  // Option: gray out before buffering test: (for overriding previous trial's test screen if current trial test screen has transparent elements?)
  var boundingBoxes = { x: [], y: [] };
  // Draw test object(s):
  for (var i = 0; i <= choice_grid_indices.length - 1; i++) {
    // If HideTestDistractors, simply do not draw the image
    if (TASK.HideChoiceDistractors == 1) {
      if (correct_index != i) {
        boundingBoxes.x.push([NaN, NaN]);
        boundingBoxes.y.push([NaN, NaN]);
        continue;
      }
    }
    if (i == 0) {
      var funcreturn = renderDotOnCanvas(
        choice_color,
        choice_grid_indices[i],
        choice_radius,
        canvasobj
      );
    } //same = circle
    else if (i == 1) {
      var funcreturn = renderSquareOnCanvas(
        choice_color,
        choice_grid_indices[i],
        2 * choice_radius,
        canvasobj
      );
    } //different = square
    boundingBoxes.x.push(funcreturn[0]);
    boundingBoxes.y.push(funcreturn[1]);
  } //FOR i choices
  return boundingBoxes;
} //FUNCTION bufferChoiceUsingCircleSquare

// Dot render using gridindex
function renderDotOnCanvas(color, gridindex, dot_pixelradius, canvasobj) {
  var context = canvasobj.getContext('2d');

  // Draw fixation dot
  if (Array.isArray(gridindex)) {
    var xcent = gridindex[0] / ENV.CanvasRatio;
    var ycent = gridindex[1] / ENV.CanvasRatio;
  } //IF x,y coord provided
  else {
    var xcent = ENV.XGridCenter[gridindex] / ENV.CanvasRatio;
    var ycent = ENV.YGridCenter[gridindex] / ENV.CanvasRatio;
  } //IF gridindex provided
  var rad = dot_pixelradius / ENV.CanvasRatio;
  context.beginPath();
  context.arc(xcent, ycent, rad, 0 * Math.PI, 2 * Math.PI);
  context.fillStyle = color;
  context.fill();

  // Define (rectangular) boundaries of fixation
  // Bounding boxes of dot on canvas
  xbound = [(xcent - rad) * ENV.CanvasRatio, (xcent + rad) * ENV.CanvasRatio];
  ybound = [(ycent - rad) * ENV.CanvasRatio, (ycent + rad) * ENV.CanvasRatio];

  xbound[0] = xbound[0] + CANVAS.offsetleft;
  xbound[1] = xbound[1] + CANVAS.offsetleft;
  ybound[0] = ybound[0] + CANVAS.offsettop;
  ybound[1] = ybound[1] + CANVAS.offsettop;
  return [xbound, ybound];
} //FUNCTION renderDotOnCanvas

function getFixationWindowBoundingBox(gridindex, rad) {
  var xcent = ENV.XGridCenter[gridindex];
  var ycent = ENV.YGridCenter[gridindex];

  // Bounding boxes of dot on canvas
  xbound = [xcent - rad, xcent + rad];
  ybound = [ycent - rad, ycent + rad];

  xbound[0] = xbound[0] + CANVAS.offsetleft;
  xbound[1] = xbound[1] + CANVAS.offsetleft;
  ybound[0] = ybound[0] + CANVAS.offsettop;
  ybound[1] = ybound[1] + CANVAS.offsettop;

  return [xbound, ybound];
} //FUNCTION getFixationWindowBoundingBox

function renderSquareOnCanvas(color, gridindex, square_pixelwidth, canvasobj) {
  // Draw Square
  var context = canvasobj.getContext('2d');

  if (Array.isArray(gridindex)) {
    var xcent = gridindex[0] / ENV.CanvasRatio;
    var ycent = gridindex[1] / ENV.CanvasRatio;
  } //IF x,y coord provided
  else {
    var xcent = ENV.XGridCenter[gridindex] / ENV.CanvasRatio;
    var ycent = ENV.YGridCenter[gridindex] / ENV.CanvasRatio;
  } //IF gridindex provided
  var wd = square_pixelwidth / ENV.CanvasRatio;

  context.fillStyle = color;
  context.fillRect(xcent - wd / 2, ycent - wd / 2, wd, wd);

  // Define (rectangular) boundaries of fixation
  // Bounding boxes of dot on canvas
  xbound = [
    (xcent - wd / 2) * ENV.CanvasRatio,
    (xcent + wd / 2) * ENV.CanvasRatio,
  ];
  ybound = [
    (ycent - wd / 2) * ENV.CanvasRatio,
    (ycent + wd / 2) * ENV.CanvasRatio,
  ];

  xbound[0] = xbound[0] + CANVAS.offsetleft;
  xbound[1] = xbound[1] + CANVAS.offsetleft;
  ybound[0] = ybound[0] + CANVAS.offsettop;
  ybound[1] = ybound[1] + CANVAS.offsettop;
  return [xbound, ybound];
} //FUNCTION renderSquareOnCanvas

function renderTriangleOnCanvas(
  color,
  gridindex,
  square_pixelwidth,
  canvasobj
) {
  // Draw Triangle
  var context = canvasobj.getContext('2d');
  var wd = square_pixelwidth / ENV.CanvasRatio;
  var xcent = ENV.XGridCenter[gridindex] / ENV.CanvasRatio;
  var ycent = ENV.YGridCenter[gridindex] / ENV.CanvasRatio;
  context.fillStyle = color;

  // var len_side = Math.sqrt(Math.pow(2*(wd/2),2))
  // var len_side = Math.sin(30 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)

  context.beginPath();
  // context.moveTo(xcent, ycent + wd/2); //bottom vertex
  // context.lineTo(xcent-wd/2, ycent-wd/2); //top left
  // context.lineTo(xcent+wd/2, ycent-wd/2); //top right
  context.moveTo(xcent, ycent - wd / 2); //bottom vertex
  context.lineTo(xcent - wd / 2, ycent + wd / 2); //top left
  context.lineTo(xcent + wd / 2, ycent + wd / 2); //top right
  context.fill();

  // Define (rectangular) boundaries of fixation
  // Bounding boxes of dot on canvas
  xbound = [
    (xcent - wd / 2) * ENV.CanvasRatio,
    (xcent + wd / 2) * ENV.CanvasRatio,
  ];
  ybound = [
    (ycent - wd / 2) * ENV.CanvasRatio,
    (ycent + wd / 2) * ENV.CanvasRatio,
  ];

  xbound[0] = xbound[0] + CANVAS.offsetleft;
  xbound[1] = xbound[1] + CANVAS.offsetleft;
  ybound[0] = ybound[0] + CANVAS.offsettop;
  ybound[1] = ybound[1] + CANVAS.offsettop;
  return [xbound, ybound];
} //FUNCTION renderTriangleOnCanvas

function renderBlank(canvasobj, bkgdcolor) {
  var context = canvasobj.getContext('2d');
  context.fillStyle = bkgdcolor;
  context.clearRect(0, 0, canvasobj.width, canvasobj.height);
} //FUNCTION renderBlank

function renderFixationWindow(
  gridx,
  gridy,
  fixationgridindex,
  fixationwindowradius,
  canvasratio,
  canvasobj
) {
  //---- Fixation Window Bounding Box (yellow)
  var wd = (2 * fixationwindowradius) / canvasratio;
  var xcent = gridx[fixationgridindex] / canvasratio;
  var ycent = gridy[fixationgridindex] / canvasratio;
  context.strokeStyle = 'yellow';
  context.strokeRect(xcent - wd / 2, ycent - wd / 2, wd, wd);

  var displaycoord = [
    (xcent - wd / 2) * canvasratio,
    (ycent - wd / 2) * canvasratio,
    (xcent + wd / 2) * canvasratio,
    (ycent + wd / 2) * canvasratio,
  ];
  displayPhysicalSize(displaycoord, canvasobj);
}

function renderBlankWithGridMarkers(
  gridx,
  gridy,
  fixationgridindex,
  samplegridindex,
  testgridindex,
  choicegridindex,
  fixationradius,
  choiceradius,
  canvasratio,
  canvasobj
) {
  var outofbounds_str = '';
  var context = canvasobj.getContext('2d');
  context.clearRect(0, 0, canvasobj.width, canvasobj.height);

  //Display grid (red)
  for (var i = 0; i <= gridx.length - 1; i++) {
    rad = 10;
    context.beginPath();
    context.arc(
      gridx[i] / ENV.CanvasRatio,
      gridy[i] / ENV.CanvasRatio,
      rad / ENV.CanvasRatio,
      0 * Math.PI,
      2 * Math.PI
    );
    context.fillStyle = 'red';
    context.fill();

    var displaycoord = [
      gridx[i] - rad,
      gridy[i] - rad,
      gridx[i] + rad,
      gridy[i] + rad,
    ];
    var outofbounds = checkDisplayBounds(displaycoord);
    if (outofbounds == 1) {
      outofbounds_str =
        outofbounds_str + '<br>' + 'gridpoint' + i + ' is out of bounds';
    }
    displayGridCoordinate(i, [gridx[i], gridy[i]], canvasobj);
  }

  //---- Fixation Image Bounding Box (white)
  var wd = (2 * fixationradius) / ENV.CanvasRatio;
  var xcent = gridx[fixationgridindex] / ENV.CanvasRatio;
  var ycent = gridy[fixationgridindex] / ENV.CanvasRatio;
  context.strokeStyle = 'white';
  context.strokeRect(xcent - wd / 2, ycent - wd / 2, wd, wd);

  var displaycoord = [
    (xcent - wd / 2) * ENV.CanvasRatio,
    (ycent - wd / 2) * ENV.CanvasRatio,
    (xcent + wd / 2) * ENV.CanvasRatio,
    (ycent + wd / 2) * ENV.CanvasRatio,
  ];
  var outofbounds = checkDisplayBounds(displaycoord);
  if (outofbounds == 1) {
    outofbounds_str =
      outofbounds_str + '<br>' + 'Fixation dot is out of bounds';
  }
  displayPhysicalSize(displaycoord, canvasobj);

  //---- Choice Image Bounding Box(es) (red)
  if (TASK.SameDifferent > 0) {
    for (var i = 0; i <= choicegridindex.length - 1; i++) {
      var wd = (2 * choiceradius) / ENV.CanvasRatio;
      var xcent = gridx[choicegridindex[i]] / ENV.CanvasRatio;
      var ycent = gridy[choicegridindex[i]] / ENV.CanvasRatio;
      context.strokeStyle = 'red';
      context.strokeRect(xcent - wd / 2, ycent - wd / 2, wd, wd);

      var displaycoord = [
        (xcent - wd / 2) * ENV.CanvasRatio,
        (ycent - wd / 2) * ENV.CanvasRatio,
        (xcent + wd / 2) * ENV.CanvasRatio,
        (ycent + wd / 2) * ENV.CanvasRatio,
      ];
      var outofbounds = checkDisplayBounds(displaycoord);
      if (outofbounds == 1) {
        outofbounds_str =
          outofbounds_str + '<br>' + 'Choice Image' + i + ' is out of bounds';
      }
      displayPhysicalSize(displaycoord, canvasobj);
    }
  } //IF same-different choice screen

  if (VISIBLECANVASWEBGL.width > 4096 || VISIBLECANVASWEBGL.height > 4096) {
    outofbounds_str =
      outofbounds_str +
      'Canvas may be too large for webgl limit of 4096 pixels in either dimension -- 3d rendering may not be accurate! Consider using a smaller display size.';
  }

  if (outofbounds_str == '') {
    outofbounds_str = 'All display elements are fully visible';
  }

  displayoutofboundsstr = outofbounds_str;
} //FUNCTION renderBlankwithGridMarkers

function renderReward(canvasobj) {
  var context = canvasobj.getContext('2d');
  context.fillStyle = 'green';
  context.fillRect(
    xcanvascenter / ENV.CanvasRatio - 200 / ENV.CanvasRatio,
    ycanvascenter / ENV.CanvasRatio - 200 / ENV.CanvasRatio,
    400 / ENV.CanvasRatio,
    400 / ENV.CanvasRatio
  );
} //FUNCTION renderReward

function renderPunish(canvasobj) {
  var context = canvasobj.getContext('2d');
  context.fillStyle = '#3c3c3c';
  context.fillRect(
    xcanvascenter / ENV.CanvasRatio - 200 / ENV.CanvasRatio,
    ycanvascenter / ENV.CanvasRatio - 200 / ENV.CanvasRatio,
    400 / ENV.CanvasRatio,
    400 / ENV.CanvasRatio
  );
} //FUNCTION renderPunish

async function bufferFixationUsingImage(
  image,
  gridindex,
  sample_wdpixels,
  sample_htpixels,
  canvasobj
) {
  // 	var context=canvasobj.getContext('2d');
  // 	context.clearRect(0,0,canvasobj.width,canvasobj.height);

  boundingBoxesFixation['x'] = [];
  boundingBoxesFixation['y'] = [];

  if (typeof image != 'undefined') {
    funcreturn = await renderImageOnCanvas(
      image,
      gridindex,
      sample_wdpixels,
      sample_htpixels,
      canvasobj
    );
    boundingBoxesFixation.x.push(funcreturn[0]);
    boundingBoxesFixation.y.push(funcreturn[1]);
  } //IF image
} //FUNCTION bufferFixationUsingImage

async function bufferFixationUsingDot(
  color,
  gridindex,
  dot_pixelradius,
  canvasobj
) {
  boundingBoxesFixation['x'] = [];
  boundingBoxesFixation['y'] = [];

  funcreturn = renderDotOnCanvas(color, gridindex, dot_pixelradius, canvasobj);
  boundingBoxesFixation.x.push(funcreturn[0]);
  boundingBoxesFixation.y.push(funcreturn[1]);
} //FUNCTION bufferFixationUsingDot

async function bufferFixationUsingTriangle(
  color,
  gridindex,
  dot_pixelradius,
  canvasobj
) {
  boundingBoxesFixation['x'] = [];
  boundingBoxesFixation['y'] = [];

  funcreturn = renderTriangleOnCanvas(
    color,
    gridindex,
    2 * dot_pixelradius,
    canvasobj
  );
  boundingBoxesFixation.x[0] = funcreturn[0];
  boundingBoxesFixation.y[0] = funcreturn[1];
} //FUNCTION bufferFixationUsingTriangle

function checkDisplayBounds(displayobject_coord) {
  var outofbounds = 0;
  if (
    displayobject_coord[0] / ENV.CanvasRatio < CANVAS.workspace[0] ||
    displayobject_coord[1] / ENV.CanvasRatio < CANVAS.workspace[1] ||
    displayobject_coord[2] / ENV.CanvasRatio > CANVAS.workspace[2] ||
    displayobject_coord[3] / ENV.CanvasRatio > CANVAS.workspace[3]
  ) {
    outofbounds = 1;
  }
  return outofbounds;
}
function setupImageLoadingText() {
  var textobj = document.getElementById('imageloadingtext');
  textobj.style.top = CANVAS.offsettop + 'px';
  textobj.innerHTML = '';
  setupCanvasListeners(textobj);
}

function updateImageLoadingAndDisplayText(str) {
  var textobj = document.getElementById('imageloadingtext');

  //DISPLAY TIMING: Software check for frame drops
  var dt = [];
  var u_dt = 0;
  for (var i = 0; i <= CURRTRIAL.tsequenceactualclip.length - 1; i++) {
    dt[i] = Math.round(
      CURRTRIAL.tsequenceactualclip[i] - CURRTRIAL.tsequencedesiredclip[i]
    );
    u_dt = u_dt + Math.abs(dt[i]);
  }
  u_dt = u_dt / dt.length;

  textobj.innerHTML =
    str +
    imageloadingtimestr +
    '<br>' +
    displayoutofboundsstr +
    '<br>' +
    0.01 * Math.round(100 * ENV.FrameRateDisplay) +
    'Hz ' +
    ' (' +
    0.1 * Math.round(10000 / ENV.FrameRateDisplay) +
    'ms res) display' +
    ' --- ' +
    0.01 * Math.round(100 * ENV.FrameRateMovie) +
    'Hz scene update' +
    '<br>' +
    '<font color=red> mean(t_actual - t_desired) = ' +
    Math.round(u_dt) +
    ' ms' +
    '  (min=' +
    Math.round(Math.min(...dt)) +
    ', max=' +
    Math.round(Math.max(...dt)) +
    ') </font>' +
    '<br>' +
    'software desired - software actual' +
    dt +
    '<br><br>' +
    'roundtrip command' +
    +'<br>' +
    'roundtrip reward' +
    +'<br><br>' +
    'softwared desired - software actual' +
    '<br><br>' +
    'softwared actual - photodiode actual' +
    '<br>' +
    eyedataratestr;
}

function displayPhysicalSize(displayobject_coord, canvasobj) {
  var visible_ctxt = canvasobj.getContext('2d');
  visible_ctxt.textBaseline = 'hanging';
  visible_ctxt.fillStyle = 'white';
  visible_ctxt.font = '16px Verdana';
  visible_ctxt.fillText(
    Math.round(
      (100 * (displayobject_coord[2] - displayobject_coord[0])) /
        ENV.ViewportPPI
    ) /
      100 +
      ' x ' +
      Math.round(
        (100 * (displayobject_coord[3] - displayobject_coord[1])) /
          ENV.ViewportPPI
      ) /
        100 +
      ' in',
    displayobject_coord[0] / ENV.CanvasRatio,
    (displayobject_coord[1] - 16) / ENV.CanvasRatio
  );
}

function displayGridCoordinate(idx, xycoord, canvasobj) {
  var visible_ctxt = canvasobj.getContext('2d');
  visible_ctxt.textAlign = 'center';
  visible_ctxt.textBaseline = 'middle';
  visible_ctxt.fillStyle = 'white';
  visible_ctxt.font = '20px Verdana';
  visible_ctxt.fillText(
    idx,
    xycoord[0] / ENV.CanvasRatio,
    xycoord[1] / ENV.CanvasRatio
  );
}

function setViewport(gridindex) {
  //==== RENDERER 2D VIEWPORT
  //width and height are determined by object size Inches. the viewport can't be smaller than the object's size. otherwise the object will look cropped
  var scenecenterX = ENV.XGridCenter[gridindex];
  var scenecenterY = ENV.YGridCenter[gridindex];
  var scenewidth = renderer.getContext().canvas.width;
  var sceneheight = renderer.getContext().canvas.height;
  var left = scenecenterX - scenewidth / 2;
  var bottom = -sceneheight / 2 + (VISIBLECANVAS.clientHeight - scenecenterY);

  renderer.setViewport(left, bottom, scenewidth, sceneheight);
  renderer.setScissor(left, bottom, scenewidth, sceneheight);
  renderer.setScissorTest(true);
}

async function saveScreenshot(
  canvasobj,
  currtrial,
  taskscreen,
  framenum,
  objectlabel,
  objectind
) {
  //---- upload screenshot to firebase
  //sample image will be uploaded to the appropriate folder in the scene

  if (taskscreen == 'Sample') {
    var currtrial_samplepath = TASK.ImageBagsSample[objectlabel];
  } else if (taskscreen == 'Test') {
    var currtrial_samplepath =
      TASK.ImageBagsSample[CURRTRIAL.sample_scenebag_label];
  }
  var currtrial_date = ENV.DataFileName;
  var currtrial_parampath = ENV.ParamFileName;

  //path to scene folder
  var ind_start = currtrial_samplepath.lastIndexOf('/');
  var ind_end = currtrial_samplepath.indexOf('.js');
  var scenefolder = currtrial_samplepath.substring(0, ind_end);

  //paramfolder name
  var ind_start = currtrial_parampath.lastIndexOf('/');
  var ind_end = currtrial_parampath.indexOf('.json');
  var paramfolder = currtrial_parampath.substring(ind_start + 1, ind_end);

  //date
  var ind_start = currtrial_date.lastIndexOf('/');
  var ind_end = currtrial_date.indexOf('T');
  var date = currtrial_date.substring(ind_start + 1, ind_end);

  var storage_path =
    scenefolder +
    '_scene_' +
    date +
    '_' +
    paramfolder +
    '_' +
    ENV.DeviceName +
    '_device';

  if (canvasobj.width > 4096 || canvasobj.height > 4096) {
    console.log(
      'Canvas may be too large for webgl limit of 4096 pixels in either dimension -- Image Saving may not be accurate! Consider using a smaller display size.'
    );
  }

  currtrial = String(currtrial).padStart(3, '0');
  framenum = String(framenum).padStart(3, '0');

  if (canvasobj == OFFSCREENCANVAS) {
    canvasobj.convertToBlob().then(function (blob) {
      var fullpath =
        storage_path +
        '/' +
        'offscreencanvas' +
        '_' +
        'trialnum' +
        currtrial +
        '_' +
        taskscreen +
        '_' +
        'framenum' +
        framenum;

      if (objectlabel.length > 1) {
        for (var i = 0; i <= objectlabel.length - 1; i++) {
          fullpath =
            fullpath +
            '_' +
            'label' +
            objectlabel[i] +
            '_' +
            'index' +
            objectind[i];
        } //FOR i objects
      } else {
        fullpath =
          fullpath + '_' + 'label' + objectlabel + '_' + 'index' + objectind;
      }

      fullpath = fullpath + '.png';

      try {
        var response = storage.ref().child(fullpath).put(blob);
        console.log('saved image: ' + fullpath);
        console.log(
          'FIREBASE: Successful image file upload. Size:' +
            Math.round(response.blob_.size_ / 1000) +
            'kb'
        );
      } catch (error) {
        //TRY
        console.log(error);
      }
    }); //.toBlob function
  } else {
    canvasobj.toBlob(function (blob) {
      var fullpath =
        storage_path +
        '/' +
        canvasobj.id +
        '_' +
        'trialnum' +
        currtrial +
        '_' +
        taskscreen +
        '_' +
        'framenum' +
        framenum;

      if (objectlabel.length > 1) {
        for (var i = 0; i <= objectlabel.length - 1; i++) {
          fullpath =
            fullpath +
            '_' +
            'label' +
            objectlabel[i] +
            '_' +
            'index' +
            objectind[i];
        } //FOR i objects
      } else {
        fullpath =
          fullpath + '_' + 'label' + objectlabel + '_' + 'index' + objectind;
      }

      fullpath = fullpath + '.png';

      try {
        var response = storage.ref().child(fullpath).put(blob);
        console.log('saved image: ' + fullpath);
        console.log(
          'FIREBASE: Successful image file upload. Size:' +
            Math.round(response.blob_.size_ / 1000) +
            'kb'
        );
      } catch (error) {
        //TRY
        console.log(error);
      }
    }); //.toBlob function
  }
} //FUNCTION saveScreenshot

// Estimate max software fps
function estimatefps() {
  var resolveFunc;
  var errFunc;
  p = new Promise(function (resolve, reject) {
    resolveFunc = resolve;
    errFunc = reject;
  }).then();

  var lasttime = null;
  var elapsedSinceLastFrame = [];
  var nframes = 0;
  var dtScreen = 0;
  async function dummyLoop(timestamp) {
    if (!lasttime) lasttime = timestamp;
    elapsedSinceLastFrame[nframes] = timestamp - lasttime;
    lasttime = timestamp;
    nframes = nframes + 1;
    if (nframes < 20) {
      window.requestAnimationFrame(dummyLoop);
    } else {
      for (var i = 10; i <= nframes - 1; i++) {
        dtScreen = dtScreen + elapsedSinceLastFrame[i];
      }
      dtScreen = dtScreen / (nframes - 10);
      resolveFunc(1000 / dtScreen);
    }
  } //dummyLoop

  window.requestAnimationFrame(dummyLoop);
  return p;
} //estimatefps

function appendTest(teston) {
  var t0 = CURRTRIAL.tsequence[CURRTRIAL.tsequence.length - 1];
  if (TASK.SameDifferent <= 0) {
    var seq = ['test'];
    var tseq = [t0];
  } //IF SR or MTS, show test
  else if (TASK.SameDifferent > 0) {
    if (TASK.TestOFF > 0) {
      var seq = ['test', 'blank', 'choice'];
      var tseq = [t0, t0 + teston, t0 + teston + TASK.TestOFF];
    } //ELSEIF TestOFF
    else if (TASK.TestOFF <= 0) {
      var seq = ['test', 'choice'];
      var tseq = [t0, t0 + teston];
    } //ELSEIF no TestOFF
  } //IF SD, show test & choice
  return [seq, tseq];
} //FUNCTION appendTest

//================== CANVAS SETUP ==================//
function refreshCanvasSettings(TASK) {
  // Adjust location of CANVAS based on species-specific setup
  if (typeof TASK.HeadsupDisplayFraction != 'undefined') {
    CANVAS.headsupfraction = TASK.HeadsupDisplayFraction;
  } //IF headsupdisplayfraction specified
  else {
    if (TASK.Species == 'macaque' || TASK.Species == 'human') {
      CANVAS.headsupfraction = 0;
    } else if (TASK.Species == 'marmoset' || TASK.Species == 'model') {
      CANVAS.headsupfraction = 1 / 3 - 0.06;
    }
  }

  if (CANVAS.headsupfraction == 0) {
    var textobj = document.getElementById('headsuptext');
    textobj.innerHTML = '';
    var textobj = document.getElementById('headsuptextdevices');
    textobj.innerHTML = '';
  }
} //refreshCanvasSettings

function writeTextonBlankCanvas(textstr, x, y) {
  var blank_canvasobj = CANVAS.obj.blank;
  var visible_ctxt = blank_canvasobj.getContext('2d');
  visible_ctxt.textBaseline = 'hanging';
  visible_ctxt.fillStyle = 'white';
  visible_ctxt.font = '18px Verdana';
  visible_ctxt.fillText(textstr, x, y);
}

function updateStatusText(text) {
  var textobj = document.getElementById('headsuptext');
  textobj.innerHTML = text;
}

function setupCanvasHeadsUp() {
  canvasobj = document.getElementById('canvasheadsup');
  canvasobj.width = document.body.clientWidth;
  canvasobj.height = Math.round(
    document.body.clientHeight * CANVAS.headsupfraction
  );
  CANVAS.offsettop = canvasobj.height;
  if (CANVAS.headsupfraction == 0) {
    canvasobj.style.display = 'none';

    //hide buttons for triggering pump
    document.querySelector('button[id=pumpflush]').style.display = 'none'; //if do style.visibility=hidden, element will still occupy space
    document.querySelector('button[id=pumptrigger]').style.display = 'none'; //if do style.visibility=hidden, element will still occupy space

    document.getElementById('headsuptext').style.display = 'none';
    document.getElementById('headsuptextdevices').style.display = 'none';
  } else {
    canvasobj.style.display = 'block';

    document.getElementById('headsuptext').style.height =
      100 * CANVAS.headsupfraction + '%';
    document.getElementById('headsuptextdevices').style.height =
      100 * CANVAS.headsupfraction + '%';

    //show buttons for triggering pump
    document.querySelector('button[id=pumpflush]').style.display = 'block';
    document.querySelector('button[id=pumpflush]').style.visibility = 'visible';
    document.querySelector('button[id=pumptrigger]').style.display = 'block';
    document.querySelector('button[id=pumptrigger]').style.visibility =
      'visible';
    document.querySelector('button[id=connectblescale]').style.display =
      'block';
    document.querySelector('button[id=connectblescale]').style.visibility =
      'visible';

    document.querySelector('button[id=pumpflush]').addEventListener(
      'pointerup',
      function () {
        event.preventDefault();
        runPump('flush');
      },
      false
    );
    document.querySelector('button[id=pumptrigger]').addEventListener(
      'pointerup',
      function () {
        event.preventDefault();
        runPump('trigger');
      },
      false
    );
  }
  var context = canvasobj.getContext('2d');

  context.fillStyle = '#202020';
  context.fillRect(0, 0, canvasobj.width, canvasobj.height);
  canvasobj.addEventListener('touchstart', touchstart_listener, false);
}
function setupCanvas(canvasobj) {
  // center in page
  canvasobj.style.top = CANVAS.offsettop + 'px';
  canvasobj.style.left = CANVAS.offsetleft + 'px';
  canvasobj.width = windowWidth - CANVAS.offsetleft;
  canvasobj.height = windowHeight - CANVAS.offsettop;
  canvasobj.style.margin = '0 auto';
  canvasobj.style.display = 'block'; //visible

  setupCanvasListeners(canvasobj);
}

function setupEyeTrackerCanvas() {
  //SETUP similar to visiblecanvas
  EYETRACKERCANVAS.style.top = VISIBLECANVAS.style.top; //mimic VISIBLECANVAS
  EYETRACKERCANVAS.style.left = VISIBLECANVAS.style.left; //mimic VISIBLECANVAS
  EYETRACKERCANVAS.width = VISIBLECANVAS.width; //mimic VISIBLECANVAS
  EYETRACKERCANVAS.height = VISIBLECANVAS.height; //mimic VISIBLECANVAS

  EYETRACKERCANVAS.style.margin = '0 auto';
  EYETRACKERCANVAS.style.display = 'visible';

  setupCanvasListeners(EYETRACKERCANVAS);
}

function setupCanvasListeners(canvasobj) {
  // assign listeners
  canvasobj.addEventListener('touchstart', touchstart_listener, {
    capture: false,
    passive: false,
  }); // handle touch & mouse behavior independently http://www.html5rocks.com/en/mobile/touchandmouse/
  canvasobj.addEventListener('touchmove', touchmove_listener, {
    passive: false,
  }); // based on console suggestion: Consider marking event handler as 'passive' to make the page more responive. https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
  canvasobj.addEventListener('touchend', touchend_listener, {
    capture: false,
    passive: false,
  });
  canvasobj.addEventListener('mousedown', touchstart_listener, {
    capture: false,
    passive: false,
  }); // handle touch & mouse behavior independently http://www.html5rocks.com/en/mobile/touchandmouse/
  canvasobj.addEventListener('mousemove', touchmove_listener, {
    passive: false,
  }); // based on console suggestion: Consider marking event handler as 'passive' to make the page more responive. https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
  canvasobj.addEventListener('mouseup', touchend_listener, {
    capture: false,
    passive: false,
  });
}

// Sync: Adjust canvas for the device pixel ratio & browser backing store size
// from http://www.html5rocks.com/en/tutorials/canvas/hidpi/#disqus_thread
function scaleCanvasforHiDPI(canvasobj) {
  if (ENV.DevicePixelRatio !== backingStoreRatio) {
    context = canvasobj.getContext('2d');
    var oldWidth = canvasobj.width;
    var oldHeight = canvasobj.height;
    canvasobj.width = oldWidth / ENV.CanvasRatio;
    canvasobj.height = oldHeight / ENV.CanvasRatio;
    canvasobj.style.width = windowWidth - CANVAS.offsetleft + 'px';
    canvasobj.style.height = windowHeight - CANVAS.offsettop + 'px';
    canvasobj.style.margin = '0 auto';
  }
}

function updateHeadsUpDisplay() {
  if (CANVAS.headsupfraction == 0) {
    return;
  }

  var textobj = document.getElementById('headsuptext');

  // Overall performance
  var ncorrect = 0;
  var nreward = 0;

  if (TASK.Species == 'model') {
    if (CURRTRIAL.num > TASK.ModelConfig.trainIdx) {
      for (
        let i = TASK.ModelConfig.trainIdx + 1;
        i < EVENTS['trialseries']['Response'].length;
        i++
      ) {
        if (
          EVENTS['trialseries']['Response'][i] ==
          EVENTS['trialseries']['CorrectItem'][i]
        ) {
          ncorrect = ncorrect + 1;
          let len =
            EVENTS['trialseries']['Response'].length -
            TASK.ModelConfig.trainIdx;
          var pctcorrect = Math.round((100 * ncorrect) / len);
        }
      }
    }
  } else {
    for (var i = 0; i <= EVENTS['trialseries']['Response'].length - 1; i++) {
      if (
        EVENTS['trialseries']['Response'][i] ==
        EVENTS['trialseries']['CorrectItem'][i]
      ) {
        ncorrect = ncorrect + 1;
        nreward = nreward + EVENTS['trialseries']['NReward'][i];
        var pctcorrect = Math.round(
          (100 * ncorrect) / EVENTS['trialseries']['Response'].length
        );
      }
    } //FOR i trials
  }

  // Task type
  var task1 = '';
  var task2 = '';
  if (TASK.RewardStage == 0) {
    task1 = 'Fixation';
  } else if (TASK.RewardStage == 1) {
    task1 = TASK.TestGridIndex.length + '-way AFC:';
    task2 = TASK.ImageBagsTest.length + '-categories in pool';
  }
  if (CANVAS.headsupfraction > 0) {
    if (TASK.Species == 'model') {
      if (CURRTRIAL.num < TASK.ModelConfig.trainIdx - 1) {
        // console.log('screenfunc:', EVENTS['trialseries']['Response'].length, CURRTRIAL.num, TASK.ModelConfig.trainIdx);
        let tmp = EVENTS['trialseries']['Response'].length;
        let tmp2 = CURRTRIAL.num + 2;
        textobj.innerHTML =
          'User: ' +
          ENV.ResearcherDisplayName +
          ', ' +
          ENV.ResearcherEmail +
          '<br>' +
          'Agent: ' +
          ENV.Subject +
          ', <font color=green><b>' +
          'TRAINING</b></font> ' +
          '(' +
          tmp2 +
          ' of ' +
          TASK.ModelConfig.trainIdx +
          ')' +
          '<br>' +
          task1 +
          '<br>' +
          task2 +
          '<br>' +
          '<br>' +
          'last trial @ ' +
          CURRTRIAL.lastTrialCompleted.toLocaleTimeString('en-US') +
          '<br>' +
          'last saved to firebase @ ' +
          CURRTRIAL.lastFirebaseSave.toLocaleTimeString('en-US');
      } else {
        textobj.innerHTML =
          'User: ' +
          ENV.ResearcherDisplayName +
          ', ' +
          ENV.ResearcherEmail +
          '<br>' +
          'Agent: ' +
          ENV.Subject +
          ', <font color=green><b>' +
          pctcorrect +
          '%</b></font> ' +
          '(' +
          ncorrect +
          ' of ' +
          (EVENTS['trialseries']['Response'].length -
            TASK.ModelConfig.trainIdx) +
          ' trials)' +
          '<br>' +
          task1 +
          '<br>' +
          task2 +
          '<br>' +
          '<br>' +
          'last trial @ ' +
          CURRTRIAL.lastTrialCompleted.toLocaleTimeString('en-US') +
          '<br>' +
          'last saved to firebase @ ' +
          CURRTRIAL.lastFirebaseSave.toLocaleTimeString('en-US');
      }
    } else {
      textobj.innerHTML =
        'User: ' +
        ENV.ResearcherDisplayName +
        ', ' +
        ENV.ResearcherEmail +
        '<br>' +
        'Agent: ' +
        ENV.Subject +
        ', <font color=green><b>' +
        pctcorrect +
        '%</b></font> ' +
        '(' +
        ncorrect +
        ' of ' +
        EVENTS['trialseries']['Response'].length +
        ' trials)' +
        '<br>' +
        'NRewards=' +
        nreward +
        ', <font color=green><b>' +
        Math.round((TASK.RewardPer1000Trials * nreward) / 1000) +
        'mL</b></font> (' +
        Math.round(TASK.RewardPer1000Trials) +
        ' mL per 1000)' +
        '<br> ' +
        task1 +
        '<br>' +
        task2 +
        '<br>' +
        '<br>' +
        'last trial @ ' +
        CURRTRIAL.lastTrialCompleted.toLocaleTimeString('en-US') +
        '<br>' +
        'last saved to firebase @ ' +
        CURRTRIAL.lastFirebaseSave.toLocaleTimeString('en-US');
    }

    if (FLAGS.RFIDGeneratorCreated == 1) {
      textobj.innerHTML =
        textobj.innerHTML +
        '<br>' +
        '<font color = red>' +
        'PAUSED: waiting for RFID read!!' +
        '<br></font>';
    }
    if (TASK.CheckRFID > 0 && port.connected == false) {
      textobj.innerHTML =
        textobj.innerHTML +
        '<br>' +
        '<font color = red>' +
        'WARNING: USB device not connected to check RFID!!' +
        '<br></font>';
    }
    if (typeof FLAGS.automatortext != 'undefined') {
      textobj.innerHTML = textobj.innerHTML + '<br><br>' + FLAGS.automatortext;
    }
  } //IF headsupfraction > 0
  else if (CANVAS.headsupfraction == 0) {
    textobj.innerHTML = ''; //port.statustext_connect + blescale.statustext_connect
  } else if (isNaN(CANVAS.headsupfraction)) {
    //before task params load
    if (ENV.ScreenRatio == -1) {
      var firestoreRecordFound =
        '<font color = red> DEVICE RECORD NOT FOUND! </font>';
      var screenRatioMatchesDPR = '';
    } else {
      var firestoreRecordFound =
        '<font color = green> DEVICE RECORD FOUND </font>';
      if (ENV.ScreenRatio != ENV.DevicePixelRatio) {
        var screenRatioMatchesDPR =
          'Detected DevicePixelRatio <font color = red>DOES NOT match record </font>';
      } else {
        var screenRatioMatchesDPR =
          'Detected DevicePixelRatio <font color = green>MATCHES record </font>';
      }
    }
    textobj.innerHTML =
      'User: ' +
      ENV.ResearcherDisplayName +
      ', ' +
      ENV.ResearcherEmail +
      '<br>' +
      'No trials performed' +
      '<br>' +
      '<br><b>' +
      firestoreRecordFound +
      ' for ' +
      ENV.DeviceName.toLowerCase() +
      '</b>' +
      '<br>' +
      'Screen Size = ' +
      ENV.ScreenSizeInches[2] +
      'in (' +
      ENV.ViewportPixels +
      'px; ' +
      ENV.ScreenRatio +
      'x' +
      ')' +
      '<br>' +
      screenRatioMatchesDPR +
      '<br>' +
      '<br>' +
      'Device brand,name,type: ' +
      ENV.DeviceBrand +
      ', ' +
      '<u><font color = green>' +
      ENV.DeviceName +
      '</font></u>' +
      ', ' +
      ENV.DeviceType +
      '<br>' +
      'Screen: ' +
      ENV.DeviceScreenWidth +
      'x' +
      ENV.DeviceScreenHeight +
      ' pixels' +
      '<br>' +
      'TouchScreen: ' +
      ENV.DeviceTouchScreen +
      '<br>' +
      'GPU: ' +
      ENV.DeviceGPU +
      '<br>' +
      'OS name,codename,ver: ' +
      ENV.DeviceOSName +
      ', ' +
      '<u><font color = green>' +
      ENV.DeviceOSCodeName +
      '</font></u>' +
      ', ' +
      ENV.DeviceOSVersion +
      '<br>' +
      'Browser: ' +
      '<u><font color = green>' +
      ENV.DeviceBrowserName +
      '</font></u>' +
      ' v' +
      ENV.DeviceBrowserVersion;
  } //ELSE IF isnan
} //FUNCTION updateHeadsUpDisplay

function updateHeadsUpDisplayDevices() {
  var textobj = document.getElementById('headsuptextdevices');
  if (CANVAS.headsupfraction > 0) {
    textobj.innerHTML =
      '<font color=red><b>' +
      ble.statustext +
      port.statustext_connect +
      '<br></font>' +
      '<font color=green><b>' +
      port.statustext_sent +
      '<br></font>' +
      '<font color=blue><b>' +
      port.statustext_received +
      '<br></font>' +
      '<font color=red><b>' +
      blescale.statustext_connect +
      '<br></font>' +
      '<font color=blue><b>' +
      blescale.statustext_received +
      '<br></font>';
  } else if (CANVAS.headsupfraction == 0) {
    textobj.innerHTML = ''; //port.statustext_connect + blescale.statustext_connect
  } else if (isNaN(CANVAS.headsupfraction)) {
    //before task params load
    textobj.innerHTML = port.statustext_connect + blescale.statustext_connect;
  }
}

function updateHeadsUpDisplayAutomator(
  currentautomatorstagename,
  pctcorrect,
  ntrials,
  minpctcorrect,
  mintrials,
  eventstring
) {
  if (CANVAS.headsupfraction > 0) {
    var textstr =
      'Automator: ' +
      '<font color=red><b>' +
      TASK.Automator +
      '</b></font>' +
      ', <font color=white><b>' +
      'Stage=' +
      currentautomatorstagename +
      TASK.CurrentAutomatorStage +
      '</b></font>' +
      '<br> Performance: ' +
      '<font color=green><b>' +
      Math.round(pctcorrect) +
      '%, last ' +
      ntrials +
      ' trials</b></font> ' +
      '(min: ' +
      minpctcorrect +
      '%, ' +
      mintrials +
      ' trials)' +
      '<br>' +
      eventstring;
  } else if (CANVAS.headsupfraction == 0) {
    var textstr = '';
  }
  return textstr;
} //FUNCTION update

function defineImageGrid(ngridpoints, gridspacing, xoffset, yoffset) {
  var xgrid = [];
  var ygrid = [];
  var xgridcent = [];
  var ygridcent = [];
  var cnt = 0;
  for (var i = 1; i <= ngridpoints; i++) {
    for (var j = 1; j <= ngridpoints; j++) {
      xgrid[cnt] = i - 1 / 2;
      ygrid[cnt] = j - 1 / 2;
      cnt++;
    }
  }

  //center x & y grid within canvas
  var xcanvascent =
    ((document.body.clientWidth - CANVAS.offsetleft) *
      ENV.CanvasRatio *
      ENV.DevicePixelRatio) /
    2;
  xcanvascent = xcanvascent + xoffset;
  var dx = xcanvascent - (gridspacing * ngridpoints) / 2; //left side of grid

  var ycanvascent =
    ((document.body.clientHeight - CANVAS.offsettop) *
      ENV.CanvasRatio *
      ENV.DevicePixelRatio) /
    2;
  ycanvascent = ycanvascent + yoffset;
  var dy = ycanvascent - (gridspacing * ngridpoints) / 2; //top of grid

  for (var i = 0; i <= xgrid.length - 1; i++) {
    xgridcent[i] = Math.round(xgrid[i] * gridspacing + dx);
    ygridcent[i] = Math.round(ygrid[i] * gridspacing + dy);
  }

  return [xcanvascent, ycanvascent, xgridcent, ygridcent];
} //FUNCTION defineImageGrid

function updateFilterSingleFrame(
  taskscreen,
  classlabel,
  index,
  movieframe,
  gridindex
) {
  if (typeof IMAGES[taskscreen][classlabel].OBJECTFILTERS != 'undefined') {
    // ======= OBJECT FILTERS
    var objFilterSingleFrame = {
      blur: 0,
      brightness: 100,
      contrast: 100,
      grayscale: 0,
      huerotate: 0,
      invert: 0,
      opacity: 100,
      saturate: 100,
      sepia: 0,
    };

    var nextblur = chooseArrayElement(
      IMAGES[taskscreen][classlabel].OBJECTFILTERS.blur,
      index,
      0
    );
    if (Number.isInteger(movieframe) && nextblur != undefined) {
      nextblur = chooseArrayElement(nextblur, movieframe, nextblur.length - 1);
    }
    if (nextblur != '' && nextblur != undefined) {
      objFilterSingleFrame.blur = nextblur;
    }

    var nextbrightness = chooseArrayElement(
      IMAGES[taskscreen][classlabel].OBJECTFILTERS.brightness,
      index,
      0
    );
    if (Number.isInteger(movieframe) && nextbrightness != undefined) {
      nextbrightness = chooseArrayElement(
        nextbrightness,
        movieframe,
        nextbrightness.length - 1
      );
    }

    if (nextbrightness != '' && nextbrightness != undefined) {
      objFilterSingleFrame.brightness = nextbrightness;
    }

    var nextcontrast = chooseArrayElement(
      IMAGES[taskscreen][classlabel].OBJECTFILTERS.contrast,
      index,
      0
    );
    if (Number.isInteger(movieframe) && nextcontrast != undefined) {
      nextcontrast = chooseArrayElement(
        nextcontrast,
        movieframe,
        nextcontrast.length - 1
      );
    }

    if (nextcontrast != '' && nextcontrast != undefined) {
      objFilterSingleFrame.contrast = nextcontrast;
    }

    var nextgrayscale = chooseArrayElement(
      IMAGES[taskscreen][classlabel].OBJECTFILTERS.grayscale,
      index,
      0
    );
    if (Number.isInteger(movieframe) && nextgrayscale != undefined) {
      nextgrayscale = chooseArrayElement(
        nextgrayscale,
        movieframe,
        nextgrayscale.length - 1
      );
    }

    if (nextgrayscale != '' && nextgrayscale != undefined) {
      objFilterSingleFrame.grayscale = nextgrayscale;
    }

    var nexthuerotate = chooseArrayElement(
      IMAGES[taskscreen][classlabel].OBJECTFILTERS.huerotate,
      index,
      0
    );
    if (Number.isInteger(movieframe) && nexthuerotate != undefined) {
      nexthuerotate = chooseArrayElement(
        nexthuerotate,
        movieframe,
        nexthuerotate.length - 1
      );
    }

    if (nexthuerotate != '' && nexthuerotate != undefined) {
      objFilterSingleFrame.huerotate = nexthuerotate;
    }

    var nextinvert = chooseArrayElement(
      IMAGES[taskscreen][classlabel].OBJECTFILTERS.invert,
      index,
      0
    );
    if (Number.isInteger(movieframe) && nextinvert != undefined) {
      nextinvert = chooseArrayElement(
        nextinvert,
        movieframe,
        nextinvert.length - 1
      );
    }
    if (nextinvert != '' && nextinvert != undefined) {
      objFilterSingleFrame.invert = nextinvert;
    }

    var nextopacity = chooseArrayElement(
      IMAGES[taskscreen][classlabel].OBJECTFILTERS.opacity,
      index,
      0
    );
    if (Number.isInteger(movieframe) && nextopacity != undefined) {
      nextopacity = chooseArrayElement(
        nextopacity,
        movieframe,
        nextopacity.length - 1
      );
    }
    if (nextopacity != '' && nextopacity != undefined) {
      objFilterSingleFrame.opacity = nextopacity;
    }
    var nextsaturate = chooseArrayElement(
      IMAGES[taskscreen][classlabel].OBJECTFILTERS.saturate,
      index,
      0
    );
    if (Number.isInteger(movieframe) && nextsaturate != undefined) {
      nextsaturate = chooseArrayElement(
        nextsaturate,
        movieframe,
        nextsaturate.length - 1
      );
    }

    if (nextsaturate != '' && nextsaturate != undefined) {
      objFilterSingleFrame.saturate = nextsaturate;
    }

    var nextsepia = chooseArrayElement(
      IMAGES[taskscreen][classlabel].OBJECTFILTERS.sepia,
      index,
      0
    );
    if (Number.isInteger(movieframe) && nextsepia != undefined) {
      nextsepia = chooseArrayElement(
        nextsepia,
        movieframe,
        nextsepia.length - 1
      );
    }

    if (nextsepia != '' && nextsepia != undefined) {
      objFilterSingleFrame.sepia = nextsepia;
    }

    var objFilterstr =
      'blur(' +
      objFilterSingleFrame.blur +
      'px) ' +
      'brightness(' +
      objFilterSingleFrame.brightness +
      '%) ' +
      'contrast(' +
      objFilterSingleFrame.contrast +
      '%) ' +
      'grayscale(' +
      objFilterSingleFrame.grayscale +
      '%) ' +
      'hue-rotate(' +
      objFilterSingleFrame.huerotate +
      'deg) ' +
      'invert(' +
      objFilterSingleFrame.invert +
      '%) ' +
      'opacity(' +
      objFilterSingleFrame.opacity +
      '%) ' +
      'saturate(' +
      objFilterSingleFrame.saturate +
      '%) ' +
      'sepia(' +
      objFilterSingleFrame.sepia +
      '%)';
  } //IF OBJECTFILTERS defined

  if (typeof IMAGES[taskscreen][classlabel].IMAGEFILTERS != 'undefined') {
    //===== 2D IMAGE FILTERS
    var imgFilterSingleFrame = {
      blur: 0,
      brightness: 100,
      contrast: 100,
      grayscale: 0,
      huerotate: 0,
      invert: 0,
      opacity: 100,
      saturate: 100,
      sepia: 0,
    };

    var nextblur = chooseArrayElement(
      IMAGES[taskscreen][classlabel].IMAGEFILTERS.blur,
      index,
      0
    );
    if (Number.isInteger(movieframe) && nextblur != undefined) {
      nextblur = chooseArrayElement(nextblur, movieframe, nextblur.length - 1);
    }
    if (nextblur != '' && nextblur != undefined) {
      imgFilterSingleFrame.blur = nextblur;
    }

    var nextbrightness = chooseArrayElement(
      IMAGES[taskscreen][classlabel].IMAGEFILTERS.brightness,
      index,
      0
    );
    if (Number.isInteger(movieframe) && nextbrightness != undefined) {
      nextbrightness = chooseArrayElement(
        nextbrightness,
        movieframe,
        nextbrightness.length - 1
      );
    }

    if (nextbrightness != '' && nextbrightness != undefined) {
      imgFilterSingleFrame.brightness = nextbrightness;
    }

    var nextcontrast = chooseArrayElement(
      IMAGES[taskscreen][classlabel].IMAGEFILTERS.contrast,
      index,
      0
    );
    if (Number.isInteger(movieframe) && nextcontrast != undefined) {
      nextcontrast = chooseArrayElement(
        nextcontrast,
        movieframe,
        nextcontrast.length - 1
      );
    }

    if (nextcontrast != '' && nextcontrast != undefined) {
      imgFilterSingleFrame.contrast = nextcontrast;
    }

    var nextgrayscale = chooseArrayElement(
      IMAGES[taskscreen][classlabel].IMAGEFILTERS.grayscale,
      index,
      0
    );
    if (Number.isInteger(movieframe) && nextgrayscale != undefined) {
      nextgrayscale = chooseArrayElement(
        nextgrayscale,
        movieframe,
        nextgrayscale.length - 1
      );
    }

    if (nextgrayscale != '' && nextgrayscale != undefined) {
      imgFilterSingleFrame.grayscale = nextgrayscale;
    }

    var nexthuerotate = chooseArrayElement(
      IMAGES[taskscreen][classlabel].IMAGEFILTERS.huerotate,
      index,
      0
    );
    if (Number.isInteger(movieframe) && nexthuerotate != undefined) {
      nexthuerotate = chooseArrayElement(
        nexthuerotate,
        movieframe,
        nexthuerotate.length - 1
      );
    }

    if (nexthuerotate != '' && nexthuerotate != undefined) {
      imgFilterSingleFrame.huerotate = nexthuerotate;
    }

    var nextinvert = chooseArrayElement(
      IMAGES[taskscreen][classlabel].IMAGEFILTERS.invert,
      index,
      0
    );
    if (Number.isInteger(movieframe) && nextinvert != undefined) {
      nextinvert = chooseArrayElement(
        nextinvert,
        movieframe,
        nextinvert.length - 1
      );
    }
    if (nextinvert != '' && nextinvert != undefined) {
      imgFilterSingleFrame.invert = nextinvert;
    }

    var nextopacity = chooseArrayElement(
      IMAGES[taskscreen][classlabel].IMAGEFILTERS.opacity,
      index,
      0
    );
    if (Number.isInteger(movieframe) && nextopacity != undefined) {
      nextopacity = chooseArrayElement(
        nextopacity,
        movieframe,
        nextopacity.length - 1
      );
    }
    if (nextopacity != '' && nextopacity != undefined) {
      imgFilterSingleFrame.opacity = nextopacity;
    }
    var nextsaturate = chooseArrayElement(
      IMAGES[taskscreen][classlabel].IMAGEFILTERS.saturate,
      index,
      0
    );
    if (Number.isInteger(movieframe) && nextsaturate != undefined) {
      nextsaturate = chooseArrayElement(
        nextsaturate,
        movieframe,
        nextsaturate.length - 1
      );
    }

    if (nextsaturate != '' && nextsaturate != undefined) {
      imgFilterSingleFrame.saturate = nextsaturate;
    }

    var nextsepia = chooseArrayElement(
      IMAGES[taskscreen][classlabel].IMAGEFILTERS.sepia,
      index,
      0
    );
    if (Number.isInteger(movieframe) && nextsepia != undefined) {
      nextsepia = chooseArrayElement(
        nextsepia,
        movieframe,
        nextsepia.length - 1
      );
    }

    if (nextsepia != '' && nextsepia != undefined) {
      imgFilterSingleFrame.sepia = nextsepia;
    }

    var imgFilterstr =
      'blur(' +
      imgFilterSingleFrame.blur +
      'px) ' +
      'brightness(' +
      imgFilterSingleFrame.brightness +
      '%) ' +
      'contrast(' +
      imgFilterSingleFrame.contrast +
      '%) ' +
      'grayscale(' +
      imgFilterSingleFrame.grayscale +
      '%) ' +
      'hue-rotate(' +
      imgFilterSingleFrame.huerotate +
      'deg) ' +
      'invert(' +
      imgFilterSingleFrame.invert +
      '%) ' +
      'opacity(' +
      imgFilterSingleFrame.opacity +
      '%) ' +
      'saturate(' +
      imgFilterSingleFrame.saturate +
      '%) ' +
      'sepia(' +
      imgFilterSingleFrame.sepia +
      '%)';
  } //IF IMAGEFILTERS defined

  return [objFilterstr, imgFilterstr];
}
