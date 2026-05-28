import { z } from "zod";

import { EntrepriseTypeSchema } from "./entreprise.schema";
import { OperationTypeSchema } from "./operationInformation.schema";
import { ConditionTypeSchema } from "./condition.schema";
import { UniversityInformationTypeSchema } from "./informationUniversity.schema";
import { InspectionTypeSchema } from "./inspection.schema";
import { DocumentTypeSchema } from "./document.schema";
import { HeaderTypeSchema } from "./header.schema";
//import { GlobalStateTypeSchema } from "./globalState.schema";
import { RiskTypeSchema } from "./risk.schema";
import { SocialOfficeSchema } from "./socialOffice.schema";

export const schema = z.object({
  Header: HeaderTypeSchema,
  Entreprise: EntrepriseTypeSchema,
  Operation: OperationTypeSchema,
  Condition: ConditionTypeSchema,
  UniversityInformation: UniversityInformationTypeSchema,
  Inspection: InspectionTypeSchema,
  SocialOffice: SocialOfficeSchema,
  Risk: RiskTypeSchema,
  Document: DocumentTypeSchema,
  //Global: GlobalStateTypeSchema,
});
