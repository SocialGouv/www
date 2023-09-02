import Link from "next/link"

export default function Filters({
  selectedPhase,
  onClick,
}: {
  selectedPhase?: string
  onClick: (phase: string) => void
}) {
  const phases = ["investigation", "construction", "acceleration", "success"]

  return (
    <div className="filters">
      {phases.map((phase, i) => (
        <div className="filter" key={i}>
          <div
            onClick={() => onClick(phase)}
            className={selectedPhase === phase ? "selected" : ""}
          >
            {phase}
          </div>
          {i < phases.length - 1 && <>&nbsp;|&nbsp;</>}
        </div>
      ))}
    </div>
  )
}
