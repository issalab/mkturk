#include <WebUSB.h>
#include <SoftwareSerial.h>

WebUSB WebUSBSerial(1, "webusb.github.io/arduino/demos");
#define Serial WebUSBSerial

// (1) SAMPLE COMMAND
int sampleCommandPin = A5;
const int sampleCommandLEDPin=1;
int sampleCommandVal_new;
char sampleCommandOutMarker[] = "sa";

// (2) PHOTODIODE
int photodiodePin = A4;
int photodiodeVal_new;

int sendInterval = 500; //microseconds
unsigned long startTime = micros();
unsigned long currentTime = micros();

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
  if (currentTime - startTime > sendInterval){
    startTime = currentTime;

    photodiodeVal_new = analogRead(photodiodePin);
    sampleCommandVal_new = digitalRead(sampleCommandPin); 
    digitalWrite(sampleCommandLEDPin,sampleCommandVal_new);//turn LED on,off

    Serial.print('s');
    Serial.print(sampleCommandVal_new);
    Serial.print('p');
    Serial.print(photodiodeVal_new);
    Serial.flush();
  }//IF time elapsed, send to browser
}//READINPUTS
