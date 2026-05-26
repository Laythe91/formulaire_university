import { z } from "zod";

import { AmianteRiskTypeSchema } from "./risk/amiante.schema";
import { BruitRiskTypeSchema } from "./risk/bruit.schema";
import { BioChimRiskTypeSchema } from "./risk/bioChim.schema";
import { ChuteHauteurRiskTypeSchema } from "./risk/chuteHauteur.schema";
import { ChuteMaterielRiskTypeSchema } from "./risk/chuteMateriel.schema";
import { ChutePiedRiskTypeSchema } from "./risk/chutePied.schema";
import { CirculationRiskTypeSchema } from "./risk/circulation.schema";
import { ElectriqueRiskTypeSchema } from "./risk/electrique.schema";
import { EspaceConfineRiskTypeSchema } from "./risk/espaceConfine.schema";
import { IncendieRiskTypeSchema } from "./risk/incendie.schema";
import { MachineRiskTypeSchema } from "./risk/machine.schema";
import { ManutentionRiskTypeSchema } from "./risk/manutention.schema";
import { OutillageRiskTypeSchema } from "./risk/outillage.schema";

export const RiskTypeSchema = z.object({
  state: z.boolean(),

  amiante: AmianteRiskTypeSchema,
  bruit: BruitRiskTypeSchema,
  chuteHauteur: ChuteHauteurRiskTypeSchema,
  chuteMateriel: ChuteMaterielRiskTypeSchema,
  chutePied: ChutePiedRiskTypeSchema,
  circulation: CirculationRiskTypeSchema,
  electrique: ElectriqueRiskTypeSchema,
  espaceconfine: EspaceConfineRiskTypeSchema,
  incendie: IncendieRiskTypeSchema,
  machine: MachineRiskTypeSchema,
  manutention: ManutentionRiskTypeSchema,
  outillage: OutillageRiskTypeSchema,
  bioChim: BioChimRiskTypeSchema,
});
