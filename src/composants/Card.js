import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

const Card = ({
  href,
  img,
  title,
  meta,
  description,
  style,
  className,
  children
}) => (
  <div className={`card ${className || ""}`} style={style}>
    <div className="card__cover">
      {(href && (
        <Link href={href}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a style={{ cursor: "pointer" }}>
            <img alt={`Aperçu ${title}`} src={img} />
          </a>
        </Link>
      )) || <img alt={`Aperçu ${title}`} src={img} />}
    </div>
    <div className="card__content">
      <h3>
        {(href && (
          <Link href={href}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a style={{ color: "black", cursor: "pointer" }}>{title}</a>
          </Link>
        )) || <span>{title}</span>}
      </h3>
      {meta && (
        <div className="card__meta">
          <time>{meta}</time>
        </div>
      )}
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <div>{children}</div>
    </div>
  </div>
);

Card.propTypes = {
  children: PropTypes.array,
  className: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string,
  img: PropTypes.string,
  meta: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string
};

export default Card;
