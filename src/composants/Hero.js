import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  background-image: url(${(props) => props.backgroundImage}) !important;
  background-position: center center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;

  .hero__container {
    min-height: 400px;
  }
`;

export const Hero = ({
  title,
  tagline,
  style,
  alt,
  backgroundImage = "/images/image-fond2.jpg",
}) => (
  <HeroContainer
    className="hero"
    style={style}
    title={alt}
    backgroundImage={backgroundImage}
  >
    <div className="hero__container">
      {(title && <h1 className="hero__white-background">{title}</h1>) || null}
      {(tagline && <p className="hero__white-background">{tagline}</p>) || null}
    </div>
  </HeroContainer>
);

Hero.propTypes = {
  alt: PropTypes.string,
  backgroundImage: PropTypes.string,
  href: PropTypes.string,
  style: PropTypes.object,
  tagline: PropTypes.string,
  title: PropTypes.string,
};

export default Hero;
