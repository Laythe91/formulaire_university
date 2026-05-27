import { useFormContext } from "react-hook-form";
import Image from "next/image";
import { useRiskValidation } from "@/app/utils/risk/useRiskValidationHooks";

export default function EspaceConfinesRiskPDF() {
  const { register } = useFormContext();

  useRiskValidation({
    path: "Risk.espaceconfine",
    phaseCount: 3,
    mesureCount: 5,
  });

  return (
    <>
      {/* En-tête du Risque */}
      <div className="bg-yellow-100 border-black border-2 flex flex-col justify-center items-center text-center uppercase mt-3 h-20">
        <span className="font-semibold">Espace confinés</span>
        <Image
          src="/pictograms/confines.svg"
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
            <td rowSpan={5} className="border border-black align-top p-3">
              <div className="flex flex-col gap-4">
                <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                  <input
                    {...register("Risk.espaceconfine.phase.1")}
                    type="checkbox"
                    className="scale-75 accent-black w-4 shrink-0 mt-1"
                  />
                  Travaux dans un regard, une fosse
                </label>

                <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                  <input
                    {...register("Risk.espaceconfine.phase.2")}
                    type="checkbox"
                    className="scale-75 accent-black w-4 shrink-0 mt-1"
                  />
                  <span>
                    Travaux dans une cuve ou espace confiné{" "}
                    <span className="text-red-600 font-bold">
                      (produits contenus : à préciser ….)
                    </span>{" "}
                  </span>
                </label>

                <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                  <input
                    {...register("Risk.espaceconfine.phase.3")}
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
                  {...register("Risk.espaceconfine.mesure.1")}
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0 mt-1"
                />
                Interdiction de travailler seul
              </label>
            </td>

            {/* Université 1 */}
            <td className="border-x border-t border-black align-top p-3 pb-1 text-center">
              <input
                {...register("Risk.espaceconfine.universite.1")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>

            {/* EE 1 */}
            <td className="border-x border-t border-black align-top p-3 pb-1 text-center">
              <input
                {...register("Risk.espaceconfine.ee.1")}
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
                  {...register("Risk.espaceconfine.mesure.2")}
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0 mt-1"
                />
                S’assurer que l’atmosphère ni toxique, ni explosive, ...
              </label>
            </td>

            {/* Université 2 */}
            <td className="border-x border-black align-top p-3 py-1 text-center">
              <input
                {...register("Risk.espaceconfine.universite.2")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>

            {/* EE 2 */}
            <td className="border-x border-black align-top p-3 py-1 text-center">
              <input
                {...register("Risk.espaceconfine.ee.2")}
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
                  {...register("Risk.espaceconfine.mesure.3")}
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0 mt-1"
                />

                <span>
                  Utilisation d’appareils respiratoires isolant{" "}
                  <span className="text-red-600 font-bold">
                    (personnel formé)
                  </span>{" "}
                </span>
              </label>
            </td>

            {/* Université 3 */}
            <td className="border-x border-black align-top p-3 py-1 text-center">
              <input
                {...register("Risk.espaceconfine.universite.3")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>

            {/* EE 3 */}
            <td className="border-x border-black align-top p-3 py-1 text-center">
              <input
                {...register("Risk.espaceconfine.ee.3")}
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
                  {...register("Risk.espaceconfine.mesure.4")}
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0 mt-1"
                />
                Dégager si nécessaire
              </label>
            </td>

            {/* Université 4 */}
            <td className="border-x  border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.espaceconfine.universite.4")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>

            {/* EE 4 */}
            <td className="border-x  border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.espaceconfine.ee.4")}
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
                  {...register("Risk.espaceconfine.mesure.5")}
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0 mt-1"
                />
                Autres
              </label>
            </td>

            {/* Université 5 */}
            <td className="border-x  border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.espaceconfine.universite.5")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>

            {/* EE 5 */}
            <td className="border-x  border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.espaceconfine.ee.5")}
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
          {...register("Risk.espaceconfine.observations")}
          rows={3}
          onInput={(e) => {
            e.currentTarget.style.height = "auto";
            e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
          }}
          placeholder="Renseigner ici les observations ou précisions concernant les mesures ... SI AUCUNE OBSERVATION METTRE AU MINIMUM RAS"
          className="w-full min-h-15 h-20 overflow-hidden  border border-gray-300 p-2 text-sm wrap-break-words resize-none "
        />
      </div>
    </>
  );
}
