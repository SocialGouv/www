import { MDXProvider } from "@mdx-js/tag";
import PropTypes from "prop-types";
import React from "react";
import ReactTooltip from "react-tooltip";

import { Footer, GenericLink, Header, SvgIcons } from ".";

const components = {
  a: GenericLink,
};

const headerLinks = [
  {
    href: "/#produits",
    title: "Nos produits",
  },
  {
    href: "/actus",
    title: "Actualités",
  },
  {
    href: "/members",
    title: "Communauté",
  },
  // {
  //   title: "Evènements",
  //   href: "/evenements"
  // },
  {
    href: "/idees",
    title: "Proposez vos idées",
  },
];

const footerLinks = [
  {
    href: "/faq",
    title: "F.A.Q.",
  },
  {
    href: "/mentions-legales",
    title: "Mentions légales",
  },
  {
    href: "/feed.xml",
    title: "RSS",
  },
];

export default class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SvgIcons />
        <Header links={headerLinks} />

        <MDXProvider components={components}>
          <div>{this.props.children}</div>
        </MDXProvider>
        <Footer title="fabrique.social.gouv.fr" links={footerLinks} />
        <ReactTooltip />
      </React.Fragment>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
