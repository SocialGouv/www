import styled from "styled-components";

const BlocChiffre = styled.div`
  width: 50%;
  xheight: 150px;
  padding-bottom: 1em;
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
    color: rgb(35, 209, 232);
  }
  .texte {
    font-size: 1em;
    text-align: center;
  }
`;

const BlocChiffres = () => (
  <div style={{ width: "80%", maxWidth: 500, margin: "0 auto" }}>
    <BlocChiffre>
      <div className="num">3</div>
      <div className="texte">Start-ups</div>
    </BlocChiffre>
    <BlocChiffre>
      <div className="num">100</div>
      <div className="texte">m2 d'espace dédié</div>
    </BlocChiffre>
    <BlocChiffre>
      <div className="num">5</div>
      <div className="texte">Intrapreneurs</div>
    </BlocChiffre>
    <BlocChiffre>
      <div className="num">6</div>
      <div className="texte">mois d'accélération</div>
    </BlocChiffre>
  </div>
);

export default BlocChiffres;
