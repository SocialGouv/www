import { Header as DSFRHeader } from "@codegouvfr/react-dsfr/Header"
import { quickAccessItems } from "@/utils/quickAccessItems"
import Navigation from "./Navigation"

export default function Header() {
  return (
    <DSFRHeader
      brandTop={
        <>
          MINISTÈRES
          <br />
          SOCIAUX
        </>
      }
      homeLinkProps={{
        href: "/",
        title: "Accueil - La Fabrique Numérique",
      }}
      id="fr-header-header-with-quick-access-items-nav-items-and-search-engine"
      navigation={<Navigation />}
      quickAccessItems={quickAccessItems}
      serviceTagline="L'incubateur des ministères sociaux"
      serviceTitle="La Fabrique Numérique"
    />
  )
}
