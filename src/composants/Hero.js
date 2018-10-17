import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const HeroContainer = styled.div`
  background-image: url(/static/images/image-fond2.jpg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  .hero__container {
    min-height: 400px;
  }
`;

export const Hero = ({ title, tagline, style, alt }) => (
  <HeroContainer className="hero" style={style} title={alt}>
    <div className="hero__container">
      {(title && <h1 className="hero__white-background">{title}</h1>) || null}
      {(tagline && <p className="hero__white-background">{tagline}</p>) || null}
    </div>
  </HeroContainer>
);

Hero.propTypes = {
  alt: PropTypes.string,
  href: PropTypes.string,
  style: PropTypes.string,
  tagline: PropTypes.string,
  title: PropTypes.string
};

export default Hero;
