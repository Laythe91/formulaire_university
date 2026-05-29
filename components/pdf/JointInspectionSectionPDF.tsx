type Props = { data: any };

export default function JointInspectionSectionPDF({ data }: Props) {
  const sousTraitants = data?.Inspection?.soustraitant || [];
  const count = sousTraitants.length;
  const Societe = data?.Entreprise?.titulaire?.name || "";
  const date = data?.Inspection?.date || "";
  const university = data?.Inspection?.university || "";
  const titulaire = data?.Inspection?.titulaire || "";

  return (
    <div className="pdf-section">
      <table
        className="w-full border-2 border-black border-collapse table-fixed mt-4"
        style={{
          width: "99.8%",
        }}
      >
        <tbody>
          {/* Ligne titre */}
          <tr>
            <td className="border border-black p-2" colSpan={3}>
              {/* Titre */}
              <div className="font-bold underline text-sm mb-5">
                INSPECTION COMMUNE (préalable au début de l'opération)
              </div>
              <div className="flex flex-row items-center space-x-3">
                <div className=" font-bold text-sm ">
                  Date de l'inspection : {"  "}
                </div>
                <div className="w-120">
                  <span className="border px-2 py-0.5  text-center text-sm">
                    {" "}
                    {date}
                  </span>
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
                      <span className="border px-2 py-1 w-125 text-sm resize-none overflow-hidden wrap-break-words whitespace-pre-wrap leading-tight">
                        {" "}
                        {university}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center space-x-3">
                    <div className=" text-sm ">
                      Pour la Société {Societe} : {"  "}
                    </div>
                    <div>
                      <span className="border px-2 py-1 w-125 text-sm resize-none overflow-hidden wrap-break-words whitespace-pre-wrap leading-tight">
                        {titulaire}
                      </span>
                    </div>
                  </div>
                  {count > 0 &&
                    Array.from({ length: count }).map((_, index) => (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-3"
                      >
                        <div className="text-sm">
                          Pour l'Entreprise sous-traitante {index + 1} :
                        </div>

                        <div>
                          <span className="border px-2 py-1 w-120 text-sm resize-none overflow-hidden wrap-break-words whitespace-pre-wrap leading-tight">
                            {" "}
                            {sousTraitants[index]}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
