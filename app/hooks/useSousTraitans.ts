import { useFormContext } from "react-hook-form";
import type { EntreprisePersonne } from "@/types/entreprise.type";

export function useSousTraitants() {
  const { watch } = useFormContext();

  const soustraitants = watch(
    "Entreprise.soustraitante",
  ) as EntreprisePersonne[];

  const count = soustraitants?.length ?? 0;

  const allValid =
    count === 0
      ? true
      : soustraitants.every((s: EntreprisePersonne) => s.state);

  return {
    soustraitants,
    count,
    allValid,
  };
}
