#--------------------------------------------------------------------------------
print("\n ------------- ViewPoint-Python Callback-Function Demo ------------- ")

from math import *
from ctypes import *
import os
import time
import struct ## AK added
import pdb

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
        file1 = open("data12.27-v6.txt", "a")
        vpxGetGazePoint2( EYE_A, gpA )
        #SER.write(('{e'+str(round(gpA.x,2))+','+str(round(1-gpA.y,2))+'}').encode('utf-8'))
        #data = struct.pack('>H', int(round(gpA.x,2)*1000))
        #SER.write(data)
        #SER.write((int(1000*round(gpA.x,2))).encode('utf-8'))
        #SER.write((str(round(gpA.x,2))+','+str(round(1-gpA.y,2))).encode('utf-8'))
        #SER.write(('/'+str(round(gpA.x,2))+','+str(round(gpA.y,2))+'/').encode('utf-8'))
        #SER.write(str('a').encode('utf-8'))
        #SER.write((str(round(gpA.x,1))).encode('utf-8'))
        #SER.write(b'a')
        #SER.write(('['+str(round(gpA.x,3))+","+str(round(gpA.y,3))+']').encode('utf-8'))
        #a = struct.pack("f",  0.23432)# round(gpA.x,5))# 0.23432
        #b = struct.pack("f", 0.123)# round(gpA.y,5))# ,0.123
        #a = struct.pack("<f",  round(gpA.x,5))# 0.23432
        #b = struct.pack("<f", round(gpA.y,5))# ,0.123
        #pdb.set_trace()
        #print(b[0])
        #for ii in range(5):
        #        SER.write(str('a').encode('utf-8'))
        #for ii in range(5):
        #SER.write(a)
        #SER.write(str('y').encode('utf-8'))
                #SER.write(str('x').encode('utf-8'))
        #SER.write(b)
                #SER.write(b'a')
        #SER.write(str('z').encode('utf-8'))
        #for jj in range(5):
        #x = str(round(gpA.x,3),3)
        #print(int(gpA.x*10000))#+ ' ' + str(gpA.y))
        x = round(gpA.x,3)*-1
        y = round(1- gpA.y,3)*-1
        if x < 0 and y>0:
                SER.write(('{-'+str(x)[3:]+','+str(y)[2:]+'\n').encode('utf-8'))
                file1.write('{-'+str(x)[3:]+','+str(y)[2:]+'\n')
        elif x>0 and y<0:
                SER.write(('{'+str(x)[2:]+',-'+str(y)[3:]+'\n').encode('utf-8'))
                file1.write('{'+str(x)[2:]+',-'+str(y)[3:]+'\n')
        elif x<0 and y<0:
                SER.write(('{-'+str(x)[3:]+',-'+str(y)[3:]+'\n').encode('utf-8'))
                file1.write('{-'+str(x)[3:]+',-'+str(y)[3:]+'\n')
        else:
                SER.write(('{'+str(x)[2:]+','+str(y)[2:]+'\n').encode('utf-8'))
                file1.write('{'+str(x)[2:]+','+str(y)[2:]+'\n')
        print(gpA.x)
        #SER.write(int(gpA.x*10000))
        #        SER.write(str('b').encode('utf-8'))
       # print(struct.unpack("f",a), struct.unpack("f",b))
        #file1.write(str(struct.unpack("f",a))+' '+ str(struct.unpack("f",b))+'\n')
        #chars = ['a','b','c','d','e','f','g','h']
        #for ii in range(4):
                #SER.write(chars[ii].encode('utf-8'))
        #        SER.write(a[ii])
        #for jj in range(4):
                #SER.write(chars[ii+4].encode('utf-8'))
        #        SER.write(b[ii])
        # SER.write(str(round(gpA.y,1)))
        #SER.write(str('}').encode('utf-8'))
        #print('hello')
        #SER.write((str(round(gpA.x,2))+','+str(round(1-gpA.y,2))).encode('utf-8'))
        #print(' POG:  A[{0:5.3f},{1:5.3f}] '+ str(time.time()).format(gpA.x,1-gpA.y) )


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
