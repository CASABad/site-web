export const navItems = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'textiles', label: 'Textiles club' },
  { id: 'medias', label: 'Médias' },
  { id: 'contact', label: 'Contact' },
];

export const contactInfo = {
  email: 'contact.casabad@gmail.com',
  phoneLabel: '06 20 78 91 21',
  phoneHref: '+33620789121',
  licenseUrl: 'https://adherer.myffbad.fr/cb04',
  renewalUrl: 'https://myffbad.fr/connexion',
};

export const scheduleRows = [
  {
    day: 'Mardi',
    sessions: [
      {
        activity: 'Jeu libre',
        time: '21h - 23h',
        courts: '7 terrains',
      },
    ],
  },
  {
    day: 'Mercredi',
    sessions: [
      {
        activity: 'Entraînement tous niveaux',
        time: '20h - 21h15',
        courts: '7 terrains',
      },
      {
        activity: 'Jeu libre',
        time: '21h15 - 23h',
        courts: '7 terrains',
      },
    ],
  },
  {
    day: 'Jeudi',
    sessions: [
      {
        activity: 'Entraînement compétiteurs interclubs',
        time: '19h - 20h45',
        courts: '7 terrains',
      },
      {
        activity: 'Matches compétiteurs interclubs',
        time: '20h45 - 23h',
        courts: '7 terrains',
      },
    ],
  },
  {
    day: 'Samedi',
    sessions: [
      {
        activity: 'École de badminton',
        time: '10h - 12h',
        courts: '4 terrains',
      },
      {
        activity: 'Jeu libre et badminton parents-enfants',
        time: '10h - 13h',
        courts: '3 terrains, puis 7 terrains à partir de 12h',
      },
    ],
  },
];

export const pricingInfo = {
  season: '2026-2027',
  intro: [
    "La cotisation d'adhésion inclut la licence fédérale FFBad avec son assurance en responsabilité civile standard, ainsi que l'adhésion au club.",
    "Un questionnaire de santé lors de la prise de licence déterminera si un certificat médical est requis ou non.",
    "Toute licence acquise sera valable jusqu'au 31 août 2027.",
  ],
  licenses: [
    {
      name: 'Adulte',
      age: 'Être âgé de 18 ans au 1er septembre 2026.',
      price: [
        '130 € pour une licence prise entre le 1er septembre 2026 et le 31 janvier 2027.',
        '100 € du 1er février au 30 avril 2027.',
        '40 € du 1er mai au 31 août 2027.',
      ],
      accessibility: [
        'Mardi, mercredi et samedi : accès libre.',
        'Jeudi : sous réserve de participation aux championnats par équipes interclubs.',
        'Accès aux avantages tarifaires sur les volants, cordages et textiles.',
        'Accès aux soirées convivialité.',
      ],
    },
    {
      name: 'Jeune',
      age: 'Être âgé de 8 à 18 ans.',
      price: [
        'Le club est éligible au Pass Sport, dispositif d’allocation de rentrée sportive de 70 €.',
        '100 € pour une licence prise entre le 1er septembre 2026 et le 31 janvier 2027.',
        '80 € du 1er février au 30 avril 2027.',
        '40 € du 1er mai au 31 août 2027.',
      ],
      accessibility: [
        'Mardi et mercredi : accès pour les jeunes compétiteurs autonomes âgés de 13 ans et plus.',
        "Samedi : accès à l'école de badminton et/ou jeu libre.",
        'Jeudi : sous réserve de participation aux championnats par équipes interclubs.',
        'Accès aux avantages tarifaires sur les volants, cordages et textiles.',
        'Accès aux soirées convivialité.',
      ],
    },
    {
      name: 'Adhésion simple',
      age: 'Avoir une licence active dans un autre club pour la saison 2026-2027.',
      price: [
        '100 € pour une adhésion prise entre le 1er septembre 2026 et le 31 janvier 2027.',
        '60 € du 1er février au 30 avril 2027.',
        '40 € du 1er mai au 31 août 2027.',
      ],
      accessibility: [
        'Mardi, mercredi à partir de 21h15 et samedi.',
        'Accès aux avantages tarifaires sur les textiles clubs, hors maillots compétition.',
        'Accès aux soirées convivialité.',
      ],
    },
  ],
};

export const partners = [
  ['Brice Bouyer', 'partenaire-brice-bouyer.png', 'https://www.iadfrance.fr/conseiller-immobilier/brice.bouyer'],
  ['InterSport Sisteron', 'partenaire-intersport.png', 'https://www.intersport-sisteron.com/'],
  ['Super U Sisteron', 'partenaire-superu.png', 'https://www.magasins-u.com/magasin/superu-sisteron'],
  ['Payan Espaces Verts', 'partenaire-payan.jpg', 'https://www.facebook.com/p/PAYAN-Espaces-Verts-100091738812182/'],
  ['Lesbros', 'partenaire-lesbros.png', 'https://www.dekra-norisko.fr/dekra/controle-technique/chateau-arnoux-saint-auban,04160/avenue-de-blaches-gombert?S004D036'],
  ['Alpes Piscine Services', 'partenaire-aps.png', 'https://www.aps04.com/'],
  ['Dekra Château-Arnoux', 'partenaire-dekra.png', 'https://www.dekra-norisko.fr/dekra/controle-technique/chateau-arnoux-saint-auban,04160/avenue-de-blaches-gombert?S004D036'],
  ['Ferronnerie Lecocq', 'partenaire-lecocq.png', 'https://www.ferronnerie-lecocq-04.fr/'],
];

export const affiliations = [
  ['FFBad', 'affiliation-ffbad.png', 'https://www.ffbad.org/'],
  ['Badminton Ligue Sud', 'affiliation-sudbad.png', 'https://sudbad.fr/'],
  ['Bad04', 'affiliation-bad04.jpg', 'https://myffbad.fr/club/2423'],
];

export const textileImages = [
  'textiles-2025-2027/textiles-2025-2027-01.jpg',
  'textiles-2025-2027/textiles-2025-2027-02.jpg',
  'textiles-2025-2027/textiles-2025-2027-03.jpg',
];

const mediaImages = ['media-1.jpg', 'media-2.jpg', 'media-3.jpg', 'media-4.jpg', 'media-5.jpg'];

const instagramSeason2025Images = [
  'instagram/instagram-01.jpg',
  'instagram/instagram-02.jpg',
  'instagram/instagram-05.jpg',
  'instagram/instagram-06.jpg',
  'instagram/instagram-07.jpg',
  'instagram/instagram-08.jpg',
  'instagram/instagram-09.jpg',
  'instagram/instagram-10.jpg',
  'instagram/instagram-11.jpg',
  'instagram/instagram-12.jpg',
  'instagram/instagram-13.jpg',
  'instagram/instagram-14.jpg',
  'instagram/instagram-15.jpg',
  'instagram/instagram-17.jpg',
];

const plumes2026Images = [
  'plumes-2026/plumes-2026-01.jpeg',
  'plumes-2026/plumes-2026-02.jpeg',
  'plumes-2026/plumes-2026-03.jpeg',
  'plumes-2026/plumes-2026-04.jpeg',
  'plumes-2026/plumes-2026-05.jpeg',
  'plumes-2026/plumes-2026-06.jpeg',
  'plumes-2026/plumes-2026-07.jpeg',
  'plumes-2026/plumes-2026-08.jpeg',
  'plumes-2026/plumes-2026-09.jpeg',
  'plumes-2026/plumes-2026-10.jpeg',
  'plumes-2026/plumes-2026-11.jpeg',
  'plumes-2026/plumes-2026-12.jpeg',
  'plumes-2026/plumes-2026-13.jpeg',
  'plumes-2026/plumes-2026-14.jpeg',
  'plumes-2026/plumes-2026-15.jpeg',
  'plumes-2026/plumes-2026-16.jpeg',
  'plumes-2026/plumes-2026-17.jpeg',
  'plumes-2026/plumes-2026-18.jpeg',
  'plumes-2026/plumes-2026-19.jpeg',
  'plumes-2026/plumes-2026-20.jpeg',
  'plumes-2026/plumes-2026-21.jpeg',
  'plumes-2026/plumes-2026-22.jpeg',
  'plumes-2026/plumes-2026-23.jpeg',
  'plumes-2026/plumes-2026-24.jpeg',
  'plumes-2026/plumes-2026-25.jpeg',
  'plumes-2026/plumes-2026-26.jpeg',
  'plumes-2026/plumes-2026-27.jpeg',
  'plumes-2026/plumes-2026-28.jpeg',
  'plumes-2026/plumes-2026-29.jpeg',
  'plumes-2026/plumes-2026-30.jpeg',
  'plumes-2026/plumes-2026-31.jpeg',
  'plumes-2026/plumes-2026-32.jpeg',
  'plumes-2026/plumes-2026-33.jpeg',
  'plumes-2026/plumes-2026-34.jpeg',
  'plumes-2026/plumes-2026-35.jpeg',
  'plumes-2026/plumes-2026-36.jpeg',
  'plumes-2026/plumes-2026-37.jpeg',
  'plumes-2026/plumes-2026-38.jpeg',
  'plumes-2026/plumes-2026-39.jpeg',
  'plumes-2026/plumes-2026-40.jpeg',
  'plumes-2026/plumes-2026-41.jpeg',
  'plumes-2026/plumes-2026-42.jpeg',
  'plumes-2026/plumes-2026-43.jpeg',
  'plumes-2026/plumes-2026-44.jpeg',
  'plumes-2026/plumes-2026-45.jpeg',
  'plumes-2026/plumes-2026-46.jpeg',
  'plumes-2026/plumes-2026-47.jpeg',
  'plumes-2026/plumes-2026-48.jpeg',
  'plumes-2026/plumes-2026-49.jpeg',
  'plumes-2026/plumes-2026-50.jpeg',
  'plumes-2026/plumes-2026-51.jpeg',
];

export const mediaAlbums = [
  {
    id: 'saison-2025-2026',
    group: 'Saisons',
    label: 'Saison 2025-2026',
    title: 'Saison 2025-2026',
    images: instagramSeason2025Images,
  },
  {
    id: 'plumes-2026',
    group: 'Tournois',
    label: 'Les Plumes 2026',
    title: 'Les Plumes 2026',
    images: plumes2026Images,
  },
  {
    id: 'saison-2024-2025',
    group: 'Saisons',
    label: 'Saison 2024-2025',
    title: 'Saison 2024-2025',
    images: [],
  },
  {
    id: 'plumes-2025',
    group: 'Tournois',
    label: 'Les Plumes 2025',
    title: 'Les Plumes 2025',
    images: [],
  },
  {
    id: 'saison-2023-2024',
    group: 'Saisons',
    label: 'Saison 2023-2024',
    title: 'Saison 2023-2024',
    images: mediaImages,
  },
  {
    id: 'plumes-2024',
    group: 'Tournois',
    label: 'Les Plumes 2024',
    title: 'Les Plumes 2024',
    images: [],
  },
];
