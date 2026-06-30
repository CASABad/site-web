# Design QA

Final result: passed

## Source Evidence

- Source desktop capture: `source-captures/casabad-source-desktop.png`
- Source mobile capture: `source-captures/casabad-source-mobile.png`
- Local desktop capture: `qa-captures/local-desktop-home-final.png`
- Local mobile menu capture: `qa-captures/local-mobile-menu-final.png`

## Checks

- Production build passes with `npm run build`.
- Desktop home page renders with no broken images.
- Mobile home page renders with no broken images.
- Mobile menu opens and exposes the navigation.
- Hash navigation works for Accueil, Textiles club, Medias and Contact.
- Contact form produces a `mailto:` link to `contact.casabad@gmail.com`.
- License links point to MyFFBad for new and renewed licenses.

## Notes

- The WordPress admin URL redirects to the login page, so no private WordPress or Bluehost settings were inspected.
- Assets used in the prototype were copied from the public CASA'Bad site and stored locally in `public/assets`.
