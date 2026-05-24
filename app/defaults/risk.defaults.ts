import { RiskType } from "@/types/risk.types";
import { bruitDefaults } from "./risk/bruit.defaults";
import { amianteDefaults } from "./risk/amiante.defaults";
import { chuteHauteurDefaults } from "./risk/chuteHauteur.defaults";
import { chuteMaterielDefaults } from "./risk/chuteMateriel.defaults";
import { chutePiedDefaults } from "./risk/chutePied.defaults";
import { circulationRiskDefaults } from "./risk/circulation.defaults";
import { electriqueDefaults } from "./risk/electrique.defaults";
import { espaceConfineDefaults } from "./risk/espaceConfine.defaults";
import { incendieDefaults } from "./risk/incendie.defaults";
import { machineDefaults } from "./risk/machine.defaults";

export const riskDefaults: RiskType = {
  state: false,
  amiante: amianteDefaults,
  bruit: bruitDefaults,
  chuteHauteur: chuteHauteurDefaults,
  chuteMateriel: chuteMaterielDefaults,
  chutePied: chutePiedDefaults,
  circulation: circulationRiskDefaults,
  electrique: electriqueDefaults,
  espaceconfine: espaceConfineDefaults,
  incendie: incendieDefaults,
  machine: machineDefaults,
};
