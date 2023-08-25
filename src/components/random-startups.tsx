import Item from "@/components/startups-list/item"
import getStartups from "@/app/startups/get-startups"
import getRandomEntries from "@/utils/get-random-entries"

export default function RandomStartups() {
  const startups = getStartups()
  const randomStartups = getRandomEntries(startups, 4)

  return (
    <div className="random-startups fr-container">
      <div className="grid grid-cols-4 gap-6 fr-mt-6w">
        {randomStartups.map((startup) => (
          <Item key={startup.id} startup={startup} />
        ))}
      </div>
    </div>
  )
}
