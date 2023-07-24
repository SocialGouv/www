# [www.fabrique.social.gouv.fr](https://www.fabrique.social.gouv.fr)

Site de la fabrique numérique des Ministères sociaux

## Editer le site

Faire les changements directement sur GitHub ou sur une branche locale, et soumettre une pull request :)

### Ajouter son profil :

Editer [members.yml](https://github.com/SocialGouv/www/blob/master/src/data/members.yml) et ajouter votre photo :)

### Ajouter une startup :

📝 ajouter la startup dans [src/data/startups.yml](https://github.com/SocialGouv/www/edit/master/src/data/startups.yml)

📝 ajouter la fiche produit dans `pages/startups/startup.mdx`. Copier le fichier work-in-france.mdx par exemple.

### Ajouter une brève :

📝 éditer [src/data/news.yml](https://github.com/SocialGouv/www/edit/master/src/data/news.yml)

Les données des `startups` et `members` sont dans [./src/data](./src/data)

### Modifier/Créer un article :

- éditer/ajouter des pages dans `./pages`
- placer les éventuelles images dans `./static/images` et les référencer en tant que `/static/images/xxxx.jpg`.
- référencer l'article dans une news dans `./src/data/news.yml` si nécessaire.

Les fichiers peuvent être au format `.js` ou `.mdx` (prendre exemple sur les fichiers actuels)

Exemple MDX : [./pages/startups/work-in-france.mdx](./pages/startups/work-in-france.mdx)

Pour trouver des images 📷 : https://unsplash.com

## Dev

Le site est statique et généré avec [next.js](https://github.com/zeit/next.js)

```
git clone
yarn
yarn dev
```

`yarn build` pour builder une version statique

Les modifs sur la branche `master` sont automatiquement déployées sur https://fabrique.social.gouv.fr

## A propos

Template basé sur [template.data.gouv.fr](https://github.com/etalab/template.data.gouv.fr)

## Synchro beta.gouv

Pour synchroniser le contenu depuis beta.gouv, lancer la commande `yarn beta-sync` et commiter le résultat.

Les produits doivent être définis dans [./data/startups.yml](https://github.com/SocialGouv/www/blob/master/src/data/startups.yml) et comporter un identifiant `betaId` si différent

