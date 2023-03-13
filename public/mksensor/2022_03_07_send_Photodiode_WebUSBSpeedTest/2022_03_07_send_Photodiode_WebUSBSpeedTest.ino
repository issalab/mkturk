#include <WebUSB.h>
#include <SoftwareSerial.h>

WebUSB WebUSBSerial(1, "webusb.github.io/arduino/demos");
#define Serial WebUSBSerial

//2022_03_07_send_Photodiode_WebUSBSpeedTest:
//Sends analog values to browser at high rate
//to see how quickly can poll WebUSBSerial.
//(only sends photodiode not sample command for simplicity)
//MAX SPEED (March 7, 2022 on MacBook Pro): 3.3kHz (300us interval)

// (1) SAMPLE COMMAND
int sampleCommandPin = A5;
const int sampleCommandLEDPin=1;
int sampleCommandVal_new;
char sampleCommandOutMarker[] = "sa";

// (2) PHOTODIODE
int photodiodePin = A4;
int photodiodeVal_new;

int sendInterval = 200; //microseconds
unsigned long startTime = micros();
unsigned long currentTime = micros();

void setup(){
  pinMode(sampleCommandPin, INPUT);
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
  //Photodiode Value
  photodiodeVal_new = analogRead(photodiodePin);

  //Sample Command Value
  sampleCommandVal_new = digitalRead(sampleCommandPin); 
  digitalWrite(sampleCommandLEDPin,sampleCommandVal_new);

  currentTime = micros();
  if (currentTime - startTime > sendInterval){
    startTime = currentTime;
    Serial.print(photodiodeVal_new);
    Serial.print("Note, that I can send a whole bunch of characters at a fairly fast rate.");
    Serial.flush();

//    Serial.print(sampleCommandOutMarker);
//    Serial.print(sampleCommandVal_new);
//    Serial.flush();    
  }//IF sendInterval time elapsed, send to browser
}//READINPUTS
