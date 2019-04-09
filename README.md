# incubateur.social.gouv.fr [![Build Status](https://travis-ci.com/SocialGouv/socialgouv.github.io.svg?branch=dev)](https://travis-ci.com/SocialGouv/socialgouv.github.io)

Site de l'incubateur des Ministères sociaux

⚠ La branche par défaut est `dev`

Les stats sont disponibles sur https://stats.num.social.gouv.fr

## Editer le site

Faire les changements directement sur GitHub ou sur une branche locale, et soumettre une pull request :)

### Ajouter une brève :

📝 éditer [src/data/news.js](https://github.com/SocialGouv/socialgouv.github.io/edit/dev/src/data/news.js)

Les données des `startups` et `members` sont dans [./src/data](./src/data)

### Modifier/Créer un article :

- éditer/ajouter des pages dans `./pages`
- placer les éventuelles images dans `./static/images` et les référencer en tant que `/static/images/xxxx.jpg`.
- référencer l'article dans une news dans `./src/data/news.js` si nécessaire.

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

Les modifs sur la branche `dev` sont automatiquement déployées sur https://socialgouv.github.io

## A propos

Template basé sur [template.data.gouv.fr](https://github.com/etalab/template.data.gouv.fr)
