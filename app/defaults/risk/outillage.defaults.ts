import { OutillageRiskType } from "@/types/risk/outillage.type";

export const outillageDefaults: OutillageRiskType = {
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
    "3": false,
    "4": false,
  },

  universite: {
    "1": false,
    "2": false,
    "3": false,
    "4": false,
  },

  ee: {
    "1": false,
    "2": false,
    "3": false,
    "4": false,
  },

  observations: "",
};
