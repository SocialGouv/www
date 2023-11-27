import { fr } from "@codegouvfr/react-dsfr"

export default function Kpis() {
  return (
    <section>
      <div className="fr-container">
        <h2 className="fr-h2">
          Quels sont nos indicateurs de performance (KPI) ?
        </h2>
        <div className="kpis mt-12 mx-12 flex flex-col gap-12">
          <div className="flex gap-12">
            <div className="kpi flex-1">
              <div className="font-bold text-5xl text-blue-950">27</div>
              <div className="font-bold text-blue-950">
                Nombre de projets incubés
              </div>
            </div>
            <div className="kpi flex-1">
              <div className="font-bold text-5xl text-blue-950">95%</div>
              <div className="font-bold text-blue-950">
                Taux de réussite des projets
              </div>
            </div>
            <div className="kpi flex-1">
              <div className="font-bold text-5xl text-blue-950">6 mois</div>
              <div className="font-bold text-blue-950">
                Délai moyen de mise en service d&apos;un outil
              </div>
            </div>
            <div className="kpi flex-1">
              <div className="font-bold text-5xl text-blue-950">80%</div>
              <div className="font-bold text-blue-950">
                Niveau de satisfaction des utilisateurs
              </div>
            </div>
          </div>
          <div className="flex gap-12">
            <div className="kpi flex-1">
              <div className="font-bold text-5xl text-blue-950">2x</div>
              <div className="font-bold text-blue-950">
                Impact sur des servies concernés
              </div>
            </div>
            <div className="kpi flex-1">
              <div className="font-bold text-5xl text-blue-950">2m</div>
              <div className="font-bold text-blue-950">Économies réalisées</div>
            </div>
            <div className="kpi flex-1">
              <div className="font-bold text-5xl text-blue-950">24</div>
              <div className="font-bold text-blue-950">
                Nombre de collaborations interministèrielles
              </div>
            </div>
            <div className="kpi flex-1">
              <div className="font-bold text-5xl text-blue-950">XX</div>
              <div className="font-bold text-blue-950">Xxxxxxxxxxxxxx</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
