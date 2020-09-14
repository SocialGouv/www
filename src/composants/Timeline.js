import PropTypes from "prop-types";
import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import styled from "styled-components";

const Section = styled("section")`
  * {
    box-sizing: initial;
  }
  .vertical-timeline::before {
    background: #efefef;
  }
  h3 {
    text-align: center;
    font-size: 1.5rem;
  }
`;

const Timeline = ({ children }) => (
  <Section className="section section-white">
    <h3>Les événements marquants</h3>
    <VerticalTimeline>{children}</VerticalTimeline>
  </Section>
);

Timeline.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};

export default Timeline;
