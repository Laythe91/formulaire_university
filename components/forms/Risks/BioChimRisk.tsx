import { useFormContext } from "react-hook-form";
import Image from "next/image";
import { useRiskValidation } from "@/app/utils/risk/useRiskValidationHooks";

export default function BioChimRisk() {
  const { register } = useFormContext();

  useRiskValidation({
    path: "Risk.bioChim",
    phaseCount: 11,
    mesureCount: 13,
  });

  return (
    <>
      {/* En-tête du Risque */}
      <div className="bg-yellow-100 border-black border-2 flex flex-col justify-center items-center text-center uppercase mt-3 h-20">
        <span className="font-semibold">
          Risque de contamination biologique et chimique
        </span>
        <div className="flex flex-row gap-x-3">
          {" "}
          <Image
            src="/pictograms/produit-corrosif.svg"
            alt="Chute de plain pied"
            width={128}
            height={128}
            className="h-12.5 w-auto"
          />
          <Image
            src="/pictograms/produit-nocif.svg"
            alt="Chute de plain pied"
            width={128}
            height={128}
            className="h-12.5 w-auto"
          />
          <Image
            src="/pictograms/produit-inflammable.svg"
            alt="Chute de plain pied"
            width={128}
            height={128}
            className="h-12.5 w-auto"
          />
          <Image
            src="/pictograms/produit-toxique.svg"
            alt="Chute de plain pied"
            width={128}
            height={128}
            className="h-12.5 w-auto"
          />
          <Image
            src="/pictograms/produit-explosif.svg"
            alt="Chute de plain pied"
            width={128}
            height={128}
            className="h-12.5 w-auto"
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
            <td rowSpan={13} className="border border-black align-top p-3">
              <div className="flex flex-col gap-4">
                <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                  <input
                    {...register("Risk.bioChim.phase.1")}
                    type="checkbox"
                    className="scale-75 accent-black w-4 shrink-0 mt-1"
                  />

                  <span>
                    Intervention dans le local où sont utilisées / stockés des
                    produits chimiques produits chimiques ou gaz{" "}
                    <span className="text-red-600 font-bold">
                      (à préciser dans observation )
                    </span>{" "}
                  </span>
                </label>

                <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                  <input
                    {...register("Risk.bioChim.phase.2")}
                    type="checkbox"
                    className="scale-75 accent-black w-4 shrink-0 mt-1"
                  />

                  <span>
                    Travaux sur installations ou conduites ayant contenu des
                    produits chimiques ou gaz{" "}
                    <span className="text-red-600 font-bold">
                      (à préciser dans observation)
                    </span>{" "}
                  </span>
                </label>

                <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                  <input
                    {...register("Risk.bioChim.phase.3")}
                    type="checkbox"
                    className="scale-75 accent-black w-4 shrink-0 mt-1"
                  />
                  Présence de déchets tels que : Seringues usagés, lames de
                  rasoirs, débris de verre
                </label>

                <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                  <input
                    {...register("Risk.bioChim.phase.4")}
                    type="checkbox"
                    className="scale-75 accent-black w-4 shrink-0 mt-1"
                  />
                  Risques de brulures cutanées ou d’intoxication
                </label>

                <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                  <input
                    {...register("Risk.bioChim.phase.5")}
                    type="checkbox"
                    className="scale-75 accent-black w-4 shrink-0 mt-1"
                  />
                  Utilisation de produits chimiques (produits de nettoyage)
                </label>

                <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                  <input
                    {...register("Risk.bioChim.phase.6")}
                    type="checkbox"
                    className="scale-75 accent-black w-4 shrink-0 mt-1"
                  />
                  Toxique (solvant, résine)
                </label>

                <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                  <input
                    {...register("Risk.bioChim.phase.7")}
                    type="checkbox"
                    className="scale-75 accent-black w-4 shrink-0 mt-1"
                  />
                  Corrosif (acide, soude)
                </label>

                <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                  <input
                    {...register("Risk.bioChim.phase.8")}
                    type="checkbox"
                    className="scale-75 accent-black w-4 shrink-0 mt-1"
                  />
                  Nocif, irritant
                </label>

                <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                  <input
                    {...register("Risk.bioChim.phase.9")}
                    type="checkbox"
                    className="scale-75 accent-black w-4 shrink-0 mt-1"
                  />
                  Inflammable
                </label>

                <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                  <input
                    {...register("Risk.bioChim.phase.10")}
                    type="checkbox"
                    className="scale-75 accent-black w-4 shrink-0 mt-1"
                  />
                  Explosif
                </label>

                <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                  <input
                    {...register("Risk.bioChim.phase.11")}
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
                  {...register("Risk.bioChim.mesure.1")}
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0 mt-1"
                />

                <span>
                  Interdiction de pénétrer dans le local et d’intervenir{" "}
                  <span className="text-red-600 font-bold">
                    sans l’autorisation du Responsable de la Salle
                  </span>{" "}
                </span>
              </label>
            </td>

            {/* Université 1 */}
            <td className="border-x border-t border-black align-top p-3 pb-1 text-center">
              <input
                {...register("Risk.bioChim.universite.1")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>

            {/* EE 1 */}
            <td className="border-x border-t border-black align-top p-3 pb-1 text-center">
              <input
                {...register("Risk.bioChim.ee.1")}
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
                  {...register("Risk.bioChim.mesure.2")}
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0 mt-1"
                />

                <span>
                  Interdiction d’intervenir sans prévenir{" "}
                  <span className="text-red-600 font-bold">
                    le Responsable du Service Technique du Site
                  </span>{" "}
                </span>
              </label>
            </td>

            {/* Université 2 */}
            <td className="border-x border-black align-top p-3 py-1 text-center">
              <input
                {...register("Risk.bioChim.universite.2")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>

            {/* EE 2 */}
            <td className="border-x border-black align-top p-3 py-1 text-center">
              <input
                {...register("Risk.bioChim.ee.2")}
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
                  {...register("Risk.bioChim.mesure.3")}
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0 mt-1"
                />
                Personnel formé sur installation gaz
              </label>
            </td>

            {/* Université 3 */}
            <td className="border-x border-black align-top p-3 py-1 text-center">
              <input
                {...register("Risk.bioChim.universite.3")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>

            {/* EE 3 */}
            <td className="border-x border-black align-top p-3 py-1 text-center">
              <input
                {...register("Risk.bioChim.ee.3")}
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
                  {...register("Risk.bioChim.mesure.4")}
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0 mt-1"
                />
                Ne pas toucher les paillasses
              </label>
            </td>

            {/* Université 4 */}
            <td className="border-x  border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.bioChim.universite.4")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>

            {/* EE 4 */}
            <td className="border-x  border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.bioChim.ee.4")}
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
                  {...register("Risk.bioChim.mesure.5")}
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0 mt-1"
                />
                Purger les installations et les conduites
              </label>
            </td>

            {/* Université 5 */}
            <td className="border-x  border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.bioChim.universite.5")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>

            {/* EE 5 */}
            <td className="border-x  border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.bioChim.ee.5")}
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
                  {...register("Risk.bioChim.mesure.6")}
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0 mt-1"
                />
                Masque de protection des voies respiratoires avec filtre combiné
                dans certains cas
              </label>
            </td>

            {/* Université 6 */}
            <td className="border-x border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.bioChim.universite.6")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>

            {/* EE 6 */}
            <td className="border-x border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.bioChim.ee.6")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>
          </tr>

          <tr>
            {/* Mesure 7 */}
            <td className="border-x border-black align-top p-3 pt-1">
              <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                <input
                  {...register("Risk.bioChim.mesure.7")}
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0 mt-1"
                />
                Port de protection individuelles (à préciser : blouses, lunettes
                de sécurité, gants, chaussures de sécurité)
              </label>
            </td>

            {/* Université 7 */}
            <td className="border-x  border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.bioChim.universite.7")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>

            {/* EE 7 */}
            <td className="border-x  border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.bioChim.ee.7")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>
          </tr>

          <tr>
            {/* Mesure 8 */}
            <td className="border-x border-black align-top p-3 pt-1">
              <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                <input
                  {...register("Risk.bioChim.mesure.8")}
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0 mt-1"
                />

                <span>
                  Utilisation conforme{" "}
                  <span className="text-red-600 font-bold">
                    à la fiche de données de sécurité
                  </span>{" "}
                  du produit
                </span>
              </label>
            </td>

            {/* Université 8 */}
            <td className="border-x  border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.bioChim.universite.8")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>

            {/* EE 8 */}
            <td className="border-x  border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.bioChim.ee.8")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>
          </tr>

          <tr>
            {/* Mesure 9 */}
            <td className="border-x border-black align-top p-3 pt-1">
              <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                <input
                  {...register("Risk.bioChim.mesure.9")}
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0 mt-1"
                />
                Ventilation des locaux
              </label>
            </td>

            {/* Université 9 */}
            <td className="border-x  border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.bioChim.universite.9")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>

            {/* EE 9 */}
            <td className="border-x  border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.bioChim.ee.9")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>
          </tr>

          <tr>
            {/* Mesure 10 */}
            <td className="border-x border-black align-top p-3 pt-1">
              <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                <input
                  {...register("Risk.bioChim.mesure.10")}
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0 mt-1"
                />
                Stockage correct
              </label>
            </td>

            {/* Université 10 */}
            <td className="border-x  border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.bioChim.universite.10")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>

            {/* EE 10 */}
            <td className="border-x  border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.bioChim.ee.10")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>
          </tr>

          <tr>
            {/* Mesure 11 */}
            <td className="border-x border-black align-top p-3 pt-1">
              <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                <input
                  {...register("Risk.bioChim.mesure.11")}
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0 mt-1"
                />
                Etiquetage des produits
              </label>
            </td>

            {/* Université 11 */}
            <td className="border-x  border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.bioChim.universite.11")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>

            {/* EE 11 */}
            <td className="border-x border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.bioChim.ee.11")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>
          </tr>

          <tr>
            {/* Mesure 12 */}
            <td className="border-x border-black align-top p-3 pt-1">
              <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                <input
                  {...register("Risk.bioChim.mesure.12")}
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0 mt-1"
                />
                Formation du personnel utilisateur
              </label>
            </td>

            {/* Université 12 */}
            <td className="border-x  border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.bioChim.universite.12")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>

            {/* EE 12 */}
            <td className="border-x border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.bioChim.ee.12")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>
          </tr>

          <tr>
            {/* Mesure 13 */}
            <td className="border-x border-black align-top p-3 pt-1">
              <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                <input
                  {...register("Risk.bioChim.mesure.13")}
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0 mt-1"
                />
                Utilisation d’EPI (blouses, lunettes de sécurité, masques gants)
              </label>
            </td>

            {/* Université 13 */}
            <td className="border-x  border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.bioChim.universite.13")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>

            {/* EE 13 */}
            <td className="border-x border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.bioChim.ee.13")}
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
          {...register("Risk.bioChim.observations")}
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
