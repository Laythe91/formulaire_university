import { AmianteRiskType } from "./risk/amiante.type";
import { BruitRiskType } from "./risk/bruit.type";
import { ChuteHauteurRiskType } from "./risk/chuteHauteur.type";
import { ChuteMaterielRiskType } from "./risk/chuteMateriel.type";
import { ChutePiedRiskType } from "./risk/chutePied.type";
import { CirculationRiskType } from "./risk/circulation.type";
import { ElectriqueRiskType } from "./risk/electrique.type";
import { EspaceConfineRiskType } from "./risk/espaceConfine.type";
import { IncendieRiskType } from "./risk/incendie.type";
import { MachineRiskType } from "./risk/machine.type";

export type RiskType = {
  state: boolean;
  amiante: AmianteRiskType;
  bruit: BruitRiskType;
  chuteHauteur: ChuteHauteurRiskType;
  chuteMateriel: ChuteMaterielRiskType;
  chutePied: ChutePiedRiskType;
  circulation: CirculationRiskType;
  electrique: ElectriqueRiskType;
  espaceconfine: EspaceConfineRiskType;
  incendie: IncendieRiskType;
  machine: MachineRiskType;
};
