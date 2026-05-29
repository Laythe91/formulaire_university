import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

export default function EntrepriseSousTraitanteInformation({
  index,
}: {
  index: number;
}) {
  const { register, watch, setValue } = useFormContext();

  const SousTraitant = watch(
    `Entreprise.soustraitante.${index}.checkbox.state`,
  );

  const name = watch(`Entreprise.soustraitante.${index}.name`);
  const address = watch(`Entreprise.soustraitante.${index}.address`);
  const effectif = watch(`Entreprise.soustraitante.${index}.effectif`);

  const tel = watch(`Entreprise.soustraitante.${index}.tel`);
  const fax = watch(`Entreprise.soustraitante.${index}.fax`);

  const representantName = watch(
    `Entreprise.soustraitante.${index}.representant.name`,
  );
  const representantTel = watch(
    `Entreprise.soustraitante.${index}.representant.tel`,
  );
  const representantMail = watch(
    `Entreprise.soustraitante.${index}.representant.mail`,
  );

  const responsableName = watch(
    `Entreprise.soustraitante.${index}.responsable.name`,
  );
  const responsableTel = watch(
    `Entreprise.soustraitante.${index}.responsable.tel`,
  );
  const responsableMail = watch(
    `Entreprise.soustraitante.${index}.responsable.mail`,
  );

  const phoneRegex = /^(\d{2}\.){4}\d{2}$/;
  const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const numberRegex = /^\d+$/;

  useEffect(() => {
    if (!SousTraitant) {
      setValue(`Entreprise.soustraitante.${index}.state`, false);
      return;
    }

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
      numberRegex.test(effectif || "") &&
      representantName?.trim().length > 0 &&
      responsableName?.trim().length > 0;

    setValue(
      `Entreprise.soustraitante.${index}.state`,
      validPhones && validMails && validText,
      {
        shouldDirty: false,
        shouldTouch: false,
      },
    );
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
    index,
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
              <div>
                <textarea
                  {...register(`Entreprise.soustraitante.${index}.name`)}
                  rows={1}
                  onInput={(e) => {
                    e.currentTarget.style.height = "auto";
                    e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
                  }}
                  className="border px-2 py-0.5 w-125 text-start text-sm resize-none overflow-hidden wrap-break-words whitespace-pre-wrap leading-tight"
                  placeholder="Nom de l'entreprise soustraitante ici"
                />
              </div>
            </div>
            <div className="flex flex-row gap-3 mt-3">
              <div className=" font-bold text-sm mt-2">
                Adresse de l'entreprise : {"  "}
              </div>
              <div className="w-100">
                <textarea
                  {...register(`Entreprise.soustraitante.${index}.address`)}
                  placeholder="Adresse entreprise soustraitante"
                  rows={3}
                  onInput={(e) => {
                    e.currentTarget.style.height = "auto";
                    e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
                  }}
                  className="w-full min-h-15 border p-2 text-sm resize-none overflow-hidden wrap-break-words whitespace-pre-wrap"
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
                    {...register(`Entreprise.soustraitante.${index}.effectif`)}
                    maxLength={6}
                    className="border px-2 py-0.5 w-20 text-center text-sm"
                    placeholder=""
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center space-x-4">
                <div className=" font-bold text-sm ">Tél : {"  "}</div>
                <div>
                  <input
                    {...register(`Entreprise.soustraitante.${index}.tel`)}
                    maxLength={14}
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
                    {...register(`Entreprise.soustraitante.${index}.fax`)}
                    maxLength={14}
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
                  <textarea
                    {...register(
                      `Entreprise.soustraitante.${index}.representant.name`,
                    )}
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
              <div className="flex flex-row items-center gap-3">
                <div className=" font-bold text-sm ">Tél : {"  "}</div>
                <div>
                  <input
                    {...register(
                      `Entreprise.soustraitante.${index}.representant.tel`,
                    )}
                    maxLength={14}
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
                    {...register(
                      `Entreprise.soustraitante.${index}.representant.mail`,
                    )}
                    maxLength={100}
                    className="border px-2 py-0.5 w-170 text-sm"
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
                  <textarea
                    {...register(
                      `Entreprise.soustraitante.${index}.responsable.name`,
                    )}
                    rows={1}
                    onInput={(e) => {
                      e.currentTarget.style.height = "auto";
                      e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
                    }}
                    className="border px-2 py-1 w-120 text-sm resize-none overflow-hidden wrap-break-words whitespace-pre-wrap leading-tight"
                    placeholder="Nom ici"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center gap-3">
                <div className=" font-bold text-sm ">Tél : {"  "}</div>
                <div>
                  <input
                    {...register(
                      `Entreprise.soustraitante.${index}.responsable.tel`,
                    )}
                    maxLength={14}
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
                    {...register(
                      `Entreprise.soustraitante.${index}.responsable.mail`,
                    )}
                    maxLength={100}
                    className="border px-2 py-0.5 w-170 text-sm"
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
