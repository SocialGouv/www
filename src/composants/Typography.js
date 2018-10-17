import React from "react";
const Typography = () => (
  <section className="typography" id="typography">
    <div className="container">
      <h1>Typography</h1>
      <p>
        Nous utilisons les polices <a>Source Sans Pro</a> pour le corps de texte
        et <a>Evolventa</a> pour les titres sur <a>data.gouv.fr</a> et sites
        parents.
      </p>
      <div className="typography__sample">
        <h1>Heading 1</h1>
        <div className="typography__caption">Evolventa, 30px</div>
      </div>
      <div className="typography__sample">
        <h2>Heading 2</h2>
        <div className="typography__caption">Evolventa, 24px</div>
      </div>
      <div className="typography__sample">
        <h3>Heading 3</h3>
        <div className="typography__caption">Evolventa, 20px</div>
      </div>
      <div className="typography__sample">
        <h4>Heading 4</h4>
        <div className="typography__caption">Evolventa, 16px</div>
      </div>
      <div className="typography__sample">
        <a>Lien</a>
        <div className="typography__caption">Source Sans Pro, 16px</div>
      </div>
    </div>
  </section>
);

export default Typography;
