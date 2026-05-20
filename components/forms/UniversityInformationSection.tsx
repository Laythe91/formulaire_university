import { PRESIDENT_CONTACT } from "@/app/const/const";
import { useFormContext } from "react-hook-form";

export default function UniversityInformationSection() {
  const { register, watch } = useFormContext();
  return (
    <table className="w-full border-2 border-black border-collapse table-fixed mt-1">
      <tbody>
        {/* Ligne titre */}
        <tr>
          <td className="border p-2" colSpan={3}>
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
              <input
                {...register("commentaire")}
                className="border px-2 py-0.5 text-center text-sm"
                placeholder="Donneur d'ordre"
                type="text"
              />
            </div>
            <div className="text-sm mb-1 grid grid-cols-2 w-full">
              <div className="pl-2">
                Tél :{" "}
                <input
                  {...register("commentaire")}
                  className="border px-2 py-0.5 text-center text-sm"
                  placeholder="format 01.49.40.00.00"
                  type="text"
                />
              </div>
              <div className="">
                Portable :{" "}
                <input
                  {...register("commentaire")}
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
