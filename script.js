/* ============================================================
   Orenji Landing — dados das apps + ecossistema (tiles e modal)
   Status por app: "soon" (chip "Em breve") ou "live" (CTA real).
   ============================================================ */

const APPS = [
  {
    id: "fitness",
    name: "Orenji Fitness",
    icon: "assets/fitness-logo.webp",
    accent: "#ff7a00",
    status: "soon",
    url: "https://orenji-project.github.io/orenji-fitness-app/",
    tagline: { pt: "Movimento e bem-estar", en: "Movement and well-being" },
    description: {
      pt: "Uma aplicação para organizar os treinos e acompanhar a evolução com mais clareza.",
      en: "An app to organize workouts and track progress with more clarity.",
    },
  },
  {
    id: "study",
    name: "Orenji Study",
    icon: "assets/study-logo.webp",
    accent: "#3b82f6",
    status: "soon",
    url: "https://orenji-project.github.io/Orenji-Study/",
    tagline: { pt: "Estudo organizado", en: "Organized study" },
    description: {
      pt: "Um espaço para manter os horários, notas e tarefas de estudo no mesmo lugar.",
      en: "A space to keep study schedules, notes and tasks in one place.",
    },
  },
  {
    id: "recipes",
    name: "Orenji Recipes",
    icon: "assets/recipes-logo.webp",
    accent: "#f59e0b",
    status: "soon",
    url: "https://orenji-project.github.io/Orenji-Recipes/",
    tagline: { pt: "Receitas e cozinha", en: "Recipes and cooking" },
    description: {
      pt: "Receitas e ferramentas para tornar a preparação das refeições mais simples.",
      en: "Recipes and tools to make everyday cooking simpler.",
    },
  },
  {
    id: "focus",
    name: "Orenji Focus",
    icon: "assets/focus-logo.webp",
    accent: "#43836a",
    status: "soon",
    url: "https://orenji-project.github.io/Orenji-Focus/",
    tagline: { pt: "Foco e tempo", en: "Focus and time" },
    description: {
      pt: "Uma forma mais tranquila de organizar tarefas e criar sessões de foco.",
      en: "A calmer way to organize tasks and create focus sessions.",
    },
  },
  {
    id: "habit",
    name: "Orenji Habit",
    icon: "assets/habit-logo.webp",
    accent: "#a855f7",
    status: "soon",
    url: "https://orenji-project.github.io/Orenji-Habit/",
    tagline: { pt: "Hábitos diários", en: "Daily habits" },
    description: {
      pt: "Pequenos hábitos acompanhados de forma simples, consistente e pessoal.",
      en: "Small habits tracked in a simple, consistent and personal way.",
    },
  },
];

const COPY = {
  pt: {
    soon: "Em breve",
    open: "Abrir app",
    close: "Fechar",
  },
  en: {
    soon: "Coming soon",
    open: "Open app",
    close: "Close",
  },
};

const lang = (document.documentElement.getAttribute("lang") || "pt")
  .toLowerCase()
  .startsWith("en") ? "en" : "pt";
const T = COPY[lang];

const appGrid = document.querySelector("[data-app-list]");
const modal = document.querySelector("dialog[data-modal]");
const modalCard = modal.querySelector(".modal-card");
const modalIcon = modal.querySelector("[data-modal-icon]");
const modalTitle = modal.querySelector("[data-modal-title]");
const modalTagline = modal.querySelector("[data-modal-tagline]");
const modalDescription = modal.querySelector("[data-modal-description]");
const modalChip = modal.querySelector("[data-modal-chip]");
const modalLink = modal.querySelector("[data-modal-link]");
const modalClose = modal.querySelector("[data-modal-close]");

function buildTile(app, index) {
  const tile = document.createElement("button");
  tile.type = "button";
  tile.className = "app-tile";
  tile.style.setProperty("--tile-accent", app.accent);
  tile.setAttribute("aria-haspopup", "dialog");
  tile.dataset.index = String(index);

  const iconBox = document.createElement("span");
  iconBox.className = "tile-icon";
  const icon = document.createElement("img");
  icon.src = app.icon;
  icon.alt = "";
  icon.width = 96;
  icon.height = 96;
  icon.loading = "lazy";
  icon.decoding = "async";
  iconBox.append(icon);

  const label = document.createElement("strong");
  label.textContent = app.name;

  tile.append(iconBox, label);
  return tile;
}

function openModal(app) {
  modalCard.style.setProperty("--tile-accent", app.accent);
  modalIcon.src = app.icon;
  modalIcon.alt = "";
  modalTitle.textContent = app.name;
  modalTagline.textContent = app.tagline[lang];
  modalDescription.textContent = app.description[lang];

  const isSoon = app.status !== "live";
  modalChip.textContent = T.soon;
  modalChip.hidden = !isSoon;
  modalLink.textContent = `${T.open} →`;
  modalLink.hidden = isSoon || !app.url;
  if (!isSoon && app.url) modalLink.href = app.url;

  lastFocusedTile = document.activeElement;
  document.body.style.overflow = "hidden";
  modal.showModal();
}

let lastFocusedTile = null;

appGrid.append(...APPS.map(buildTile));

modalClose.setAttribute("aria-label", T.close);

appGrid.addEventListener("click", (event) => {
  const tile = event.target.closest(".app-tile");
  if (tile) openModal(APPS[Number(tile.dataset.index)]);
});

modalClose.addEventListener("click", () => modal.close());

/* Clicar no fundo do diálogo (fora do cartão) fecha também. */
modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.close();
});

modal.addEventListener("close", () => {
  document.body.style.overflow = "";
  lastFocusedTile?.focus();
  lastFocusedTile = null;
});
