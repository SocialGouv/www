import Link from "next/link"

export default function Filters() {
  const phases = ["investigation", "construction", "acceleration", "success"]

  return (
    <div className="filters">
      {phases.map((phase, i) => (
        <>
          <Link key={i} href={{ query: { phase } }}>
            {phase}
          </Link>
          {i < phases.length - 1 && <>&nbsp;|&nbsp;</>}
        </>
      ))}
    </div>
  )
}
