import { PRESIDENT_CONTACT } from "@/app/const/const";
import { useSousTraitants } from "@/app/hooks/useSousTraitans";
import { useFormContext } from "react-hook-form";

export default function SignatureSection() {
  const { watch } = useFormContext();
  const { count, soustraitants } = useSousTraitants();
  const NomPresident = PRESIDENT_CONTACT.name;
  const Societe = watch("Entreprise.titulaire.name");
  const planNumber = watch("Header.planNumber.value");
  return (
    <>
      <div className="text-center uppercase font-bold mt-6 mb-1">
        Signatures pour le plan {planNumber}{" "}
      </div>
      <div className="text-sm">
        Les signatures du représentant de l'entreprise utilisatrice et des
        représentants mandatés de toutes les entreprises intervenantes
        entérinent l'accord de chacun sur le contenu de ce document comportant
        plusieurs pages.{" "}
        <span className="font-semibold">
          Elles engagent chacun, pour ce qui le concerne, au respect de toutes
          les obligations et mesures de prévention qu'il contient.
        </span>
      </div>
      <table className="w-full border-2 border-black border-collapse table-fixed mt-3 text-sm">
        <tbody>
          {/* Ligne principale */}
          <tr>
            {/* Université */}
            <td
              className="border border-black p-3 align-top wrap-break-words whitespace-normal"
              style={{ height: "350px" }}
            >
              <div className=" mb-2 whitespace-pre-wrap wrap-break-words">
                <span className="font-semibold">
                  Pour l'Université de Paris VIII :
                </span>
                <br />
                <br />
                représentée par:
              </div>

              <div className="mt-10">
                <span className="font-semibold">Nom :</span> {NomPresident}
              </div>

              <div className=" mt-5">
                <span className="font-semibold">Fonction :</span>
                Président de l’Université
              </div>

              <div className="mt-10">
                <span className="font-semibold">Visa :</span>
              </div>
            </td>

            {/* Titulaire */}
            <td
              className="border border-black p-3 align-top wrap-break-words whitespace-normal"
              style={{ height: "350px" }}
            >
              <div className=" mb-2 whitespace-pre-wrap wrap-break-words">
                <span className="font-semibold">
                  Pour la Société Titulaire :
                </span>{" "}
                {Societe}
                <br />
                <br />
                représentée par:
              </div>

              <div className="mt-10">
                <span className="font-semibold">Nom :</span>
              </div>

              <div className=" mt-5">
                <span className="font-semibold">Fonction :</span>
              </div>

              <div className="mt-10">
                <span className="font-semibold">Visa :</span>
              </div>
            </td>

            {/* Si un seul sous-traitant → colonne sur la même ligne */}
            {count === 1 && (
              <td
                className="border border-black p-3 align-top wrap-break-words whitespace-normal"
                style={{ height: "350px" }}
              >
                <div className=" mb-2 whitespace-pre-wrap wrap-break-words">
                  <span className="font-semibold">
                    Pour la Société sous-traitante : {soustraitants?.[0]?.name}
                  </span>
                  <br />
                  <br />
                  représentée par:
                </div>

                <div className="mt-10">
                  <span className="font-semibold">Nom :</span>
                </div>

                <div className=" mt-5">
                  <span className="font-semibold">Fonction :</span>
                </div>

                <div className="mt-10">
                  <span className="font-semibold">Visa :</span>
                </div>
              </td>
            )}
          </tr>

          {/* Si plusieurs sous-traitants → une ligne par sous-traitant */}
          {count > 1 &&
            Array.from({ length: Math.ceil(count / 2) }).map((_, rowIndex) => {
              const firstIndex = rowIndex * 2;
              const secondIndex = firstIndex + 1;

              return (
                <tr key={rowIndex}>
                  {/* Sous-traitant gauche */}
                  <td
                    className="border border-black p-3 align-top wrap-break-words whitespace-normal"
                    style={{ height: "350px" }}
                  >
                    <div className=" mb-2 whitespace-pre-wrap wrap-break-words">
                      <span className="font-semibold">
                        Pour la Société sous-traitante {firstIndex + 1} :{" "}
                        {soustraitants?.[firstIndex]?.name}
                      </span>
                      <br />
                      <br />
                      représentée par:
                    </div>

                    <div className="mt-10">
                      <span className="font-semibold">Nom :</span>
                    </div>

                    <div className=" mt-5">
                      <span className="font-semibold">Fonction :</span>
                    </div>

                    <div className="mt-10">
                      <span className="font-semibold">Visa :</span>
                    </div>
                  </td>

                  {/* Sous-traitant droite */}
                  {secondIndex < count ? (
                    <td
                      className="border border-black p-3 align-top wrap-break-words whitespace-normal"
                      style={{ height: "350px" }}
                    >
                      <div className=" mb-2 whitespace-pre-wrap wrap-break-words">
                        <span className="font-semibold">
                          Pour la Société sous-traitante {secondIndex + 1} :{" "}
                          {soustraitants?.[secondIndex]?.name}
                        </span>
                        <br />
                        <br />
                        représentée par:
                      </div>

                      <div className="mt-10">
                        <span className="font-semibold">Nom :</span>
                      </div>

                      <div className=" mt-5">
                        <span className="font-semibold">Fonction :</span>
                      </div>

                      <div className="mt-10">
                        <span className="font-semibold">Visa :</span>
                      </div>
                    </td>
                  ) : (
                    <td className="border border-black"></td>
                  )}
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
