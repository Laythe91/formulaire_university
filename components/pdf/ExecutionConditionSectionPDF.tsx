type Props = {
  data: any;
};

export default function ExecutionConditionSection({ data }: Props) {
  const cond1 = data?.Condition?.["1"]?.state || false;
  const cond2 = data?.Condition?.["2"]?.state || false;
  const cond3 = data?.Condition?.["3"]?.state || false;
  const cond4 = data?.Condition?.["4"]?.state || false;
  const cond5 = data?.Condition?.["5"]?.state || false;
  const cond6 = data?.Condition?.["6"]?.state || false;

  return (
    <div className="pdf-section">
      <table
        className="w-full border-2 border-black border-collapse table-fixed mt-1"
        style={{ width: "99.8%" }}
      >
        <tbody>
          <tr>
            <td className="border border-black p-2" colSpan={3}>
              {/* Titre */}
              <div className="font-bold uppercase underline text-sm mb-2">
                Condition d'éxécution
              </div>

              {/* Section accès */}
              <div className="flex flex-col gap-y-2">
                <span className="text-sm">Accès, occupation des lieux :</span>

                <div className="grid grid-cols-1 gap-y-2 pl-20">
                  <label className="text-sm flex items-center gap-1 leading-snug">
                    <input
                      type="checkbox"
                      checked={cond1}
                      readOnly
                      className="scale-75 accent-black w-4 shrink-0"
                    />
                    Protections collectives existantes
                  </label>

                  <label className="text-sm flex items-center gap-1 leading-snug">
                    <input
                      type="checkbox"
                      checked={cond2}
                      readOnly
                      className="scale-75 accent-black w-4 shrink-0"
                    />
                    Protections collectives inexistantes
                  </label>

                  <label className="text-sm flex items-center gap-1 leading-snug">
                    <input
                      type="checkbox"
                      checked={cond3}
                      readOnly
                      className="scale-75 accent-black w-4 shrink-0"
                    />
                    Protections individuelles EPI à définir précisément dans le
                    présent plan de prévention
                  </label>
                </div>

                {/* Documents */}
                <span className="text-sm font-bold mt-3">
                  Documents à fournir et à presenter le jour de l'opération :
                </span>

                <div className="grid grid-cols-1 gap-y-2 pl-20">
                  <label className="text-sm flex items-center gap-1 leading-snug">
                    <input
                      type="checkbox"
                      checked={cond4}
                      readOnly
                      className="scale-75 accent-black w-4 shrink-0"
                    />
                    <span>
                      Certificat d’aptitude à la conduite en sécurité : Si
                      utilisation de la nacelle CACES (décret n° 98-1084 du 2
                      décembre 1998)
                    </span>
                  </label>

                  <label className="text-sm flex items-center gap-1 leading-snug">
                    <input
                      type="checkbox"
                      checked={cond5}
                      readOnly
                      className="scale-75 accent-black w-4 shrink-0"
                    />
                    <span>
                      Certificat de qualification professionnelle :
                      <span className="font-bold ml-1">
                        Habilitation électrique – Titre d’habilitation
                        électrique à fournir avec le présent Plan de Prévention
                      </span>
                    </span>
                  </label>

                  <label className="text-sm flex items-center gap-1 leading-snug">
                    <input
                      type="checkbox"
                      checked={cond6}
                      readOnly
                      className="scale-75 accent-black w-4 shrink-0"
                    />
                    <span>
                      Sauveteur Secouriste du Travail – SST (Cf Décret n°
                      2004-924 du 1er septembre 2004)
                    </span>
                  </label>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
