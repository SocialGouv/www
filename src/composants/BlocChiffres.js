import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CountUp from "react-countup";

const BlocChiffre = styled.div`
  width: 25%;
  padding: 1em;
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
  &:nth-child(2n + 1),
  &:nth-child(2) {
    border-right: 1px solid silver;
  }
  &:nth-child(1),
  &:nth-child(2) {
  }
  .num {
    font-size: 4em;
    font-weight: bold;
    text-align: center;
    color: #53657d;
  }
  .texte {
    font-size: 1em;
    text-align: center;
  }
  @media (max-width: 549px) {
    font-size: 0.6em;
  }
`;

const ZeroCounter = ({ end }) => <CountUp start={0} end={end} />;
ZeroCounter.propTypes = {
  end: PropTypes.number
};

const BlocChiffres = () => (
  <div style={{ width: "100%", margin: "0 auto" }}>
    <BlocChiffre>
      <div className="num">
        <ZeroCounter end={5} />
      </div>
      <div className="texte">Startups incubées</div>
    </BlocChiffre>

    <BlocChiffre>
      <div className="num">
        <ZeroCounter end={8} />
      </div>
      <div className="texte">Intrapreneurs</div>
    </BlocChiffre>

    <BlocChiffre>
      <div className="num">
        <ZeroCounter end={150} duration={1.75} />
      </div>
      <div className="texte">m² d&apos;espace dédié</div>
    </BlocChiffre>

    <BlocChiffre>
      <div className="num">
        <ZeroCounter end={2} />
      </div>
      <div className="texte">Startups en création</div>
    </BlocChiffre>
  </div>
);

export default BlocChiffres;
