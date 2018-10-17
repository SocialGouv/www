import React from "react";
import Link from "next/link";
import styled from 'styled-components';

//

// TODO(douglasduteil): might want to share this...
const mobileBreackPoint = 549;

//

const NavContainer = styled.nav`
  @media (max-width: ${mobileBreackPoint}px) {
    margin-top: 2em;
    width: 100%;
    text-align: center;
  }
`;

//

const NavItem = ({ href, title }) => (
  <li className="nav__item">
    <Link href={href || '#'}>
      <a>{title}</a>
    </Link>
  </li>
);

//

const Nav = ({ links }) => (
  <NavContainer>
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
  </NavContainer>
);

export default Nav;
