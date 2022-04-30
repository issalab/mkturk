// Arduino code for mkturk:
// Integrated with pump code
// Parses tag from software serial stream to transmit as a word over WebUSB

#include <WebUSB.h>
#include <SoftwareSerial.h>

WebUSB WebUSBSerial(1, "webusb.github.io/arduino/demos");
#define Serial WebUSBSerial

// PUMP
const byte numChars = 32;
char receivedPumpChars[numChars];
boolean newPumpCmd = false;
const int pumpPin = 4;
const int pumpLEDPin = 7;
int pumpDur;
char pumpStartMarker = '{';
char pumpEndMarker = '}';
boolean pumpON = false;
unsigned long startTime = millis();
unsigned long currentTime = millis();

// SAMPLE COMMAND
char receivedSampleCmdChars[numChars];
char receivedSampleCmdCharsEye[numChars];
boolean newSampleCmd = false;
boolean newSampleCmdEye = false;
const int sampleCmdPin = A2; //CAMERA TRIGGER PIN, also for future external devices
const int sampleCmdLEDPin=5;
int sampleCmd;
int sampleCmdEye;
int prevSampleCmd = 0;
char sampleCmdStartMarker = '$';
char sampleCmdEndMarker = '%';
char sampleCmdOutMarker[] = "sa";
char timeOutMarker[] = "tm";
SoftwareSerial mySerial(10, 11);

// EYE TRACKER
SoftwareSerial mySerialEYE(8, 9);
byte val = 0;

void setup() {
  pinMode(pumpPin, OUTPUT);
  pinMode(pumpLEDPin, OUTPUT);

  pinMode(sampleCmdPin, OUTPUT);
  pinMode(sampleCmdLEDPin, OUTPUT);

//  pinMode(rfidLEDPin, OUTPUT);

  while (!Serial) {}
  Serial.begin(57600);
  Serial.println("<Arduino is ready> Sketch begins \r\n");
  Serial.flush();

//  pinMode(rfidResetPin, OUTPUT);
//  digitalWrite(rfidResetPin, LOW);
//  digitalWrite(rfidResetPin, HIGH);

  mySerial.begin(9600);

  mySerialEYE.begin(57600);
}

void loop() {
  if (mySerialEYE.available() <= 0){
      // receive pump || eye tracker data
      recvWithStartEndMarkers();

      // act on pump || samplecmd
      turnOnPump();
      turnOnOffExternalDevice(); 
  }
  else {
    //pump & sample command checks done in inner loop of receive eye
    recvEyeTracker();
  }
}

//EYE TRACKER
void recvEyeTracker() {
  while (mySerialEYE.available() > 0) {
    recvWithStartEndMarkers();
    turnOnOffExternalDevice();
    turnOnPump();
    val = mySerialEYE.read();
    Serial.write(val);
    Serial.flush();
  }
}

void recvSampleOffFromEyeTracker() {
  static boolean recvInProgress = false;
  static byte ndx = 0;
  char rc;
  rc = mySerialEYE.read();
  if (recvInProgress == true) {
    if (rc != sampleCmdEndMarker) {
      receivedSampleCmdCharsEye[ndx] = rc;
      ndx++;
    } else {
      receivedSampleCmdCharsEye[ndx] = '\0';
      recvInProgress = false;
      ndx = 0;
      sampleCmdEye = atoi(receivedSampleCmdCharsEye);
      if (sampleCmdEye == 1) {
        digitalWrite(sampleCmdPin, HIGH);
        digitalWrite(sampleCmdLEDPin, HIGH);
      }
    }
  } else if (rc == sampleCmdStartMarker) {
    recvInProgress = true;
  }
}

// PUMP || SAMPLE_COMMAND
void recvWithStartEndMarkers() {
  static boolean pumpRecvInProgress = false;
  static boolean sampleCmdRecvInProgress = false;
  static byte ndx = 0;
  char rc;
  while (Serial && Serial.available() > 0 && newPumpCmd == false && newSampleCmd == false) {
    // when newPumpCmd == true, do the triggering

    rc = Serial.read();

    if (pumpRecvInProgress == true) {
      if (rc != pumpEndMarker) {
        receivedPumpChars[ndx] = rc;
        ndx++;
        if (ndx >= numChars) {
          ndx = numChars - 1;
        }
      } else {
        receivedPumpChars[ndx] = '\0';
        pumpRecvInProgress = false;
        ndx = 0;
        newPumpCmd = true;
      }
    } else if (sampleCmdRecvInProgress == true) {
      if (rc != sampleCmdEndMarker) {
        receivedSampleCmdChars[ndx] = rc;
        ndx++;
      } else {
        receivedSampleCmdChars[ndx] = '\0';
        sampleCmdRecvInProgress = false;
        ndx = 0;
        newSampleCmd = true;
        sampleCmd = atoi(receivedSampleCmdChars);
      }
    } else if (rc == sampleCmdStartMarker) {
      sampleCmdRecvInProgress = true;
    } else if (rc == pumpStartMarker) {
      pumpRecvInProgress = true;
    }
  }
}

void turnOnPump() {
  if (newPumpCmd == true) {
    startTime = millis();
    pumpDur = atoi(receivedPumpChars);
    digitalWrite(pumpPin, HIGH);
    digitalWrite(pumpLEDPin, HIGH);
    newPumpCmd = false;
    pumpON = true;
  }//turn on pump
  if (pumpON == true){
    currentTime=millis();
    if (currentTime-startTime > pumpDur){
      digitalWrite(pumpPin, LOW);
      digitalWrite(pumpLEDPin, LOW);
      pumpON = false;
    }//turn off pump
  }
}

void turnOnOffExternalDevice() {
  if (newSampleCmd == true) {
    if (sampleCmd == 1) {
      Serial.print(sampleCmdOutMarker);
      Serial.print(1);
      Serial.flush();
      digitalWrite(sampleCmdPin, HIGH);
      digitalWrite(sampleCmdLEDPin, HIGH);
    } else {
      Serial.print(sampleCmdOutMarker);
      Serial.print(0);
      Serial.flush();
      digitalWrite(sampleCmdPin, LOW);
      digitalWrite(sampleCmdLEDPin, LOW);
    }
    newSampleCmd = false;
  }
}
