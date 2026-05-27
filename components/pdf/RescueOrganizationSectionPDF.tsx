import { EMERGENCY_CONTACT, PRESIDENT_CONTACT } from "@/app/const/const";

export default function RescueOrganizationSection() {
  return (
    <table className="w-full border-2 border-black border-collapse table-fixed mt-1">
      <tbody>
        {/* Ligne titre */}
        <tr>
          <td className="border border-black p-2" colSpan={3}>
            {/* Titre */}
            <div className="font-bold uppercase underline text-sm mb-3">
              ORGANISATION DES SECOURS SUR L’UNIVERSITE PARIS VIII
            </div>
            <div className="text-sm mb-1">
              <span className="font-bold text-red-600 underline">
                Infirmerie{" "}
              </span>
              : {EMERGENCY_CONTACT.Infirmerie_tel} –{" "}
              {EMERGENCY_CONTACT.Infirmerie_place} – Horaires ouverture :{" "}
              {EMERGENCY_CONTACT.Infirmerie_hour}
            </div>
            <div className="text-sm mb-1">
              <span className="font-bold text-red-600 underline">
                Secouristes
              </span>
              <span> : </span>
              <span className="font-bold text-red-600">
                {EMERGENCY_CONTACT.agent_place1}{" "}
              </span>
              – {EMERGENCY_CONTACT.agent_place2} – Tél :{" "}
              {EMERGENCY_CONTACT.agent_tel1}{" "}
              <span className="font-bold"> OU </span>
              {EMERGENCY_CONTACT.agent_tel2}{" "}
              <span className="font-bold"> OU </span>
              {EMERGENCY_CONTACT.agent_tel3}{" "}
            </div>
            <div className="text-sm mb-1">
              <span className="underline">Horaires d'ouverture</span> : 24h /
              24h
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
