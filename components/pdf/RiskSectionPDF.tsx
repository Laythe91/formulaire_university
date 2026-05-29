import AmianteRiskPDF from "./RisksPDF/AmianteRiskPDF";
import BruitRiskPDF from "./RisksPDF/BruitRiskPDF";
import ChuteHauteurRiskPDF from "./RisksPDF/ChuteHauteurRiskPDF";
import ChuteMaterielRiskPDF from "./RisksPDF/ChuteMaterielRiskPDF";
import ChutePlainPiedRiskPDF from "./RisksPDF/ChutePlainPiedRiskPDF";
import CirculationRiskPDF from "./RisksPDF/CirculationRiskPDF";
import ElectricRiskPDF from "./RisksPDF/ElectricRiskPDF";
import EspaceConfinesRiskPDF from "./RisksPDF/EspacesConfinesRiskPDF";
import IncendieRiskPDF from "./RisksPDF/IncendieRiskPDF";
import MachineRiskPDF from "./RisksPDF/MachineRiskPDF";
import ManutentionPDF from "./RisksPDF/ManutentionManuelMecaniquePDF";
import OutillageRiskPDF from "./RisksPDF/OutillageRiskPDF";
import BioChimRiskPDF from "./RisksPDF/BioChimRiskPDF";
import RiskChoicesPDF from "./RisksPDF/RiskChoicesPDF";
type Props = { data: any };

export default function RiskSectionPDF({ data }: Props) {
  //Risque coché
  const amianteChecked = data?.Risk?.amiante?.checkbox?.state || false;
  const circulationChecked = data?.Risk?.circulation?.checkbox?.state || false;
  const bioChimChecked = data?.Risk?.bioChim?.checkbox?.state || false;
  const bruitChecked = data?.Risk?.bruit?.checkbox?.state || false;
  const chuteHauteurChecked =
    data?.Risk?.chuteHauteur?.checkbox?.state || false;
  const chuteMaterielChecked =
    data?.Risk?.chuteMateriel?.checkbox?.state || false;
  const chutePiedChecked = data?.Risk?.chutePied?.checkbox?.state || false;
  const electricChecked = data?.Risk?.electrique?.checkbox?.state || false;
  const espaceconfineChecked =
    data?.Risk?.espaceconfine?.checkbox?.state || false;
  const incendieChecked = data?.Risk?.incendie?.checkbox?.state || false;
  const machineChecked = data?.Risk?.machine?.checkbox?.state || false;
  const manutentionChecked = data?.Risk?.manutention?.checkbox?.state || false;
  const outillageChecked = data?.Risk?.outillage?.checkbox?.state || false;

  const amiantedata = data?.Risk?.amiante;
  const circulationdata = data?.Risk?.circulation;
  const bioChimdata = data?.Risk?.bioChim;
  const bruitdata = data?.Risk?.bruit;
  const chuteHauteurdata = data?.Risk?.chuteHauteur;
  const chuteMaterieldata = data?.Risk?.chuteMateriel;
  const chutePieddata = data?.Risk?.chutePied;
  const electricdata = data?.Risk?.electrique;
  const espaceconfinedata = data?.Risk?.espaceconfine;
  const incendiedata = data?.Risk?.incendie;
  const machinedata = data?.Risk?.machine;
  const manutentiondata = data?.Risk?.manutention;
  const outillagedata = data?.Risk?.outillage;

  return (
    <div className="mt-5 ">
      <div className="pdf-section">
        <h2 className="font-bold underline uppercase text-center text-xl">
          Analyse des risque Pendant l'opération
        </h2>
        <RiskChoicesPDF data={data} />
      </div>
      {bruitChecked && <BruitRiskPDF data={bruitdata} />}
      {chuteHauteurChecked && <ChuteHauteurRiskPDF data={chuteHauteurdata} />}
      {chuteMaterielChecked && (
        <ChuteMaterielRiskPDF data={chuteMaterieldata} />
      )}
      {chutePiedChecked && <ChutePlainPiedRiskPDF data={chutePieddata} />}
      {circulationChecked && <CirculationRiskPDF data={circulationdata} />}
      {electricChecked && <ElectricRiskPDF data={electricdata} />}
      {espaceconfineChecked && (
        <EspaceConfinesRiskPDF data={espaceconfinedata} />
      )}
      {incendieChecked && <IncendieRiskPDF data={incendiedata} />}
      {machineChecked && <MachineRiskPDF data={machinedata} />}
      {manutentionChecked && <ManutentionPDF data={manutentiondata} />}
      {outillageChecked && <OutillageRiskPDF data={outillagedata} />}
      {bioChimChecked && <BioChimRiskPDF data={bioChimdata} />}
      {amianteChecked && <AmianteRiskPDF data={amiantedata} />}
    </div>
  );
}
