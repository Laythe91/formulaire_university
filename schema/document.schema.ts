import { z } from "zod";

export const DocumentTypeSchema = z.object({
  state: z.boolean(),

  planPrevention: z.object({
    state: z.boolean(),
  }),

  consigne: z.object({
    state: z.boolean(),
  }),

  planSite: z.object({
    state: z.boolean(),
  }),

  permisFeu: z.object({
    state: z.boolean(),
  }),

  dta: z.object({
    state: z.boolean(),
  }),
});
