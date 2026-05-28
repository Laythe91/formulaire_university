type Props = { data: any };

export default function EntrepriseTitulaireInformationPDF({ data }: Props) {
  const Nom = data.name;
  const Address = data.address;
  const tel = data.tel;
  const fax = data.fax;
  const effectif = data.effectif;
  const representant = data.representant;
  const representantNom = data.representant.name;
  const representantTel = data.representant.tel;
  const representantMail = data.representant.mail;
  const responsable = data.responsable;
  const responsableNom = data.responsable.name;
  const responsableTel = data.responsable.tel;
  const responsableMail = data.responsable.mail;

  return (
    <>
      <tr>
        <td className="border p-2 border-black">
          <div className="flex flex-row items-center gap-3">
            <div className=" font-bold text-sm ">
              Nom de l'entreprise Titulaire : {"  "}
            </div>
            <div className="break-word whitespace-pre-wrap w-140">{Nom}</div>
          </div>
          <div className="flex flex-row gap-3 mt-3">
            <div className=" font-bold text-sm mt-2">
              Adresse de l'entreprise : {"  "}
            </div>
            <div className="w-100">
              <span className="w-full min-h-15 border p-2 text-sm resize-none overflow-hidden wrap-break-words whitespace-pre-wrap">
                {Address}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <div className="flex flex-row items-center gap-3">
              <div className=" font-bold text-sm ">Effectif prévu : {"  "}</div>
              <div>
                <span className="border px-2 py-0.5 w-20 text-center text-sm">
                  {" "}
                  {effectif}
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center space-x-4">
              <div className=" font-bold text-sm ">Tél : {"  "}</div>
              <div>
                <span className="border px-2 py-0.5 w-full text-center text-sm">
                  {tel}
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center gap-3">
              <div className=" font-bold text-sm ">Fax : {"  "}</div>
              <div>
                <span className="border px-2 py-0.5 w-full text-center text-sm">
                  {fax}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <div className="flex flex-row items-center gap-3">
              <div className=" font-bold text-sm ">
                Nom du représentant de l'entreprise : {"  "}
              </div>
              <div>
                <span className="border px-2 py-1 w-125 text-sm resize-none overflow-hidden wrap-break-words whitespace-pre-wrap leading-tight">
                  {" "}
                  {representantNom}
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center gap-3">
              <div className=" font-bold text-sm ">Tél : {"  "}</div>
              <div>
                <span className="border px-2 py-0.5 w-full text-center text-sm">
                  {representantTel}
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center gap-3">
              <div className=" font-bold text-sm ">Mail : {"  "}</div>
              <div>
                <span className="border px-2 py-0.5 w-170 text-sm">
                  {representantMail}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <div className="flex flex-row items-center gap-3">
              <div className=" font-bold text-sm ">
                Nom du responsable du suivi des travaux: {"  "}
              </div>
              <div>
                <span className="border px-2 py-1 w-120 text-sm resize-none overflow-hidden wrap-break-words whitespace-pre-wrap leading-tight">
                  {" "}
                  {responsableNom}
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center gap-3">
              <div className=" font-bold text-sm ">Tél : {"  "}</div>
              <div>
                <span className="border px-2 py-0.5 w-full text-center text-sm">
                  {responsableTel}
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center gap-3">
              <div className=" font-bold text-sm ">Mail : {"  "}</div>
              <div>
                <span className="border px-2 py-0.5 w-170 text-sm">
                  {responsableMail}
                </span>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}
