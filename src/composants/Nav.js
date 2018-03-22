import Link from "next/link";

const NavItem = ({ href, title }) => (
  <li className="nav__item">
    <Link href={href}>
      <a>{title}</a>
    </Link>
  </li>
);

export const Nav = ({
  logo = "",
  logoUrl = "/",
  logoAlt = "Accueil de template.data.gouv.fr",
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
      <a className="navbar__home" href={logoUrl}>
        <img
          className="navbar__logo"
          src="/static/images/logo_site.svg"
          alt={logoAlt}
        />
      </a>
      <nav>
        <ul className="nav__links">
          {links.map(link => <NavItem key={link.url} {...link} />)}
          {/*
          <li className="nav__item">
            <div className="dropdown">
              Langage
              <div className="dropdown-content">
                <a href="#">Français 🇫🇷</a>
                <a href="#">Anglais 🇬🇧</a>
              </div>
            </div>
          </li>
          */}
        </ul>
      </nav>
    </div>
  </header>
);

export default Nav;
