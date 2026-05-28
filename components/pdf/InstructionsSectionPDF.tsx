export default function InstructionsSectionPDF() {
  return (
    <>
      <table className="w-full border-2 border-black border-collapse table-fixed mt-3 mb-4 text-sm">
        <tbody>
          <tr>
            <td className="border border-black p-2">
              {/* Titre */}
              <div className="font-bold uppercase underline text-sm mb-4">
                CONSIGNES AUX CHEFS D'ENTREPRISES EXTERIEURES
              </div>
              <div className="text-sm mb-2">
                Les chefs d’entreprises extérieures s’engagent :
              </div>

              {/* Contenu */}
              <div className="space-y-2 mx-10 text-sm">
                <div>
                  1. A donner à leur personnel les instructions définies dans ce
                  plan de prévention.
                </div>

                <div>
                  2. A mettre à la disposition de leur personnel des outils,
                  matériels, moyens de prévention conformes à la réglementation
                  en vigueur et faire connaître les consignes liées à leur
                  emploi.
                </div>

                <div>
                  3. A avertir le représentant de{" "}
                  <span className="font-semibold">
                    l’Université de Paris VIII
                  </span>{" "}
                  de toute modification de la prestation afin d’établir un
                  avenant au présent plan de prévention.
                </div>

                <div>
                  4. Obliger son personnel de se présenter au PC Incendie à leur
                  arrivée sur le site et à la personne de{" "}
                  <span className="font-semibold">
                    l’Université de Paris VIII
                  </span>{" "}
                  chargée du suivi de l’opération avant leur arrivée.
                </div>

                <div>
                  5. A faire savoir à leur personnel que les prestations/travaux
                  seront arrêté(e)s si le consignes de sécurité prévues
                  n’étaient pas respectées.
                </div>

                {/* Ligne 6 modifiée avec ton image */}
                <div className="flex items-start gap-2 -ml-10">
                  {/* ICI : Conteneur du pictogramme avec dimensions fixes pour le PDF */}
                  <div className="w-8 h-8 shrink-0 pt-0.5">
                    <img
                      src="/pictograms/fumer.svg"
                      alt="Interdiction de fumer"
                      width={32}
                      height={32}
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>

                  {/* Texte du point 6 */}
                  <div>
                    6. A informer leur personnel, qu’il est{" "}
                    <span className="font-semibold">interdit de fumer</span>{" "}
                    dans tous les locaux de l’Université de Paris VIII (salles
                    de cours, couloirs, escaliers…).
                  </div>
                </div>

                <div>
                  7. A déclarer tout accident ou blessure et à le signaler au{" "}
                  <span className="font-semibold">
                    Service Hygiène et Sécurité – 2 rue de la Liberté – 93523
                    Saint-Denis
                  </span>
                  .
                </div>

                <div>8. A interdire le travail isolé de son personnel.</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
