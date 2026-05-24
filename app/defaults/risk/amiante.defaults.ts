import { AmianteRiskType } from "@/types/risk/amiante.type";

export const amianteDefaults: AmianteRiskType = {
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
  },

  mesure: {
    "1": false,
    "2": false,
    "3": false,
    "4": false,
    "5": false,
  },

  universite: {
    "1": false,
    "2": false,
    "3": false,
    "4": false,
    "5": false,
  },

  ee: {
    "1": false,
    "2": false,
    "3": false,
    "4": false,
    "5": false,
  },

  observations: "",
};
