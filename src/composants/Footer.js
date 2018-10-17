import React from "react";
import Link from "next/link";

export default ({
  title = "template.data.gouv.fr",
  links = [
    {
      href: "https://www.data.gouv.fr/reference",
      title: "Données de référence"
    },
    {
      href: "https://www.data.gouv.fr/terms",
      title: "Conditions générales d'utilisation !"
    },
    {
      href: "https://www.data.gouv.fr/api",
      title: "API"
    }
  ],
  style,
  children
}) => (
  <footer className="footer" style={style}>
    <div className="container">
      <div className="footer__logo">
        Un incubateur propulsé par{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://beta.gouv.fr"
        >
          beta.gouv.fr
        </a>{" "}
        et la DSI des ministères sociaux. :)
        <ul className="footer__social">
          <li>
            <a href="https://github.com/SocialGouv" title="Github">
              <svg className="icon icon-github">
                <use xlinkHref="#icon-github" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="mailto:DSI-incubateur@sg.social.gouv.fr"
              title="Nous écrire un mail"
            >
              <svg className="icon icon-mail">
                <use xlinkHref="#icon-mail" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <ul className="footer__links">
        <li>
          <h2>{title}</h2>
        </li>
        {links.map(link => (
          <li key={link.href}>
            <Link href={link.href}>
              <a>{link.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="footer__links" />
    </div>
    <div>{children}</div>
  </footer>
);
