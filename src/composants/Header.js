import Link from "next/link";
import styled from 'styled-components';

import { Nav } from ".";

//

const LogoImg = ({ className, alt }) => (
  <img
    className={className}
    src="/static/images/marianne.svg"
    alt={alt}
  />
);

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
          <Logo alt={logoAlt}></Logo>
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

export default Header;
