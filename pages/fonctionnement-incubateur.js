import {
  Article,
  Card,
  Hero,
  Layout,
  Section,
  BlocChiffres
} from "../src/composants";

import "../src/custom.css";



const Fonctionnement = () => (
  <Layout>
    <Hero
      title="L'incubateur des ministères sociaux"
      tagline="Comment ça marche ?"
    />
    
      <Section title="De A à Z" subTitle="Toutes les étapes" className="section-color">
		<div className="container">      
      		<div style={{ textAlign: "center" }}>
	         	 <img
	            	src="../static/images/schema%20inc%201%20v1.png"
		            alt="Illustration fonctionnement Astech"
		            width="600"
	   	         height="286"
	      	      style={{ margin: " 0 auto" }}
	         	 />
	   		</div>
	   </div>
      </Section>
      
      <Section title="Appels à idées" subTitle="Oyé Oyé ! Braves gens !" >
		<div className="container">      
      		<div style={{ textAlign: "center" }}>
	         	 <img
	            	src="../static/images/schema%20inc%202%20v1.png"
		            alt="Illustration fonctionnement Astech"
		            width="70%"
	   	         height=""
	      	      style={{ margin: " 0 auto" }}
	         	 />
	   		</div>
	   </div>
      </Section>
      
      
            <Section title="Sélection des lauréats" subTitle="Il n'en restera qu'un... ou plutôt deux en fait" className="section-color">
		<div className="container">      
      		<div style={{ textAlign: "center" }}>
	         	 <img
	            	src="../static/images/schema%20inc%203%20v1.png"
		            alt="Illustration fonctionnement Astech"
		            width="70%"
	   	         height=""
	      	      style={{ margin: " 0 auto" }}
	         	 />
	   		</div>
	   </div>
      </Section>


      <Section title="Création des startup" subTitle="En un peu plus de 7 jours" >
		<div className="container">      
      		<div style={{ textAlign: "center" }}>
	         	 <img
	            	src="../static/images/schema%20inc%204%20v1.png"
		            alt="Illustration fonctionnement Astech"
		            width="70%"
	   	         height=""
	      	      style={{ margin: " 0 auto" }}
	         	 />
	   		</div>
	   </div>
      </Section>
      
      <Section title="Phases d'incubation" subTitle="ça fait pas mal" className="section-color">
		<div className="container">      
      		<div style={{ textAlign: "center" }}>
	         	 <img
	            	src="../static/images/schema%20inc%205%20v1.png"
		            alt="Illustration fonctionnement Astech"
		            width="80%"
	   	         height=""
	      	      style={{ margin: " 0 auto" }}
	         	 />
	   		</div>
	   </div>
      </Section>



  </Layout>      
    
);

export default Fonctionnement;
