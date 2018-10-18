import React from "react";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";
import { MDXProvider } from "@mdx-js/tag";

import { Footer, Header, SvgIcons, GenericLink } from ".";
import ReactPiwik from "react-piwik";

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
    title: "Evènements",
    href: "/evenements"
  }
  // {
  //   title: "Qui sommes-nous ?",
  //   href: "/qui-sommes-nous"
  // }
];
const footerLinks = [
  // {
  //   title: "A propos",
  //   href: "/"
  // },
  //{
  //  title: "Conditions générales d'utilisation",
  //  href: "/cgu"
  //},
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
        <Footer title="incubateur.social.gouv.fr" links={footerLinks}>
          <div style={{ textAlign: "center" }}>
            <iframe
              title="souscrire à la newsletter"
              style={{ maxWidth: 600, margin: "0 auto" }}
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://app.mailjet.com/widget/iframe/3car/7gW"
              width="100%"
              height="242"
            />
          </div>
        </Footer>
        <ReactTooltip />
      </React.Fragment>
    );
  }
}

Layout.propTypes = { children: PropTypes.element };
