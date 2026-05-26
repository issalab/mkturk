#--------------------------------------------------------------------------------
print("\n ------------- ViewPoint-Python Callback-Function Demo ------------- ")

from math import *
from ctypes import *
import os
import time
import struct ## AK added
import pdb
import numpy as np

#--------------------------------------------------------------------------------
print("\n1. Loading the ViewPoint library ...")
import py_ViewPointLib as vp

#--------------------------------------------------------------------------------
#  ViewPoint CONSTANTS (this is only a few, see vpx.h for a full listing of constants)
VPX_STATUS_ViewPointIsRunning = 1
VPX_STATUS_VideoIsFrozen = 2
EYE_A          = 0
EYE_B          = 1
VPX_DAT_FRESH  = 2

#-------------------------------------------------------------------------------
# Open serial connection
import serial
SER = serial.Serial()
SER.baudrate=9600
SER.port='com9'
SER.open()

#--------------------------------------------------------------------------------
print("\n2. Creating needed structures ...")
class RealPoint(Structure):
        _fields_ = [("x",c_float),("y",c_float)]

class SinglePoint(Structure):
        _fields_ = [("x",c_float)]

#--------------------------------------------------------------------------------
print("\n3. Creating prototypes for the ViewPoint DLL accessor functions ...")
# The first param, c_int, is the return value.
VPX_funcDoubleValue  = CFUNCTYPE( c_int, POINTER(c_double) )
VPX_funcDoubleValue2 = CFUNCTYPE( c_int, c_int, POINTER(c_double) )
VPX_funcRealPoint    = CFUNCTYPE( c_int, POINTER(RealPoint) )
VPX_funcRealPoint2   = CFUNCTYPE( c_int, c_int, POINTER(RealPoint) )

# Create prototypes for the ViewPoint DLL Callback-Function.
# The first param is the return value, the last four are function parameters: msg,subMsg,p1,p2
VPX_CALLBACK = CFUNCTYPE( c_int, c_int, c_int, c_int, c_int )

#--------------------------------------------------------------------------------
print("\n4. Define functions that are easier to use ...")
vpxGetGazePoint2     = VPX_funcRealPoint2(vp.vpx.VPX_GetGazePoint2)
#vpxGetTotalVelocity2 = VPX_funcDoubleValue2(vp.vpx.VPX_GetTotalVelocity2)
#vpxGetBlinkEvent2 = VPX_funcDoubleValue2(vp.vpx.VPX_GetBlinkEvent2)
#vpxGetPupilAspectRatio2 = VPX_funcDoubleValue2(vp.vpx.VPX_GetPupilAspectRatio2)
#vpxGetPupilDiameter2 = VPX_funcDoubleValue2(vp.vpx.VPX_GetPupilDiameter2)
#vpxGetPupilSize2     = VPX_funcRealPoint2(vp.vpx.VPX_GetPupilSize2)

#--------------------------------------------------------------------------------
print("\n5. Creating & Initialize variables ...")
# The following variables must be declared/instantiated by initializing them as something,
# before they can by passed by referece into the VXP accessor functions.
gpA = RealPoint(1.1,1.1)
bevA   = c_double(0.0)
psB = RealPoint(1.1,1.1)
arB   = c_double(0.0)
pdA   = c_double(0.0)


#--------------------------------------------------------------------------------
def getData():
        file1 = open("data6.txt", "a")
        vpxGetGazePoint2( EYE_A, gpA )
        #vpxGetPupilAspectRatio2( EYE_A, arB)
        #vpxGetPupilSize2( EYE_A, psB)
        #vpxGetPupilDiameter2( EYE_A, pdA )
        #vpxGetBlinkEvent2( EYE_A, bevA )
        #SER.write((hex(int(gpA.x*32767))+ str(hex(int((1-gpA.y)*32767)))+'\n').encode('utf-8'))
       
        #print("blink event", bevA)
        #print("pupil diameter", pdA.value)
        #print("pupil size", psB)
        #print("pupil aspect ratio", arB.value)
        x = hex(np.int16(gpA.x*32767))
        y = hex(np.int16((1- gpA.y)*32767))
        #pupDiam = hex(np.int16(pdA.value*32767))
        #pupAspRat = hex(np.int16(arB.value*32767))
        #pupDiam = str(round(pdA.value,2))[2:]
        #pupAspRat = str(round(arB.value,2))[2:]

        print(x,y)
        #if gpA.x < 0 and gpA.y >0:
        #        SER.write(('/-'+str(x)[3:]+str(y)[2:]+'}').encode('utf-8'))
              
        #elif gpA.x >0 and gpA.y <0:
       #         SER.write(('/'+str(x)[2:]+str(y)[3:]+'}').encode('utf-8'))
                
        #elif gpA.x <0 and gpA.y <0:
        #        SER.write(('/-'+str(x)[3:]+'-'+str(y)[3:]+'}').encode('utf-8'))
                #file1.write('-'+str(x)[3:]+'-'+str(y)[3:]+'\n')
       # else:
        #       SER.write(('/'+str(x)[2:]+str(y)[2:]+'}').encode('utf-8'))
        SER.write(('/'+str(x)[2:]+str(y)[2:]+'}').encode('utf-8'))
        #print(str(gpA.x)+ ' ' + str(1-gpA.y) + ' ' + str(pupDiam) + ' ' + str(pupAspRat))
        #SER.write(('/'+str(x)[2:]+str(y)[2:]+pupDiam+pupAspRat+'}').encode('utf-8'))
        #+str(pupAspRat)[2:]+ str(pupDiam)[2:]
#--------------------------------------------------------------------------------
def printData():
        SER.write((str(gpA.x)+'  '+str(1-gpA.y)+'\n').encode('utf-8'))
        #print(' POG:  A[{0:5.3f},{1:5.3f}] '+ str(time.time()).format(gpA.x,1-gpA.y) )

#--------------------------------------------------------------------------------
print("\n6. Defining the Callback-Function ...")
def ViewPointMessageCallback( msg, subMsg, p1, p2, ):
        if ( ( msg == VPX_DAT_FRESH ) & (subMsg == EYE_A) ):
                getData()                                
                # printData()
        return 0

#--------------------------------------------------------------------------------
print("\n7. Registering the Python Callback-Function with the ViewPoint DLL ...")
#  Register the Python callback function with the ViewPoint DLL
vpxCallback = VPX_CALLBACK(ViewPointMessageCallback)
vp.vpx.VPX_InsertCallback(vpxCallback)

#--------------------------------------------------------------------------------
print("\n8. Checking to see if the ViewPoint EyeTracker video has been frozen ...")#
if ( vp.vpx.VPX_GetStatus(VPX_STATUS_VideoIsFrozen) == 1 ):
        print(" Please Un-Freeze the ViewPoint video.")

#--------------------------------------------------------------------------------
#  END -- 9-July-05 (c) Arrington Research, Inc.
#--------------------------------------------------------------------------------
