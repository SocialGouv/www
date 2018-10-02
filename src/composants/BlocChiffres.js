import styled from "styled-components";
import CountUp from "react-countup";

const BlocChiffre = styled.div`
  width: 50%;
  padding: 3em 0;
  display: inline-block;
  box-sizing: border-box;
  &:nth-child(2n + 1) {
    border-right: 1px solid silver;
  }
  &:nth-child(1),
  &:nth-child(2) {
    border-bottom: 1px solid silver;
  }
  .num {
    font-size: 4em;
    font-weight: bold;
    text-align: center;
    color: #003b80;
  }
  .texte {
    font-size: 1em;
    text-align: center;
  }
`;

const ZeroCounter = ({ end }) => <CountUp start={0} end={end} />;

const BlocChiffres = () => (
  <div style={{ width: "80%", maxWidth: 500, margin: "0 auto" }}>
    <BlocChiffre>
      <div className="num">
        <ZeroCounter end={3} />
      </div>
      <div className="texte">Start-ups</div>
    </BlocChiffre>

    <BlocChiffre>
      <div className="num">
        <ZeroCounter end={5} />
      </div>
      <div className="texte">Intrapreneurs</div>
    </BlocChiffre>

    <BlocChiffre>
      <div className="num">
        <ZeroCounter end={100} duration={1.75} />
      </div>
      <div className="texte">m2 d'espace dédié</div>
    </BlocChiffre>

    <BlocChiffre>
      <div className="num">
        <ZeroCounter end={138} />
      </div>
      <div className="texte">idées déposées</div>
    </BlocChiffre>
  </div>
);

export default BlocChiffres;
