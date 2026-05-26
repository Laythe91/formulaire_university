import { z } from "zod";

export const ConditionTypeSchema = z.object({
  "1": z.object({
    state: z.boolean().default(false),
  }),

  "2": z.object({
    state: z.boolean().default(false),
  }),

  "3": z.object({
    state: z.boolean().default(false),
  }),

  "4": z.object({
    state: z.boolean().default(false),
  }),

  "5": z.object({
    state: z.boolean().default(false),
  }),

  "6": z.object({
    state: z.boolean().default(false),
  }),

  state: z.boolean().default(false), // GLOBAL
});
