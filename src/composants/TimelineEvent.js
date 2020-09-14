import PropTypes from "prop-types";
import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from "styled-components";

const TimelineEvent = ({ date, title, children, className = "" }) => (
  <VerticalTimelineElement
    className={`vertical-timeline-element ${className}`}
    date={date}
  >
    {/*<div className="vertical-timeline-element-datefr">{date}</div>*/}
    <div
      className={`vertical-timeline-element-title`}
      dangerouslySetInnerHTML={{ __html: title }}
    />
    {children}
  </VerticalTimelineElement>
);

TimelineEvent.propTypes = {
  category: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  className: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
};

const colors = {
  Déploiement: "rgb(181, 201, 55)",
  Pilotage: "rgb(102, 140, 194)",
  Usage: "rgb(102, 140, 194)",
  Équipe: "rgb(150, 33, 243)",
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
    border-color: ${(props) => colors[props.category]};
    box-shadow: none;
    padding: 1em;
  }

  .vertical-timeline-element-content-arrow {
    border-right: 7px solid ${(props) => colors[props.category]};
  }

  .vertical-timeline-element-icon {
    background-color: ${(props) => colors[props.category]};
    box-shadow: none;
  }

  .vertical-timeline-element-content .vertical-timeline-element-date {
    font-weight: bold !important;
    font-size: 1.4rem !important;
    margin: 0 10px !important;
    padding: 10px 0 !important;
  }

  .vertical-timeline-element-datefr {
    color: ${(props) => colors[props.category]};
    font-weight: bold;
    font-size: 1.2rem;
    margin: 10px 0;
  }
`;

export default StyledTimelineEvent;
