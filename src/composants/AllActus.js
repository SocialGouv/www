import PropTypes from "prop-types";
import React from "react";

import news from "../data/news";

// https://github.com/facebook/react/issues/377
const News = ({ title, href, date, html }) => (
  <div className="row" name={date}>
    <div
      className="panel"
      style={{
        color: "initial",
        margin: "20px auto",
        paddingTop: 0,
        width: "80%"
      }}
    >
      <div className="panel__header" id={date}>
        <h4>
          {title}
          <small className="panel__header-extra" style={{ float: "right" }}>
            {date}
          </small>
        </h4>
      </div>
      {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
      {href && (
        <React.Fragment>
          {html && <br />}
          {html && <br />}
          <a href={href}>Lire la suite : {title}</a>
        </React.Fragment>
      )}
    </div>
  </div>
);

News.propTypes = {
  date: PropTypes.string,
  href: PropTypes.string,
  html: PropTypes.string,
  title: PropTypes.string
};

const AllActus = ({ count, promote }) => {
  return news
    .filter(n => (promote ? n.promote : true))
    .slice(0, count ? count : news.length)
    .map(n => <News {...n} key={n.title} />);
};

export default AllActus;
