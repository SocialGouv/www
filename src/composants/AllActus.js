import React from "react";
import PropTypes from "prop-types";

import { Card } from ".";

import news from "../data/news";

// const AllActus = ({ count = 0 }) => (
//   <div
//     className="row cards"
//     style={{
//       color: "black",
//       flexWrap: "wrap",
//       justifyContent: "space-between"
//     }}
//   >
//     {news.slice(0, count ? count : news.length).map(actu => (
//       <Card
//         key={actu.title}
//         {...actu}
//         style={{ flex: "1 0 auto", margin: "5px auto" }}
//       />
//     ))}
//   </div>
// );

// AllActus.propTypes = {
//   count: PropTypes.number
// };

//import news from "../src/data/news.js";

// https://github.com/facebook/react/issues/377
const News = ({ title, href, date, html }) => (
  <div className="row">
    <div
      className="panel"
      style={{ width: "80%", margin: "20px auto", paddingTop: 0 }}
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
  title: PropTypes.string,
  date: PropTypes.string,
  html: PropTypes.string,
  href: PropTypes.string
};

const AllActus = ({ count, promote }) => {
  return news
    .filter(n => (promote ? n.promote : true))
    .slice(0, count ? count : news.length)
    .map(n => <News {...n} key={n.title} />);
};

export default AllActus;
