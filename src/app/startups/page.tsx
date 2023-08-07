import { fr } from "@codegouvfr/react-dsfr"

async function getData() {
  const res = await fetch("http://localhost:3000/api/startups")
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export const revalidate = 3600 // revalidate at most every hour

export default async function Recrutement() {
  const data = await getData()

  return (
    <section>
      <h1 className={fr.cx("fr-h1")}>Recrutement</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </section>
  )
}
