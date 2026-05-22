import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

export default function ExecutionConditionSection() {
  const { register, watch, setValue } = useFormContext();
  const existante = watch("Condition.1.state");
  const inexistante = watch("Condition.2.state");

  const cond1 = watch("Condition.1.state");
  const cond2 = watch("Condition.2.state");
  const cond3 = watch("Condition.3.state");

  useEffect(() => {
    const valid = (cond1 || cond2) && cond3;

    setValue("Condition.state", valid, {
      shouldDirty: false,
    });
  }, [cond1, cond2, cond3, setValue]);

  const handleExclusive = (
    field: "existante" | "inexistante",
    value: boolean,
  ) => {
    if (field === "existante") {
      setValue("Condition.1.state", value);
      if (value) {
        setValue("Condition.2.state", false);
      }
    }

    if (field === "inexistante") {
      setValue("Condition.2.state", value);
      if (value) {
        setValue("Condition.1.state", false);
      }
    }
  };

  return (
    <table className="w-full border-2 border-black border-collapse table-fixed mt-1">
      <tbody>
        {/* Ligne titre */}
        <tr>
          <td className="border p-2" colSpan={3}>
            {/* Titre */}
            <div className="font-bold uppercase underline text-sm mb-1">
              Condition d'éxécution
            </div>

            {/* Contenu */}
            <div className="flex flex-col">
              <span className="text-sm">Accès, occupation des lieux :</span>

              <label className="text-sm flex items-start pl-20 leading-snug">
                <input
                  type="checkbox"
                  checked={existante}
                  onChange={(e) =>
                    handleExclusive("existante", e.target.checked)
                  }
                  className="scale-75 accent-black mt-1 w-4 shrink-0"
                />
                Protections collectives existantes
              </label>

              <label className="text-sm flex items-start pl-20 leading-snug">
                <input
                  type="checkbox"
                  checked={inexistante}
                  onChange={(e) =>
                    handleExclusive("inexistante", e.target.checked)
                  }
                  className="scale-75 accent-black mt-1 w-4 shrink-0"
                />
                Protections collectives inexistantes
              </label>

              <label className="text-sm flex items-start pl-20 leading-snug">
                <input
                  type="checkbox"
                  {...register("Condition.3.state")}
                  className="scale-75 accent-black mt-1 w-4 shrink-0"
                />
                Protections individuelles EPI à définir précisément dans le
                présent plan de prévention
              </label>
              <span className="text-sm font-bold mt-3">
                Documents à fournir et à presenter le jour de l'opération :
              </span>
              <label className="text-sm flex items-start pl-20 leading-snug">
                <input
                  type="checkbox"
                  {...register("Condition.4.state")}
                  className="scale-75 accent-black mt-1 w-4 shrink-0"
                />

                <span>
                  Certificat d’aptitude à la conduite en sécurité : Si
                  utilisation de la nacelle CACES (décret n° 98-1084 du 2
                  décembre 1998)
                </span>
              </label>
              <label className="text-sm flex items-start pl-20 leading-snug">
                <input
                  type="checkbox"
                  {...register("Condition.5.state")}
                  className="scale-75 accent-black mt-1 w-4 shrink-0"
                />

                <span>
                  Certificat de qualification professionnelle :
                  <span className="font-bold ml-1">
                    Habilitation électrique – Titre d’habilitation électrique à
                    fournir avec le présent Plan de Prévention
                  </span>
                </span>
              </label>
              <label className="text-sm flex items-start pl-20 leading-snug">
                <input
                  type="checkbox"
                  {...register("Condition.6.state")}
                  className="scale-75 accent-black mt-1 w-4 shrink-0"
                />
                Sauveteur Secouriste du Travail – SST (Cf Décret n° 2004-924 du
                1er septembre 2004)
              </label>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
