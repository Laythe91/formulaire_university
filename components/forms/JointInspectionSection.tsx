import { useSousTraitants } from "@/app/hooks/useSousTraitans";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

export default function JointInspectionSection() {
  const { register, watch, setValue } = useFormContext();
  const { count } = useSousTraitants();
  const Societe = watch("Entreprise.titulaire.name");
  const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  const date = watch("Inspection.date");
  const university = watch("Inspection.university");
  const titulaire = watch("Inspection.titulaire");
  const soustraitants = Array.from({ length: count }).map((_, index) =>
    watch(`Inspection.soustraitant.${index}`),
  );

  useEffect(() => {
    let isValid = false;

    const validDate = dateRegex.test(date);

    const validUniversity = (university ?? "").trim().length >= 3;
    const validTitulaire = (titulaire ?? "").trim().length >= 3;
    //const validSoustraitant = (soustraitant ?? "").trim().length >= 3;
    const validSoustraitant =
      count === 0 ||
      (soustraitants ?? []).every((v: string) => (v ?? "").trim().length >= 3);

    if (count > 0) {
      isValid =
        validUniversity && validTitulaire && validDate && validSoustraitant;
    } else {
      isValid = validUniversity && validTitulaire && validDate;
    }

    setValue("Inspection.state", isValid, {
      shouldDirty: false,
    });
  }, [university, titulaire, soustraitants, date, count, setValue]);

  return (
    <table className="w-full border-2 border-black border-collapse table-fixed mt-4">
      <tbody>
        {/* Ligne titre */}
        <tr>
          <td className="border border-black p-2" colSpan={3}>
            {/* Titre */}
            <div className="font-bold underline text-sm mb-5">
              INSPECTION COMMUNE (préalable au début de l'opération)
            </div>
            <div className="flex flex-row items-center space-x-3">
              <div className=" font-bold text-sm ">
                Date de l'inspection : {"  "}
              </div>
              <div className="w-120">
                <input
                  {...register("Inspection.date")}
                  className="border px-2 py-0.5  text-center text-sm"
                  maxLength={10}
                  placeholder="JJ/MM/AAAA"
                  type="text"
                />
              </div>
            </div>
            <div className=" font-bold text-sm mt-4">
              Personnes et entreprises qui y ont participé :
            </div>
            <div className="mx-10">
              <div className="flex flex-col space-y-2 mt-2">
                <div className="flex flex-row items-center space-x-3">
                  <div className=" text-sm ">
                    Pour l'Université Paris VIII : {"  "}
                  </div>
                  <div>
                    <textarea
                      {...register("Inspection.university")}
                      rows={1}
                      onInput={(e) => {
                        e.currentTarget.style.height = "auto";
                        e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
                      }}
                      className="border px-2 py-1 w-125 text-sm resize-none overflow-hidden wrap-break-words whitespace-pre-wrap leading-tight"
                      placeholder="Nom ici"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center space-x-3">
                  <div className=" text-sm ">
                    Pour la Société {Societe} : {"  "}
                  </div>
                  <div>
                    <textarea
                      {...register("Inspection.titulaire")}
                      rows={1}
                      onInput={(e) => {
                        e.currentTarget.style.height = "auto";
                        e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
                      }}
                      className="border px-2 py-1 w-125 text-sm resize-none overflow-hidden wrap-break-words whitespace-pre-wrap leading-tight"
                      placeholder="Nom ici"
                    />
                  </div>
                </div>
                {count > 0 &&
                  Array.from({ length: count }).map((_, index) => (
                    <div
                      key={index}
                      className="flex flex-row items-center space-x-3"
                    >
                      <div className="text-sm">
                        Pour l'Entreprise sous-traitante {index + 1} :
                      </div>

                      <div>
                        <textarea
                          {...register(`Inspection.soustraitant.${index}`)}
                          rows={1}
                          onInput={(e) => {
                            e.currentTarget.style.height = "auto";
                            e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
                          }}
                          className="border px-2 py-1 w-125 text-sm resize-none overflow-hidden wrap-break-words whitespace-pre-wrap leading-tight"
                          placeholder="Nom ici"
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
