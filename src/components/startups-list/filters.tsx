export default function Filters({
  selectedPhase,
  onClick,
}: {
  selectedPhase?: string
  onClick: (phase: string) => void
}) {
  const phases = ["investigation", "construction", "acceleration", "success"]

  return (
    <div className="filters flex absolute right-0 top-3.5">
      {phases.map((phase, i) => (
        <div className="filter flex" key={`phase-filter-${phase}`}>
          <div
            onClick={() => onClick(phase)}
            className={`${
              selectedPhase === phase ? `selected font-bold` : ""
            } cursor-pointer hover:font-bold`}
          >
            {phase}
          </div>
          {i < phases.length - 1 && <>&nbsp;|&nbsp;</>}
        </div>
      ))}
    </div>
  )
}
