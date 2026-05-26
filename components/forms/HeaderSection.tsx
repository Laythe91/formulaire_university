import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  date: string;
};

export default function HeaderSection({ date }: Props) {
  const { register, watch, setValue } = useFormContext();

  const ponctuel = watch("Operation.ponctuel.state");

  const planNumber = watch("Header.planNumber.value");

  const nomSociete = watch("Entreprise.titulaire.name");

  useEffect(() => {
    setValue("Header.date", date, {
      shouldDirty: false,
    });
  });

  useEffect(() => {
    // =========================
    // VALIDATION PLAN NUMBER
    // =========================

    let planValid = false;

    const value = planNumber || "";

    // ponctuel => P-123 obligatoire
    if (ponctuel) {
      planValid = /^P-\d+$/.test(value);
    }

    // annuel => 123 uniquement
    else {
      planValid = /^\d+$/.test(value);
    }

    setValue("Header.planNumber.state", planValid);

    // =========================
    // HEADER GLOBAL
    // =========================

    const societeValid = nomSociete?.trim().length >= 2;

    const headerValid = societeValid;

    setValue("Header.state", headerValid, {
      shouldDirty: false,
    });
  }, [planNumber, ponctuel, nomSociete, setValue]);

  return (
    <table className="w-full border-2 border-black border-collapse table-fixed">
      <tbody>
        <tr>
          {/* Colonne gauche (2 lignes fusionnées) */}
          <td
            className="border border-black p-1 align-middle text-center w-1/3"
            rowSpan={2}
          >
            <div className="space-y-1">
              <div className="font-semibold">UNIVERSITE PARIS VIII</div>
              <div>Service Hygiène et Sécurité</div>
            </div>
          </td>

          {/* Colonne milieu ligne 1 */}
          <td className="border border-black p-2 w-2/3 text-center">
            <span className="font-semibold">PREVENTIONS DES RISQUES</span>
          </td>

          {/* Colonne droite (2 lignes fusionnées) */}
          <td
            className="border  border-black p-1 align-middle w-1/3"
            rowSpan={2}
          >
            <div className="space-y-2 text-center">
              <div className="flex flex-col">
                <span className=" text-gray-600">Plan</span>
                <div className="flex items-center justify-center gap-1">
                  {/* PREFIXE P- uniquement si ponctuel */}

                  <input
                    {...register("Header.planNumber.value")}
                    placeholder={ponctuel ? "P-Numéro" : "Numéro"}
                    className="border border-black px-2 py-0.5 w-24 text-center text-sm font-semibold"
                    type="text"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <span className=" text-gray-600">Date</span>
                <span className="font-semibold">{date}</span>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          {/* Colonne milieu ligne 2 */}
          <td className="border border-black p-2 w-2/3 text-center">
            <div className="flex flex-col items-center gap-1">
              <span className="font-semibold text-sm">PLAN DE PREVENTION</span>

              <textarea
                {...register("Entreprise.titulaire.name")}
                rows={1}
                onInput={(e) => {
                  e.currentTarget.style.height = "auto";
                  e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
                }}
                className="border px-2 py-1 w-full text-center uppercase text-sm font-semibold resize-none overflow-hidden leading-tight"
                placeholder="Nom de société"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
