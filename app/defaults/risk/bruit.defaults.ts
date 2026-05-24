// defaults/risk/bruit.default.ts

import { BruitRiskType } from "@/types/risk/bruit.type";

export const bruitDefaults: BruitRiskType = {
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
