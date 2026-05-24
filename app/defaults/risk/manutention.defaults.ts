import { ManutentionRiskType } from "@/types/risk/manutention.type";

export const manutentionDefaults: ManutentionRiskType = {
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
