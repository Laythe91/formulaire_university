import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { validateRiskSection } from "./validateRiskSection";

type UseRiskValidationParams = {
  path: string;
  phaseCount: number;
  mesureCount: number;
};

export function useRiskValidation({
  path,
  phaseCount,
  mesureCount,
}: UseRiskValidationParams) {
  const { watch, setValue } = useFormContext();

  const phases = Array.from({ length: phaseCount }, (_, i) =>
    watch(`${path}.phase.${i + 1}`),
  );

  const mesures = Array.from({ length: mesureCount }, (_, i) =>
    watch(`${path}.mesure.${i + 1}`),
  );

  const universite = Array.from({ length: mesureCount }, (_, i) =>
    watch(`${path}.universite.${i + 1}`),
  );

  const ee = Array.from({ length: mesureCount }, (_, i) =>
    watch(`${path}.ee.${i + 1}`),
  );

  const observations = watch(`${path}.observations`);

  useEffect(() => {
    const globalValid = validateRiskSection({
      phases,
      mesures,
      universite,
      ee,
      observations,
    });

    setValue(`${path}.global.state`, globalValid, {
      shouldDirty: false,
      shouldTouch: false,
      shouldValidate: false,
    });
  }, [phases, mesures, universite, ee, observations, setValue, path]);
}
/*export function useRiskValidation({
  path,
  phaseCount,
  mesureCount,
}: UseRiskValidationParams) {
  const { watch, setValue } = useFormContext();

  // phases
  const phases = Array.from({ length: phaseCount }, (_, i) =>
    watch(`${path}.phase.${i + 1}`),
  );

  // mesures
  const mesures = Array.from({ length: mesureCount }, (_, i) =>
    watch(`${path}.mesure.${i + 1}`),
  );

  // université
  const universite = Array.from({ length: mesureCount }, (_, i) =>
    watch(`${path}.universite.${i + 1}`),
  );

  // ee
  const ee = Array.from({ length: mesureCount }, (_, i) =>
    watch(`${path}.ee.${i + 1}`),
  );

  // observations
  const observations = watch(`${path}.observations`);

  useEffect(() => {
    const globalValid = validateRiskSection({
      phases,
      mesures,
      universite,
      ee,
      observations,
    });

    setValue(`${path}.global.state`, globalValid);
  }, [phases, mesures, universite, ee, observations, path, setValue]);
}
*/
