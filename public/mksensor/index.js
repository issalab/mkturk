(async function(){
  //================== GOOGLE CHARTS ==================//
  // index.js: initiate charts
  // mksensor_usb.js: update charts as data are received
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

  //================== CONNECT WEBUSB ==================//
  if (typeof navigator.usb == 'object') {
    await usb_scriptLoaded;
    document.querySelector('button[id=connectusb]').addEventListener('pointerup', findUSBDevice, false);
    document.querySelector('button[id=connectusb]').style.display = 'block';
    document.querySelector('button[id=connectusb]').style.visibility ='visible';
    document.querySelector('button[id=manualtrigger]').style.display = 'none';
    document.querySelector('button[id=manualtrigger]').addEventListener('pointerup', toggleTrigger, false);
    document.querySelector('button[id=plotdata]').style.display = 'none';
    document.querySelector('button[id=plotdata]').addEventListener('pointerup', togglePlotData, false);

    if (typeof port.connected == 'undefined' || port.connected == false) {
        await usbAutoConnectPromise()
    }
    await connectHardwareButtonPromise();
  }//IF WebUSB API present
  else{
    console.log('WARNING: No WebUSB API found!')
  }
  //=======(END)========== CONNECT WEBUSB ==================//

  //================== CONNECT REALTIMEDATABASE ==================//
  // const rtdb = firebase.database();
  document.getElementById("agent-list").addEventListener("change",agentSelectionListener,false);
}//ASYNC function wrapper
)();