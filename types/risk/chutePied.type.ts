export type ChutePiedGlobalType = {
  state: boolean;
};

export type ChutePiedRiskType = {
  checkbox: {
    state: boolean;
  };

  global: ChutePiedGlobalType;

  phase: {
    "1": boolean;
    "2": boolean;
  };

  mesure: {
    "1": boolean;
    "2": boolean;
    "3": boolean;
    "4": boolean;
  };

  universite: {
    "1": boolean;
    "2": boolean;
    "3": boolean;
    "4": boolean;
  };

  ee: {
    "1": boolean;
    "2": boolean;
    "3": boolean;
    "4": boolean;
  };

  observations: string;
};
