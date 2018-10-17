import React from "react";
import PropTypes from "prop-types";

const Section = ({
  title = "Titre de section",
  subTitle = "Sous-titre de section",
  children,
  className,
  style
}) => (
  <section className={"section " + className} style={style}>
    <div className="container">
      <h2 className="section__title">{title}</h2>
      <p className="section__subtitle">{subTitle}</p>

      {children}
    </div>
  </section>
);

Section.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  style: PropTypes.string,
  subTitle: PropTypes.string,
  title: PropTypes.string
};

export default Section;
