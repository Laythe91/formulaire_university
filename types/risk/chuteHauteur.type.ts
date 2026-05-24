export type ChuteHauteurGlobalType = {
  state: boolean;
};

export type ChuteHauteurRiskType = {
  checkbox: {
    state: boolean;
  };

  global: ChuteHauteurGlobalType;

  phase: {
    "1": boolean;
    "2": boolean;
    "3": boolean;
    "4": boolean;
  };

  mesure: {
    "1": boolean;
    "2": boolean;
    "3": boolean;
    "4": boolean;
    "5": boolean;
    "6": boolean;
  };

  universite: {
    "1": boolean;
    "2": boolean;
    "3": boolean;
    "4": boolean;
    "5": boolean;
    "6": boolean;
  };

  ee: {
    "1": boolean;
    "2": boolean;
    "3": boolean;
    "4": boolean;
    "5": boolean;
    "6": boolean;
  };

  observations: string;
};
