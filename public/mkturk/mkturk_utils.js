(function (window) {
  window.utils = {
    parseQueryString: function (str) {
      var ret = Object.create(null);

      if (typeof str !== 'string') {
        return ret;
      }

      str = str.trim().replace(/^(\?|#|&)/, '');

      if (!str) {
        return ret;
      }

      str.split('&').forEach(function (param) {
        var parts = param.replace(/\+/g, ' ').split('=');
        // Firefox (pre 40) decodes `%3D` to `=`
        // https://github.com/sindresorhus/query-string/pull/37
        var key = parts.shift();
        var val = parts.length > 0 ? parts.join('=') : undefined;

        key = decodeURIComponent(key);

        // missing `=` should be `null`:
        // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
        val = val === undefined ? null : decodeURIComponent(val);

        if (ret[key] === undefined) {
          ret[key] = val;
        } else if (Array.isArray(ret[key])) {
          ret[key].push(val);
        } else {
          ret[key] = [ret[key], val];
        }
      });
      return ret;
    },
  };
})(window);

// convert base64 to buffer array (from: http://stackoverflow.com.80bola.com/questions/27524283/save-image-to-dropbox-with-data-from-canvas?rq=1)
function _base64ToArrayBuffer(base64) {
  base64 = base64.split('data:image/png;base64,').join('');
  var binary_string = window.atob(base64),
    len = binary_string.length,
    bytes = new Uint8Array(len),
    i;
  for (i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
}

// ----- Array equality ----
if (Array.prototype.equals)
  console.warn(
    "Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code."
  );
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
  // if the other array is a falsy value, return
  if (!array) return false;

  // compare lengths - can save a lot of time
  if (this.length != array.length) return false;

  for (var i = 0, l = this.length; i < l; i++) {
    // Check if we have nested arrays
    if (this[i] instanceof Array && array[i] instanceof Array) {
      // recurse into the nested arrays
      if (!this[i].equals(array[i])) return false;
    } else if (this[i] != array[i]) {
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      return false;
    }
  }
  return true;
};
// Hide method from for-in loops
Object.defineProperty(Array.prototype, 'equals', { enumerable: false });

// Gets "filename.ext" from some /.../path/filename.ext
function get_filename_from_pathstring(pathstring) {
  var filename = pathstring.replace(/^.*[\\\/]/, '');
  return filename;
}

// Return all indices of val in arr
function getAllInstancesIndexes(arr, val) {
  var indexes = [];
  for (var i = 0; i < arr.length; i++) if (arr[i] === val) indexes.push(i);
  return indexes;
}

// Shuffles an array...in place?
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// convert base64 to buffer array (from: http://stackoverflow.com.80bola.com/questions/27524283/save-image-to-dropbox-with-data-from-canvas?rq=1)
function _base64ToArrayBuffer(base64) {
  base64 = base64.split('data:image/png;base64,').join('');
  var binary_string = window.atob(base64),
    len = binary_string.length,
    bytes = new Uint8Array(len),
    i;
  for (i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
}

function toBytesInt16(num) {
  arr = new ArrayBuffer(2); //2 bytes
  view = new DataView(arr);
  view.setUint16(0, num); //arg1: byteOffset arg3: false || undefined -> bigEndian
  arr = new Uint8Array([view.getUint8(1), view.getUint8(0)]);
  return arr;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Async: play sound
async function playSound(idx) {
  audiocontext.resume();
  var source = audiocontext.createBufferSource(); // creates a sound source
  source.buffer = sounds.buffer[idx]; // tell the source which sound to play
  if (idx == 0) {
    gainNode.gain.value = 0.15; //set boost pedal to 15% volume
  } else if ((idx == 2) | (idx == 3)) {
    gainNode.gain.value = 0.15; //set boost pedal to 5% volume
  }
  source.connect(gainNode);
  // gainNode.connect(audiocontext.destination); //Connect boost pedal to output
  // source.connect(audiocontext.destination);       // connect the source to the context's destination (the speakers)
  source.start(0); // play the source now
}
// Promise: dispense reward (through audio control)
function dispenseReward() {
  console.log('Legacy dispense reward');
  return;
  return new Promise(function (resolve, reject) {
    audiocontext.resume();
    var oscillator = audiocontext.createOscillator();
    gainNode.gain.value = 1;
    if (TASK.Pump == 1) {
      oscillator.type = 'square'; //Square wave
      oscillator.frequency.value = 25; //frequency in hertz
    } //peristaltic (adafruit)
    else if (TASK.Pump == 2) {
      oscillator.type = 'square'; //Square wave
      oscillator.frequency.value = 0.1; //frequency in hertz
    } //submersible (TCS)
    else if (TASK.Pump == 3) {
      oscillator.type = 'square'; //Square wave
      oscillator.frequency.value = 10; //frequency in hertz
    } //diaphragm (TCS)
    else if (TASK.Pump == 4) {
      oscillator.type = 'square'; //Square wave
      oscillator.frequency.value = 0.1; //frequency in hertz
    } //piezoelectric (takasago)
    else if (TASK.Pump == 5) {
      oscillator.type = 'square';
      oscillator.frequency.value = 0.1;
    } //diaphragm new (TCS)
    else if (TASK.Pump == 6) {
      oscillator.type = 'square'; //Square wave
      oscillator.frequency.value = 0.1; //frequency in hertz
    } //piezoelectric 7ml/min (takasago)
    // oscillator.connect(audiocontext.destination); //Connect sound to output
    // //var gainNode = audiocontext.createGainNode(); //Create boost pedal
    // //gainNode.gain.value=0.3; //set boost pedal to 30% volume
    oscillator.connect(gainNode);
    // //gainNode.connect(audiocontext.destination); //Connect boost pedal to output
    // // oscillator.onended=function(){
    // //   console.log('done with reward pulse');
    // //   resolve(1);
    // // }
    var currentTime = audiocontext.currentTime;

    oscillator.start(currentTime);
    oscillator.stop(currentTime + ENV.RewardDuration);
    setTimeout(function () {
      console.log('sound done');
      resolve(1);
    }, ENV.RewardDuration * 1000);
  }).then();
}

// Promise: choice time-out
function choiceTimeOut(timeout) {
  return new Promise(function (resolve, reject) {
    var timer_return = { type: 'TimeOut', cxyt: [-1, -1, -1, -1] };
    setTimeout(function () {
      clearTimeout(touchTimer);
      resolve(timer_return);
    }, timeout); //setTimeout
  });
}

// Promise: punish time-out
function dispensePunish() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(1);
    }, TASK.PunishTimeOut); //milliseconds
  }).then();
}

//================== UTILITIES ==================//
function setReward() {
  var m = 0;
  var b = 0;
  if (TASK.Pump == 1) {
    // m = 1.13; b = 15.04;
    m = 0.99;
    b = 14.78;
  } //peristaltic (adafruit)
  else if (TASK.Pump == 2) {
    // m = 3.20; b = -15.47;
    m = 1.4;
    b = -58.77;
  } //submersible (tcs)
  else if (TASK.Pump == 3) {
    // m = 0.80; b = -3.00;
    m = 0.91;
    b = -15;
  } //diaphragm (tcs)
  else if (TASK.Pump == 4) {
    m = 0.0531;
    b = -1.2594;
  } //piezoelectric (takasago)
  else if (TASK.Pump == 5) {
    m = 2.4463;
    b = 53.6418;
  } //new diaphragm (tcs)
  else if (TASK.Pump == 6) {
    if (TASK.Liquid == 1 || TASK.Liquid == 3) {
      m = 0.1251;
      b = -0.0833; //1=water 2=water-condensed milk 3=marshmallow slurry (4/30mL)
    } else if (TASK.Liquid == 2) {
      m = 0.055;
      b = 0.6951; //water-condensed milk (50/50)
    }
  } //piezoelectric 7mL/min (takasago)
  return (TASK.RewardPer1000Trials - b) / m / 1000;
} //FUNCTION setReward()

async function runPump(str) {
  var dur = 0;
  var npulse = 0;

  if (FLAGS.runPump == 0) {
    FLAGS.runPump = 1;
    if (str == 'flush') {
      dur = 5000; //milliseconds
      npulse = 12;
    } else if (str == 'trigger') {
      // dur = ENV.RewardDuration*1000 //milliseconds
      dur = 190; //50 pulse * 20 uL/pulse = 1 mL milk, 1.24 mL water
      npulse = 50;
    }
    document.querySelector('button[id=pumpflush]').innerHTML = 'Stop Pump';
    document.querySelector('button[id=pumptrigger]').innerHTML = 'Stop Pump';
  } else if (FLAGS.runPump == 1) {
    //user pressed button again to stop pump
    FLAGS.runPump = 0;
    port.statustext_connect = '!!!! USER STOPPED PUMP !!!!';
    document.querySelector('button[id=pumpflush]').innerHTML = '1min';
    document.querySelector('button[id=pumptrigger]').innerHTML = '1mL';
    updateHeadsUpDisplayDevices();
    return;
  }

  //------ Run pump
  for (var i = 1; i <= npulse; i++) {
    if (ble.connected == false && port.connected == false) {
      break; //no pump connected
    } else if (FLAGS.runPump == 0) {
      port.statustext_connect = '!!!! USER STOPPED PUMP !!!!';
      document.querySelector('button[id=pumpflush]').innerHTML = 'Flush 1min';
      document.querySelector('button[id=pumptrigger]').innerHTML =
        'Calibrate 1mL milk';
      updateHeadsUpDisplayDevices();
      return; //pump was stopped by user
    } else if (FLAGS.runPump == 1 && ble.connected == true) {
      await writepumpdurationtoBLE(Math.round(dur));
    } //if ble pump
    else if (FLAGS.runPump == 1 && port.connected == true) {
      if (blescale.connected == true && i == 1) {
        //get start weight
        var startweight = blescale.weights[blescale.weights.length - 1];
      }

      await port.writepumpdurationtoUSB(Math.round(dur));

      var endweight = blescale.weights[blescale.weights.length - 1];
      port.statustext_connect =
        '***** Calibrating Pump ' + i + '/' + npulse + ' pulses, wt='
        + Math.round([endweight - startweight] * 100) / 100 + ' grams';
      updateHeadsUpDisplayDevices();
    } //if usb pump

    await timeout(dur + 800);
    console.log('pulse' + i);
  } //for i pulses

  if (port.connected == true) {
    port.statustext_connect =
      'DONE RUNNING PUMP (' + npulse + ' pulses @ ' + Math.round(dur) + ' ms/pulse)';
    if (blescale.connected == true) {
      var endweight = blescale.weights[blescale.weights.length - 1];
      port.statustext_connect = '!!!! DONE PUMP CALIBRATION !!!!';
      port.statustext_sent = '!!!! Weight after ' + i + ' pulses @ ' + dur + 'ms = '
                              + Math.round([endweight - startweight] * 100) / 100 +
                              'g vs (1, 1.24) for 100 pulse (milk,water) calibration';
    } //if blescale
    console.log(port.statustext_sent);
    document.querySelector('button[id=pumpflush]').innerHTML = '1min';
    document.querySelector('button[id=pumptrigger]').innerHTML = '1mL';
    FLAGS.runPump = 0;
    updateHeadsUpDisplayDevices();
  } //if usb pump
}

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function objectomeSceneNamesToLatentVars(scenefilepaths, scenelabels, scenes) {
  var images = {
    ImageSetDir: '',
    Nouns: [],
    Objects: [],
    BagNames: [],
    BagIdx: [],
    ImageIdx: [],
  };

  var imagecollection = '';
  if (scenefilepaths[0].indexOf('objectome3d') > 0) {
    imagecollection = 'objectome3d';
  } else if (scenefilepaths[0].indexOf('objectome') > 0) {
    imagecollection = 'objectome';
  } else {
    imagecollection = 'imagebags';
  }

  images.ImageSetDir =
    scenefilepaths[0].slice(0, scenefilepaths[0].indexOf(imagecollection)) +
    imagecollection +
    '/';

  for (var i = 0; i <= scenefilepaths.length - 1; i++) {
    var nimages = Math.max(scenes[i].nimages, scenes[i].nbackgroundimages);

    images.BagIdx.push(...Array(nimages).fill(scenelabels[i])); //array of nimage labels
    images.ImageIdx.push(...Array(nimages).keys()); //1 to nimages
    var strs = scenefilepaths[i].split('/'); //split path into words

    // Noun, object model, image folder
    var findnext = 0;
    for (var j = 0; j <= strs.length - 1; j++) {
      if (findnext == 0 && strs[j] == imagecollection) {
        findnext++;
      } else if (findnext == 1) {
        images.Nouns[scenelabels[i]] = strs[j];
        findnext++;
      } //else if noun
      else if (findnext == 2) {
        images.Objects[scenelabels[i]] = strs[j];
        findnext++;
      } //else if object
      else if (findnext == 3) {
        images.BagNames[scenelabels[i]] = strs[j];
        findnext++;
      } //else if scene json
    } //for j strs
  } //for i scenebags

  return images;
} //FUNCTION objectomeImageNamesToLatentVars

function getLongestArray(x) {
  var n = 0;
  if (typeof x != 'object') {
    if (Array.isArray(x) == 'array') {
      var n_new = x.length;
    } else {
      n_new = 0;
    }
    return n_new;
  } //if not an enumerable object
  else {
    for (keys in x) {
      if (keys != 'baseVertexInd') {
        if (Array.isArray(x[keys])) {
          var n_new = x[keys].length;
        } //IF array
        else if (typeof x[keys] == 'object') {
          var n_new = getLongestArray(x[keys]);
        } //ELSE !array
        else {
          var n_new = 0;
        }

        if (n_new > n) {
          n = n_new;
        } //IF
      } //IF array of raw vertexinds
    } //FOR keys
  } //IF object
  return n;
} //FUNCTION getLongestArray

async function deviceDetect() {
  let navigator = window.navigator;

  // GPU INFO
  let canvas = document.createElement('canvas');
  let gl, debugInfo, vendor, renderer;

  try {
    gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  } catch (e) {
    console.error('WebGL Context Error:', e);
  }

  if (gl) {
    debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
    renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
  }

  /**
   * TOUCH INFO
   * Chrome (desktop) used to lie about its support on this,
   * but that has since been rectified: https://bugs.chromium.org/p/chromium/issues/detail?id=36415
   *
   * Chrome also changed its behaviour since v70 and recommends
   * the TouchEvent object for detection: https://www.chromestatus.com/feature/4764225348042752
   */
  let touchscreen = 0;
  if (
    'ontouchstart' in window ||
    window.TouchEvent ||
    (window.DoucumentTouch && document instanceof DoucmentTouch)
  ) {
    touchscreen = 1;
  }

  // DEVICE INFO
  let deviceInfo = await detectDevice(navigator.userAgent);

  if (deviceInfo.data.device == null) {
    deviceInfo.data.device = { type: '', brand: '', model: '' };
  }

  if (deviceInfo.data.client == null) {
    deviceInfo.data.client = { name: '', version: '' };
  }

  if (deviceInfo.data.os == null) {
    deviceInfo.data.os = { name: '', version: '' };
  }

  deviceInfo.data.gpu = {};
  deviceInfo.data.gpu.vendor = vendor;
  deviceInfo.data.gpu.renderer = renderer;
  deviceInfo.data.touchscreen = touchscreen;
  return deviceInfo;
}

function connectHardwareButtonPromise() {
  let resolveFunc;
  let errFunc;

  let p = new Promise((resolve, reject) => {
    resolveFunc = resolve;
    errFunc = reject;
  }).then((resolveVal) => {
    console.log(`User clicked ${resolveVal}`);
  });

  function* waitforclickGenerator() {
    let buttonClicked = [-1];
    while (true) {
      buttonClicked = yield buttonClicked;
      resolveFunc(buttonClicked);
    }
  }

  waitforClick = waitforclickGenerator(); // start async function
  waitforClick.next(); // move out of default sate
  return p;
}

function skipHardwareDevice(event) {
  event.preventDefault(); // prevents additional downstream call of click listener
  localStorage.setItem('ConnectUSB', 0);
  waitforClick.next(1);
}

function getMeanStandardDeviation (array) {
  const n = array.length
  const mean = array.reduce((a, b) => a + b) / n
  return [mean, Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)]
}