import py_ViewPointLib as vp
#--------------------------------------------------------------------------------
feedBack = "--- Python interface: Closing ViewPoint DataFile. ---"
print(feedBack)
cliFeedback = "say '" + feedBack + "'"
vp.SendCommand(cliFeedback)
vp.SendCommand("dataFile_Close");
#--------------------------------------------------------------------------------
#  END -- 2017-Oct-05 (c) Arrington Research, Inc.
#--------------------------------------------------------------------------------
