import { z } from "zod";

export const entrepriseSchema = z.object({
  titulaire: z.object({
    name: z.string().min(2, "Entreprise obligatoire"),
  }),
});
