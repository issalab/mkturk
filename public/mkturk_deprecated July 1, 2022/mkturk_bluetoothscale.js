// resources:
// API - https://webbluetoothcg.github.io/web-bluetooth/
// Samples - https://googlechrome.github.io/samples/web-bluetooth/index.html
// MDN - https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/gatt
// Playbulb - https://googlecodelabs.github.io/candle-bluetooth/
// Implementation status - https://github.com/WebBluetoothCG/web-bluetooth/blob/gh-pages/implementation-status.md#chrome


//Performing operations that require explicit user interaction on touchstart events is deprecated
// and will be removed in M54, around October 2016.
// See https://www.chromestatus.com/features/5649871251963904 for more details.

//----retry on disconnect
//---ble status write
//---detect multiple ble devices
//---ble opt out

//================ INITIALIZE BLE VARIABLE ================//
var blescale = {
  // name: "redbearlabsnano",
  name: "Motif Scale",
  namePrefix: "Motif",
  weightServiceUUID: ["1bc50001-0200-0aa5-e311-24cb004a98c5"], // Service UUID, must be UUID alias (e.g. 0x1234) or lowercase hex
  batteryServiceUUID: ["0x2A19"],


  device: [],
  server: [],
  weightService: [],
  readWeightCharacteristic: [],
  batteryService: [],
  readBatteryCharacteristic: [],
  connected: false,

  weights: [],
  tweights: [],
  weightunits: ["gram"],
  weightstart: 0,
  tareflag: 1,
  maxweight: 0,
  maxweighttimeout: 0,

  battery: [],
  tbattery: [],

  statustext_connect: "",
  statustext_sent: "",
  statustext_received: "",
}

//================ INITIALIZE BLE VARIABLE (end) ================//

function updateConnectBLEButton(){
	var elem = document.querySelector("button[name=connectblescale]")
	if (elem.textContent=="CONNECT BLE SCALE"){
		elem.textContent = "DISCONNECT BLE SCALE";
		elem.style.color = "red"
		elem.removeEventListener('pointerup',blescaleconnect,false)
		elem.addEventListener('pointerup',blescaledisconnect,false)
	} 
    else {
	    elem.textContent = "CONNECT BLE SCALE";
	    elem.style.color = "green"
		elem.removeEventListener('pointerup',blescaledisconnect,false)
		elem.addEventListener('pointerup',blescaleconnect,false)
    } 
}

function blescaleconnect(event){
  findBLEDevice(event)
  console.log('done blescale connection callback')
}

function blescaledisconnect(event){
  console.log('done blescale disconnection callback')

  if (blescale.device.gatt.connected) {
    blescale.device.gatt.disconnect();
  } else {
    log('> Bluetooth Device is already disconnected');
  }
}

//==================== CONNECT BLE ====================//
async function findBLEDevice(event){
  event.preventDefault(); //prevents additional downstream call of click listener
  try{
    await requestBLEDevice()
    await connectBLEDeviceAndCacheCharacteristics()
  }
  catch(error){
    if (blescale.connected == false){
      var textstr = 'Error getting blescale device/service/characteristic';
      console.log(textstr)
      blescale.statustext = blescale.statustext + "<br>" + textstr
      updateHeadsUpDisplayDevices()
    }
  }
}

// Step 1: Manually select device -- returns a promise
async function requestBLEDevice(){
  let result = Promise.resolve()
  if (blescale.connected == false){
    blescale.statustext_connect = "Requesting bluetooth device list"
    console.log(blescale.statustext_connect)
    updateHeadsUpDisplayDevices()
    // let options = {filters: [ {name: ble.name}, {services:[ ble.customserviceUUID ]} ]}
//     let options = {filters: [ {namePrefix: ble.namePrefix}, {services: ble.weightServiceUUID} ]}
    let options = {
    				filters: [ {namePrefix: blescale.namePrefix}, {services: blescale.weightServiceUUID}],
     				optionalServices: ["battery_service"]
     				}

    try{
      device = await navigator.bluetooth.requestDevice(options)

      blescale.statustext_connect = "Found a device name: " + device.name + "   id: " + device.id
      console.log(blescale.statustext_connect)
      console.log(device.uuids)
      updateHeadsUpDisplayDevices()

      blescale.device=device
      blescale.device.addEventListener('gattserverdisconnected',onDisconnectedBLE)

      ENV.BLEDeviceType = 'scale'
      ENV.BLEDeviceName = device.name
    }
    catch(error){
      if (blescale.connected == false){
        blescale.statustext_connect = "Connection error encountered"
        console.log(blescale.statustext_connect)
        updateHeadsUpDisplayDevices()

        return error
      }
    }
  }
  return result
}

// Step 2: Connect server & Cache characteristics -- returns a promise
async function connectBLEDeviceAndCacheCharacteristics(){
  console.log('Connecting to GATT Server...')

  server = await blescale.device.gatt.connect()
    var textstr = "found a GATT server"
    console.log(textstr,server)
    blescale.statustext = blescale.statustext + "<br>" + textstr
    updateHeadsUpDisplayDevices()
    blescale.server=server

    weightService = await server.getPrimaryService(blescale.weightServiceUUID)

    blescale.statustext_connect = "Found weight service" + weightService.uuid + "Getting characteristics..."
    console.log(blescale.statustext_connect)
    updateHeadsUpDisplayDevices()
    blescale.weightService=weightService

    characteristics = await weightService.getCharacteristics()
    characteristics.forEach(characteristic =>
      {
        blescale.statustext_connect = 
        ">> Characteristic: " + characteristic.uuid + "" + getSupportedProperties(characteristic);
        console.log(blescale.statustext_connect)
        updateHeadsUpDisplayDevices()

        //Get read characteristic
        if (characteristic.properties.read == true && 
            characteristic.properties.write == false && 
            characteristic.properties.notify == true){
          blescale.readWeightCharacteristic = characteristic
          blescale.statustext_received = "Found read characteristic " + characteristic.uuid
          updateHeadsUpDisplayDevices()
        }
      })

      await blescale.readWeightCharacteristic.startNotifications()
      blescale.readWeightCharacteristic.addEventListener('characteristicvaluechanged', onWeightNotificationFromScale)
      blescale.statustext_received = "Initiated scale read notifications"
      console.log(blescale.statustext_received)
      updateHeadsUpDisplayDevices()

// Get Battery Service
//     batteryService = await server.getPrimaryService(ble.batteryServiceUUID)
    batteryService = await server.getPrimaryService("battery_service")

    blescale.statustext_connect = "Found battery service" + batteryService.uuid + "Getting characteristics..."
    console.log(blescale.statustext_connect)
    updateHeadsUpDisplayDevices()
    blescale.batteryService=batteryService

    characteristics = await batteryService.getCharacteristics()
    characteristics.forEach(characteristic =>
      {
        blescale.statustext_connect = 
        ">> Characteristic: " + characteristic.uuid + "" + getSupportedProperties(characteristic);
        console.log(blescale.statustext_connect)
        updateHeadsUpDisplayDevices()

        //Get read characteristic
        if (characteristic.properties.read == true && 
            characteristic.properties.write == false && 
            characteristic.properties.notify == true){
          blescale.readBatteryCharacteristic = characteristic
          blescale.statustext_received = "Found read characteristic " + characteristic.uuid
          updateHeadsUpDisplayDevices()
        }
      })

      await blescale.readBatteryCharacteristic.startNotifications()
      blescale.readBatteryCharacteristic.addEventListener('characteristicvaluechanged', onBatteryNotificationFromScale)
      blescale.statustext_received = "Initiated battery read notifications"
      console.log(blescale.statustext_received)
      updateHeadsUpDisplayDevices()

	  // read initial battery level
	  await blescale.readBatteryCharacteristic.readValue()

      blescale.connected = true
      blescale.tareflag = 1
      updateConnectBLEButton()
} //connectBLEDeviceAndCacheCharacteristics
//==================== CONNECT BLE (end) ====================//

/* Utils */

function getSupportedProperties(characteristic) {
  let supportedProperties = [];
  for (const p in characteristic.properties) {
    if (characteristic.properties[p] === true) {
      supportedProperties.push(p.toUpperCase());
    }
  }
  return '[' + supportedProperties.join(', ') + ']';
}


//==================== RECONNECT BLE ====================//
// adapted from: https://googlechrome.github.io/samples/web-bluetooth/automatic-reconnect.html

function onDisconnectedBLE(){
  blescale.connected = false
  blescale.statustext_connect = 'BLE Disconnected!'
  console.log(blescale.statustext_connect)
  updateHeadsUpDisplayDevices()
  updateConnectBLEButton()
//   reconnectBLE()
}

async function reconnectBLE(){
  exponentialBackoff(100 /* max retries */, 2 /* seconds delay */,
    async function toTry() {
      time('Connecting to Bluetooth Device... ');
      blescale.statustext_connect = 'Attempting to reconnect to BLE...'
      console.log(blescale.statustext_connect)
      updateHeadsUpDisplayDevices()

      await connectBLEDeviceAndCacheCharacteristics()
    },
    function success() {
      blescale.statustext_connect = '>> Bluetooth Device reconnected!'
      console.log(blescale.statustext_connect)
      updateHeadsUpDisplayDevices()
    },
    function fail() {
      time('Failed to reconnect.');
      blescale.statustext_connect = 'Could not reconnect to Bluetooth Device after multipe tries'
      console.log(blescale.statustext_connect)
      updateHeadsUpDisplayDevices()
    });
}

// This function keeps calling "toTry" until promise resolves or has
// retried "max" number of times. First retry has a delay of "delay" seconds.
// "success" is called upon success.
async function exponentialBackoff(max, delay, toTry, success, fail) {
  try {
    const result = await toTry();
    success(result);
  } catch(error) {
    if (max === 0) {
      return fail();
    }
    time('Retrying in ' + delay + 's... (' + max + ' tries left)');
    setTimeout(function() {
      exponentialBackoff(--max, delay * 2, toTry, success, fail);
    }, delay * 1000);
  }
}

function time(text) {
  console.log('[' + new Date().toJSON().substr(11, 8) + '] ' + text);
}
//==================== RECONNECT BLE (end) ====================//

//============== READ NOTIFICATIONS & WRITES ==============//
function onWeightNotificationFromScale(event){
  var t_notify = Date.now() - ENV.CurrentDate.valueOf()
  var dt = t_notify-blescale.tweights[blescale.tweights.length-1]
  let value = event.target.value

  value = value.buffer ? value : new DataView(value)
  let a = []
  for (var i = 0; i < value.byteLength; i++){
      a.push(('00' + value.getUint8(i).toString(16)).slice(-2));
    }
    blescale.statustext_received = 'Received WEIGHT notification:  ' + a.join(' ') + ' dt=' + Math.round(dt) + 'ms'
//     console.log(blescale.statustext_received)
    updateHeadsUpDisplayDevices()

    //Decode values (specific to scale)
    var weight = parseInt(a[3] + a[2] + a[1] + a[0],16)
  
  if (weight> parseInt("FFFFFFFF",16) - 7500000) {
    weight = weight - parseInt("FFFFFFFF",16)
  }
	if (blescale.weights.length <= 1 || blescale.tareflag == 1){
		blescale.startweight = weight
		blescale.tareflag = 0
		console.log('**** TARED SCALE ****')
	}

    
	// 	console.log(weight)
	// // weight wraps after reaching FF FF FF FF
	// if (weight/1000 - ble.startweight/1000 < -7500){
	// 	//wrapped
	// 	weight = weight + (parseInt("FFFFFFFF",16) - ble.startweight)
	// 	console.log('wrapped weight')
	// }
	// else { 
	// 	weight = weight - ble.startweight
	// }
  var displayweight = weight - blescale.startweight //Tare the weight displayed
  displayweight = displayweight/1000 //grams
  displayweight = Math.round(100*displayweight)/100 //0.01 gram precision


	weight = weight/1000 //grams
	weight = Math.round(100*weight)/100 //0.01 gram precision

  logEVENTS("Weight",weight,"timeseries");

  blescale.tweights[blescale.tweights.length] = Math.round(t_notify)
  blescale.weights[blescale.weights.length] = displayweight

  var nweights = EVENTS['timeseries']['Weight'].length
  if (EVENTS['timeseries']['Weight'][nweights-1][2] > 550){
    blescale.maxweight = 0 //reset weight since too high indicating jumped
    blescale.maxweighttimeout = EVENTS['timeseries']['Weight'][nweights-1][1] + 1000 //wait 1 seconds
  }
  else if (EVENTS['timeseries']['Weight'][nweights-1][2] > blescale.maxweight &&
          EVENTS['timeseries']['Weight'][nweights-1][1] > blescale.maxweighttimeout){
    blescale.maxweight = EVENTS['timeseries']['Weight'][nweights-1][2]
  } 

  blescale.statustext_received = 
    'Wt=' + blescale.weights[blescale.weights.length-1] + ' '
    + blescale.weightunits + '  ' 
    + Math.round(dt) + 'ms' + '     '
    + ' MAX =' + blescale.maxweight + '  ' + blescale.weightunits
  updateHeadsUpDisplayDevices()
}//FUNCTION onWeightNotificationFromScale

function onBatteryNotificationFromScale(event){
  var t_notify = Date.now() - ENV.CurrentDate.valueOf()
  var dt = t_notify-blescale.tbattery[blescale.tbattery.length-1]
  let value = event.target.value

  value = value.buffer ? value : new DataView(value)
  let a = []
  for (var i = 0; i < value.byteLength; i++){
      a.push(('00' + value.getUint8(i).toString(16)).slice(-2));
    }
    blescale.statustext_received = 'Received BATTERY notification:  ' + a.join(' ') + ' dt=' + Math.round(dt) + 'ms'
    console.log(blescale.statustext_received)
    updateHeadsUpDisplayDevices()

    //Decode values (specific to scale)
    var battery = parseInt(a[0],16)
    blescale.tbattery[blescale.tbattery.length] = Math.round(t_notify)
    blescale.battery[blescale.battery.length] = battery
    logEVENTS("BLEBattery",battery,"timeseries");

    blescale.statustext_received = 
      'BATTERY(%)=' + blescale.battery[blescale.battery.length-1] + ' dt='
      + Math.round(dt) + 'ms'

    console.log(blescale.statustext_received)
    updateHeadsUpDisplayDevices()
}

//============== READ NOTIFICATIONS & WRITES (end) ==============//