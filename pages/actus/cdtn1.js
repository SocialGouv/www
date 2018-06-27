import {
  Article,
  Card,
  Hero,
  Layout,
  Section,
  BlocChiffres
} from "../../src/composants";

import "../../src/custom.css";



const Cdtn1 = () => (
  <Layout>
    <Hero
      title="Une problématique complexe"
      tagline="Et une équipe motivée !"
    />
    
      <Section title={["Devenez", <span data-tip='responsable des développements techniques, biz et autres'> intrapreneur </span>, "d'une Startup d'État !"]} subTitle="Mode d'emploi" className="section-color">
      <div className="container">
      Vous êtes témoin d’irritants récurrents pour les usagers ou les agents de votre service? <br/>Vous avez une idée de solution numérique qui permettrait d’y remédier? Vous êtes prêt(e) à vous investir aux cotés d’une équipe mobilisée pendant six mois pour réussir? <br/>Vous êtes un(e) agent(e) des ministères sociaux et vous avez envie de résoudre un vrai problème ?<br/> 
      <p align="center"><h3>Proposez votre idée sur <a href="#">http://incubateur.</a> et devenez entrepreneur(se) d'une Startup d'État !</h3></p><br/>


Pour devenir entrepreneur(se) des Startups d’État, aucune expertise en informatique ou internet n’est nécessaire : seule compte votre motivation pour résoudre un véritable problème.

<br/>
Cette plateforme permet de proposer vos idées. Chaque idée déposée sera étudiée avec attention. Les questions du formulaire ont été pensées pour vous aider à exprimer très simplement votre idée. Si vous avez la moindre question, vous pouvez nous contacter en utilisant le lien en bas de page.
<br/>

Vous pouvez compléter votre candidature en plusieurs fois et reprendre le formulaire à tout moment grâce au lien que vous recevrez par mail après avoir répondu aux deux première questions.
<br/>

Vous avez jusqu'au vendredi 7 Septembre 2018 pour déposer vos idées. Si votre idée est retenue, vous serez ensuite très vite recontacté(e) pour participer à la journée de sélection du mercredi 5 octobre 2018. Vous serez alors invité(e) à cette journée pendant laquelle vous serez accompagné(e) pour structurer votre idée et la présenter devant un jury d'experts.
</div>      
      </Section>
      
  </Layout>      
    
);

export default Cdtn1;
