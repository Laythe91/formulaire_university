import { useFormContext } from "react-hook-form";

export default function HeaderSection() {
  const { register, watch } = useFormContext();
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
          <td className="border p-1 align-middle w-1/3" rowSpan={2}>
            <div className="space-y-2 text-center">
              <div className="flex flex-col">
                <span className=" text-gray-600">Plan</span>
                <span className="font-semibold">Plan de prévention A1</span>
              </div>

              <div className="flex flex-col">
                <span className=" text-gray-600">Date</span>
                <span className="font-semibold">
                  {new Date().toLocaleDateString()}
                </span>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          {/* Colonne milieu ligne 2 */}
          <td className="border border-black p-2 w-2/3 text-center">
            <div className="flex flex-col items-center gap-1">
              <span className="font-semibold text-sm">PLAN DE PREVENTION</span>

              <input
                {...register("Entreprise.titulaire.name")}
                className="border px-2 py-0.5 w-full text-center uppercase text-sm font-semibold"
                placeholder="Nom de société"
                type="text"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
