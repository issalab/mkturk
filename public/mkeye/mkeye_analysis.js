function computeBasicStats(data){
    let ncorrect = 0;
  for (let i=0; i<=data.TRIALEVENTS.Response.length-1; i++){
    if (data.TRIALEVENTS.Response[i] == data.TRIALEVENTS.CorrectItem[i]){ ncorrect++}
  }

  mkeye.stats.agent = data.TASK.Agent
  mkeye.stats.pctCorrect = Math.round(100*ncorrect/data.TRIALEVENTS.Response.length);
  mkeye.stats.trials = data.TRIALEVENTS.Response.length;
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