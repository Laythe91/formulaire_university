import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

export default function EntrepriseSousTraitanteInformation() {
  const { register, watch, setValue } = useFormContext();
  const SousTraitant = watch("Entreprise.soustraitant.checkbox.state");

  const name = watch("Entreprise.soustraitante.name");
  const address = watch("Entreprise.soustraitante.address");
  const effectif = watch("Entreprise.soustraitante.effectif");

  const tel = watch("Entreprise.soustraitante.tel");
  const fax = watch("Entreprise.soustraitante.fax");

  const representantName = watch("Entreprise.soustraitante.representant.name");

  const representantTel = watch("Entreprise.soustraitante.representant.tel");

  const representantMail = watch("Entreprise.soustraitante.representant.mail");

  const responsableName = watch("Entreprise.soustraitante.responsable.name");

  const responsableTel = watch("Entreprise.soustraitante.responsable.tel");

  const responsableMail = watch("Entreprise.soustraitante.responsable.mail");

  const phoneRegex = /^(\d{2}\.){4}\d{2}$/;

  const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    if (!SousTraitant) {
      setValue("Entreprise.soustraitante.state", false);
      return;
    }

    const valid =
      name?.trim().length >= 2 &&
      address?.trim().length >= 5 &&
      effectif?.trim().length >= 1 &&
      phoneRegex.test(tel || "") &&
      phoneRegex.test(fax || "") &&
      representantName?.trim().length >= 2 &&
      phoneRegex.test(representantTel || "") &&
      mailRegex.test(representantMail || "") &&
      responsableName?.trim().length >= 2 &&
      phoneRegex.test(responsableTel || "") &&
      mailRegex.test(responsableMail || "");

    setValue("Entreprise.soustraitante.state", valid, {
      shouldDirty: false,
    });
  }, [
    SousTraitant,

    name,
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
      {SousTraitant && (
        <tr>
          <td className="border p-2 border-black">
            <div className="flex flex-row items-center gap-3">
              <div className=" font-bold text-sm ">
                Nom de l'entreprise sous-traintante : {"  "}
              </div>
              <div className="w-120">
                <input
                  {...register("Entreprise.soustraitante.name")}
                  className="border px-2 py-0.5 w-full text-start text-sm"
                  placeholder="Nom de l'entreprise soustraitante ici"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-row gap-3 mt-3">
              <div className=" font-bold text-sm mt-2">
                Adresse de l'entreprise : {"  "}
              </div>
              <div className="w-100">
                <textarea
                  {...register("Entreprise.soustraitante.address")}
                  placeholder="Adresse entreprise soustraitante"
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
                    {...register("Entreprise.soustraitante.effectif")}
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
                    {...register("Entreprise.soustraitante.tel")}
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
                    {...register("Entreprise.soustraitante.fax")}
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
                    {...register("Entreprise.soustraitante.representant.name")}
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
                    {...register("Entreprise.soustraitante.representant.tel")}
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
                    {...register("Entreprise.soustraitante.representant.mail")}
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
                    {...register("Entreprise.soustraitante.responsable.name")}
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
                    {...register("Entreprise.soustraitante.responsable.tel")}
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
                    {...register("Entreprise.soustraitante.responsable.mail")}
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
