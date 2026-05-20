import { PRESIDENT_CONTACT } from "@/app/const/const";
import { useFormContext } from "react-hook-form";

export default function SignatureSection() {
  const { register, watch } = useFormContext();
  const NomPresident = PRESIDENT_CONTACT.name;
  const Societe = watch("Entreprise.titulaire.name");
  return (
    <>
      <div className="text-sm">
        Les signatures du représentant de l'entreprise utilisatrice et des
        représentants mandatés de toutes les entreprises intervenantes
        entérinent l'accord de chacun sur le contenu de ce document comportant 8
        pages.{" "}
        <span className="font-semibold">
          Elles engagent chacun, pour ce qui le concerne, au respect de toutes
          les obligations et mesures de prévention qu'il contient.
        </span>
      </div>
      <table className="w-full border-2 border-black border-collapse table-fixed mt-3 text-sm">
        <tbody>
          <tr>
            {/* Colonne 1 */}
            <td
              className="border border-black p-3 align-top"
              style={{ height: "350px" }}
            >
              {/* Espace blanc forcé pour le PDF */}

              <div className=" mb-2">
                <span className="font-semibold">
                  Pour l'Université de Paris VIII :
                </span>{" "}
                représentée par:
              </div>
              <div className="mt-10">
                <span className="font-semibold">Nom :</span> {NomPresident}
              </div>
              <div className=" mt-5">
                <span className="font-semibold">Fonction :</span> Président de
                l’Université
              </div>

              {/* Espace blanc forcé pour le PDF */}
              <div className="mt-10">
                <span className="font-semibold">Visa :</span>
              </div>
            </td>

            {/* Colonne 2 */}
            <td
              className="border border-black p-3 align-top"
              style={{ height: "350px" }}
            >
              {/* Espace blanc forcé pour le PDF */}

              <div className=" mb-2">
                <span className="font-semibold">
                  Pour la Société Titulaire :
                </span>{" "}
                {Societe}
                <br />
                représentée par:
              </div>
              <div className="mt-10">
                <span className="font-semibold">Nom :</span>
              </div>
              <div className=" mt-5">
                <span className="font-semibold">Fonction :</span>
              </div>

              {/* Espace blanc forcé pour le PDF */}
              <div className="mt-10">
                <span className="font-semibold">Visa :</span>
              </div>
            </td>

            {/* Colonne 3 */}
            <td
              className="border border-black p-3 align-top"
              style={{ height: "350px" }}
            >
              {/* Espace blanc forcé pour le PDF */}

              <div className=" mb-2">
                <span className="font-semibold">
                  Pour la Société sous- traitante :
                </span>{" "}
                représentée par:
              </div>
              <div className="mt-10">
                <span className="font-semibold">Nom :</span>
              </div>
              <div className=" mt-5">
                <span className="font-semibold">Fonction :</span>
              </div>

              {/* Espace blanc forcé pour le PDF */}
              <div className="mt-10">
                <span className="font-semibold">Visa :</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
