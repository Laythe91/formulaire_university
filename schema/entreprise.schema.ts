import { z } from "zod";

const phoneRegex = /^(\d{2}\.){4}\d{2}$/;

export const entrepriseSchema = z.object({
  renseignement: z.object({
    state: z.boolean().default(false),

    effectif1: z.string().regex(/^\d+$/, "Nombre invalide"),

    effectif2: z.string().regex(/^\d+$/, "Nombre invalide"),
  }),
  titulaire: z.object({
    state: z.boolean().default(false),

    checkbox: z.object({
      state: z.boolean().default(false),
    }),

    name: z.string().min(2),
    address: z.string().min(5),
    effectif: z.string().min(1),

    tel: z.string().regex(phoneRegex),
    fax: z.string().regex(phoneRegex),

    representant: z.object({
      name: z.string().min(2),
      tel: z.string().regex(phoneRegex),
      mail: z.string().email(),
    }),

    responsable: z.object({
      name: z.string().min(2),
      tel: z.string().regex(phoneRegex),
      mail: z.string().email(),
    }),
  }),

  soustraitante: z.object({
    state: z.boolean().default(false),

    checkbox: z.object({
      state: z.boolean().default(false),
    }),

    name: z.string().min(2),
    address: z.string().min(5),
    effectif: z.string().min(1),

    tel: z.string().regex(phoneRegex),
    fax: z.string().regex(phoneRegex),

    representant: z.object({
      name: z.string().min(2),
      tel: z.string().regex(phoneRegex),
      mail: z.string().email(),
    }),

    responsable: z.object({
      name: z.string().min(2),
      tel: z.string().regex(phoneRegex),
      mail: z.string().email(),
    }),
  }),
});
