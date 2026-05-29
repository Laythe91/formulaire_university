type Props = { data: any };

export default function AmianteRiskPDF({ data }: Props) {
  const phase1 = data?.phase?.["1"] || false;
  const phase2 = data?.phase?.["2"] || false;
  const phase3 = data?.phase?.["3"] || false;

  const mesure1 = data?.mesure?.["1"] || false;
  const mesure2 = data?.mesure?.["2"] || false;
  const mesure3 = data?.mesure?.["3"] || false;
  const mesure4 = data?.mesure?.["4"] || false;
  const mesure5 = data?.mesure?.["5"] || false;

  const universite1 = data?.universite?.["1"] || false;
  const universite2 = data?.universite?.["2"] || false;
  const universite3 = data?.universite?.["3"] || false;
  const universite4 = data?.universite?.["4"] || false;
  const universite5 = data?.universite?.["5"] || false;

  const ee1 = data?.ee?.["1"] || false;
  const ee2 = data?.ee?.["2"] || false;
  const ee3 = data?.ee?.["3"] || false;
  const ee4 = data?.ee?.["4"] || false;
  const ee5 = data?.ee?.["5"] || false;

  const observation = data?.observations || "";

  return (
    <>
      {/* En-tête du Risque */}
      <div className="bg-yellow-100 border-black border-2 flex flex-col justify-center items-center text-center uppercase mt-3 h-20">
        <span className="font-semibold">
          Risque de contamination biologique et chimique
        </span>
        <div className="flex flex-row gap-x-3">
          {" "}
          <img
            src="/pictograms/produit-corrosif.svg"
            alt="Chute de plain pied"
            width={50}
            height={50}
          />
          <img
            src="/pictograms/produit-nocif.svg"
            alt="Chute de plain pied"
            width={50}
            height={50}
          />
          <img
            src="/pictograms/produit-inflammable.svg"
            alt="Chute de plain pied"
            width={50}
            height={50}
          />
          <img
            src="/pictograms/produit-toxique.svg"
            alt="Chute de plain pied"
            width={50}
            height={50}
          />
          <img
            src="/pictograms/produit-explosif.svg"
            alt="Chute de plain pied"
            width={50}
            height={50}
          />
        </div>
      </div>

      {/* Tableau Unique Structuré */}
      <table className="w-full border-2 border-black border-collapse table-fixed mt-1">
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
            <td rowSpan={5} className="border border-black align-top p-3">
              <div className="flex flex-col gap-4">
                <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                  <input
                    checked={phase1}
                    readOnly
                    type="checkbox"
                    className="scale-75 accent-black w-4 shrink-0 mt-1"
                  />
                  Intervention sur matériau susceptible de contenir de l’amiante
                </label>

                <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                  <input
                    checked={phase2}
                    readOnly
                    type="checkbox"
                    className="scale-75 accent-black w-4 shrink-0 mt-1"
                  />
                  Travaux de retrait et/ou confinement de l’amiante
                </label>

                <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                  <input
                    checked={phase3}
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

                <span>
                  Interdiction{" "}
                  <span className="text-red-600 font-bold">
                    d’intervenir sans prévenir le Responsable du Service
                    Technique du patrimoine
                  </span>{" "}
                </span>
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

          <tr>
            {/* Mesure 2 */}
            <td className="border-x border-black align-top p-3 pt-1">
              <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                <input
                  checked={mesure2}
                  readOnly
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0 mt-1"
                />

                <span>
                  Réalisation d’un{" "}
                  <span className="text-red-600 font-bold">
                    plan de retrait
                  </span>{" "}
                </span>
              </label>
            </td>

            {/* Université 2 */}
            <td className="border-x  border-black align-top p-3 pt-1 text-center">
              <input
                checked={universite2}
                readOnly
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>

            {/* EE 2 */}
            <td className="border-x border-black align-top p-3 pt-1 text-center">
              <input
                checked={ee2}
                readOnly
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>
          </tr>

          <tr>
            {/* Mesure 3 */}
            <td className="border-x border-black align-top p-3 pt-1">
              <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                <input
                  checked={mesure3}
                  readOnly
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0 mt-1"
                />
                Présenter et respecter le protocole pour limiter l’émission de
                fibres
              </label>
            </td>

            {/* Université 3 */}
            <td className="border-x  border-black align-top p-3 pt-1 text-center">
              <input
                checked={universite3}
                readOnly
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>

            {/* EE 3 */}
            <td className="border-x border-black align-top p-3 pt-1 text-center">
              <input
                checked={ee3}
                readOnly
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>
          </tr>

          <tr>
            {/* Mesure 4 */}
            <td className="border-x border-black align-top p-3 pt-1">
              <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                <input
                  checked={mesure4}
                  readOnly
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0 mt-1"
                />
                Utilisation d’EPI (blouses, masques P3, gants latex et gants de
                manutention, tenue jetable, bottes de sécurité étanche et
                antidérapantes, appareil de protection respiratoire à
                ventilation assistée, ruban adhésif pour étanchéité des points
                de jonction, protections auditives)
              </label>
            </td>

            {/* Université 4 */}
            <td className="border-x  border-black align-top p-3 pt-1 text-center">
              <input
                checked={universite4}
                readOnly
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>

            {/* EE 4 */}
            <td className="border-x border-black align-top p-3 pt-1 text-center">
              <input
                checked={ee4}
                readOnly
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>
          </tr>

          <tr>
            {/* Mesure 5 */}
            <td className="border-x border-black align-top p-3 pt-1">
              <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                <input
                  checked={mesure5}
                  readOnly
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0 mt-1"
                />
                Autre : stockage des déchets amiantés, utilisation sacs
                spécifiques
              </label>
            </td>

            {/* Université 5 */}
            <td className="border-x  border-black align-top p-3 pt-1 text-center">
              <input
                checked={universite5}
                readOnly
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>

            {/* EE 5 */}
            <td className="border-x border-black align-top p-3 pt-1 text-center">
              <input
                checked={ee5}
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
    </>
  );
}
