#--------------------------------------------------------------------------------
print("\n ------------- ViewPoint-Python Callback-Function Demo ------------- ")

from math import *
from ctypes import *
import os
import time
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

## Originally: 9600 when we were sending two digits for two numbers
## - Moved to 57600 (2020.03.06), when we doubled the number of characters; we ran into issues
## - Moved to 19200 (2020.03.11), as we were running into glitches and catches at the higher rate
SER.baudrate = 57600

SER.port='COM8' #EI: com portnum can be found in device manager, portnum can change with cable (often: "USB serial converter")
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
VPX_funcRealPoint2   = CFUNCTYPE( c_int, c_int, POINTER(RealPoint) )

# Create prototypes for the ViewPoint DLL Callback-Function.
# The first param is the return value, the last four are function parameters: msg,subMsg,p1,p2
VPX_CALLBACK = CFUNCTYPE( c_int, c_int, c_int, c_int, c_int )

#  Create function prototypes
VPX_funcDoubleValue  = CFUNCTYPE( c_int, POINTER(c_double) )
VPX_funcDoubleValue2 = CFUNCTYPE( c_int, c_int, POINTER(c_double) )
VPX_funcRealPoint    = CFUNCTYPE( c_int, POINTER(RealPoint) )
VPX_funcRealPoint2   = CFUNCTYPE( c_int, c_int, POINTER(RealPoint) )

#--------------------------------------------------------------------------------
print("\n4. Define functions that are easier to use ...")
vpxGetGazePoint2 = VPX_funcRealPoint2(vp.vpx.VPX_GetGazePoint2)
vpxGetPupilAspectRatio  = VPX_funcDoubleValue(vp.vpx.VPX_GetPupilAspectRatio) #ES ADDED
vpxGetPupilDiameter2 = VPX_funcDoubleValue2(vp.vpx.VPX_GetPupilDiameter2) #ES ADDED

#--------------------------------------------------------------------------------
print("\n5. Creating & Initialize variables ...")
# The following variables must be declared/instantiated by initializing them as something,
# before they can by passed by referece into the VXP accessor functions.
gpA = RealPoint(1.1,1.1)
arA   = c_double(0.0) #ES ADDED
pdA   = c_double(0.0)

def pad(val):
        if len(val) == 3:
                return '0'+val
        if len(val) == 2:
                return '00'+val
        if len(val) == 1:
                return '000' + val
        else:
                return val
        

#--------------------------------------------------------------------------------
def getData():
        vpxGetGazePoint2( EYE_A, gpA )
        vpxGetPupilDiameter2( EYE_A, pdA ) #ES ADDED
        vpxGetPupilAspectRatio( arA ) #ES ADDED
        x = hex(np.int16(gpA.x*32767))
        y = hex(np.int16((1- gpA.y)*32767))
        diam = hex(np.int16(pdA.value*32767))
        aspectRatio = hex(np.int16(arA.value*32767))

##        x = hex(np.int16(9))
##        y = hex(np.int16(2000))
##        diam = hex(np.int16(10000))
##        aspectRatio = hex(np.int16(8))

##        print(pad(str(x)[2:]),pad(str(y)[2:]),pad(str(diam)[2:]) , pad(str(aspectRatio)[2:]))
##        print(str(x)[2:] ,str(y)[2:] ,str(diam)[2:] , str(aspectRatio)[2:] ) #EI ADDED

        print(gpA.x, gpA.y, pdA.value, arA.value)  ## AK: uncommented for debuggin' 2020.07.23
##        SER.write(('///'+str(x)[2:]+str(y)[2:]+pad(str(diam)[2:])+pad(str(aspectRatio)[2:])+'}').encode('utf-8'))

        SER.write(('///'+pad(str(x)[2:])+pad(str(y)[2:])+pad(str(diam)[2:])+pad(str(aspectRatio)[2:])+'}').encode('utf-8'))
        ## for debuggin'
        # print('hello')
        # SER.write(('hello}').encode('utf-8'))
#--------------------------------------------------------------------------------
def printData():
        SER.write((str(gpA.x)+'  '+str(1-gpA.y)+'\n').encode('utf-8'))
        
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
