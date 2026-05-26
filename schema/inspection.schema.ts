import { z } from "zod";

export const InspectionTypeSchema = z.object({
  state: z.boolean(),

  date: z.string(),

  university: z.string(),

  titulaire: z.string(),

  soustraitant: z.array(z.string()),
});
