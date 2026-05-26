import { z } from "zod";

export const BruitGlobalTypeSchema = z.object({
  state: z.boolean(),
});

export const BruitRiskTypeSchema = z.object({
  checkbox: z.object({
    state: z.boolean(),
  }),

  global: BruitGlobalTypeSchema,

  phase: z.object({
    "1": z.boolean(),
    "2": z.boolean(),
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
