import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

export default function CompanyInformationSection1() {
  const { register, watch, setValue } = useFormContext();

  const effectif1 = watch("Entreprise.renseignement.effectif1");
  const effectif2 = watch("Entreprise.renseignement.effectif2");
  const soustraitant = watch("Entreprise.renseignement.soustraitant");

  const numberRegex = /^\d+$/;

  useEffect(() => {
    const valid =
      numberRegex.test(effectif1 || "") &&
      numberRegex.test(effectif2 || "") &&
      numberRegex.test(soustraitant || "");

    setValue("Entreprise.renseignement.state", valid, {
      shouldDirty: false,
    });
  }, [effectif1, effectif2, soustraitant, setValue]);

  return (
    <table className="w-full border-2 border-black border-collapse table-fixed mt-1">
      <tbody>
        {/* Ligne titre */}
        <tr>
          <td className="border border-black p-2" colSpan={3}>
            {/* Titre */}
            <div className="font-bold uppercase underline text-sm mb-3">
              Renseignements sur L’Entreprise (Entreprise extérieure)
            </div>
            <div className="flex flex-row gap-10">
              <div className="text-sm mb-1">
                <span className="font-bold">Effectif total prévu : </span>
                <input
                  {...register("Entreprise.renseignement.effectif1")}
                  className="border px-2 py-0.5 text-center text-sm w-13"
                  placeholder=""
                  type="text"
                />
                <span className="font-bold"> personnes </span>
              </div>
              <div className="text-sm mb-1">
                <span className="font-bold">dont encadrement : </span>
                <input
                  {...register("Entreprise.renseignement.effectif2")}
                  className="border px-2 py-0.5 text-center text-sm w-13"
                  placeholder=""
                  type="text"
                />
                <span className="font-bold"> personnes </span>
              </div>
            </div>
            <div className="text-sm mb-1">
              <span className="font-bold">
                Nombre d'entreprises sous-traitantes (mettre 0 si aucune) :{" "}
              </span>
              <input
                {...register("Entreprise.renseignement.soustraitant")}
                className="border px-2 py-0.5 text-center text-sm w-13"
                placeholder=""
                type="text"
              />
            </div>
            <div className="text-sm ">
              {" "}
              <span className="underline">Horaire de travail</span> : de 08h00 à
              12h00 Et de 13h00 à 17h00
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
