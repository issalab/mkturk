# Version: 2.9.4.112
# ViewPoint EyeTracker (R) interface to Python 3 (VPX_Python_Demo_nnn.py)
#  Must use 32-bit Python with the 32-bit VPX_InterApp.dll, and
#  must use 64-bit Python with the 64-bit VPX_InterApp_64.dll.
#  Verify the sections below marked:       # <<<< CHANGE AS NEEDED <<<< 
#  Paths must use either (a) Forward Slashes, or (b) Double Back Slashes !!!
#  To use Python 2 change: print("x") --to--> print "x"
#
#  To run this, use IDLE File>Open, put this file in the Python root directory, or do:
#     import sys                      # to set where to look for modules
#     sys.path.append("C:/ARI/VP")    # <<<< CHANGE AS NEEDED
#     import VPX_Python_Demo          # <<<< CHANGE AS NEEDED, NOTE: this is without .py
#
#  This demo prints data whenever an ROI is newly entered or exited by EYE_A.
#  Nothing is printed while the the gaze point remains inside an ROI.
#  Example:     [3,19] means the gaze point just entered ROI#3 and ROI#19,
#               [-3] means the gazepoint has just exited ROI#3
#
#--------------------------------------------------------------------------------

from ctypes import *
import os
#  Load the ViewPoint library
#vpxDll = "C:/ARI/VP/VPX_InterApp.dll"  # <<<< CHANGE AS NEEDED <<<< 
vpxDll0 = "C:/DEV/VP294/VPx64/VPX_InterApp_64.dll"
#
vpxDll = vpxDll0.replace('\\','/') # Replace Back-Slash with Forward-Slash
print(vpxDll)
if ( not os.access(vpxDll,os.F_OK) ):
        print("WARNING: Invalid vpxDll path; you need to edit the .py file")
cdll.LoadLibrary( vpxDll )
vpx = CDLL( vpxDll )

#--------------------------------------------------------------------------------
if ( vpx.VPX_GetStatus(VPX_STATUS_ViewPointIsRunning) < 1 ):
        print("ViewPoint is not running")
        
#--------------------------------------------------------------------------------
#  ViewPoint CONSTANTS (see vpx.h for a full listing of constants)
VPX_STATUS_ViewPointIsRunning = 1
EYE_A          = 0
EYE_B          = 1
VPX_DAT_FRESH  = 2
ROI_NO_EVENT   = -9999

#--------------------------------------------------------------------------------
#  Convert wide char strings to ascii strings
def vpxSendCommand(cs):
        return vpx.VPX_SendCommandString( str(cs).encode('ascii') )

#  Create needed structures and callback function
class RealPoint(Structure):
        _fields_ = [("x",c_float),("y",c_float)]
#  Create function prototypes
VPX_funcDoubleValue  = CFUNCTYPE( c_int, POINTER(c_double) )
VPX_funcDoubleValue2 = CFUNCTYPE( c_int, c_int, POINTER(c_double) )
VPX_funcRealPoint    = CFUNCTYPE( c_int, POINTER(RealPoint) )
VPX_funcRealPoint2   = CFUNCTYPE( c_int, c_int, POINTER(RealPoint) )
#
vpxGetTotalVelocity  = VPX_funcDoubleValue(vpx.VPX_GetTotalVelocity)
vpxGetTotalVelocity2 = VPX_funcDoubleValue2(vpx.VPX_GetTotalVelocity2)
vpxGetGazePoint      = VPX_funcRealPoint(vpx.VPX_GetGazePoint)
vpxGetGazePoint2     = VPX_funcRealPoint2(vpx.VPX_GetGazePoint2)
vpxGetPupilSize      = VPX_funcRealPoint(vpx.VPX_GetPupilSize)
vpxGetPupilSize2     = VPX_funcRealPoint2(vpx.VPX_GetPupilSize2)
vpxGetTorsion        = VPX_funcDoubleValue(vpx.VPX_GetTorsion)
vpxGetTorsion2       = VPX_funcDoubleValue2(vpx.VPX_GetTorsion2)
vpxGetDrift2         = VPX_funcDoubleValue2(vpx.VPX_GetDrift2)
vpxGetFixationSeconds2  = VPX_funcDoubleValue2(vpx.VPX_GetFixationSeconds2)
vpxGetPupilCentroid2 = VPX_funcRealPoint2(vpx.VPX_GetGlintCentroid2)
vpxGetGlintCentroid2 = VPX_funcRealPoint2(vpx.VPX_GetPupilCentroid2)
vpxGetPupilDiameter2 = VPX_funcDoubleValue2(vpx.VPX_GetPupilDiameter2)
vpxGetDataQuality2   = VPX_funcDoubleValue2(vpx.VPX_GetDataQuality2)
vpxGetPupilPoint    = VPX_funcRealPoint(vpx.VPX_GetPupilPoint)
vpxGetPupilPoint2   = VPX_funcRealPoint2(vpx.VPX_GetPupilPoint2)
vpxGetGlintPoint    = VPX_funcRealPoint(vpx.VPX_GetGlintPoint)
vpxGetGlintPoint2   = VPX_funcRealPoint2(vpx.VPX_GetGlintPoint2)
vpxGetDiffVector    = VPX_funcRealPoint(vpx.VPX_GetDiffVector)
vpxGetDiffVector2   = VPX_funcRealPoint2(vpx.VPX_GetDiffVector2)
vpxGetPupilAngle2   = VPX_funcDoubleValue2(vpx.VPX_GetPupilAngle2)
vpxGetPupilAspectRatio  = VPX_funcDoubleValue(vpx.VPX_GetPupilAspectRatio)
vpxGetPupilAspectRatio2 = VPX_funcDoubleValue2(vpx.VPX_GetPupilAspectRatio2)
vpxGetGazePointSmoothed2 = VPX_funcRealPoint2(vpx.VPX_GetGazePointSmoothed2)
vpxGetGazePointCorrected2 = VPX_funcRealPoint2(vpx.VPX_GetGazePointCorrected2)
vpxGetGazeAngle2 = VPX_funcRealPoint2(vpx.VPX_GetGazeAngle2)
vpxGetGazeAngleSmoothed2 = VPX_funcRealPoint2(vpx.VPX_GetGazeAngleSmoothed2)
vpxGetGazeAngleCorrected2 = VPX_funcRealPoint2(vpx.VPX_GetGazeAngleCorrected2)
vpxGetComponentVelocity = VPX_funcRealPoint(vpx.VPX_GetComponentVelocity)
vpxGetComponentVelocity2 = VPX_funcRealPoint2(vpx.VPX_GetComponentVelocity2)
vpxGetBlinkEvent2 = VPX_funcDoubleValue2(vpx.VPX_GetBlinkEvent2) 
# vpxGetPupilOvalRect = VPX_funcRealRect(vpx.VPX_GetPupilOvalRect)
# vpxGetPupilOvalRect2 = VPX_funcRealRect2(vpx.VPX_GetPupilOvalRect2)

#--------------------------------------------------------------------------------
# The following variables must be declared/instantiated by initializing them as something,
# before they can by passed by referece into the VXP accessor functions.
roiListA = []
gpA = RealPoint(1.1,1.1)
gpB = RealPoint(1.1,1.1)
tvA = c_double(0.0)
tvB = c_double(0.0)
psA = RealPoint(1.1,1.1)        
psB = RealPoint(1.1,1.1)
torA = c_double(0.0)
torB = c_double(0.0)
dftA   = c_double(0.0)
dftB   = c_double(0.0)
fsA  = c_double(0.0)
fsB   = c_double(0.0)
pcA = RealPoint(1.1,1.1) 
pcB = RealPoint(1.1,1.1)
gcA = RealPoint(1.1,1.1) 
gcB = RealPoint(1.1,1.1)
pdA   = c_double(0.0)
pdB   = c_double(0.0)
qtyA  = c_double(0.0)
qtyB  = c_double(0.0)
ppA = RealPoint(1.1,1.1)
ppB = RealPoint(1.1,1.1)
glpA = RealPoint(1.1,1.1)
glpB = RealPoint(1.1,1.1)
dvA = RealPoint(1.1,1.1)
dvB = RealPoint(1.1,1.1)
paA   = c_double(0.0)
paB   = c_double(0.0)
arA   = c_double(0.0)
arB   = c_double(0.0)
gpsA = RealPoint(1.1,1.1)
gpsB = RealPoint(1.1,1.1)
gpcA = RealPoint(1.1,1.1)
gpcB = RealPoint(1.1,1.1)
gaA = RealPoint(1.1,1.1)
gaB = RealPoint(1.1,1.1)
gasA = RealPoint(1.1,1.1)
gasB = RealPoint(1.1,1.1)
gacA = RealPoint(1.1,1.1)
gacB = RealPoint(1.1,1.1)
cvelA = RealPoint(1.1,1.1)
cvelB = RealPoint(1.1,1.1)
bevA   = c_double(0.0)
bevB   = c_double(0.0)
# ovrA = RealRect(1.1,1.1)
# ovrB = RealRect(1.1,1.1)
#END initialize
        

#--------------------------------------------------------------------------------
def getData():
        vpxGetGazePoint( gpA )
        vpxGetGazePoint2( EYE_B, gpB )
        vpxGetTotalVelocity( tvA )
        vpxGetTotalVelocity2( EYE_B, tvB )
        vpxGetPupilSize( psA )
        vpxGetPupilSize2( EYE_B, psB )
        vpxGetTorsion( torA )
        vpxGetTorsion2( EYE_B, torB )
        vpxGetDrift2( EYE_A, dftA )
        vpxGetDrift2( EYE_B, dftB )
        vpxGetFixationSeconds2( EYE_A, fsA )
        vpxGetFixationSeconds2( EYE_B, fsB )
        vpxGetPupilCentroid2( EYE_A, pcA )
        vpxGetPupilCentroid2( EYE_B, pcB )
        vpxGetGlintCentroid2( EYE_A, pcA )
        vpxGetGlintCentroid2( EYE_B, pcB )
        vpxGetPupilDiameter2( EYE_A, pdA )
        vpxGetPupilDiameter2( EYE_B, pdB )
        vpxGetDataQuality2( EYE_A, qtyA )
        vpxGetDataQuality2( EYE_B, qtyB )
        vpxGetPupilPoint( ppA )
        vpxGetPupilPoint2( EYE_B, ppB )
        vpxGetGlintPoint( glpA )
        vpxGetGlintPoint2( EYE_B, glpB )
        vpxGetDiffVector( dvA )
        vpxGetDiffVector2( EYE_B, dvB )
        vpxGetPupilAngle2( EYE_A, paA ) 
        vpxGetPupilAngle2( EYE_B, paB )
        vpxGetPupilAspectRatio( arA ) 
        vpxGetPupilAspectRatio2( EYE_B, arB )
        vpxGetGazePointSmoothed2( EYE_A, gpsA )
        vpxGetGazePointSmoothed2( EYE_B, gpsB )
        vpxGetGazePointCorrected2( EYE_A, gpcA )
        vpxGetGazePointCorrected2( EYE_B, gpcB )
        vpxGetGazeAngle2( EYE_A, gaA )
        vpxGetGazeAngle2( EYE_B, gaB )
        vpxGetGazeAngleSmoothed2( EYE_A, gasA )
        vpxGetGazeAngleSmoothed2( EYE_B, gasB )
        vpxGetGazeAngleCorrected2( EYE_A, gacA )
        vpxGetGazeAngleCorrected2( EYE_B, gacB )
        vpxGetComponentVelocity( cvelA )
        vpxGetComponentVelocity2( EYE_B, cvelB )
        vpxGetBlinkEvent2( EYE_A, bevA )
        vpxGetBlinkEvent2( EYE_B, bevB )
        # vpxGetPupilOvalRect( EYE_A, ovrA ) 
        # vpxGetPupilOvalRect2( EYE_B, ovrB )                                                               
#END getData


#--------------------------------------------------------------------------------
def printData():
        print('               A                B') 
        print(' ROI:  A', roiListA ) 
        print(' POG:  A[{0:5.3f},{1:5.3f}]      B[{2:5.3f},{3:5.3f}] *'.format(gpA.x,1-gpA.y,gpB.x,1-gpB.y) ) # vpxGetGazePoint2
        print(' POGS: A[{0:5.3f},{1:5.3f}]      B[{2:5.3f},{3:5.3f}] *'.format(gpsA.x,1-gpsA.y,gpsB.x,1-gpsB.y) ) # vpxGetGazePointSmoothed2
        print(' POGC: A[{0:5.3f},{1:5.3f}]      B[{2:5.3f},{3:5.3f}]'.format(gpcA.x,1-gpcA.y,gpcB.x,1-gpcB.y) ) # vpxGetGazePointCorrected2
        print(' GA:   A[{0:5.3f},{1:5.3f}]      B[{2:5.3f},{3:5.3f}]'.format(gaA.x,gaA.y,gaB.x,gaB.y) )
        print(' GAS:  A[{0:5.3f},{1:5.3f}]      B[{2:5.3f},{3:5.3f}]'.format(gasA.x,gasA.y,gasB.x,gasB.y) )
        print(' GAC:  A[{0:5.3f},{1:5.3f}]      B[{2:5.3f},{3:5.3f}] *'.format(gacA.x,gacA.y,gacB.x,gacB.y) ) # vpxGetGazeAngleCorrected2
        print(' TVel: A[{0:5.3f}]        B[{1:5.3f}]'.format(tvA.value, tvB.value) ) # vpxGetTotalVelocity
        print(' CVel: A[{0:5.3f},{1:5.3f}] B[{2:5.3f},{3:5.3f}]'.format(cvelA.x,cvelA.y,cvelB.x,cvelB.y) )
        print(' FS:   A[{0:5.3f}]           B[{1:5.3f}]'.format(fsA.value, fsB.value) )
        print(' DFT:  A[{0:5.3f}]        B[{1:5.3f}]'.format(dftA.value, dftB.value) )
#        print( '_________________________________________________')
#        print(' PS:   A[{0:5.3f},{1:5.3f}]     B[{2:5.3f},{3:5.3f}]'.format(psA.x,psA.y,psB.x,psB.y) )   
#        print(' TOR:  A[{0:5.3f}]        B[{1:5.3f}]'.format(torA.value, torB.value) )
#        print(' PC:   A[{0:5.3f},{1:5.3f}]     B[{2:5.3f},{3:5.3f}]'.format(pcA.x,pcA.y,pcB.x,pcB.y) )
#        print(' GC:   A[{0:5.3f},{1:5.3f}]     B[{2:5.3f},{3:5.3f}]'.format(gcA.x,gcA.y,gcB.x,gcB.y) )                      
#        print(' PD:   A[{0:5.3f}]           B[{1:5.3f}]'.format(pdA.value, pdB.value) )
#        print(' QTY:  A[{0:5.3f}]           B[{1:5.3f}]'.format(qtyA.value, qtyB.value) ) 
#        print(' PP:   A[{0:5.3f},{1:5.3f}]     B[{2:5.3f},{3:5.3f}]'.format(ppA.x,ppA.y,ppB.x,ppB.y) )
#        print(' GLP:  A[{0:5.3f},{1:5.3f}]     B[{2:5.3f},{3:5.3f}] *'.format(glpA.x,glpA.y,glpB.x,glpB.y) ) # vpxGetGlintPoint2
#        print(' DV:   A[{0:5.3f},{1:5.3f}]     B[{2:5.3f},{3:5.3f}]'.format(dvA.x,dvA.y,dvB.x,dvB.y) )
#        print(' PA:   A[{0:5.3f}]          B[{1:5.3f}]'.format(paA.value, paB.value) )
#        print(' AR:   A[{0:5.3f}]           B[{1:5.3f}]'.format(arA.value, arB.value) )
#        print(' BEV: A[{0:5.3f}]           B[{1:5.3f}]'.format(bevA.value, bevB.value) )
        #print(' DRIFT: A[{0:5.3f}]      B[{1:5.3f}]'.format(driftA.value, driftB.value) )
        #print(' Q: A[{0:5.3f}]           B[{1:5.3f}]'.format(qA.value, qB.value) )
        #print(' PC:   A[{0:5.3f},{1:5.3f}]     B[{2:5.3f},{3:5.3f}]'.format(pcA.x,pcA.y,pcB.x,pcB.y) )
        #print(' TVel: A[', tvA.value, ']B[', tvB.value,']')                     
#END printData
        

#--------------------------------------------------------------------------------
# If everyting is okay, the following message will print in the ViewPoint History window.
vpxSendCommand('say "Hello from Python" ')


#--------------------------------------------------------------------------------
# Prototype
# The first param is the return value, the last four are function parameters: msg,subMsg,p1,p2
VPX_CALLBACK = CFUNCTYPE( c_int, c_int, c_int, c_int, c_int )


#--------------------------------------------------------------------------------
def ViewPointMessageCallback( msg, subMsg, p1, p2, ):
        if ( ( msg == VPX_DAT_FRESH ) & (subMsg == EYE_A) ):
                roiListA = []                   # Need to declare and clear the list
                #initialize()
                               
                for ix in range(5):
                        roiNumberA = vpx.VPX_ROI_GetHitListItem( EYE_A, ix ) #VPX_ROI_GetEventListItem
                        if ( ROI_NO_EVENT == roiNumberA ):
                                break
                        else:
                                roiListA.append( roiNumberA )

                getData()                                
                                
                #if (len(roiListA)>0):
                if ( subMsg == EYE_A ):
                        printData()
        return 0

#--------------------------------------------------------------------------------
#  Register the Python callback function with the ViewPoint DLL
vpxCallback = VPX_CALLBACK(ViewPointMessageCallback)
vpx.VPX_InsertCallback(vpxCallback)
#
#  History
#       05-Mar-2014 : kfa : fix formatting of double, added note about 32-bit/64-bit incompatibility
#       05-Mar-2014 : kfa : fix wideChar, fix backSlashes, add prototypes, columize print format
#       25-Feb-2014 : kfa : added getGazePoint, getGazePoint2, EYE_B, and formated print
#       07-Dec-2010 : kfa : changed to Python3 and added vpxDll access check.

