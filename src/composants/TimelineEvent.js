import React from "react";
import PropTypes from "prop-types";
import { FaRoad, FaUsers, FaRss, FaHandPointUp } from "react-icons/fa";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const categoryToIcons = {
  Pilotage: {
    icon: <FaRoad />,
    iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" }
  },
  Équipe: {
    icon: <FaUsers />,
    iconStyle: { background: "rgb(150, 33, 243)" },
    color: "#fff"
  },
  Déploiement: {
    icon: <FaRss />,
    iconStyle: { background: "rgb(150, 243, 33)" },
    color: "#fff"
  },
  Usage: {
    icon: <FaHandPointUp />,
    iconStyle: { background: "rgb(243, 150, 33)" },
    color: "#fff"
  }
};

const TimelineEvent = ({ date, category, title, children }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date={date}
    {...categoryToIcons[category]}
  >
    <h3
      className="vertical-timeline-element-title"
      dangerouslySetInnerHTML={{ __html: title }}
    />
    {children}
  </VerticalTimelineElement>
);

TimelineEvent.propTypes = {
  date: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};

export default TimelineEvent;
