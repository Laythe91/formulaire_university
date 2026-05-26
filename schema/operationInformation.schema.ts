import { z } from "zod";

export const OperationTypeSchema = z.object({
  state: z.boolean().default(false),
  annuel: z.object({
    state: z.boolean().default(false),
  }),

  ponctuel: z.object({
    state: z.boolean().default(false),
  }),

  plus400h: z.object({
    state: z.boolean().default(false),
  }),

  danger: z.object({
    state: z.boolean().default(false),
  }),

  date: z.object({
    start: z.string().optional(),
    end: z.string().optional(),
  }),

  objet: z.string().optional(),
});
