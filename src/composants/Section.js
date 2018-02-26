//section section-color
const Section = ({
  title = "Titre de section",
  subTitle = "Sous-titre de section",
  children,
  className
}) => (
  <section className={className}>
    <div className="container">
      <h2 className="section__title">{title}</h2>
      <p className="section__subtitle">{subTitle}</p>
      <div className="row">{children}</div>
    </div>
  </section>
);

export default Section;
