#--------------------------------------------------------------------------------
#
# DO NOT MODIFY ANYTHING IN THIS FILE !
#
# Edit the path for the ViewPoint DLL inside file: py_DLL_path.py
#
#--------------------------------------------------------------------------------
import ctypes
from ctypes import *
import sys
import os
import time
#--------------------------------------------------------------------------------
import py_DLL_path as vpPath
vpxDll = vpPath.vpDll
#--------------------------------------------------------------------------------
# Let's make sure that the correct 32-Bit or 64-Bit of Python has been launched.
# By default, if there are multiple versions on a computer, versin 2.7 will be launched.

expecting64bit = ( vpxDll.find("VPX_InterApp_64.dll") >= 0 )
pythonIs64bit = ( ctypes.sizeof(ctypes.c_voidp) == 8 )
haveWhatWeExpect = ( pythonIs64bit == expecting64bit )

if haveWhatWeExpect:
        print(" ");
        print("-OK-")
elif pythonIs64bit:
        print(" ");
        print("Python 64-Bit is running, but this module expects Python 32-Bit. ")
        print(" ");
        os._exit(1) 
else:
        print(" ");
        print("Python 32-Bit is running, but this module expects Python 64-Bit. ")
        print(" ");
        os._exit(1)

#--------------------------------------------------------------------------------
# Let's see if we can find the DLL based on the specified path ...

if ( not os.access(vpxDll,os.F_OK) ):
        print(" ");
        print("You have specified: ")
        print("   " + vpxDll)
        print(" ");
        print("HOWEVER, this DLL was NOT found!")
        print(" Probably the specified vpxDll path is invalid.")
        print(" Please edit the file py_DLL_path.py to specify the correct path.")
        print(" ");
        os._exit(1)
        
#--------------------------------------------------------------------------------
# Now let us see if it is the correct version
#  and that the dependencies are available and of the correct version.
       
try:
        cdll.LoadLibrary( vpxDll )
except:
        print(" ");
        print("HOWEVER, this DLL is the wrong version,")
        print(" or its DEPENDENCY is missing or the wrong version.")
        print("Currently, opencv_world310.dll is a dependency and must be in")
        print(" the folder in which your .py file is located.")
        print(" See file: WARNING & NOTES ")
        print(" ");
        os._exit(1)

vpx = CDLL( vpxDll )

#--------------------------------------------------------------------------------
# ViewPoint CONSTANTS (these are just a few).
#  See vpx.h for a full listing of constants.

VPX_STATUS_ViewPointIsRunning = 1
EYE_A          = 0
EYE_B          = 1
VPX_DAT_FRESH  = 2
ROI_NO_EVENT   = -9999

#--------------------------------------------------------------------------------
# Let's see if ViewPoint is even alive.

if ( vpx.VPX_GetStatus(VPX_STATUS_ViewPointIsRunning) < 1 ):
        print("\n")
        print(" ViewPoint is NOT running (or is attached to a DLL in a different folder) ...")
        print("  or if using ViewPointClient, it is NOT attached to the ViewPoint server ...\n")
        print("\n")
        

#--------------------------------------------------------------------------------
#  Convert wide char strings to ascii strings
def SendCommand(cs):
        return vpx.VPX_SendCommandString( str(cs).encode('ascii') )

#--------------------------------------------------------------------------------
#  END -- 2018-Sept-11 (c) Arrington Research, Inc.
#--------------------------------------------------------------------------------
