type Props = {
  data: any;
};

export default function HeaderSectionPDF({ data }: Props) {
  const ponctuel = data?.Operation?.ponctuel?.state;

  const date = data?.Header?.date || "";

  const planNumber = data?.Header?.planNumber?.value || "";

  const nomSociete = data?.Entreprise?.titulaire?.name || "";

  return (
    <table className="w-full border-2 border-black border-collapse table-fixed">
      <tbody>
        <tr>
          {/* =========================
              COLONNE GAUCHE
          ========================= */}
          <td
            className="border border-black p-1 align-middle text-center w-1/3"
            rowSpan={2}
          >
            <div className="space-y-1">
              <div className="font-semibold">UNIVERSITE PARIS VIII</div>

              <div>Service Hygiène et Sécurité</div>
            </div>
          </td>

          {/* =========================
              COLONNE MILIEU HAUT
          ========================= */}
          <td className="border border-black p-2 w-2/3 text-center">
            <span className="font-semibold">PREVENTIONS DES RISQUES</span>
          </td>

          {/* =========================
              COLONNE DROITE
          ========================= */}
          <td
            className="border border-black p-1 align-middle w-1/3"
            rowSpan={2}
          >
            <div className="space-y-2 text-center">
              {/* PLAN */}
              <div className="flex flex-col">
                <span className="text-gray-600">Plan</span>

                <div className="flex items-center justify-center gap-1">
                  <div>
                    <span className="font-semibold">{planNumber}</span>
                  </div>
                </div>
              </div>

              {/* DATE */}
              <div className="flex flex-col">
                <span className="text-gray-600">Date</span>

                <span className="font-semibold">{date}</span>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          {/* =========================
              COLONNE MILIEU BAS
          ========================= */}
          <td className="border border-black p-2 w-2/3 text-center">
            <div className="flex flex-col items-center gap-1">
              <span className="font-semibold text-sm">PLAN DE PREVENTION</span>

              <div className="border px-2 py-1 w-full text-center uppercase text-sm font-semibold resize-none overflow-hidden leading-tight">
                {nomSociete || (
                  <span className="text-gray-400">Nom de société</span>
                )}
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
