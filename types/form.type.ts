import { EntrepriseType } from "./entreprise.type";
import { OperationType } from "./operation.type";
import { ConditionType } from "./condition.type";
import { UniversityInformationType } from "./university.type";
import { InspectionType } from "./inspection.type";
import { DocumentType } from "./document.type";
import { HeaderType } from "./header.type";
import { GlobalStateType } from "./globalState.type";
import { RiskType } from "./risk.types";

export type FormData = {
  Header: HeaderType;
  Entreprise: EntrepriseType;
  Operation: OperationType;
  Condition: ConditionType;
  UniversityInformation: UniversityInformationType;
  Inspection: InspectionType;
  Risk: RiskType;
  Document: DocumentType;
  Global: GlobalStateType;
};
