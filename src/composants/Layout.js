import { MDXProvider } from "@mdx-js/tag";
import PropTypes from "prop-types";
import React from "react";
import ReactTooltip from "react-tooltip";

import { ReactPiwik } from "../piwik";
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
    href: "/feed.xml",
    title: "RSS",
  },
];

export default class Layout extends React.Component {
  /*
    for some reason, Link to internal anchors "#" doesnt work properly, at least in dev
    this `componentDidMount` enforces systematic anchor scroll on page change
  */
  componentDidMount() {
    const isBrowser = typeof document !== undefined;
    if (isBrowser) {
      ReactPiwik.push(["setCustomUrl", document.location.href]);
      ReactPiwik.push(["setDocumentTitle", document.title]);
      ReactPiwik.push(["trackPageView"]);

      const url = document.location.href;
      const pattern = /^(\/#.+)|(.+(\/#.+))$/;
      if (url && pattern.test(url)) {
        const hash = pattern
          .exec(url)
          .filter((item) => item)
          .pop();
        const id = hash.replace(/\/?#/, "");
        const target = document.getElementById(id);
        if (target) {
          const top = target.getBoundingClientRect().top;
          setTimeout(window.scroll(0, top));
        }
      }
    }
  }
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
