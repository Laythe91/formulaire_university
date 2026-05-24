import { useFormContext } from "react-hook-form";
import Image from "next/image";
import { useEffect } from "react";

export default function MachineRisk() {
  const { register, watch, setValue } = useFormContext();

  const phase1 = watch("Risk.machine.phase.1");
  const phase2 = watch("Risk.machine.phase.2");

  const mesure1 = watch("Risk.machine.mesure.1");
  const mesure2 = watch("Risk.machine.mesure.2");

  const universite1 = watch("Risk.machine.universite.1");
  const universite2 = watch("Risk.machine.universite.2");

  const ee1 = watch("Risk.machine.ee.1");
  const ee2 = watch("Risk.machine.ee.2");

  const observations = watch("Risk.machine.observations");

  useEffect(() => {
    // =========================
    // PHASES
    // =========================
    const hasPhase = phase1 || phase2;

    // =========================
    // MESURES
    // =========================
    const mesure1Valid = !mesure1 || universite1 || ee1;
    const mesure2Valid = !mesure2 || universite2 || ee2;

    // =========================
    // OBSERVATIONS
    // =========================
    const observationsValid = observations?.trim().length >= 3;

    // =========================
    // GLOBAL
    // =========================
    const globalValid =
      hasPhase && mesure1Valid && mesure2Valid && observationsValid;

    setValue("Risk.machine.global.state", globalValid);
  }, [
    phase1,
    phase2,

    mesure1,
    mesure2,

    universite1,
    universite2,

    ee1,
    ee2,

    observations,

    setValue,
  ]);

  return (
    <>
      {/* En-tête du Risque */}
      <div className="bg-yellow-100 border-black border-2 flex flex-col justify-center items-center text-center uppercase mt-3 h-20">
        <span className="font-semibold">machine</span>
        <Image
          src="/pictograms/machine.svg"
          alt="machine"
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
            <td rowSpan={2} className="border border-black align-top p-3">
              <div className="flex flex-col gap-4">
                <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                  <input
                    {...register("Risk.machine.phase.1")}
                    type="checkbox"
                    className="scale-75 accent-black w-4 shrink-0 mt-1"
                  />
                  Intervention dans les machineries ascenseurs
                </label>

                <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                  <input
                    {...register("Risk.machine.phase.2")}
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
                  {...register("Risk.machine.mesure.1")}
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0 mt-1"
                />
                Port de chaussures anti-dérapantes en cas de fuite dans la
                machinerie
              </label>
            </td>

            {/* Université 1 */}
            <td className="border-x border-t border-black align-top p-3 pb-1 text-center">
              <input
                {...register("Risk.machine.universite.1")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>

            {/* EE 1 */}
            <td className="border-x border-t border-black align-top p-3 pb-1 text-center">
              <input
                {...register("Risk.machine.ee.1")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>
          </tr>

          {/* Ligne de contenu : Mesure 2 (Bas) */}
          <tr>
            {/* Mesure 2 */}
            <td className="border-x border-b border-black align-top p-3 pt-1">
              <label className="text-sm flex items-start gap-2 leading-snug cursor-pointer">
                <input
                  {...register("Risk.machine.mesure.2")}
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0 mt-1"
                />
                Habilitation pour pénétrer dans la machinerie
              </label>
            </td>

            {/* Université 2 */}
            <td className="border-x border-b border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.machine.universite.2")}
                type="checkbox"
                className="scale-75 accent-black mt-1"
              />
            </td>

            {/* EE 2 */}
            <td className="border-x border-b border-black align-top p-3 pt-1 text-center">
              <input
                {...register("Risk.machine.ee.2")}
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
          {...register("Risk.machine.observations")}
          placeholder="Renseigner ici les observations ou précisions concernant les mesures..."
          className="w-full min-h-15 h-20 border border-gray-300 p-2 text-sm outline-none resize-none focus:border-black transition-colors"
        />
      </div>
    </>
  );
}
