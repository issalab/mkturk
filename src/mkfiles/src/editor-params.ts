export const taskParamSchema = {
  title: 'MkTurk Task Params',
  description: 'Object containing MkTurk task parameters',
  type: ['object', 'array','string'],
  properties: {
    Agent: {
      type: 'string',
      examples: ['SaveImages'],
    },
    Species: {
      type: 'string',
      examples: ['human', 'marmoset', 'model'],
    },
    NGridPoints: {
      type: 'integer',
      minimum: 1,
    },
    GridSpacingInches: {
      type: 'number',
    },
    FixationGridIndex: {
      type: 'integer',
      minimum: -1,
    },
    FixationSizeInches: {
      type: 'number',
    },
    RewardDuration: {
      type: 'integer',
      minimum: 0,
      examples: ['in milliseconds'],
    },
    PunishTimeOut: {
      type: 'integer',
      minimum: 0,
      examples: ['in milliseconds'],
    },
    RewardStage: {
      type: 'integer',
      default: 0,
      examples: ['0 (fixation)','1 (sample or choice)'],
    },
    NRSVP: {
      type: 'integer',
      default: 0,
      examples: ['# of movie clips to show in rsvp sequence'],
    },
    SameDifferent: {
      type: 'integer',
      default: 0,
    },
    VisualSearch: {
      type: 'integer',
      default: 0,
      examples: ['0 (random choice from test bag)','1 (select test image with same index as sample image)'],
    },
    ImageBagsSample: {
      type: 'array',
      default: '/mkturkfiles/scenebags/objectome3d/camel/20200709_camel_token.js, /mkturkfiles/scenebags/objectome3d/wrench/20200709_wrench_token.js',
      items: {
        type: 'string',
      },
    },
    ImageBagsTest: {
      type: 'array',
      default: '/mkturkfiles/scenebags/objectome3d/camel/20200709_camel_token.js, /mkturkfiles/scenebags/objectome3d/wrench/20200709_wrench_token.js',
      items: {
        type: 'string',
      },
    },
    SamplingStrategy: {
      type: 'string',
      default: 'uniform_with_replacement',
      examples: ['uniform_with_replacement','uniform_without_replacement','sequential'],
    },
    Target:{
      type: 'string',
      default: 'object',
      examples: ['gridwindow','objectwindow','object (default)','scene'],
    },
    BackgroundColor2D: {
      type: 'string',
      default: '#7F7F7F',
      examples: ['#000000 (black)','#FFFFFF (white)'],
    },
    BlinkGracePeriod:{
      type: 'integer',
      default: '200',
      examples: ['in milliseconds'],
    },
    BQSaveDisplayTimes: {
      type: 'integer',
      default: '1',
    },
    BQSaveEye: {
      type: 'integer',
      default: '1',
    },
    BQSaveTouch: {
      type: 'integer',
      default: '1',
    },
    CalibrateEye: {
      type: 'integer',
      default: '0',
      examples: ['0 (do not calibrate)','n (calibrate after n trials)'],
    },
    CalibrateEyeCrossTerms: {
      type: 'integer',
      default: '0',
      examples: ['0 (do not calibrate with crossterms)','>0 (calibrate with crossterms)'],
    },
    CheckRFID: {
      type: 'integer',
      default: '0',
    },
    ChoiceGridIndex: {
      type: 'array',
      items: {
        type: 'integer',
        minimum: 0,
      },
      default: '[0,1]',
      examples: ['[m,n] --> [location of same circle, location of different square]'],
    },
    ChoiceOutsideGracePeriod: {
      type: 'integer',
      default: 'TASK.ChoiceTimeOut+1',
      examples: ['>TASK.ChoiceTimeOut (do not punish outside target)'],
    },
    ChoiceSizeInches: {
      type: 'number',
      default: '1',
    },
    ChoiceTimeOut: {
      type: 'integer',
      default: '5000',
    },
    DeviceConfig: {
      type: 'string',
      default: 'empty string',
    },
    FixationDotSizeInches: {
      type: 'number',
      default: '0',
      examples: ['>0 (overlays white fixation square'],
    },
    FixationDuration: {
      type: 'integer',
      minimum: 0,
      examples: ['in milliseconds (duration of fixation hold)'],
    },
    FixationOutsideGracePeriod: {
      type: 'integer',
      default: '0',
      examples: ['0 (punish outside fixation dot'],
    },
    FixationTimeOut: {
      type: 'integer',
      default: '3000',
      examples: ['in milliseconds'],
    },
    FixationUsesSample: {
      type: 'integer',
      default: '0',
      examples: ['0 (blue fixation circle is shown','1 (sample image is shown)'],
    },
    FixationWindowSizeInches: {
      type: 'number',
      default: '0',
    },
    GridXOffsetInches: {
      type: 'number',
      default: '0',
    },
    GridYOffsetInches: {
      type: 'number',
      default: '0',
    },
    HeadsupDisplayFraction: {
      type: 'number',
      default: 0,
      examples: ['places black region with text at top of screen'],
    },
    HideChoiceDistractors: {
      type: 'integer',
      default: '0',
      examples: ['1 (hides the same or different button so that only correct option is available)'],
    },
    HideTestDistractors: {
      type: 'integer',
      default: '0',
      examples: ['1 (hides the distractor choices so that only correct option is available)'],
    },
    InterTrialInterval: {
      type: 'integer',
      minimum: 0,
      default: '0',
      examples: ['in milliseconds'],
    },
    KeepSampleON: {
      type: 'integer',
      default: '0',
      examples: ['0 (extinguish sample before test/choice), 1 (sample stays on for test/choice)'],
    },
    KeepTestON: {
      type: 'integer',
      default: '0',
      examples: ['0 (test only present for testON ms), 1 (test remains for choice screen)'],
    },
    MinTrialDuration_AfterSampleCommandTrigger:{
      type: 'integer',
      default: '-1',
    },
    NConsecutiveHitsforBonus: {
      type: 'integer',
      default: 0,
    },
    NFixations: {
      type: 'integer',
      default: 1,
      examples: ['n (subject has to press fixation n times to initiate sample presentation'],
    },
    NMillisecondsPerBagBlock:{
      type: 'integer',
      default: '0',
      examples: ['overrides NStimuliPerBagBlock'],
    },
    NRewardMax: {
      type: 'integer',
      default: 1,
      examples: ['1 (no bonus reward possible)','n (max rewards possible per trial)']
    },
    NRSVPMax: {
      type: 'integer',
      default: 0,
      examples: ['0 (no exponential reward for fixating NRSVP seq)','>NRSVP (exponentially more reward pulses after NRSVP, 1 pulse for NRSVP)'],
    },
    NStickyResponse: {
      type: 'integer',
      default: 0,
      examples: ['0 (subject can repeatedly choose a given response over trials','n (after n, the neglected choice is set as correct until selected)'],
    },
    NStimuliPerBagBlock: {
      type: 'integer',
      default: '0',
    },
    ObjectGridIndex: {
      type: 'array',
      items: {
        type: 'integer',
        minimum: 0,
      },
      default: '[]',
      examples: ['array of location of each object class in ImageBagsTest array'],
    },
    Photodiode: {
      type: 'integer',
      default: 1,
    },
    SampleGridIndex: {
      type: 'integer',
      default: '=FixationGridIndex',
      examples: ['<0 (sample appears at a randomly selected grid location)'],
    },
    SampleOFF: {
      type: 'integer',
      default: '0',
      examples: ['in milliseconds'],
    },
    SampleOutsideGracePeriod: {
      type: 'integer',
      default: '0',
      examples: ['0 (punish outside sample targets', '>0 milliseconds (after sample onset, time allowed to view any location without punish'],
    },
    SamplePRE: {
      type: 'integer',
      default: '0',
      examples: ['in milliseconds'],
    },
    SaveImagesResolution: {
      type: 'integer',
      default: '0',
      examples: ['0 (full 3js window)','N (N x N pixels)'],
    },
    TestGridIndex: {
      type: 'array',
      items: {
        type: 'integer',
        minimum: 0,
      },
      default: '[0,1]',
      examples: ['length n array (N-way task)'],
    },
    TestOFF: {
      type: 'integer',
      default: '0',
      examples: ['in milliseconds'],
    },
    THREEJSCameraFOV: {
      type: 'integer',
      default: '45',
      examples: ['degrees'],
    },
    THREEJSCameraZDist: {
      type: 'integer',
      default: '10',
      examples: ['in 3js units'],
    },
    THREEJSRenderRatio: {
      type: 'integer',
      default: '2',
      examples: ['how much to upsample for rendering to 2D canvas'],
    },
    Automator: {
      type: ['string', 'integer'],
      default: '0',
    },
    AutomatorFilePath: {
      type: 'string',
      default: '',
      examples: [
        '/mkturkfiles/paramterfiles/automators/touch_m2s_objectome.json',
      ],
    },
    CurrentAutomatorStage: {
      type: 'integer',
      default: '0',
    },
    MinPercentCriterion: {
      type: 'integer',
      default: '0',
    },
    MinTrialsCriterion: {
      type: 'integer',
      default: '0',
    },
  },
};