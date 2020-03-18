import React from "react";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";
import { MDXProvider } from "@mdx-js/tag";

import { ReactPiwik } from "../piwik";
import { Footer, Header, SvgIcons, GenericLink } from ".";

const components = {
  a: GenericLink
};

const headerLinks = [
  {
    title: "Nos produits",
    href: "/#produits"
  },
  {
    title: "Actualités",
    href: "/actus"
  },
  {
    title: "Communauté",
    href: "/members"
  },
  // {
  //   title: "Evènements",
  //   href: "/evenements"
  // },
  {
    title: "Proposez vos idées",
    href: "/idees"
  }
];

const footerLinks = [
  {
    href: "/faq",
    title: "F.A.Q."
  },
  {
    href: "/feed.xml",
    title: "RSS"
  }
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
          .filter(item => item)
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
    PropTypes.arrayOf(PropTypes.element)
  ])
};
