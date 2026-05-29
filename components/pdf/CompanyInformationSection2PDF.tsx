import React from "react";
import EntrepriseTitulaireInformationPDF from "./EntrepriseTitulaireInformationPDF";
import EntrepriseSousTraitanteInformationPDF from "./EntrepriseSousTraitanteInformationPDF";

type Props = { data: any };

export default function CompanyInformationSection2PDF({ data }: Props) {
  const dataEntrepriseTitulaire = data.Entreprise?.titulaire;
  const EntrepriseTitulaireState = data.Entreprise?.titulaire?.state || false;
  const dataEntreprisesoutraitantes = data?.Entreprise?.soustraitante || [];
  return (
    <>
      <table
        className="w-full border-2 border-black border-collapse table-fixed mt-3"
        style={{
          width: "99.8%",
        }}
      >
        <tbody>
          {/* Ligne titre */}
          <div className="pdf-section">
            <tr>
              <td className="border border-black p-2">
                <div className="flex items-center  gap-2">
                  <span className="font-bold uppercase text-sm">
                    Entreprise titulaire
                  </span>

                  <input
                    checked={EntrepriseTitulaireState}
                    readOnly
                    type="checkbox"
                    className="w-4 h-4 accent-black"
                  />
                </div>
              </td>
            </tr>
            <EntrepriseTitulaireInformationPDF data={dataEntrepriseTitulaire} />
          </div>
        </tbody>
      </table>

      {dataEntreprisesoutraitantes.map((soustraitant: any, index: number) => (
        <React.Fragment key={index}>
          <table
            className="w-full border-2 border-black border-collapse table-fixed mt-3"
            style={{
              width: "99.8%",
            }}
          >
            <tbody>
              <div className="pdf-section">
                <tr key={index}>
                  <td className="border border-black p-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold uppercase text-sm">
                        Entreprise sous-traitante N°{index + 1}
                      </span>

                      <input
                        readOnly
                        checked={soustraitant?.state || false}
                        type="checkbox"
                        className="w-4 h-4 accent-black"
                      />
                    </div>
                  </td>
                </tr>
                <EntrepriseSousTraitanteInformationPDF data={soustraitant} />
              </div>
            </tbody>
          </table>
        </React.Fragment>
      ))}
    </>
  );
}
