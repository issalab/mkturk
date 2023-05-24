# Parameters

## TASK (**BOLD** = Required)

___________________________________________________________________________
**REQUIRED**
___________________________________________________________________________
**Agent:** Subject name

**Species:** marmoset, macaque, human, or model. If TASK.species = model, will run deepnet using tensorflow.js

**NGridPoints:** Number of display grid points in either direction. Produces square grid. 3x3 is typical. Images (fixation,sample, & test) will appear centered on one of the grid points. Grid is serially zero indexed by rows then columns. ngridpoints can be made larger to allow for more response choices to be simultaneously displayed.

**GridSpacingInches:** Determines intergridpoint spacing in physical inches on screen.

**FixationGridIndex:** Index on the grid where the fixation image will appear. If FixationGridIndex<0, then fixation image is presented at a randomly selected grid point and the fixation position is redrawn every FixationTimeOut milliseconds. FixationGridIndex <0 can be used to train subjects to touch different screen locations or to calibrate an eyetracker.

**FixationSizeInches:** Size of blue fixation dot or image (i.e., FixationUsesSample=1) in physical inches on the screen

**RewardDuration:** Duration of reward pulse in milliseconds. Green square and correct sound are presented for audiovisual feedback during this time.

**PunishTimeOut:** Time out in milliseconds for incorrect responses. Black square and incorrect sound may be presented for feedback during this time.


___________________________________________________________________________
*MORE FIXATION SCREEN OPTIONS*
___________________________________________________________________________
FixationDotSizeInches (default = 0 inches): Width of white fixation dot. Generally smaller than Fixation(Sample)SizeInches. If >0, overlays small white fixation square on both fixation & sample screens.

FixationDuration (default = 0 milliseconds): How long subject has to hold fixation touch in milliseconds for a successful fixation to register.

NFixations (default = 1): Number of times fixation dot needs to be pressed to advance to the match to sample phase of the task. nfixations=1 means the subject simply has to press the fixation dot once before the sample is presented. This mode allow parametric control over fixed ratio scheduling.

FixationUsesSample (default = 0 --> use blue dot, don't use sample image): FixationUsesSample=0, a fixation circle is shown for subject to touch; FixationUsesSample=1, sample image is shown as the fixation image. This allows implementation of a trianing strategy where the subject has to engage the sample image nfixations number of times before the choice screen.

FixationTimeOut (default = 3000 milliseconds): Time in milliseconds that subject has to acquire fixation before fixation dot or image extinguishes. If fixation times out, then it is just re-displayed (flashes) and no reward or punishment is administered (i.e., trial is aborted)

FixationOutsideGracePeriod (default = 0 --> punish touches or viewing outside fixation dot): Time in milliseconds that subject is allowed to touch or view non-target parts of screen after fixation screen appears. If do not want to punish touches (viewing) outside of fixation target, then set TASK.FixationOutsideGracePeriod to TASK.FixationTimeOut or an arbitrarily large number like 20000 milliseconds.


___________________________________________________________________________
*TASK OPTIONS*
___________________________________________________________________________
RewardStage (default = 0 --> reward fixation): RewardStage=0 rewards for successful fixation and skips the choice phase of task. RewardStage=1 rewards for selecting the correct choice or fixating an RSVP image sequence.

NRSVP (default = 0 --> no RSVP task): Number of sample scene images to show in a single trial. Displayed at TASK.SampleON duration TASK.SampleOFF between each sample drawn according to TASK.SamplingStrategy. If TASK.NRSVP<=0, only a single sample scene render will be shown for that trial. If TASK.NRSVP>0, then no choice response is awaited & reward is automatically given at the end of the sequence.

SameDifferent (default = 0 --> no choice screen, only test): SameDifferent > 0 indicates a Same-Different task so that last screen is a new choice screen with same (circle) and different (square) buttons. Test image extinguishes after scenedurationMS milliseconds, followed by TestOFF pause, followed by choice screen. If KeepTestON=1, then test image is on for scenedurationMS milliseconds and then remains on for choice screen

VisualSearch (default = 0 --> randomly choose from test bag): VisualSearch > 0 will select test image with same index as sample image. This means that each sample image is paired with a correct test image which allows the user to dictate the location of the appropriate choice in an image-by-image manner as required for a search task. To create a Visual Search task, want to specify only one sample bag and one test bag and should set TASK.KeepSampleON = 1 so that have distractors and set sample bag duration to 0 so that don't separately show distractors (mkturk handles sample duration 0 interpreting it as skip sample display). Otherwise, without 0 duration sample, will reveal location of distractors, and without keeping sampleON, test will only show one item and response is easy (correct as long as touch that item). To punish touching outside of the one item, set TASK.ChoiceOutsideGracePeriod=0. You can also set TASK.ChoiceTimeOut to be short to encourage a speeded response.


___________________________________________________________________________
*ADD SAMPLE & TEST SCREENS*
___________________________________________________________________________
SampleGridIndex (default = same as FixationGridIndex): Index on grid where sample image appears. SampleGridIndex=4 centers the image on a 3x3 grid, where ngridpoints=3. If SampleGridIndex<0, then sample scene appears at a randomly selected grid location unless FixationGridIndex is also <0, in which case, the sample grid index will be set to be the same as the randomly generated fixation grid index (i.e., sample scene's location is yoked to where the fixation was for that trial).

ImageBagsSample (default = [
        "/mkturkfiles/scenebags/objectome3d/camel/20200709_camel_token.js",
        "/mkturkfiles/scenebags/objectome3d/wrench/20200709_wrench_token.js"
    ]):
    List of (list of) paths, where entries at the top level are directories / imagepaths for the sample images of one group; e.g. [['/bear_images', '/dog_images'], '/face_images'] is a {bear, dog} versus face task

SamplePRE (default = 0 milliseconds): Duration in milliseconds that a gray screen is presented before the first sample image.

SampleOFF (default = 0 milliseconds): Duration in milliseconds that a gray screen is presented after the sample image before the response screen. This implements the delay in a DMS task. SampleOFF=0, leads to no delay

TestGridIndex (default = [0,1] --> default to 2-way task using first two gridpoints): Index on grid where test images appear. Length of TestGridIndex corresponds to number of possible choices subject will see (n-way task). There could be m test classes but of those a subset of n = TestGridIndex.length will be shown on a given trial, where m test classes >= n test choices. One of these will be the correct class and the remaining n-1 will be distractors.

ImageBagsTest (default = [
        "/mkturkfiles/scenebags/objectome3d/camel/20200709_camel_token.js",
        "/mkturkfiles/scenebags/objectome3d/wrench/20200709_wrench_token.js"
    ]):
    List of (list of) paths, where entries at the top level are directories / imagepaths for the test images of one group; e.g. [['/buttons/bear_icon.png, '/buttons/dog_icon.png'], ['/buttons/face_icon1.png, '/buttons/face_icon2.png']]. **!IMPORTANT! Number of Test Bags must match number of Sample Bags**

ObjectGridIndex (default = [] --> Test classes are not tied to a particular screen (response) location which is the Match-to-Sample setting): TASK.ObjectGridIndex is used to convert to a Stimulus-Response (SR) task. If this variable is set, then each object is tied to a particular location on the grid. TASK.ObjectGridIndex.length must equal TASK.ImageBagsTest.length for appropriate assignment of each object label to a grid location.

TestOFF (default = 0 milliseconds): Choice screen appears TestOFF milliseconds after test image is extinguished. If TestOFF=0, then test screen does not extinguish (go to blank gray) until same-different choice screen appears. If KeepTestON=1, then test image reappears during the same-different choice screen.

KeepSampleON (default = 0 --> extinguishes sample screen before test/choice screens): KeepSampleON=0, sample is presented according to duration in scene file, KeepSampleON=1 sample remains on during test & choice screens. This implements a spatial match to sample instead of extinguishig as would happen in a delayed match-to-sample.

**HideTestDistractors (currently inactive):** HideTestDistractors=1, hides the distractor choices so that subject only sees matching choice. Still gets punished if touches blank area where the incorrect button would have been.

SampleOutsideGracePeriod (default = 0 --> punish touches or viewing outside sample image sequence): Time in milliseconds that subject is allowed to touch or view non-target parts of screen after sample screen appears (note: test screen is also part of the launched sequence). If do not want to punish touches (viewing) outside of sample+test targets, then set TASK.SampleOutsideGracePeriod to be longer than the total duration of the RSVP or MtS or SR or SD image sequence being shown. Could just choose an arbitrarily large value like 20000 milliseconds if do not want to calculate the duration of the frame sequence.


___________________________________________________________________________
*ADD CHOICE SCREEN*
___________________________________________________________________________
ChoiceGridIndex (default = [0,1] --> same circle at 0, different square at 1): For a same-different task, need to specify two locations, one for same choice (white circle) and one for different choice (white square).

ChoiceSizeInches (default = 1 inch): Size of choice circle and square in physical inches on the screen

KeepTestON (default = 0 --> extinguises test screen before choice screen): KeepTestON=0, test is presented only for testON milliseconds, KeepTestON=1 test remains on during choice screen. This only applies to same-different task when responses are indicated on additional choice screen following test screen.

ChoiceTimeOut (default = 5000 milliseconds): Time in milliseconds that subject has to make a choice in AFC task before trial aborts and new sample is displayed. This timeout applies to test response screen in SR2 or M2S and to choice response screen in same-different.

HideChoiceDistractors (default = 0): If TASK.HideChoiceDistractors=1, hides the same or different button so that subject sees only the correct one to touch. Still gets punished if touches blank area where the incorrect button would have been. This only applies to same-different choice screen. See HideTestDistractors for test response screen used in SR2 and M2S.

ChoiceOutsideGracePeriod (default = TASK.ChoiceTimeOut + 1 --> do not punish any touches or viewing outside choice targets): Time in milliseconds that subject is allowed to touch or view non-target parts of screen after test (or choice) screen finishes displaying in a SR, MtS, or SD task. If do not want to punish touches (viewing) outside of choice targets, then set TASK.ChoiceOutsideGracePeriod to be larger than TASK.ChoiceTimeOut. Alternatively, if want to punish subject for any spurious touches outside the available choices, then set TASK.ChoiceOutsideGracePeriod = 0.


___________________________________________________________________________
*SAMPLING STRATEGY*
___________________________________________________________________________
SamplingStrategy (default = uniform_without_replacement except when Agent=SaveImages sets to sequential): Determines how sample images are drawn: uniform_with_replacement, uniform_without_replacement, sequential. TASK.Agent=SaveImages forces TASK.SamplingStrategy = sequential.

NStimuliPerBagBlock (default = 0 --> draw from all sample bags on each trial): if TASK.NStimuliPerBagBlock = 0, randomly samples from all bags (interleaved design), if >0, samples N consecutive images from the same sample image bag (block design). This is equivalent to blocking the session so that training is done in object blocks rather than interleaving all objects. After N sample draws are completed for bag i, proceeds to next bag i+1 according to bag sequence specified in ImageBagsSample. When all bags have been sampled NStimuliPerBagBlock times, starts back at bag 0. Since the trial queue is predetermined, when NRSVP = x images are drawn ahead of time for that trial, even if the agent does not view all of them on that trial, the next trial will be a new set of images and the non-viewed images count toward the count for NStimuliPerBagBlock see (as an alternative, see TASK.NMillisecondsPerBagBlock for a fixed duration block). Note, that for ease of implementation & also for interpretability in analysis, all stimuli in a given trial will be drawn from the currently specified bag. In other words, the block updates at trial granularity at the end of a trial, so if TASK.NRSVP>1 and TASK.NStimuliPerBagBlock is not an integer multiple of TASK.NRSVP, this means that not exactly NStimuliPerBagBlock will be drawn, may get a few stimuli more if TASK.NRSVP is large. However, this approach does guarantee the following possibly desirable side effect -- that in an RSVP design, if NRSVP = x and NStimuliPerBagBlock = y, then ceil(y/x) consecutive trials will be from the same bag. Thus, each queued RSVP sequence is from one and only one scene bag (where the objects/background may be of a certain type for that trial). Overrides by TASK.NMillisecondsPerBagBlock

NMillisecondsPerBagBlock (default = -1 --> do not require stimuli from same bag be sampled for a duration): if TASK.NMillisecondsPerBagBlock > 0, then consecutive images from the same sample image bag i will be drawn until TASK.NMillisecondsPerBagBlock milliseconds have elapsed, after which, will proceed to drawing from bag i+1 until TASK.NMillisecondsPerBagBlock is once again fulfilled. Overriden by TASK.NStimuliPerBagBlock

___________________________________________________________________________
*RESPONSE OPTIONS*
___________________________________________________________________________
Target (default = object): Type of target bounding box to use during Fixation, Sample, and Response (Test/Choice) Screens. This can be:
  
    (1) 'gridwindow' -- static location, static size -- a static square fixation window around a gridpoint, requires TASK.FixationWindowSizeInches,
  
    (2) 'objectwindow' -- dynamic location, static size -- a dynamic square fixation window around object center, requires TASK.FixationWindowSizeInches, 
  
    (3) 'object' -- dynamic location, dynamic size -- window follows object position and aspect ratio/size. It's the object bounding box whether the object is the blue fixation dot or the foreground objects in a scene render, OR 
  
    (4) 'scene' -- dynamic location, dynamic size -- the overall scene bounding box which would encompass both object and background.
  
    Note that 'objectwindow', 'object', and 'scene' are dynamic bounding boxes where each frame render will compute a bounding box whereas 'gridwindow' is a static bounding box applied to a grid position independent of rendered assets (shape, image, object, cubemap). For now, the TASK.Target parameter is task-wide, could always be done specific to each screen (e.g., Fixation vs. Sample) to provide more flexibility in the future.

FixationWindowSizeInches (default = 0 inches): Width of box within which subject has to activate targets during all screens (Fixation, Sample, Test, Choice). TASK.FixationWindowSizeInches needs to be set to >0 if TASK.Target = 'window'.

NStickyResponse (default = 0 --> subject can repeatedly choose any given response option): Number of times subject can choose the same location on the screen before force them out of it by placing the correct answer somewhere else (i.e. if they have response bias, then on the next trial, the correct choice is drawn somewhere away from that bias). Currently not implemented for same-different task or SR2

BlinkGracePeriod (default = 200 milliseconds): Amount of time subject can (briefly) vacate target once they were in without being punished for breaking fixation. Only applies to fixations during Fixation screen & Sample/Test screen after OutsideGracePeriod has expired.


___________________________________________________________________________
*REWARD OPTIONS*
___________________________________________________________________________
NConsecutiveHitsforBonus (default = 0 --> do not count consecutive hits toward extra reward): How many consecutive hits subject needs for the reward amount to increase.  If NConsecutiveHitsforBonus=4, then subject will get 2x reward for correct responses on 4 consecutive trials, 3x reward for correct responses on 8 consecutive trials, up to nrewardmax times of 1x reward. This is a way to make chance on a 2AFC task be virtually < 50% since reward is jointly distributed across trials rather than independently on the current trial.

NRewardMax (default = 1 --> no bonus reward possible): Max number of rewards that can be given for a successful trial. This caps how much extra (bonus) reward subject can get for successful completion of consecutive trials. If nrewardmax=3, then subject can get up to 3x reward for completing 3*NConsecutiveHitsforBonus consecutive trials successfully, and then would get 3x reward after that until gets a trial wrong.

NRSVPMax (default = 0 --> no expenontial reward for fixating NRSVP sequence longer): Works in tandem with TASK.NRSVP where TASK.NRSVP is the min # of images required to fixate for reward and a rsvp sequence of TASK.NRSVPMax images is queued up per trial. Exponentially more reward pulses given for longer fixations up to NRewardMax for fixating NRSVPMax images. No reward for less than NRSVP clips fixated, one reward pulse for NRSVP clips viewed, and NRewardMax pulses given for NRSVPMax.  Trial-by-Trial bonus reward for consecutive hits will be ignored if this option is on to reward more images fixated within a trial. NRSVPMax is ignored if set less than NRSVP. See TSequenceActualClip in TRIALEVENTS if want to determine which clips were fixated (-1 is registered for clip times if broke fixation). See TRIALEVENTS[NReward] to determine how many reward pulses were delivered. NOTE: If want to use bonus rewards & NRewardMax in the traditional trial-by-trial sense, then set NRSVPMax < NRSVP so that only one reward is given per NRSVP images shown and bonus is enacted based on multiple consecutive trial hits.

___________________________________________________________________________
*ADD AUTOMATOR*
___________________________________________________________________________
Automator (default = 0 --> Off, no automatic task transitions): Boolean on/off

AutomatorFilePath (default = '' --> no automator file): File path to params for the automator curriculum.

CurrentAutomatorStage (default = 0): index of current training stage of automator.

___________________________________________________________________________
*DISPLAY OPTIONS*
___________________________________________________________________________
GridXOffsetInches (default = 0 --> horizontally centered): Determines how much to horizontally shift grid from center in physical inches on screen. >0 => shifts rightward

GridYOffsetInches (default = 0 --> vertically centered): Determines how much to vertically shift grid from center in physical inches on screen. >0 => shifts downward

BackgroundColor2D (default = #7F7F7F --> gray background): specify the background color in hex (eg, #FFFFFF for white or #000000 for black). Not required in param file. If not provided, defaults to gray screen background (#7F7F7F)

HeadsupDisplayFraction (default = 0 --> top of screen not used to display stats): Vertical fraction of screen to use for displaying task stats and device outputs such as RFID detection. If not specified, default is 0%. Headsup Display uses a black background.

Photodiode (default = 1 --> flash alternating square): Photodiode == 1 leads to display of alternating white/black square in bottom right corner of canvas. For the Blank taskscreens intervening between sample/test/choice renders (i.e., TASK.SamplePRE or TASK.SampleOFF or TASK.TestOff > 0), light gray/dark gray is used (e.g., light gray/dark gray, 0.2 & 0.8 or 51 & 204, alternation in frame flips where the first frame is light and the second is dark). When taskscreen is not Blank, the square will alternate between full white and full black (0.0 & 1.0 or 0 & 255; first frame is white).

THREEJScameraFOV (default = 45 degrees): Sets the default size of the viewing angle of the camera in degrees which is how big the canvas corresponds to in 3js units which ultimately is how much of the screen in inches the scene will occupy (note that we always use a square for the retina, aspectratio=1 in setupCanvas hardcoded). If not specified, then cameraFOV=45 is used. Combined with THREEJScameraZDist, this sets the size of the canvas at the z=0 plane in the viewing frustrum which is ultimately what is projected onto the camera's retina (which will be the physical screen). This 2D projection size determines the size of retina so that when camera FOV or ZDist are changed in the scene file from this default, the retina (ie, 2D projection onto a physical array which in our case is the device screen) is still this default size but now has a different projection (if you move closer in zdist, things will get larger on your fixed size retina). See this pull request for further description and diagram: https://github.com/issalab/mkturk/pull/38

THREEJScameraZDist (default = 10 threejs units): Sets the default camera Z-position. See definition of THREEJScameraFOV for how the default settings for camera FOV & ZDist affect size on display. If not set, then cameraZDist=10

THREEJSRenderRatio (default = 2): how much to upsample for rendering to 2D canvas. Increases resolution of image. THREEJSRenderRatio = 2 (default) recommended for best balance of performance and resolution. THREEJSRenderRatio = 4 would give very high-res images for "SaveImages" but can be slow on older mobile devices.

SaveImagesResolution (default = 0 --> full threejs window): For TASK.Agent = SaveImages, allows user to set total canvas size for threeJS renders to SaveImagesResolution x SaveImagesResolution in pixels. Default if SaveImagesResolution is not specified is to use full threejs square window for canvas that is rendered to (and subsequently saved out).

DeviceConfig (default = ''): For known display hardware, can specify the physical device configuration which entails screenSizeInches, screenPhysicalPixels, ppi, and choosing the movie frame rate. This guarantees that MkTurk knows how to scale images so that can convert from physical pixels to inches. If TASK.DeviceConfig=='', then will default to using automatic detection of hardware specs and will use the standard 60Hz movie animation rate of MkTurk.    


___________________________________________________________________________
*DATA SAVING OPTIONS*
___________________________________________________________________________
BQSaveDisplayTimes (default = 1 --> save display times): default is to save displaytimes to BigQuery. If <=0, then displaytimes not saved.

BQSaveEye (default = 1 --> save eye): default is to save eye trace to BiqQuery. If <=0, then eye not saved

BQSaveTouch (default = 1 --> save touch): default is to save touch trace to BigQuery. If <=0, then touch not saved


___________________________________________________________________________
*MISCELLANEOUS OPTIONS*
___________________________________________________________________________
CalibrateEye (default = 0 --> do not calibrate): If >0, will calibrate for TASK.CalibrateEye number of trials for train. After training, saves calibration in firestore collection "eyecalibrations" and then exits. Requires ENV.Eye.TrackEye>0.

CalibrateEyeCrossTerms (default = 0 --> do not calibrate with additional crossterms): If >0, will calibrate with crossterms (e.g., models x_screen = a*x_eye + b*y_eye + c instead of simply using x_screen = a*x_eye + c). May be useful if changes in x in screen coordinates are influenced by both x & y changes in eyetracker coordinates (e.g., camera is rotated off horizontal axis). Same goes for y screen coords being influenced by x changes in eyetracker.  Requires TASK.CalbirateEye>0.

CheckRFID (default = 0 --> do not check for an RFID read to proceed with task): Time in milliseconds over which at least one matching RFID read is required so that agent doesn't get kicked off of task. If there is a read within the last CheckRFID ms, task continues, otherwise agent is locked out at start of next trial. CheckRFID <= 0 turns off RFID checking.

InterTrialInterval (default = 0 milliseconds): How long to wait after reward/punish is delivered before starting next trial. Only a gray screen is shown for InterTrialInterval milliseconds, followed by the fixation dot. If not specified, is set to 0 ms.

MinTrialDuration_AfterSampleCommandTrigger (default = -1; do not enforce a lower bound on trial duration post sample command trigger): Whether to enforce a minimum trial period after the sample command trigger before proceeding to the next trial. If after the TASK.InterTrialInterval wait period currentTime - sampleStartTime is still less than TASK.MinTrialDuration_AfterSampleCommandTrigger, then wait an additional period. This optional trial duration condition is useful for working with external devices that have a fixed data acquisition period following a trigger. In this way, can make sure MkTurk does not start a new trial and re-trigger the device until the device has finished its acquisition for the current trial.

## TASK (deprecated)
___________________________________________________________________________
*DEPRECATED TASK PARAMETERS*
___________________________________________________________________________
ConsecutiveHitsITI (deprecated 12/08/22, influenced resetting of consective hits by putting a time criteria, seems unnecessary): Maximum time in milliseconds allowed to elapse from the previous trial for the current trial to count toward reward accumulation for a string of correct responses. For example, if ConsecutiveHitsITI=8000, then subject has 8 seconds to complete the next trial successfully and the consecutivehits counter will be incremented. Otherwise, the number of consecutivehits will get set to 0

DragtoRespond (deprecated 12/30/22, was used to allow dragging into target which is necessary if eyetracking. However, new hold_promise_simple allows dragging in general to unify touch/mouse with eyetracking. This variable may be brought back in the future if dragging is to be disallowed for touchscreen): (default = 0 --> clicks indicates response): Flag that specifies whether a continuous move (drag) into a choice box is allowed (DragtoRespond=1) versus a discrete click in the box (DragtoRespond=0). Defaults to 0 (click to respond) if not provided, but if eyetracker is present will automatically be set to 1.

Homecage (deprecated 12/07/22, purely metadata, no influence on mkturk task): Where task was performed. 0=lab 1=subject's home

ImageRewardsList (deprecated 12/08/22, legacy method for assigning reward to particular images based on their file path. Now that mkturk uses scene files, this is better implemented in the future within the scene file on a per stimulus basis): List of paths containing user-specified reward per image. Images in the image_reward_list file need to be referenced by their complete path. ImageReward values: 0=no feedback (no reward or punish for that sample image) >0=user set reward for that sample image, overrides bonus reward behavior. These can be partial lists. For images where reward is manually specified, then default bonus reward behavior is used. No corresponding list is used for test (choice) images. Instead, specify reward for a whole class by listing reward for each image in that class in ImageRewardsList.

Liquid (deprecated 12/07/22, influenced reward duration by using a particular pump/liquid calibration --> replaced by TASK.RewardDuration): 1=water 2=water-condensed milk 3=marshmallow slurry (4/30mL)

Pump (deprecated 12/07/22, influenced reward duration by using a particular pump/liquid calibration --> replaced by TASK.RewardDuration): 1=adafruit peristaltic 2=submersible centrifugal tcs 3=diaphragm pump tcs 4=piezoelectric 3mL takasago 5=newer diaphragm pumps tcs 6=piezoelectric 7mL takasago

RewardPer1000Trials (deprecated 12/07/22, in combination with TASK.Pump & TASK.Liquid would use Pump/Liquid linear calibration curve to calculate pump pulse duration --> replaced by TASK.RewardDuration): Amount of liquid reward in mL for 1000 correct trials. For macaques, this is around 100mL for every 1000 correct trials. Utilizes legacy calibration. Recommend usage of TASK.RewardDuration instead.

Separated (deprecated 12/07/22, purely metadata, no influence on mkturk task): 0=subject was paired with conspecific during task, 1=individual housed was separated from conspecific



## ENV
AgentRFID: If CheckRFID>0, then fetches AgentRFID from database to check against incoming RFID reads to determine if correct agent is performing task. If tag doesn't match AgentRFID, task locks out and waits for a valid tag read

BackingStoreRatio: scaling browser uses for background backingstore canvas to visible canvas. Differs across browsers

BatteryLDT: Stores any status update from the battery API, L=battery level in %  D=estimated time until battery discharges  T=Date.now()-StartDate timestamp of latest battery status update

CanvasRatio: Ratio of the logical canvas pixels to the physical screen pixels = BackingStoreRatio/DevicePixelRatio

ChoiceRadius: Radius (width) of same circle (different square) in pixels. This is not set by the user. Rather, user specifies ChoiceSizeInches, and then ChoiceRadius stores the actual pixel-based size in the json data file.

ChoiceColor: Defaults to white circle (same) and square (different) buttons for same-different choice screen

CurrentDate: date & time when task session was initiated

DataFileName: complete file path and name of datafile

DevicePixelRatio: In a typical retina display, there can be a devicePixelRatio of 2 so that each 1x1 logical pixel is rendered using 2x2 logical pixels. This upsampling requires interpolation and can lead to blurring over your image. However, this can be compensated by setting the CanvasRatio = BackingStoreRatio/DevicePixelRatio

DeviceBrand: eg Not available (for google devices) or Apple

DeviceBrowserName: eg Chrome or Safari

DeviceBrowserVerion: eg 78.0.3904.90 or 12.0

DeviceGPU: eg Adreno (TM) 640 or Apple A9 GPU

DeviceName: the name of the device used by mkturk to search firestore records eg Pixel 4 XL or iPhone 6s Plus

DeviceOSName: eg Android 10 or iOS 12.0.1

DeviceOSCodename: eg Android or iOS

DeviceOSVersion: eg 10 or 12.0.1

DeviceScreenWidth: full window (viewport) pixels

DeviceScreenHeight: full window (viewport) pixels

DeviceTouchscreen: 0 (not available) or 1 (available), indicates if touchscreen functionality available on device

DeviceType:desktop or mobile

EffectorSaveJSONDataRelativetoFixationDotDisplayMS: dt in milliseconds relative to fixation appearance when to start saving eye data into json relative to trial start (i.e., fixation display). if dt<0, this means eye data immediately before fixation appears will be included in the json datafile. Always ends saving with trial end. Note, for parallel saving to bigquery, we currently keep up 500ms before fixation, but for json data file may want to keep less to save space.

Eye.CalibXTransform: Stores the parameters from the linear regression fit of eye tracker's x,y --> screen x (eg x_screen = a*x + b*y + c)

Eye.CalibYTransform: Stores the parameters from the linear regression fit of eye tracker's x,y --> screen y (eg y_screen = a*x + b*y + c)

Eye.CalibType: type of calibration ('default': based on screen size, 'linear': linear regression fit)

Eye.NCalibPointsTrain: Number of points for fitting the regression

Eye.NCalibPointsTest: Number of points for testing the regression (usually set to the same number of points used for training)

Eye.CalibTrainMSE: The train MSE for NCalibPointsTrain training points.

Eye.CalibTestMSE: The test MSE. Computed when TASK.CalibrateEye <= 0 (i.e., when not calibrating; tests an existing calibration)

Eye.CalibTestMSETarg: The test MSE per target for all possible grid indices. Stores MSE for x, MSE for y, and # trials per grid index in {x, y, n} objects each of which is an arrary of n grid indices.

Eye.TrackEye: 0 (not tracking eye) or 1 (tracking eye)

FixationRadius: Radius of fixation image in pixels. This is not set by the user. Rather, user specifies FixationSizeInches, and then FixationRadius stores the actual pixel-based size in the json data file.

FixationColor: color of fixation dot if image is not used

ImageHeightPixels: The height of the sample image in pixels. The image height is used as the unit for the vertical dimension.

ImageWidthPixels: The width of the sample image in pixels. The image width is used as the unit for the horizontal dimension.

MaxTrialsPerFile: task exits after this many files are completed. Currently set to 500

NDisplayPrime: how many frames of sample movie to render before rendering sample movie. Calls a second parallel rAF that draws to the same canvas but then covers with blank (gray) screen. In some cases, priming helps obtain more reliable hardware display times when using webgl canvas.

NRSVPMin: set to be TASK.NRSVP. Guaranteed one reward if fixate for NRSVPMin images

NRSVPMax: set to TASK.NRSVPMax (if present); otherwise, set to TASK.NRSVP. Bonus rewards are given in an exponential fashion for fixating up to TASK.NRSVPMax images.

NumPrebufferTrials: number of trials for which to preload TQS trials and movies. Currently set to 300.

Ordered_Samplebag_Filenames: Names of the sample image bags. Each bag is treated as a separate label class

Ordered_Testbag_Filenames: Names of the test image bags. Each test image bag serves as the label images for each sample class

Ordered_SampleImageRewardList: Reward specification for each image: -1=default behavior 0=no reward/punish feedback >0=fixed reward for that image, value overrides default task bonus reward behavior

ParamFileDate: Date of revision on dropbox of the parameter file used for loading the task.

ParamFileName: Name of the parameter file used for loading the task

ParamFileRev: Dropbox revision # of the parameter file. The revision number is used to determine if a new version of the parameter file was found

PhysicalPPI: physical quantity, should equal ENV.DevicePixelRatio*ENV.ViewportPPI, physical device pixels per inch

RewardDuration: How long the reward is dispensed in milliseconds of time the pump is on. RewardDuration is derived by the user-specified RewardPer1000Trials in mL and the calibration curve for that pump type. 

ScreenRatio: the standard device pixel ratio for that screen assuming no scaling (retrieved from firestore device record if available)

ScreenSizeInches: physical quantity, recorded physical size of screen (retrieved from firestore device record if available)

ScreenSizePixels: physical quantity, recorded # of pixels of screen (retrieved from firestore device record if available)

Subject: Name of subject, chosen from pulldown menu at beginning of task.

StressTest: 0 (regular run) or 1 (stress test run)

UserAgent: info from window.navigator.UserAgent

ViewportPixels: derived quantity computed as ENV.ViewportPixels = ENV.ScreenPhysicalPixels/ENV.DevicePixelRatio where ScreenPhysicalPixels is the screen spec retrieved from firestore, and DevicePixelRatio is from the scaling being used by the user as detected during the browser session

ViewportPPI: derived quantity, equals ENV.ViewportPixels[0]/ENV.ScreenSizeInches[0], viewport pixels per inch (computed from first screen dimension)

WebAppUrl: info from window.location.href to track whether mkturk ran from the tested build or beta/development build

XGridCenter: The location of all grid points in pixels. Follows from user-specified NGridPoints and GridScale (e.g. to create a 3x3 grid with adjacent non-overlapping images, set NGridPoints=3, GridScale=1 and XGridCenters will be spaced by ImageWidthPixels)

YGridCenter: The location of all grid points in pixels. Follows from user-specified NGridPoints and GridScale (e.g. to create a 3x3 grid with adjacent non-overlapping images, set NGridPoints=3, GridScale=1 and YGridCenters will be spaced by ImageHeightPixels)

## ENV (deprecated)
___________________________________________________________________________
*DEPRECATED ENV PARAMETERS*
___________________________________________________________________________
Eye.BlinkGracePeriod (Deprecated December 9, 2022; elevated to be user facing in TASK.BlinkGracePeriod which now applies directly to all responses): time in milliseconds that eye is allowed to be outside the fixation window without counting it as a fixation break. Any period longer than Eye.BlinkGracePeriod milliseconds outside the window is considered a fixation break.


## EVENTS TRIALSERIES (saved to json data file)
BlockNum: Current block number, a level of organization above trial number

CorrectItem: Index of the correct item on each trial

EndTime: End of trial, time is recorded when either reward delivery or punish timeout promise is fulfilled. On each task trial, SampleCommand line is set to 0 upon completion of reward/punish (was set to 1 at beginning of trial as recorded by SampleStartTime).

EyetrackerSampleInterval: Keeps track of the average interval between successful eyetracker reads during a given trial. If the sample fails to come in or it comes in but is garbled, this would be reflected by an mkturk trialevent sampleInterval average greater than the eyetracker hardware's sample interval.

FixationGridIndex: Fixation grid location on each trial.

FixationTouchEvent: The type of touch event that was registered for that trial (e.g. touchheld or touchbroke if there was a required FixationDuration>0 period)

FixationXYT: records most recent fixation touch on each trial. X,Y=horizontal,vertical position of fixation touch in pixels T=time of touch measured using Date.now()

NReward: The number of rewards given at the end of each trial; usually 1x reward unless subject got many trials in a row correct in which case may get bonus reward according to nconsecutivehitsforbonus.

ReinforcementTime: Start time of reinforcement (reward/punish) delivery

Response: Index of the chosen item on each trial. For M2S and SR2, response is measured for touches on the test screen. For same-different task, this is collected at the choice screen.

ResponseTouchEvent: The type of touch event that was registered for that trial (e.g., held, broke, TimeOut)

ResponseXYT: records the coordinates and time of touching the choice item. X,Y=horizontal,vertical position of response touch in pixels T=time of touch measured using Date.now()

Sample: Index of sample displayed on each trial. Index into list of imagebags for that session

SampleCommandReturnTime: The roundtrip time that mkturk received a signal back over serial after the arduino digital line for sample command was set to 1. This is an upper bound on how long it took to send the digital sync signal (sample command) out to other devices right before the sample sequence is displayed. Should be very close to SampleStartTime.

SampleCommandOffReturnTime: The roundtrip time that mkturk received a signal back over serial after the arduino digital line for sample command was set to 0. This is an upper bound on how long it took to send the digital sync signal (sample command) out to other devices right after reward/punish was completed. Should be very close to EndTime.

SampleFixationTouch: During RSVP, the type of fixation tough even that was registered for that trial's sample screen (e.g., touchheld, touchbroken, TimeOut)

SampleFixationXYT: records the coordinates and time of touching the Sample item (RSVP task only). X,Y=horizontal,vertical position of response touch in pixels T=time of touch measured using Date.now()

SampleGridIndex: Sample grid location on each trial.

SampleStartTime: Time recorded when the first Sample frame was shown for that trial. On each task trial, SampleCommand line is set to 1 upon initiating the Sample sequence (set to 0 at end of trial as recorded by EndTime).

StartTime: Time recorded when the most recent fixation dot was shown for that trial. On the first task trial of a file, a brief SampleCommand pulse is issued to key the remaining trials. The duration is based on the last digit in StartTime. last digit 0:9 ==> 10-100 milliseconds, or 10*(lastdigit+1)

Test: Indices of test choices displayed on each trial where N indices are stored for an N-AFC task. Index into list of test imagebags for that session

TSequenceActualClip: Actual software-reported ON times of first frame of each clip for blank, sample, blank, sample...test/choice ballistic display sequence (does not include fixation screen on time or reward/punish on time). Should only be one frame or less offset from times in TSequenceDesiredClip. Last frame times of each clip are not currently included in this variable.

TSequenceDesiredClip: Desired software-reported ON times of first frame of each clip for blank, sample, blank, sample...test/choice


## EVENTS TIMESERIES (saved to json data file or bigquery)
Arduino (XX): Sample command (sc prefix), pump command (pu prefix) & photodiode events (ph prefix)

Battery (json): [trial, timestamp, level, discharge_time]

BLEBattery (not saved)

EffectorXY (json): {t,x,y,w,a,q}[trial#][sample#] (touch OR eye data timeseeries are funneled to this variable for storage into main data file in addition to saving of Touch/Eye to bigquery). Values ENV.EffectorSaveJSONDataRelativetoFixationDotDisplayMS milliseconds before trial start are stored. Currently, 500ms before trialstart are stored in addition to during trial timeseries.
    t: time from trial start in milliseconds
    x: horizontal position in pixels re: origin of whole screen
    y: vertical position in pixels re: origing of whole screen
    w: width of effector
    a: aspect ratio of effector
    q: signal quality factor


EyeData (bigquery): [ agent, trialnum, timestamp, numeyes, x, y, width, aspectratio, null,null,null,null]

FrameNum (bigquery): part of displayData --> [ agent, timestamp, trialnum, framenum, tdesired, tactual]

RFIDTag (json): [trial, timestamp, tag]

TouchData (bigquery): [ agent, trialnum, timestamp, x, y, meta]

TSequenceActual (bigquery): part of displayData --> [agent, timestamp, trialnum, framenum, tdesired, tactual]

TSequenceDesired (bigquery): part of displayData --> [agent, timestamp, trialnum, framenum, tdesired, tactual]

Weight (json): [trial, timestamp, weight]


<br>

## KEYBOARD SHORTCUTS
ALT/OPTION + r --> manually deliver a single reward pulse (reward sound will be played & reward indicator LED will light up)

ALT/OPTION + 1 --> manually flush pump for 1 minute (2 x 30second pulses)

ALT/OPTION + 2 --> manually flush pump for 1 minute (4 x 30second pulses)

ALT/OPTION + 3 --> manually flush pump for 1 minute (6 x 30second pulses)

ALT/OPTION + 4 --> manually flush pump for 1 minute (8 x 30second pulses)

<br>

## SCENES
Most variables except those marked * or ** can be changed on a per movie clip and per movie frame basis using an array or array of arrays. An array specifies how values should be set for each movie clip. For params that you wish to animate, an array of arrays specifies how the param value changes on each frame for each clip. Inner arrays for an animation can specify the start and end value or particular keypoints in between. All intervening values are linearly interpolated to produce durationMS * framerate values (e.g., 3 sec * 60 Hz = 240 values) and this array of expanded values is stored in the final data file in the field for that animated variable. Besides the calculated parameter value on each frame, the 2D object bounding box values in pixels after projecting to screen are stored in the final SCENES variable in the output data file.

*cannot be changed (constant)
**cannot be animated
() meta appended to SCENES and saved into final data file (i.e., not user-specified in scene file)

# CAMERAS
type*:
fieldofview*:
near*:
far*:
position:
targetTHREEJS:
visible:
(targetInches):

# LIGHTS
type*:
color*:
intensity:
position:
visible:

# OBJECTS
meshpath*:
objectdoc*:
texture*:
material.type*:
material.color*:
material.metalness*:
material.roughness*:
material.reflectivity*:
material.opacity:
material.transparent*: 
sizeTHREEJS:
positionTHREEJS:
rotationDegrees:
visible:

target**: (default = 1 --> an object is a valid target) Allows user to toggle which objects in the scene are used as a target in that particular scene render. This is done per movie clip, so if not a target (SCENE.OBJECTS."name".target = 0), then remains not a target for entire movie. Note, that if an object's visible property is set to 0, this also makes them not a fixatable/touchable target. Setting the target property on objects is useful for creating a "where's waldo" type scene where there is one target among many distractor objects. It's a what-where task instead of just a what task as in stimulus-reponse, match-to-sample, and same-different paradigms.

(boundingBox2DPixels):
(intrinsicMeshBoundingBox):
(intrinsicMeshMaxDim):
(morphTargetDelta):
(morphMultiplier):
(sizeInches):
(positionInches):

# IMAGES
imagebag*:
imageidx:
sizeTHREEJS:
(boundingBoxCube2DPixels):

# OBJECTFILTERS || IMAGEFILTERS
blur: Applies a Gaussian blur to the input image in pixels.

brightness: Applies a linear multiplier to the input image, making it appear more or less bright. Values are linear multipliers on the effect, with 0% creating a completely black image, 100% having no effect, and values over 100% brightening the image.

contrast: Adjusts the contrast of the input image. A value of 0% makes the image grey, 100% has no effect, and values over 100% create a contrast.

grayscale: Converts the image to grayscale. A value of 100% is completely grayscale. The initial value of 0% leaves the input unchanged. Values between 0% and 100% produce linear multipliers on the effect.

huerotate: Applies a hue rotation. The <angle> value defines the number of degrees around the hue color circle at which the input samples will be adjusted. A value of 0deg leaves the input unchanged.

invert: Inverts the samples in the input image. A value of 100% completely inverts the image. A value of 0% leaves the input unchanged. Values between 0% and 100% have linear multipliers on the effect.

opacity: Applies transparency. 0% makes the image completely transparent and 100% leaves the image unchanged.

saturate: Saturates the image, with 0% being completely unsaturated, 100% leaving the image unchanged, and values of over 100% increasing saturation.

sepia: Converts the image to sepia, with a value of 100% making the image completely sepia and 0% making no change.

# durationMS**
Duration of a movie clip in milliseconds. Specifying as an array of values allows setting of different durations for each movie clip.
(nimages)
(nbackgroundimages)
(nframes)

<br>

## ARDUINO V0.3 -- mkturk
### Digital Pins
0 - RX

1 - TX

2 - eye led

3 - trial code led

4 - pump (pin 2 in v0.2)

5 - sample command led

6 - rfid led

7 - pump led

8,9 - eye serial

10,11 - rfid serial

12 - unused

~13 - pump pwm

### Analog Pins
A0 - trial trigger

A1 - trial trigger

A2 - sample command

A3 - trial code

A4 - block trigger

A5 - block trigger

### Lines
D8,D9 (D2 led) - eye - softwareserial2

D10,D11 - rfid - softwareserial1

A2,A3 (D5 led) - file code+sample command & trial code - IN1

A0,A1 (D3 led) - trial triggers - IN2

A4,A5 (D6 led, D1 can't be used because serial comm) - block triggers - IN3

<br>

## ARDUINO V0.3 -- mkphotodiode/mksensor
### Digital Pins
0 - RX

1 - TX

2 - unused led

3 - unused led

4 - unused

5 - sample command led

6 - unused led

7 - unused led

8,9 - unused

10,11 - unused

12 - unused

~13 - unused


### Analog Pins
A0 - unused

A1 - unused

A2 - unused

A3 - unused

A4 - Photodiode Receive

A5 - Sample Command Receive


### Lines
D8,D9 (D2 led) - unused - softwareserial2

D10,D11 (D6 led) - unused - softwareserial1

A2,A3 (D5 led) - unused - IN1

A0,A1 (D3 led) - unused - IN2

A4,A5 - photodiode, sample command - IN3