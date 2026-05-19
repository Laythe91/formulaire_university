import { useFormContext } from "react-hook-form";

export default function OperationInformationSection() {
  const { register, watch } = useFormContext();
  const annuel = watch("Operation.annuel.state");
  const ponctuel = watch("Operation.ponctuel.state");
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
                  {...register("Operation.annuel.state")}
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0"
                />
                Annuelle
              </label>

              <label className="text-sm flex items-center gap-1 leading-snug">
                <input
                  {...register("Operation.400.state")}
                  type="checkbox"
                  className="scale-75 accent-black w-4 shrink-0"
                />
                Plus de 400 heures
              </label>

              <div></div>

              <label className="text-sm flex items-center gap-1 leading-snug">
                <input
                  {...register("Operation.ponctuel.state")}
                  type="checkbox"
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

              <td className="border border-black p-2 w-1/3 text-center">
                <div className="font-semibold text-sm">
                  Date prévisible de début :
                  <input
                    {...register("Operation.date.start")}
                    className="border px-2 py-0.5 w-full text-center uppercase text-sm"
                    placeholder="JJ/MM/AAA"
                    type="text"
                  />
                </div>
              </td>

              <td className="border border-black p-2 w-1/3 text-center">
                <div className="font-semibold text-sm">
                  Date prévisible de fin :
                  <input
                    {...register("Operation.date.end")}
                    className="border px-2 py-0.5 w-full text-center uppercase text-sm"
                    placeholder="JJ/MM/AAA"
                    type="text"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="border p-1" colSpan={3}>
                <div className=" font-bold text-sm ">
                  Nature/Objet de l'opération :
                </div>
                <div>
                  {" "}
                  <input
                    {...register("Operation.objet")}
                    className="border px-2 py-0.5 w-full text-center text-sm"
                    placeholder="Nature/Objet de l'opération à indiquer ici"
                    type="text"
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
