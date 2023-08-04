import Navigation from "./Navigation"
import { Header as DSFRHeader } from "@codegouvfr/react-dsfr/Header"

export default function Header() {
  return (
    <DSFRHeader
      brandTop={
        <>
          LA FABRIQUE
          <br />
          DES MINISTÈRES SOCIAUX
        </>
      }
      homeLinkProps={{
        href: "/",
        title:
          "Accueil - Nom de l'entité (ministère, secrétariat d'état, gouvernement)",
      }}
      id="fr-header-header-with-quick-access-items-nav-items-and-search-engine"
      navigation={<Navigation />}
      quickAccessItems={[
        {
          iconId: "fr-icon-file-text-line",
          linkProps: {
            href: "/documentation",
          },
          text: "Documentation",
        },
      ]}
      serviceTagline="Un incubateur betagouv 🥸"
      serviceTitle="La Fabrique des Ministères Sociaux"
    />
  )
}
