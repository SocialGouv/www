import StartupsList from "@/components/startups-list"

export default function StartupsPage() {
  return (
    <div className="startups-list fr-container pb-16">
      <h1 className="fr-h1 text-blue-950">Nos start-ups</h1>
      <StartupsList />
    </div>
  )
}
