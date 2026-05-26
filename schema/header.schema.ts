import { z } from "zod";

export const HeaderTypeSchema = z.object({
  state: z.boolean(),

  date: z.string(),

  planNumber: z.object({
    value: z.string(),
    state: z.boolean(),
  }),
});
