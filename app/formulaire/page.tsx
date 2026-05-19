import Link from "next/link";

export default function Formulaire() {
  return (
    <div>
      <h1>Choix du formulaire</h1>

      <ul>
        <li>
          <Link href="/formulaire/annuel">Annuel</Link>
        </li>
        <li>
          <Link href="/formulaire/ponctuel">Ponctuel</Link>
        </li>
      </ul>
    </div>
  );
}
