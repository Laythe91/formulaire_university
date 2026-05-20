import { useFormContext } from "react-hook-form";
import RiskChoices from "./Risks/RiskChoices";
import CirculationRisk from "./Risks/CirculationRisk";
import BruitRisk from "./Risks/Bruit";
import ChutePlainPiedRisk from "./Risks/ChutePlainPied";
import ChuteHauteurRisk from "./Risks/ChuteHauteur";
import ChuteMaterielRisk from "./Risks/ChuteMateriel";
import Manutention from "./Risks/ManutentionManuelMecanique";
import MachineRisk from "./Risks/Machine";
import ElectricRisk from "./Risks/ElectricRisk";
import OutillageRisk from "./Risks/OutillageRisk";
import IncendieRisk from "./Risks/IncendieRisk";
import BioChimRisk from "./Risks/BioChimRisk";

export default function RiskSection() {
  const { register, watch } = useFormContext();
  const circulation = watch("risques.circulation.state");
  const bruit = watch("risques.bruit.state");
  const chutePlainPied = watch("risques.chutePied.state");
  const chuteHauteur = watch("risques.chuteHauteur.state");
  const chuteMateriel = watch("risques.chuteMateriel.state");
  const manutention = watch("risques.manuelMeca.state");
  const machine = watch("risques.machine.state");
  const electric = watch("risques.electrique.state");
  const outillage = watch("risques.outillage.state");
  const incendie = watch("risques.incendie.state");
  const bioChim = watch("risques.bioChim.state");

  return (
    <div className="mt-5 ">
      <h2 className="font-bold underline uppercase text-center text-xl">
        Analyse des risque Pendant l'opération
      </h2>
      <RiskChoices />

      {bruit && <BruitRisk />}
      {chuteHauteur && <ChuteHauteurRisk />}
      {chuteMateriel && <ChuteMaterielRisk />}
      {chutePlainPied && <ChutePlainPiedRisk />}
      {circulation && <CirculationRisk />}
      {electric && <ElectricRisk />}
      {incendie && <IncendieRisk />}
      {machine && <MachineRisk />}
      {manutention && <Manutention />}
      {outillage && <OutillageRisk />}
      {bioChim && <BioChimRisk />}
    </div>
  );
}
