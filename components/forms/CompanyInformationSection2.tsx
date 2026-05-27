import { useFieldArray, useFormContext } from "react-hook-form";
import EntrepriseTitulaireInformation from "./EntrepriseTitulaireInformation";
import EntrepriseSousTraitanteInformation from "./EntrepriseSousTraitanteInformation";
import React, { useEffect } from "react";
import { EntreprisePersonne } from "@/types/entreprise.type";

export default function CompanyInformationSection2() {
  const { register, watch, setValue, control } = useFormContext();
  const entrepriseTitulaire = watch("Entreprise.titulaire.checkbox.state");
  const entrepriseTitulaireState = watch("Entreprise.titulaire.state");
  //const soutraitantCare = watch("Entreprise.soustraitant.checkbox.state");
  //const soustraitantState = watch("Entreprise.soustraitante.state");

  const count = watch("Entreprise.renseignement.soustraitant");

  const { fields, append, remove, replace } = useFieldArray({
    control,
    name: "Entreprise.soustraitante",
  });

  useEffect(() => {
    const nb = Number(count || 0);
    if (nb < 0) return;

    const newArray = Array.from({ length: nb }, (_, i) => ({
      state: false,
      checkbox: { state: false },
      name: "",
      address: "",
      effectif: "",
      tel: "",
      fax: "",
      representant: { name: "", tel: "", mail: "" },
      responsable: { name: "", tel: "", mail: "" },
    }));

    replace(newArray);
  }, [count]);

  const sousTraitants: EntreprisePersonne[] =
    watch("Entreprise.soustraitante") || [];

  useEffect(() => {
    const subscription = watch((value) => {
      const titulaireOK =
        value.Entreprise?.titulaire?.checkbox?.state &&
        value.Entreprise?.titulaire?.state;

      const sousTraitants = (value.Entreprise?.soustraitante ??
        []) as EntreprisePersonne[];
      const sousTraitantsOK =
        sousTraitants.length === 0
          ? true
          : sousTraitants.every((st) => st?.state === true);

      const isValid = titulaireOK && sousTraitantsOK;

      setValue("Entreprise.information.state", isValid, {
        shouldDirty: false,
        shouldTouch: false,
        shouldValidate: false,
      });
    });

    return () => subscription.unsubscribe();
  }, [watch, setValue]);

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

        {fields.map((field, index) => (
          <React.Fragment key={field.id}>
            <tr key={field.id}>
              <td className="border border-black p-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold uppercase text-sm">
                    Entreprise sous-traitante N°{index + 1}
                  </span>

                  <input
                    {...register(
                      `Entreprise.soustraitante.${index}.checkbox.state`,
                    )}
                    type="checkbox"
                    className="w-4 h-4 accent-black"
                  />
                </div>
              </td>
            </tr>
            <EntrepriseSousTraitanteInformation index={index} />
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}
