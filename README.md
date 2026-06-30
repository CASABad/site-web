# CASA'Bad Website

Site vitrine React/Vite pret pour Vercel.

## Commandes

```bash
npm install
npm run dev
npm run build
```

Le serveur local tourne sur `http://127.0.0.1:5173/` quand `npm run dev` est lance.

## Mise en ligne Vercel

1. Creer un depot Git avec ce dossier.
2. Importer le depot dans Vercel.
3. Laisser Vercel utiliser la commande de build `npm run build`.
4. Ajouter le domaine `casabad.fr` dans les parametres du projet Vercel.
5. Modifier les DNS chez Bluehost seulement quand la version Vercel est validee.

## Domaine

Pour garder `casabad.fr`, il ne faut pas supprimer le domaine chez Bluehost. Il faut seulement faire pointer les DNS vers Vercel au moment de la bascule.

Vercel donnera les valeurs exactes, generalement :

- un enregistrement `A` pour le domaine racine ;
- un enregistrement `CNAME` pour `www`.

Faire la bascule DNS apres validation du site, pour eviter une coupure inutile.
