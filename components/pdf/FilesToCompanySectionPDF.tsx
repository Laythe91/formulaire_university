type Props = {
  data: any;
};

export default function FilesToCompanySectionPDF({ data }: Props) {
  const consigne = data?.Document?.consigne?.state || false;
  const dta = data?.Document?.dta?.state || false;
  const permisFeu = data?.Document?.permisFeu?.state || false;
  const planPrevention = data?.Document?.planPrevention?.state || false;
  const planSite = data?.Document?.planSite?.state || false;

  return (
    <>
      <div className="pdf-section">
        <table
          className="w-full border-2 border-black border-collapse table-fixed mt-3"
          style={{
            width: "99.8%",
          }}
        >
          <tbody>
            {/* Ligne titre */}
            <tr>
              <td className="border border-black p-2" colSpan={2}>
                {/* Titre */}
                <div className="font-bold uppercase underline text-sm mb-4">
                  Documents remis et expliques à l'entreprise exterieure
                </div>

                {/* Contenu */}
                <div className="grid grid-cols-1 gap-y-2 mx-10">
                  <label className="text-sm flex items-center gap-1 leading-snug">
                    <input
                      type="checkbox"
                      checked={planPrevention}
                      readOnly
                      className="scale-75 accent-black w-4 shrink-0"
                    />
                    Plan de prévention
                  </label>

                  <label className="text-sm flex items-center gap-1 leading-snug">
                    <input
                      type="checkbox"
                      checked={consigne}
                      readOnly
                      className="scale-75 accent-black w-4 shrink-0"
                    />
                    Consignes générales de sécurité
                  </label>

                  <label className="text-sm flex items-center gap-1 leading-snug">
                    <input
                      type="checkbox"
                      checked={planSite}
                      readOnly
                      className="scale-75 accent-black w-4 shrink-0"
                    />
                    Plan du site (plan de masse)
                  </label>

                  <label className="text-sm flex items-center gap-1 leading-snug">
                    <input
                      type="checkbox"
                      checked={permisFeu}
                      readOnly
                      className="scale-75 accent-black w-4 shrink-0"
                    />
                    Permis de feu (à demander au poste de sécurité incendie)
                  </label>

                  <label className="text-sm flex items-center gap-1 leading-snug">
                    <input
                      type="checkbox"
                      checked={dta}
                      readOnly
                      className="scale-75 accent-black w-4 shrink-0"
                    />
                    Dossier Amiante DTA
                  </label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
