export interface FileType {
  path: string;
  list: any[];
  name: string;
  data?: LiveplotDataType;
  ver: any;
  date: any;
  dataChanged: boolean;
  fileChanged: boolean;
  dateSaved?: Date;
}

export interface LiveplotDataType {
  Agent: string;
  Species: string;
  Homecage: number;
  WebAppUrl: string;
  StressTest: number;
  Separated: number;
  Liquid: number;
  Pump: number;
  RewardPer1000Trials: number;
  PunishTimeOut: number;
  ChoiceTimeOut: number;
  NGridPoints: number;
  GridSpacingInches: number;
  FixationGridIndex: number[];
  SampleGridIndex: number[];
  TestGridIndex: number[];
  ObjectGridIndex: number[];
  NTrialsPerBagBlock: number;
  RewardStage: number;
  NFixations: number;
  FixationDuration: number;
  FixationMove: number;
  SampleOFF: number;
  KeepSampleON: number;
  TestOFF: number;
  KeepTestON: number;
  ChoiceGridIndex: number[];
  HideTestDistractors: number;
  HideChoiceDistractors: number;
  NStickyResponse: number;
  consecutiveHitsITI: number;
  NConsecutiveHitsforBonus: number;
  NRewardMax: number;
  FixationUsesSample: number;
  FixationSizeInches: number;
  ChoiceSizeInches: number;
  CheckRFID: number;
  Automator?: string;
  CurrentAutomatorStage?: number;
  CurrentAutomatorStageName?: string;
  MinPercentCriterion?: number;
  MinTrialsCriterion?: number;
  AutomatorFilePath?: number;
  ImageBagsSample: string[];
  ImageBagsTest: string[];
  BackgroundColor2D: string;
  FixationTimeOut: number;
  CalibrateEye: number;
  SamplingStrategy: string;
  NRSVP: number;
  GridXOffsetInches: number;
  GridYOffsetInches: number;
  SameDifferent: number;
  InterTrialInterval: number;
  DragtoRespond: number;
  SampleFixationSizeInches: number;
  ResearcherDisplayName?: string;
  ResearcherID?: string;
  ResearcherEmail?: string;
  USBDeviceType: string;
  USBDeviceName: string;
  Subject: string;
  AgentRFID: string;
  CurrentDate: string;
  CanvasRatio: number;
  DevicePixelRatio: number;
  ThreeJSRenderRatio: number;
  FixationRadius: number;
  FixationWinowRadius: number | null;
  FixationColor: string;
  FixationDotRadius: number | null;
  FixationDotColor: string;
  ChoiceRadius: number;
  ChoiceColor: string;
  XGridCenter: number[];
  YGridCenter: number[];
  RewardDuration: number;
  ParamFileName: string;
  ParamFileRev: string;
  ParamFileDate: string;
  DataFileName: string;
  FirestoreDocRoot: string;
  StagePctCorrect: number;
  StageNTrials: number;
  WebBluetoothAvailable: number;
  WebUSBAvailable: number;
  BatteryAPIAvailable: number;
  OffscreenCanvasAvailable: number;
  UserAgent: string;
  DeviceType: string;
  DeviceBrand: string;
  DeviceName: string;
  DeviceScreenWidth: number;
  DeviceScreenHeight: number;
  DeviceGPU?: string;
  DeviceBrowserName?: string;
  DeviceBrowserVersion?: string;
  DeviceOSName?: string;
  DeviceOSCodename?: string | null | undefined;
  DeviceOSVersion?: string;
  DeviceTouchScreen: number;
  ScreenRatio: number;
  ScreenSizePixels: number[];
  ScreenSizeInches: number[];
  ViewportPixels: number[];
  ViewportPPI: number;
  PhysicalPPI: number;
  FrameRateDisplay: number;
  FrameRateMovie: number;
  Task: string;
  Eye: Eye;
  ScreenPhysicalPixels: number[];
  sequenceblank: string[];
  tsequenceblank: number[];
  sequencepre: string[];
  tsequencepre: number[];
  sequencepost: string[];
  tsequencepost: number[];
  headsupfraction?: number;
  offsetleft: number;
  offsettop: number;
  workspace: number[];
  SampleOriginScreenPixels: { x: number; y: number };
  SampleTHREEJStoPixels: number;
  SampleTHREEJStoInches: number;
  SampleXGridCenterTHREEJS: number[];
  SampleYGridCenterTHREEJS: number[];
  TestOriginScreenPixels: { x: number; y: number };
  TestTHREEJStoPixels: number;
  TestTHREEJStoInches: number;
  TestXGridCenterTHREEJS: number[];
  TestYGridCenterTHREEJS: number[];
  SampleImageSetDir: string;
  SampleNouns: string[];
  SampleObjects: string[];
  SampleBagNames: string[];
  SampleBagIdx: number[];
  SampleImageIdx: number[];
  TestImageSetDir: string;
  TestNouns: string[];
  TestObjects: string[];
  TestBagNames: string[];
  TestBagIdx: number[];
  TestImageIdx: number[];
  SampleScenes: Scene[];
  TestScenes: Scene[];
  Sample: Record<number, number[]>;
  Test: Record<number, number[]>;
  CorrectItem: number[];
  StartTime: number[];
  ReinforcementTime: number[];
  EndTime: number[];
  SampleStartTime: number[];
  FixationTouchEvent: number[];
  FixationXYT: Record<number, number[]>;
  Response: number[];
  TSequenceDesiredClip: Record<number, number[]>;
  TSequenceActualClip: Record<number, number[]>;
  SampleFixationTouchEvent: any[];
  SampleFixationXYT: any;
  ResponseTouchEvent: string[];
  ResponseXYT: Record<number, number[]>;
  NReward: number[];
  Battery: Record<number, any[]>;
  RFIDTag: Record<number, any[]>;
  Weight?: any;
  FixationWindowSizeInches?: number;
  SampleCommandReturnTime: number[];
  SampleCommandOffReturnTime: number[];
  EyetrackerSampleInterval: number[];
}

interface Eye {
  TrackEye: number;
  EventType: string;
  timeOfLastGlanceInBB: number;
  BlinkGracePeriod: number;
  calibration: number;
  CalibXTransform: number[];
  CalibYTransform: number[];
  CalibType: string;
  NCalibPointsTrain: number;
  NCalibPointsTest: number;
  CalibTrainMSE: number[];
  CalibTestMSE: number[];
}

interface Scene {
  CAMERAS: Record<string, Camera>;
  LIGHTS: Record<string, Light>;
  OBJECTS: Record<string, ObjectInstance>;
  IMAGES: Image;
  nimages?: number;
  nbackgroundimages?: number;
}

interface Camera {
  type: string;
  fieldOfView: number;
  near: number;
  far: number;
  position: Coordinates;
  targetInches: Coordinates;
  visible: number[];
  positionInches: Coordinates;
  targetTHREEJS: Coordinates;
}

interface Light {
  type: string;
  color: string;
  intensity: number;
  position: Coordinates;
  visible: number[];
}

// TODO: find out types of morphTargetdelta & morphMultiplier
interface ObjectInstance {
  meshpath: string;
  objectdoc: string;
  sizeInches: number[];
  positionInches: Coordinates;
  rotationDegrees: Coordinates;
  material: Material;
  visible: number[] | number[][];
  intrinsicMeshBoundingBox?: number[];
  intrinsicMeshMaxDim: number;
  sizeTHREEJS?: number[];
  positionTHREEJS: Coordinates;
  morphTargetdelta?: any[];
  mortphMultiplier?: any[];
}

interface Image {
  sizeInches: number | number[];
  imagebag?: string | null | undefined;
  imageidx: number[];
}

interface Coordinates {
  x: number[] | number[][];
  y: number[] | number[][];
  z: number[] | number[][];
}

interface Material {
  type: string;
  color: string;
  metalness: number;
  roughness: number;
  reflectivity: number;
  opacity: number;
  transparent: boolean;
}
