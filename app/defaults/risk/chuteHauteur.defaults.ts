import { ChuteHauteurRiskType } from "@/types/risk/chuteHauteur.type";

export const chuteHauteurDefaults: ChuteHauteurRiskType = {
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
    "3": false,
    "4": false,
    "5": false,
    "6": false,
  },

  universite: {
    "1": false,
    "2": false,
    "3": false,
    "4": false,
    "5": false,
    "6": false,
  },

  ee: {
    "1": false,
    "2": false,
    "3": false,
    "4": false,
    "5": false,
    "6": false,
  },

  observations: "",
};
