//================== IMAGE RENDERING ==================//
function displayTrial_prime(ti, gr, cl, fr, sc, ob, id, ims, mkm) {
  // ti=time, gr=grid, fr=frame, sc=screen, ob=scenebag, id=renderparam_index
  let lenArgs = arguments.length;
  updated2d = 0; updated3d = 0;
  CURRTRIAL.tsequenceactual = [];

  var resolveFunc; var errFunc;
  p = new Promise(function (resolve, reject) {
    resolveFunc = resolve;
    errFunc = reject;
  }).then();
  
  var start = null;
  async function updateCanvas_prime(timestamp) {
    if (!start) start = timestamp; //IF start has not been set to a float timestamp, set it now.

    if (frame_prime.current > 0 && frame_prime.shown[frame_prime.current - 1] != 1) {
      frame_prime.shown[frame_prime.current - 1] = 1;
    }//IF showing frame

    //---------------- RENDER THE NEXT FRAME ------------------//
    if (frame_prime.current <= frame_prime.shown.length - 1) {
      for (var s = 0; s <= frame_prime.frames[frame_prime.current].length - 1; s++) {
        f = frame_prime.frames[frame_prime.current][s];
        var taskscreen = sc[f].charAt(0).toUpperCase() + sc[f].slice(1);

        if (s == 0) { var taskscreen0 = taskscreen; } //IF primary screen

        if (taskscreen == 'Sample' || taskscreen == 'Test') {
          if (taskscreen == 'Sample') {
            try{
            var im = [ ims.sampleimage[cl[f]][fr[f]] ]; //fr[f] frame within clip              
            }
            catch{
              console.log('here')
            }
          } else if (taskscreen == 'Test') {
            var clip = 0;
            var im = ims.testimages[clip][fr[f]];
          }

          if (FLAGS.usecanvas2D == 0){
    //RENDER 3D (transfers to 2D & filters)
            render3D(taskscreen, s, f, gr, fr, sc, ob, id, im);
            const defaultFilter = 'blur(0px) brightness(100%) contrast(100%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)';
            VISIBLECANVAS.getContext('2d').filter = defaultFilter; //restore 2D filter
          } //IF 3D canvas
          else if (FLAGS.usecanvas2D == 1){
    //RENDER 2D Sample/Test Image
            render2D(taskscreen, s, f, gr, fr, sc, ob, id, im, VISIBLECANVAS);  
            const defaultFilter = 'blur(0px) brightness(100%) contrast(100%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)';
            VISIBLECANVAS.getContext('2d').filter = defaultFilter; //restore 2D filter
          }//ELSEIF 2D canvas
        }//IF sample || test
        else {
        } //ELSE hide 3D when plotting 2D elements like buttons and not keeping (overlaying) sample/test
      }//FOR s screens within frame

      renderShape2D('Blank', [-1], VISIBLECANVAS);

      frame_prime.current++;
    } //IF frames remain to be shown
    //------(END)-------- RENDER THE NEXT FRAME ------------------//

    //IF prematurely ending movies externally
    if (frame_prime.current >= frame_prime.shown.length) { frame_prime.current = frame_prime.shown.length;} 
    if (frame_prime.shown[frame_prime.shown.length - 1] != 1) {
      window.requestAnimationFrame(updateCanvas_prime);
    } //IF frames left to show
    else {
      resolveFunc('primed');
    } //ELSE all frames shown, promise resolve, exit animation loop
  } //FUNCTION updateCanvas_prime

  window.requestAnimationFrame(updateCanvas_prime);
  return p;
}//FUNCTION displayTrial_prime

//================== IMAGE RENDERING ==================//
function displayTrial(ti, gr, cl, fr, sc, ob, id, ims, mkm, trig) {
  // ti=time, gr=grid, cl=clip, fr=frame, sc=screen, ob=scenebag, id=renderparam_index
  let lenArgs = arguments.length;
  updated2d = 0; updated3d = 0;
  CURRTRIAL.tsequenceactual = [];

  var resolveFunc; var errFunc;
  p = new Promise(function (resolve, reject) {
    resolveFunc = resolve;
    errFunc = reject;
  }).then();
  
  var start = null;
  async function updateCanvas(timestamp) {
    // FLAGS.bbTarget = { taskscreen: [], indscreen: [], grid: [], x: [], y: [], ID: [], class: [], asset: [] }
    FLAGS.bbDisplay = { taskscreen: [], indscreen: [], grid: [], x: [], y: [], ID: [], class: [], asset: [], sceneTarget: [] } //accumulate all bounding boxes for this frame

    if (!start) start = timestamp; //IF start has not been set to a float timestamp, set it now.

    if (frame.current > 0 && frame.shown[frame.current - 1] != 1) {
      //Store time of screen flip to the newly rendered frame
      CURRTRIAL.tsequenceactual[frame.current - 1] = Math.round(100 * (timestamp - start)) / 100; //rounded to nearest hundredth of a millisecond
      frame.shown[frame.current - 1] = 1;

      if ( frame.current==1 && (typeof(trig) != "undefined" && trig == 1) ){
        CURRTRIAL.samplestarttime = Date.now() - ENV.CurrentDate.valueOf();
        CURRTRIAL.samplestarttime_string = new Date(CURRTRIAL.samplestarttime + ENV.CurrentDate.valueOf()).toJSON();
        
        let newbagblock = 0
        if (TASK.NMillisecondsPerBagBlock > 0 || TASK.NStimuliPerBagBlock > 0){
          if (TASK.NMillisecondsPerBagBlock > 0 && TQS.currentbag_starttime < 0){
            TQS.currentbag_starttime = Date.now()
          }//IF
  
          if ( (CURRTRIAL.blocknum >= 0 && CURRTRIAL.num == 0) ||
                (CURRTRIAL.blocknum >=0 && CURRTRIAL.blocknum != EVENTS['trialseries']['BlockNum'][CURRTRIAL.num-1]))
          { newbagblock = 1 }//IF new bag  
        }//IF block design

        if (port.connected && newbagblock == 0){
          usbDeviceWorker.postMessage({ action: "writeSampleCommandTriggertoUSB", val: 't1' });
        }//IF !block, activate both trial trigger line in addition to sample command sync line
        else if (port.connected && newbagblock == 1){
          usbDeviceWorker.postMessage({ action: "writeSampleCommandTriggertoUSB", val: 'b1' });
        }//ELSE new block, activate both trial & block trigger lines in addition to sample command sync line
      }//IF showing sample trigger frame
    }//IF showing frame

    //---------------- RENDER THE NEXT FRAME ------------------//
    if (frame.current <= frame.shown.length - 1) {
    //RENDER BLANK
      renderShape2D('Blank', [-1], VISIBLECANVAS);
      
      for (var s = 0; s <= frame.frames[frame.current].length - 1; s++) {
        f = frame.frames[frame.current][s];
        var taskscreen = sc[f].charAt(0).toUpperCase() + sc[f].slice(1);

        var blank_out = false;
        if (s==0 && taskscreen == 'SampleBlank'){
          taskscreen = 'Sample';
          blank_out = true;
        }//only blank if Sample not Test (ie, keepsampleon for test)

        if (s == 0) { var taskscreen0 = taskscreen; } //IF primary screen

        if (taskscreen == 'Sample' || taskscreen == 'Test') {
          if (taskscreen == 'Sample') {
            var im = [ ims.sampleimage[cl[f]][fr[f]] ]; //fr[f] frame within clip
          } else if (taskscreen == 'Test') {
            var clip = 0;
            var im = ims.testimages[clip][fr[f]];
          }

          if (FLAGS.usecanvas2D == 0){
    //RENDER 3D (transfers to 2D & filters)
            let bbTarget = render3D(taskscreen, s, f, gr, fr, sc, ob, id, im);
            for (let j=0; j <= bbTarget.x.length-1; j++){
              FLAGS.bbDisplay.taskscreen.push(taskscreen)
              FLAGS.bbDisplay.indscreen.push(s)
              FLAGS.bbDisplay.grid.push(bbTarget.grid[j])
              FLAGS.bbDisplay.ID.push(bbTarget.ID[j])
              FLAGS.bbDisplay.class.push(bbTarget.class[j])
              FLAGS.bbDisplay.asset.push(bbTarget.asset[j])
              FLAGS.bbDisplay.x.push(bbTarget.x[j])
              FLAGS.bbDisplay.y.push(bbTarget.y[j])
              FLAGS.bbDisplay.sceneTarget.push(bbTarget.sceneTarget[j])
            }//FOR j rendered items
            const defaultFilter = 'blur(0px) brightness(100%) contrast(100%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)';
            VISIBLECANVAS.getContext('2d').filter = defaultFilter; //restore 2D filter
          }//IF 3D canvas
          else if (FLAGS.usecanvas2D == 1){
    //RENDER 2D Sample/Test Image
            let bbTarget = render2D(taskscreen, s, f, gr, fr, sc, ob, id, im, VISIBLECANVAS);
            updated3d = 0;
            for (let j=0; j <= bbTarget.x.length-1; j++){
              FLAGS.bbDisplay.taskscreen.push(taskscreen)
              FLAGS.bbDisplay.indscreen.push(s)
              FLAGS.bbDisplay.grid.push(bbTarget.grid[j])
              FLAGS.bbDisplay.ID.push(bbTarget.ID[j])
              FLAGS.bbDisplay.class.push(bbTarget.class[j])
              FLAGS.bbDisplay.asset.push(bbTarget.asset[j])
              FLAGS.bbDisplay.x.push(bbTarget.x[j])
              FLAGS.bbDisplay.y.push(bbTarget.y[j])
              FLAGS.bbDisplay.sceneTarget.push(1)
            }//FOR j rendered items
            const defaultFilter = 'blur(0px) brightness(100%) contrast(100%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)';
            VISIBLECANVAS.getContext('2d').filter = defaultFilter; //restore 2D filter
          }//ELSEIF 2D canvas
        }//IF sample || test
        else {
          updated3d = 0;
        } //ELSE hide 3D when plotting 2D elements like buttons and not keeping (overlaying) sample/test

        if (blank_out){
          renderShape2D('Blank', [-1], VISIBLECANVAS);
        }//if blank the screen; usually because of zero ms duration

    //OVERLAY GRID
        if (FLAGS.savedata == 0 && s == 0 && FLAGS.underlayGridPoints == 1) {
          renderBlankWithGridMarkers(
            ENV.XGridCenter, ENV.YGridCenter,
            CURRTRIAL.FixationGridIndex, CURRTRIAL.samplegridindex,
            TASK.TestGridIndex, TASK.ChoiceGridIndex,
            ENV.FixationRadius, ENV.ChoiceRadius,
            ENV.CanvasRatio, VISIBLECANVAS
          );
        }//IF !savedata, underlay grid

    //RENDER 2D SHAPE (Choice/Reward/Punish)    
        if ( taskscreen == 'Choice' || taskscreen == 'Reward' || taskscreen == 'Punish') {
          let bbTarget = renderShape2D(taskscreen, gr[f], VISIBLECANVAS);
          for (let j=0; j <= bbTarget.x.length-1; j++){
            FLAGS.bbDisplay.taskscreen.push(taskscreen)
            FLAGS.bbDisplay.indscreen.push(s)
            FLAGS.bbDisplay.grid.push(bbTarget.grid[j])
            FLAGS.bbDisplay.ID.push(bbTarget.ID[j])
            FLAGS.bbDisplay.class.push(bbTarget.class[j])
            FLAGS.bbDisplay.asset.push(bbTarget.asset[j])
            FLAGS.bbDisplay.x.push(bbTarget.x[j])
            FLAGS.bbDisplay.y.push(bbTarget.y[j])
            FLAGS.bbDisplay.sceneTarget.push(1)
          }//FOR j rendered items
          updated2d = 1;
        }//IF Choice/Reward/Punish, renderShape

    //Blue Fixation Circle
        if ( taskscreen == 'Touchfix' ){
          let bbTarget = renderShape2D(taskscreen, gr[f], VISIBLECANVAS);
          for (let j=0; j <= bbTarget.x.length-1; j++){
            FLAGS.bbDisplay.taskscreen.push(taskscreen)
            FLAGS.bbDisplay.indscreen.push(s)
            FLAGS.bbDisplay.grid.push(bbTarget.grid[j])
            FLAGS.bbDisplay.ID.push(bbTarget.ID[j])
            FLAGS.bbDisplay.class.push(bbTarget.class[j])
            FLAGS.bbDisplay.asset.push(bbTarget.asset[j])
            FLAGS.bbDisplay.x.push(bbTarget.x[j])
            FLAGS.bbDisplay.y.push(bbTarget.y[j])
            FLAGS.bbDisplay.sceneTarget.push(1)
          }//FOR j rendered items
        }//IF touchfix, renderShape

    //OVERLAY White Fixation Square
        if ( taskscreen == 'Touchfix' || taskscreen == 'Sample' || taskscreen == 'Blank' )
        {
          if (typeof gr[f] == 'number') { renderShape2D('FixationDot', gr[f], VISIBLECANVAS); }
          else { renderShape2D('FixationDot', gr[f][0], VISIBLECANVAS); }
        }//IF touchfix || sample
      }//FOR s screens within frame

    //OVERLAY Photodiode Square
      if (typeof(trig) != "undefined" && trig==1 && TASK.Photodiode > 0 ) {
        renderShape2D('PhotodiodeSquare', [ENV.PhotodiodeSquareX, ENV.PhotodiodeSquareY],VISIBLECANVAS,taskscreen);
      } //IF port.connected

      //----- Choose Target Bounding Box for that screen
      FLAGS.bbTarget = updateTargetBoundingBoxes(FLAGS.bbDisplay)
      broadcastBoundingBoxes(FLAGS.bbDisplay, 0)
      broadcastBoundingBoxes(FLAGS.bbTarget, 1)

      // MkModel
      if (lenArgs >= 7 && mkm) { transferToModelCanvas(taskscreen,mkm) } //IF MkModel

      //----- Update Status
      updated2d = 0;
      updated3d = 0;
      if (FLAGS.movieplaying == 0) {
        FLAGS.movieplaying = 1;
        if (typeof waitforMovieStart != 'undefined') {
          waitforMovieStart.next();
        }
      }//IF movieplaying

      //----- Save Out Images
      if ( (taskscreen0 == 'Sample' || taskscreen0 == 'Test') & TASK.Agent == 'SaveImages'
            && FLAGS.savedata == 1)
      {
        //Check if already completed showing all images once
        if ( TASK.NRSVP<1 || 
            (TASK.NRSVP>=1 && CURRTRIAL.num*TASK.NRSVP + cl[f] <= TQS.samplebag_indices.length-1) ){

          if ( (FLAGS.movieper[taskscreen0][ob[frame.current][0]][id[frame.current][0]] < 1 &&
                ( frame.current == 0 ||
                  sc[frame.current] != sc[frame.current - 1] ||
                  ob[frame.current][0] != ob[frame.current - 1][0] ||
                  id[frame.current][0] != id[frame.current - 1][0]  )
            )//if !movie, save when screen changes
            || FLAGS.movieper[taskscreen0][ob[frame.current][0]][id[frame.current][0]] >= 1 ) //OR if movie
          {
            saveScreenshot(VISIBLECANVAS,CURRTRIAL.num,taskscreen0,frame.current,
                        ob[frame.current],id[frame.current]);
          }//IF need to save out this frame
        }//IF RSVP
      }//IF sample or test screen & save out images

      frame.current++;
    }//IF frames remain to be shown
    //------(END)-------- RENDER THE NEXT FRAME ------------------//

    //IF prematurely ending movies externally
    if (frame.current >= frame.shown.length) { frame.current = frame.shown.length;} 
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
  }//FUNCTION updateCanvas

  window.requestAnimationFrame(updateCanvas);
  return p;
}//FUNCTION displayTrial

function updateTargetBoundingBoxes(boundingBoxes){
  let gridCenter = {x:0,y:0}
  let objectCenter = {x:0,y:0}
  let bbTarg = {taskscreen: [], indscreen: [], grid: [], x: [], y: [], ID: [], class: [], asset: [] }

  if (TASK.Target == 'scene'){
    var bbScene = {x0:[],x1:[],y0:[],y1:[],taskscreen:[],indscreen:[],grid:[],ID:[],class:[],asset:[]}
    let classes = math.setDistinct(boundingBoxes.class)
    for (let i=0; i<=classes.length-1; i++){
      bbScene.x0[classes[i]] = []
      bbScene.x1[classes[i]] = []
      bbScene.y0[classes[i]] = []
      bbScene.y1[classes[i]] = []
      bbScene.ID[classes[i]] = ''
      bbScene.asset[classes[i]] = ''
    }//FOR i classes
  }//IF scene, will create overall box for each scene class

  for (let i=0; i<=boundingBoxes.x.length-1; i++){
    if (boundingBoxes.indscreen[i]==0 && boundingBoxes.class[i]>=0 && boundingBoxes.sceneTarget[i] >= 1){
      objectCenter.x = (boundingBoxes.x[i][0] + boundingBoxes.x[i][1])/2
      objectCenter.y = (boundingBoxes.y[i][0] + boundingBoxes.y[i][1])/2

      gridCenter.x = ENV.XGridCenter[boundingBoxes.grid[i]]
      gridCenter.y = ENV.YGridCenter[boundingBoxes.grid[i]]
    }//IF current taskscreen and a target class
    else{
      continue
    }
    bbTarg.taskscreen.push(boundingBoxes.taskscreen[i])
    bbTarg.indscreen.push(boundingBoxes.indscreen[i])
    bbTarg.grid.push(boundingBoxes.grid[i])
    bbTarg.class.push(boundingBoxes.class[i])
    bbTarg.ID.push(boundingBoxes.ID[i])

    if (TASK.Target == 'gridwindow'){
      bbTarg.x.push([gridCenter.x-ENV.FixationWindowRadius,gridCenter.x+ENV.FixationWindowRadius])
      bbTarg.y.push([gridCenter.y-ENV.FixationWindowRadius,gridCenter.y+ENV.FixationWindowRadius])
      bbTarg.asset.push(boundingBoxes.asset[i] + '_gridwindow')
    }//IF gridwindow
    else if (TASK.Target == 'objectwindow'){
      bbTarg.x.push([objectCenter.x-ENV.FixationWindowRadius,objectCenter.x+ENV.FixationWindowRadius])
      bbTarg.y.push([objectCenter.y-ENV.FixationWindowRadius,objectCenter.y+ENV.FixationWindowRadius])
      bbTarg.asset.push(boundingBoxes.asset[i] + '_objectwindow')
    }//IF objectwindow
    else if (TASK.Target == 'object'){
      if (boundingBoxes.asset[i].includes('object') || boundingBoxes.asset[i].includes('shape')
          || boundingBoxes.asset[i].includes('image')){
        bbTarg.x.push(boundingBoxes.x[i])
        bbTarg.y.push(boundingBoxes.y[i])
        bbTarg.asset.push(boundingBoxes.asset[i] + '_objectboundingbox')  
      }//IF asset is object or shape or 2D image (but not cubemap background)
    }//IF object targets
    else if (TASK.Target == 'scene'){
      bbTarg.x.push(boundingBoxes.x[i])
      bbTarg.y.push(boundingBoxes.y[i])
      bbTarg.asset.push(boundingBoxes.asset[i] + '_objectboundingbox')

      //concatenate asset and ID names
      bbScene.asset[boundingBoxes.class[i]] = bbScene.asset[boundingBoxes.class[i]] + '_' + boundingBoxes.asset[i]
      bbScene.ID[boundingBoxes.class[i]] = bbScene.ID[boundingBoxes.class[i]] + '_' + boundingBoxes.ID[i]
      bbScene.x0[boundingBoxes.class[i]].push(boundingBoxes.x[i][0])
      bbScene.x1[boundingBoxes.class[i]].push(boundingBoxes.x[i][1])
      bbScene.y0[boundingBoxes.class[i]].push(boundingBoxes.y[i][0])
      bbScene.y1[boundingBoxes.class[i]].push(boundingBoxes.y[i][1])

      bbScene.taskscreen[boundingBoxes.class[i]] = boundingBoxes.taskscreen[i]
      bbScene.indscreen[boundingBoxes.class[i]] = boundingBoxes.indscreen[i]
      bbScene.grid[boundingBoxes.class[i]] = boundingBoxes.grid[i]
      bbScene.class[boundingBoxes.class[i]] = boundingBoxes.class[i]
    }//IF scene target, include cubemap background
    else{
      console.log('MISSING PARAMETER: no valid target type as TASK.Target = ' + TASK.Target)
    }//ELSE no valid target type
  }//FOR j display bounding boxes

  if (TASK.Target == 'scene'){
    for (let i=0; i<=bbScene.x0.length-1; i++){
      bbTarg.x.push( [math.min(bbScene.x0), math.max(bbScene.x1)] )
      bbTarg.y.push( [math.min(bbScene.y0), math.max(bbScene.y1)] )
      bbTarg.asset.push(bbScene.asset[i] + '_sceneboundingbox')//append scene to accumulated name
      bbTarg.ID.push( bbScene.ID[i] )
      bbTarg.taskscreen.push(bbScene.taskscreen[i])
      bbTarg.indscreen.push(bbScene.indscreen[i])
      bbTarg.grid.push(bbScene.grid[i])
      bbTarg.class.push(bbScene.class[i])
    }//FOR i classes
  }//IF scene target, add an overall scene window for each class
  return bbTarg
}//FUNCTION updateTargetBoundingBoxes

function broadcastBoundingBoxes(boundingBoxes,areTarg){
  let boundingBoxesRtdb = {};
  if (FLAGS.rtdbAgentNumConnections > 0) {
    for (let i = 0; i < boundingBoxes.x.length; i++) {
      boundingBoxesRtdb[`${i}`] = {};
      boundingBoxesRtdb[`${i}`]['taskscreen'] = boundingBoxes.taskscreen[i]
      boundingBoxesRtdb[`${i}`]['indscreen'] = boundingBoxes.indscreen[i]
      boundingBoxesRtdb[`${i}`]['grid'] = boundingBoxes.grid[i]
      boundingBoxesRtdb[`${i}`]['ID'] = boundingBoxes.ID[i]
      boundingBoxesRtdb[`${i}`]['class'] = boundingBoxes.class[i]
      boundingBoxesRtdb[`${i}`]['asset'] = boundingBoxes.asset[i]
      for (let j = 0; j < boundingBoxes.x[i].length; j++) {
        boundingBoxesRtdb[`${i}`][`x_${j}`] = boundingBoxes.x[i][j] // boundingBoxes.x[i][j] - CANVAS.offsetleft;
        boundingBoxesRtdb[`${i}`][`y_${j}`] = boundingBoxes.y[i][j] //ENV.ViewportPixels[1] - boundingBoxes.y[i][k];
      }//FOR y coords
    }//FOR i bounding boxes

    rtdb.ref('data/' + ENV.Subject).set({
      x: FLAGS.effectorState.x,
      y: FLAGS.effectorState.y,
      touchevent: FLAGS.effectorState.touchevent,
      state: FLAGS.effectorState.state,
      chosenbox: FLAGS.effectorState.chosenbox,
      choice: FLAGS.effectorState.choice,
      holdduration: FLAGS.effectorState.holdduration,
      boundingBoxes: boundingBoxesRtdb,
      meta: areTarg,
      timestamp: new Date().toJSON(),
    });//RTDB.set
  }//IF realtime database
  else{
    console.log('no RTDB connection for this Agent')
    return
  }//ELSE no rtdb connection
}//FUNCTION broadcastBoundingBoxes

//------- FUNCTION render3D ---------//
function render3D(taskscreen, s, f, gr, fr, sc, ob, id, im) {
  renderer.autoClear = false;
  let boundingBoxes = {x:[],y:[],grid:[],ID:[],class:[], asset:[],sceneTarget:[]}
  for (var j = 0; j < ob[f].length; j++) {
    var [filter_objs, filter_img, objFilterSingleFrame, imgFilterSingleFrame] = updateFilterSingleFrame(taskscreen, ob[f][j], id[f][j], fr[f], gr[f][j]);

    let render_separately = false
    if (filter_objs || filter_img){
      render_separately = true
    }//IF foreground objects or background image is being filtered

    for (var k=0; k<=2; k++){
      renderer.clear();
      if (render_separately == false && k==0){
        //render composite foreground + background
        var [boundingBoxObject, boundingBoxCubeMap, crop] =
              updateSingleFrame3D(taskscreen, ob[f][j], id[f][j], fr[f], gr[f][j], im[j], 1, 1);
      }//IF jointly show foreground+background
      else if (render_separately == true && k==1){
        //show background image first to filter separately
        var [boundingBoxObject, boundingBoxCubeMap, crop] =
              updateSingleFrame3D(taskscreen, ob[f][j], id[f][j], fr[f], gr[f][j], im[j],0,1);
      }//ELSE IF separately show bkgd
      else if (render_separately == true && k==2){
        //show foreground objects last to filter separately
        var [boundingBoxObject, boundingBoxCubeMap, crop] =
              updateSingleFrame3D(taskscreen, ob[f][j], id[f][j], fr[f], gr[f][j], im[j],1,0);
      }//ELSE IF separately show foreground
      else {
        continue;
      }

      if (typeof boundingBoxObject.x != 'undefined'){
        for (n_ob = 0; n_ob < boundingBoxObject.x.length; n_ob++) {
          boundingBoxes.x.push(boundingBoxObject.x[n_ob]);
          boundingBoxes.y.push(boundingBoxObject.y[n_ob]);
          boundingBoxes.grid.push(gr[f][j]);
          boundingBoxes.ID.push(boundingBoxObject.ID[n_ob] + '_scene' + boundingBoxObject.class[n_ob]);
          boundingBoxes.asset.push('object');
          boundingBoxes.class.push(j) //index to choice in n-way rather than class #
          boundingBoxes.sceneTarget.push(boundingBoxObject.sceneTarget[n_ob])
        }//FOR n_ob
        
        if (typeof boundingBoxCubeMap.x != 'undefined') {
          for (let im=0; im<=boundingBoxCubeMap.x.length-1; im++){
            boundingBoxes.x.push(boundingBoxCubeMap.x[im]);
            boundingBoxes.y.push(boundingBoxCubeMap.y[im]);
            boundingBoxes.grid.push(gr[f][j]);
            boundingBoxes.ID.push(boundingBoxCubeMap.ID[im]);
            boundingBoxes.asset.push('cubemap');
            boundingBoxes.class.push(boundingBoxCubeMap.class[im]);
            boundingBoxes.sceneTarget.push(boundingBoxCubeMap.sceneTarget[im])
          }//FOR im
        }//IF
        updated3d = 1;
      }//IF

      var camera = scene[taskscreen].getObjectByName('cam' + ob[f][j]);

      //Render in THREEJS
      renderer.render(scene[taskscreen], camera); //takes >1ms, do before the fast 2D swap (<1ms)

      //Post-render 2D filtering in pixel space
      if (k==0){
        //no filtering
      }
      else if (k==1){
        VISIBLECANVAS.getContext('2d').filter = imgFilterSingleFrame;
      }
      else if (k==2){
        VISIBLECANVAS.getContext('2d').filter = objFilterSingleFrame;
      }

      // 3D Canvas coordinates
      var sx = renderer.domElement.width / 2;
      var sy = renderer.domElement.height / 2;
      if (isNaN(crop[ob[f][j]][0]) || crop[ob[f][j]][0] < 0) {
        var swidth = renderer.domElement.width;
        var sheight = renderer.domElement.height;
      } else {
        var swidth = IMAGEMETA['THREEJStoPixels'] * crop[ob[f][j]][0];
        var sheight = swidth;
      }
      sx = sx - swidth / 2;
      sy = sy - sheight / 2;

      // 2D Canvas coordinates
      var swidth_2d = swidth / TASK.THREEJSRenderRatio / ENV.CanvasRatio;
      var sheight_2d = sheight / TASK.THREEJSRenderRatio / ENV.CanvasRatio;

      var scenecenterX = ENV.XGridCenter[gr[f][j]];
      var scenecenterY = ENV.YGridCenter[gr[f][j]];

      var left = Math.round(scenecenterX / ENV.CanvasRatio - swidth_2d / 2);
      var top = Math.round(scenecenterY / ENV.CanvasRatio - sheight_2d / 2);

      // mkm.boundingBoxVisibleCanvas = [left, top, swidth_2d, sheight_2d];

      // Transfer 3D Canvas to 2D Canvas
      if ( TASK.Agent == 'SaveImages' && TASK.SaveImagesResolution>0 )
      {
        VISIBLECANVAS.getContext('2d').drawImage(
          renderer.domElement,
          Math.round(sx), Math.round(sy),
          Math.round(swidth), Math.round(sheight),
          0,0,Math.round(VISIBLECANVAS.width), Math.round(VISIBLECANVAS.height)
        );
      }//IF SaveImages
      else {
        VISIBLECANVAS.getContext('2d').drawImage(
          renderer.domElement,
          Math.round(sx), Math.round(sy),
          Math.round(swidth), Math.round(sheight),
          left, top, Math.round(swidth_2d), Math.round(sheight_2d)
        );
      }//ELSE

      try{
        // update bounding boxes if crop bounding box is smaller than the boundingbox
        let ind = boundingBoxes.x.length-1 //since not all j display items are necessarily visible, only a subset have bounding boxes
        if ( swidth_2d * ENV.CanvasRatio < boundingBoxes.x[ind][1] - boundingBoxes.x[ind][0]) {
          boundingBoxes.x[ind] = [ left * ENV.CanvasRatio, (left + swidth_2d) * ENV.CanvasRatio];
          boundingBoxes.y[ind] = [ top * ENV.CanvasRatio + CANVAS.offsettop, (top + sheight_2d) * ENV.CanvasRatio + CANVAS.offsettop];
        }//IF
      }//TRY
      catch(error){
        //bb error, likely because this display element is not shown
      }//CATCH
    }//FOR k render orders
  }//FOR j display items
  return boundingBoxes
}//FUNCTION render3D

//------- FUNCTION render2D ---------//
function render2D(taskscreen, s, f, gr, fr, sc, ob, id, im, canvasobj) {
let boundingBoxes = {x: [], y: [], grid: [], ID: [], class: [], asset: []}
if (typeof im != 'undefined' && typeof im[0] == 'object') {
  for (var j = 0; j <= ob[f].length - 1; j++) {
    var [filter_objs, filter_img, objFilterSingleFrame, imgFilterSingleFrame] =
      updateFilterSingleFrame(taskscreen, ob[f][j], id[f][j], fr[f], gr[f][j]);
    if (filter_img){
      VISIBLECANVAS.getContext('2d').filter = imgFilterSingleFrame;
    }

    var boundingBox = renderImage2D(im[j],taskscreen,
                                    ob[f][j],id[f][j],fr[f],
                                    gr[f][j],canvasobj); //render 2D image prior to next frame draw
    if (typeof boundingBox[0] != 'undefined' && boundingBox[0].length > 0
    ) {
        boundingBoxes.x[j] = boundingBox[0];
        boundingBoxes.y[j] = boundingBox[1];
        boundingBoxes.grid[j] = gr[f][j];
        boundingBoxes.ID[j] = 'image2d';
        boundingBoxes.asset[j] = 'image';
        boundingBoxes.class[j] = j
    }//IF
    updated2d = 1;
  }//FOR j display items
}//IF image available
return boundingBoxes
}//FUNCTION render2D

function renderImage2D( im, sc, ob, id, fr, gr, canvasobj) {
  // var sz = chooseArrayElement(IMAGES[sc][ob].IMAGES.sizeTHREEJS * ENV.THREEJStoInches, id, 0);
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

  context.drawImage(im, xleft, ytop, wdpixels, htpixels);
  // Bounding boxes of images on canvas
  xbound = [xleft * ENV.CanvasRatio, (xleft + wdpixels) * ENV.CanvasRatio];
  ybound = [ytop * ENV.CanvasRatio, (ytop + htpixels) * ENV.CanvasRatio];

  xbound[0] = xbound[0] + CANVAS.offsetleft;
  xbound[1] = xbound[1] + CANVAS.offsetleft;
  ybound[0] = ybound[0] + CANVAS.offsettop;
  ybound[1] = ybound[1] + CANVAS.offsettop;

  return [xbound, ybound];
}//FUNCTION renderImage2D
//XX hidetestdistractors needs to go somewhere


//------- FUNCTION expandImage2DFrames ---------//
function expandImage2DFrames(taskscreen)
{
  let framerate = ENV.FrameRateMovie;

  for ( let classlabel = 0; classlabel < IMAGES[taskscreen].length; classlabel++)
  {
    for (let i = 0; i < IMAGES[taskscreen][classlabel].nimages; i++) {
      // IF background image idx isArray
      let imgIdx;
      if (!Array.isArray(IMAGES[taskscreen][classlabel].IMAGES.imageidx[i])) {
        imgIdx = [
          IMAGES[taskscreen][classlabel].IMAGES.imageidx[i],
          IMAGES[taskscreen][classlabel].IMAGES.imageidx[i],
        ];
      } else {
        // ELSE isArray
        imgIdx = IMAGES[taskscreen][classlabel].IMAGES.imageidx[i];
      }

      let durationMS = chooseArrayElement(IMAGES[taskscreen][classlabel].durationMS,i,0);

      IMAGES[taskscreen][classlabel].IMAGES.imageidx[i] = interpParam_frames(imgIdx,"binary",durationMS,framerate);

      for (let j = 0;
        j < IMAGES[taskscreen][classlabel].IMAGES.imageidx[i].length; j++)
      {
        if (IMAGES[taskscreen][classlabel].IMAGES.imageidx[i][j] !== "") {
            IMAGES[taskscreen][classlabel].IMAGES.imageidx[i][j] = Math.round(IMAGES[taskscreen][classlabel].IMAGES.imageidx[i][j]
          );
        } //IF
      }// FOR j img indices, round

      if (!IMAGES[taskscreen][classlabel].IMAGES.imageidx[i].every( (val, i, arr) => val === arr[0] ) )
      {
        FLAGS.movieper[taskscreen][classlabel][i] = IMAGES[taskscreen][classlabel].IMAGES.imageidx[i].length;
      } //IF frames change, isMovie
      else {
        FLAGS.movieper[taskscreen][classlabel][i] = 0
      }
    }//FOR i images
  }//FOR classlabel
}//FUNCTION expandImage2DFrames


//------- FUNCTION renderShape2D ---------//
function renderShape2D(sc, gr, canvasobj,taskscreen) {
  switch (sc) {
    case 'Blank':
      renderBlank(canvasobj, TASK.BackgroundColor2D);//XX
      break;
    case 'Touchfix':
      if (TASK.SameDifferent <= 0) {
        return renderDotOnCanvas(ENV.FixationColor,gr,ENV.FixationRadius,canvasobj);
      }//IF !same-different
      else if (TASK.SameDifferent > 0) {
        return renderTriangleOnCanvas(ENV.ChoiceColor,gr,2*ENV.FixationRadius,canvasobj);
      }//IF same-different
      break;
    case 'FixationDot':
      if (ENV.FixationDotRadius > 0) {
        return renderSquareOnCanvas(ENV.FixationDotColor,gr,2*ENV.FixationDotRadius,canvasobj);
      }
      if ( ENV.FixationWindowRadius > 0 && FLAGS.savedata == 0 && FLAGS.underlayGridPoints == 1)
      {
        return renderFixationWindow(ENV.XGridCenter, ENV.YGridCenter, gr, ENV.FixationWindowRadius, ENV.CanvasRatio,canvasobj);
      } //IF !savedata, overlay fixation window
      break;
    case 'PhotodiodeSquare':
      if (Math.round(frame.current / 2) == frame.current / 2) {
        if (!taskscreen.includes('Blank')){
          funcreturn = renderSquareOnCanvas('white', gr, ENV.PhotodiodeSquareWidth, canvasobj);
        }
        else{
          funcreturn = renderSquareOnCanvas('#CCCCCC', gr, ENV.PhotodiodeSquareWidth, canvasobj);          
        }//ELSE 0.8
      }//IF even frame, draw white square
      else {
        if (!taskscreen.includes('Blank')){
          funcreturn = renderSquareOnCanvas('black', gr, ENV.PhotodiodeSquareWidth, canvasobj);
        }
        else{
          funcreturn = renderSquareOnCanvas('#333333', gr, ENV.PhotodiodeSquareWidth, canvasobj);
        }//ELSE 0.2
      } //ELSE go back to blank
      funcreturn.ID[0] = 'photodiodesquare'
      funcreturn.class[0] = -1
      funcreturn.grid[0] = -1
      return funcreturn
    case 'Choice':
      return bufferChoiceUsingCircleSquare(ENV.ChoiceColor,ENV.ChoiceRadius,gr,canvasobj);
    case 'Reward':
      funcreturn = renderSquareOnCanvas('green', ENV.RewardSquareXY, ENV.RewardSquareWidth, canvasobj);
      funcreturn.class[0] = -1 //not a target
      funcreturn.grid[0] = -1
      return funcreturn
    case 'Punish':
      funcreturn = renderSquareOnCanvas('#3c3c3c', ENV.PunishSquareXY, ENV.PunishSquareWidth, canvasobj);
      funcreturn.class[0] = -1 //not a target
      funcreturn.grid[0] = -1
      return funcreturn
    default:
  }//SWITCH taskscreen
}//FUNCTION renderShape2D

//------- FUNCTION transferToModelCanvas ---------//
function transferToModelCanvas(taskscreen, mkm){
  if (TASK.SameDifferent > 0) {
//!!not fully implemented yet
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
        boundingBoxes3D: boundingBoxesChoice3D, //XX
        boundingBoxes2D: boundingBoxesChoice2D, //XX
      };

      ctx.drawImage(
        VISIBLECANVAS,
        mkmBoundingBox.sx, mkmBoundingBox.sy,
        mkmBoundingBox.sWidth, mkmBoundingBox.sHeight,
        0,0,224,224
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
        boundingBoxes3D: boundingBoxesChoice3D, //XX
        boundingBoxes2D: boundingBoxesChoice2D, //XX
      };

      ctx.drawImage(
        VISIBLECANVAS,
        mkmBoundingBox.sx, mkmBoundingBox.sy,
        mkmBoundingBox.sWidth, mkmBoundingBox.sHeight,
        0, 0, 224, 224
      );
      let featureVec = mkm.featureExtractor.execute(
        mkm.normalizePixelValues(mkm.cvs),mkm.ouputNode
      );
      featureVec = featureVec.reshape(mkm.inputShape);

      if (CURRTRIAL.num < TASK.ModelConfig.trainIdx) {
        let oneHotIdx = mkm.getOneHotIdx(
          CURRTRIAL.test_scenebag_labels[0][0]
        );
        mkm.dataObj.yTrainLabels.push(oneHotIdx);
        mkm.dataObj.yTrain.push(mkm.oneHotArr[oneHotIdx]);
        mkm.dataObj.xTrain.push(featureVec);
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
  } else {//SR2
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
        boundingBoxes3D: boundingBoxesChoice3D, //XX
        boundingBoxes2D: boundingBoxesChoice2D, //XX
      };

      // let mkmBoundingBox = mkm.getMkModelBoundingBox(params);
      let camName = Object.keys(IMAGES['Sample'][label].CAMERAS)[0];

      let cam = CAMERAS['Sample'][label][camName];

      let img = IMAGES['Sample'][label];
      let fov = (cam.fov * Math.PI) / 180;
      let heightThreeJS =
        2 * Math.tan(fov / 2) *
        (cam.position.z + img.IMAGES.sizeTHREEJS / 2);
      let srcHeight =
        (img.IMAGES.sizeTHREEJS / heightThreeJS) *
        VISIBLECANVASWEBGL.height;

      let sx =
        ENV.XGridCenter[CURRTRIAL.samplegridindex] * 2 - srcHeight / 2;
      let sy =
        ENV.YGridCenter[CURRTRIAL.samplegridindex] * 2 - srcHeight / 2;
      let sw = srcHeight;
      let sh = sw;
      console.log('sx:', sx, 'sy:', sy, 'sw:', sw, 'sh:', sh);
      ctx.drawImage(VISIBLECANVAS, sx, sy, sw, sh, 0, 0, 224, 224);

      if (
        TASK.ModelConfig.saveImages == 3 &&
        CURRTRIAL.num < TASK.ModelConfig.trainIdx
      ) {
        let path = `${
          TASK.Agent
        }/${ENV.CurrentDate.toJSON()}/sample_train_${
          CURRTRIAL.num
        }.png`;
        // let modelCvs = mkm.cvs.toDataURL();
        storageRef
          .child('mkturkfiles/mkmodels/')
          .child(path)
          .putString(mkm.cvs.toDataURL(), 'data_url');
      }

      // console.log(mkm.featureExtractor);
      let hello = mkm.featureExtractor.execute(
        mkm.normalizePixelValues(mkm.cvs),
        'module_apply_default/resnet_v2_50/block4/unit_3/bottleneck_v2/conv2/Relu'
      );
      console.log('last conv:', hello);
      let featureVec = mkm.featureExtractor.execute(
        mkm.normalizePixelValues(mkm.cvs),
        mkm.ouputNode
      );
      console.log('featureVec:', featureVec);
      console.log('mkm.outputNode:', mkm.outputNode);

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
      mkm.hasSampleFeatures = true;
    } else if (taskscreen != 'Sample' && mkm.hasSampleFeatures) {
      mkm.hasSampleFeatures = false;
    }
  }
}//FUNCTION renderForModel

//========== BUFFER CHOICE CANVAS ==========//
function bufferChoiceUsingCircleSquare(choice_color,choice_radius,choice_grid_indices,canvasobj) {
  // Option: gray out before buffering test: (for overriding previous trial's test screen if current trial test screen has transparent elements?)
  let boundingBoxes = { x: [], y: [], grid: [], ID: [], class:[], asset: []};
  // Draw test object(s):
  for (var i = 0; i <= choice_grid_indices.length - 1; i++) {
    // If HideTestDistractors, simply do not draw the image
    if (TASK.HideChoiceDistractors == 1) {
      if (correct_index != i) {
        boundingBoxes.x.push([NaN, NaN]);
        boundingBoxes.y.push([NaN, NaN]);
        boundingBoxes.grid.push(-1)
        boundingBoxes.ID.push('')
        boundingBoxes.asset.push('')
        continue;
      }
    }
    if (i == 0) {
      var funcreturn = renderDotOnCanvas(choice_color,choice_grid_indices[i],choice_radius,canvasobj);
      boundingBoxes.class.push(0)
    } //same = circle
    else if (i == 1) {
      var funcreturn = renderSquareOnCanvas(choice_color,choice_grid_indices[i],2 * choice_radius,canvasobj);
      boundingBoxes.class.push(1)
    } //different = square
    boundingBoxes.x.push(funcreturn.x[0]);
    boundingBoxes.y.push(funcreturn.y[0]);
    boundingBoxes.grid.push(funcreturn.grid[0])
    boundingBoxes.ID.push(funcreturn.ID[0])
    boundingBoxes.asset.push('shape')
  }//FOR i choices
  return boundingBoxes;
}//FUNCTION bufferChoiceUsingCircleSquare

// Dot render using gridindex
function renderDotOnCanvas(color, gridindex, dot_pixelradius, canvasobj){
  var context = canvasobj.getContext('2d');
  let boundingBoxes = { x: [], y: [], grid:[], ID: [], class: [], asset: [] };

  // Draw fixation dot
  if (Array.isArray(gridindex)) {
    var xcent = gridindex[0] / ENV.CanvasRatio;
    var ycent = gridindex[1] / ENV.CanvasRatio;
    boundingBoxes.grid.push(-1)
  } //IF x,y coord provided
  else {
    var xcent = ENV.XGridCenter[gridindex] / ENV.CanvasRatio;
    var ycent = ENV.YGridCenter[gridindex] / ENV.CanvasRatio;
    boundingBoxes.grid.push(gridindex)
  } //IF gridindex provided
  var rad = dot_pixelradius / ENV.CanvasRatio;
  context.beginPath();
  context.arc(xcent, ycent, rad, 0 * Math.PI, 2 * Math.PI);
  context.fillStyle = color;
  context.fill();

  // Define (rectangular) boundaries of fixation
  // Bounding boxes of dot on canvas
  boundingBoxes.x.push( [(xcent - rad) * ENV.CanvasRatio, (xcent + rad) * ENV.CanvasRatio] );
  boundingBoxes.y.push( [(ycent - rad) * ENV.CanvasRatio, (ycent + rad) * ENV.CanvasRatio] );

  boundingBoxes.x[0][0] = boundingBoxes.x[0][0] + CANVAS.offsetleft;
  boundingBoxes.x[0][1] = boundingBoxes.x[0][1] + CANVAS.offsetleft;
  boundingBoxes.y[0][0] = boundingBoxes.y[0][0] + CANVAS.offsettop;
  boundingBoxes.y[0][1] = boundingBoxes.y[0][1] + CANVAS.offsettop;

  boundingBoxes.ID.push('circle')
  boundingBoxes.class.push(0)
  boundingBoxes.asset.push('shape')
  return boundingBoxes
}//FUNCTION renderDotOnCanvas

function getFixationWindowBoundingBox(gridindex, rad) {
  let boundingBoxes = { x: [], y: []};
  var xcent = ENV.XGridCenter[gridindex];
  var ycent = ENV.YGridCenter[gridindex];

  // Bounding boxes of dot on canvas
  boundingBoxes.x = [xcent - rad, xcent + rad];
  boundingBoxes.y = [ycent - rad, ycent + rad];

  boundingBoxes.x[0] = boundingBoxes.x[0] + CANVAS.offsetleft;
  boundingBoxes.x[1] = boundingBoxes.x[1] + CANVAS.offsetleft;
  boundingBoxes.y[0] = boundingBoxes.y[0] + CANVAS.offsettop;
  boundingBoxes.y[1] = boundingBoxes.y[1] + CANVAS.offsettop;
  return boundingBoxes
}//FUNCTION getFixationWindowBoundingBox

function renderSquareOnCanvas(color, gridIdx, square_pixelwidth, canvasobj) {
  const ctx = canvasobj.getContext('2d');
  let boundingBoxes = { x: [], y: [], grid: [], ID: [] , class: [], asset: []};
  let xCenter;
  let yCenter;

  if (Array.isArray(gridIdx)) {
    // IF x, y coord provided
    xCenter = gridIdx[0] / ENV.CanvasRatio;
    yCenter = gridIdx[1] / ENV.CanvasRatio;
    boundingBoxes.grid.push(-1)
  } else {
    // IF gridIdx provided
    xCenter = ENV.XGridCenter[gridIdx] / ENV.CanvasRatio;
    yCenter = ENV.YGridCenter[gridIdx] / ENV.CanvasRatio;
    boundingBoxes.grid.push(gridIdx)
  }//ELSE use grid coords

  const displayWidth = square_pixelwidth / ENV.CanvasRatio;

  ctx.fillStyle = color;
  ctx.fillRect(xCenter - displayWidth / 2, yCenter - displayWidth / 2, displayWidth,displayWidth);

  // Define (rectangular) boundaries of fixation
  // Bounding boxes of dot on canvas

  boundingBoxes.x.push([
    (xCenter - displayWidth / 2) * ENV.CanvasRatio,
    (xCenter + displayWidth / 2) * ENV.CanvasRatio,
  ]);
  boundingBoxes.y.push([
    (yCenter - displayWidth / 2) * ENV.CanvasRatio,
    (yCenter + displayWidth / 2) * ENV.CanvasRatio,
  ]);

  boundingBoxes.x[0][0] = boundingBoxes.x[0][0] + CANVAS.offsetleft;
  boundingBoxes.x[0][1] = boundingBoxes.x[0][1] + CANVAS.offsetleft;
  boundingBoxes.y[0][0] = boundingBoxes.y[0][0] + CANVAS.offsettop;
  boundingBoxes.y[0][1] = boundingBoxes.y[0][1] + CANVAS.offsettop;

  boundingBoxes.ID.push('square')
  boundingBoxes.class.push(0)
  boundingBoxes.asset.push('shape')
  return boundingBoxes
} //FUNCTION renderSquareOnCanvas

function renderTriangleOnCanvas(color,gridindex,square_pixelwidth,canvasobj) {
  var context = canvasobj.getContext('2d');
  let boundingBoxes = { x: [], y: [], grid: [], ID: [], class: [], asset: []};
  var wd = square_pixelwidth / ENV.CanvasRatio;
  var xcent = ENV.XGridCenter[gridindex] / ENV.CanvasRatio;
  var ycent = ENV.YGridCenter[gridindex] / ENV.CanvasRatio;
  context.fillStyle = color;

  // var len_side = Math.sqrt(Math.pow(2*(wd/2),2))
  // var len_side = Math.sin(30 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)

  context.beginPath();
  context.moveTo(xcent, ycent - wd / 2); //bottom vertex
  context.lineTo(xcent - wd / 2, ycent + wd / 2); //top left
  context.lineTo(xcent + wd / 2, ycent + wd / 2); //top right
  context.fill();

  // Define (rectangular) boundaries of fixation
  // Bounding boxes of dot on canvas
  boundingBoxes.x.push([
    (xcent - wd / 2) * ENV.CanvasRatio,
    (xcent + wd / 2) * ENV.CanvasRatio,
  ]);
  boundingBoxes.y.push([
    (ycent - wd / 2) * ENV.CanvasRatio,
    (ycent + wd / 2) * ENV.CanvasRatio,
  ]);

  boundingBoxes.x[0][0] = boundingBoxes.x[0][0] + CANVAS.offsetleft;
  boundingBoxes.x[0][1] = boundingBoxes.x[0][1] + CANVAS.offsetleft;
  boundingBoxes.y[0][0] = boundingBoxes.y[0][0] + CANVAS.offsettop;
  boundingBoxes.y[0][1] = boundingBoxes.y[0][1] + CANVAS.offsettop;

  boundingBoxes.grid.push(gridindex)
  boundingBoxes.ID.push('triangle')
  boundingBoxes.class.push(0)
  boundingBoxes.asset.push('shape')
  return boundingBoxes
}//FUNCTION renderTriangleOnCanvas

function renderBlank(canvasobj, bkgdcolor) {
  var context = canvasobj.getContext('2d');
  let boundingBoxes = { x: [], y: [] };
  //XX return bb
  context.fillStyle = bkgdcolor;
  context.clearRect(0, 0, canvasobj.width, canvasobj.height);
} //FUNCTION renderBlank

function renderFixationWindow(gridx,gridy,fixationgridindex,fixationwindowradius,canvasratio,canvasobj) {
  //---- Fixation Window Bounding Box (yellow)
  var wd = (2 * fixationwindowradius) / canvasratio;
  var xcent = gridx[fixationgridindex] / canvasratio;
  var ycent = gridy[fixationgridindex] / canvasratio;

  const context = canvasobj.getContext('2d');
  let boundingBoxes = { x: [], y: [] };
  context.strokeStyle = 'yellow';
  context.strokeRect(xcent - wd / 2, ycent - wd / 2, wd, wd);

  var displaycoord = [
    (xcent - wd / 2) * canvasratio,
    (ycent - wd / 2) * canvasratio,
    (xcent + wd / 2) * canvasratio,
    (ycent + wd / 2) * canvasratio,
  ];
  displayPhysicalSizeText(displaycoord, canvasobj);

  boundingBoxes.x[0] = displaycoord[0] + CANVAS.offsetleft;
  boundingBoxes.x[1] = displaycoord[2] + CANVAS.offsetleft;
  boundingBoxes.y[0] = displaycoord[1] + CANVAS.offsettop;
  boundingBoxes.y[1] = displaycoord[3] + CANVAS.offsettop;
  return boundingBoxes
}//FUNCTION renderFixationWindow

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

  //Display grid (red)
  for (var i = 0; i <= gridx.length - 1; i++) {
    rad = 10;
    context.beginPath();
    context.arc(gridx[i] / ENV.CanvasRatio, gridy[i] / ENV.CanvasRatio, rad / ENV.CanvasRatio, 0 * Math.PI, 2 * Math.PI);
    context.fillStyle = 'red';
    context.fill();

    var displaycoord = [gridx[i] - rad, gridy[i] - rad, gridx[i] + rad, gridy[i] + rad];
    var outofbounds = checkDisplayBounds(displaycoord);
    if (outofbounds == 1) {
      outofbounds_str =
        outofbounds_str + '<br>' + 'gridpoint' + i + ' is out of bounds';
    }
    displayGridCoordinateText(i, [gridx[i], gridy[i]], canvasobj);
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
  displayPhysicalSizeText(displaycoord, canvasobj);

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
        outofbounds_str = outofbounds_str + '<br>' + 'Choice Image' + i + ' is out of bounds';
      }
      displayPhysicalSizeText(displaycoord, canvasobj);
    }//FOR i
  }//IF same-different choice screen

  if (VISIBLECANVASWEBGL.width > 4096 || VISIBLECANVASWEBGL.height > 4096) {
    outofbounds_str = outofbounds_str +
      'Canvas may be too large for webgl limit of 4096 pixels in either dimension -- 3d rendering may not be accurate! Consider using a smaller display size.';
  }//IF canvas too large

  if (outofbounds_str == '') { outofbounds_str = 'All display elements are fully visible';}

  displayoutofboundsstr = outofbounds_str;
}//FUNCTION renderBlankwithGridMarkers

function makeSequencePost(durationMS,taskscreen,framerate){
  var fseq = range(0,Math.round(durationMS*framerate/1000) - 1, 1);
  var tseq = []
  var sseq = []
  for (var f=0; f<=fseq.length-1; f++){
    tseq[f] = f * (1000 / framerate);
    sseq[f] = taskscreen;
  }//FOR f frames
  return [tseq,sseq]
}//FUNCTION makeSequencePost

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
}//FUNCTION checkDisplayBounds

function setupImageLoadingText() {
  var textobj = document.getElementById('imageloadingtext');
  textobj.style.top = CANVAS.offsettop + 'px';
  textobj.innerHTML = '';
  setupCanvasListeners(textobj);
}//FUNCTION setupImageLoadingText

function updateImageLoadingAndDisplayText(str) {
  var textobj = document.getElementById('imageloadingtext');

  //DISPLAY TIMING: Software check for frame drops
  var dt = [];
  var u_dt = 0;
  for (var i = 0; i <= CURRTRIAL.tsequenceactualclip.length - 1; i++) {
    dt[i] = Math.round( CURRTRIAL.tsequenceactualclip[i] - CURRTRIAL.tsequencedesiredclip[i] );
    u_dt = u_dt + Math.abs(dt[i]);
  }//FOR i
  u_dt = u_dt / dt.length;

  textobj.innerHTML =
    str + imageloadingtimestr + '<br>' + displayoutofboundsstr + '<br>' +
    0.01 * Math.round(100 * ENV.FrameRateDisplay) + 'Hz ' +
    ' (' + 0.1 * Math.round(10000 / ENV.FrameRateDisplay) + 'ms res) display' +
    ' --- ' + 0.01 * Math.round(100 * ENV.FrameRateMovie) + 'Hz scene update' + '<br>' +
    '<font color=red> mean(t_actual - t_desired) = ' +
    Math.round(u_dt) + ' ms' + '  (min=' + Math.round(Math.min(...dt)) + ', max=' +
    Math.round(Math.max(...dt)) + ') </font>' + '<br>' +
    'software desired - software actual' + dt + '<br><br>' + 'roundtrip command' + +'<br>' +
    'roundtrip reward' + '<br><br>' +
    'softwared desired - software actual' + '<br><br>' +
    'softwared actual - photodiode actual' + '<br>' +
    eyedataratestr;
}//FUNCTION updateImageLoadingAndDisplayText

function displayPhysicalSizeText(displayobject_coord, canvasobj) {
  var visible_ctxt = canvasobj.getContext('2d');
  visible_ctxt.textBaseline = 'hanging';
  visible_ctxt.fillStyle = 'white';
  visible_ctxt.font = '16px Verdana';
  visible_ctxt.fillText(
    Math.round( (100 * (displayobject_coord[2] - displayobject_coord[0])) / ENV.ViewportPPI ) / 100 + ' x '
    + Math.round( (100 * (displayobject_coord[3] - displayobject_coord[1])) / ENV.ViewportPPI) / 100 + ' in',
    displayobject_coord[0] / ENV.CanvasRatio,
    (displayobject_coord[1] - 16) / ENV.CanvasRatio
  );
}//FUNCTION displayPhysicalSizeText

function displayGridCoordinateText(idx, xycoord, canvasobj) {
  var visible_ctxt = canvasobj.getContext('2d');
  visible_ctxt.textAlign = 'center';
  visible_ctxt.textBaseline = 'middle';
  visible_ctxt.fillStyle = 'white';
  visible_ctxt.font = '20px Verdana';
  visible_ctxt.fillText(idx,xycoord[0] / ENV.CanvasRatio,xycoord[1] / ENV.CanvasRatio);
}//FUNCTION displayGridCoordinateText

async function saveScreenshot(canvasobj, currtrial,taskscreen,framenum,objectlabel, objectind)
{
  //---- upload screenshot to firebase
  //sample image will be uploaded to the appropriate folder in the scene

  if (taskscreen == 'Sample') {
    var currtrial_samplepath = TASK.ImageBagsSample[objectlabel];
  } else if (taskscreen == 'Test') {
    var currtrial_samplepath = TASK.ImageBagsSample[CURRTRIAL.sample_scenebag_label];
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
    scenefolder + '_scene_' +
    date + '_' +
    paramfolder + '_' +
    ENV.DeviceName + '_device';

  if (canvasobj.width > 4096 || canvasobj.height > 4096) {
    console.log('Canvas may be too large for webgl limit of 4096 pixels in either dimension -- Image Saving may not be accurate! Consider using a smaller display size.');
  } //IF

  currtrial = String(currtrial).padStart(3, '0');
  framenum = String(framenum).padStart(3, '0');
  var fullpath =
    storage_path + '/' +
    canvasobj.id + '_' +
    'trialnum' + currtrial +
    '_' + taskscreen +
    '_' + 'framenum' + framenum;

  if (objectlabel.length > 1) {
    for (var i = 0; i <= objectlabel.length - 1; i++) {
      fullpath =
        fullpath + '_' + 'label' + objectlabel[i] + '_' + 'index' + objectind[i];
    } //FOR i objects
  } else {
    fullpath = fullpath + '_' + 'label' + objectlabel + '_' + 'index' + objectind;
  }
  fullpath_mesh = fullpath + '.glb';
  fullpath = fullpath + '.png';

  let imgFileNameSplit = fullpath.split('/');
  let imgFileName = imgFileNameSplit[imgFileNameSplit.length - 1];
  let dirNameSplit = scenefolder.split('/');
  let dirName = dirNameSplit[dirNameSplit.length - 1];

  canvasobj.toBlob(async (blob) => {
    let subDirHandle = await FLAGS.DirHandle.getDirectoryHandle(dirName, {
      create: false,
    });
    let imgFileHandle = await subDirHandle.getFileHandle(imgFileName, {
      create: true,
    });

    let writableStream = await imgFileHandle.createWritable();
    await writableStream.write(blob);
    await writableStream.close();
    console.log('fullpath', fullpath);
    console.log('dirname:', dirName);
    console.log('imgFileName', imgFileName)
  });

  //---- Save mesh if morph
  if (typeof(IMAGES[taskscreen][CURRTRIAL.sample_scenebag_label[0]].OBJECTS) != "undefined"){
    let objToSave = Object.keys(IMAGES[taskscreen][CURRTRIAL.sample_scenebag_label[0]].OBJECTS)[0];
    let morphTargetDelta = IMAGES[taskscreen][CURRTRIAL.sample_scenebag_label[0]].OBJECTS[objToSave].morphTargetDelta;

    if (morphTargetDelta !== undefined) {
      let lenMorphTargetDelta =
        IMAGES[taskscreen][CURRTRIAL.sample_scenebag_label[0]].OBJECTS[objToSave]
          .morphTargetDelta.length;

      if (lenMorphTargetDelta > 0) {
        try {
          let meshToSave =
            OBJECTS[taskscreen][CURRTRIAL.sample_scenebag_label[0]].meshes[
              objToSave
            ].scene;

          const exporter = new THREE.GLTFExporter();
          const glb = await new Promise((resolve) => {
            exporter.parse(meshToSave, resolve, {
              binary: true,
              truncateDrawRange: false,
            });
          });

          let meshBlob = new Blob([glb], { type: 'application/octet-stream' });
          storage.ref().child(fullpath_mesh).put(meshBlob);
        } catch (error) {
          console.log('[ERROR SAVING MORPHED MESH]:', error);
        }
      } //IF lenMorph
    } //IF morph
  } //IF 3D Objects
} //FUNCTION saveScreenshot

async function saveMeshGLB(currtrial,taskscreen,framenum,objectlabel,objectind){
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
  // save mesh to gltf file if morph
  if (taskscreen == 'Sample') {
    let objToSave = Object.keys(
      IMAGES[taskscreen][CURRTRIAL.sample_scenebag_label[0]].OBJECTS
    )[0];
    if (
      typeof IMAGES[taskscreen][CURRTRIAL.sample_scenebag_label[0]].OBJECTS[
        objToSave
      ].morphTargetDelta != 'undefined'
    ) {
      if (
        IMAGES[taskscreen][CURRTRIAL.sample_scenebag_label[0]].OBJECTS[
          objToSave
        ].morphTargetDelta.length > 0
      ) {
        var meshtoSave =
          OBJECTS[taskscreen][CURRTRIAL.sample_scenebag_label[0]].meshes[
            objToSave
          ].scene;
        const exporter = new THREE.GLTFExporter();
        const glb = await new Promise((resolve) =>
          exporter.parse(meshtoSave, resolve, {
            binary: true,
            truncateDrawRange: false,
          })
        );
        const blob = new Blob([glb], { type: 'model/gltf-binary' });
        storage.ref().child(fullpath).put(blob);
      }
    }
  }
}//FUNCTION saveMeshGLB

//================== CANVAS SETUP ==================//
function refreshCanvasSettings(TASK) {
  // Adjust location of CANVAS based on species-specific setup
  CANVAS.headsupfraction = TASK.HeadsupDisplayFraction;

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
        runPumpButtonCallback('flush');
      },
      false
    );
    document.querySelector('button[id=pumptrigger]').addEventListener(
      'pointerup',
      function () {
        event.preventDefault();
        runPumpButtonCallback('trigger');
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
  if (canvasobj == VISIBLECANVASWEBGL) {
    var cameraHeightatOrigin =
      Math.tan(((TASK.THREEJScameraFOV / 2) * Math.PI) / 180) *
      TASK.THREEJScameraZDist *
      2;
    var webglcanvasSizeInches = cameraHeightatOrigin * ENV.THREEJStoInches;
    var webglcanvasSizePixel = webglcanvasSizeInches * ENV.ViewportPPI;
    canvasobj.width = webglcanvasSizePixel;
    canvasobj.height = webglcanvasSizePixel;
    canvasobj.style.top =
      (windowHeight - CANVAS.offsettop) / 2 +
      CANVAS.offsettop -
      canvasobj.height / 2 +
      'px';
    canvasobj.style.left =
      (windowWidth - CANVAS.offsetleft) / 2 +
      CANVAS.offsetleft -
      canvasobj.width / 2 +
      'px';
    canvasobj.style.margin = '0 auto';
    canvasobj.style.display = 'block'; //visible
  } else {
    canvasobj.style.top = CANVAS.offsettop + 'px';
    canvasobj.style.left = CANVAS.offsetleft + 'px';
    canvasobj.width = windowWidth - CANVAS.offsetleft;
    canvasobj.height = windowHeight - CANVAS.offsettop;
    canvasobj.style.margin = '0 auto';
    canvasobj.style.display = 'block'; //visible
    if (
      TASK.Agent == 'SaveImages' &&
      TASK.SaveImagesResolution > 0 &&
      canvasobj == VISIBLECANVAS
    ) {
      canvasobj.width = TASK.SaveImagesResolution;
      canvasobj.height = TASK.SaveImagesResolution;
    }
  }
  // center in page

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
  if (ENV.DevicePixelRatio !== ENV.BackingStoreRatio) {
    if (
      TASK.Agent == 'SaveImages' &&
      TASK.SaveImagesResolution > 0 &&
      canvasobj == VISIBLECANVAS
    ) {
      canvasobj.style.width = canvasobj.width + 'px';
      canvasobj.style.height = canvasobj.height + 'px';
      canvasobj.style.margin = '0 auto';
    } else {
      const oldWidth = canvasobj.width;
      const oldHeight = canvasobj.height;
      canvasobj.width = oldWidth / ENV.CanvasRatio;
      canvasobj.height = oldHeight / ENV.CanvasRatio;
      canvasobj.style.width = windowWidth - CANVAS.offsetleft + 'px';
      canvasobj.style.height = windowHeight - CANVAS.offsettop + 'px';
      canvasobj.style.margin = '0 auto';
    }
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
        i < EVENTS['trialseries']['Response'].length; i++
      ) {
        if ( EVENTS['trialseries']['Response'][i] == EVENTS['trialseries']['CorrectItem'][i])
        {
          ncorrect = ncorrect + 1;
          let len = EVENTS['trialseries']['Response'].length - TASK.ModelConfig.trainIdx;
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
    }//FOR i trials
  }//ELSE

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
          'User: ' + ENV.ResearcherDisplayName + ', ' + ENV.ResearcherEmail + '<br>' +
          'Agent: ' + ENV.Subject + ', <font color=green><b>' +
          'TRAINING</b></font> ' + '(' + tmp2 + ' of ' + TASK.ModelConfig.trainIdx + ')' +
          '<br>' + task1 + '<br>' + task2 +
          '<br>' + '<br>' +
          'last trial @ ' + CURRTRIAL.lastTrialCompleted.toLocaleTimeString('en-US') + '<br>' +
          'last saved to firebase @ ' + CURRTRIAL.lastFirebaseSave.toLocaleTimeString('en-US');
      } else {
        textobj.innerHTML =
          'User: ' + ENV.ResearcherDisplayName + ', ' + ENV.ResearcherEmail + '<br>' +
          'Agent: ' + ENV.Subject + ', <font color=green><b>' +
          pctcorrect + '%</b></font> ' + '(' +
          ncorrect + ' of ' + (EVENTS['trialseries']['Response'].length - TASK.ModelConfig.trainIdx) + ' trials)' + '<br>' +
          task1 + '<br>' + task2 + 
          '<br>' + '<br>' +
          'last trial @ ' + CURRTRIAL.lastTrialCompleted.toLocaleTimeString('en-US') + '<br>' +
          'last saved to firebase @ ' + CURRTRIAL.lastFirebaseSave.toLocaleTimeString('en-US');
      }
    } else {
      textobj.innerHTML =
        'User: ' + ENV.ResearcherDisplayName + ', ' + ENV.ResearcherEmail + '<br>' +
        'Agent: ' + ENV.Subject + ', <font color=green><b>' + pctcorrect + '%</b></font> ' +
        '(' + ncorrect + ' of ' + EVENTS['trialseries']['Response'].length + ' trials)' + '<br>' +
        'NRewards=' + nreward +
        '</font> (' + Math.round(TASK.RewardDuration) + ' milliseconds)' + '<br> ' +
        task1 + '<br>' + task2 + 
        '<br>' + '<br>' +
        'last trial @ ' + CURRTRIAL.lastTrialCompleted.toLocaleTimeString('en-US') + '<br>' +
        'last saved to firebase @ ' + CURRTRIAL.lastFirebaseSave.toLocaleTimeString('en-US');
    }//ELSE

    if (FLAGS.RFIDGeneratorCreated == 1) {
      textobj.innerHTML =
        textobj.innerHTML +
        '<br>' + '<font color = red>' +
        'PAUSED: waiting for RFID read!!' +
        '<br></font>';
    }
    if (TASK.CheckRFID > 0 && port.connected == false) {
      textobj.innerHTML =
        textobj.innerHTML +
        '<br>' + '<font color = red>' +
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
      'User: ' + ENV.ResearcherDisplayName +
      ', ' + ENV.ResearcherEmail +
      '<br>' + 'No trials performed' +
      '<br>' +
      '<br><b>' + firestoreRecordFound +
      ' for ' + ENV.DeviceName.toLowerCase() + '</b>' + '<br>' +
      'Screen Size = ' + ENV.ScreenSizeInches[2] +
      'in (' + ENV.ViewportPixels + 'px; ' + ENV.ScreenRatio + 'x' + ')' + '<br>' +
      screenRatioMatchesDPR + '<br>' + '<br>' +
      'Device brand,name,type: ' + ENV.DeviceBrand + ', ' +
      '<u><font color = green>' + ENV.DeviceName + '</font></u>' + ', ' + ENV.DeviceType + '<br>' +
      'Screen: ' + ENV.DeviceScreenWidth + 'x' + ENV.DeviceScreenHeight + ' pixels' + '<br>' +
      'TouchScreen: ' + ENV.DeviceTouchScreen + '<br>' +
      'GPU: ' + ENV.DeviceGPU + '<br>' +
      'OS name,codename,ver: ' + ENV.DeviceOSName +
      ', ' + '<u><font color = green>' + ENV.DeviceOSCodeName + '</font></u>' + ', ' + ENV.DeviceOSVersion +
      '<br>' + 'Browser: ' + '<u><font color = green>' + ENV.DeviceBrowserName + '</font></u>' +
      ' v' + ENV.DeviceBrowserVersion;
  }//ELSE IF isnan
}//FUNCTION updateHeadsUpDisplay

function updateHeadsUpDisplayDevices() {
  var textobj = document.getElementById('headsuptextdevices');
  if (CANVAS.headsupfraction > 0) {
    textobj.innerHTML =
      '<font color=red><b>' + ble.statustext + port.statustext_connect + '<br></font>' +
      '<font color=green><b>' + port.statustext_sent + '<br></font>' +
      '<font color=blue><b>' + port.statustext_received + '<br></font>' +
      '<font color=red><b>' + blescale.statustext_connect + '<br></font>' +
      '<font color=blue><b>' + blescale.statustext_received + '<br></font>';
  } else if (CANVAS.headsupfraction == 0) {
    textobj.innerHTML = ''; //port.statustext_connect + blescale.statustext_connect
  } else if (isNaN(CANVAS.headsupfraction)) {
    //before task params load
    textobj.innerHTML = port.statustext_connect + blescale.statustext_connect;
  }
}//FUNCTION updateHeadsUpDisplay

function updateHeadsUpDisplayAutomator(
  currentautomatorstagename,
  pctcorrect, ntrials,
  minpctcorrect, mintrials, eventstring
) {
  if (CANVAS.headsupfraction > 0) {
    var textstr =
      'Automator: ' + '<font color=red><b>' + TASK.Automator + '</b></font>' + ', <font color=white><b>' +
      'Stage=' + currentautomatorstagename + TASK.CurrentAutomatorStage + '</b></font>' +
      '<br> Performance: ' + '<font color=green><b>' + Math.round(pctcorrect) + '%, last ' + ntrials + ' trials</b></font> ' +
      '(min: ' + minpctcorrect + '%, ' + mintrials + ' trials)' +
      '<br>' + eventstring;
  } else if (CANVAS.headsupfraction == 0) {
    var textstr = '';
  }
  return textstr;
}//FUNCTION updateHeadsUpDisplayAutomator

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
    }//FOR j
  }//FOR i

  //center x & y grid within canvas
  var xcanvascent =
    ((document.body.clientWidth - CANVAS.offsetleft) *
      ENV.CanvasRatio * ENV.DevicePixelRatio) / 2;
  xcanvascent = xcanvascent + xoffset;
  var dx = xcanvascent - (gridspacing * ngridpoints) / 2; //left side of grid

  var ycanvascent =
    ((document.body.clientHeight - CANVAS.offsettop) *
      ENV.CanvasRatio * ENV.DevicePixelRatio) / 2;
  ycanvascent = ycanvascent + yoffset;
  var dy = ycanvascent - (gridspacing * ngridpoints) / 2; //top of grid

  for (var i = 0; i <= xgrid.length - 1; i++) {
    xgridcent[i] = Math.round(xgrid[i] * gridspacing + dx);
    ygridcent[i] = Math.round(ygrid[i] * gridspacing + dy);
  }//FOR i gridpoints

  return [xcanvascent, ycanvascent, xgridcent, ygridcent];
}//FUNCTION defineImageGrid

function updateFilterSingleFrame(taskscreen,classlabel,index,movieframe,gridindex) {
  // ======= OBJECT FILTERS
  var objFilterSingleFrame = {
    blur: 0, brightness: 100,
    contrast: 100,
    grayscale: 0,
    huerotate: 0,
    invert: 0,
    opacity: 100,
    saturate: 100,
    sepia: 0,
  };
  let filtering_objs = 0
  let filtering_bkgd = 0
  if (typeof IMAGES[taskscreen][classlabel].OBJECTFILTERS !== 'undefined') {
    var nextblur = chooseArrayElement(IMAGES[taskscreen][classlabel].OBJECTFILTERS.blur,index,0);
    if (Number.isInteger(movieframe) && nextblur !== undefined) {
      nextblur = chooseArrayElement(nextblur, movieframe, nextblur.length - 1);
    }
    if (nextblur !== '' && nextblur !== undefined) {
      objFilterSingleFrame.blur = nextblur;
      filtering_objs = 1
    }

    var nextbrightness = chooseArrayElement(IMAGES[taskscreen][classlabel].OBJECTFILTERS.brightness,index,0);
    if (Number.isInteger(movieframe) && nextbrightness !== undefined) {
      nextbrightness = chooseArrayElement(nextbrightness,movieframe,nextbrightness.length - 1);
    }
    if (nextbrightness !== '' && nextbrightness !== undefined) {
      objFilterSingleFrame.brightness = nextbrightness;
      filtering_objs = 1
    }

    var nextcontrast = chooseArrayElement(IMAGES[taskscreen][classlabel].OBJECTFILTERS.contrast,index,0);
    if (Number.isInteger(movieframe) && nextcontrast !== undefined) {
      nextcontrast = chooseArrayElement(nextcontrast,movieframe,nextcontrast.length - 1);
    }
    if (nextcontrast !== '' && nextcontrast !== undefined) {
      objFilterSingleFrame.contrast = nextcontrast;
      filtering_objs = 1
    }

    var nextgrayscale = chooseArrayElement(IMAGES[taskscreen][classlabel].OBJECTFILTERS.grayscale,index,0);
    if (Number.isInteger(movieframe) && nextgrayscale !== undefined) {
      nextgrayscale = chooseArrayElement(nextgrayscale,movieframe,nextgrayscale.length - 1);
    }
    if (nextgrayscale !== '' && nextgrayscale !== undefined) {
      objFilterSingleFrame.grayscale = nextgrayscale;
      filtering_objs = 1
    }

    var nexthuerotate = chooseArrayElement(IMAGES[taskscreen][classlabel].OBJECTFILTERS.huerotate,index,0);
    if (Number.isInteger(movieframe) && nexthuerotate !== undefined) {
      nexthuerotate = chooseArrayElement(nexthuerotate,movieframe,nexthuerotate.length - 1);
    }
    if (nexthuerotate !== '' && nexthuerotate !== undefined) {
      objFilterSingleFrame.huerotate = nexthuerotate;
      filtering_objs = 1
    }

    var nextinvert = chooseArrayElement(IMAGES[taskscreen][classlabel].OBJECTFILTERS.invert,index,0);
    if (Number.isInteger(movieframe) && nextinvert !== undefined) {
      nextinvert = chooseArrayElement(nextinvert,movieframe,nextinvert.length - 1);
    }
    if (nextinvert !== '' && nextinvert !== undefined) {
      objFilterSingleFrame.invert = nextinvert;
      filtering_objs = 1
    }

    var nextopacity = chooseArrayElement(IMAGES[taskscreen][classlabel].OBJECTFILTERS.opacity,index,0);
    if (Number.isInteger(movieframe) && nextopacity !== undefined) {
      nextopacity = chooseArrayElement(nextopacity,movieframe,nextopacity.length - 1);
    }
    if (nextopacity !== '' && nextopacity !== undefined) {
      objFilterSingleFrame.opacity = nextopacity;
      filtering_objs = 1
    }

    var nextsaturate = chooseArrayElement(IMAGES[taskscreen][classlabel].OBJECTFILTERS.saturate,index,0);
    if (Number.isInteger(movieframe) && nextsaturate !== undefined) {
      nextsaturate = chooseArrayElement(nextsaturate,movieframe,nextsaturate.length - 1);
    }
    if (nextsaturate !== '' && nextsaturate !== undefined) {
      objFilterSingleFrame.saturate = nextsaturate;
      filtering_objs = 1
    }

    var nextsepia = chooseArrayElement(IMAGES[taskscreen][classlabel].OBJECTFILTERS.sepia,index,0);
    if (Number.isInteger(movieframe) && nextsepia !== undefined) {
      nextsepia = chooseArrayElement(nextsepia,movieframe,nextsepia.length - 1);
    }
    if (nextsepia !== '' && nextsepia !== undefined) {
      objFilterSingleFrame.sepia = nextsepia;
      filtering_objs = 1
    }
  } //IF OBJECTFILTERS defined
  var objFilterstr =
    'blur(' + objFilterSingleFrame.blur + 'px) ' +
    'brightness(' + objFilterSingleFrame.brightness + '%) ' +
    'contrast(' + objFilterSingleFrame.contrast + '%) ' +
    'grayscale(' + objFilterSingleFrame.grayscale + '%) ' +
    'hue-rotate(' + objFilterSingleFrame.huerotate + 'deg) ' +
    'invert(' + objFilterSingleFrame.invert + '%) ' + 
    'opacity(' + objFilterSingleFrame.opacity + '%) ' +
    'saturate(' + objFilterSingleFrame.saturate + '%) ' +
    'sepia(' + objFilterSingleFrame.sepia + '%)';

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

  if (typeof IMAGES[taskscreen][classlabel].IMAGEFILTERS !== 'undefined') {
    var nextblur = chooseArrayElement(IMAGES[taskscreen][classlabel].IMAGEFILTERS.blur, index, 0);
    if (Number.isInteger(movieframe) && nextblur !== undefined) {
      nextblur = chooseArrayElement(nextblur, movieframe, nextblur.length - 1);
    }
    if (nextblur !== '' && nextblur !== undefined) {
      imgFilterSingleFrame.blur = nextblur;
      filtering_bkgd = 1
    }

    var nextbrightness = chooseArrayElement(IMAGES[taskscreen][classlabel].IMAGEFILTERS.brightness,index,0);
    if (Number.isInteger(movieframe) && nextbrightness !== undefined) {
      nextbrightness = chooseArrayElement(nextbrightness,movieframe,nextbrightness.length - 1);
    }
    if (nextbrightness !== '' && nextbrightness !== undefined) {
      imgFilterSingleFrame.brightness = nextbrightness;
      filtering_bkgd = 1
    }

    var nextcontrast = chooseArrayElement(IMAGES[taskscreen][classlabel].IMAGEFILTERS.contrast,index,0);
    if (Number.isInteger(movieframe) && nextcontrast !== undefined) {
      nextcontrast = chooseArrayElement(nextcontrast,movieframe,nextcontrast.length - 1);
    }
    if (nextcontrast !== '' && nextcontrast !== undefined) {
      imgFilterSingleFrame.contrast = nextcontrast;
      filtering_bkgd = 1
    }

    var nextgrayscale = chooseArrayElement(IMAGES[taskscreen][classlabel].IMAGEFILTERS.grayscale,index,0);
    if (Number.isInteger(movieframe) && nextgrayscale !== undefined) {
      nextgrayscale = chooseArrayElement(nextgrayscale,movieframe,nextgrayscale.length - 1);
    }
    if (nextgrayscale !== '' && nextgrayscale !== undefined) {
      imgFilterSingleFrame.grayscale = nextgrayscale;
      filtering_bkgd = 1
    }

    var nexthuerotate = chooseArrayElement(IMAGES[taskscreen][classlabel].IMAGEFILTERS.huerotate,index,0);
    if (Number.isInteger(movieframe) && nexthuerotate !== undefined) {
      nexthuerotate = chooseArrayElement(nexthuerotate,movieframe,nexthuerotate.length - 1);
    }
    if (nexthuerotate !== '' && nexthuerotate !== undefined) {
      imgFilterSingleFrame.huerotate = nexthuerotate;
      filtering_bkgd = 1
    }

    var nextinvert = chooseArrayElement(IMAGES[taskscreen][classlabel].IMAGEFILTERS.invert,index,0);
    if (Number.isInteger(movieframe) && nextinvert !== undefined) {
      nextinvert = chooseArrayElement(nextinvert,movieframe,nextinvert.length - 1);
    }
    if (nextinvert !== '' && nextinvert !== undefined) {
      imgFilterSingleFrame.invert = nextinvert;
      filtering_bkgd = 1
    }

    var nextopacity = chooseArrayElement(IMAGES[taskscreen][classlabel].IMAGEFILTERS.opacity,index,0);
    if (Number.isInteger(movieframe) && nextopacity !== undefined) {
      nextopacity = chooseArrayElement(nextopacity,movieframe,nextopacity.length - 1);
    }
    if (nextopacity !== '' && nextopacity !== undefined) {
      imgFilterSingleFrame.opacity = nextopacity;
      filtering_bkgd = 1
    }

    var nextsaturate = chooseArrayElement(IMAGES[taskscreen][classlabel].IMAGEFILTERS.saturate,index,0);
    if (Number.isInteger(movieframe) && nextsaturate !== undefined) {
      nextsaturate = chooseArrayElement(nextsaturate,movieframe,nextsaturate.length - 1);
    }
    if (nextsaturate !== '' && nextsaturate !== undefined) {
      imgFilterSingleFrame.saturate = nextsaturate;
      filtering_bkgd = 1
    }

    var nextsepia = chooseArrayElement(IMAGES[taskscreen][classlabel].IMAGEFILTERS.sepia,index,0);
    if (Number.isInteger(movieframe) && nextsepia !== undefined) {
      nextsepia = chooseArrayElement(nextsepia,movieframe,nextsepia.length - 1);
    }
    if (nextsepia !== '' && nextsepia !== undefined) {
      imgFilterSingleFrame.sepia = nextsepia;
      filtering_bkgd = 1
    }
  }//IF IMAGEFILTERS defined
  var imgFilterstr =
    'blur(' +imgFilterSingleFrame.blur + 'px) ' +
    'brightness(' + imgFilterSingleFrame.brightness + '%) ' +
    'contrast(' + imgFilterSingleFrame.contrast + '%) ' +
    'grayscale(' + imgFilterSingleFrame.grayscale + '%) ' +
    'hue-rotate(' + imgFilterSingleFrame.huerotate + 'deg) ' +
    'invert(' + imgFilterSingleFrame.invert + '%) ' +
    'opacity(' + imgFilterSingleFrame.opacity + '%) ' +
    'saturate(' + imgFilterSingleFrame.saturate + '%) ' +
    'sepia(' + imgFilterSingleFrame.sepia + '%)';

  return [filtering_objs, filtering_bkgd, objFilterstr, imgFilterstr];
}//FUNCTION updateFilterSingleFrame

function estimatefps() {
  // Estimate max software fps
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
}//FUNCTION estimatefps

function findDPI(counter = 0) {
  return findFirstPositive(
    (x) => (++counter, matchMedia(`(max-resolution: ${x}dpi)`).matches)
  );
}//FUNCTION findDPI
  
function findFirstPositive(fn) {
  let start = 1;
  while (0 >= fn(start)) start <<= 1;
  return binSearch(fn, start >>> 1, start) | 0;
}//FUNCTION findFirstPositive

function binSearch(fn, min, max) {
  if (max < min) return -1;

  let mid = (min + max) >>> 1;
  if (0 < fn(mid)) {
    if (mid == min || 0 >= fn(mid - 1)) {
      return mid;
    }
    return binSearch(fn, min, mid - 1);
  }
  return binSearch(fn, mid + 1, max);
}//FUNCTION binSearch