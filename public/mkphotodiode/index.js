(async function(){

  //================== GOOGLE CHARTS ==================//
  // index.js: initiate charts
  // mkphotodiode_usb.js: update charts as data are received
  google.charts.load('current', {packages: ['line']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    //Running photodiode plot
    dataRunning = new google.visualization.DataTable();
    lineRunning = new google.charts.Line(document.getElementById('running_plot_card'))
    dataRunning.addColumn('number', 'milliseconds');
    dataRunning.addColumn('number', 'SampleCommand');
    dataRunning.addColumn('number', 'Photodiode');
    dataRunning.addRows(4502)
    // lineRunning.draw(dataRunning, google.charts.Line.convertOptions(runningOptions));

    //Cumulative triggered traces plot
    dataCumulative = new google.visualization.DataTable();
    lineCumulative = new google.charts.Line(document.getElementById('cumulative_plot_card'))
    dataCumulative.addColumn('number', 'milliseconds');
    dataCumulative.addColumn('number', 'Photodiode');
    // lineCumulative.draw(dataCumulative, google.charts.Line.convertOptions(cumulativeOptions));
    console.log('Created google line charts: running + triggered')
  }//FUNCTION DRAWCHART()

  //================== CONNECT WEBUSB ==================//
  if (typeof navigator.usb == 'object') {
    document.querySelector('button[id=connectusb]').addEventListener('pointerup', findUSBDevice, false);
    document.querySelector('button[id=connectusb]').style.display = 'block';
    document.querySelector('button[id=connectusb]').style.visibility =
      'visible';
    await connectHardwareButtonPromise();

    document.querySelector('button[id=connectusb]').style.display = 'none';
  }//IF WebUSB API present
  else{
    console.log('WARNING: No WebUSB API found!')
  }
  //=======(END)========== CONNECT WEBUSB ==================//  
}//ASYNC function wrapper
)();