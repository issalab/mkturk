export type Image = {
  name: string;
  bitmap: ImageBitmap;
};

export type Sample = {
  image: Image;
  numFrames: number;
};

export type Trial = Sample[];

export type TrialSequence = Trial[];

export type CurrentTrial = {
  trial: Trial;
  frameCounter: number;
  sampleIdxSeq: number[];
};
