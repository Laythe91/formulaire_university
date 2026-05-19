import { useFormContext } from "react-hook-form";

export default function RiskChoices() {
  const { register, watch } = useFormContext();

  return (
    <>
      <table className="w-full border-2 border-black border-collapse table-fixed mt-3">
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
                    {...register("risques.bruit.state")}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Bruit
                </label>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    {...register("risques.chutePied.state")}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Chute de plain pied
                </label>

                <div></div>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    {...register("risques.chuteHauteur.state")}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Chute de hauteur
                </label>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    {...register("risques.chuteMateriel.state")}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Chute de matériel
                </label>
                <div></div>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    {...register("risques.circulation.state")}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Circulation
                </label>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    {...register("risques.electrique.state")}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Electrique
                </label>

                <div></div>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    {...register("risques.espaceconfine.state")}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Espaces confines
                </label>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    {...register("risques.incendie.state")}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Incendie
                </label>

                <div></div>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    {...register("risques.machine.state")}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Machine
                </label>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    {...register("risques.manuelMeca.state")}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Manutention manuelle ou mecanique
                </label>
                <div></div>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    {...register("risques.outillage.state")}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Outillage
                </label>

                <label className="text-sm flex items-center gap-1 leading-snug ">
                  <input
                    type="checkbox"
                    {...register("risques.bioChim.state")}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Risque de contamination biologique <br />
                  et chimique
                </label>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
