export type OutillageRiskType = {
  checkbox: {
    state: boolean;
  };

  global: {
    state: boolean;
  };

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
