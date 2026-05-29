export default function CovidSectionPDF() {
  return (
    <>
      <div className="mt-4">
        {" "}
        <h2 className="font-bold underline uppercase text-center text-xl">
          COVID 19 – Mise à jour du Plan de Prévention
        </h2>
      </div>
      <table
        className="w-full border-2 border-black border-collapse table-fixed mt-3 text-sm"
        style={{
          width: "99.8%",
        }}
      >
        <thead>
          <tr className="bg-gray-100">
            {/* En-têtes */}
            <th className="border border-black p-2 font-bold uppercase text-sm text-center w-1/3">
              Risque
            </th>
            <th className="border border-black p-2 font-bold text-sm text-center w-2/3">
              Plan d'action à prendre en compte par les entreprises
              intervenantes
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Ligne 1 */}
          <tr>
            <td className="border border-black p-2 align-top ">
              {/* Écris le risque 1 ici */}
              Exposition des compagnons au COVID 19
            </td>
            <td className="border border-black p-2 align-top whitespace-pre-line">
              {/* Écris le plan d'action 1 ici */}
              <span className="underline">
                Mettre en œuvre les gestes barrières
              </span>{" "}
              : <br />- Se laver les mains avec du savon régulièrement prévues à
              cet effet. <br />- Prévoir des lingettes ou produits
              hydroalcooliques dans les véhicules utilitaires. <br />- Éviter
              les contacts physiques (distance minimum 1 mètre) <br />- Dans la
              mesure du possible, fournir des masques au personnel ainsi que des
              gants à usage unique jetables. <br />- Nettoyer régulièrement les
              surfaces et les lieux collectifs (tables, poignées...) ainsi que
              les équipements individuels (téléphone, lunettes, bouchons
              d’oreilles...). <br />- Tousser ou éternuer dans son coude et
              utiliser un mouchoir à usage unique et le jeter dans une poubelle.
            </td>
          </tr>

          {/* Ligne 2 */}
          <tr>
            <td className="border border-black p-2 align-top ">
              Mon personnel a été exposé lors d’une intervention chez un client
              diagnostique positif au COVID 19 ou par un de ses collègues ou
              fournisseur
            </td>
            <td className="border border-black p-2 align-top whitespace-pre-line">
              <span className="underline">Plan d’action</span> : <br />- Appeler
              le numéro vert (0800 130 000) qui donnera le protocole à suivre en
              cas d’exposition. <br />
              <span className="underline">Mesures de précaution</span> :<br />-
              Respecter les gestes barrières et les mesures d’hygiène. <br />-
              Rester à distance du personnel étranger au chantier et des
              clients.
            </td>
          </tr>

          {/* Ligne 3 */}
          <tr>
            <td className="border border-black p-2 align-top ">
              Il manque des collaborateurs sur le chantier pour différentes
              causes (absence pour cause de maladie, confinement à la maison,
              défaut de moyen de transport…)
            </td>
            <td className="border border-black p-2 align-top whitespace-pre-line">
              <span className="underline">Plan d’action</span> : <br />- Si la
              présence du personnel est indispensable pour mettre en œuvre le
              mode opératoire, il faut soit modifier le mode opératoire, soit
              modifier les tâches en fonction des personnes présentes, soit
              retarder les opérations, soit modifier le planning. <br />
              <span className="underline">Mesures de précaution</span> : <br />-
              Mettre en œuvre un plan de continuité d’activité pour avoir les
              personnes disponibles sur le chantier. <br />- Surveiller le
              surcroît d’activité pour les collaborateurs présents, ce qui peut
              créer des situations à risques <br />- Déterminer des seuils de
              présence du personnel à partir desquels l’entreprise décide de
              transférer l’activité sur les chantiers les plus importants.{" "}
              <br />- Désigner des remplaçants et prévoir la formalisation des
              transferts de pouvoirs et compétences (sur la fonction
              programmation planification, organisation suivi…) en cas de
              vacance de fonction.
            </td>
          </tr>

          {/* Ligne 4 */}
          <tr>
            <td className="border border-black p-2 align-top ">
              Il manque des collaborateurs compétents (possédant des
              habilitations spécifiques ou le CACES®)
            </td>
            <td className="border border-black p-2 align-top whitespace-pre-line">
              <span className="underline">Plan d’action</span> : <br />-
              Remplacer par un autre collaborateur possédant les habilitations
              nécessaires. <br />- Modifier le mode opératoire ou
              l’ordonnancement des tâches, ou modifier le planning du/des
              chantiers (transférer des collaborateurs d’un chantier à ’autre).
              <br />
              <span className="underline">Mesures de précaution</span> :<br /> -
              Identifier toutes les opérations nécessitant des habilitations sur
              un chantier. <br />- Identifier les collaborateurs avec les
              habilitations ou les compétences. <br />- S’assurer de leur
              disponibilité.
            </td>
          </tr>

          {/* Ligne 5 */}
          <tr>
            <td className="border border-black p-2 align-top ">
              Il manque des matériaux de construction
            </td>
            <td className="border border-black p-2 align-top whitespace-pre-line">
              <span className="underline">Plan d’action</span> :<br /> - Revoir
              l’ordonnancement des tâches pour permettre l’avancement du
              chantier dans l’attente de la livraison.
              <br />
              <span className="underline">Mesures de précaution</span> :<br /> -
              Avoir un plan de continuité d’activité pour assurer la poursuite
              des approvisionnements du chantier.
            </td>
          </tr>

          {/* Ligne 6 */}
          <tr>
            <td className="border border-black p-2 align-top ">
              Il manque des matériels (de levage, électroportatif…)
            </td>
            <td className="border border-black p-2 align-top whitespace-pre-line">
              <span className="underline">Plan d’action</span> : <br />-
              Modifier le planning ou l’ordonnancement des tâches. <br />
              <span className="underline">Mesures de précaution</span> :<br /> -
              Mettre en œuvre un plan de continuité d’activité afin d’avoir les
              équipements disponibles sur le chantier.
            </td>
          </tr>

          {/* Ligne 7 */}
          <tr>
            <td className="border border-black p-2 align-top ">
              Il manque les EPI obligatoires sur le chantier, comme des masques
              ou des gants, obligatoires pour certaines opérations exposant à
              des poussières dangereuses ou à des produits chimiques.
            </td>
            <td className="border border-black p-2 align-top whitespace-pre-line">
              <span className="underline">Plan d’action</span> :<br /> -
              Modifier le mode opératoire ou, à défaut, annuler l’opération et
              la replanifier à réception des équipements obligatoires. <br />{" "}
              <span className="underline">Mesures de précaution</span> :<br /> -
              Anticiper l’approvisionnement des EPI obligatoires dans le cadre
              du plan de continuité d’activité.
              <br /> - Respecter les règles du fabricant concernant la
              réutilisation d’EPI par d’autres collaborateurs.
              <br /> - Suivre les consignes du fabricant concernant la
              désinfection, entre chaque utilisation, des masques réutilisables
              (par ex. les masques à cartouche)
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
