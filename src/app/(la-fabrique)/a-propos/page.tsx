import Kpis from "./components/kpis"
import Intro from "./components/intro"
import Methods from "./components/methods"
import History from "./components/history"

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
