import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronRight,
  Mail,
  MapPin,
  Menu,
  Phone,
  Shirt,
  Trophy,
  Users,
  X,
} from 'lucide-react';
import './styles.css';

const navItems = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'textiles', label: 'Textiles club' },
  { id: 'medias', label: 'Medias' },
  { id: 'contact', label: 'Contact' },
];

const partners = [
  ['Brice Bouyer', 'partenaire-brice-bouyer.png', 'https://www.iadfrance.fr/conseiller-immobilier/brice.bouyer'],
  ['InterSport Sisteron', 'partenaire-intersport.png', 'https://www.intersport-sisteron.com/'],
  ['Super U Sisteron', 'partenaire-superu.png', 'https://www.magasins-u.com/magasin/superu-sisteron'],
  ['Payan Espaces Verts', 'partenaire-payan.jpg', 'https://www.facebook.com/p/PAYAN-Espaces-Verts-100091738812182/'],
  ['Lesbros', 'partenaire-lesbros.png', 'https://www.dekra-norisko.fr/dekra/controle-technique/chateau-arnoux-saint-auban,04160/avenue-de-blaches-gombert?S004D036'],
  ['Alpes Piscine Services', 'partenaire-aps.png', 'https://www.aps04.com/'],
  ['Dekra Chateau-Arnoux', 'partenaire-dekra.png', 'https://www.dekra-norisko.fr/dekra/controle-technique/chateau-arnoux-saint-auban,04160/avenue-de-blaches-gombert?S004D036'],
  ['Ferronnerie Lecocq', 'partenaire-lecocq.png', 'https://www.ferronnerie-lecocq-04.fr/'],
];

const affiliations = [
  ['FFBad', 'affiliation-ffbad.png', 'https://www.ffbad.org/'],
  ['Badminton Ligue Sud', 'affiliation-sudbad.png', 'https://sudbad.fr/'],
  ['Bad04', 'affiliation-bad04.jpg', 'https://myffbad.fr/club/2423'],
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
const textileImages = ['textile-1.png', 'textile-2.png', 'textile-3.png', 'textile-4.png'];

const mediaAlbums = [
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

function asset(name) {
  return `/assets/${name}`;
}

function App() {
  const [active, setActive] = useState(() => window.location.hash.replace('#', '') || 'accueil');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onHash = () => setActive(window.location.hash.replace('#', '') || 'accueil');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    document.title = active === 'accueil'
      ? "CASA'Bad - Association Sportive Badminton"
      : `${navItems.find((item) => item.id === active)?.label || "CASA'Bad"} - CASA'Bad`;
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [active]);

  const page = useMemo(() => {
    if (active === 'textiles') return <TextilesPage />;
    if (active === 'medias') return <MediasPage />;
    if (active === 'contact') return <ContactPage />;
    return <HomePage />;
  }, [active]);

  return (
    <>
      <Header active={active} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>{page}</main>
      <Footer />
    </>
  );
}

function Header({ active, menuOpen, setMenuOpen }) {
  return (
    <header className="site-header">
      <a className="brand" href="#accueil" aria-label="Accueil CASA'Bad">
        <img src={asset('logo-casabad.png')} alt="CASA'Bad" />
      </a>
      <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navigation principale">
        {navItems.map((item) => (
          <a key={item.id} className={active === item.id ? 'active' : ''} href={`#${item.id}`}>
            {item.label}
          </a>
        ))}
        <a className="license-link" href="https://adherer.myffbad.fr/cb04" target="_blank" rel="noreferrer">
          Prise de licence
        </a>
      </nav>
      <button className="icon-button menu-button" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label="Menu">
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero">
        <img className="hero-image" src={asset('instagram/ACCUEIL.jpg')} alt="Joueuses et joueurs de badminton CASA'Bad" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Association sportive de badminton</p>
          <h1>CASA'Bad</h1>
          <p>
            Un club adulte convivial pour progresser, transpirer, jouer en loisir ou en competition
            dans les Alpes-de-Haute-Provence.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="https://adherer.myffbad.fr/cb04" target="_blank" rel="noreferrer">
              Prendre une licence <ArrowRight size={18} />
            </a>
            <a className="secondary-button" href="#contact">
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      <section className="quick-strip" aria-label="Informations principales">
        <InfoPill icon={<Users />} label="Adultes et +16 ans" />
        <InfoPill icon={<Check />} label="3 seances d'essai offertes" />
        <InfoPill icon={<Trophy />} label="Loisir et competition" />
        <InfoPill icon={<MapPin />} label="Espace Jose Escanez" />
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow dark">Notre ADN</p>
          <h2>Repartir avec le sourire, et un peu plus de badminton dans les jambes.</h2>
        </div>
        <div className="copy-block">
          <p>
            CASA'Bad est un club de badminton qui a vu le jour en avril 2023. Cree par quatre
            passionnes animes d'une idee commune, celle de promouvoir ce sport dans les
            Alpes-de-Haute-Provence.
          </p>
          <p>
            La politique du club repose sur un contrat moral avec chaque adherent : garantir une
            bonne dose de transpiration, repartir de l'entrainement avec un large sourire et se
            sentir plus competent apres qu'avant.
          </p>
        </div>
      </section>

      <section className="section offers">
        <h2>CASA'Bad vous propose</h2>
        <div className="offer-grid">
          {[
            'Des entrainements adultes pour tous les niveaux',
            'Des seances specifiques pour les competiteurs',
            'De la pratique loisir',
            'De la pratique parents-enfants',
            'Des competitions par equipes, amicales et federales',
          ].map((text) => (
            <article className="offer-card" key={text}>
              <Check size={18} />
              <span>{text}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section schedule-section">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow dark">Saison 2025-2026</p>
            <h2>Lieux d'entrainement et horaires</h2>
          </div>
          <CalendarDays size={32} />
        </div>
        <img className="wide-document" src={asset('horaires-2025-2026.jpg')} alt="Horaires CASA'Bad 2025-2026" />
        <div className="location-band">
          <img src={asset('espace-jose-escanez.png')} alt="Espace Jose Escanez" />
          <div>
            <h3>Espace Jose Escanez</h3>
            <p>Le lieu d'entrainement principal du club pour la saison.</p>
          </div>
        </div>
      </section>

      <section className="section pricing-section">
        <p className="eyebrow dark">Adhesion</p>
        <h2>Tarifs saison 2025-2026</h2>
        <img className="wide-document" src={asset('tarifs-2025-2026.jpg')} alt="Tarifs CASA'Bad 2025-2026" />
        <div className="button-row">
          <a className="primary-button" href="https://adherer.myffbad.fr/cb04" target="_blank" rel="noreferrer">
            Nouvelle licence <ArrowRight size={18} />
          </a>
          <a className="secondary-button dark" href="https://myffbad.fr/connexion" target="_blank" rel="noreferrer">
            Renouvellement
          </a>
        </div>
      </section>

      <ClubNetworkSection />
    </>
  );
}

function InfoPill({ icon, label }) {
  return (
    <div className="info-pill">
      {React.cloneElement(icon, { size: 20 })}
      <span>{label}</span>
    </div>
  );
}

function ClubNetworkSection() {
  return (
    <section className="club-network">
      <div className="network-intro">
        <p className="eyebrow dark">Autour du club</p>
        <h2>Suivez CASA'Bad et decouvrez ceux qui nous accompagnent.</h2>
        <p>
          Les actus du club vivent aussi sur les reseaux. Nos partenaires et affiliations font
          tourner le badminton local avec nous, saison apres saison.
        </p>
        <SocialSection />
      </div>
      <div className="network-carousels">
        <LogoCarousel title="Nos partenaires" items={partners} />
        <LogoCarousel title="Nos affiliations" items={affiliations} compact />
      </div>
    </section>
  );
}

function LogoCarousel({ title, items }) {
  const loopItems = [...items, ...items];

  return (
    <section className="logo-carousel" aria-label={title}>
      <h2>{title}</h2>
      <div className="carousel-window">
        <div className="carousel-track">
          {loopItems.map(([name, image, href], index) => (
            <a key={`${name}-${index}`} className="logo-tile" href={href} target="_blank" rel="noreferrer" aria-label={name}>
              <img src={asset(image)} alt={name} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialSection() {
  return (
    <section className="social-section">
      <h2>Suivez-nous</h2>
      <div className="social-links">
        <a href="https://www.instagram.com/casabad_04/" target="_blank" rel="noreferrer">
          <img src={asset('instagram.jpg')} alt="Instagram CASA'Bad" />
          <span>
            <strong>Instagram</strong>
            @casabad_04
          </span>
        </a>
        <a href="https://www.facebook.com/p/CASABad-100091382750148/" target="_blank" rel="noreferrer">
          <img src={asset('facebook.jpg')} alt="Facebook CASA'Bad" />
          <span>
            <strong>Facebook</strong>
            CASA'Bad
          </span>
        </a>
      </div>
    </section>
  );
}

function TextilesPage() {
  return (
    <PageShell
      eyebrow="Boutique club"
      title="Textiles club"
      intro="Les textiles CASA'Bad pour afficher les couleurs du club aux entrainements, en tournoi et sur les rencontres par equipes."
      heroImage="hero-textiles.png"
      heroPosition="center"
    >
      <div className="masonry textiles">
        {textileImages.map((image, index) => (
          <img key={image} src={asset(image)} alt={`Textile club CASA'Bad ${index + 1}`} />
        ))}
      </div>
    </PageShell>
  );
}

function MediasPage() {
  const [album, setAlbum] = useState('plumes-2026');
  const activeAlbum = mediaAlbums.find((item) => item.id === album) || mediaAlbums[0];

  return (
    <PageShell
      eyebrow="Vie du club"
      title="Medias"
      intro="Photos des rencontres, tournois et temps forts du club."
      heroImage="hero-medias.jpeg"
      heroPosition="center"
    >
      <div className="album-groups">
        {['Saisons', 'Tournois'].map((group) => (
          <div className="album-group" key={group}>
            <h2>{group}</h2>
            <div className="album-tabs" role="tablist" aria-label={`Albums ${group.toLowerCase()}`}>
              {mediaAlbums
                .filter((item) => item.group === group)
                .map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={album === item.id ? 'active' : ''}
                    onClick={() => setAlbum(item.id)}
                    role="tab"
                    aria-selected={album === item.id}
                  >
                    {item.label}
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>
      <div className="album-heading">
        <h2 className="subheading">{activeAlbum.title}</h2>
        <span>{activeAlbum.images.length} photos</span>
      </div>
      {activeAlbum.images.length > 0 ? (
        <div className="masonry">
          {activeAlbum.images.map((image, index) => (
            <img key={image} src={asset(image)} alt={`${activeAlbum.title} CASA'Bad ${index + 1}`} loading="lazy" />
          ))}
        </div>
      ) : (
        <div className="empty-album">
          <h3>Album a completer</h3>
          <p>Les photos de cet album seront ajoutees prochainement.</p>
        </div>
      )}
    </PageShell>
  );
}

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const mailto = `mailto:contact.casabad@gmail.com?subject=${encodeURIComponent(form.subject || 'Contact CASA Bad')}&body=${encodeURIComponent(`Nom: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;

  return (
    <PageShell eyebrow="Contact" title="Nous contacter" intro="Une question sur les essais, les horaires, l'inscription ou les competitions ? Ecrivez-nous directement.">
      <section className="contact-layout">
        <div className="contact-methods">
          <a href="mailto:contact.casabad@gmail.com">
            <Mail size={22} />
            <span>
              <strong>Email de contact</strong>
              contact.casabad@gmail.com
            </span>
          </a>
          <a href="tel:+33620789121">
            <Phone size={22} />
            <span>
              <strong>Contact telephonique</strong>
              06 20 78 91 21
            </span>
          </a>
          <a href="https://adherer.myffbad.fr/cb04" target="_blank" rel="noreferrer">
            <ChevronRight size={22} />
            <span>
              <strong>Prise de licence</strong>
              adherer.myffbad.fr/cb04
            </span>
          </a>
        </div>

        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <label>
            Nom
            <input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
          </label>
          <label>
            Email
            <input type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
          </label>
          <label>
            Sujet
            <input value={form.subject} onChange={(event) => setForm({ ...form, subject: event.target.value })} />
          </label>
          <label>
            Votre message
            <textarea rows="6" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} />
          </label>
          <a className="primary-button form-submit" href={mailto}>
            Envoyer par email <Mail size={18} />
          </a>
        </form>
      </section>
    </PageShell>
  );
}

function PageShell({ eyebrow, title, intro, children, heroImage = 'media-1.jpg', heroPosition = 'center' }) {
  return (
    <>
      <section
        className="page-hero"
        style={{
          '--page-hero-image': `url("${asset(heroImage)}")`,
          '--page-hero-position': heroPosition,
        }}
      >
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </section>
      <section className="section page-content">{children}</section>
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <img src={asset('logo-casabad.png')} alt="CASA'Bad" />
      <div>
        <p>Association Sportive Badminton - Alpes-de-Haute-Provence</p>
      </div>
      <a href="#contact">Contact</a>
    </footer>
  );
}

createRoot(document.getElementById('root')).render(<App />);
