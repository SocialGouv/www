import Item from "./item"
import getStartups from "../../app/startups/get-startups"

export default function StartupsList() {
  const startups = getStartups()

  return (
    <div className="startups-list grid grid-cols-4 gap-6 fr-mt-6w">
      {startups.map((startup) => (
        <Item key={startup.id} startup={startup} />
      ))}
    </div>
  )
}
