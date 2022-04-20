var cumulativeOptions = {
  chart: {
    title: 'PREVIOUS'
  },
  width: 1200,
  height: 600,
  allowAsync: true,
  animation: {
    duration: 0,
    easing:'linear',
    startup: false,
  },
  legend: {
    position: 'none'
  },
  // axes:{
  //   x: {
  //     0: {label: 'time (ms)'},
  //   },

  //   y: {
  //     0: {label: 'Photodiode'},
  //   } 
  // }
  series: {
    0: {axis: 'PD'},
    1: {axis: 'SC'}
  },
  axes:{
    y: {
      PD: {label: 'Photodiode'},
      SC: {label: 'Sample Command'}
    }
  }
}//cumulativeOptions


var runningOptions = {
  chart: {
    title: 'CURRENT'
  },
  width: 1200,
  height: 600,
  allowAsync: true,
  animation: {
    duration: 0,
    easing:'linear',
    startup: false,
  },
  legend: {
    position: 'none'
  },
  series: {
    0: {axis: 'PD'},
    1: {axis: 'SC'}
  },
  axes:{
    y: {
      PD: {label: 'Photodiode'},
      SC: {label: 'Sample Command'}
    }
  }
}//runningOptions
