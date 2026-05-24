export type CirculationRiskType = {
  checkbox: {
    state: boolean;
  };

  state: boolean;

  global: {
    state: boolean;
  };

  phase: {
    1: boolean;
    2: boolean;
    3: boolean;
  };

  mesure: {
    1: boolean;
    2: boolean;
    3: boolean;
  };

  universite: {
    1: boolean;
    2: boolean;
    3: boolean;
  };

  ee: {
    1: boolean;
    2: boolean;
    3: boolean;
  };

  observations: string;
};
