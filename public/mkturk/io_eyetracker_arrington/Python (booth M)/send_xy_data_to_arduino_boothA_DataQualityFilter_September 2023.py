#--------------------------------------------------------------------------------
print("\n ------------- ViewPoint-Python Callback-Function Demo ------------- ")

from math import *
from ctypes import *
import os
import time
import pdb
import numpy as np
import serial

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
# VPX_QUALITY_GlintIsGood = 0
# VPX_QUALITY_PupilOnlyIsGood = 1

#-------------------------------------------------------------------------------
# Open serial connection
import serial
SER = serial.Serial()

## Originally: 9600 when we were sending two digits for two numbers
## - Moved to 57600 (2020.03.06), when we doubled the number of characters; we ran into issues
## - Moved to 19200 (2020.03.11), as we were running into glitches and catches at the higher rate
SER.baudrate = 57600

SER.port = "COM7"
SER.open()

#--------------------------------------------------------------------------------
print("\n2. Creating needed structures ...")
class RealPoint(Structure):
        _fields_ = [("x",c_float),("y",c_float)]

class SinglePoint(Structure):
        _fields_ = [("x",c_float)]

sampleCommandOff = '$1%\n'
SER.write(sampleCommandOff.encode('utf-8'))

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
VPX_funcDataQuality2 = CFUNCTYPE( c_long, c_long, POINTER(c_long) )

#--------------------------------------------------------------------------------
print("\n4. Define functions that are easier to use ...")
vpxGetGazePoint2 = VPX_funcRealPoint2(vp.vpx.VPX_GetGazePoint2)
##vpxGetPupilPoint = VPX_funcRealPoint2(vp.vpx,VPX_GetPupilPoint2)
vpxGetPupilAspectRatio  = VPX_funcDoubleValue(vp.vpx.VPX_GetPupilAspectRatio) #ES ADDED
vpxGetPupilDiameter2 = VPX_funcDoubleValue2(vp.vpx.VPX_GetPupilDiameter2) #ES ADDED
# vpxGetDataQuality2   = VPX_funcDoubleValue2(vp.vpx.VPX_GetDataQuality2)
vpxGetDataQuality2   = VPX_funcDataQuality2(vp.vpx.VPX_GetDataQuality2)

#--------------------------------------------------------------------------------
print("\n5. Creating & Initialize variables ...")
# The following variables must be declared/instantiated by initializing them as something,
# before they can by passed by referece into the VXP accessor functions.
gpA = RealPoint(1.1,1.1)
arA   = c_double(0.0) #ES ADDED
pdA   = c_double(0.0)
# dqA = c_double(0.0)
dqA = c_long(0)

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
        # print("hello")
        vpxGetGazePoint2( EYE_A, gpA )
##        vpxGetPupilPoint(EYE_A,ppA)
        vpxGetPupilDiameter2( EYE_A, pdA ) #ES ADDED
        vpxGetPupilAspectRatio( arA ) #ES ADDED
        vpxGetDataQuality2( EYE_A, dqA )

        if ( dqA.value == 0 or dqA.value == 1 or dqA.value == 2):
##      if have a good pupil                
##              0=glint and pupil are good, 1=wanted only pupil, pupil is good, 2=wanted glint, but was bad, using the good pupil
                pass
        else:
##              3=pupil exceeded criteria limits, =pupil could not be fit with ellipse, 5=pupil threshold failed
                gpA.x = 0
                gpA.y = 0
                pdA.value = 0
                arA.value = 0
                
        x = hex(np.int16(gpA.x*32767))
        y = hex(np.int16(gpA.y*32767))
        diam = hex(np.int16(pdA.value*32767))
        aspectRatio = hex(np.int16(arA.value*32767))
        # dataQuality = dqA.value
        # print('VPX_QUALITY_GlintIsGood:', VPX_QUALITY_GlintIsGood)
        # print('VPX_QUALITY_PupilOnlyIsGood:', VPX_QUALITY_PupilOnlyIsGood)
        # print('dqA:', dqA)
        # print('dqA.value', dqA.value) #1e-323 when bad
        # print(pad(str(x)[2:]),pad(str(y)[2:]),pad(str(diam)[2:]) , pad(str(aspectRatio)[2:]))
        # print(str(x)[2:] ,str(y)[2:] ,str(diam)[2:] , str(aspectRatio)[2:] )
##        print(gpA.x, ppA.x,gpA.y, ppA.y, pdA.value, arA.value)
##        print(gpA.x, gpA.y, diam, aspectRatio)
        print(gpA.x, gpA.y, pdA.value, arA.value, dqA.value)
        # SER.write(('///'+str(x)[2:]+str(y)[2:]+pad(str(diam)[2:])+pad(str(aspectRatio)[2:])+'}').encode('utf-8'))
        
        # Code to send one in four eye traces
        # if myModule.counter % 2  == 0: 
        #         SER.write(('///'+pad(str(x)[2:])+pad(str(y)[2:])+pad(str(diam)[2:])+pad(str(aspectRatio)[2:])+'}').encode('utf-8'))
        # myModule.counter +=1

#define VPX_GlintDataQuality int
#define VPX_GLINT_QUALITY_ScanFailed 5 // glint scan threshold failed.
#define VPX_GLINT_QUALITY_FitFailed 4 // glint could not be fit.
#define VPX_GLINT_QUALITY_WidthCriteriaFailed 3 // glint was bad because it exceeded width criteria limits.
#define VPX_GLINT_QUALITY_AspectCriteriaFailed 2 // glint was bad because it exceeded aspect criteria limits.
#define VPX_GLINT_QUALITY_NoOperation 1 // glint skipped because pupil was not found.
#define VPX_GLINT_QUALITY_Good 0 // glint is good.

##        print(x,y)
        SER.write(('///'+pad(str(x)[2:])+pad(str(y)[2:])+pad(str(diam)[2:])+pad(str(aspectRatio)[2:])+'}').encode('utf-8'))

#--------------------------------------------------------------------------------
def printData():
        SER.write((str(gpA.x)+'  '+str(1-gpA.y)+'\n').encode('utf-8'))

#--------------------------------------------------------------------------------
print("\n6. Defining the Callback-Function ...")
def ViewPointMessageCallback( msg, subMsg, p1, p2):
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
print("\n8. Checking to see if the ViewPoint EyeTracker video has been frozen ...")
if ( vp.vpx.VPX_GetStatus(VPX_STATUS_VideoIsFrozen) == 1 ):
        print(" Please Un-Freeze the ViewPoint video.")

#--------------------------------------------------------------------------------
#  END -- 9-July-05 (c) Arrington Research, Inc.
#--------------------------------------------------------------------------------
