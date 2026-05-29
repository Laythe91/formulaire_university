type Props = {
  data: any;
};

export default function CompanyInformationSection1PDF({ data }: Props) {
  const effectif1 = data?.Entreprise?.renseignement?.effectif1 || "";
  const effectif2 = data?.Entreprise?.renseignement?.effectif2 || "";
  const soustraitant = data?.Entreprise?.renseignement?.soustraitant || "";

  return (
    <table
      className="w-full border-2 border-black border-collapse table-fixed mt-1 "
      style={{
        width: "99.8%",
      }}
    >
      <tbody>
        {/* Ligne titre */}
        <tr>
          <td className="border border-black p-2" colSpan={3}>
            {/* Titre */}
            <div className="font-bold uppercase underline text-sm mb-3">
              Renseignements sur L’Entreprise (Entreprise extérieure)
            </div>
            <div className="flex flex-row gap-10">
              <div className="text-sm mb-1 ">
                <span className="font-bold">
                  Effectif total prévu : {effectif1} personnes
                </span>
              </div>
              <div className="text-sm mb-1">
                <span className="font-bold">
                  dont encadrement : {effectif2} personnes
                </span>
              </div>
            </div>
            <div className="text-sm mb-1">
              <span className="font-bold">
                Nombre d'entreprises sous-traitantes (mettre 0 si aucune) :{" "}
                {soustraitant}
                {"   "}
              </span>
            </div>
            <div className="text-sm ">
              {" "}
              <span className="underline">Horaire de travail</span> : de 08h00 à
              12h00 Et de 13h00 à 17h00
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
