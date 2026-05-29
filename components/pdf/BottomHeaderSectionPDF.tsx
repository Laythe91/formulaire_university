type Props = {
  data: any;
};

export default function BottomHeaderSection({ data }: Props) {
  const nomSociete = data?.Entreprise?.titulaire?.name || "";
  //const Societe = watch("Entreprise.titulaire.name");
  return (
    <>
      <div className="flex flex-col mt-2">
        <div className="flex flex-col text-sm">
          <div className="text-center font-bold uppercase">
            Interventions effectuées dans l'université PARIS VIII (entreprise
            utilisatrice)
          </div>

          <div className="text-center font-bold uppercase">
            Par une entreprise extérieure:
          </div>
        </div>

        <div className="text-center font-bold mb-2 uppercase wrap-break-words whitespace-pre-wrap">
          {nomSociete}
        </div>

        <div className="text-xs leading-relaxed mx-3">
          En application de l'article R237-8 du décret n°92-158 du 20 février
          1992 et de l'arrêté du 19 mars 1993, le présent document doit être
          établi en concertation,{" "}
          <span className="underline">
            après une visite préalable des lieux
          </span>
          , entre le responsable de l'entreprise utilisatrice et les
          responsables de toutes les entreprises extérieures.
        </div>
      </div>
    </>
  );
}
