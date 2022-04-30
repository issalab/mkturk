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
    dataRunning.addColumn('number', 'time (ms)');
    dataRunning.addColumn('number', 'Previous');
    dataRunning.addColumn('number', 'Current');
  }//FUNCTION DRAWCHART()


  //================== CONNECT REALTIMEDATABASE ==================//
  // const rtdb = firebase.database();
document.getElementById("agent-list").addEventListener("change",agentSelectionListener,false);

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