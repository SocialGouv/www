import organisations from "../organisations.json"

export type Organisation = (typeof organisations)[number]

export default function getOrganisation(id: string) {
  return organisations.find((organisation) => organisation.id === id)
}
