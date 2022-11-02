function initializeChartData(){
  updateCharts();
}//FUNCTION initializeChartData()

function updateCharts(){
  computeBasicStats(mkeye.file.data);//compute
  updateBasicStatsText();//plot
}//FUNCTION updateCharts()

function updateBasicStatsText(){
  let statsTextSelector = document.querySelector('#basicstatstext');
  statsTextSelector.innerHTML = mkeye.stats.agent + ": " +
                                mkeye.stats.pctCorrect + '% (n=' + mkeye.stats.trials + ')'
}//FUNCTION updateBasicStatsText()