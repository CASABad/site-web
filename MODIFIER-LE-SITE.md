# Modifier le site CASA'Bad

Cette fiche sert de pense-bete pour faire vivre le site sans devoir tout retrouver a chaque fois.

## Les fichiers importants

- `src/siteData.js` : liens, contacts, partenaires, affiliations, albums photos.
- `src/main.jsx` : structure des pages et textes principaux.
- `src/styles.css` : couleurs, espacements, affichage mobile.
- `public/assets/` : images du site.
- `public/assets/instagram/` : photos recuperees d'Instagram.
- `public/assets/plumes-2026/` : photos de l'album Les Plumes 2026.

## Modifier le contact

Dans `src/siteData.js`, changer les valeurs dans `contactInfo` :

```js
export const contactInfo = {
  email: 'contact.casabad@gmail.com',
  phoneLabel: '06 20 78 91 21',
  phoneHref: '+33620789121',
  licenseUrl: 'https://adherer.myffbad.fr/cb04',
  renewalUrl: 'https://myffbad.fr/connexion',
};
```

Quand l'association aura une adresse officielle, remplacer par exemple `contact.casabad@gmail.com` par `contact@casabad.fr`.

## Modifier les horaires

Dans `src/siteData.js`, changer les lignes dans `scheduleRows` :

```js
{
  day: 'Mardi',
  activity: 'Jeu libre',
  place: 'Espace Jose Escanez',
  time: '21h - 23h',
},
```

Le tableau de la page d'accueil se mettra a jour automatiquement.

## Modifier les tarifs

Dans `src/siteData.js`, changer les valeurs dans `pricingInfo` :

- `season` pour le titre de saison.
- `licenses` pour les licences, ages, tarifs et accessibilite.
- `benefits` pour les avantages.
- `note` pour la phrase en bas du tableau.

Le tableau de la page d'accueil se mettra a jour automatiquement.

## Ajouter un partenaire

1. Mettre le logo dans `public/assets/`.
2. Ouvrir `src/siteData.js`.
3. Ajouter une ligne dans `partners` :

```js
['Nom du partenaire', 'logo-partenaire.png', 'https://site-du-partenaire.fr'],
```

## Ajouter des photos dans un album

1. Mettre les photos dans `public/assets/`, idealement dans un sous-dossier.
2. Ouvrir `src/siteData.js`.
3. Ajouter les chemins des photos dans le bon tableau `images`.

Exemple :

```js
images: [
  'saison-2025-2026/photo-01.jpg',
  'saison-2025-2026/photo-02.jpg',
],
```

## Creer un nouvel album

Dans `src/siteData.js`, ajouter un bloc dans `mediaAlbums` :

```js
{
  id: 'saison-2026-2027',
  group: 'Saisons',
  label: 'Saison 2026-2027',
  title: 'Saison 2026-2027',
  images: [],
},
```

Pour un tournoi, mettre `group: 'Tournois'`.

## Publier une modification

1. Tester localement le site.
2. Verifier que tout est correct.
3. Envoyer les changements sur GitHub.
4. Vercel republie automatiquement le site.

## A garder dans un endroit sur

- Acces Hostinger pour le domaine `casabad.fr`.
- Acces GitHub organisation `CASABad`.
- Acces Vercel projet `site-web`.
- Adresse email officielle du club quand elle sera creee.
