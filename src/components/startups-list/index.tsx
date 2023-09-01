import Item from "./item"
import getStartups from "../../utils/get-startups"

export default function StartupsList({ phase }: { phase: string }) {
  const startups = getStartups({ phase })

  return (
    <div className="startups-list grid grid-cols-4 gap-6 fr-mt-6w">
      {startups.map((startup) => (
        <Item key={startup.id} startup={startup} />
      ))}
    </div>
  )
}
