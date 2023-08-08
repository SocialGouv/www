# Améliorer le site public de la Fabrique des Ministères Sociaux

## Startups

Ce site regroupe

- des données affichées sur beta.gouv.fr, et modifiables [dans le code source de beta.gouv.fr dans le dossier `content/_startups`](https://github.com/betagouv/beta.gouv.fr/tree/master/content/_startups)
- des données supplémentaires affichées seulement sur fabrique.social.gouv.fr et modifiables [dans ce code source dans le dossier `content/_startups`](https://github.com/SocialGouv/www/tree/master/content/_startups)

Nous gardons la dépendance au site de beta.gouv.fr afin que les données soient le plus à jour sur les deux sites.

### Ajouter une Startup

Il faut rajouter un fichier sur chaque repository

1. en premier sur beta.gouv.fr
2. puis sur fabrique.social.gouv.fr [TODO: récupérer les infos du fichier précédent]

#### 1. Ajout du fichier dans le code source de beta.gouv.fr

##### [en un clic par l'interface web de GitHub](https://beta.gouv.fr/trampoline.html?what=startups&where=content/_startups/nom-startup.md)

Les illustrations doivent être en 16:9, au format 1280 ⨉ 720 pixels, optimisées au préalable avec un outil du type [ImageOptim](https://imageoptim.com/mac) - choisir des réglages "lossy" donnant en général plus de 50% de gains à la compression, mais ne pas supprimer les métadonnées d'images.

> Sinon, offline : dupliquer un fichier de description dans le dossier [`/content/_startups`](https://github.com/betagouv/beta.gouv.fr/tree/master/content/_startups) et suivre les instructions ci-dessous sur l'édition.

Pour le titre de la startup, s'en tenir aux [règles usuelles](https://fr.wikipedia.org/wiki/Usage_des_majuscules_en_fran%C3%A7ais#R.C3.A8gles_traditionnelles), c'est-à-dire sauf cas particuliers : le premier mot prend une majuscule, les autres non. (Ce n'est pas grave de se tromper, mais il faut s'attendre à ce que ça soit corrigé plus tard.)

Pour l'énoncé de mission, utiliser une phrase à l'infinitif, qui complète « En investissant dans ce produit, l'État cherche à… » ou « l'État cherche à rendre plus facile de… ».

#### 1. Ajout du fichier dans ce code source

Dupliquer un fichier de description dans le dossier [`/content/_startups`](https://github.com/SocialGouv/www/tree/master/content/_startups).

### Éditer la description d'une Startup existante

Modifier le fichier `$id_startup.md` de description de la Startup dans le dossier [`content/_startups`](https://github.com/betagouv/beta.gouv.fr/tree/master/content/_startups).

La documentation des différentes propriétés à renseigner est accessible en cliquant sur le lien de création d'une nouvelle Startup dans la section précédente.

### Ajouter ou modifier l'image d'illustration d'une Startup existante

Ajouter un image `$id_startup.jpg`ou .png dans le dossier [img/startups](https://github.com/betagouv/beta.gouv.fr/tree/master/img/startups)

## Modifier le contenu éditorial

[Rechercher le contenu à modifier](https://github.com/SocialGouv/www/search?q=contenu+à+modifier&type=Code) et éditer le fichier correspondant.

## Relire les changements

Pour encourager les contributions, éviter les erreurs d'inattention, et se mettre d'accord collectivement sur le contenu publié au nom de l'incubateur, chaque modification doit être relue et approuvée par une autre personne que l'auteur avant d’être intégrée.

### Conseils pour demander une relecture

Pour les relectures de code, il vaut mieux choisir une personne ayant un peu l'habitude de Jekyll, de Ruby ou du développement web. En revanche, en cas d'urgence sur une relecture éditoriale, toute personne de l'incubateur est légitime à approuver les modifications.

**L'auteur d'une modification est responsable de pousser pour obtenir une relecture**, en relançant les gens périodiquement. Pour demander une relecture :

1. **Ouvrir une <abbr title="Demande de modification sur GitHub">pull request</abbr>**, sans mentionner de relecteur explicitement. Les relecteurs potentiels vont recevoir une notification, et peuvent s'auto-assigner la relecture.
2. **Si plusieurs jours s'écoulent sans relecture** (entre 2 et 5 jours, à la louche), ajouter un commentaire à la pull request, en demandant explicitement une relecture à un relecteur potentiel.
3. **Si plusieurs jours s'écoulent à nouveau**, contacter directement un relecteur potentiel (par exemple par message privé ou public sur le [Mattermost de l'incubateur](https://mattermost.fabrique.social.gouv.fr/default/channels/town-square), ou en présentiel dans les locaux de _La Fabrique_).

### Conseils pour les relecteurs

- **Commentez le code ou le texte – pas l'auteur** : on ne cherche pas à assigner de responsabilités ou à critiquer l'auteur ; mais juste à voir comment un bout de code ou de texte pourrait être plus pertinent.
- **Si vous critiquez, proposez** : si quelque chose ne vous plait pas, expliquez comment vous proposeriez de l'améliorer.
- **Soyez souple** : si vous avez une remarque mineure, ne bloquez pas la pull request avec une revue négative. Il vaut mieux approuver la pull request, en laissant l'auteur responsable de prendre en compte (ou pas) vos remarques.
