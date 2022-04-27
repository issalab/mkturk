var runningOptions = {
  chart: {
    title: 'Current (red) vs Previous (gray)'
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
    0: {color: "grey"},
  },
  axes:{
    y: {
      label: 'Photodiode',
    },
  },
  vAxes: {
      0: {
        title:'Photodiode',
        textStyle: {color: 'red'}
      }
    }  
}//runningOptions