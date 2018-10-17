import React from "react";
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

export const InternalLink = ({ href, as, children, error = false }) => (
  <NativeLink prefetch href={href} as={as}>
    <a>{children}</a>
  </NativeLink>
);

export const AnchorLink = ({ href, onClick, children }) => (
  <a href={href} onClick={onClick}>
    {children}
  </a>
);

export const ExternalLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export default GenericLink;
