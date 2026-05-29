import { useFormContext } from "react-hook-form";
type Props = {
  data: any;
};

export default function SocialOfficeSectionPDF({ data }: Props) {
  const Locker = data?.SocialOffice?.Locker || false;
  const Cafeteria = data?.SocialOffice?.Cafeteria || false;
  const wc = data?.SocialOffice?.wc || false;

  return (
    <>
      <div className="pdf-section">
        <table
          className="w-full border-2 border-black border-collapse table-fixed mt-3"
          style={{
            width: "99.8%",
          }}
        >
          <tbody>
            {/* Ligne titre */}
            <tr>
              <td className="border border-black p-2" colSpan={2}>
                {/* Titre */}
                <div className="font-bold uppercase underline text-sm">
                  LOCAUX SOCIAUX MIS A DISPOSITION
                </div>
                <div className="font-bold text-sm mb-4">
                  (indiquer la répartition éventuelle des charges)
                </div>

                {/* Contenu */}
                <div className="grid grid-cols-3 gap-y-2 mx-10">
                  <label className="text-sm flex items-center gap-1 leading-snug">
                    <input
                      type="checkbox"
                      checked={Locker}
                      readOnly
                      className="scale-75 accent-black w-4 shrink-0"
                    />
                    Vestiaires
                  </label>

                  <label className="text-sm flex items-center gap-1 leading-snug">
                    <input
                      type="checkbox"
                      checked={Cafeteria}
                      readOnly
                      className="scale-75 accent-black w-4 shrink-0"
                    />
                    Réfectoire
                  </label>

                  <label className="text-sm flex items-center gap-1 leading-snug">
                    <input
                      type="checkbox"
                      checked={wc}
                      readOnly
                      className="scale-75 accent-black w-4 shrink-0"
                    />
                    Sanitaires dans l’Université
                  </label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
