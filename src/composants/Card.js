import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const Card = ({ href, img, title, meta, description }) => (
  <div className="card">
    <div className="card__cover">
      <Link href={href}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a style={{ cursor: "pointer" }}>
          <img alt={`Aperçu ${title}`} src={img} />
        </a>
      </Link>
    </div>
    <div className="card__content">
      <h3>
        <Link href={href}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a style={{ cursor: "pointer", color: "black" }}>{title}</a>
        </Link>
      </h3>
      <div className="card__meta">
        <time>{meta}</time>
      </div>
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  </div>
);

Card.propTypes = {
  description: PropTypes.string,
  href: PropTypes.string,
  img: PropTypes.string,
  meta: PropTypes.string,
  title: PropTypes.string
};

export default Card;
