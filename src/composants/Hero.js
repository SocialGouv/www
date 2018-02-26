const Hero = ({
  title = "Titre chili con carne",
  subTitle = "Tagline libérer les données sans effort et sur data.gouv.fr"
}) => (
  <div className="hero">
    <div className="hero__container">
      <h1 className="hero__white-background">{title}</h1>
      <p className="hero__white-background">{subTitle}</p>
    </div>
  </div>
);

export default Hero;
