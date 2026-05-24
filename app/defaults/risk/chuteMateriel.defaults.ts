import { ChuteMaterielRiskType } from "@/types/risk/chuteMateriel.type";

export const chuteMaterielDefaults: ChuteMaterielRiskType = {
  checkbox: {
    state: false,
  },

  global: {
    state: false,
  },

  phase: {
    "1": false,
    "2": false,
    "3": false,
    "4": false,
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
