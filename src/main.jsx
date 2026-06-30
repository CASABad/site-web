import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Music,
  Phone,
  Shirt,
  Trophy,
  Users,
  X,
} from 'lucide-react';
import {
  affiliations,
  contactInfo,
  mediaAlbums,
  navItems,
  partners,
  pricingInfo,
  scheduleRows,
  textileImages,
} from './siteData.js';
import './styles.css';

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
        <a className="license-link" href={contactInfo.licenseUrl} target="_blank" rel="noreferrer">
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
            <a className="primary-button" href={contactInfo.licenseUrl} target="_blank" rel="noreferrer">
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

      <section className="tryout-band" aria-label="Essai au club">
        <div>
          <p className="eyebrow">Envie d'essayer ?</p>
          <h2>3 seances pour decouvrir le club avant de se lancer.</h2>
        </div>
        <div className="tryout-actions">
          <a className="secondary-button" href="#contact">
            Poser une question
          </a>
          <a className="primary-button" href={contactInfo.licenseUrl} target="_blank" rel="noreferrer">
            Voir la licence <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section className="section schedule-section">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow dark">Saison 2026-2027</p>
            <h2>Lieux d'entrainement et horaires</h2>
          </div>
          <CalendarDays size={32} />
        </div>
        <ScheduleTable />
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
        <h2>Tarifs saison {pricingInfo.season}</h2>
        <PricingTables />
        <div className="button-row">
          <a className="primary-button" href={contactInfo.licenseUrl} target="_blank" rel="noreferrer">
            Nouvelle licence <ArrowRight size={18} />
          </a>
          <a className="secondary-button dark" href={contactInfo.renewalUrl} target="_blank" rel="noreferrer">
            Renouvellement
          </a>
        </div>
      </section>

      <ClubNetworkSection />
    </>
  );
}

function PricingTables() {
  return (
    <div className="pricing-card">
      <div className="pricing-intro">
        {pricingInfo.intro.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
      <div className="pricing-table-wrap">
        <table className="pricing-table licenses-table">
          <thead>
            <tr>
              <th>Licence</th>
              <th>Age requis</th>
              <th>Tarif</th>
              <th>Accessibilite</th>
            </tr>
          </thead>
          <tbody>
            {pricingInfo.licenses.map((license) => (
              <tr key={license.name}>
                <th scope="row">{license.name}</th>
                <td>{license.age}</td>
                <td className="price-cell">{license.price}</td>
                <td>{license.accessibility}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3>Avantages</h3>
      <div className="pricing-table-wrap">
        <table className="pricing-table benefits-table">
          <thead>
            <tr>
              <th>Avantage</th>
              <th>Montant</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {pricingInfo.benefits.map((benefit) => (
              <tr key={benefit.name}>
                <th scope="row">{benefit.name}</th>
                <td className="price-cell">{benefit.amount}</td>
                <td>{benefit.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="pricing-note">{pricingInfo.note}</p>
    </div>
  );
}

function ScheduleTable() {
  return (
    <div className="schedule-card" aria-label="Horaires des seances">
      <div className="schedule-card-header">
        <h3>Horaires des seances</h3>
        <span>Mise a jour saison 2026-2027</span>
      </div>
      <div className="schedule-table-wrap">
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Jour</th>
              <th>Activites</th>
              <th>Lieux</th>
              <th>Horaires</th>
            </tr>
          </thead>
          <tbody>
            {scheduleRows.map((row) => (
              <tr key={row.day}>
                <th scope="row">{row.day}</th>
                <td>{row.activity}</td>
                <td>{row.place}</td>
                <td>{row.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
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
        <a className="partner-cta" href="#contact">
          Devenir partenaire <ArrowRight size={18} />
        </a>
      </div>
      <div className="network-carousels">
        <LogoCarousel title="Nos partenaires" items={partners} />
        <LogoCarousel title="Nos affiliations" items={affiliations} compact />
      </div>
    </section>
  );
}

function LogoCarousel({ title, items, compact = false }) {
  const loopItems = [...items, ...items];

  return (
    <section className={`logo-carousel ${compact ? 'compact' : ''}`} aria-label={title}>
      <h2>{title}</h2>
      <div className="carousel-window">
        <div className="carousel-track">
          {loopItems.map(([name, image, href], index) => (
            <a key={`${name}-${index}`} className="logo-tile" href={href} target="_blank" rel="noreferrer" aria-label={name}>
              <img src={asset(image)} alt={name} loading="lazy" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialSection() {
  const socials = [
    {
      name: 'Instagram',
      handle: '@casabad_04',
      href: 'https://www.instagram.com/casabad_04/',
      icon: <Instagram size={22} />,
    },
    {
      name: 'Facebook',
      handle: "CASA'Bad",
      href: 'https://www.facebook.com/p/CASABad-100091382750148/',
      icon: <Facebook size={22} />,
    },
  ];

  return (
    <section className="social-section">
      <h2>Suivez-nous</h2>
      <div className="social-links">
        {socials.map((social) => (
          <a key={social.name} href={social.href} target="_blank" rel="noreferrer">
            <span className="social-icon">{social.icon}</span>
            <span>
              <strong>{social.name}</strong>
              {social.handle}
            </span>
          </a>
        ))}
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
          <img key={image} src={asset(image)} alt={`Textile club CASA'Bad ${index + 1}`} loading="lazy" />
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
      <ClubMusicCard />
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

function ClubMusicCard() {
  return (
    <section className="club-music" aria-label="Musique du club">
      <img src={asset('audio/casa-bad-cover.jpeg')} alt="Cover de la musique CASA'Bad" loading="lazy" />
      <div className="club-music-content">
        <p className="eyebrow dark">Musique du club</p>
        <h2>CASA'Bad</h2>
        <p>La bande son officielle du club, a ecouter avant les entrainements, les rencontres et les tournois.</p>
        <audio controls preload="metadata">
          <source src={asset('audio/casa-bad.mp3')} type="audio/mpeg" />
          Votre navigateur ne peut pas lire ce fichier audio.
        </audio>
      </div>
      <Music className="club-music-icon" size={32} aria-hidden="true" />
    </section>
  );
}

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const mailto = `mailto:${contactInfo.email}?subject=${encodeURIComponent(form.subject || 'Contact CASA Bad')}&body=${encodeURIComponent(`Nom: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;

  return (
    <PageShell eyebrow="Contact" title="Nous contacter" intro="Une question sur les essais, les horaires, l'inscription ou les competitions ? Ecrivez-nous directement.">
      <section className="contact-layout">
        <div className="contact-methods">
          <a href={`mailto:${contactInfo.email}`}>
            <Mail size={22} />
            <span>
              <strong>Email de contact</strong>
              {contactInfo.email}
            </span>
          </a>
          <a href={`tel:${contactInfo.phoneHref}`}>
            <Phone size={22} />
            <span>
              <strong>Contact telephonique</strong>
              {contactInfo.phoneLabel}
            </span>
          </a>
          <a href={contactInfo.licenseUrl} target="_blank" rel="noreferrer">
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
      <a className="footer-brand" href="#accueil" aria-label="Accueil CASA'Bad">
        <img src={asset('logo-casabad.png')} alt="CASA'Bad" />
      </a>
      <div className="footer-center">
        <strong>CASA'Bad</strong>
        <p>Association Sportive Badminton - Alpes-de-Haute-Provence</p>
      </div>
      <div className="footer-links">
        <a className="footer-action" href="#contact">Nous contacter</a>
        <div className="footer-socials" aria-label="Reseaux sociaux">
          <a href="https://www.instagram.com/casabad_04/" target="_blank" rel="noreferrer" aria-label="Instagram CASA'Bad">
            <Instagram size={18} />
          </a>
          <a href="https://www.facebook.com/p/CASABad-100091382750148/" target="_blank" rel="noreferrer" aria-label="Facebook CASA'Bad">
            <Facebook size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

createRoot(document.getElementById('root')).render(<App />);
