import React from "react";
//section section-color
const Section = ({
  title = 'Titre de section',
  subTitle = 'Sous-titre de section',
  children,
  className,
  style
}) => (
  <section className={'section ' + className} style={style}>
    <div className="container">
      <h2 className="section__title">{title}</h2>
      <p className="section__subtitle">{subTitle}</p>

      {children}
    </div>
  </section>
);

export default Section;
