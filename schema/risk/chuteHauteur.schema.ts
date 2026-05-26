import { z } from "zod";

export const ChuteHauteurGlobalTypeSchema = z.object({
  state: z.boolean(),
});

export const ChuteHauteurRiskTypeSchema = z.object({
  checkbox: z.object({
    state: z.boolean(),
  }),

  global: ChuteHauteurGlobalTypeSchema,

  phase: z.object({
    "1": z.boolean(),
    "2": z.boolean(),
    "3": z.boolean(),
    "4": z.boolean(),
  }),

  mesure: z.object({
    "1": z.boolean(),
    "2": z.boolean(),
    "3": z.boolean(),
    "4": z.boolean(),
    "5": z.boolean(),
    "6": z.boolean(),
  }),

  universite: z.object({
    "1": z.boolean(),
    "2": z.boolean(),
    "3": z.boolean(),
    "4": z.boolean(),
    "5": z.boolean(),
    "6": z.boolean(),
  }),

  ee: z.object({
    "1": z.boolean(),
    "2": z.boolean(),
    "3": z.boolean(),
    "4": z.boolean(),
    "5": z.boolean(),
    "6": z.boolean(),
  }),

  observations: z.string(),
});
