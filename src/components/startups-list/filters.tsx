export default function Filters({
  selectedPhase,
  onClick,
}: {
  selectedPhase?: string
  onClick: (phase: string) => void
}) {
  const phases = ["investigation", "construction", "acceleration", "success"]

  return (
    <div className="filters flex">
      {phases.map((phase, i) => (
        <div className="filter flex" key={`phase-filter-${phase}`}>
          <div
            onClick={() => onClick(phase)}
            className={selectedPhase === phase ? "selected text-red-700" : ""}
          >
            {phase}
          </div>
          {i < phases.length - 1 && <>&nbsp;|&nbsp;</>}
        </div>
      ))}
    </div>
  )
}
