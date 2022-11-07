var fixationXYTChart

function initializeChartData(){
  //COLORS
  mkeye.colors.grid = chooseRandColorsRGB(mkeye.data.ENV.XGridCenter.length);

  //SCATTER PLOTS
  mkeye.scatters = [];
  mkeye.scatters.push( new ScatterXY('FixationGridIndex','FixationXYT', 'Fixation XY', 'fixationXYCanvas') )
  mkeye.scatters.push( new ScatterXY('SampleGridIndex','SampleFixationXYT', 'Sample Fixation XY', 'samplefixationXYCanvas') )
  mkeye.scatters.push( new ScatterXY('TestGridIndex','ResponseXYT', 'Choice XY', 'choiceXYCanvas') )
  for (let i=0; i<=mkeye.scatters.length-1; i++){
    mkeye.scatters[i].init()
  }//FOR i scatters

  updateCharts();
}//FUNCTION initializeChartData()

function updateCharts(){
  computeBasicStats(mkeye.data);//compute
  updateBasicStatsText();//plot

  for (let i=0; i<=mkeye.scatters.length-1; i++){
    mkeye.scatters[i].update()
  }//FOR i scatters

  console.log('--> DONE UPDATING CHARTS')
}//FUNCTION updateCharts()

function updateBasicStatsText(){
  let statsTextSelector = document.querySelector('#basicstatstext');
  statsTextSelector.innerHTML = mkeye.stats.agent + ": " +
                                mkeye.stats.pctCorrect + '% (n=' + mkeye.stats.trials + ')'
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
    this.trials = xy.length
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