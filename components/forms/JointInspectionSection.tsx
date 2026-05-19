import { useFormContext } from "react-hook-form";

export default function JointInspectionSection() {
  const { register, watch } = useFormContext();
  const Societe = watch("Entreprise.titulaire.name");
  return (
    <table className="w-full border-2 border-black border-collapse table-fixed mt-1">
      <tbody>
        {/* Ligne titre */}
        <tr>
          <td className="border p-2" colSpan={3}>
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
                  {...register("commentaire")}
                  className="border px-2 py-0.5  text-center text-sm"
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
                    <input
                      {...register("commentaire")}
                      className="border px-2 py-0.5 w-full text-center text-sm"
                      placeholder=""
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center space-x-3">
                  <div className=" text-sm ">
                    Pour la Société {Societe} : {"  "}
                  </div>
                  <div>
                    <input
                      {...register("commentaire")}
                      className="border px-2 py-0.5 w-full text-center text-sm"
                      placeholder=""
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center space-x-3">
                  <div className=" text-sm ">
                    Pour l'Entreprise sous-traitante : {"  "}
                  </div>
                  <div>
                    <input
                      {...register("commentaire")}
                      className="border px-2 py-0.5 w-full text-center text-sm"
                      placeholder=""
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
