/*

Les entrées de ce fichier (les plus récentes en haut) permettent d'afficher les actus de la home (les 6 dernieres) et celles de la page actu

 - clé `href` : permet de lier un contenu "en savoir plus"
 - clé `promote: true` : permet d'afficher la news sur la page d'accueil



*/

module.exports = [
  {
    date: "23 Septembre 2019",
    promote: true,
    author: "julien.bouquillon",
    img: "/static/images/actus/taking-notes.jpg",
    title: "Livraison v-3.2.0 Fuschia Eagle",
    href: "/startups/code-du-travail-numerique/release-v3.2.0",
    html: `Livraison de la version v3.2.0 Fuschia Eagle du Code du travail numérique`
  },
  {
    date: "22 janvier 2019",
    promote: true,
    author: "julien.bouquillon",
    img: "/static/images/actus/taking-notes.jpg",
    title: "Premier petit séminaire de l'incubateur",
    href: "/actus/seminaire-1",
    html: `Nous avons organisé notre premier séminaire pour questionner et améliorer nos pratiques`
  },
  {
    date: "16 janvier 2019",
    promote: true,
    img: "/static/images/startups/work-in-france.jpg",
    author: "jonanthan.redt.gensinger",
    title: "Work in France : Une année qui démarre bien !",
    html: `
    Bonjour à tous !
<br/><br/>
L'équipe <a href="/startups/work-in-france">WorkinFrance</a> vous souhaite une très belle année 2019, riche en projets personnels et professionnels !
<br/><br/>
Le projet commence à s'installer durablement et nous avons désormais <b>4 nouveaux départements ouverts</b> pour vos demandes d'autorisation de travail !
<br/><br/>
WorkinFrance est désormais ouvert pour les démarches d'autorisation de travail des étudiants qui résident dans :
<br/><br/>
<li>Les Bouches-du-Rhône (13)</li>
<li>La Seine-et-Marne (77)</li>
<li>Les Hauts-de-Seine (92)</li>
<li>Le Val d'Oise (95)</li>
<br/><br/>
Les conditions d'éligibilité n'ont pas changé, à savoir la demande et la délivrance d'autorisations de travail dématérialisées pour :
<br/><br/>
<li>les étudiants en contrat d'apprentissage</li>
<li>les étudiants en contrat de professionnalisation</li>
<li>les étudiants en formation doctorale</li>
<li>les étudiants algériens soumis à l'accord franco-algérien du 27 décembre 1968</li>
<br/><br/>
Si vous avez des connaissances à Marseille, Cergy-Pontoise, Melun, Nanterre et les communes environnantes de ces quatre départements, on vous invite à faire passer le message, les équipes des services de main d'oeuvre étrangère (SMOE) sont prêtes à traîter vos demandes en lignes :)
<br/><br/>
Désormais, vous pouvez faire votre démarche sur <a href="https://workinfrance.beta.gouv.fr/">https://workinfrance.beta.gouv.fr/</a>
dès lors que l'adresse figurant sur le document de séjour en cours de validité est située à Paris (75), le Rhône (69), le Loiret (45), la Seine-et-Marne (77), les Bouches-du-Rhône (13), les Hauts-de-Seine (92) ou le Val d'Oise (95)
<br/><br/>
A bientôt pour d'autres bonnes nouvelles ;)
    `
  },
  {
    date: "15 janvier 2019",
    author: "eric.heijligers",
    img: "/static/images/actus/board-0119.jpg",
    title: "Deuxième board de l'incubateur",
    href: "/actus/board-janvier-2019",
    html:
      "Le deuxième board de l'incubateur s'est tenu le 15 janvier : découvrez comment il s'est passé"
  },
  {
    date: "1er janvier 2019",
    img: "/static/images/actus/bonne-annee-2019.jpg",
    author: "eric.heijligers",
    title: "Bonne année 2019 !",
    html: "C'est parti pour une nouvelle année !",
    href: "/actus/board-janvier-2019"
  },
  {
    date: "5 Décembre 2018",
    img: "/static/images/startups/code-du-travail-numerique.jpg",
    author: "julien.bouquillon",
    title: "Code du travail numérique v1.5",
    html: `<p>La version 1.5 - Balinese Rose Lion du prototype du site du Code du travail numérique a été déployée sur <a href="https://codedutravail-dev.num.social.gouv.fr">codedutravail-dev.num.social.gouv.fr</a></p>
      <p>Cette nouvelle version propose notamment :</p>
      <ul>
         <li>nombreuses corrections suite à des retours utilisateurs</li>
         <li>meilleure recherche dans les conventions collectives</li>
         <li>mise à jour des fiches service-public</li>
         <li>intégration de nouvelles FAQ</li>
         <li>nombreux tests unitaires</li>
         <li>améliorations de performances</li>
         <li><a href="https://github.com/SocialGouv/code-du-travail-numerique/commits/1.5" target="_blank">details des changements</a></li>
      </ul>
      <p>📚 Le code source est disponible sur GitHub : <a href="https://github.com/SocialGouv/code-du-travail-numerique">code-du-travail-numerique</a></p>
      <p>💬 Des remarques ? <a href="mailto:codedutravailnumerique@travail.gouv.fr">codedutravailnumerique@travail.gouv.fr</a></p>
    `
  },
  {
    date: "26 Novembre 2018",
    author: "melanie.roge",
    img: "/static/images/actus/TGI-Paris.jpg",
    title: "C’est officiel : e-MJPM s’installe à Paris !",
    html: `
    <br/>
    Trouver rapidement le bon professionnel pour les majeurs à protéger, tel est le défi de la startup e-MJPM développée par l’Incubateur des Ministères Sociaux.
    <br/>
    Il y a quelques mois, l’équipe annonçait le développement  d’e-MJPM sur Paris et c’est aujourd’hui chose faite.  <br/><br/>Depuis ce lundi 26 novembre, l’outil est disponible pour l’ensemble des acteurs de la protection juridique des majeurs exerçant sur Paris. Deuxième date importante pour la startup d’Etat qui a déjà ouvert e-MJPM dans trois territoires des Hauts-de-France au printemps  dernier.
    <br/><br/>
    Cette ouverture marque la fin d’une période  de formation auprès des différents utilisateurs du site. En effet, l’ensemble des mandataires agréés sur Paris ainsi que la totalité des greffiers et magistrats du Tribunal d’Instance ont été conviés à 4 sessions de formation. Celles-ci avaient pour but de présenter officiellement e-MJPM et de former l’ensemble des usagers sur l’utilisation de l'outil.
    <br/>
    <br/>L’équipe, qui a pour objectif de rendre ce produit national, continue sur sa lancée avec la tenue prochaine d’un OpenLab le 13 décembre. Elle compte récolter les avis des usagers et réfléchir aux futures améliorations et développements à apporter afin de rendre e-MJPM pertinent et efficace pour tous.
    <br/>
    `
  },
  {
    date: "16 Novembre 2018",
    author: "julien.bouquillon",
    title: "release 1.4 - Twinkle Cookie",
    html: `<p>Une nouvelle version du prototype du site du Code du travail numérique a été déployée sur <a href="https://codedutravail-dev.num.social.gouv.fr">codedutravail-dev.num.social.gouv.fr</a></p>
      <p>Cette nouvelle version propose notamment :</p>
      <ul>
         <li>Affichage des dates fiches ministère</li>
         <li>Search facetting</li>
         <li>Modal Feedback</li>
         <li>PoC Indemnités licenciement + convention collective "chimie"</li>
         <li>Ajout modèles de courriers</li>
         <li><a href="https://github.com/SocialGouv/code-du-travail-numerique/commits/75fc7c473d344b48ca18e6f5ebbd62b6e2446c0f" target="_blank">details des changements</a></li>
      </ul>
      <p>📚 Le code source est disponible sur GitHub : <a href="https://github.com/SocialGouv/code-du-travail-numerique">code-du-travail-numerique</a></p>
      <p>💬 Des remarques ? <a href="mailto:codedutravailnumerique@travail.gouv.fr">codedutravailnumerique@travail.gouv.fr</a></p>
    `
  },
  {
    date: "8 Novembre 2018",
    author: "julien.bouquillon",
    title: "Code du travail numérique : Jury de selection des EIG",
    html: `
Hier a eu lieu la journée de selection des candidats au programme <a target="_blank" href="http://entrepreneur-interet-general.etalab.gouv.fr">"Entrepreneur d'intérêt général" promo 2019</a> pour notre défi <a target="_blank" href="https://entrepreneur-interet-general.etalab.gouv.fr/defis/2019/explocode.html">"Explocode"</a>.
<br/><br/>
Assistés des EIG de la promo 2018, d'experts techniques Etalab et de collègues d'autres défis, nous avons eu la chance d'auditionner plusieurs candidats aussi compétents que determinés pour aider notre équipe à **rendre le droit du travail plus lisible** dès le 1er Janvier 2020.
<br/><br/>
Deux EIG nous rejoindront donc début 2019, et commenceront leur mission par une immersion dans les services des DIRECCTE en région, où ils pourront mieux comprendre les attentes des usagers et des agents, et en profiter pour compléter notre stock de données qui nous permettrons d'améliorer notre modèle d'intelligence artificelle pour la compréhension des questions posées par les usagers.
`
  },
  {
    date: "14 Septembre 2018",
    author: "eric.heijligers",
    title: "WorkInFrance : plus de 1000 dossiers ont été déposés 🍾",
    html: `
Le service WorkinFrance a ouvert en expérimentation le 27 mars 2018 sur le périmètre de l'unité départementale 75 de la DIRECCTE Ile-de-France.
Et, depuis le 5 septembre, c'est plus de 1000 dossiers qui ont été déposés !
<br/>Cerise sur le gâteau : le déploiement s’étend avec la mise en œuvre de WorkinFrance dans le département du Rhône depuis le 27 août dernier.
<br/>
<p align="center"><img src="/static/images/counter-wif.gif" height="50%" width="50%" alt="Plus de 1000 dossiers déposés"/></p>
Un bel encouragement pour les intrapreneurs Daniel BALMY de la DIRECCTE Ile-de-France et Jonathan REDT-GENSINGER de la DGT.
   `
  },
  {
    date: "28 Septembre 2018",
    author: "julien.bouquillon",
    title: "Code du travail numérique : release 1.1 - blue-firefly",
    html: `<p>Une nouvelle version du prototype du site du Code du travail numérique a été déployée sur <a href="https://codedutravail-dev.num.social.gouv.fr">codedutravail-dev.num.social.gouv.fr</a></p>
      <p>Cette nouvelle version propose notamment :</p>
      <ul>
        <li>un champ de suggestions</li>
        <li>la navigation dans les thèmes</li>
        <li>le support d'internet explorer</li>
        <li>un design mis à jour</li>
        <li>des URLs fixes pour chaque contenu</li>
        <li>nombreux bugfixes et améliorations techniques</li>
        <li><a href="https://github.com/SocialGouv/code-du-travail-frontend/pull/132" target="_blank">details des changements</a></li>
      </ul>
      <p>📚 Le code source est disponible sur GitHub : <a href="https://github.com/SocialGouv/code-du-travail-explorer">code-du-travail-explorer</a></p>
      <p>💬 Des remarques ? <a href="mailto:codedutravailnumerique@travail.gouv.fr">codedutravailnumerique@travail.gouv.fr</a></p>
    `
  },
  {
    date: "23 Août 2018",
    author: "marc.hertzog",
    title: "Code du travail numérique : nouveau design",
    html: `<p>Une nouvelle version du prototype du site du Code du travail numérique a été déployée sur <a href="https://code.travail.gouv.fr">code.travail.gouv.fr</a></p>
      <p>Cette nouvelle version propose notamment :</p>
      <ul>
        <li>un nouveau design</li>
        <li>une interface adaptative (<i>responsive</i>)</li>
        <li>un début d'intégration du référentiel général d'accessibilité pour les administrations (RGAA)</li>
      </ul>
      <p>📚 Le code source est disponible sur GitHub : <a href="https://github.com/SocialGouv/code-du-travail-explorer">code-du-travail-explorer</a></p>
      <p>💬 Des remarques ? <a href="mailto:codedutravailnumerique@travail.gouv.fr">codedutravailnumerique@travail.gouv.fr</a></p>
    `
  },
  {
    date: "23 Août 2018",
    author: "eric.heijligers",
    title: "L'incubateur pousse les murs",
    html: `
    Anticipant l'arrivée prochaine des lauréats de la <a href="/actus/saison2">saison 2</a>, l'espace de vie de l'incubateur s'agrandit.
    <br/><p align="center"><img src="/static/images/extension_incubateur.jpg" height="80%" width="80%" alt="plan de l'incubateur"/></p><br/>
    Conçu par les agents du bureau des opérations immobilières (DFAS) en collaboration avec les incubés, l'espace de travail passera de 80m² à 150m² en septembre.<br/>
    Il proposera des espaces distincts qui permettront de garantir un environnement de travail collaboratif optimal.
    <br/>Pour celles ou ceux qui se demandent ce qu'est "l'alcôve" 😎<br/>
    <p align="center"><img src="/static/images/alcove.jpg" height="50%" width="50%" alt="L'alcove"/></p>
   `
  },
  {
    date: "2 Août 2018",
    author: "adrien.gonzalez",
    title: "e-MJPM release 1.2 « still-wildflower » 🌼",
    html: `Nouvelle livraison de l'application e-MJPM avant la pause estivale :
      <ul>
        <li>Possibilité pour un mandataire de <a href="https://emjpm.num.social.gouv.fr/inscription/">s'inscrire dans l'application</a></li>
        <li>Nouvelles fonctionnalités pour filtrer les mesures sur un fond de carte OpenStreetMap</li>
        <li>Améliorations cosmétiques et "UX" sur les parties mandataires individuels</li>
        <li>L'interface des tribunaux d'instance a été enrichie</li>
        <li>Intégration de la base FINESS des établissements</li>
        <li>admin : Gestion des utilisateurs</li>
      </ul>
      <p>
    Côté technique, un travail de fond a été mené sur la base de données et nous avons ajouté de nombreux tests unitaires et d'intégration pour prévenir les régressions :)
    <br/><br/>
    Prochaine feature sur notre roadmap pour la rentrée 2018 : la réservation de mesures.
    <br/><br/>
    Et aussi :
    <ul>
      <li><a href="/startups/e-mjpm">En savoir plus sur e-MJPM</a></li>
      <li>Contactez l'équipe : <a href="mailto:contact@emjpm.beta.gouv.fr">contact@emjpm.beta.gouv.fr</a></li>
      <li><a href="https://github.com/SocialGouv/eMJPM-app/releases/tag/1.2">La release sur GitHub</a></li>
    </ul>
    `
  },
  {
    date: "27 Juillet 2018",
    author: "maxime.basset",
    title: "Work In France: plus de 200 demandes traitées en Juillet",
    html: `🎉 Le service <a href="/startups/work-in-france">Work In France</a> qui dématérialise les demande d'autorisation de travail pour les étudiants étrangers,
                a pour la première fois dépassé les <strong>200 dossiers déposés en un mois</strong> sur la seule DR de Paris.
                <br><br>
                Work In France s'appuie sur le service <a href="https://demarches-simplifiees.fr">démarches simplifiées</a> pour gérer la téléprocédure
                ce qui a permis de réduire rapidement les temps de traitement et <a href="https://medium.com/numa/quand-le-service-public-devient-digital-e4d48d358345">améliorer la relation usager</a>.
                <br><br>
                📊 <a href="https://workinfrance.beta.gouv.fr/stats.html">dashboard public</a>`
  },
  {
    date: "20 Juillet 2018",
    author: "yann-fanch.madaule",
    title:
      "Code du travail numérique : notre défi lauréat du programme EIG 2018 !",
    html: `🎉 Le <a href="/startups/code-du-travail-numerique">code du travail numérique</a> a le privilège de faire partie des
      <a href="https://www.etalab.gouv.fr/entrepreneur-e-dinteret-general-3eme-promotion-decouvrez-les-15-defis-laureats">15 défis lauréats du jury</a>
      pour participer au programme "Entrepreneur d'intérêt général" 2018. <br><br>
      Notre équipe pourra donc bénéficier <strong>pendant 10 mois</strong> de deux spécialistes de la data science et du traitement du language naturel pour améliorer les résultats de notre service.`
  },
  {
    date: "27 Juin 2018",
    author: "marc.hertzog",
    title: "Code du travail numérique : nouveau prototype",
    html: `
      Une nouvelle version du prototype a été déployée sur <a href="https://code-du-travail.beta.gouv.fr">code-du-travail.beta.gouv.fr</a>.
      <br><br>
      Cette version utilise un moteur Elastic Search qui indexe les textes du code du travail, des fiches pratiques, FAQ... et utilise des techniques avancées d'analyse et matching de textes.
      <br><br>
      📚 Le code source est disponible sur GitHub : <a href="https://github.com/SocialGouv/code-du-travail-data">code-du-travail.beta.gouv.fr</a>
      <br>
       💬 Des feedbacks ? <a href="mailto:codedutravailnumerique@travail.gouv.fr">codedutravailnumerique@travail.gouv.fr</a>
      `
  },
  {
    date: "20 Juin 2018",
    author: "julien.bouquillon",
    title: "Outil de standup sur GitHub",
    html: `Nous avons <a href="https://github.com/SocialGouv/standup">publié sur GitHub</a> un clone du <a href="https://github.com/betagouv/standup">projet original</a>, adapté pour servir de timer à notre rituel de standup hebdomadaire (Le mardi à midi).
            <br><br>
            Pour ajouter un sujet au prochain standup, il suffit de <a href="https://github.com/SocialGouv/standup/edit/master/src/startups.json">soumettre une pull request</a> sur la page du projet.
      `
  },
  {
    date: "18 Janvier 2018",
    author: "julien.bouquillon",
    title:
      "Code du travail numérique : publication des 50 questions les plus fréquentes",
    html:
      'Une F.A.Q. qui reprend les 50 questions les plus fréquemment posées vient d\'être publiée par les services de renseignement et aussitôt mise en ligne : <a href="https://socialgouv.github.io/faq-code-du-travail">socialgouv.github.io/faq-code-du-travail</a>'
  }
];
