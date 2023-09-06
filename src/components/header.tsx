import { Suspense } from "react"
import { quickAccessItems } from "@/utils/quick-access-items"
import { Header as DSFRHeader } from "@codegouvfr/react-dsfr/Header"

import Navigation from "@/components/navigation"

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
      // quickAccessItems={quickAccessItems}
      serviceTitle="La Fabrique Numérique"
      serviceTagline="L'incubateur des ministères sociaux"
      homeLinkProps={{ href: "/", title: "Accueil - La Fabrique Numérique" }}
      id="fr-header-header-with-quick-access-items-nav-items-and-search-engine"
    />
  )
}
