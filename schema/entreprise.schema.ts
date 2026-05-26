import { z } from "zod";

export const EntrepriseRenseignementSchema = z.object({
  state: z.boolean(),
  effectif1: z.string(),
  effectif2: z.string(),
  soustraitant: z.string(),
});

export const EntrepriseInformationSchema = z.object({
  state: z.boolean(),
});

export const EntreprisePersonneSchema = z.object({
  state: z.boolean(),

  checkbox: z.object({
    state: z.boolean(),
  }),

  name: z.string(),
  address: z.string(),
  effectif: z.string(),

  tel: z.string(),
  fax: z.string(),

  representant: z.object({
    name: z.string(),
    tel: z.string(),
    mail: z.string(),
  }),

  responsable: z.object({
    name: z.string(),
    tel: z.string(),
    mail: z.string(),
  }),
});

export const EntrepriseTypeSchema = z.object({
  renseignement: EntrepriseRenseignementSchema,
  titulaire: EntreprisePersonneSchema,
  soustraitante: z.array(EntreprisePersonneSchema),
  information: EntrepriseInformationSchema,
});
