import py_ViewPointLib as vp
from math import *
import time
#--------------------------------------------------------------------------------
print("Sending userData to ViewPoint ....")
vp.SendCommand("say '--- Python Demo UserData ---' ")
vp.SendCommand("penPlot +userData2")
vp.SendCommand("userData_ResetAutoDetect")
vp.SendCommand("penPlotRange userData2 -1.5 +1.5")
rx = 0.0
while ( True ) :
    rx = rx + 0.25
    val1 = sin(rx)
    val2 = sin(rx/4)
    cmd = "userData 2 " + str(val1) +" "+ str(val2) 
    vp.SendCommand(cmd)
    time.sleep(0.010)
#--------------------------------------------------------------------------------
#  END -- 2017-Aug-28 (c) Arrington Research, Inc.
#--------------------------------------------------------------------------------
