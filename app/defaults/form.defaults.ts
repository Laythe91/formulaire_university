import { entrepriseDefaults } from "./entreprise.defaults";
import { operationDefaults } from "./operation.defaults";
import { conditionDefaults } from "./condition.defaults";
import { universityDefaults } from "./university.defaults";
import { inspectionDefaults } from "./inspection.defaults";
import { documentDefaults } from "./document.defaults";
import { headerDefaults } from "./header.default";
import { globalStateDefaults } from "./globalState.default";
import { riskDefaults } from "./risk.defaults";
import { SocialOfficeDefaults } from "./socialOffice.defaults";

export const formDefaults = {
  Header: headerDefaults,
  Entreprise: entrepriseDefaults,
  Operation: operationDefaults,
  Condition: conditionDefaults,
  UniversityInformation: universityDefaults,
  Inspection: inspectionDefaults,
  Document: documentDefaults,
  SocialOffice: SocialOfficeDefaults,
  Risk: riskDefaults,
  Global: globalStateDefaults,
};
