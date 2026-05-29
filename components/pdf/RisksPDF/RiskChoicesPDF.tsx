type Props = { data: any };

export default function RiskChoicesPDF({ data }: Props) {
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

  return (
    <>
      <table
        className="w-full border-2 border-black border-collapse table-fixed mt-3"
        style={{
          width: "99.8%",
        }}
      >
        <tbody>
          {/* Ligne titre */}
          <tr>
            <td className="border border-black p-2" colSpan={3}>
              {/* Titre */}
              <div className="font-bold uppercase underline text-sm mb-4">
                RENSEIGNEMENTS SUR LES RISQUES
              </div>

              {/* Contenu */}
              <div className="grid grid-cols-3 gap-y-2">
                <span className="text-center">Risques</span>
                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    readOnly
                    checked={bruitChecked}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Bruit
                </label>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    readOnly
                    checked={chuteHauteurChecked}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Chute de hauteur
                </label>
                <div></div>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    readOnly
                    checked={chuteMaterielChecked}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Chute de matériel
                </label>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    readOnly
                    checked={chutePiedChecked}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Chute de plain pied
                </label>

                <div></div>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    readOnly
                    checked={circulationChecked}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Circulation
                </label>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    readOnly
                    checked={electricChecked}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Electrique
                </label>

                <div></div>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    readOnly
                    checked={espaceconfineChecked}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Espaces confines
                </label>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    readOnly
                    checked={incendieChecked}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Incendie
                </label>

                <div></div>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    readOnly
                    checked={machineChecked}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Machine
                </label>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    readOnly
                    checked={manutentionChecked}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Manutention manuelle ou mecanique
                </label>
                <div></div>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    readOnly
                    checked={outillageChecked}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Outillage
                </label>

                <label className="text-sm flex items-center gap-1 leading-snug ">
                  <input
                    type="checkbox"
                    readOnly
                    checked={bioChimChecked}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Risque de contamination biologique <br />
                  et chimique
                </label>
                <div></div>
                <label className="text-sm flex items-center gap-1 leading-snug ">
                  <input
                    type="checkbox"
                    readOnly
                    checked={amianteChecked}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Risque à l'amiante
                </label>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
