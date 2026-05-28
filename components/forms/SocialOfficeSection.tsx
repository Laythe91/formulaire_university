import { useFormContext } from "react-hook-form";

export default function SocialOfficeSection() {
  const { register, watch } = useFormContext();

  return (
    <>
      <table className="w-full border-2 border-black border-collapse table-fixed mt-3">
        <tbody>
          {/* Ligne titre */}
          <tr>
            <td className="border border-black p-2" colSpan={2}>
              {/* Titre */}
              <div className="font-bold uppercase underline text-sm">
                LOCAUX SOCIAUX MIS A DISPOSITION
              </div>
              <div className="font-bold text-sm mb-4">
                (indiquer la répartition éventuelle des charges)
              </div>

              {/* Contenu */}
              <div className="grid grid-cols-3 gap-y-2 mx-10">
                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    {...register("SocialOffice.Locker")}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Vestiaires
                </label>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    {...register("SocialOffice.Cafeteria")}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Réfectoire
                </label>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    {...register("SocialOffice.wc")}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Sanitaires dans l’Université
                </label>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
