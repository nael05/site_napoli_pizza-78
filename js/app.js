/* ============================================================
   PIZZA NAPOLI — Application JavaScript
   ============================================================ */

'use strict';

/* ============================================================
   1. IMAGES UNSPLASH PAR CATÉGORIE
   ============================================================ */
const IMAGES = {
  hero:  'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1920&q=85',
  about: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85',

  pizzas: [
    'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1548369937-47519962c11a?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80',
  ],
  calzones: [
    'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80',
  ],
  formules: [
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
  ],
  desserts: [
    'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=600&q=80',
  ],
  boissons: [
    'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=600&q=80',
  ],
};

/* ============================================================
   2. MENU DATA
   ============================================================ */
const MENU_DATA = {
  restaurant: {
    name: "Pizza Napoli",
    address: "9, avenue de la Gare",
    zip: "78250",
    city: "Hardricourt",
    phone: "01 30 99 82 65",
    mobile: "06 81 93 35 06",
    hours: [
      { days: "Lundi – Mardi",    hours: "Fermé",           closed: true  },
      { days: "Mercredi – Jeudi", hours: "18h00 – 21h00",   closed: false },
      { days: "Vendredi – Samedi", hours: "18h00 – 22h00",  closed: false },
      { days: "Dimanche",          hours: "18h00 – 21h00",  closed: false },
    ],
  },
  categories: [
    { id: "pizzas",   label: "Nos Pizzas",  color: "#C0392B", accentBg: "rgba(192,57,43,0.15)"  },
    { id: "calzones", label: "Calzones",    color: "#8B4513", accentBg: "rgba(139,69,19,0.15)"  },
    { id: "formules", label: "Formules",    color: "#27AE60", accentBg: "rgba(39,174,96,0.15)"  },
    { id: "desserts", label: "Desserts",    color: "#8E44AD", accentBg: "rgba(142,68,173,0.15)" },
    { id: "boissons", label: "Boissons",    color: "#2980B9", accentBg: "rgba(41,128,185,0.15)" },
  ],
  items: [
    { id:1,  category:"pizzas",   name:"Margherita",         description:"Coulis de tomate, mozzarella, origan frais",                                                          price:9.50,  badge:null,           popular:false, vegetarian:true  },
    { id:2,  category:"pizzas",   name:"Reine",              description:"Tomate, mozzarella, jambon blanc, champignons de Paris",                                              price:11.50, badge:"Classique",    popular:true,  vegetarian:false },
    { id:3,  category:"pizzas",   name:"Napolitaine",        description:"Tomate, mozzarella, anchois, câpres, olives noires, origan",                                          price:11.00, badge:null,           popular:false, vegetarian:false },
    { id:4,  category:"pizzas",   name:"4 Fromages",         description:"Crème fraîche, mozzarella, gorgonzola, chèvre, emmental râpé",                                       price:12.00, badge:null,           popular:false, vegetarian:true  },
    { id:5,  category:"pizzas",   name:"Américaine",         description:"Tomate, mozzarella, poulet grillé, bacon croustillant, cheddar, oignons",                            price:12.50, badge:null,           popular:false, vegetarian:false },
    { id:6,  category:"pizzas",   name:"Steak Haché",        description:"Tomate, mozzarella, steak haché, oignons rouges, poivrons tricolores",                               price:12.00, badge:null,           popular:false, vegetarian:false },
    { id:7,  category:"pizzas",   name:"Villageoise",        description:"Tomate, mozzarella, lardons fumés, poivrons, oignons, olives",                                       price:11.50, badge:null,           popular:false, vegetarian:false },
    { id:8,  category:"pizzas",   name:"Italienne",          description:"Tomate, mozzarella, jambon cru de Parme, roquette fraîche, copeaux de parmesan",                    price:13.00, badge:"Chef",         popular:true,  vegetarian:false },
    { id:9,  category:"pizzas",   name:"Pacifique",          description:"Crème fraîche, mozzarella, crevettes roses, champignons, poireaux fondus",                          price:13.50, badge:null,           popular:false, vegetarian:false },
    { id:10, category:"pizzas",   name:"Spéciale Pizzaïolo", description:"Tomate, mozzarella, jambon, champignons, poivrons, olives, œuf frais",                              price:13.00, badge:"Maison",       popular:true,  vegetarian:false },
    { id:11, category:"pizzas",   name:"Savoyarde",          description:"Crème fraîche, mozzarella, pommes de terre, lardons fumés, reblochon fondu",                        price:13.50, badge:null,           popular:false, vegetarian:false },
    { id:12, category:"pizzas",   name:"Meulanaise",         description:"Tomate, mozzarella, merguez, poivrons grillés, oignons rouges",                                     price:12.50, badge:null,           popular:false, vegetarian:false },
    { id:13, category:"pizzas",   name:"Gaillonnaise",       description:"Crème fraîche, mozzarella, chèvre frais, miel d'acacia, noix de Grenoble",                          price:12.50, badge:null,           popular:false, vegetarian:true  },
    { id:14, category:"pizzas",   name:"Curasso",            description:"Tomate, mozzarella, poulet mariné, ananas frais, curry doux",                                       price:12.00, badge:null,           popular:false, vegetarian:false },
    { id:15, category:"pizzas",   name:"Raclette",           description:"Crème fraîche, mozzarella, pommes de terre vapeur, jambon, fromage à raclette",                     price:13.50, badge:null,           popular:false, vegetarian:false },
    { id:16, category:"pizzas",   name:"Boursinoise",        description:"Crème, mozzarella, pommes de terre, jambon, poulet rôti, Boursin ail & fines herbes, olives, origan",price:13.50, badge:"Coup de cœur", popular:true,  vegetarian:false },
    { id:17, category:"pizzas",   name:"À Composer",         description:"Choisissez vos ingrédients sur une base Margherita. Parlez-nous de votre création !",               price:9.50,  priceLabel:"à partir de", badge:null, popular:false, vegetarian:null },
    { id:18, category:"calzones", name:"Calzone Simple",     description:"Tomate, mozzarella, jambon — pâte soufflée dorée croustillante",                                    price:11.00, badge:null,           popular:false, vegetarian:false },
    { id:19, category:"calzones", name:"Calzone Complète",   description:"Tomate, mozzarella, jambon, champignons, œuf, olives — pâte soufflée croustillante",                price:13.00, badge:"Populaire",    popular:true,  vegetarian:false },
    { id:20, category:"formules", name:"Formule Duo Junior", description:"2 pizzas Reine Junior + 2 boissons au choix (33 cl). Idéal pour les enfants !",                     price:17.00, badge:"Économique",   popular:false, vegetarian:false },
    { id:21, category:"desserts", name:"Tiramisu Maison",    description:"Recette traditionnelle italienne — mascarpone crémeux, café espresso, biscuits cuillère, cacao amer",price:4.50,  badge:"Fait maison",  popular:true,  vegetarian:true  },
    { id:22, category:"boissons", name:"Coca-Cola",          description:"Canette 33 cl",                                                                                      price:2.50,  badge:null,           popular:false, vegetarian:true  },
    { id:23, category:"boissons", name:"Coca-Cola Zero",     description:"Canette 33 cl",                                                                                      price:2.50,  badge:null,           popular:false, vegetarian:true  },
    { id:24, category:"boissons", name:"Fanta Orange",       description:"Canette 33 cl",                                                                                      price:2.50,  badge:null,           popular:false, vegetarian:true  },
    { id:25, category:"boissons", name:"Sprite",             description:"Canette 33 cl",                                                                                      price:2.50,  badge:null,           popular:false, vegetarian:true  },
    { id:26, category:"boissons", name:"Eau Plate",          description:"Bouteille 50 cl",                                                                                    price:1.50,  badge:null,           popular:false, vegetarian:true  },
    { id:27, category:"boissons", name:"Eau Pétillante",     description:"Bouteille 50 cl",                                                                                    price:1.50,  badge:null,           popular:false, vegetarian:true  },
    { id:28, category:"boissons", name:"Jus d'Orange",       description:"Brique 25 cl, 100 % pur jus",                                                                       price:2.00,  badge:null,           popular:false, vegetarian:true  },
    { id:29, category:"boissons", name:"Bière Kronenbourg",  description:"Canette 33 cl",                                                                                      price:3.00,  badge:null,           popular:false, vegetarian:true  },
  ],
};

/* ============================================================
   3. PERSISTANCE localStorage
   ============================================================ */
const STORAGE_KEY = 'pizzanapoli_menu_v1';

function getMenuItems() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return MENU_DATA.items;
}

/* ============================================================
   4. HELPERS
   ============================================================ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function formatPrice(price) {
  return price.toFixed(2).replace('.', ',') + ' €';
}

function getCategoryMeta(id) {
  return MENU_DATA.categories.find(c => c.id === id) || {};
}

function getItemImage(item) {
  if (item.imageUrl) return item.imageUrl;
  const pool = IMAGES[item.category] || IMAGES.pizzas;
  return pool[item.id % pool.length];
}

/* ============================================================
   4. MENU RENDERING
   ============================================================ */
function buildCard(item) {
  const cat   = getCategoryMeta(item.category);
  const imgSrc = getItemImage(item);

  const badgeHTML = item.badge
    ? `<span class="card__badge">${item.badge}</span>`
    : '';

  const tagsHTML = (() => {
    const tags = [];
    if (item.vegetarian === true) tags.push('<span class="card__tag card__tag--veg">Végétarien</span>');
    if (item.popular)             tags.push('<span class="card__tag card__tag--popular">Populaire</span>');
    return tags.length ? `<div class="card__tags">${tags.join('')}</div>` : '<div></div>';
  })();

  const priceLabelHTML = item.priceLabel
    ? `<span class="card__price-label">${item.priceLabel}</span>`
    : '';

  const isRupture = item.rupture === true;
  const ruptureClass = isRupture ? ' menu-card--rupture' : '';
  const ruptureOverlay = isRupture
    ? `<div class="card__rupture-overlay" aria-label="Indisponible">Rupture de stock</div>`
    : '';
  const priceHTML = isRupture
    ? `<div class="card__price card__price--rupture">Indisponible</div>`
    : `${priceLabelHTML}<div class="card__price">${formatPrice(item.price)}</div>`;

  return `
    <article class="menu-card menu-card--cat-${item.category} menu-card--entering${ruptureClass}"
             style="--card-accent:${cat.color};"
             data-category="${item.category}"
             data-id="${item.id}">
      <div class="card__img-wrap">
        <img
          src="${imgSrc}"
          alt="${item.name} — Pizza Napoli Hardricourt"
          class="card__img"
          loading="lazy"
          width="600"
          height="220"
        >
        ${ruptureOverlay}
        ${badgeHTML}
      </div>
      <div class="card__inner">
        <h3 class="card__name">${item.name}</h3>
        <p class="card__description">${item.description}</p>
        <div class="card__footer">
          ${tagsHTML}
          <div class="card__price-wrap">
            ${priceHTML}
          </div>
        </div>
      </div>
    </article>`;
}

function renderMenu(filter = 'all') {
  const grid = $('#menuGrid');
  if (!grid) return;

  const allItems = getMenuItems();
  const items = filter === 'all'
    ? allItems
    : allItems.filter(i => i.category === filter);

  const grouped = {};
  items.forEach(item => {
    if (!grouped[item.category]) grouped[item.category] = [];
    grouped[item.category].push(item);
  });

  let html = '';
  MENU_DATA.categories.forEach(cat => {
    if (!grouped[cat.id]) return;
    if (filter === 'all') {
      html += `
        <div class="menu-category-header">
          <h3 style="--cat-color:${cat.color}">${cat.label}</h3>
        </div>`;
    }
    grouped[cat.id].forEach(item => { html += buildCard(item); });
  });

  grid.innerHTML = html;

  // Stagger entry animation
  $$('.menu-card--entering', grid).forEach((card, i) => {
    card.style.animationDelay = `${i * 0.04}s`;
  });
}

/* ============================================================
   5. HERO BACKGROUND IMAGE
   ============================================================ */
function injectHeroImage() {
  const hero = $('.hero');
  if (!hero) return;
  hero.style.backgroundImage = [
    'linear-gradient(to bottom, rgba(10,10,10,0.72) 0%, rgba(10,10,10,0.42) 55%, rgba(10,10,10,0.80) 100%)',
    `url('${IMAGES.hero}')`,
  ].join(', ');
  hero.style.backgroundSize    = 'cover';
  hero.style.backgroundPosition = 'center';
}

/* ============================================================
   6. ABOUT IMAGE
   ============================================================ */
function injectAboutImage() {
  const wrap = $('.about__image-bg');
  if (!wrap) return;
  const img = document.createElement('img');
  img.src    = IMAGES.about;
  img.alt    = "Préparation de pizza artisanale — Pizza Napoli Hardricourt";
  img.width  = 380;
  img.height = 380;
  img.style.cssText = 'width:100%;height:100%;object-fit:cover;border-radius:50%;display:block;';
  img.loading = 'lazy';
  wrap.innerHTML = '';
  wrap.appendChild(img);
}

/* ============================================================
   7. MENU FILTERING
   ============================================================ */
function initFilters() {
  const filtersEl = $('#menuFilters');
  if (!filtersEl) return;

  filtersEl.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    $$('.filter-btn', filtersEl).forEach(b => {
      b.classList.remove('filter-btn--active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('filter-btn--active');
    btn.setAttribute('aria-pressed', 'true');
    renderMenu(btn.dataset.filter);
  });
}

/* ============================================================
   8. STICKY HEADER
   ============================================================ */
function initHeader() {
  const header = $('#header');
  if (!header) return;

  let lastY = window.scrollY;

  const onScroll = () => {
    const y = window.scrollY;

    // Fond verre au-delà de 60px
    header.classList.toggle('header--scrolled', y > 60);

    // Rétractable : masque en scroll bas, réapparaît en scroll haut
    // Zone morte de 6px pour éviter le micro-jitter
    if (y > 120) {
      if (y > lastY + 6) {
        header.classList.add('header--hidden');
      } else if (y < lastY - 6) {
        header.classList.remove('header--hidden');
      }
    } else {
      header.classList.remove('header--hidden');
    }

    lastY = y;
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ============================================================
   9. MOBILE MENU
   ============================================================ */
function initMobileMenu() {
  const toggleBtn = $('#navToggle');
  const mobileMenu = $('#navMobile');
  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    toggleBtn.classList.toggle('open', isOpen);
    toggleBtn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  $$('.nav__link', mobileMenu).forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      toggleBtn.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', false);
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('click', e => {
    if (!toggleBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove('open');
      toggleBtn.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* ============================================================
   10. ACTIVE NAV ON SCROLL
   ============================================================ */
function initActiveNav() {
  const links = $$('.nav__link[href^="#"]');
  if (!links.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  $$('section[id]').forEach(s => observer.observe(s));
}

/* ============================================================
   11. SCROLL REVEAL
   ============================================================ */
function initScrollReveal() {
  const targets = $$('.reveal, .stagger-children');
  if (!targets.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => observer.observe(el));
}

/* ============================================================
   12. BACK TO TOP
   ============================================================ */
function initBackToTop() {
  const btn = $('#backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ============================================================
   13. SMOOTH SCROLL
   ============================================================ */
function initSmoothScroll() {
  document.addEventListener('click', e => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    const target = document.getElementById(anchor.getAttribute('href').slice(1));
    if (!target) return;
    e.preventDefault();
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 72;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH, behavior: 'smooth' });
  });
}

/* ============================================================
   14. OUVERT / FERMÉ
   ============================================================ */
function isCurrentlyOpen() {
  const now  = new Date();
  const day  = now.getDay();
  const time = now.getHours() * 60 + now.getMinutes();
  if (day === 1 || day === 2) return false;
  if (day === 5 || day === 6) return time >= 18 * 60 && time < 22 * 60;
  return time >= 18 * 60 && time < 21 * 60;
}

function injectOpenStatus() {
  const badge = $('#openBadge');
  if (!badge) return;
  const open = isCurrentlyOpen();
  badge.textContent = open ? 'Ouvert maintenant' : 'Fermé actuellement';
  badge.className   = `open-badge open-badge--${open ? 'open' : 'closed'}`;
}

/* ============================================================
   15. INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  injectHeroImage();
  injectAboutImage();
  renderMenu('all');
  initFilters();
  initHeader();
  initMobileMenu();
  initActiveNav();
  initScrollReveal();
  initBackToTop();
  initSmoothScroll();
  injectOpenStatus();
});
