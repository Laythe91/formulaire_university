import { useFormContext, useWatch } from "react-hook-form";
import type { EntreprisePersonne } from "@/types/entreprise.type";

export function useSousTraitants() {
  const { control } = useFormContext();

  const soustraitants =
    (useWatch({
      control,
      name: "Entreprise.soustraitante",
    }) as EntreprisePersonne[]) || [];

  const count = soustraitants.length;

  const allValid =
    count === 0 ? true : soustraitants.every((s) => s?.state === true);

  return {
    soustraitants,
    count,
    allValid,
  };
}
