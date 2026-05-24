export type MachineRiskType = {
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
