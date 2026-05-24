export type ChuteMaterielGlobalType = {
  state: boolean;
};

export type ChuteMaterielRiskType = {
  checkbox: {
    state: boolean;
  };

  global: ChuteMaterielGlobalType;

  phase: {
    "1": boolean;
    "2": boolean;
    "3": boolean;
    "4": boolean;
  };

  mesure: {
    "1": boolean;
    "2": boolean;
  };

  universite: {
    "1": boolean;
    "2": boolean;
  };

  ee: {
    "1": boolean;
    "2": boolean;
  };

  observations: string;
};
