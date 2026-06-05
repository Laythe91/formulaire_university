"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [accepted, setAccepted] = useState(false);
  useEffect(() => {
    setAccepted(false);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col gap-8">
      <h1 className="text-2xl font-bold text-center">
        Application Plan de Prévention
      </h1>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Consigne générale</h2>

        <h3 className="font-semibold">Importance du Plan de Prévention</h3>
        <p>
          Le Plan de Prévention est un document réglementaire pouvant être
          contrôlé, vérifié et évalué à tout moment par les autorités
          compétentes. Il doit donc être rédigé avec rigueur, exactitude et
          exhaustivité.
        </p>
        <p>
          Notre établissement a déjà fait l’objet d’inspections du Ministère
          lors des années précédentes. Les inspecteurs ont vérifié l’ensemble
          des documents de sécurité, y compris les Plans de Prévention. Chaque
          document doit donc être conforme aux exigences réglementaires en
          vigueur.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="font-semibold">1. Informations préalables</h3>

        <h4 className="font-semibold">Nature et besoin des travaux</h4>
        <ul className="list-disc pl-6">
          <li>Déterminer précisément les travaux à réaliser</li>
          <li>Identifier l’entreprise intervenante</li>
          <li>Vérifier la présence de sous-traitance</li>
          <li>Identifier le nombre de sous-traitants si applicable</li>
        </ul>

        <h4 className="font-semibold">Faisabilité des travaux</h4>
        <ul className="list-disc pl-6">
          <li>Moyens de levage</li>
          <li>Moyens d’accès</li>
          <li>Échafaudages</li>
          <li>Nacelles</li>
          <li>Plateformes élévatrices</li>
          <li>Tout matériel spécifique nécessaire</li>
        </ul>

        <h4 className="font-semibold">Période d’intervention</h4>
        <ul className="list-disc pl-6">
          <li>Date de début des travaux</li>
          <li>Date de fin des travaux</li>
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="font-semibold">
          4. Visite commune et évaluation des risques
        </h3>

        <p>
          Avant le démarrage des travaux, une visite commune doit être réalisée
          avec toutes les entreprises intervenantes et leurs sous-traitants.
        </p>

        <p>Cette visite permet notamment de :</p>
        <ul className="list-disc pl-6">
          <li>Présenter les lieux d’intervention</li>
          <li>Identifier les accès et zones de travail</li>
          <li>Analyser les contraintes du site</li>
          <li>Identifier les risques liés aux activités</li>
          <li>Définir les mesures de prévention</li>
          <li>Organiser la coactivité</li>
        </ul>

        <p>Les risques à analyser incluent :</p>
        <ul className="list-disc pl-6">
          <li>Environnement de travail</li>
          <li>Équipements et matériels</li>
          <li>Chutes de hauteur</li>
          <li>Risques électriques</li>
          <li>Levage et manutention</li>
          <li>Risques chimiques</li>
          <li>Circulation des personnes et véhicules</li>
          <li>Coactivité entre entreprises</li>
        </ul>

        <p className="font-semibold">
          Aucun travail ne doit débuter sans visite commune, évaluation des
          risques et validation du plan.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="font-semibold">5. Type de Plan de Prévention</h3>
        <ul className="list-disc pl-6">
          <li>Annuel</li>
          <li>Ponctuel</li>
        </ul>

        <h4 className="font-semibold">Numérotation</h4>
        <p>Chaque plan possède un numéro unique :</p>
        <ul className="list-disc pl-6">
          <li>Annuel : 1, 2, 3, 4…</li>
          <li>Ponctuel : P-1, P-2, P-3, P-4…</li>
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="font-semibold">6. Validation et archivage</h3>
        <ul className="list-disc pl-6">
          <li>Générer le PDF</li>
          <li>Transmettre pour signature</li>
          <li>Numériser le document signé</li>
          <li>Archiver dans le dossier prévu</li>
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="font-semibold">7. Archivage</h3>

        <h4 className="font-semibold">Sous-dossiers</h4>
        <ul className="list-disc pl-6">
          <li>Plans annuels</li>
          <li>Plans ponctuels</li>
        </ul>

        <h4 className="font-semibold">Documents associés</h4>
        <ul className="list-disc pl-6">
          <li>Certificats</li>
          <li>Habilitations</li>
          <li>Attestations</li>
          <li>Autorisations spécifiques</li>
          <li>Rapports</li>
          <li>Permis feu</li>
          <li>Autres documents de sécurité</li>
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="font-semibold">8. Diffusion du Plan</h3>

        <p>
          Le plan signé doit être transmis à toutes les entreprises
          intervenantes et conservé sur le chantier ou en base vie.
        </p>

        <p>Chaque entreprise doit également fournir :</p>
        <ul className="list-disc pl-6">
          <li>Consignes de sécurité</li>
          <li>Plan de masse</li>
          <li>DTA</li>
          <li>Consignes d’urgence</li>
          <li>Autorisations spécifiques</li>
        </ul>

        <p className="font-semibold">
          Les entreprises doivent s’assurer que tous les intervenants ont pris
          connaissance des documents avant intervention.
        </p>
      </section>

      <div className="flex items-center gap-3 mt-6">
        <input
          type="checkbox"
          id="accept"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
        />
        <label htmlFor="accept">
          Je m’engage à avoir lu toutes les consignes
        </label>
      </div>

      <div className="text-center mb-15 uppercase">
        {accepted ? (
          <Link
            href="/formulaire"
            className={`font-semibold ${
              accepted
                ? "text-red-700"
                : "pointer-events-none text-gray-400 cursor-not-allowed"
            }`}
          >
            Créer un plan
          </Link>
        ) : (
          <p className="text-gray-400 text-sm">
            Vous devez accepter les consignes pour continuer
          </p>
        )}
      </div>
    </div>
  );
}
