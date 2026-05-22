import { z } from "zod";
import { entrepriseSchema } from "./entreprise.schema";
import { operationSchema } from "./operationInformation.schema";
import { informationUniversitySchema } from "./informationUniversity.schema";
import { executionConditionSchema } from "./executionCondition.schema";

export const schema = z.object({
  Entreprise: entrepriseSchema,
  Operation: operationSchema,
  Condition: executionConditionSchema,
  UniversityInformation: informationUniversitySchema,
});
