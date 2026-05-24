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
   * Chaque ligne du tableau doit être cohérente.
   *
   * Règles métier :
   *
   * ✅ Cas autorisés :
   *
   * - rien coché
   *      mesure = false
   *      universite = false
   *      ee = false
   *
   * - mesure cochée + université cochée
   *      mesure = true
   *      universite = true
   *
   * - mesure cochée + EE cochée
   *      mesure = true
   *      ee = true
   *
   * - mesure cochée + université + EE cochés
   *      mesure = true
   *      universite = true
   *      ee = true
   *
   *
   * ❌ Cas interdits :
   *
   * - université cochée sans mesure
   * - EE cochée sans mesure
   * - mesure cochée sans université ni EE
   *
   *
   * La validation est faite ligne par ligne grâce à `.every()`
   * :
   * → toutes les lignes doivent être valides
   * → sinon le formulaire global devient invalide
   */
  const mesuresValid = mesures.every((checked, i) => {
    /**
     * Vérifie si au moins une mise en œuvre
     * (Université ou EE) est cochée
     */
    const hasImplementation = universite[i] || ee[i];

    /**
     * CAS 1
     * Rien n'est coché sur la ligne
     *
     * → ligne ignorée
     * → valide
     */
    if (!checked && !hasImplementation) {
      return true;
    }

    /**
     * CAS 2
     * Mesure cochée MAIS aucune mise en œuvre
     *
     * → invalide
     */
    if (checked && !hasImplementation) {
      return false;
    }

    /**
     * CAS 3
     * Mise en œuvre cochée MAIS mesure absente
     *
     * → invalide
     */
    if (!checked && hasImplementation) {
      return false;
    }

    /**
     * CAS 4
     * Mesure + mise en œuvre cohérentes
     *
     * → valide
     */
    return true;
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
