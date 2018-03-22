export const Hero = ({
  title = "Titre chili con carne",
  tagline = "Tagline libérer les données sans effort et sur data.gouv.fr"
}) => (
  <div className="hero">
    <div className="hero__container">
      <h1 className="hero__white-background">{title}</h1>
      <p className="hero__white-background">{tagline}</p>
    </div>
  </div>
);

export default Hero;
