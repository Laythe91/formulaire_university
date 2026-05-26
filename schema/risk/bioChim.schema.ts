import { z } from "zod";

export const BioChimRiskTypeSchema = z.object({
  checkbox: z.object({
    state: z.boolean(),
  }),

  global: z.object({
    state: z.boolean(),
  }),

  phase: z.object({
    "1": z.boolean(),
    "2": z.boolean(),
    "3": z.boolean(),
    "4": z.boolean(),
    "5": z.boolean(),
    "6": z.boolean(),
    "7": z.boolean(),
    "8": z.boolean(),
    "9": z.boolean(),
    "10": z.boolean(),
    "11": z.boolean(),
    "12": z.boolean(),
    "13": z.boolean(),
  }),

  mesure: z.object({
    "1": z.boolean(),
    "2": z.boolean(),
    "3": z.boolean(),
    "4": z.boolean(),
    "5": z.boolean(),
    "6": z.boolean(),
    "7": z.boolean(),
    "8": z.boolean(),
    "9": z.boolean(),
    "10": z.boolean(),
    "11": z.boolean(),
    "12": z.boolean(),
    "13": z.boolean(),
  }),

  universite: z.object({
    "1": z.boolean(),
    "2": z.boolean(),
    "3": z.boolean(),
    "4": z.boolean(),
    "5": z.boolean(),
    "6": z.boolean(),
    "7": z.boolean(),
    "8": z.boolean(),
    "9": z.boolean(),
    "10": z.boolean(),
    "11": z.boolean(),
    "12": z.boolean(),
    "13": z.boolean(),
  }),

  ee: z.object({
    "1": z.boolean(),
    "2": z.boolean(),
    "3": z.boolean(),
    "4": z.boolean(),
    "5": z.boolean(),
    "6": z.boolean(),
    "7": z.boolean(),
    "8": z.boolean(),
    "9": z.boolean(),
    "10": z.boolean(),
    "11": z.boolean(),
    "12": z.boolean(),
    "13": z.boolean(),
  }),

  observations: z.string(),
});
