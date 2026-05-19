import { useFormContext } from "react-hook-form";
import Image from "next/image";

export default function CirculationRisk() {
  const { register } = useFormContext();

  return (
    <>
      <div className="bg-yellow-100 border-black border-2 flex flex-col  justify-center items-center text-center uppercase mt-3 h-20">
        <span className="font-semibold">Circulation</span>
        <Image
          src="/pictograms/circulation.svg"
          alt="Circulation"
          width={50}
          height={50}
        />
      </div>

      <table className="w-full border-2 border-black border-collapse table-auto mt-1">
        <tbody>
          {/* Header */}
          <tr className="bg-yellow-100">
            <td className="border border-black p-2 w-[38%] text-center font-bold text-sm leading-tight">
              Phases où le risque peut être présent
            </td>

            <td className="border border-black p-2 w-[34%] text-center font-bold text-sm leading-tight">
              Mesures de prévention à respecter
            </td>

            <td className="border border-black p-0 w-[28%]">
              <table className="w-full border-collapse table-fixed">
                <tbody>
                  <tr>
                    <td
                      colSpan={3}
                      className="border-b border-black p-2 text-center font-bold text-sm"
                    >
                      Mise en œuvre des mesures
                    </td>
                  </tr>

                  <tr>
                    <td className="border-r border-black text-center text-sm p-1 w-1/3 leading-tight">
                      Université <br /> Paris VIII
                    </td>

                    <td className="border-r border-black text-center text-sm p-1 w-1/3">
                      E.E
                    </td>

                    <td className="text-center text-sm p-1 w-1/3">
                      Observations
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          {/* Contenu */}
          <tr>
            {/* Colonne phases */}
            <td className="border border-black align-top p-3">
              <div className="flex flex-col gap-4">
                <label className="text-sm flex items-start gap-1 leading-snug">
                  <input
                    {...register("Risk.circulation.phase.1")}
                    type="checkbox"
                    className="scale-75 accent-black w-4 shrink-0 mt-1"
                  />
                  Co activité personnels EE et l’Université Paris VIII
                </label>

                <label className="text-sm flex items-start gap-1 leading-snug">
                  <input
                    {...register("Risk.circulation.phase.2")}
                    type="checkbox"
                    className="scale-75 accent-black w-4 shrink-0 mt-1"
                  />
                  Livraison
                </label>

                <label className="text-sm flex items-start gap-1 leading-snug">
                  <input
                    {...register("Risk.circulation.phase.3")}
                    type="checkbox"
                    className="scale-75 accent-black w-4 shrink-0 mt-1"
                  />
                  Stationnement de véhicules
                </label>
              </div>
            </td>

            {/* Colonne mesures */}
            <td className="border border-black align-top p-3">
              <div className="flex flex-col gap-4">
                <label className="text-sm flex items-start gap-1 leading-snug">
                  <input
                    {...register("Risk.circulation.mesure.1")}
                    type="checkbox"
                    className="scale-75 accent-black w-4 shrink-0 mt-1"
                  />
                  Balisage de la zone d’intervention
                </label>

                <label className="text-sm flex items-start gap-1 leading-snug">
                  <input
                    {...register("Risk.circulation.mesure.2")}
                    type="checkbox"
                    className="scale-75 accent-black w-4 shrink-0 mt-1"
                  />
                  Respect des signalétiques (interdiction de stationner,
                  panneaux)
                </label>

                <label className="text-sm flex items-start gap-1 leading-snug">
                  <input
                    {...register("Risk.circulation.mesure.3")}
                    type="checkbox"
                    className="scale-75 accent-black w-4 shrink-0 mt-1"
                  />
                  Réalisation d’un protocole de chargement / déchargement
                </label>
              </div>
            </td>

            {/* Colonne mise en oeuvre */}
            <td className="border border-black p-0 align-top">
              <table className="w-full h-full border-collapse table-fixed">
                <tbody>
                  <tr>
                    {/* Université */}
                    <td className="border-r border-black align-top p-3 w-1/3">
                      <div className="flex flex-col gap-8 mt-0.5 items-center">
                        <input
                          {...register("Risk.circulation.universite.1")}
                          type="checkbox"
                          className="scale-75 accent-black w-4 shrink-0"
                        />

                        <input
                          {...register("Risk.circulation.universite.2")}
                          type="checkbox"
                          className="scale-75 accent-black w-4 shrink-0"
                        />

                        <input
                          {...register("Risk.circulation.universite.3")}
                          type="checkbox"
                          className="scale-75 accent-black w-4 shrink-0"
                        />
                      </div>
                    </td>

                    {/* EE */}
                    <td className="border-r border-black align-top p-3 w-1/3">
                      <div className="flex flex-col gap-8 items-center mt-0.5">
                        <input
                          {...register("Risk.circulation.ee.1")}
                          type="checkbox"
                          className="scale-75 accent-black w-4 shrink-0"
                        />

                        <input
                          {...register("Risk.circulation.ee.2")}
                          type="checkbox"
                          className="scale-75 accent-black w-4 shrink-0"
                        />

                        <input
                          {...register("Risk.circulation.ee.3")}
                          type="checkbox"
                          className="scale-75 accent-black w-4 shrink-0"
                        />
                      </div>
                    </td>

                    {/* Observations */}
                    <td className="align-top p-2">
                      <textarea
                        {...register("Risk.circulation.observations")}
                        className="w-full h-full min-h-45 resize-none outline-none text-sm p-1"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
