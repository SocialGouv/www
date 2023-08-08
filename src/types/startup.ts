export interface Startup {
  id: string
  type: string
  attributes: {
    name: string
    pitch: string
    stats_url?: string
    budget_url?: string
    link?: string
    repository?: string
    contact: string
    events: StartupEvent[]
    phases: StartupPhase[]
    analyse_risques?: string
    analyse_risques_url?: string
    dashlord_url?: string
    accessibility_status?: string
    ministere: "travail" | "solidarité" | "santé"
  }
}

export interface StartupBetaGouv {
  id: string
  type: string
  attributes: {
    name: string
    pitch: string
    stats_url?: string
    budget_url?: string
    link?: string
    repository?: string
    contact: string
    content_url_encoded_markdown: string
    events: StartupEvent[]
    phases: StartupPhase[]
    analyse_risques?: string
    analyse_risques_url?: string
    dashlord_url?: string
    accessibility_status?: string
  }
  relationships: {
    incubator: {
      data: {
        type: "incubator"
        id: string
      }
    }
  }
}

export interface StartupLocal {
  name: string
  ministere: "travail" | "solidarité" | "santé"
}

// add ministere to StartupBetaGouv's attributes

interface StartupEvent {
  name: "committee" | "end" | "national_impact" | "other" | "product_launch"
  date: string
  comment: string
}

interface StartupPhase {
  name:
    | "acceleration"
    | "alumni"
    | "construction"
    | "investigation"
    | "success"
    | "transfer"
  start: string
  end: string
}
