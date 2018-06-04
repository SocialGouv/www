import Link from "next/link";

const NavItem = ({ href, title }) => (
  <li className="nav__item">
    <Link href={href || "#"}>
      <a>{title}</a>
    </Link>
  </li>
);

const Nav = ({ links }) => (
  <nav>
    <ul className="nav__links">
      {links && links.map(link => <NavItem key={link.href} {...link} />)}
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
);

export default Nav;
