// types/risk/bruit.type.ts

export type BruitGlobalType = {
  state: boolean;
};

export type BruitRiskType = {
  checkbox: {
    state: boolean;
  };

  global: BruitGlobalType;

  phase: {
    "1": boolean;
    "2": boolean;
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
