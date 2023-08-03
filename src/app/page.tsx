import Image from "next/image";
import { fr } from "@codegouvfr/react-dsfr";

export default function Home() {
  return (
    <main id="contenu" className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className={fr.cx("fr-h1")}>
        <h1>Santé, Solidarité, Travail: nos startups à votre service</h1>
      </section>
    </main>
  );
}
