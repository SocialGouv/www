import React from "react";

const colors = {
  grayscale: {
    "Almost black": "#26353f",
    Black: "#1C1C1C",
    "Dark grey": "#8393A7",
    "Darker grey": "#C9D3DF",
    Grey: "#ADB9C9",
    "Light grey": "#C9D3DF",
    "Lighter grey": "#EBEFF3",
    White: "#FFFFFF",
  },
  others: [
    {
      Green: "#03BD5B",
      "Light green": "#DAF5E7",
    },
    {
      "Light orange": "#FFF0E4",
      Orange: "#FF9947",
    },
    {
      "Light red": "#F8E1E7",
      Red: "#D1335B",
    },
    {
      Blue: "#03BD5B",
      "Light blue": "#DAF5E7",
    },
  ],
  primary: {
    Dark: "#006CB0",
    Light: "#1E90DA",
    Medium: "#0081D5",
  },
};

const slugify = (str) =>
  str
    .toString()
    .toLowerCase()
    .replace(/[\s_'"]/g, "-");

const SectionColors = () => (
  <section className="section section-grey" id="colors">
    <div className="container">
      <div className="panel">
        <h1>Couleurs</h1>

        <div className="color-panel primary">
          {Object.keys(colors.primary).map((name) => (
            <div className="color-panel__block" key={name}>
              <div className={`color-panel__sample primary-${slugify(name)}`} />
              <div className="color-panel__name">
                <h4>{name}</h4>
                {colors.primary[name]}
              </div>
            </div>
          ))}
        </div>

        <div className="color-panel grayscale">
          {Object.keys(colors.grayscale).map((name) => (
            <div className="color-panel__block" key={name}>
              <div className={`color-panel__sample ${slugify(name)}`} />
              <div className="color-panel__name">
                <h4>{name}</h4>
                {colors.grayscale[name]}
              </div>
            </div>
          ))}
        </div>

        <div className="color-panel notifications">
          {colors.others.map((color) => {
            const [color1, color2] = Object.keys(color);
            return (
              <div className="color-panel__block" key={color1}>
                <div className="color-panel__sample-double">
                  <div className={`color-panel__sample ${slugify(color1)}`} />
                  <div className={`color-panel__sample ${slugify(color2)}`} />
                </div>
                <div className="color-panel__name-double">
                  <div className="color-panel__name">
                    <h4>{color1}</h4>
                    {color.color1}
                  </div>
                  <div className="color-panel__name">
                    <h4>{color2}</h4>
                    {color.color2}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default SectionColors;
