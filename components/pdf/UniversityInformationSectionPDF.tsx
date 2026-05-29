import { PRESIDENT_CONTACT } from "@/app/const/const";

type Props = {
  data: any;
};

export default function UniversityInformationSectionPDF({ data }: Props) {
  const nom = data?.UniversityInformation?.nom || "";
  const phone1 = data?.UniversityInformation?.phone1 || "";
  const phone2 = data?.UniversityInformation?.phone2 || "";

  return (
    <div className="pdf-section">
      <table
        className="w-full border-2 border-black border-collapse table-fixed mt-1"
        style={{
          width: "99.8%",
        }}
      >
        <tbody>
          {/* Ligne titre */}
          <tr>
            <td className="border border-black p-2" colSpan={3}>
              {/* Titre */}
              <div className="font-bold uppercase underline text-sm mb-3">
                RENSEIGNEMENTS SUR L’UNIVERSITE PARIS VIII (Entreprise
                utilisatrice){" "}
              </div>
              <div className="text-sm mb-1">
                <span className="font-bold">
                  Nom et fonction du donneur d'ordre : {PRESIDENT_CONTACT.name}
                </span>
                , Président de l'université
              </div>
              <div className="text-sm mb-1 grid grid-cols-2 w-full">
                <div className="pl-2">Tél : {PRESIDENT_CONTACT.Tel}</div>

                <div>Fax : {PRESIDENT_CONTACT.Fax}</div>
              </div>
              <div className="flex flex-row gap-3 items-center text-sm mb-1">
                <div className="font-bold">
                  Nom de la personne chargée du suivi de l’opération (si
                  différente du donneur d’ordre) :
                </div>

                <div className="w-50">
                  <div className="w-full min-h-10 px-2 text-sm whitespace-pre-wrap wrap-break-words">
                    {nom}
                  </div>
                </div>
              </div>
              <div className="text-sm mb-1 mt-3 grid grid-cols-2 w-full">
                <div className="pl-2">
                  Tél :{" "}
                  <span className=" px-2 py-0.5 text-center text-sm">
                    {" "}
                    {phone1}
                  </span>
                </div>
                <div className="">
                  Portable :{" "}
                  <span className=" px-2 py-0.5 text-center text-sm">
                    {" "}
                    {phone2}
                  </span>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
