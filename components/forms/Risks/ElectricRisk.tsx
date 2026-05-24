import { useFormContext } from "react-hook-form";
import Image from "next/image";
import { useRiskValidation } from "@/app/utils/risk/useRiskValidationHooks";

export default function ElectricRisk() {
  const { register, watch, setValue } = useFormContext();

  useRiskValidation({
    path: "Risk.electrique",
    phaseCount: 5,
    mesureCount: 6,
  });

  return (
    <>
      {/* En-tête du Risque */}
      <div className="bg-yellow-100 border-black border-2 flex flex-col justify-center items-center text-center uppercase mt-3 h-20">
        <span className="font-semibold">électrique</span>
        <Image
          src="/pictograms/electricite.svg"
          alt="Chute de plain pied"
          width={128}
          height={128}
          className="h-12.5 w-auto"
        />
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
            <td rowSpan={6} className="border border-black align-top p-3">
              <div className="flex flex-col gap-4">
                <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                  <input
                    {...register("Risk.electrique.phase.1")}
                    type="checkbox"
                    className="scale-75 accent-black w-4 shrink-0 mt-1"
                  />
                  Intervention BT
                </label>

                <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                  <input
                    {...register("Risk.electrique.phase.2")}
                    type="checkbox"
                    className="scale-75 accent-black w-4 shrink-0 mt-1"
                  />
                  Travaux dans des enceintes conductrices exigües (parois
                  métalliques ou conductrices)
                </label>
                <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                  <input
                    {...register("Risk.electrique.phase.3")}
                    type="checkbox"
                    className="scale-75 accent-black w-4 shrink-0 mt-1"
                  />
                  Coffret de chantier
                </label>

                <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                  <input
                    {...register("Risk.electrique.phase.4")}
                    type="checkbox"
                    className="scale-75 accent-black w-4 shrink-0 mt-1"
                  />
                  Contrôle conformité installation
                </label>

                <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                  <input
                    {...register("Risk.electrique.phase.5")}
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
                  {...register("Risk.electrique.mesure.1")}
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0 mt-1"
                />
                Interdiction d'intervenir sans prévenir le responsable du
                Service Technique
              </label>
            </td>

            {/* Université 1 */}
            <td className="border-x border-t border-black align-top p-3 pb-1 text-center">
              <input
                {...register("Risk.electrique.universite.1")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>

            {/* EE 1 */}
            <td className="border-x border-t border-black align-top p-3 pb-1 text-center">
              <input
                {...register("Risk.electrique.ee.1")}
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
                  {...register("Risk.electrique.mesure.2")}
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0 mt-1"
                />
                Intervention par personnel habilité de niveau (fournir liste des
                personnes)
              </label>
            </td>

            {/* Université 2 */}
            <td className="border-x border-black align-top p-3 py-1 text-center">
              <input
                {...register("Risk.electrique.universite.2")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>

            {/* EE 2 */}
            <td className="border-x border-black align-top p-3 py-1 text-center">
              <input
                {...register("Risk.electrique.ee.2")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>
          </tr>

          {/* MESURE 3 (Milieu bas) */}
          <tr>
            {/* Mesure 3 */}
            <td className="border-x border-black align-top p-3 py-1">
              <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                <input
                  {...register("Risk.electrique.mesure.3")}
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0 mt-1"
                />
                Outillage électroportatif et de mesure conforme
              </label>
            </td>

            {/* Université 3 */}
            <td className="border-x border-black align-top p-3 py-1 text-center">
              <input
                {...register("Risk.electrique.universite.3")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>

            {/* EE 3 */}
            <td className="border-x border-black align-top p-3 py-1 text-center">
              <input
                {...register("Risk.electrique.ee.3")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>
          </tr>

          {/* MESURE 4 (Bas du bloc) */}
          <tr>
            {/* Mesure 4 */}
            <td className="border-x border-black align-top p-3 pt-1">
              <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                <input
                  {...register("Risk.electrique.mesure.4")}
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0 mt-1"
                />
                Protections individuelles (gants, tabourets, lunettes) adaptées
              </label>
            </td>

            {/* Université 4 */}
            <td className="border-x  border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.electrique.universite.4")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>

            {/* EE 4 */}
            <td className="border-x  border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.electrique.ee.4")}
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
                  {...register("Risk.electrique.mesure.5")}
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0 mt-1"
                />
                Intervention hors tension
              </label>
            </td>

            {/* Université 5 */}
            <td className="border-x  border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.electrique.universite.5")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>

            {/* EE 5 */}
            <td className="border-x  border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.electrique.ee.5")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>
          </tr>
          <tr>
            {/* Mesure 6 */}
            <td className="border-x border-black align-top p-3 pt-1">
              <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                <input
                  {...register("Risk.electrique.mesure.6")}
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0 mt-1"
                />
                <span>
                  Consignation des installations{" "}
                  <span className="text-red-600 font-bold">
                    par personnel dûment habilité
                  </span>
                </span>
              </label>
            </td>

            {/* Université 4 */}
            <td className="border-x border-b border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.electrique.universite.6")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>

            {/* EE 4 */}
            <td className="border-x border-b border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.electrique.ee.6")}
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
        <textarea
          {...register("Risk.electrique.observations")}
          placeholder="Renseigner ici les observations ou précisions concernant les mesures..."
          className="w-full min-h-15 h-20 border border-gray-300 p-2 text-sm outline-none resize-none focus:border-black transition-colors"
        />
      </div>
    </>
  );
}
