import React from "react";
import Link from "next/link";

const Card = ({ href, img, title, meta, description }) => (
  <div className="card">
    <div className="card__cover">
      <Link href={href}>
        <a style={{ cursor: "pointer" }}>
          <img alt={`Aperçu ${title}`} src={img} />
        </a>
      </Link>
    </div>
    <div className="card__content">
      <h3>
        <Link href={href}>
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

export default Card;
