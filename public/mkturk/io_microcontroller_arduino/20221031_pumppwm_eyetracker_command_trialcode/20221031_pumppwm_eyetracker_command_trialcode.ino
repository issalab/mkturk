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
const int pumpPin = 13;
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
const int sampleCmdPin = A2; //CAMERA TRIGGER PIN, also for future external devices
const int sampleCmdLEDPin=5;
int sampleCmd;
int prevSampleCmd = 0;
char sampleCmdStartMarker = '$';
char sampleCmdEndMarker = '%';
char sampleCmdOutMarker[] = "sa";

// TRIAL# LINE
char receivedTrialNumCmdChars[numChars];
boolean newTrialNumCmd = false;
const int trialNumCmdPin = A3;
const int trialNumCmdLEDPin=3;
int trialNumCmd;
int prevTrialNumCmd = 0;
char trialNumCmdStartMarker = '@'; 
char trialNumCmdEndMarker = '#';
char trialNumCmdOutMarker[] = "tr";

// EYE TRACKER
SoftwareSerial mySerialEYE(8, 9);
char eyeEndMarker = '}';
boolean pauseEyeTracker = false;

void setup() {
  pinMode(pumpPin, OUTPUT);
  pinMode(pumpLEDPin, OUTPUT);

  pinMode(sampleCmdPin, OUTPUT);
  pinMode(trialNumCmdPin, OUTPUT);
  pinMode(sampleCmdLEDPin, OUTPUT);
  pinMode(trialNumCmdLEDPin, OUTPUT);

  while (!Serial) {}
  Serial.begin(57600);
  Serial.println("<Arduino is ready> Sketch begins \r\n");
  Serial.flush();
  mySerialEYE.begin(57600);
}

void loop() {
  if (mySerialEYE.available() <= 0){
      // receive pump || samplecmd || trial line
      recvWithStartEndMarkers();

      // act on pump || samplecmd || trial line
      turnOnOffExternalDevice();
      turnOnOffPump();
      turnOnOffTrialLine();
  }
  else {
    //pump & sample command checks done in inner loop of receive eye
    recvEyeTracker();
  }
}

//RECEIVE,TRANSMIT: EYE TRACKER
void recvEyeTracker() {
  char val = 0;
  String str="";
  while (mySerialEYE.available() > 0) {
    recvWithStartEndMarkers();

    // act on pump || samplecmd || trial line
    turnOnOffExternalDevice();
    turnOnOffPump();
    turnOnOffTrialLine();

    val = mySerialEYE.read();
    if (pauseEyeTracker == true){
      return;
    }

    if (str.length() <= 18){
      str.concat(val);  
    }

    if (val == eyeEndMarker){
      str.concat(val);  
      Serial.print(str);
      String str="";
      Serial.flush();
    }//IF end, then flush
  }//while eye chars
}//FUNCTION recvEyeTracker

//RECEIVE: PUMP || SAMPLE_COMMAND || TRIALNUM_COMMAND
void recvWithStartEndMarkers() {
  static boolean pumpRecvInProgress = false;
  static boolean sampleCmdRecvInProgress = false;
  static boolean trialNumCmdRecvInProgress = false;
  static byte ndx = 0;
  char rc;
  while (Serial && Serial.available() > 0 && newPumpCmd == false && newSampleCmd == false && newTrialNumCmd == false) {
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
    }
    else if (sampleCmdRecvInProgress == true) {
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
    }
    else if (trialNumCmdRecvInProgress == true) {
      if (rc != trialNumCmdEndMarker) {
        receivedTrialNumCmdChars[ndx] = rc;
        ndx++;
      } else {
        receivedTrialNumCmdChars[ndx] = '\0';
        trialNumCmdRecvInProgress = false;
        ndx = 0;
        newTrialNumCmd = true;
        trialNumCmd = atoi(receivedTrialNumCmdChars);
      }
    } else if (rc == sampleCmdStartMarker) {
      sampleCmdRecvInProgress = true;
    } else if (rc == trialNumCmdStartMarker) {
      trialNumCmdRecvInProgress = true;
    } else if (rc == pumpStartMarker) {
      pumpRecvInProgress = true;
    }
  }
}//FUNCTION recvStartEndmarkers

//TRANSMIT: PUMP
void turnOnOffPump() {
  if (newPumpCmd == true) {
    Serial.print(receivedPumpChars);
    Serial.flush();
    if (receivedPumpChars[0] == '|'){
      pauseEyeTracker = true;
      newPumpCmd = false;
      return;
    }
    else if (receivedPumpChars[0] == '~'){
      pauseEyeTracker = false;
      newPumpCmd = false;
      return;
    }
    startTime = millis();
    pumpDur = atoi(receivedPumpChars);
    analogWrite(pumpPin, 82);    
//    digitalWrite(pumpPin, HIGH);
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
}//FUNCTION turnOnOffPump

//TRANSMIT: SAMPLE COMMAND
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
}//FUNCTION turnOnOffExternalDevice

//TRANSMIT: TRIALNUM COMMAND
void turnOnOffTrialLine() {
  if (newTrialNumCmd == true) {
    if (trialNumCmd == 1) {
      Serial.print(trialNumCmdOutMarker);
      Serial.print(1);
      Serial.flush();
      digitalWrite(trialNumCmdPin, HIGH);
      digitalWrite(trialNumCmdLEDPin, HIGH);//co-opts samplecmd LED
    } else {
      Serial.print(trialNumCmdOutMarker);
      Serial.print(0);
      Serial.flush();
      digitalWrite(trialNumCmdPin, LOW);
      digitalWrite(trialNumCmdLEDPin, LOW);//co-opts samplecmd LED
    }
    newTrialNumCmd = false;
  }
}//FUNCTION turnOnOffTrialLine
