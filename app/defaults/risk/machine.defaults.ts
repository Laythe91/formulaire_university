import { MachineRiskType } from "@/types/risk/machine.type";

export const machineDefaults: MachineRiskType = {
  checkbox: {
    state: false,
  },

  global: {
    state: false,
  },

  phase: {
    "1": false,
    "2": false,
  },

  mesure: {
    "1": false,
    "2": false,
  },

  universite: {
    "1": false,
    "2": false,
  },

  ee: {
    "1": false,
    "2": false,
  },

  observations: "",
};
