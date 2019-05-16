import React from "react";
import PropTypes from "prop-types";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from "styled-components";

const TimelineEvent = ({ date, title, children, className = "" }) => (
  <VerticalTimelineElement
    className={`vertical-timeline-element ${className}`}
    date={date}
  >
    <div className="vertical-timeline-element-datefr">{date}</div>
    <div
      className={`vertical-timeline-element-title`}
      dangerouslySetInnerHTML={{ __html: title }}
    />
    {children}
  </VerticalTimelineElement>
);

TimelineEvent.propTypes = {
  date: PropTypes.string,
  className: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};

const colors = {
  Déploiement: "rgb(181, 201, 55)",
  Équipe: "rgb(150, 33, 243)",
  Usage: "rgb(102, 140, 194)",
  Pilotage: "rgb(102, 140, 194)"
};

const StyledTimelineEvent = styled(TimelineEvent)`
  .vertical-timeline-element-content {
    box-shadow: none !important;
    border: 2px solid silver;
  }

  .vertical-timeline-element-content::before {
    display: none;
  }

  .vertical-timeline-element-title {
    text-align: left;
    font-size: 1.2em;
    font-weight: bold;
  }

  .vertical-timeline-element-content {
    border-color: ${props => colors[props.category]};
    box-shadow: none;
    padding: 1em;
  }

  .vertical-timeline-element-icon {
    background-color: ${props => colors[props.category]};
    box-shadow: none;
  }

  .vertical-timeline-element-date {
    display: none;
  }

  .vertical-timeline-element-datefr {
    color: ${props => colors[props.category]};
    font-weight: bold;
    font-size: 1.2rem;
    margin: 10px 0;
  }
`;

export default StyledTimelineEvent;
