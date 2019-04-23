import React from "react";
import PropTypes from "prop-types";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const timelineStyle = {
  backgroundColor: "rgb(108, 121, 137)",
  fontSize: "12px"
};

const titleStyle = {
  textAlign: "center",
  fontSize: "24px",
  color: "#fff"
};

const Timeline = ({ children }) => (
  <section className="section section-white" style={timelineStyle}>
    <h3 style={titleStyle}>Les événements marquants</h3>
    <VerticalTimeline>{children}</VerticalTimeline>
  </section>
);

Timeline.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};

export default Timeline;
