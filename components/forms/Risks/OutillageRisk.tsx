import { useFormContext } from "react-hook-form";
import Image from "next/image";
import { useRiskValidation } from "@/app/utils/risk/useRiskValidationHooks";

export default function OutillageRisk() {
  const { register } = useFormContext();

  useRiskValidation({
    path: "Risk.manutention",
    phaseCount: 2,
    mesureCount: 4,
  });

  return (
    <>
      {/* En-tête du Risque */}
      <div className="bg-yellow-100 border-black border-2 flex flex-col justify-center items-center text-center uppercase mt-3 h-20">
        <span className="font-semibold">Outillage</span>
        <Image
          src="/pictograms/outillage.svg"
          alt="outillage"
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

          {/* Ligne de contenu : Mesure 1 (Haut) */}
          <tr>
            {/* Phase */}
            <td rowSpan={4} className="border border-black align-top p-3">
              <div className="flex flex-col gap-4">
                <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                  <input
                    {...register("Risk.outillage.phase.1")}
                    type="checkbox"
                    className="scale-75 accent-black w-4 shrink-0 mt-1"
                  />
                  Utilisation d’outillages électriques
                </label>
                <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                  <input
                    {...register("Risk.outillage.phase.2")}
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
                  {...register("Risk.outillage.mesure.1")}
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0 mt-1"
                />
                Outillage de Classe II obligatoire
              </label>
            </td>

            {/* Université 1 */}
            <td className="border-x border-t border-black align-top p-3 pb-1 text-center">
              <input
                {...register("Risk.outillage.universite.1")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>

            {/* EE 1 */}
            <td className="border-x border-t border-black align-top p-3 pb-1 text-center">
              <input
                {...register("Risk.outillage.ee.1")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>
          </tr>

          {/* Ligne de contenu : Mesure 2 (Bas) */}
          <tr>
            {/* Mesure 2 */}
            <td className="border-x border-black align-top p-3 pt-1">
              <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                <input
                  {...register("Risk.outillage.mesure.2")}
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0 mt-1"
                />
                Outillage conforme et entretenu (y compris rallonge électrique)
              </label>
            </td>

            {/* Université 2 */}
            <td className="border-x border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.outillage.universite.2")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>

            {/* EE 2 */}
            <td className="border-x  border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.outillage.ee.2")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>
          </tr>

          {/* Ligne de contenu : Mesure 3 (Bas) */}
          <tr>
            {/* Mesure 3 */}
            <td className="border-x border-black align-top p-3 pt-1">
              <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                <input
                  {...register("Risk.outillage.mesure.3")}
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0 mt-1"
                />
                Balisage vis-à-vis des projections s’il y en a
              </label>
            </td>

            {/* Université 3 */}
            <td className="border-x  border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.outillage.universite.3")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>

            {/* EE 3 */}
            <td className="border-x border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.outillage.ee.3")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>
          </tr>

          {/* Ligne de contenu : Mesure 4 (Bas) */}
          <tr>
            {/* Mesure 4 */}
            <td className="border-x  border-black align-top p-3 pt-1">
              <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                <input
                  {...register("Risk.outillage.mesure.4")}
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0 mt-1"
                />
                Utilisation d’EPI adapté (à préciser : gants, lunettes,
                protections auditives)
              </label>
            </td>

            {/* Université 4 */}
            <td className="border-x border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.outillage.universite.4")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>

            {/* EE 4 */}
            <td className="border-x border-b border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.outillage.ee.4")}
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
          {...register("Risk.outillage.observations")}
          placeholder="Renseigner ici les observations ou précisions concernant les mesures ... SI AUCUNE OBSERVATION METTRE AU MINIMUM RAS"
          className="w-full min-h-15 h-20 border border-gray-300 p-2 text-sm outline-none resize-none focus:border-black transition-colors"
        />
      </div>
    </>
  );
}
