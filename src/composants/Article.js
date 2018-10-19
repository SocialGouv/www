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
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.node)
  ])
};

export default Article;
