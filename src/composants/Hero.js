import styled from "styled-components";

const HeroContainer = styled.div`
  background-image: url(/static/images/image-fond.jpg);
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Hero = ({
  title = "Titre chili con carne",
  tagline = "Tagline libérer les données sans effort et sur data.gouv.fr"
}) => (
  <HeroContainer className="hero">
    <div className="hero__container">
      <h1 className="hero__white-background">{title}</h1>
      <p className="hero__white-background">{tagline}</p>
    </div>
  </HeroContainer>
);

export default Hero;
