import { Footer, Header, SvgIcons } from ".";
import ReactTooltip from "react-tooltip";

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
  {
    title: "Conditions générales d'utilisation",
    href: "/"
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
        <Header
          title="ASTech.social.gouv.fr"
          subTitle="L'incubateur des ministères sociaux"
          links={headerLinks}
        />
        {this.props.children}
        <Footer title="ASTech.social.gouv.fr" links={footerLinks} />
        <ReactTooltip />
      </React.Fragment>
    );
  }
}
