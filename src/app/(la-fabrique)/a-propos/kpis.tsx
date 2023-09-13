import { fr } from "@codegouvfr/react-dsfr"

export default function Kpis() {
  return (
    <section>
      <div className="fr-container">
        <h2 className={fr.cx("fr-h2")}>
          Quels sont nos indicateurs de performance (KPI) ?
        </h2>
        <div className="kpis mt-12 mx-12 flex flex-col gap-12">
          <div className="flex gap-12">
            <div className="kpi flex-1">
              <div className="font-bold text-4xl text-blue-900">27</div>
              <div className="font-bold text-blue-900">
                Nombre de projets incubés
              </div>
            </div>
            <div className="kpi flex-1">
              <div className="font-bold text-4xl text-blue-900">95%</div>
              <div className="font-bold text-blue-900">
                Taux de réussite des projets
              </div>
            </div>
            <div className="kpi flex-1">
              <div className="font-bold text-4xl text-blue-900">6 mois</div>
              <div className="font-bold text-blue-900">
                Délai moyen de mise en service d&apos;un outil
              </div>
            </div>
            <div className="kpi flex-1">
              <div className="font-bold text-4xl text-blue-900">80%</div>
              <div className="font-bold text-blue-900">
                Niveau de satisfaction des utilisateurs
              </div>
            </div>
          </div>
          <div className="flex gap-12">
            <div className="kpi flex-1">
              <div className="font-bold text-4xl text-blue-900">2x</div>
              <div className="font-bold text-blue-900">
                Impact sur des servies concernés
              </div>
            </div>
            <div className="kpi flex-1">
              <div className="font-bold text-4xl text-blue-900">2m</div>
              <div className="font-bold text-blue-900">Économies réalisées</div>
            </div>
            <div className="kpi flex-1">
              <div className="font-bold text-4xl text-blue-900">24</div>
              <div className="font-bold text-blue-900">
                Nombre de collaborations interministèrielles
              </div>
            </div>
            <div className="kpi flex-1">
              <div className="font-bold text-4xl text-blue-900">XX</div>
              <div className="font-bold text-blue-900">Xxxxxxxxxxxxxx</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
