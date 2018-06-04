import Link from "next/link";

import { Nav } from ".";

export const Header = ({
  logoUrl = "/",
  logoAlt = "Accueil de template.data.gouv.fr",
  title = "template.data.gouv.fr",
  subTitle = "",
  links = [
    {
      href: "/#typography",
      title: "Typographie"
    },
    {
      href: "/#couleurs",
      title: "Couleurs"
    },
    {
      href: "/article",
      title: "Article 1"
    },
    {
      href: "/example",
      title: "Example 1"
    },
    {
      href: "/#form",
      title: "Form"
    },
    {
      href: "/#documentation",
      title: "Documentation"
    }
  ]
}) => (
  <header className="navbar">
    <div className="navbar__container">
      <Link href={logoUrl}>
        <div style={{ cursor: "pointer" }}>
          <img
            className="navbar__logo"
            src="/static/images/marianne.svg"
            alt={logoAlt}
            style={{ verticalAlign: "middle", marginRight: 10 }}
          />
          <div className="navbar__title_container">
            <div className="navbar__title">{title}</div>
            {(subTitle && <div className="navbar__subtitle">{subTitle}</div>) ||
              null}
          </div>
        </div>
      </Link>
      <Nav links={links} />
    </div>
  </header>
);

export default Header;
