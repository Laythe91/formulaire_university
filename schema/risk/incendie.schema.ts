import { z } from "zod";

export const IncendieGlobalTypeSchema = z.object({
  state: z.boolean(),
});

export const IncendieRiskTypeSchema = z.object({
  checkbox: z.object({
    state: z.boolean(),
  }),

  global: IncendieGlobalTypeSchema,

  phase: z.object({
    "1": z.boolean(),
    "2": z.boolean(),
    "3": z.boolean(),
  }),

  mesure: z.object({
    "1": z.boolean(),
    "2": z.boolean(),
    "3": z.boolean(),
    "4": z.boolean(),
    "5": z.boolean(),
    "6": z.boolean(),
    "7": z.boolean(),
  }),

  universite: z.object({
    "1": z.boolean(),
    "2": z.boolean(),
    "3": z.boolean(),
    "4": z.boolean(),
    "5": z.boolean(),
    "6": z.boolean(),
    "7": z.boolean(),
  }),

  ee: z.object({
    "1": z.boolean(),
    "2": z.boolean(),
    "3": z.boolean(),
    "4": z.boolean(),
    "5": z.boolean(),
    "6": z.boolean(),
    "7": z.boolean(),
  }),

  observations: z.string(),
});
