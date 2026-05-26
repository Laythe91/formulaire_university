import { z } from "zod";

export const EspaceConfineGlobalTypeSchema = z.object({
  state: z.boolean(),
});

export const EspaceConfineRiskTypeSchema = z.object({
  checkbox: z.object({
    state: z.boolean(),
  }),

  global: EspaceConfineGlobalTypeSchema,

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
  }),

  universite: z.object({
    "1": z.boolean(),
    "2": z.boolean(),
    "3": z.boolean(),
    "4": z.boolean(),
    "5": z.boolean(),
  }),

  ee: z.object({
    "1": z.boolean(),
    "2": z.boolean(),
    "3": z.boolean(),
    "4": z.boolean(),
    "5": z.boolean(),
  }),

  observations: z.string(),
});
