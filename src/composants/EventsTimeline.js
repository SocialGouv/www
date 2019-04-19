import React from "react";
import PropTypes from "prop-types";
import { FaRoad, FaUsers, FaRss, FaHandPointUp } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
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

const EventsTimeline = ({ events }) => (
  <section className="section section-white" style={timelineStyle}>
    <div className="container">
      <h3 style={titleStyle}>Les événements marquants</h3>
      <VerticalTimeline>
        {events.map((event, idx) => (
          <VerticalTimelineElement
            key={idx}
            className="vertical-timeline-element--work"
            date={event.date}
            {...categoryToIcons[event.category]}
          >
            <h3
              className="vertical-timeline-element-title"
              dangerouslySetInnerHTML={{ __html: event.event }}
            />
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  </section>
);

EventsTimeline.propTypes = {
  events: PropTypes.arrayOf(PropTypes.element)
};

export default EventsTimeline;
