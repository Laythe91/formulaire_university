import { useFormContext } from "react-hook-form";

export default function CompanyInformationSubSection2() {
  const { register, watch } = useFormContext();
  const SousTraitant = watch("Entreprise.soustraitant.state");
  return (
    <>
      {SousTraitant && (
        <tr>
          <td className="border p-2">
            <div className="flex flex-row items-center gap-3">
              <div className=" font-bold text-sm ">
                Nom de l'entreprise sous-traintante : {"  "}
              </div>
              <div className="w-120">
                <input
                  {...register("commentaire")}
                  className="border px-2 py-0.5 w-full text-center text-sm"
                  placeholder="Nom de l'entreprise Titulaire ici"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-row gap-3 mt-3">
              <div className=" font-bold text-sm ">
                Adresse de l'entreprise : {"  "}
              </div>
              <div className="w-150">
                <textarea
                  {...register("mesuresHauteur")}
                  className="border p-2 w-70"
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
                    {...register("commentaire")}
                    className="border px-2 py-0.5 w-full text-center text-sm"
                    placeholder="Nombre effectif prévu"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center gap-3">
                <div className=" font-bold text-sm ">Tél : {"  "}</div>
                <div>
                  <input
                    {...register("commentaire")}
                    className="border px-2 py-0.5 w-full text-center text-sm"
                    placeholder="Numéro de Téléphone"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center gap-3">
                <div className=" font-bold text-sm ">Fax : {"  "}</div>
                <div>
                  <input
                    {...register("commentaire")}
                    className="border px-2 py-0.5 w-full text-center text-sm"
                    placeholder="Numéro de Fax"
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
                    {...register("commentaire")}
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
                    {...register("commentaire")}
                    className="border px-2 py-0.5 w-full text-center text-sm"
                    placeholder="Numéro de Téléphone"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center gap-3">
                <div className=" font-bold text-sm ">Mail : {"  "}</div>
                <div>
                  <input
                    {...register("commentaire")}
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
                    {...register("commentaire")}
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
                    {...register("commentaire")}
                    className="border px-2 py-0.5 w-full text-center text-sm"
                    placeholder="Numéro de Téléphone"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center gap-3">
                <div className=" font-bold text-sm ">Mail : {"  "}</div>
                <div>
                  <input
                    {...register("commentaire")}
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
