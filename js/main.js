/* ═══════════════════════════════════════
   GOLDEN PAWS — JavaScript
═══════════════════════════════════════ */

const WA_NUMBER = '+237671597988';

let currentLang = localStorage.getItem('gp_lang') || 'en';

// ── Données des chiots (bilingues) ──
const puppies = [
  {
    id: 1,
    name: 'Apollo',
    age:    { en: '8 weeks',  fr: '8 semaines' },
    gender: { en: 'Male',     fr: 'Mâle' },
    genderIcon: '♂',
    price: '1 900€',
    badge:  { en: 'Fan Favorite', fr: 'Coup de cœur' },
    available: true,
    description: {
      en: "Lively, curious and affectionate, Apollo loves to play and gets along wonderfully with children. A perfect future family dog.",
      fr: "Vif, curieux et affectueux, Apollo adore jouer et s'entend à merveille avec les enfants. Un futur chien de famille parfait.",
    },
    image: 'images/puppy1.jpg',
  },
  {
    id: 2,
    name: 'Luna',
    age:    { en: '8 weeks',  fr: '8 semaines' },
    gender: { en: 'Female',   fr: 'Femelle' },
    genderIcon: '♀',
    price: '2 100€',
    badge:  { en: 'Last Female', fr: 'Dernière femelle' },
    available: true,
    description: {
      en: "Luna is gentle, cuddly and very expressive. She follows her humans everywhere and is already house-trained. A true little princess.",
      fr: "Luna est douce, câline et très expressive. Elle suit ses humains partout et est déjà propre. Une vraie petite princesse.",
    },
    image: 'images/puppy2.jpg',
  },
  {
    id: 3,
    name: 'Max',
    age:    { en: '9 weeks',  fr: '9 semaines' },
    gender: { en: 'Male',     fr: 'Mâle' },
    genderIcon: '♂',
    price: '1 800€',
    badge:  { en: 'Available', fr: 'Disponible' },
    available: true,
    description: {
      en: "Max is the most playful of the litter. Energetic but docile, he learns very quickly. Ideal for active families.",
      fr: "Max est le plus joueur de la portée. Energique mais docile, il apprend très vite. Idéal pour les familles actives.",
    },
    image: 'images/puppy3.jpg',
  },
  {
    id: 4,
    name: 'Stella',
    age:    { en: '8 weeks',  fr: '8 semaines' },
    gender: { en: 'Female',   fr: 'Femelle' },
    genderIcon: '♀',
    price: '2 000€',
    badge:  { en: 'Available', fr: 'Disponible' },
    available: true,
    description: {
      en: "Stella is balanced and serene. She adapts perfectly to children, cats and other dogs. An ideal companion.",
      fr: "Stella est équilibrée et sereine. Elle s'adapte parfaitement aux enfants, aux chats et aux autres chiens. Une compagne idéale.",
    },
    image: 'images/puppy4.jpg',
  },
  {
    id: 5,
    name: 'Oscar',
    age:    { en: '8 weeks',  fr: '8 semaines' },
    gender: { en: 'Male',     fr: 'Mâle' },
    genderIcon: '♂',
    price: '1 800€',
    badge:  { en: 'Available', fr: 'Disponible' },
    available: true,
    description: {
      en: "Oscar is confident and cuddly. He loves to explore and adores tender moments. Socialized with young children.",
      fr: "Oscar est confiant et câlin. Il aime explorer et adore les moments de tendresse. Socialisé avec des enfants en bas âge.",
    },
    image: 'images/puppy5.jpg',
  },
  {
    id: 6,
    name: 'Nala',
    age:    { en: '9 weeks',  fr: '9 semaines' },
    gender: { en: 'Female',   fr: 'Femelle' },
    genderIcon: '♀',
    price: '2 200€',
    badge:  { en: 'Premium', fr: 'Premium' },
    available: true,
    description: {
      en: "Nala comes from champion show parents. Magnificent golden coat, exemplary character. For true breed enthusiasts.",
      fr: "Nala est issue de parents champions de beauté. Magnifique robe dorée, caractère exemplaire. Pour les passionnés de la race.",
    },
    image: 'images/puppy6.jpg',
  },
];

// ── Génération des cartes ──
function buildPuppyCard(puppy, index) {
  const lang   = currentLang;
  const t      = TRANSLATIONS[lang];
  const gender = puppy.gender[lang];
  const age    = puppy.age[lang];
  const badge  = puppy.available ? puppy.badge[lang] : t['puppy.reserved'];

  const waMsg  = t['puppy.wa_msg']
    .replace('{name}',   puppy.name)
    .replace('{gender}', gender)
    .replace('{age}',    age)
    .replace('{price}',  puppy.price);
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMsg)}`;

  const card = document.createElement('article');
  card.className = 'puppy-card reveal';
  card.style.animationDelay = `${index * 0.1}s`;
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `${puppy.name} — ${gender} — ${puppy.price}`);

  const badgeClass = puppy.available ? '' : 'puppy-card__badge--sold';

  card.innerHTML = `
    <div class="puppy-card__image">
      <img src="${puppy.image}" alt="Golden Retriever puppy ${puppy.name}" loading="lazy" />
      <span class="puppy-card__badge ${badgeClass}">${badge}</span>
      <span class="puppy-card__sex" title="${gender}">${puppy.genderIcon}</span>
    </div>
    <div class="puppy-card__body">
      <div class="puppy-card__meta">
        <span class="puppy-card__tag">${age}</span>
        <span class="puppy-card__tag">${gender}</span>
        <span class="puppy-card__tag">LOF</span>
      </div>
      <h3 class="puppy-card__name">${puppy.name}</h3>
      <p class="puppy-card__desc">${puppy.description[lang]}</p>
      <div class="puppy-card__footer">
        <div class="puppy-card__price">
          ${puppy.price}
          <span>${t['puppy.price_label']}</span>
        </div>
        <a href="${waLink}" target="_blank" class="btn btn--whatsapp" onclick="event.stopPropagation()">
          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          ${t['puppy.adopt_btn']}
        </a>
      </div>
    </div>
  `;

  card.addEventListener('click', () => window.open(waLink, '_blank', 'noopener,noreferrer'));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.open(waLink, '_blank', 'noopener,noreferrer');
    }
  });

  return card;
}

function renderPuppies() {
  const grid = document.getElementById('puppies-grid');
  if (!grid) return;
  grid.innerHTML = '';
  puppies.forEach((puppy, i) => grid.appendChild(buildPuppyCard(puppy, i)));
}

// ── Traduction ──
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('gp_lang', lang);
  document.documentElement.lang = lang;

  const t = TRANSLATIONS[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = lang === 'en' ? '🇫🇷 FR' : '🇬🇧 EN';

  renderPuppies();
  setTimeout(initReveal, 50);
}

function initLang() {
  const btn = document.getElementById('lang-toggle');
  if (btn) {
    btn.addEventListener('click', () => setLang(currentLang === 'en' ? 'fr' : 'en'));
  }
  setLang(currentLang);
}

// ── Header au scroll ──
function initHeader() {
  const header = document.getElementById('header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ── Menu burger (mobile) ──
function initBurger() {
  const burger = document.getElementById('burger');
  const nav    = document.getElementById('nav');
  if (!burger || !nav) return;

  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
      nav.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

// ── Scroll reveal ──
function initReveal() {
  const els = document.querySelectorAll('.reveal:not(.visible)');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => observer.observe(el));
}

// ── Compteurs animés ──
function animateCounters() {
  const counters = document.querySelectorAll('.stat__number[data-target]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const dur    = 1800;
      const step   = 16;
      const steps  = Math.ceil(dur / step);
      let current  = 0;
      const inc    = target / steps;
      const timer  = setInterval(() => {
        current += inc;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = Math.round(current);
      }, step);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

// ── FAQ accordion ──
function initFaq() {
  document.querySelectorAll('.faq__question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item   = btn.closest('.faq__item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq__item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

// ── Smooth scroll ──
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initBurger();
  initReveal();
  animateCounters();
  initFaq();
  initSmoothScroll();
  initLang();
});
