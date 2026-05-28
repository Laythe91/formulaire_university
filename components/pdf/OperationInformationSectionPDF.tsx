type Props = {
  data: any;
};

export default function OperationInformationSection({ data }: Props) {
  // const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  // const yearRegex = /^\d{4}$/;
  const start = data?.Operation?.date?.start || "";
  const end = data?.Operation?.date?.end || "";
  const annuel = data?.Operation?.annuel?.state || false;
  const danger = data?.Operation?.danger?.state || false;
  const ponctuel = data?.Operation?.ponctuel?.state || false;
  const plus400h = data?.Operation?.plus400h?.state || false;
  const objet = data?.Operation?.objet || "";

  if (annuel) {
    const year = start.split("/")[2];
  }

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
                  type="checkbox"
                  checked={annuel}
                  readOnly
                  className="scale-75 accent-black w-4 shrink-0"
                />
                Annuelle
              </label>

              <label className="text-sm flex items-center gap-1 leading-snug">
                <input
                  type="checkbox"
                  checked={plus400h}
                  readOnly
                  className="scale-75 accent-black w-4 shrink-0"
                />
                Plus de 400 heures
              </label>

              <div></div>

              <label className="text-sm flex items-center gap-1 leading-snug">
                <input
                  type="checkbox"
                  checked={ponctuel}
                  readOnly
                  className="scale-75 accent-black w-4 shrink-0"
                />
                Ponctuelle
              </label>

              <label className="text-sm flex items-center gap-1 leading-snug">
                <input type="checkbox" checked={danger} readOnly />
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

              {ponctuel && (
                <>
                  <td className="border border-black p-2 w-1/3 text-center">
                    <div className="font-semibold text-sm">
                      Date prévisible de début :
                      <span className="border px-2 py-0.5 w-full text-center uppercase text-sm">
                        {" "}
                        {start}
                      </span>
                    </div>
                  </td>

                  <td className="border border-black p-2 w-1/3 text-center">
                    <div className="font-semibold text-sm">
                      Date prévisible de fin :
                      <span className="border px-2 py-0.5 w-full text-center uppercase text-sm">
                        {" "}
                        {end}
                      </span>
                    </div>
                  </td>
                </>
              )}
              {annuel && (
                <>
                  <td
                    colSpan={2}
                    className="border border-black p-2 text-center"
                  >
                    <div className="font-semibold flex flex-col items-center text-sm">
                      <span>Année de prévention</span> <span>{start}</span>
                    </div>
                  </td>
                </>
              )}
            </tr>
            <tr>
              <td className="border border-black p-1" colSpan={3}>
                <div className=" font-bold text-sm ">
                  Nature/Objet de l'opération :
                </div>
                <div className="mt-1">
                  <div className="border px-2 py-1 w-full  text-sm resize-none overflow-hidden wrap-break-words whitespace-pre-wrap leading-tight">
                    {objet}
                  </div>
                </div>
              </td>
            </tr>
          </>
        )}
      </tbody>
    </table>
  );
}
