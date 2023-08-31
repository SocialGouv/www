import Link from "next/link"

export default function Filters() {
  const statuses = ["investigation", "construction", "accélération", "succès"]

  return (
    <div className="filters">
      {statuses.map((status, i) => (
        <>
          <Link key={i} href={{ query: { statut: status } }}>
            {status}
          </Link>
          &nbsp;|&nbsp;
        </>
      ))}
    </div>
  )
}
