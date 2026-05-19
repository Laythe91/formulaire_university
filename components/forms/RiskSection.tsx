import { useFormContext } from "react-hook-form";
import RiskChoices from "./Risks/RiskChoices";
import CirculationRisk from "./Risks/CirculationRisk";
import BruitRisk from "./Risks/Bruit";

export default function RiskSection() {
  const { register, watch } = useFormContext();
  const circulation = watch("risques.circulation.state");
  const bruit = watch("risques.bruit.state");

  return (
    <div className="mt-5 ">
      <h2 className="font-bold underline uppercase text-center text-xl">
        Analyse des risque Pendant l'opération
      </h2>
      <RiskChoices />

      {bruit && <BruitRisk />}
      {circulation && <CirculationRisk />}
    </div>
  );
}
