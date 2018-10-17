import React from "react";
const Article = ({ children }) => (
  <section className="section section-white">
    <div className="container">
      <article>{children}</article>
    </div>
  </section>
);

export default Article;
