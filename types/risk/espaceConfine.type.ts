export type EspaceConfineGlobalType = {
  state: boolean;
};

export type EspaceConfineRiskType = {
  checkbox: {
    state: boolean;
  };

  global: EspaceConfineGlobalType;

  phase: {
    "1": boolean;
    "2": boolean;
    "3": boolean;
  };

  mesure: {
    "1": boolean;
    "2": boolean;
    "3": boolean;
    "4": boolean;
    "5": boolean;
  };

  universite: {
    "1": boolean;
    "2": boolean;
    "3": boolean;
    "4": boolean;
    "5": boolean;
  };

  ee: {
    "1": boolean;
    "2": boolean;
    "3": boolean;
    "4": boolean;
    "5": boolean;
  };

  observations: string;
};
