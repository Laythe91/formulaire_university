import { z } from "zod";

export const ChuteMaterielGlobalTypeSchema = z.object({
  state: z.boolean(),
});

export const ChuteMaterielRiskTypeSchema = z.object({
  checkbox: z.object({
    state: z.boolean(),
  }),

  global: ChuteMaterielGlobalTypeSchema,

  phase: z.object({
    "1": z.boolean(),
    "2": z.boolean(),
    "3": z.boolean(),
    "4": z.boolean(),
  }),

  mesure: z.object({
    "1": z.boolean(),
    "2": z.boolean(),
  }),

  universite: z.object({
    "1": z.boolean(),
    "2": z.boolean(),
  }),

  ee: z.object({
    "1": z.boolean(),
    "2": z.boolean(),
  }),

  observations: z.string(),
});
