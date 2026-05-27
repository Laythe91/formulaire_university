import { useFormContext } from "react-hook-form";

export default function RiskChoicesPDF() {
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
                    {...register("Risk.bruit.checkbox.state")}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Bruit
                </label>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    {...register("Risk.chuteHauteur.checkbox.state")}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Chute de hauteur
                </label>
                <div></div>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    {...register("Risk.chuteMateriel.checkbox.state")}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Chute de matériel
                </label>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    {...register("Risk.chutePied.checkbox.state")}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Chute de plain pied
                </label>

                <div></div>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    {...register("Risk.circulation.checkbox.state")}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Circulation
                </label>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    {...register("Risk.electrique.checkbox.state")}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Electrique
                </label>

                <div></div>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    {...register("Risk.espaceconfine.checkbox.state")}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Espaces confines
                </label>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    {...register("Risk.incendie.checkbox.state")}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Incendie
                </label>

                <div></div>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    {...register("Risk.machine.checkbox.state")}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Machine
                </label>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    {...register("Risk.manutention.checkbox.state")}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Manutention manuelle ou mecanique
                </label>
                <div></div>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    {...register("Risk.outillage.checkbox.state")}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Outillage
                </label>

                <label className="text-sm flex items-center gap-1 leading-snug ">
                  <input
                    type="checkbox"
                    {...register("Risk.bioChim.checkbox.state")}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Risque de contamination biologique <br />
                  et chimique
                </label>
                <div></div>
                <label className="text-sm flex items-center gap-1 leading-snug ">
                  <input
                    type="checkbox"
                    {...register("Risk.amiante.checkbox.state")}
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
