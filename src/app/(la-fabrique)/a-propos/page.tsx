import Kpis from "./kpis"
import Intro from "./intro"
import Methods from "./methods"
import History from "./history"

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-y-16">
      <Intro />
      <History />
      <Methods />
      <Kpis />
    </div>
  )
}
