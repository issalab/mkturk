var fixationXYTChart

function initializeChartData(){
  //COLORS
  mkeye.colors.grid = chooseRandColorsRGB(mkeye.data.ENV.XGridCenter.length);
  mkeye.colors.correct = 'rgb(0,255,0)'
  mkeye.colors.incorrect = 'rgb(100, 100, 100)'

  //SCATTER PLOTS
  mkeye.scatters = [];
  mkeye.scatters.push( new ScatterXY('FixationGridIndex','FixationXYT', 'Fixation', 'fixationXYCanvas') )
  mkeye.scatters.push( new ScatterXY('SampleGridIndex','SampleFixationXYT', 'SampleFixation', 'samplefixationXYCanvas') )
  if (mkeye.data.TASK.SameDifferent >0 && mkeye.boundingBoxes['choice'].bb[0].length >0){
    mkeye.scatters.push( new ScatterXY('TestGridIndex','ResponseXYT', 'Choice', 'choiceXYCanvas') )
  }
  else if (mkeye.boundingBoxes['test'].bb[0].length>0){
    mkeye.scatters.push( new ScatterXY('TestGridIndex','ResponseXYT', 'Test', 'choiceXYCanvas') )
  }
  for (let i=0; i<=mkeye.scatters.length-1; i++){
    mkeye.scatters[i].init()
  }//FOR i scatters

  mkeye.line.EffectorTrajectories = new LineXY('EffectorXY','Effector Trajectories','trajectoryXYCanvas')
  mkeye.line.EffectorTrajectories.init()

  mkeye.line.BoundingBoxes = new LineBoxes('Bounding Boxes','boundingBoxesCanvas')
  mkeye.line.BoundingBoxes.init()

  mkeye.realtimescatter = new RealtimeScatter('Realtime XY','realtimeXYCanvas')
  mkeye.realtimescatter.init()

  updateCharts();
}//FUNCTION initializeChartData()

function updateCharts(){
  computeBasicStats(mkeye.data);//compute
  updateBasicStatsText();//plot

  for (let i=0; i<=mkeye.scatters.length-1; i++){
    mkeye.scatters[i].update()
  }//FOR i scatters

  mkeye.line.EffectorTrajectories.update()
  mkeye.line.BoundingBoxes.update()

  console.log('--> DONE UPDATING CHARTS')
}//FUNCTION updateCharts()

function destroyCharts(){
  for (let i=0; i<=mkeye.scatters.length-1; i++){
    if (typeof(mkeye.scatters[i].chart) != 'undefined'){
      mkeye.scatters[i].chart.destroy()
    }
  }//FOR i scatters
  if (typeof(mkeye.line.EffectorTrajectories) != 'undefined' && typeof(mkeye.line.EffectorTrajectories.chart) != 'undefined'){
    mkeye.line.EffectorTrajectories.chart.destroy()
  }
  if (typeof(mkeye.line.BoundingBoxes) != 'undefined' && typeof(mkeye.line.BoundingBoxes.chart) != 'undefined'){
    mkeye.line.BoundingBoxes.chart.destroy()
  }
  if (typeof(mkeye.realtimescatter)!='undefined' && typeof(mkeye.realtimescatter.chart) != 'undefined'){
    mkeye.realtimescatter.chart.destroy() 
  }
  console.log('destroyed charts')  
}//FUNCTION destroyCharts

function updateBasicStatsText(){
  let statsTextSelector = document.querySelector('#basicstatstext');
  statsTextSelector.innerHTML = mkeye.stats.agent + ": " +
                                mkeye.stats.pctCorrect + '% (n=' + mkeye.stats.trials + ')  ' + 
                                mkeye.stats.effector + 'track '
                                + mkeye.file.active
}//FUNCTION updateBasicStatsText()

class RealtimeScatter{
  constructor(plotname, canvasname){
    this.plotname = plotname
    this.canvasname = canvasname
    this.lasttimestamp = new Date()
    this.currtrial = null
    this.maxpoints = 350;
  }//constructor

  init(){
    const data = {datasets: []}
    for (let i=0; i<=3-1; i++){
      if (i==0){
        data.datasets.push({
          type: 'scatter',
          showLine: false,
          label: 'mkturk_calib',
          data: [ { x: 0, y: 0 } ],
          backgroundColor: mkeye.colors.realtime,
          order: 1 //1=drawn on top
        })//data
      }//IF
      else if (i==1){
        data.datasets.push({
          type: 'scatter',
          showLine: false,
          label: 'manual_calib',
          data: [ { x: 0, y: 0 } ],
          backgroundColor: mkeye.colors.realtime_manual,
          order: 2
        })
      }//ELSE IF manual
      else if (i==2){
        data.datasets.push({
          type: 'line',
          showLine: true,
          label: 'boundingBox',
          data: [],
          borderColor: mkeye.colors.realtime_bb,
          order: 3
        })
      }//ELSE IF boundingBox
    }//FOR i eyetraces
    const config = {
      // type: 'scatter',
      data: data,
      options: {
        aspectRatio: mkeye.data.ENV.ViewportPixels[0]/mkeye.data.ENV.ViewportPixels[1],
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
            min: 0,
            max: mkeye.data.ENV.ViewportPixels[0]
          },
          y: {
            reverse: 'true',
            min: 0,
            max: mkeye.data.ENV.ViewportPixels[1]
          }
        },
        elements:{
          point: {
            borderWidth: 0,
            radius: this.customRadius
          }//point
        },//elements
        plugins: {
            title: {
                display: true,
                text: this.plotname
            }
        },//plugins 
        animation: false,
      }//options
    };//config

    this.chart = new Chart( document.getElementById(this.canvasname), config );
  }//FUNCTION init

  customRadius( context )
  {
    let index = context.dataIndex;
    if ( index <= context.dataset.data.length-2){
      return 3
    }//ELSEIF all points except last
    else if ( index == context.dataset.data.length-1){
      return 10
    }//ELSEIF last point
  }//FUNCTION customRadius(context)

  update(newdata){
    if (mkeye.live.trial != this.currtrial || this.chart.data.datasets[0].data.length > this.maxpoints ){
      this.chart.data.datasets[0].data = []
      this.chart.data.datasets[1].data = []
    }//Need to clear datapoints

    let x0 = mkeye.data.CANVAS.offsetleft
    let y0 = mkeye.data.ENV.ViewportPixels[1]
    if (newdata.meta == 2){
      this.chart.data.datasets[2].data = [] //empty old boxes

      let xy = []
      for (let i=0; i<=newdata.boundingBoxes.length-1; i++){
        let bb = newdata.boundingBoxes[i]
        xy.push( { x: bb['x_0']+x0, y: -bb['y_0']+y0 } )
        xy.push( { x: bb['x_1']+x0, y: -bb['y_0']+y0 } )
        xy.push( { x: bb['x_1']+x0, y: -bb['y_1']+y0 } )
        xy.push( { x: bb['x_0']+x0, y: -bb['y_1']+y0 } )
        xy.push( { x: bb['x_0']+x0, y: -bb['y_0']+y0 } )
        xy.push( { x: null, y: null } )
      }//FOR i boundingBoxes
      this.chart.data.datasets[2].data.push(...xy);
    }//IF new fixation hold with new targets

    //--- mkturk trace
    let x_mk = newdata.x + x0
    let y_mk = -newdata.y + y0

    //move to boundary if off screen
    if (x_mk <= 0){ x_mk = 3 };
    if (y_mk <= 0){ y_mk = 3 };
    if (x_mk >= mkeye.data.ENV.ViewportPixels[0]){ x_mk = mkeye.data.ENV.ViewportPixels[0] - 3}
    if (y_mk >= mkeye.data.ENV.ViewportPixels[1]){ y_mk = mkeye.data.ENV.ViewportPixels[1] - 3}

    this.chart.data.datasets[0].data.push({x: x_mk, y: y_mk});

    //--- manual calib trace
    if (typeof(mkeye.calib.xparam[0]) != 'undefined' && Math.random()<=0.25){
      let xy
      if (mkeye.stats.effector == 'eye'){
        xy = applyLinearTransform(
          newdata.x + x0 - mkeye.calib.inverse_mkturk[2][0], //X shifted back prior to inverse
          -newdata.y + y0 - mkeye.calib.inverse_mkturk[2][1], //Y shifted back prior to inverse
          mkeye.calib.inverse_mkturk[0],
          mkeye.calib.inverse_mkturk[1]
        );//Backward: screen coords --> raw coords
        if (Math.random()<=0.25){
          console.log('xy_raw: ' + xy[0] + ', ' + xy[1])
        }
      }//IF eye, undo mkturk calibration to go back to raw eye coordinates
      else if (mkeye.stats.effector == 'touch'){
        xy = [newdata.x + x0, -newdata.y + y0]   
      }//ELSE IF touch, just apply forward manual transform
      
      let xy_screen = applyLinearTransform(xy[0],xy[1],mkeye.calib.xparam, mkeye.calib.yparam)//Forward: raw coords --> screen coords

      //move to boundary if off screen
      if (xy_screen[0] <= 0){ xy_screen[0] = 3 };
      if (xy_screen[1] <= 0){ xy_screen[1] = 3 };
      if (xy_screen[0] >= mkeye.data.ENV.ViewportPixels[0]){ xy_screen[0] = mkeye.data.ENV.ViewportPixels[0] - 3}
      if (xy_screen[1] >= mkeye.data.ENV.ViewportPixels[1]){ xy_screen[1] = mkeye.data.ENV.ViewportPixels[1] - 3}

      this.chart.data.datasets[1].data.push( { x: xy_screen[0], y: xy_screen[1] });      
    }//IF manual calib available

    this.chart.update()

    //get lag
    let t0 = new Date(newdata.timestamp)

    if (Math.random() <= 0.02){
      console.log('lag: ' + ( new Date() - t0 ) + ' ms,   ' +
      'SR: ' + Math.round(1000/( t0 - this.lasttimestamp ) ) + ' Hz')
    }
    this.lasttimestamp = t0;
    this.currtrial = mkeye.live.trial
  }//FUNCTION update
}//CLASS RealtimeScatter

class ScatterXY{
  constructor(targetname, variablename,plotname, canvasname){
    this.targetname = targetname
    this.variablename = variablename
    this.plotname = plotname
    this.canvasname = canvasname
    this.targets = {x: [], y: [], g: []}
    this.trials = 0
  }

  init(){
    let xyt = mkeye.data.TRIALEVENTS[this.variablename]
    if (typeof(xyt[0]) == 'undefined'){
      return
    }//IF

    //Get targets
    let targs = mkeye.data.TASK[this.targetname]
    if (!Array.isArray(targs)){ targs = [ targs ] }
    if ( targs[0] < 0){
      for (let i=0; i<=mkeye.data.ENV.XGridCenter.length-1; i++){
        this.targets.x[i] = mkeye.data.ENV.XGridCenter[i]
        this.targets.y[i] = mkeye.data.ENV.YGridCenter[i]
        this.targets.g[i] = i
      }//FOR i gridpoints
    }//IF randomly sampled all grid points
    else {
      for (let i=0; i<=targs.length-1; i++){
        this.targets.x[i] = mkeye.data.ENV.XGridCenter[ targs[i] ]
        this.targets.y[i] = mkeye.data.ENV.YGridCenter[ targs[i] ]
        this.targets.g[i] = targs[i];
      }//FOR i user specified grid points
    }//ELSE user-specified

    let xy=[]
    let crct = [];
    for (let i=0; i<=this.targets.g.length-1; i++){
      xy[i] = []
      crct[i] = []
    }//FOR i targets
    for (let i=0;i<=xyt[0].length-1;i++){
      let trialtarg = mkeye.data.TRIALEVENTS[this.targetname][i]
      let targind = [];
      for (let j=0; j<=this.targets.g.length-1; j++){
        if (this.targets.g[j] == trialtarg){
          targind = j;
        }
      }

      for (let j=0; j<=mkeye.boundingBoxes[this.plotname.toLowerCase()].bb[i].length-1; j++){
        let bb = mkeye.boundingBoxes[this.plotname.toLowerCase()].bb[i][j]
        xy[targind].push( { x: bb[0], y: bb[2] } ); crct[targind].push(0)
        xy[targind].push( { x: bb[1], y: bb[2] } ); crct[targind].push(0)
        xy[targind].push( { x: bb[1], y: bb[3] } ); crct[targind].push(0)
        xy[targind].push( { x: bb[0], y: bb[3] } ); crct[targind].push(0)
        xy[targind].push( { x: bb[0], y: bb[2] } ); crct[targind].push(0)
        xy[targind].push( { x: null, y: null } ); crct[targind].push(0)
      }//FOR j targets  

      xy[targind].push( { x: xyt[0][i], y: xyt[1][i] } )
      xy[targind].push( { x: null, y: null } )

      if (mkeye.data.TRIALEVENTS.Response[i] == mkeye.data.TRIALEVENTS.CorrectItem[i]){
        crct[targind].push(1)
        crct[targind].push(1)
      }
      else{
        crct[targind].push(0)
        crct[targind].push(0)
      }
    }//FOR i trials

    const data = {datasets: []}
    for (let i=0; i<=this.targets.g.length-1; i++){
      data.datasets.push({
          label: i,
          data: xy[i],
          backgroundColor: mkeye.colors.grid[this.targets.g[i]],
          meta: crct[i] //custom by user
        })
    }//FOR i targs

    //---- add instant calibration
    let cols = []
    for (let i=0; i<=4-1; i++){
      xy = []
      crct = []
      cols = []
      for (let j=0; j<=this.targets.g.length-1; j++){
        xy.push( {x: 0, y: 0} )
        crct.push(2)
        cols.push(mkeye.colors.grid[this.targets.g[j]])
      }//FOR j targets
      let lbl
      if (i==0){ lbl = 'trials4'}
      else if (i==1){ lbl = 'targs4'}
      else if (i==2){ lbl = 'trials_cross6'}
      else if (i==3){ lbl = 'targs_cross6'}

      data.datasets.push({
        label: lbl,
        data: xy,
        backgroundColor: cols,
        meta: crct //custom by user
      })      
    }//FOR i calibration types (cross/no cross terms, data per trial/per target)
    
    const config = {
      type: 'line',
      data: data,
      options: {
        aspectRatio: mkeye.data.ENV.ViewportPixels[0]/mkeye.data.ENV.ViewportPixels[1],
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
            min: 0,
            max: mkeye.data.ENV.ViewportPixels[0]
          },
          y: {
            reverse: 'true',
            min: 0,
            max: mkeye.data.ENV.ViewportPixels[1]
          }
        },
        elements:{
          point: {
            borderWidth: 0,
            radius: this.customRadius2
          }//point
        },//elements
        plugins: {
            title: {
                display: true,
                text: this.plotname
            }
        } 
      }
    };//config
    this.trials = xyt[0].length
    this.chart = new Chart( document.getElementById(this.canvasname), config );
  }//FUNCTION init

  customRadius2( context )
  {
    let index = context.dataIndex;
    if ( context.dataset.meta[index] == 0){
      return 2
    }//IF incorrect
    else if ( context.dataset.meta[index] == 1){
      return 4
    }
    else if ( context.dataset.meta[index] == 2){
        return 8
    }//ELSEIF correct
  }//FUNCTION customRadius(context)

  update(){
    let xyt=mkeye.data.TRIALEVENTS[this.variablename]
    if (typeof(xyt[0]) == 'undefined'){
      return
    }//IF
    for (let i=this.trials;i<=xyt[0].length-1;i++){
      let trialtarg = mkeye.data.TRIALEVENTS[this.targetname][i]
      let targind = [];
      for (let j=0; j<=this.targets.g.length-1; j++){
        if (this.targets.g[j] == trialtarg){
          targind = j;
        }
      }//FOR j possible targets

      for (let j=0; j<=mkeye.boundingBoxes[this.plotname.toLowerCase()].bb[i].length-1; j++){
        let bb = mkeye.boundingBoxes[this.plotname.toLowerCase()].bb[i][j]
        this.chart.data.datasets[targind].data.push( 
              { x: bb[0], y: bb[2] } ); this.chart.data.datasets[targind].meta.push(0)
        this.chart.data.datasets[targind].data.push(
              { x: bb[1], y: bb[2] } ); this.chart.data.datasets[targind].meta.push(0)
        this.chart.data.datasets[targind].data.push(
              { x: bb[1], y: bb[3] } ); this.chart.data.datasets[targind].meta.push(0)
        this.chart.data.datasets[targind].data.push(
              { x: bb[0], y: bb[3] } ); this.chart.data.datasets[targind].meta.push(0)
        this.chart.data.datasets[targind].data.push(
          { x: bb[0], y: bb[2] } ); this.chart.data.datasets[targind].meta.push(0)
        this.chart.data.datasets[targind].data.push(
          { x: null, y: null } ); this.chart.data.datasets[targind].meta.push(0)
      }//FOR j targets
      
      this.chart.data.datasets[targind].data.push( { x: xyt[0][i], y: xyt[1][i] } )
      this.chart.data.datasets[targind].data.push( { x: null, y: null } )

      if (mkeye.data.TRIALEVENTS.Response[i] == mkeye.data.TRIALEVENTS.CorrectItem[i]){
        this.chart.data.datasets[targind].meta.push(1)
        this.chart.data.datasets[targind].meta.push(1)
      }//IF correct
      else{
        this.chart.data.datasets[targind].meta.push(0)
        this.chart.data.datasets[targind].meta.push(0)
      }//ELSE incorrect
    }//FOR i trials
    this.trials = xyt[0].length

    if (mkeye.stats.trials * mkeye.stats.pctCorrect/100 > 1 && 
        (this.plotname.toLowerCase() == 'fixation' || this.plotname.toLowerCase() == 'samplefixation')
    ){
      let screen = this.plotname.toLowerCase()
      instantCalib(this.plotname,this.variablename);
      for (let i=0; i<=mkeye.instantCalib[screen].xparam.length-1; i++){
        if (mkeye.instantCalib[screen].xparam != []){
          for (let j=0; j<=mkeye.instantCalib[screen].xpred[i].length-1; j++){
            this.chart.data.datasets[ this.targets.g.length + i ].data[j] = 
                          { x: mkeye.instantCalib[screen].xpred[i][j], y: mkeye.instantCalib[screen].ypred[i][j]}
          }//FOR j targets
        }//IF successful calibration (determinant != 0 in mkeye_analysis fitting function)
      }//FOR i calib types
      if (mkeye.instantCalib[screen].xparam != []){
        this.updateCalibText(this.plotname)
        document.querySelector("textarea[id=instantCalib" + this.plotname + "_text]").style.display = 'block'
        document.querySelector("textarea[id=instantCalib" + this.plotname + "_text]").style.visibility = 'visible'
      }
      else{
        document.querySelector("textarea[id=instantCalib" + this.plotname + "_text]").style.display = 'none' //if do style.visibility=hidden, element will still occupy space
      }
    }//IF fixation screen

    this.chart.update()
  }//FUNCTION update

  updateCalibText(screen){
    // document.querySelector("button[id=uploadCalib]").addEventListener('click',uploadCalibrationToFirestore)
    let str_param = 'INSTANT CALIB (' + screen + ')\n'
    str_param = str_param.concat('1: trials_4 | 2: targs_4 | 3: trials_cross6 | 4: targs_cross6 \n')

    let str_rmse = ''
    for (let i=0; i<=mkeye.instantCalib[screen.toLowerCase()].xparam.length-1; i++){
      str_param = str_param.concat('X,Y: [' + math.round(mkeye.instantCalib[screen.toLowerCase()].xparam[i],1) + ']' )
      str_param = str_param.concat(', [' + math.round(mkeye.instantCalib[screen.toLowerCase()].yparam[i],1) + ']\n')
      str_rmse = str_rmse.concat('rmse_x,y: [' + math.round(mkeye.instantCalib[screen.toLowerCase()].xrmse[i],1) + ']') 
      str_rmse = str_rmse.concat(', [' + math.round(mkeye.instantCalib[screen.toLowerCase()].yrmse[i],1) + ']\n')
    }//FOR i calib types

    document.querySelector("textarea[id=instantCalib" + screen + "_text]").value = str_param + '\n' + str_rmse
    // instantCalibFixation_text
  }//FUNCTION updateCalibText(screen)
}//CLASS ScatterXY

class LineXY{
  constructor(variablename,plotname, canvasname){
    this.variablename = variablename
    this.plotname = plotname
    this.canvasname = canvasname
    this.trials = 0
    this.correct = [];
    this.maxtrials = 10
  }//constructor

  init(){
    let xyt = [];
    xyt[0] = mkeye.data.TIMEEVENTS[this.variablename]['x']
    xyt[1] = mkeye.data.TIMEEVENTS[this.variablename]['y']
    xyt[2] = mkeye.data.TIMEEVENTS[this.variablename]['t']
    if (typeof(xyt[0]) == 'undefined'){
      return
    }//IF

    let ntrials = mkeye.data.TRIALEVENTS.Response.length;
    for (let i=0; i<=ntrials-1; i++){
      if (mkeye.data.TRIALEVENTS.Response[i] == mkeye.data.TRIALEVENTS.CorrectItem[i]){ this.correct[i] = 1}
      else { this.correct[i] = 0 }
    }//FOR i trials
  
    let xy=[]
    xy[0] = [];//incorrect
    xy[1] = [];//correct
    for (let i=0;i<=ntrials-1;i++){
      for (let j=0; j<=xyt[0][i].length-1; j++){
        xy[ this.correct[i] ].push( { x: xyt[0][i][j], y: xyt[1][i][j] } )
      }
      xy[ this.correct[i] ].push( {x: null, y: null} ) //break between trials
    }//FOR i trials

    const data = {datasets: []}
    for (let i=0; i<=xy.length-1; i++){
      let lbl
      let col
      if (i==0){
        lbl = 'incorrect';
        col = mkeye.colors.incorrect;
      }
      else if (i==1){
        lbl = 'correct';
        col = mkeye.colors.correct;
      }
      data.datasets.push({
          label: lbl,
          data: xy[i],
          borderColor: col,
          // pointRadius: 0,
          fill: false,
          spanGaps: false,
          // tension: 0.1
        })
    }//FOR incorrect/correct trials
    const config = {
      type: 'line',
      data: data,
      options: {
        aspectRatio: mkeye.data.ENV.ViewportPixels[0]/mkeye.data.ENV.ViewportPixels[1],
        scales: {
          x: {
              type: 'linear',
              position: 'bottom',
              min: 0,
              max: mkeye.data.ENV.ViewportPixels[0]
            },
          y: {
              reverse: 'true',
              min: 0,
              max: mkeye.data.ENV.ViewportPixels[1]
            }
        },
        plugins: {
            title: {
                display: true,
                text: this.plotname
            }
        }//plugins
      }//options
    };//config
    this.trials = ntrials
    this.chart = new Chart( document.getElementById(this.canvasname), config );
  }//FUNCTION init

  update(){
    let xyt = [];
    xyt[0] = mkeye.data.TIMEEVENTS[this.variablename]['x']
    xyt[1] = mkeye.data.TIMEEVENTS[this.variablename]['y']
    xyt[2] = mkeye.data.TIMEEVENTS[this.variablename]['t']
    if (typeof(xyt[0]) == 'undefined'){
      return
    }//IF

    if ( Math.round(this.trials/this.maxtrials) == this.trials/this.maxtrials  ){
      this.chart.data.datasets[0].data = []
      this.chart.data.datasets[1].data = []
    }//Need to clear datapoints every this.maxtrials

    let ntrials = mkeye.data.TRIALEVENTS.Response.length;
    for (let i=this.trials;i<=ntrials-1;i++){
      if (mkeye.data.TRIALEVENTS.Response[i] == mkeye.data.TRIALEVENTS.CorrectItem[i]){ this.correct[i] = 1}
      else { this.correct[i] = 0 }

      for (let j=0; j<=xyt[0][i].length-1; j++){
        this.chart.data.datasets[ this.correct[i] ].data.push( { x: xyt[0][i][j], y: xyt[1][i][j] } )
      }
      this.chart.data.datasets[ this.correct[i] ].data.push( {x: null, y: null} ) //break between trials
    }//FOR i trials

    this.trials = ntrials
    this.chart.update()
  }//FUNCTION update
}//CLASS LineXY

class LineBoxes{
  constructor(plotname, canvasname){
    this.plotname = plotname
    this.canvasname = canvasname
    this.trials = 0
  }//constructor

  init(){
    let ntrials = mkeye.data.TRIALEVENTS.Response.length;

    const data = {datasets: []}
    for (let screen in mkeye.boundingBoxes){
      let xy = [];
      for (let i=0; i<=mkeye.boundingBoxes[screen].bb.length-1; i++){
        for (let j=0; j<=mkeye.boundingBoxes[screen].bb[i].length-1; j++){
            let bb = mkeye.boundingBoxes[screen].bb[i][j]
            if (typeof(bb[0]) != 'undefined' && bb[0] != null){
              xy.push( { x: bb[0], y: bb[2] } )
              xy.push( { x: bb[1], y: bb[2] } )
              xy.push( { x: bb[1], y: bb[3] } )
              xy.push( { x: bb[0], y: bb[3] } )
              xy.push( { x: bb[0], y: bb[2] } )
              xy.push( { x: null, y: null } )  
            }//IF !null
          }//FOR j items within
      }//FOR i trials/stim

      data.datasets.push({
        label: screen,
        data: xy,
        borderColor: mkeye.colors[screen],
        // pointRadius: 0,
        fill: false,
        spanGaps: false,
      })
    }//FOR screen

    const config = {
      type: 'line',
      data: data,
      options: {
        aspectRatio: mkeye.data.ENV.ViewportPixels[0]/mkeye.data.ENV.ViewportPixels[1],
        scales: {
          x: {
              type: 'linear',
              position: 'bottom',
              min: 0,
              max: mkeye.data.ENV.ViewportPixels[0]
            },
          y: {
              reverse: 'true',
              min: 0,
              max: mkeye.data.ENV.ViewportPixels[1]
            }
        },
        plugins: {
            title: {
                display: true,
                text: this.plotname
            }
        }//plugins
      }//options
    };//config
    this.trials = ntrials
    this.chart = new Chart( document.getElementById(this.canvasname), config );
  }//FUNCTION init

  update(){
    
    let ntrials = mkeye.data.TRIALEVENTS.Response.length;
    let screens = [ 'fixation', 'samplefixation']
    for (var s=0; s<=screens.length-1; s++){
      if (mkeye.boundingBoxes[screens[s]].bb.length == 0){
        continue
      }
      let xy = [];
      for (let i=this.trials; i<=ntrials-1; i++){
        for (let j=0; j<=mkeye.boundingBoxes[screens[s]].bb[i].length-1; j++){
            let bb = mkeye.boundingBoxes[screens[s]].bb[i][j]
            xy.push( { x: bb[0], y: bb[2] } )
            xy.push( { x: bb[1], y: bb[2] } )
            xy.push( { x: bb[1], y: bb[3] } )
            xy.push( { x: bb[0], y: bb[3] } )
            xy.push( { x: bb[0], y: bb[2] } )
            xy.push( { x: null, y: null } )  
          }//FOR j items within
      }//FOR i trials/stim

      for (let i=0; i<=this.chart.data.datasets.length-1; i++){
        if (this.chart.data.datasets[i].label == screens[s]){
            this.chart.data.datasets[i].data.push(...xy)          
        }//IF screen
      }//FOR i datasets plotted
    }//FOR screen

    this.trials = ntrials
    this.chart.update()
  }//FUNCTION update
}//CLASS LineBoxes

function chooseRandColorsHex(ncols){
  let randColors = []
  for (let i=0; i<=ncols-1; i++){
    randColors.push(Math.floor(Math.random()*16777215).toString(16));
  }//FOR i gridpoints
  return randColors
}//FUNCTION chooseGridColorsHex(ncols)

function chooseRandColorsRGB(ncols){
  let randColors = []
  for (let i=0; i<=ncols-1; i++){
    let rndnum = [ Math.floor(Math.random()*255),
                        Math.floor(Math.random()*255),
                        Math.floor(Math.random()*255) ];
    randColors.push('rgb(' + rndnum.toString() + ')')
  }//FOR i gridpoints
  return randColors
}//FUNCTION chooseGridColorsRGB(ncols)