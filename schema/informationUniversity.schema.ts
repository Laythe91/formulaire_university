import { z } from "zod";

const phoneRegex = /^(\d{2}\.){4}\d{2}$/;

export const informationUniversitySchema = z.object({
  nom: z.string().min(1, "Nom du donneur d'ordre obligatoire"),

  phone1: z
    .string()
    .min(1, "Téléphone obligatoire")
    .regex(phoneRegex, "Format téléphone invalide"),

  phone2: z
    .string()
    .min(1, "Téléphone obligatoire")
    .regex(phoneRegex, "Format téléphone invalide"),
});
