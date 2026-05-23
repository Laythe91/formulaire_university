import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

export default function FilesToCompanySection() {
  const { register, watch, setValue } = useFormContext();
  const prevention = watch("Document.planPrevention.state");
  const consigne = watch("Document.consigne.state");
  useEffect(() => {
    const isValid = prevention && consigne;

    setValue("Document.state", isValid, {
      shouldDirty: false,
    });
  }, [consigne, prevention, setValue]);
  return (
    <>
      <table className="w-full border-2 border-black border-collapse table-fixed mt-3">
        <tbody>
          {/* Ligne titre */}
          <tr>
            <td className="border border-black p-2" colSpan={2}>
              {/* Titre */}
              <div className="font-bold uppercase underline text-sm mb-4">
                Documents remis et expliques à l'entreprise exterieure
              </div>

              {/* Contenu */}
              <div className="grid grid-cols-1 gap-y-2 mx-10">
                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    {...register("Document.planPrevention.state")}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Plan de prévention
                </label>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    {...register("Document.consigne.state")}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Consignes générales de sécurité
                </label>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    {...register("Document.planSite.state")}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Plan du site (plan de masse)
                </label>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    {...register("Document.permisFeu.state")}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Permis de feu (à demander au poste de sécurité incendie)
                </label>

                <label className="text-sm flex items-center gap-1 leading-snug">
                  <input
                    type="checkbox"
                    {...register("Document.dta.state")}
                    className="scale-75 accent-black w-4 shrink-0"
                  />
                  Dossier Amiante DTA
                </label>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
