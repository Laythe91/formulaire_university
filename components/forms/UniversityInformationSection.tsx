import { PRESIDENT_CONTACT } from "@/app/const/const";
import { useFormContext } from "react-hook-form";
import { useEffect } from "react";

export default function UniversityInformationSection() {
  const { register, watch, setValue } = useFormContext();

  const nom = watch("UniversityInformation.nom");
  const phone1 = watch("UniversityInformation.phone1");
  const phone2 = watch("UniversityInformation.phone2");

  const phoneRegex = /^(\d{2}\.){4}\d{2}$/;

  useEffect(() => {
    const isValid =
      (nom?.trim().length ?? 0) > 0 &&
      phoneRegex.test(phone1 || "") &&
      phoneRegex.test(phone2 || "");

    setValue("UniversityInformation.state", isValid, {
      shouldDirty: false,
    });
  }, [nom, phone1, phone2, setValue]);

  return (
    <table className="w-full border-2 border-black border-collapse table-fixed mt-1">
      <tbody>
        {/* Ligne titre */}
        <tr>
          <td className="border border-black p-2" colSpan={3}>
            {/* Titre */}
            <div className="font-bold uppercase underline text-sm mb-3">
              RENSEIGNEMENTS SUR L’UNIVERSITE PARIS VIII (Entreprise
              utilisatrice){" "}
            </div>
            <div className="text-sm mb-1">
              <span className="font-bold">
                Nom et fonction du donneur d'ordre : {PRESIDENT_CONTACT.name}
              </span>
              , Président de l'université
            </div>
            <div className="text-sm mb-1 grid grid-cols-2 w-full">
              <div className="pl-2">Tél : {PRESIDENT_CONTACT.Tel}</div>

              <div>Fax : {PRESIDENT_CONTACT.Fax}</div>
            </div>
            <div className="text-sm mb-1">
              <span className="font-bold">
                Nom de la personne chargée du suivi de l’opération (si
                différente du donneur d’ordre) :{" "}
              </span>
              <textarea
                {...register("UniversityInformation.nom")}
                rows={1}
                onInput={(e) => {
                  e.currentTarget.style.height = "auto";
                  e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
                }}
                className="border px-2 py-1 text-sm resize-none overflow-hidden break-all whitespace-pre-wrap align-middle ml-1  w-60"
                placeholder="Donneur d'ordre"
              />
            </div>
            <div className="text-sm mb-1 mt-3 grid grid-cols-2 w-full">
              <div className="pl-2">
                Tél :{" "}
                <input
                  {...register("UniversityInformation.phone1")}
                  maxLength={14}
                  className="border px-2 py-0.5 text-center text-sm"
                  placeholder="format 01.49.40.00.00"
                  type="text"
                />
              </div>
              <div className="">
                Portable :{" "}
                <input
                  {...register("UniversityInformation.phone2")}
                  maxLength={14}
                  className="border px-2 py-0.5 text-center text-sm"
                  placeholder="format 06.00.00.00.00"
                  type="text"
                />
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
