import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
type Props = {
  date: string;
};

export default function OperationInformationSection({ date }: Props) {
  const { register, watch, setValue } = useFormContext();
  // const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  // const yearRegex = /^\d{4}$/;
  const annuel = watch("Operation.annuel.state");
  const ponctuel = watch("Operation.ponctuel.state");
  const start = watch("Operation.date.start");
  const end = watch("Operation.date.end");
  const objet = watch("Operation.objet");
  const planValid = watch("Header.planNumber.state");
  const year = date.split("/")[2];

  const handleExclusive = (field: "annuel" | "ponctuel", value: boolean) => {
    if (field === "annuel") {
      setValue("Operation.annuel.state", value);
      if (value) {
        setValue("Operation.ponctuel.state", false);
        setValue("Operation.date.start", year);
        setValue("Operation.date.end", year);
        setValue("Header.planNumber.value", "");
      }
    }

    if (field === "ponctuel") {
      setValue("Operation.ponctuel.state", value);
      if (value) {
        setValue("Operation.annuel.state", false);
        setValue("Operation.date.start", "");
        setValue("Operation.date.end", "");
        setValue("Header.planNumber.value", "");
      }
    }
  };

  useEffect(() => {
    if (!annuel) return;
    if (!start) return;

    setValue("Operation.date.end", start, {
      shouldDirty: true,
      shouldValidate: true,
    });
  }, [start, annuel, setValue]);

  useEffect(() => {
    const hasType = annuel || ponctuel;
    const currentYear = new Date().getFullYear();
    // =========================
    // VALIDATION DATE
    // =========================
    let validDate = false;

    if (annuel) {
      const startYear = Number(start);

      validDate = /^\d{4}$/.test(start || "") && startYear >= currentYear;
    }

    if (ponctuel) {
      const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

      const startValid = dateRegex.test(start || "");
      const endValid = dateRegex.test(end || "");

      const parseDate = (d: string) => {
        const [day, month, year] = d.split("/").map(Number);
        return new Date(year, month - 1, day).getTime();
      };

      validDate =
        startValid &&
        endValid &&
        parseDate(end) >= parseDate(start) &&
        parseDate(start) >= parseDate(date);
    }
    const validObjet = (objet ?? "").trim().length >= 10;

    const isValid = hasType && validDate && validObjet && planValid;

    setValue("Operation.state", isValid, {
      shouldDirty: false,
    });
  }, [annuel, ponctuel, planValid, start, end, objet, setValue]);

  return (
    <table className="w-full border-2 border-black border-collapse table-fixed mt-3">
      <tbody>
        {/* Ligne titre */}
        <tr>
          <td className="border border-black p-2" colSpan={3}>
            {/* Titre */}
            <div className="font-bold uppercase underline text-sm mb-4">
              RENSEIGNEMENTS SUR L’OPÉRATION
            </div>

            {/* Contenu */}
            <div className="grid grid-cols-3 gap-y-2">
              <span className="text-center">Opération</span>

              <label className="text-sm flex items-center gap-1 leading-snug">
                <input
                  type="checkbox"
                  checked={annuel}
                  onChange={(e) => handleExclusive("annuel", e.target.checked)}
                  className="scale-75 accent-black w-4 shrink-0"
                />
                Annuelle
              </label>

              <label className="text-sm flex items-center gap-1 leading-snug">
                <input
                  {...register("Operation.plus400h.state")}
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0"
                />
                Plus de 400 heures
              </label>

              <div></div>

              <label className="text-sm flex items-center gap-1 leading-snug">
                <input
                  type="checkbox"
                  checked={ponctuel}
                  onChange={(e) =>
                    handleExclusive("ponctuel", e.target.checked)
                  }
                  className="scale-75 accent-black w-4 shrink-0"
                />
                Ponctuelle
              </label>

              <label className="text-sm flex items-center gap-1 leading-snug">
                <input
                  {...register("Operation.danger.state")}
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0"
                />
                Travaux dangereux
              </label>
            </div>
          </td>
        </tr>
        {(annuel || ponctuel) && (
          <>
            {/* Ligne 3 colonnes */}
            <tr>
              <td className="border border-black p-2 w-1/3">
                <div className="font-semibold text-sm">Lieu exact:</div>
                <div className="font-semibold text-blue-700 leading-tight text-sm">
                  UNIVERSITÉ PARIS 8 <br /> 2 rue de la liberté <br />
                  93200 SAINT-DENIS
                </div>
              </td>

              {ponctuel && (
                <>
                  <td className="border border-black p-2 w-1/3 text-center">
                    <div className="font-semibold text-sm">
                      Date prévisible de début :
                      <input
                        {...register("Operation.date.start")}
                        maxLength={10}
                        className="border px-2 py-0.5 w-full text-center uppercase text-sm"
                        placeholder="JJ/MM/AAAA"
                        type="text"
                      />
                    </div>
                  </td>

                  <td className="border border-black p-2 w-1/3 text-center">
                    <div className="font-semibold text-sm">
                      Date prévisible de fin :
                      <input
                        {...register("Operation.date.end")}
                        maxLength={10}
                        className="border px-2 py-0.5 w-full text-center uppercase text-sm"
                        placeholder="JJ/MM/AAAA"
                        type="text"
                      />
                    </div>
                  </td>
                </>
              )}
              {annuel && (
                <>
                  <td
                    colSpan={2}
                    className="border border-black p-2 text-center"
                  >
                    <div className="font-semibold flex flex-col items-center text-sm">
                      <span>Année de prévention</span>{" "}
                      <input
                        {...register("Operation.date.start")}
                        maxLength={4}
                        className="border px-2 py-0.5 w-1/3 text-center uppercase text-sm"
                        placeholder="AAAA"
                        type="text"
                      />
                    </div>
                  </td>
                </>
              )}
            </tr>
            <tr>
              <td className="border border-black p-1" colSpan={3}>
                <div className=" font-bold text-sm ">
                  Nature/Objet de l'opération :
                </div>
                <div className="mt-1">
                  {" "}
                  <textarea
                    {...register("Operation.objet")}
                    rows={2}
                    onInput={(e) => {
                      e.currentTarget.style.height = "auto";
                      e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
                    }}
                    className="border px-2 py-1 w-full  text-sm resize-none overflow-hidden wrap-break-words whitespace-pre-wrap leading-tight"
                    placeholder="Nature/Objet de l'opération à indiquer ici"
                  />
                </div>
              </td>
            </tr>
          </>
        )}
      </tbody>
    </table>
  );
}
