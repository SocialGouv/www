const navLinks = [
  {
    title: "Typographie",
    url: "#typography"
  },
  {
    title: "Couleurs",
    url: "#colors"
  },
  {
    title: "Form",
    url: "#form"
  },
  {
    title: "Documentation",
    url: "#documentation"
  }
];


const Nav = () => (
  <nav className="nav">
    <div className="nav__container">
      <a className="nav__link" href="/">
        <img
          className="nav__logo"
          src="/static/images/logo_site.svg"
          alt="Accueil de template.data.gouv.fr"
        />
      </a>
      <ul className="nav__links">
        {navLinks.map(({ title, url }) => (
          <li key={url}>
            <a href={url}>{title}</a>
          </li>
        ))}
        <li>
          <div className="dropdown">
            Langage
            <div className="dropdown-content">
              <a href="#">Français 🇫🇷</a>
              <a href="#">Anglais 🇬🇧</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
