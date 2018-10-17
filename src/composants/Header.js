import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styled from "styled-components";

import { Nav } from ".";

//

const LogoImg = ({ className, alt }) => (
  <img className={className} src="/static/images/marianne.svg" alt={alt} />
);

LogoImg.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string
};

// verticalAlign: 'middle', marginRight: 10
const Logo = styled(LogoImg)`
  height: 50px;
  vertical-align: middle;
  margin-right: 10px;
`;

//

const NavbarTitleContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const NavbarTitle = styled.div`
  font-size: 1.5em;
`;

export const Header = ({
  logoUrl = "/",
  logoAlt = "Accueil de incubateur.social.gouv.fr",
  title = "incubateur.social.gouv.fr",
  subTitle = "L'incubateur des ministères sociaux",
  links = []
}) => (
  <header className="navbar">
    <div className="navbar__container">
      <Link href={logoUrl}>
        <div style={{ cursor: "pointer" }}>
          <Logo alt={logoAlt} />
          <NavbarTitleContainer>
            <NavbarTitle>{title}</NavbarTitle>
            {(subTitle && <div className="navbar__subtitle">{subTitle}</div>) ||
              null}
          </NavbarTitleContainer>
        </div>
      </Link>
      <Nav links={links} />
    </div>
  </header>
);

Header.propTypes = {
  logoUrl: PropTypes.string,
  logoAlt: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.exact({
      href: PropTypes.string,
      title: PropTypes.string
    })
  ),
  subTitle: PropTypes.string,
  title: PropTypes.string
};

export default Header;
