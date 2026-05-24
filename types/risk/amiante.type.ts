// types/risk/amiante.type.ts

export type AmianteGlobalType = {
  state: boolean;
};

export type AmianteRiskType = {
  checkbox: {
    state: boolean;
  };

  global: AmianteGlobalType;

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
