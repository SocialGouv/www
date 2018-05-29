import Link from "next/link";

const Card = ({ href, img, title, meta, description }) => (
  <Link href={href}>
    <div className="card">
      <div className="card__cover">
        <a style={{ cursor: "pointer" }}>
          <img alt={`Aperçu ${title}`} src={img} />
        </a>
      </div>
      <div className="card__content">
        <h3>
          <a style={{ cursor: "pointer" }}>{title}</a>
        </h3>
        <div className="card__meta">
          <time>{meta}</time>
        </div>
        <p>{description}</p>
      </div>
    </div>
  </Link>
);

export default Card;
