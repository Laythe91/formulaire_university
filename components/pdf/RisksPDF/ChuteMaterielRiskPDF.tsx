type Props = { data: any };

export default function ChuteMaterielRiskPDF({ data }: Props) {
  const phase1 = data?.phase?.["1"] || false;
  const phase2 = data?.phase?.["2"] || false;
  const phase3 = data?.phase?.["3"] || false;
  const phase4 = data?.phase?.["4"] || false;

  const mesure1 = data?.mesure?.["1"] || false;
  const mesure2 = data?.mesure?.["2"] || false;

  const universite1 = data?.universite?.["1"] || false;
  const universite2 = data?.universite?.["2"] || false;

  const ee1 = data?.ee?.["1"] || false;
  const ee2 = data?.ee?.["2"] || false;

  const observation = data?.observations || "";
  return (
    <>
      <div className="pdf-section">
        {/* En-tête du Risque */}
        <div
          className="bg-yellow-100 border-black border-2 flex flex-col justify-center items-center text-center uppercase mt-3 h-20"
          style={{
            width: "99.8%",
          }}
        >
          <span className="font-semibold">Chute de matériel</span>
          <img
            src="/pictograms/charge-suspendue.svg"
            alt="Chute de plain pied"
            width={128}
            height={128}
            className="h-12.5 w-auto"
          />
        </div>

        {/* Tableau Unique Structuré */}
        <table
          className="w-full border-2 border-black border-collapse table-fixed mt-1"
          style={{
            width: "99.8%",
          }}
        >
          {/* Redéfinition des largeurs (Total: 100% réparti sur 4 colonnes) */}
          <colgroup>
            <col className="w-[38%]" />
            <col className="w-[36%]" />
            <col className="w-[13%]" />
            <col className="w-[13%]" />
          </colgroup>

          <tbody>
            {/* Ligne d'en-tête 1 */}
            <tr className="bg-yellow-100">
              <th
                rowSpan={2}
                className="border border-black p-2 text-center font-bold text-sm leading-tight align-middle"
              >
                Phases où le risque peut être présent
              </th>
              <th
                rowSpan={2}
                className="border border-black p-2 text-center font-bold text-sm leading-tight align-middle"
              >
                Mesures de prévention à respecter
              </th>
              <th
                colSpan={2}
                className="border border-black p-2 text-center font-bold text-sm"
              >
                Mise en œuvre des mesures
              </th>
            </tr>

            {/* Ligne d'en-tête 2 (Sous-colonnes) */}
            <tr className="bg-yellow-100">
              <th className="border border-black text-center text-xs p-1 leading-tight font-bold">
                Université <br /> Paris VIII
              </th>
              <th className="border border-black text-center text-xs p-1 font-bold">
                E.E
              </th>
            </tr>

            {/* MESURE 1 (Haut du bloc) */}
            <tr>
              {/* Colonne Phases (Fusionnée sur les 4 lignes de mesures) */}
              <td rowSpan={2} className="border border-black align-top p-3">
                <div className="flex flex-col gap-4">
                  <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                    <input
                      checked={phase1}
                      readOnly
                      type="checkbox"
                      className="scale-75 accent-black w-4 shrink-0 mt-1"
                    />
                    Utilisation d’un échafaudage ou gazelle
                  </label>

                  <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                    <input
                      checked={phase2}
                      readOnly
                      type="checkbox"
                      className="scale-75 accent-black w-4 shrink-0 mt-1"
                    />
                    Utilisation d’une nacelle
                  </label>

                  <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                    <input
                      checked={phase3}
                      readOnly
                      type="checkbox"
                      className="scale-75 accent-black w-4 shrink-0 mt-1"
                    />
                    Escabeau PIRL
                  </label>

                  <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                    <input
                      checked={phase4}
                      readOnly
                      type="checkbox"
                      className="scale-75 accent-black w-4 shrink-0 mt-1"
                    />
                    Autres
                  </label>
                </div>
              </td>

              {/* Mesure 1 */}
              <td className="border-x border-t border-black align-top p-3 pb-1">
                <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                  <input
                    checked={mesure1}
                    readOnly
                    type="checkbox"
                    className="scale-75 accent-black w-4 shrink-0 mt-1"
                  />
                  Signalisation et balisage de zone
                </label>
              </td>

              {/* Université 1 */}
              <td className="border-x border-t border-black align-top p-3 pb-1 text-center">
                <input
                  checked={universite1}
                  readOnly
                  type="checkbox"
                  className="scale-75 accent-black mt-1"
                />
              </td>

              {/* EE 1 */}
              <td className="border-x border-t border-black align-top p-3 pb-1 text-center">
                <input
                  checked={ee1}
                  readOnly
                  type="checkbox"
                  className="scale-75 accent-black mt-1"
                />
              </td>
            </tr>

            {/* MESURE 2 (Milieu haut) */}
            <tr>
              {/* Mesure 2 */}
              <td className="border-x border-black align-top p-3 py-1">
                <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                  <input
                    checked={mesure2}
                    readOnly
                    type="checkbox"
                    className="scale-75 accent-black w-4 shrink-0 mt-1"
                  />
                  Utilisation de gants, port du casque et chaussures de sécurité
                </label>
              </td>

              {/* Université 2 */}
              <td className="border-x border-black align-top p-3 py-1 text-center">
                <input
                  checked={universite2}
                  readOnly
                  type="checkbox"
                  className="scale-75 accent-black mt-1"
                />
              </td>

              {/* EE 2 */}
              <td className="border-x border-black align-top p-3 py-1 text-center">
                <input
                  checked={ee2}
                  readOnly
                  type="checkbox"
                  className="scale-75 accent-black mt-1"
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* Zone d'Observations en dessous du tableau global */}
        <div className="w-full border-2 border-black p-3 bg-white flex flex-col gap-1.5 mt-3">
          <label className="text-sm font-bold text-gray-800">
            Observations :
          </label>
          <span className="w-full min-h-20 border border-gray-300 p-2 text-sm whitespace-pre-wrap wrap-break-words">
            {observation}
          </span>
        </div>
      </div>
    </>
  );
}
