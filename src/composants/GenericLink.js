import React from "react";
import PropTypes from "prop-types";
import NativeLink from "next/link";

// used for markdown links
// from https://raw.githubusercontent.com/zeit/next-site/master/components/docs/text/link.js

export const GenericLink = props => {
  if (props.href.startsWith("/") || props.href.startsWith("./")) {
    return <InternalLink {...props} />;
  }

  if (props.href.includes("@") || props.href.startsWith("#")) {
    return <AnchorLink {...props} />;
  }

  return <ExternalLink {...props} />;
};

//

export const InternalLink = ({ href, as, children }) => (
  <NativeLink prefetch href={href} as={as}>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a>{children}</a>
  </NativeLink>
);

InternalLink.propTypes = {
  as: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  href: PropTypes.string
};

//

export const AnchorLink = ({ href, onClick, children }) => (
  <a href={href} onClick={onClick}>
    {children}
  </a>
);

AnchorLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  href: PropTypes.string,
  onClick: PropTypes.func
};

//

export const ExternalLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

ExternalLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  href: PropTypes.string
};

export default GenericLink;
