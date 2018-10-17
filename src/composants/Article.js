import React from "react";
import PropTypes from "prop-types";

const Article = ({ children }) => (
  <section className="section section-white">
    <div className="container">
      <article>{children}</article>
    </div>
  </section>
);

Article.propTypes = {
  children: PropTypes.element
};

export default Article;
