import { PRESIDENT_CONTACT } from "@/app/const/const";

type Props = { data: any };

export default function SignatureSectionPDF({ data }: Props) {
  const sousTraitants = data?.Entreprise?.soustraitante || [];
  const count = sousTraitants.length;
  const Societe = data?.Entreprise?.titulaire?.name || "";
  const NomPresident = PRESIDENT_CONTACT.name;
  const planNumber = data?.Header?.planNumber?.value || "";

  return (
    <>
      <div className="pdf-section">
        <div className="text-center uppercase font-bold mt-6 mb-1">
          Signatures pour le plan n° {planNumber}{" "}
        </div>
        <div className="text-sm mx-3 pdf-section">
          Les signatures du représentant de l'entreprise utilisatrice et des
          représentants mandatés de toutes les entreprises intervenantes
          entérinent l'accord de chacun sur le contenu de ce document comportant
          plusieurs pages.{" "}
          <span className="font-semibold">
            Elles engagent chacun, pour ce qui le concerne, au respect de toutes
            les obligations et mesures de prévention qu'il contient.
          </span>
        </div>
      </div>
      <table
        className="w-full border-2 border-black border-collapse table-fixed mt-3 text-sm"
        style={{
          width: "99.8%",
        }}
      >
        <tbody>
          {/* Ligne principale */}
          <tr className="pdf-section">
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
                <span className="font-semibold">Fonction : </span> Président de
                l’Université
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
                    Pour la Société sous-traitante : {sousTraitants[0]?.name}
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
                <tr key={rowIndex} className="pdf-section">
                  {/* Sous-traitant gauche */}
                  <td
                    className="border border-black p-3 align-top wrap-break-words whitespace-normal"
                    style={{ height: "350px" }}
                  >
                    <div className=" mb-2 whitespace-pre-wrap wrap-break-words">
                      <span className="font-semibold">
                        Pour la Société sous-traitante {firstIndex + 1} :{" "}
                        {sousTraitants[firstIndex]?.name}
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
                          {sousTraitants[secondIndex]?.name}
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
