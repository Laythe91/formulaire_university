// types/risk/incendie.type.ts

export type IncendieGlobalType = {
  state: boolean;
};

export type IncendieRiskType = {
  checkbox: {
    state: boolean;
  };

  global: IncendieGlobalType;

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
    "6": boolean;
    "7": boolean;
  };

  universite: {
    "1": boolean;
    "2": boolean;
    "3": boolean;
    "4": boolean;
    "5": boolean;
    "6": boolean;
    "7": boolean;
  };

  ee: {
    "1": boolean;
    "2": boolean;
    "3": boolean;
    "4": boolean;
    "5": boolean;
    "6": boolean;
    "7": boolean;
  };

  observations: string;
};
