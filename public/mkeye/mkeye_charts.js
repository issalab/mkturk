var fixationXYTChart

function initializeChartData(){
  //COLORS
  mkeye.colors.grid = chooseRandColorsRGB(mkeye.data.ENV.XGridCenter.length);
  mkeye.colors.correct = 'rgb(0,255,0)'
  mkeye.colors.incorrect = 'rgb(100, 100, 100)'

  //SCATTER PLOTS
  mkeye.scatters = [];
  mkeye.scatters.push( new ScatterXY('FixationGridIndex','FixationXYT', 'Fixation XY', 'fixationXYCanvas') )
  mkeye.scatters.push( new ScatterXY('SampleGridIndex','SampleFixationXYT', 'Sample Fixation XY', 'samplefixationXYCanvas') )
  mkeye.scatters.push( new ScatterXY('TestGridIndex','ResponseXYT', 'Choice XY', 'choiceXYCanvas') )
  for (let i=0; i<=mkeye.scatters.length-1; i++){
    mkeye.scatters[i].init()
  }//FOR i scatters

  mkeye.line_EffectorTrajectories = new LineXY('EffectorXY','Effector Trajectories','trajectoryXYCanvas')
  mkeye.line_EffectorTrajectories.init()

  updateCharts();
}//FUNCTION initializeChartData()

function updateCharts(){
  computeBasicStats(mkeye.data);//compute
  updateBasicStatsText();//plot

  for (let i=0; i<=mkeye.scatters.length-1; i++){
    mkeye.scatters[i].update()
  }//FOR i scatters

  mkeye.line_EffectorTrajectories.update()

  console.log('--> DONE UPDATING CHARTS')
}//FUNCTION updateCharts()

function updateBasicStatsText(){
  let statsTextSelector = document.querySelector('#basicstatstext');
  statsTextSelector.innerHTML = mkeye.stats.agent + ": " +
                                mkeye.stats.pctCorrect + '% (n=' + mkeye.stats.trials + ')  ' + 
                                mkeye.stats.effector + 'track'
}//FUNCTION updateBasicStatsText()

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
    for (let i=0; i<=this.targets.g.length-1; i++){
      xy[i] = []
    }//FOR i targets
    for (let i=0;i<=xyt[0].length-1;i++){
      let trialtarg = mkeye.data.TRIALEVENTS[this.targetname][i]
      let targind = [];
      for (let j=0; j<=this.targets.g.length-1; j++){
        if (this.targets.g[j] == trialtarg){
          targind = j;
        }
      }
      xy[targind].push( { x: xyt[0][i], y: xyt[1][i] } )
    }//FOR i trials

    const data = {datasets: []}
    for (let i=0; i<=this.targets.g.length-1; i++){
      data.datasets.push({
          label: this.targets.g[i],
          data: xy[i],
          backgroundColor: mkeye.colors.grid[this.targets.g[i]]
        })
    }//FOR i targs
    const config = {
      type: 'scatter',
      data: data,
      options: {
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
        } 
      }
    };//config
    this.trials = xyt[0].length
    this.chart = new Chart( document.getElementById(this.canvasname), config );
  }//FUNCTION init

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
  
      this.chart.data.datasets[targind].data.push( { x: xyt[0][i], y: xyt[1][i] } )
    }//FOR i trials
    this.trials = xyt[0].length
    this.chart.update()
  }//FUNCTION update
}//CONSTRUCTOR ScatterXY


class LineXY{
  constructor(variablename,plotname, canvasname){
    this.variablename = variablename
    this.plotname = plotname
    this.canvasname = canvasname
    this.trials = 0
    this.correct = [];
  }

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
}//CONSTRUCTOR ScatterXY

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