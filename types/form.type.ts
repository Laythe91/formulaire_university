import { EntrepriseType } from "./entreprise.type";
import { OperationType } from "./operation.type";
import { ConditionType } from "./condition.type";
import { UniversityInformationType } from "./university.type";
import { InspectionType } from "./inspection.type";
import { DocumentType } from "./document.type";

export type FormData = {
  Entreprise: EntrepriseType;
  Operation: OperationType;
  Condition: ConditionType;
  UniversityInformation: UniversityInformationType;
  Inspection: InspectionType;
  Document: DocumentType;
};
