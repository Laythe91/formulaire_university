"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [accepted, setAccepted] = useState(false);
  useEffect(() => {
    setAccepted(false);
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 py-8">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8 flex flex-col gap-8">
        <h1 className="text-3xl font-bold text-center">
          Application Plan de Prévention
        </h1>

        <div className="bg-slate-50 border rounded-md p-4">
          <h2 className="font-semibold mb-2">Sommaire</h2>
          <ul className="text-sm space-y-1">
            <li>1. Nature et besoin des travaux</li>
            <li>2. Faisabilité des travaux</li>
            <li>3. Période d’intervention</li>
            <li>4. Visite commune et évaluation des risques</li>
            <li>5. Type de Plan de Prévention</li>
            <li>6. Validation et archivage</li>
            <li>7. Archivage</li>
            <li>8. Diffusion du Plan</li>
          </ul>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">
            Consigne générale
          </h2>

          <h3 className="text-lg font-semibold">
            Importance du Plan de Prévention
          </h3>

          <p className="text-justify leading-relaxed">
            Le Plan de Prévention est un document réglementaire pouvant être
            contrôlé, vérifié et évalué à tout moment par les autorités
            compétentes. Il doit donc être rédigé avec rigueur, exactitude et
            exhaustivité.
          </p>

          <p className="text-justify leading-relaxed">
            Notre établissement a déjà fait l’objet d’inspections du Ministère
            lors des années précédentes. Les inspecteurs ont vérifié l’ensemble
            des documents de sécurité, y compris les Plans de Prévention. Chaque
            document doit donc être conforme aux exigences réglementaires en
            vigueur.
          </p>
        </section>

        <section className="space-y-8">
          <div className="space-y-3">
            <h3 className="text-xl font-bold border-b pb-1">
              Informations préalables
            </h3>

            <p className="font-bold">
              Avant toute création de Plan de Prévention, il est impératif de
              bien identifier et définir les éléments suivants :
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">
              1. Nature et besoin des travaux
            </h3>

            <ul className="list-disc pl-6 space-y-1">
              <li>Déterminer précisément les travaux à réaliser</li>
              <li>Identifier l’entreprise intervenante</li>
              <li>Vérifier la présence de sous-traitance</li>
              <li>Identifier le nombre de sous-traitants si applicable</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">
              2. Faisabilité des travaux
            </h3>

            <ul className="list-disc pl-6 space-y-1">
              <li>Moyens de levage</li>
              <li>Moyens d’accès</li>
              <li>Échafaudages</li>
              <li>Nacelles</li>
              <li>Plateformes élévatrices</li>
              <li>Tout matériel spécifique nécessaire</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">3. Période d’intervention</h3>

            <ul className="list-disc pl-6 space-y-1">
              <li>Date de début des travaux</li>
              <li>Date de fin des travaux</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              4. Visite commune et évaluation des risques
            </h3>

            <p className="text-justify leading-relaxed">
              Avant le démarrage des travaux, une visite commune doit être
              réalisée avec toutes les entreprises intervenantes et leurs
              sous-traitants.
            </p>

            <p>Cette visite permet notamment de :</p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Présenter les lieux d’intervention</li>
              <li>Identifier les accès et zones de travail</li>
              <li>Analyser les contraintes du site</li>
              <li>Identifier les risques liés aux activités</li>
              <li>Définir les mesures de prévention</li>
              <li>Organiser la coactivité</li>
            </ul>

            <p>Les risques à analyser incluent :</p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Environnement de travail</li>
              <li>Équipements et matériels</li>
              <li>Chutes de hauteur</li>
              <li>Risques électriques</li>
              <li>Levage et manutention</li>
              <li>Risques chimiques</li>
              <li>Circulation des personnes et véhicules</li>
              <li>Coactivité entre entreprises</li>
            </ul>

            <p className="text-justify leading-relaxed">
              Les mesures de prévention définies lors de cette analyse devront
              être intégrées dans le Plan de Prévention. Elles devront être
              clairement expliquées à l’ensemble des intervenants avant le début
              des travaux et respectées pendant toute la durée de
              l’intervention.
            </p>

            <div className="rounded-md border border-red-300 bg-red-50 p-4">
              <p className="font-semibold text-red-800">
                Aucun travail ne doit débuter sans visite commune, évaluation
                des risques et validation du plan.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              5. Type de Plan de Prévention
            </h3>

            <p className="mt-2">Déterminer si le plan est :</p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Annuel</li>
              <li>Ponctuel</li>
            </ul>

            <p className="mt-4">Chaque plan possède un numéro unique :</p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Annuel : 1, 2, 3, 4…</li>
              <li>Ponctuel : P-1, P-2, P-3, P-4…</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              6. Validation et archivage
            </h3>

            <ul className="list-disc pl-6 space-y-1">
              <li>Générer le PDF</li>
              <li>Transmettre pour signature</li>
              <li>Numériser le document signé</li>
              <li>Archiver dans le dossier prévu</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">7. Archivage</h3>

            <h4 className="font-semibold">
              Le dossier principal d’archivage est composé de deux sous-dossiers
              :
            </h4>

            <ul className="list-disc pl-6 space-y-1">
              <li>Plans de Prévention annuels</li>
              <li>Plans de Prévention ponctuels</li>
            </ul>

            <p className="mt-5 text-justify leading-relaxed">
              L’ensemble des documents et pièces justificatives associés au Plan
              de Prévention devra être conservé dans le même dossier que le plan
              signé.
            </p>

            <p className="font-semibold">
              Ces documents peuvent notamment comprendre :
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Certificats</li>
              <li>Habilitations</li>
              <li>Attestations</li>
              <li>Autorisations spécifiques</li>
              <li>Rapports</li>
              <li>Permis feu</li>
            </ul>

            <p className="text-justify leading-relaxed mt-3">
              Tout autre document de sécurité nécessaire à la constitution du
              dossier.
              <br />
              L’objectif est de disposer d’un dossier complet permettant de
              justifier à tout moment l’ensemble des éléments ayant servi à
              l’élaboration et à la validation du Plan de Prévention.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">8. Diffusion du Plan</h3>

            <p className="text-justify leading-relaxed mt-2">
              Une fois le Plan de Prévention signé et qu’un exemplaire a été
              archivé dans le dossier prévu à cet effet, celui-ci doit être
              transmis à l’ensemble des intervenants concernés par l’opération,
              qu’il s’agisse de l’entreprise titulaire ou de ses éventuels
              sous-traitants
            </p>

            <p className="text-justify leading-relaxed mt-2">
              Par ailleurs, un exemplaire du Plan de Prévention doit
              impérativement être conservé sur la zone de travail, c’est-à-dire
              directement sur le chantier ou dans la base vie lorsqu’elle
              existe. Ce document doit être accessible à tout moment aux
              personnels intervenants afin qu’ils puissent en prendre
              connaissance et appliquer les mesures de prévention qui y sont
              définies.
            </p>

            <p className="mt-3 text-justify">
              Les entreprises intervenantes devront également mettre à
              disposition de leurs salariés l’ensemble des documents transmis
              par notre établissement, notamment :
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Consignes générales de sécurité</li>
              <li>Plan de masse du site</li>
              <li>DTA (Dossier Technique Amiante)</li>
              <li>Consignes d’urgence et d'évacuation</li>
              <li>Autorisations spécifiques applcables à l'intervention</li>
              <li>
                Tout autre document nécessaire à la prévention des risques liés
                aux travaux
              </li>
            </ul>

            <div className="rounded-md border border-amber-300 bg-amber-50 p-4">
              <p className="font-semibold text-amber-900">
                Les entreprises doivent s’assurer que tous les intervenants ont
                pris connaissance des documents avant intervention.
              </p>
            </div>
          </div>

          {/* Même principe pour les sections 5, 6, 7 et 8 */}
        </section>

        <div className="border-t pt-8">
          <div className="flex items-center justify-center gap-3">
            <input
              type="checkbox"
              id="accept"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="h-4 w-4"
            />

            <label htmlFor="accept" className="font-medium">
              Je m’engage à avoir lu toutes les consignes
            </label>
          </div>

          <div className="mt-6 text-center">
            {accepted ? (
              <Link
                href="/formulaire"
                className="
              inline-flex
              items-center
              rounded-md
              bg-red-700
              px-6
              py-3
              font-semibold
              text-white
              shadow
              transition
              hover:bg-red-800
            "
              >
                Créer un plan
              </Link>
            ) : (
              <p className="text-sm text-gray-500">
                Vous devez accepter les consignes pour continuer
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
