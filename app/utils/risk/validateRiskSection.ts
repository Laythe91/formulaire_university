type ValidateRiskParams = {
  // Liste des phases cochées (true = phase active)
  phases: boolean[];

  // Liste des mesures (true = mesure sélectionnée par l’utilisateur)
  mesures: boolean[];

  // Validation côté "Université" pour chaque mesure (true = validé)
  universite: boolean[];

  // Validation côté "EE" pour chaque mesure (true = validé)
  ee: boolean[];

  // Champ texte obligatoire (observations)
  observations: string;
};

export function validateRiskSection({
  phases,
  mesures,
  universite,
  ee,
  observations,
}: ValidateRiskParams): boolean {
  /**
   * 1. RÈGLE : au moins une phase doit être sélectionnée
   * → sinon la section n’est pas considérée comme active
   */
  const hasPhase = phases.some(Boolean);

  /**
   * 2. RÈGLE : validation des mesures
   *
   * - Une mesure NON cochée est ignorée (ne bloque pas la validation)
   * - Une mesure cochée doit être validée par :
   *      → Université OU EE
   *
   * Exemple :
   * - mesure = false → OK automatiquement
   * - mesure = true + universite/ee = true → OK
   * - mesure = true + universite/ee = false → KO
   */
  const mesuresValid = mesures.every((checked, i) => {
    if (!checked) return true;
    return universite[i] || ee[i];
  });

  /**
   * 3. RÈGLE : observations obligatoires
   * → minimum 3 caractères (évite champ vide ou inutile)
   */
  const observationsValid = observations?.trim().length >= 3;

  /**
   * 4. RÈGLE GLOBALE
   * → la section est valide uniquement si TOUT est OK
   */
  return hasPhase && mesuresValid && observationsValid;
}
