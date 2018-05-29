export default ({
  title = "template.data.gouv.fr",
  links = [
    {
      href: "https://www.data.gouv.fr/reference",
      title: "Données de référence"
    },
    {
      href: "https://www.data.gouv.fr/terms",
      title: "Conditions générales d'utilisation"
    },
    {
      href: "https://www.data.gouv.fr/api",
      title: "API"
    }
  ]
}) => (
  <footer className="footer">
    <div className="container">
      <div className="footer__logo">
        <ul className="footer__social">
          Un incubateur propulsé par{" "}
          <a target="_blank" href="https://beta.gouv.fr">
            beta.gouv.fr
          </a>{" "}
          et la DSI des ministères sociaux.
          {/*
          <li>
            <a href="https://twitter.com/etalab" title="Twitter">
              <svg className="icon icon-twitter">
                <use xlinkHref="#icon-twitter" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://github.com/etalab" title="Github">
              <svg className="icon icon-github">
                <use xlinkHref="#icon-github" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/etalab" title="Facebook">
              <svg className="icon icon-fb">
                <use xlinkHref="#icon-fb" />
              </svg>
            </a>
          </li>
          <li>
            <a href="mailto:info@data.gouv.fr" title="Nous écrire un mail">
              <svg className="icon icon-mail">
                <use xlinkHref="#icon-mail" />
              </svg>
            </a>
          </li>
        */}
        </ul>
      </div>
      <ul className="footer__links">
        <li>
          <h2>{title}</h2>
        </li>
        {links.map(link => (
          <li key={link.href}>
            <a href={link.href}>{link.title}</a>
          </li>
        ))}
      </ul>
      <ul className="footer__links" />
    </div>
  </footer>
);
