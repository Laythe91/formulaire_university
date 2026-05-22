import { useFormContext } from "react-hook-form";
import EntrepriseTitulaireInformation from "./EntrepriseTitulaireInformation";
import EntrepriseSousTraitanteInformation from "./EntrepriseSousTraitanteInformation";

export default function CompanyInformationSection2() {
  const { register, watch } = useFormContext();
  const EntrepriseTitulaire = watch("Entreprise.titulaire.checkbox.state");
  return (
    <table className="w-full border-2 border-black border-collapse table-fixed mt-3">
      <tbody>
        {/* Ligne titre */}
        <tr>
          <td className="border border-black p-2">
            <div className="flex items-center  gap-2">
              <span className="font-bold uppercase text-sm">
                Entreprise titulaire
              </span>

              <input
                {...register("Entreprise.titulaire.checkbox.state")}
                type="checkbox"
                className="w-4 h-4  accent-black"
              />
            </div>
          </td>
        </tr>
        <EntrepriseTitulaireInformation />

        {EntrepriseTitulaire && (
          <>
            <tr>
              <td className="border border-black p-2">
                <div className="flex items-center  gap-2">
                  <span className="font-bold uppercase text-sm">
                    Entreprise sous-traitante N°1
                  </span>

                  <input
                    {...register("Entreprise.soustraitant.checkbox.state")}
                    type="checkbox"
                    className="w-4 h-4  accent-black"
                  />
                </div>
              </td>
            </tr>

            <EntrepriseSousTraitanteInformation />
          </>
        )}
      </tbody>
    </table>
  );
}
