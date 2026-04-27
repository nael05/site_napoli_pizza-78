'use strict';
/* ============================================================
   PIZZA NAPOLI — Panneau d'administration
   Données stockées en localStorage. Mot de passe : napoli2025
   ============================================================ */

const STORAGE_KEY    = 'pizzanapoli_menu_v1';
const AUTH_KEY       = 'pizzanapoli_auth';
const ADMIN_PASSWORD = 'napoli2025';

/* ============================================================
   Données par défaut (copiées depuis app.js pour le fallback)
   ============================================================ */
const DEFAULT_ITEMS = [
  { id:1,  category:"pizzas",   name:"Margherita",          description:"Coulis de tomate, mozzarella, origan frais",                                                           price:9.50,  badge:null,            popular:false, vegetarian:true,  rupture:false },
  { id:2,  category:"pizzas",   name:"Reine",               description:"Tomate, mozzarella, jambon blanc, champignons de Paris",                                               price:11.50, badge:"Classique",     popular:true,  vegetarian:false, rupture:false },
  { id:3,  category:"pizzas",   name:"Napolitaine",         description:"Tomate, mozzarella, anchois, câpres, olives noires, origan",                                           price:11.00, badge:null,            popular:false, vegetarian:false, rupture:false },
  { id:4,  category:"pizzas",   name:"4 Fromages",          description:"Crème fraîche, mozzarella, gorgonzola, chèvre, emmental râpé",                                        price:12.00, badge:null,            popular:false, vegetarian:true,  rupture:false },
  { id:5,  category:"pizzas",   name:"Américaine",          description:"Tomate, mozzarella, poulet grillé, bacon croustillant, cheddar, oignons",                             price:12.50, badge:null,            popular:false, vegetarian:false, rupture:false },
  { id:6,  category:"pizzas",   name:"Steak Haché",         description:"Tomate, mozzarella, steak haché, oignons rouges, poivrons tricolores",                                price:12.00, badge:null,            popular:false, vegetarian:false, rupture:false },
  { id:7,  category:"pizzas",   name:"Villageoise",         description:"Tomate, mozzarella, lardons fumés, poivrons, oignons, olives",                                        price:11.50, badge:null,            popular:false, vegetarian:false, rupture:false },
  { id:8,  category:"pizzas",   name:"Italienne",           description:"Tomate, mozzarella, jambon cru de Parme, roquette fraîche, copeaux de parmesan",                     price:13.00, badge:"Chef",          popular:true,  vegetarian:false, rupture:false },
  { id:9,  category:"pizzas",   name:"Pacifique",           description:"Crème fraîche, mozzarella, crevettes roses, champignons, poireaux fondus",                           price:13.50, badge:null,            popular:false, vegetarian:false, rupture:false },
  { id:10, category:"pizzas",   name:"Spéciale Pizzaïolo",  description:"Tomate, mozzarella, jambon, champignons, poivrons, olives, œuf frais",                               price:13.00, badge:"Maison",        popular:true,  vegetarian:false, rupture:false },
  { id:11, category:"pizzas",   name:"Savoyarde",           description:"Crème fraîche, mozzarella, pommes de terre, lardons fumés, reblochon fondu",                         price:13.50, badge:null,            popular:false, vegetarian:false, rupture:false },
  { id:12, category:"pizzas",   name:"Meulanaise",          description:"Tomate, mozzarella, merguez, poivrons grillés, oignons rouges",                                      price:12.50, badge:null,            popular:false, vegetarian:false, rupture:false },
  { id:13, category:"pizzas",   name:"Gaillonnaise",        description:"Crème fraîche, mozzarella, chèvre frais, miel d'acacia, noix de Grenoble",                           price:12.50, badge:null,            popular:false, vegetarian:true,  rupture:false },
  { id:14, category:"pizzas",   name:"Curasso",             description:"Tomate, mozzarella, poulet mariné, ananas frais, curry doux",                                        price:12.00, badge:null,            popular:false, vegetarian:false, rupture:false },
  { id:15, category:"pizzas",   name:"Raclette",            description:"Crème fraîche, mozzarella, pommes de terre vapeur, jambon, fromage à raclette",                      price:13.50, badge:null,            popular:false, vegetarian:false, rupture:false },
  { id:16, category:"pizzas",   name:"Boursinoise",         description:"Crème, mozzarella, pommes de terre, jambon, poulet rôti, Boursin ail & fines herbes, olives, origan", price:13.50, badge:"Coup de cœur", popular:true,  vegetarian:false, rupture:false },
  { id:17, category:"pizzas",   name:"À Composer",          description:"Choisissez vos ingrédients sur une base Margherita. Parlez-nous de votre création !",                price:9.50,  priceLabel:"à partir de", badge:null, popular:false, vegetarian:null, rupture:false },
  { id:18, category:"calzones", name:"Calzone Simple",      description:"Tomate, mozzarella, jambon — pâte soufflée dorée croustillante",                                     price:11.00, badge:null,            popular:false, vegetarian:false, rupture:false },
  { id:19, category:"calzones", name:"Calzone Complète",    description:"Tomate, mozzarella, jambon, champignons, œuf, olives — pâte soufflée croustillante",                 price:13.00, badge:"Populaire",     popular:true,  vegetarian:false, rupture:false },
  { id:20, category:"formules", name:"Formule Duo Junior",  description:"2 pizzas Reine Junior + 2 boissons au choix (33 cl). Idéal pour les enfants !",                      price:17.00, badge:"Économique",    popular:false, vegetarian:false, rupture:false },
  { id:21, category:"desserts", name:"Tiramisu Maison",     description:"Recette traditionnelle italienne — mascarpone crémeux, café espresso, biscuits cuillère, cacao amer", price:4.50, badge:"Fait maison",   popular:true,  vegetarian:true,  rupture:false },
  { id:22, category:"boissons", name:"Coca-Cola",           description:"Canette 33 cl",   price:2.50, badge:null, popular:false, vegetarian:true,  rupture:false },
  { id:23, category:"boissons", name:"Coca-Cola Zero",      description:"Canette 33 cl",   price:2.50, badge:null, popular:false, vegetarian:true,  rupture:false },
  { id:24, category:"boissons", name:"Fanta Orange",        description:"Canette 33 cl",   price:2.50, badge:null, popular:false, vegetarian:true,  rupture:false },
  { id:25, category:"boissons", name:"Sprite",              description:"Canette 33 cl",   price:2.50, badge:null, popular:false, vegetarian:true,  rupture:false },
  { id:26, category:"boissons", name:"Eau Plate",           description:"Bouteille 50 cl", price:1.50, badge:null, popular:false, vegetarian:true,  rupture:false },
  { id:27, category:"boissons", name:"Eau Pétillante",      description:"Bouteille 50 cl", price:1.50, badge:null, popular:false, vegetarian:true,  rupture:false },
  { id:28, category:"boissons", name:"Jus d'Orange",        description:"Brique 25 cl, 100 % pur jus", price:2.00, badge:null, popular:false, vegetarian:true, rupture:false },
  { id:29, category:"boissons", name:"Bière Kronenbourg",   description:"Canette 33 cl",   price:3.00, badge:null, popular:false, vegetarian:true,  rupture:false },
];

const CATEGORIES = [
  { id:'pizzas',   label:'Pizzas'   },
  { id:'calzones', label:'Calzones' },
  { id:'formules', label:'Formules' },
  { id:'desserts', label:'Desserts' },
  { id:'boissons', label:'Boissons' },
];

/* ============================================================
   État
   ============================================================ */
let items      = [];
let editingId  = null;
let filterCat  = 'all';
let searchQ    = '';
let pendingDeleteId = null;

/* ============================================================
   Persistance
   ============================================================ */
function loadItems() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length) return parsed;
    }
  } catch (e) {}
  return JSON.parse(JSON.stringify(DEFAULT_ITEMS));
}

function saveItems() {
  try {
    const data = JSON.stringify(items);
    localStorage.setItem(STORAGE_KEY, data);
    const kb = Math.round(data.length / 1024);
    if (kb > 3500) showToast(`Stockage : ~${kb} Ko / ~5000 Ko max. Réduisez les images.`, 'error');
  } catch (e) {
    showToast('Stockage plein ! Supprimez des images pour libérer de la place.', 'error');
  }
}

function nextId() {
  return items.length ? Math.max(...items.map(i => i.id)) + 1 : 1;
}

/* ============================================================
   Auth
   ============================================================ */
function isAuth() {
  return localStorage.getItem(AUTH_KEY) === 'true';
}

function login(pw) {
  if (pw === ADMIN_PASSWORD) {
    localStorage.setItem(AUTH_KEY, 'true');
    return true;
  }
  return false;
}

function logout() {
  localStorage.removeItem(AUTH_KEY);
  showLoginScreen();
}

/* ============================================================
   Stats
   ============================================================ */
function updateStats() {
  const total    = items.length;
  const rupture  = items.filter(i => i.rupture).length;
  const dispo    = total - rupture;

  document.getElementById('statTotal').textContent   = total;
  document.getElementById('statDispo').textContent   = dispo;
  document.getElementById('statRupture').textContent = rupture;
}

/* ============================================================
   Rendu du tableau
   ============================================================ */
function getFilteredItems() {
  return items.filter(item => {
    const matchCat    = filterCat === 'all' || item.category === filterCat;
    const matchSearch = !searchQ || item.name.toLowerCase().includes(searchQ.toLowerCase())
                                  || item.description.toLowerCase().includes(searchQ.toLowerCase());
    return matchCat && matchSearch;
  });
}

function renderTable() {
  const tbody  = document.getElementById('tableBody');
  const empty  = document.getElementById('emptyState');
  const list   = getFilteredItems();

  updateStats();

  if (!list.length) {
    tbody.innerHTML = '';
    empty.hidden = false;
    return;
  }
  empty.hidden = true;

  tbody.innerHTML = list.map(item => {
    const catLabel = CATEGORIES.find(c => c.id === item.category)?.label || item.category;
    const ruptureClass = item.rupture ? 'row--rupture' : '';
    const ruptureBtn   = item.rupture
      ? `<button class="btn-icon btn-icon--green" onclick="toggleRupture(${item.id})" title="Remettre en stock">Remettre</button>`
      : `<button class="btn-icon btn-icon--orange" onclick="toggleRupture(${item.id})" title="Mettre en rupture">Rupture</button>`;

    return `
      <tr class="${ruptureClass}" data-id="${item.id}">
        <td>
          <span class="item-name">${item.name}</span>
          ${item.badge ? `<span class="row-badge">${item.badge}</span>` : ''}
          <span class="cat-pill cat-${item.category} cat-pill--inline">${catLabel}</span>
        </td>
        <td><span class="cat-pill cat-${item.category}">${catLabel}</span></td>
        <td class="price-cell">${item.price.toFixed(2).replace('.', ',')} €</td>
        <td>
          ${item.rupture
            ? '<span class="status-pill status-pill--rupture">Rupture</span>'
            : '<span class="status-pill status-pill--dispo">Disponible</span>'
          }
        </td>
        <td class="actions-cell">
          <button class="btn-icon btn-icon--blue" onclick="openModal(${item.id})" title="Modifier">Modifier</button>
          ${ruptureBtn}
          <button class="btn-icon btn-icon--red" onclick="confirmDelete(${item.id})" title="Supprimer">Supprimer</button>
        </td>
      </tr>`;
  }).join('');
}

/* ============================================================
   Modal Ajout / Modification
   ============================================================ */
function openModal(id = null) {
  editingId = id;
  const modal  = document.getElementById('modal');
  const title  = document.getElementById('modalTitle');
  const form   = document.getElementById('itemForm');

  form.reset();
  clearImage();
  setImgTab('upload');
  document.getElementById('fImageUrl').value = '';

  if (id !== null) {
    const item = items.find(i => i.id === id);
    if (!item) return;
    title.textContent = `Modifier : ${item.name}`;
    form.elements['name'].value        = item.name;
    form.elements['category'].value    = item.category;
    form.elements['description'].value = item.description;
    form.elements['price'].value       = item.price;
    form.elements['priceLabel'].value  = item.priceLabel || '';
    form.elements['badge'].value       = item.badge || '';
    form.elements['popular'].checked   = !!item.popular;
    form.elements['vegetarian'].value  = item.vegetarian === true ? 'true' : item.vegetarian === false ? 'false' : 'null';
    form.elements['rupture'].checked   = !!item.rupture;

    if (item.imageUrl) {
      if (item.imageUrl.startsWith('data:')) {
        document.getElementById('imageUrlValue').value = item.imageUrl;
        document.getElementById('imgThumb').src        = item.imageUrl;
        document.getElementById('imgFileName').textContent = 'Image enregistrée';
        const kb = Math.round(item.imageUrl.length * 0.75 / 1024);
        document.getElementById('imgFileMeta').textContent = `~${kb} Ko`;
        document.getElementById('imgPreviewRow').hidden = false;
        document.getElementById('imgDropZone').hidden   = true;
      } else {
        setImgTab('url');
        document.getElementById('fImageUrl').value        = item.imageUrl;
        document.getElementById('imageUrlValue').value    = item.imageUrl;
      }
    }
  } else {
    title.textContent = 'Ajouter un plat';
    form.elements['vegetarian'].value = 'null';
  }

  modal.hidden = false;
  form.elements['name'].focus();
}

function closeModal() {
  document.getElementById('modal').hidden = true;
  editingId = null;
}

function saveItem(e) {
  e.preventDefault();
  const form = document.getElementById('itemForm');
  const fd   = new FormData(form);

  const price = parseFloat(fd.get('price'));
  if (isNaN(price) || price < 0) {
    showToast('Le prix doit être un nombre positif.', 'error');
    return;
  }

  const vegRaw    = fd.get('vegetarian');
  const vegetarian = vegRaw === 'true' ? true : vegRaw === 'false' ? false : null;

  const payload = {
    name:        fd.get('name').trim(),
    category:    fd.get('category'),
    description: fd.get('description').trim(),
    price,
    priceLabel:  fd.get('priceLabel').trim() || null,
    badge:       fd.get('badge').trim() || null,
    popular:     form.elements['popular'].checked,
    vegetarian,
    rupture:     form.elements['rupture'].checked,
    imageUrl:    fd.get('imageUrl').trim() || null,
  };

  if (!payload.name) { showToast('Le nom est obligatoire.', 'error'); return; }

  if (editingId !== null) {
    const idx = items.findIndex(i => i.id === editingId);
    if (idx !== -1) items[idx] = { ...items[idx], ...payload };
    showToast(`"${payload.name}" modifié avec succès.`);
  } else {
    items.push({ id: nextId(), ...payload });
    showToast(`"${payload.name}" ajouté avec succès.`);
  }

  saveItems();
  renderTable();
  closeModal();
}

/* ============================================================
   Upload d'image (compression canvas côté client)
   ============================================================ */
function setImgTab(tab) {
  const isUpload = tab === 'upload';
  document.getElementById('imgTabUpload').classList.toggle('active', isUpload);
  document.getElementById('imgTabUrl').classList.toggle('active', !isUpload);
  document.getElementById('imgUploadPane').hidden = !isUpload;
  document.getElementById('imgUrlPane').hidden    = isUpload;
  if (!isUpload) {
    document.getElementById('imageUrlValue').value = document.getElementById('fImageUrl').value.trim();
  }
}

function compressImage(file, maxPx, quality) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => {
      const img = new Image();
      img.onload = () => {
        const ratio  = Math.min(maxPx / img.width, maxPx / img.height, 1);
        const w      = Math.round(img.width  * ratio);
        const h      = Math.round(img.height * ratio);
        const canvas = document.createElement('canvas');
        canvas.width  = w;
        canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve({ dataUrl, w, h, kb: Math.round(dataUrl.length * 0.75 / 1024) });
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function handleImageFile(file) {
  if (!file || !file.type.startsWith('image/')) {
    showToast('Sélectionnez une image (JPG, PNG, WebP…)', 'error');
    return;
  }
  try {
    const { dataUrl, w, h, kb } = await compressImage(file, 800, 0.78);
    document.getElementById('imageUrlValue').value      = dataUrl;
    document.getElementById('imgThumb').src             = dataUrl;
    document.getElementById('imgFileName').textContent  = file.name;
    document.getElementById('imgFileMeta').textContent  = `${w}×${h} px · ~${kb} Ko`;
    document.getElementById('imgPreviewRow').hidden     = false;
    document.getElementById('imgDropZone').hidden       = true;
    if (kb > 600) showToast('Image volumineuse — elle sera sauvegardée mais préférez des photos plus légères.', 'error');
  } catch (err) {
    showToast('Impossible de traiter cette image.', 'error');
  }
}

function clearImage() {
  document.getElementById('imageUrlValue').value      = '';
  document.getElementById('imgThumb').src             = '';
  document.getElementById('imgFileName').textContent  = '';
  document.getElementById('imgFileMeta').textContent  = '';
  document.getElementById('imgPreviewRow').hidden     = true;
  document.getElementById('imgDropZone').hidden       = false;
  document.getElementById('imgFileInput').value       = '';
}

/* ============================================================
   Rupture
   ============================================================ */
function toggleRupture(id) {
  const item = items.find(i => i.id === id);
  if (!item) return;
  item.rupture = !item.rupture;
  saveItems();
  renderTable();
  showToast(item.rupture
    ? `"${item.name}" mis en rupture.`
    : `"${item.name}" remis en stock.`
  );
}

/* ============================================================
   Suppression
   ============================================================ */
function confirmDelete(id) {
  const item = items.find(i => i.id === id);
  if (!item) return;
  pendingDeleteId = id;
  document.getElementById('deleteItemName').textContent = item.name;
  document.getElementById('deleteModal').hidden = false;
}

function cancelDelete() {
  pendingDeleteId = null;
  document.getElementById('deleteModal').hidden = true;
}

function doDelete() {
  if (pendingDeleteId === null) return;
  const item = items.find(i => i.id === pendingDeleteId);
  items = items.filter(i => i.id !== pendingDeleteId);
  saveItems();
  renderTable();
  cancelDelete();
  if (item) showToast(`"${item.name}" supprimé.`);
}

/* ============================================================
   Export JSON
   ============================================================ */
function exportJSON() {
  const blob = new Blob([JSON.stringify(items, null, 2)], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = 'menu-pizzanapoli.json';
  a.click();
  URL.revokeObjectURL(url);
  showToast('Export JSON téléchargé.');
}

/* ============================================================
   Reset aux données par défaut
   ============================================================ */
function resetToDefault() {
  if (!confirm('Réinitialiser le menu aux données d\'origine ? Toutes vos modifications seront perdues.')) return;
  items = JSON.parse(JSON.stringify(DEFAULT_ITEMS));
  saveItems();
  renderTable();
  showToast('Menu réinitialisé aux données d\'origine.');
}

/* ============================================================
   Toast notification
   ============================================================ */
function showToast(msg, type = 'success') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.classList.add('toast--visible'), 10);
  setTimeout(() => {
    toast.classList.remove('toast--visible');
    setTimeout(() => toast.remove(), 350);
  }, 3200);
}

/* ============================================================
   Écrans Login / App
   ============================================================ */
function showLoginScreen() {
  document.getElementById('loginScreen').hidden  = false;
  document.getElementById('appScreen').hidden    = true;
}

function showAppScreen() {
  document.getElementById('loginScreen').hidden  = true;
  document.getElementById('appScreen').hidden    = false;
  items = loadItems();
  renderTable();
}

/* ============================================================
   Init
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Auth gate
  if (isAuth()) {
    showAppScreen();
  } else {
    showLoginScreen();
  }

  // Login form
  document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    const pw = document.getElementById('passwordInput').value;
    if (login(pw)) {
      showAppScreen();
      document.getElementById('loginError').hidden = true;
    } else {
      document.getElementById('loginError').hidden = false;
      document.getElementById('passwordInput').value = '';
      document.getElementById('passwordInput').focus();
    }
  });

  // Item form
  document.getElementById('itemForm').addEventListener('submit', saveItem);

  // Search
  document.getElementById('searchInput').addEventListener('input', e => {
    searchQ = e.target.value;
    renderTable();
  });

  // Category filter
  document.getElementById('catFilter').addEventListener('change', e => {
    filterCat = e.target.value;
    renderTable();
  });

  // Close modal on backdrop click
  document.getElementById('modal').addEventListener('click', e => {
    if (e.target === document.getElementById('modal')) closeModal();
  });

  // Keyboard: Escape closes modals
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeModal();
      cancelDelete();
    }
  });

  // Image file input
  document.getElementById('imgFileInput').addEventListener('change', e => {
    if (e.target.files[0]) handleImageFile(e.target.files[0]);
  });

  // URL field → sync hidden input
  document.getElementById('fImageUrl').addEventListener('input', e => {
    document.getElementById('imageUrlValue').value = e.target.value.trim();
  });

  // Drag-and-drop on upload zone
  const dropZone = document.getElementById('imgDropZone');
  ['dragenter', 'dragover'].forEach(ev =>
    dropZone.addEventListener(ev, e => { e.preventDefault(); dropZone.classList.add('drag-over'); })
  );
  ['dragleave', 'drop'].forEach(ev =>
    dropZone.addEventListener(ev, e => { e.preventDefault(); dropZone.classList.remove('drag-over'); })
  );
  dropZone.addEventListener('drop', e => {
    const file = e.dataTransfer?.files[0];
    if (file) handleImageFile(file);
  });
});
