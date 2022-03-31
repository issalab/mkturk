var cumulativeOptions = {
  chart: {
    title: 'Photodiode',
    subtitle: 'triggered by sc',
  },
  width: 1200,
  height: 1000,
  allowAsync: true,
  animation: {
    duration: 250,
    easing:'linear',
    startup: true,
  },
  legend: {
    position: 'none'
  },
  axes:{
    x: {
      0: {label: 'time (ms)'},
    },

    y: {
      0: {label: 'Photodiode'},
    } 
  }
}//cumulativeOptions


var runningOptions = {
  chart: {
    title: 'Photodiode & SampleCommand',
    subtitle: 'realtime',
  },
  width: 1200,
  height: 600,
  allowAsync: true,
  animation: {
    duration: 250,
    easing:'linear',
    startup: true,
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
