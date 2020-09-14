import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

const AuthorPanel = ({
  name = "Corgi",
  role = "Intrapreneur",
  Icon,
  href = "#",
  target = "_blank",
  description,
}) => (
  <div className="article__author panel">
    <div className="article__author-info">
      <Link href={href}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="article__author-name" target={target}>
          {name}
        </a>
      </Link>
      <div className="article__author-role">{role}</div>
    </div>
    {(Icon && (
      <Link href={href}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a target={target}>
          <Icon />
        </a>
      </Link>
    )) ||
      null}
    <p
      className="article__author-description"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  </div>
);

AuthorPanel.propTypes = {
  Icon: PropTypes.func,
  description: PropTypes.string,
  href: PropTypes.string,
  name: PropTypes.string,
  role: PropTypes.string,
  target: PropTypes.string,
};

export default AuthorPanel;
