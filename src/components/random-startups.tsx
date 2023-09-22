import getStartups from "@/utils/get-startups"
import Item from "@/components/startups-list/item"
import getRandomEntries from "@/utils/get-random-entries"

export default function RandomStartups() {
  const startups = getStartups()
  const randomStartups = getRandomEntries(startups, 4)

  return (
    <div className="random-startups fr-pb-6w">
      <div className="fr-container">
        <h2 className="fr-h2 fabnum-title--h2">
          Découvrez d&apos;autres startups de la Fabrique
        </h2>
        <div className="grid grid-cols-4 gap-6 fr-mt-6w">
          {randomStartups.map((startup) => (
            <Item key={startup.id} startup={startup} />
          ))}
        </div>
      </div>
    </div>
  )
}
