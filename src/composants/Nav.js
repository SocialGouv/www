const Link = ({ url, title }) => (
  <li className="nav__item">
    <a href={url}>{title}</a>
  </li>
);

export const Nav = ({
  logo = "",
  logoUrl = "index.html",
  logoAlt = "Accueil de template.data.gouv.fr",
  links = [
    {
      url: "#typography",
      title: "Typographie"
    },
    {
      url: "#couleurs",
      title: "Couleurs"
    },
    {
      url: "#typography",
      title: "Typographie"
    },
    {
      url: "#form",
      title: "Form"
    },
    {
      url: "#documentation",
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
          {links.map(link => <Link key={link.url} {...link} />)}
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
