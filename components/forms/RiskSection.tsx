import { useFormContext } from "react-hook-form";
import RiskChoices from "./Risks/RiskChoices";
import CirculationRisk from "./Risks/CirculationRisk";
import BruitRisk from "./Risks/BruitRisk";
import ChutePlainPiedRisk from "./Risks/ChutePlainPiedRisk";
import ChuteHauteurRisk from "./Risks/ChuteHauteurRisk";
import ChuteMaterielRisk from "./Risks/ChuteMaterielRisk";
import MachineRisk from "./Risks/MachineRisk";
import ElectricRisk from "./Risks/ElectricRisk";
import OutillageRisk from "./Risks/OutillageRisk";
import IncendieRisk from "./Risks/IncendieRisk";
import BioChimRisk from "./Risks/BioChimRisk";
import EspaceConfinesRisk from "./Risks/EspacesConfinesRisk";
import AmianteRisk from "./Risks/AmianteRisk";
import { useEffect } from "react";
import Manutention from "./Risks/ManutentionManuelMecanique";

export default function RiskSection() {
  const { register, watch, setValue } = useFormContext();

  //Risque coché
  const amianteChecked = watch("Risk.amiante.checkbox.state");
  const circulationChecked = watch("Risk.circulation.checkbox.state");
  const bioChimChecked = watch("Risk.bioChim.checkbox.state");
  const bruitChecked = watch("Risk.bruit.checkbox.state");
  const chuteHauteurChecked = watch("Risk.chuteHauteur.checkbox.state");
  const chuteMaterielChecked = watch("Risk.chuteMateriel.checkbox.state");
  const chutePiedChecked = watch("Risk.chutePied.checkbox.state");
  const electricChecked = watch("Risk.electrique.checkbox.state");
  const espaceconfineChecked = watch("Risk.espaceconfine.checkbox.state");
  const incendieChecked = watch("Risk.incendie.checkbox.state");
  const machineChecked = watch("Risk.machine.checkbox.state");
  const manutentionChecked = watch("Risk.manutention.checkbox.state");
  const outillageChecked = watch("Risk.outillage.checkbox.state");

  const amianteValid = watch("Risk.amiante.global.state");
  const bruitValid = watch("Risk.bruit.global.state");
  const circulationValid = watch("Risk.circulation.global.state");
  const chuteHauteurValid = watch("Risk.chuteHauteur.global.state");
  const chuteMaterielValid = watch("Risk.chuteMateriel.global.state");
  const chutePiedValid = watch("Risk.chutePied.global.state");
  const electricValid = watch("Risk.electrique.global.state");
  const espaceconfineValid = watch("Risk.espaceconfine.global.state");
  const incendieValid = watch("Risk.incendie.global.state");
  const machineValid = watch("Risk.machine.global.state");
  const manutentionValid = watch("Risk.manutention.global.state");
  const outillageValid = watch("Risk.outillage.global.state");
  const bioChimValid = watch("Risk.bioChim.global.state");

  useEffect(() => {
    const validations = [];

    if (amianteChecked) validations.push(!!amianteValid);
    if (bioChimChecked) validations.push(!!bioChimValid);
    if (bruitChecked) validations.push(!!bruitValid);
    if (circulationChecked) validations.push(!!circulationValid);
    if (chuteHauteurChecked) validations.push(!!chuteHauteurValid);
    if (chuteMaterielChecked) validations.push(!!chuteMaterielValid);
    if (chutePiedChecked) validations.push(!!chutePiedValid);
    if (electricChecked) validations.push(!!electricValid);
    if (espaceconfineChecked) validations.push(!!espaceconfineValid);
    if (incendieChecked) validations.push(!!incendieValid);
    if (machineChecked) validations.push(!!machineValid);
    if (manutentionChecked) validations.push(!!manutentionValid);
    if (outillageChecked) validations.push(!!outillageValid);

    const riskSectionValid =
      validations.length > 0 && validations.every((v) => v === true);

    setValue("Risk.state", riskSectionValid);
  }, [
    amianteChecked,
    bioChimChecked,
    bruitChecked,
    circulationChecked,
    chuteHauteurChecked,
    chuteMaterielChecked,
    chutePiedChecked,
    electricChecked,
    espaceconfineChecked,
    incendieChecked,
    machineChecked,
    manutentionChecked,
    outillageChecked,

    amianteValid,
    bioChimValid,
    bruitValid,
    circulationValid,
    chuteHauteurValid,
    chuteMaterielValid,
    chutePiedValid,
    electricValid,
    espaceconfineValid,
    incendieValid,
    machineValid,
    manutentionValid,
    outillageValid,
  ]);

  return (
    <div className="mt-5 ">
      <h2 className="font-bold underline uppercase text-center text-xl">
        Analyse des risque Pendant l'opération
      </h2>
      <RiskChoices />

      {bruitChecked && <BruitRisk />}
      {chuteHauteurChecked && <ChuteHauteurRisk />}
      {chuteMaterielChecked && <ChuteMaterielRisk />}
      {chutePiedChecked && <ChutePlainPiedRisk />}
      {circulationChecked && <CirculationRisk />}
      {electricChecked && <ElectricRisk />}
      {espaceconfineChecked && <EspaceConfinesRisk />}
      {incendieChecked && <IncendieRisk />}
      {machineChecked && <MachineRisk />}
      {manutentionChecked && <Manutention />}
      {outillageChecked && <OutillageRisk />}
      {bioChimChecked && <BioChimRisk />}
      {amianteChecked && <AmianteRisk />}
    </div>
  );
}
