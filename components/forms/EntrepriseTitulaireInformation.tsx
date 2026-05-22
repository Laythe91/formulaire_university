import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

export default function EntrepriseTitulaireInformation() {
  const { register, watch, setValue } = useFormContext();
  const EntrepriseTitulaire = watch("Entreprise.titulaire.checkbox.state");
  const EntrepriseTitulaireNom = watch("Entreprise.titulaire.name");
  const address = watch("Entreprise.titulaire.address");
  const effectif = watch("Entreprise.titulaire.effectif");

  const tel = watch("Entreprise.titulaire.tel");
  const fax = watch("Entreprise.titulaire.fax");

  const representantName = watch("Entreprise.titulaire.representant.name");

  const representantTel = watch("Entreprise.titulaire.representant.tel");

  const representantMail = watch("Entreprise.titulaire.representant.mail");

  const responsableName = watch("Entreprise.titulaire.responsable.name");

  const responsableTel = watch("Entreprise.titulaire.responsable.tel");

  const responsableMail = watch("Entreprise.titulaire.responsable.mail");
  const phoneRegex = /^(\d{2}\.){4}\d{2}$/;
  const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    const validPhones =
      phoneRegex.test(tel || "") &&
      phoneRegex.test(fax || "") &&
      phoneRegex.test(representantTel || "") &&
      phoneRegex.test(responsableTel || "");

    const validMails =
      mailRegex.test(representantMail || "") &&
      mailRegex.test(responsableMail || "");

    const validText =
      address?.trim().length > 0 &&
      effectif?.trim().length > 0 &&
      representantName?.trim().length > 0 &&
      responsableName?.trim().length > 0;

    const isValid = validPhones && validMails && validText;

    setValue("Entreprise.titulaire.state", isValid, {
      shouldDirty: false,
    });
  }, [
    address,
    effectif,
    tel,
    fax,
    representantName,
    representantTel,
    representantMail,
    responsableName,
    responsableTel,
    responsableMail,
    setValue,
  ]);

  return (
    <>
      {EntrepriseTitulaire && (
        <tr>
          <td className="border p-2 border-black">
            <div className="flex flex-row items-center gap-3">
              <div className=" font-bold text-sm ">
                Nom de l'entreprise Titulaire : {"  "}
              </div>
              <div>{EntrepriseTitulaireNom}</div>
            </div>
            <div className="flex flex-row gap-3 mt-3">
              <div className=" font-bold text-sm mt-2">
                Adresse de l'entreprise : {"  "}
              </div>
              <div className="w-100">
                <textarea
                  {...register("Entreprise.titulaire.address")}
                  placeholder="Adresse entreprise titulaire"
                  className="w-full min-h-15 h-20 border border-gray-300 p-2 text-sm outline-none resize-none focus:border-black transition-colors"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <div className="flex flex-row items-center gap-3">
                <div className=" font-bold text-sm ">
                  Effectif prévu : {"  "}
                </div>
                <div>
                  <input
                    {...register("Entreprise.titulaire.effectif")}
                    className="border px-2 py-0.5 w-full text-center text-sm"
                    placeholder="Nombre effectif prévu"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center space-x-4">
                <div className=" font-bold text-sm ">Tél : {"  "}</div>
                <div>
                  <input
                    {...register("Entreprise.titulaire.tel")}
                    className="border px-2 py-0.5 w-full text-center text-sm"
                    placeholder="format 01.00.00.00.00"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center gap-3">
                <div className=" font-bold text-sm ">Fax : {"  "}</div>
                <div>
                  <input
                    {...register("Entreprise.titulaire.fax")}
                    className="border px-2 py-0.5 w-full text-center text-sm"
                    placeholder="format 01.00.00.00.00"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <div className="flex flex-row items-center gap-3">
                <div className=" font-bold text-sm ">
                  Nom du représentant de l'entreprise : {"  "}
                </div>
                <div>
                  <input
                    {...register("Entreprise.titulaire.representant.name")}
                    className="border px-2 py-0.5 w-full text-center text-sm"
                    placeholder="Nom ici"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center gap-3">
                <div className=" font-bold text-sm ">Tél : {"  "}</div>
                <div>
                  <input
                    {...register("Entreprise.titulaire.representant.tel")}
                    className="border px-2 py-0.5 w-full text-center text-sm"
                    placeholder="format 06.00.00.00.00"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center gap-3">
                <div className=" font-bold text-sm ">Mail : {"  "}</div>
                <div>
                  <input
                    {...register("Entreprise.titulaire.representant.mail")}
                    className="border px-2 py-0.5 w-full text-center text-sm"
                    placeholder="Mail ici"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <div className="flex flex-row items-center gap-3">
                <div className=" font-bold text-sm ">
                  Nom du responsable du suivi des travaux: {"  "}
                </div>
                <div>
                  <input
                    {...register("Entreprise.titulaire.responsable.name")}
                    className="border px-2 py-0.5 w-full text-center text-sm"
                    placeholder="Nom ici"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center gap-3">
                <div className=" font-bold text-sm ">Tél : {"  "}</div>
                <div>
                  <input
                    {...register("Entreprise.titulaire.responsable.tel")}
                    className="border px-2 py-0.5 w-full text-center text-sm"
                    placeholder="format 06.00.00.00.00"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center gap-3">
                <div className=" font-bold text-sm ">Mail : {"  "}</div>
                <div>
                  <input
                    {...register("Entreprise.titulaire.responsable.mail")}
                    className="border px-2 py-0.5 w-full text-center text-sm"
                    placeholder="Mail ici"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
