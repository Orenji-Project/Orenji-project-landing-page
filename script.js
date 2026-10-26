const apps = [
  { name: "Orenji Fitness", tagline: "Movimento e bem-estar", bannerTitle: "Fitness", logo: "assets/fitness-logo.png", url: "https://orenji-project.github.io/orenji-fitness-app/", accent: "#f59a23", accentSoft: "#fff1df", description: "Uma aplicação para organizar treinos e acompanhar a evolução com mais clareza." },
  { name: "Orenji Study", tagline: "Estudo organizado", bannerTitle: "Study", logo: "assets/study-logo.png", url: "https://orenji-project.github.io/Orenji-Study/", accent: "#6f9447", accentSoft: "#eef6e8", description: "Um espaço para manter horários, notas e tarefas de estudo no mesmo lugar." },
  { name: "Orenji Recipes", tagline: "Receitas e cozinha", bannerTitle: "Recipes", logo: "assets/recipes-logo.png", url: "https://orenji-project.github.io/Orenji-Recipes/", accent: "#e77923", accentSoft: "#fff0e4", description: "Receitas e ferramentas para tornar a preparação das refeições mais simples." },
  { name: "Orenji Focus", tagline: "Foco e tempo", bannerTitle: "Focus", logo: "assets/focus-logo.png", url: "https://orenji-project.github.io/Orenji-Focus/", accent: "#4f8f69", accentSoft: "#eaf6ef", description: "Uma forma mais tranquila de organizar tarefas e criar sessões de foco." },
  { name: "Orenji Habit", tagline: "Hábitos diários", bannerTitle: "Habit", logo: "assets/habit-logo.png", url: "https://orenji-project.github.io/Orenji-Habit/", accent: "#d9822b", accentSoft: "#fff3e6", description: "Pequenos hábitos acompanhados de forma simples, consistente e pessoal." },
];
const appList = document.querySelector("[data-app-list]");
const template = document.querySelector("#app-card-template");
function createCard(app, index) {
  const fragment = template.content.cloneNode(true), card = fragment.querySelector(".app-card"), toggle = fragment.querySelector("[data-card-toggle]"), banner = fragment.querySelector("[data-banner]"), details = fragment.querySelector("[data-card-details]"), detailsId = `app-details-${index}`;
  banner.style.setProperty("--accent", app.accent); banner.style.setProperty("--accent-soft", app.accentSoft);
  fragment.querySelector("[data-logo]").src = app.logo; fragment.querySelector("[data-logo]").alt = `${app.name} logo`;
  fragment.querySelector("[data-name]").textContent = app.name; fragment.querySelector("[data-tagline]").textContent = app.tagline; fragment.querySelector("[data-banner-title]").textContent = app.bannerTitle; fragment.querySelector("[data-description]").textContent = app.description; fragment.querySelector("[data-url]").href = app.url;
  details.id = detailsId; toggle.setAttribute("aria-expanded", "false"); toggle.setAttribute("aria-controls", detailsId);
  toggle.addEventListener("click", () => { const expanded = card.dataset.expanded === "true"; appList.querySelectorAll(".app-card").forEach((other) => { other.dataset.expanded = "false"; other.querySelector("[data-card-toggle]")?.setAttribute("aria-expanded", "false"); }); card.dataset.expanded = String(!expanded); toggle.setAttribute("aria-expanded", String(!expanded)); });
  return fragment;
}
appList.replaceChildren(...apps.map(createCard));
