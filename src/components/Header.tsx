import { quickAccessItems } from "@/utils/quickAccessItems"
import { Header as DSFRHeader } from "@codegouvfr/react-dsfr/Header"

import Navigation from "./Navigation"

import { Suspense } from "react"

const NavigationFallback = () => <>NavigationFallback</>

const NavigationSuspense = () => (
  <Suspense fallback={<NavigationFallback />}>
    <Navigation />
  </Suspense>
)

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
      navigation={<NavigationSuspense />}
      quickAccessItems={quickAccessItems}
      serviceTitle="La Fabrique Numérique"
      serviceTagline="L'incubateur des ministères sociaux"
      homeLinkProps={{ href: "/", title: "Accueil - La Fabrique Numérique" }}
      id="fr-header-header-with-quick-access-items-nav-items-and-search-engine"
    />
  )
}
