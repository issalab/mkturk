#--------------------------------------------------------------------------------
print("\n ------------- ViewPoint-Python Callback-Function Demo ------------- ")

from math import *
from ctypes import *
import os
import time

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
DATA = []
msgNum = 0 
#--------------------------------------------------------------------------------
print("\n2. Creating needed structures ...")
class RealPoint(Structure):
        _fields_ = [("x",c_float),("y",c_float)]

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
vpxGetTotalVelocity2 = VPX_funcDoubleValue2(vp.vpx.VPX_GetTotalVelocity2)

#--------------------------------------------------------------------------------
print("\n5. Creating & Initialize variables ...")
# The following variables must be declared/instantiated by initializing them as something,
# before they can by passed by referece into the VXP accessor functions.
gpA = RealPoint(1.1,1.1)

#--------------------------------------------------------------------------------
def getData():
        vpxGetGazePoint2( EYE_A, gpA )
        #print(' POG:  A[{0:5.3f},{1:5.3f}] '.format(gpA.x,1-gpA.y) )
        print(gpA.x, 1-gpA.y, time.time())

#--------------------------------------------------------------------------------
def printData():
        #print(' POG:  A[{0:5.3f},{1:5.3f}] '.format(gpA.x,1-gpA.y) )
        #print(time.time())
        DATA.append([gpA.x, 1-gpA.y, time.time()])

#--------------------------------------------------------------------------------
print("\n6. Defining the Callback-Function ...")
def ViewPointMessageCallback( msg, subMsg, p1, p2, ):
        if ( ( msg == VPX_DAT_FRESH ) & (subMsg == EYE_A) ):
                getData()                                
                #printData()
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
