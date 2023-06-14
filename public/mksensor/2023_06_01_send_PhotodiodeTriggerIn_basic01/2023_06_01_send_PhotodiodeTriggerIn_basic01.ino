#include <WebUSB.h>
#include <SoftwareSerial.h>

WebUSB WebUSBSerial(1, "webusb.github.io/arduino/demos");
#define Serial WebUSBSerial

//INPUTS
int sampleCommandPin = A2;//Digital IN1
int externalSyncPin = A3;//Digital IN2
int photodiodePin = A4;//Analog IN1
// int futureAnalogPin = A5; //Analog IN2

//LEDs
const int sampleCommandLEDPin=5;//for Digitial IN1
const int externalSyncLEDPin=6;//for Digital IN2

//VALUES
// int sampleCommandVal_old=0;
int sampleCommandVal_new=0;
int externalSyncVal_new;
int photodiodeVal_new;

// int sendInterval = 1000; //microseconds
// unsigned long startTime = micros();
unsigned long currentTime = micros();
// unsigned long lastSendTime = currentTime;
unsigned long dt = 0;

void setup(){
  pinMode(sampleCommandPin, INPUT); //digital input
  pinMode(externalSyncPin, INPUT); //digital input
  pinMode(sampleCommandLEDPin, OUTPUT);
  pinMode(externalSyncLEDPin, OUTPUT);

  while (!Serial){
    ;
  }
  Serial.begin(57600);
  Serial.println("<Arduino is ready> Sketch begins \r\n");
  Serial.println("baud = 57600\r\n");
  Serial.flush();  
}//SETUP

void loop(){
    readInputs();
}//LOOP

void readInputs(){
  currentTime = micros();
  // sampleCommandVal_old = sampleCommandVal_new;
  sampleCommandVal_new = digitalRead(sampleCommandPin);
  externalSyncVal_new = digitalRead(externalSyncPin);
  photodiodeVal_new = analogRead(photodiodePin);

  // if (sampleCommandVal_old == 0 && sampleCommandVal_new == 1){
  //   startTime = currentTime;
  // }
  // dt = currentTime-startTime;
  dt = 0;

  //LEDs
  digitalWrite(sampleCommandLEDPin,sampleCommandVal_new);
  digitalWrite(externalSyncLEDPin,externalSyncVal_new);

  Serial.print('t');//timestamp
  Serial.print(dt);
  Serial.print('s');
  Serial.print(sampleCommandVal_new);
  Serial.print('e');
  Serial.print(externalSyncVal_new);
  Serial.print('p');
  Serial.print(photodiodeVal_new);
  Serial.flush();

  // if ( currentTime - lastSendTime > sendInterval || (sampleCommandVal_old == 0 && sampleCommandVal_new == 1) ){
  //   lastSendTime = currentTime;
  // }//IF time elapsed, send to browser
}//READINPUTS