#include <WebUSB.h>
#include <SoftwareSerial.h>

WebUSB WebUSBSerial(1, "webusb.github.io/arduino/demos");
#define Serial WebUSBSerial

// (1) SAMPLE COMMAND
int sampleCommandPin = A5;
const int sampleCommandLEDPin=1;
int sampleCommandVal_new=0;
int sampleCommandVal_old=0;

// (2) PHOTODIODE
int photodiodePin = A4;
int photodiodeVal_new;

int sendInterval = 1000; //microseconds
unsigned long startTime = micros();
unsigned long currentTime = micros();
unsigned long lastSendTime = currentTime;
unsigned long dt = 0;

void setup(){
  pinMode(sampleCommandPin, INPUT); //digital input
  pinMode(sampleCommandLEDPin, OUTPUT);

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
  photodiodeVal_new = analogRead(photodiodePin);
  sampleCommandVal_old = sampleCommandVal_new;
  sampleCommandVal_new = digitalRead(sampleCommandPin);

  if (sampleCommandVal_old == 0 && sampleCommandVal_new == 1){
    startTime = currentTime;
  }
  dt = currentTime-startTime;

  digitalWrite(sampleCommandLEDPin,sampleCommandVal_new);//turn LED on,off
  Serial.print('t');
  Serial.print(dt);
  Serial.print('s');
  Serial.print(sampleCommandVal_new);
  Serial.print('p');
  Serial.print(photodiodeVal_new);

  if ( currentTime - lastSendTime > sendInterval || (sampleCommandVal_old == 0 && sampleCommandVal_new == 1) ){
    lastSendTime = currentTime;
    Serial.flush();
  }//IF time elapsed, send to browser
}//READINPUTS
