let prevRFIDTag = "";
let lastReceived = 0;

let port = {
  statusTextConnect: "",
  statusTextSent: "",
  statusTextReceived: ""
};

let serial = {};

const rfidToggle = document.querySelector("#rfid-switch");
const rfidToggleText = document.querySelector("#rfid-switch-span");
const qryLoc = document.querySelector("#qry-loc-selector");
const fieldSelector = document.querySelector("#field-selector");
const queryForm = document.querySelector("#mkquery-form");

rfidToggle.addEventListener("change", async ev => {
  if (rfidToggle.checked) {
    rfidToggleText.innerText = "RFID Not in Range";
    qryLoc.value = "marmosets";
    qryLoc.dispatchEvent(new Event("change"));
    fieldSelector.value = "rfid";
    fieldSelector.dispatchEvent(new Event("change"));

    port.statusTextConnect = "Reconnecting USB Device";
    console.log(port.statusTextConnect);
    let ev = new Event("Reconnect");
    await findUSBDevice(ev);
  } else {
    rfidToggleText.innerText = "RFID Off";
    queryForm.reset();

    port.connected = false;
    port.disconnect();
    port.statusTextConnect = "USB Device Disconnected";
    console.log(port.statusTextConnect);
  }
});

async function findUSBDevice(ev) {
  if (ev.type == "Autoconnect" || ev.type == "Reconnect") {
    try {
      const filters = [{ "vendorId": 0x2341 }];
      device = await navigator.usb.requestDevice({ "filters": filters });
      console.log("device", device);
      port = new serial.Port(device);
      console.log("port:", port);

      await port.connect();
      port.statusTextConnect = "USB Device AutoConnected";
      console.log(port.statusTextConnect);
    } catch (e) {
      console.error(e);
    }
  }

  if (ev.type == "pointerup" || ev.type == "touchend" || ev.type == "mouseup") {
    ev.preventDefault();
    try {
      const filters = [{ "vendorId": 0x2341, "productId": 0x8036 },
            { "vendorId": 0x2341, "productId": 0x8037 }];
      
      device = await navigator.usb.requestDevice({ "filters": filters });
      port = new serial.Port(device);

      await port.connect();
      port.statusTextConnect = "USB Device Connected By User Action";
      console.log(port.statusTextConnect);
    } catch (e) {
      console.error(e);
    }
    waitforClick.next(1);
  }
}

serial.Port = function(device) {
  this.device_ = device;
}

serial.Port.prototype.connect = async function() {
  //console.log("this.device_:", this.device_);
  await this.device_.open();

  if ( this.device_.configuration === null ) {
    return this.device_.selectConfiguration(1);
  }

  await this.device_.claimInterface(2);
  await this.device_.selectAlternateInterface(2,0);
  await this.device_.controlTransferOut({
    "requestType": "class",
    "recipient": "interface",
    "request": 0x22,
    "value": 0x01,
    "index": 0x02,
  });

  this.connected = true;
  inRangeTest();
  readLoop ( this );
};

serial.Port.prototype.onReceive = async data => {
  let textDecoder = new TextDecoder();
  port.statusTextReceived = "Received Char <-- USB: " +
    textDecoder.decode(data);

  console.log("statusTextReceived:", port.statusTextReceived);

  let tagStart = port.statusTextReceived.indexOf("{tag", 0);
  if (tagStart > 0) {
    var tagEnd = port.statusTextReceived.indexOf("}", 0);
  }

  let rfid = port.statusTextReceived.slice(tagStart+4, tagEnd);
  rfidToggleText.innerText = "RFID Connected";

  if (rfid != prevRFIDTag || Date.now() - lastReceived > 3000) {
    document.querySelector("#keyword-input-0").value = rfid;
    prevRFIDTag = rfid;

    queryForm.dispatchEvent(new Event("submit"));

  }
  lastReceived = Date.now();
};

serial.Port.prototype.onReceiveError = error => {
  console.error ( "onReceiveError:", error );
};

serial.Port.prototype.disconnect = async function() {
  await this.device_.controlTransferOut({
    "requestType": "class",
    "recipient": "interface",
    "request": 0x22,
    "value": 0x00,
    "index": 0x02
  });

  await this.device_.close();
  console.log("after close device:", this.device_);

  port.statusTextConnect = "USB DEVICE DISCONNECTED";
  console.log( port.statusTextConnect );
};

async function readLoop ( port ) {
  try {
    let result = await port.device_.transferIn(5, 128);
    port.onReceive ( result.data );
    readLoop ( port );
  } catch ( error ) {
    port.onReceiveError ( error );
  }
}

function pingUSB () {
  if ( port.connected == true ) {
    var pingdur = 100;
    var msgstr = "{" + pingdur.toString() + "}";
    let textEncoder = new textEncoder();
    port.device_.trnasferOut( 4, textEncoder.encode ( msgstr ) );

    port.statusTextSent = "Pinging! Transferred Char --> USB:" + msgstr;
    console.log ( port.statusTextSent );

    pingTimer = setTimeout ( () => {
      clearTimeout ( pingTimer )
      pingUSB()}, 5000 )
  }
}

function inRangeTest() {

  if (port.connected && (Date.now() - lastReceived > 1000)) {
    console.log(port.connected);
    console.log("Status: (RED) No Tag in Range");
    rfidToggleText.innerText = "No Tag in Range";
  }

  if (port.connected) {
    setTimeout(inRangeTest, 1500);
  }
}
