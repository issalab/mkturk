import py_ViewPointLib as vp
#--------------------------------------------------------------------------------
vp.SendCommand("say '--- Python interface: Query New ViewPoint DataFile' ")
fileName = input('Enter file name:')
d = "dataFile_NewName " + "'" + fileName + ".vpdat" + "'"
vp.SendCommand(d);
print(d)
#--------------------------------------------------------------------------------
#  END -- 2017-Oct-05 (c) Arrington Research, Inc.
#--------------------------------------------------------------------------------
