# Orenji Apps

Página estática (GitHub Pages) que serve como montra das apps do projeto Orenji.

Este repositório contém a landing page simples com cartões para cada app do ecossistema Orenji. A página apresenta atualmente as seguintes apps:

- Orenji Fitness
- Orenji Study
- Orenji Recipes
- Orenji Focus
- Orenji Habit

Repositorios de suporte (Core, Styles, docs, assets de organização, etc.) não são listados na página principal — a landing mostra apenas as apps.

## Estrutura do repositório

- `index.html` — HTML da página principal. Carrega os recursos estáticos e inicializa a renderização.
- `links.json` — Dados das apps (nome, descrição curta, links, imagens). Edite este ficheiro para adicionar/alterar apps apresentados.
- `script.js` — Lógica de renderização e interatividade (cards, expansão ao clicar, carregamento de `links.json`).
- `styles.css` — Estilos e tema (baseado no logotipo/cores do Orenji).
- `assets/` — Imagens e outros ficheiros estáticos usados pelos cards e pela página.
- `site.webmanifest` — Manifesto para PWA / ícones.
- `.nojekyll` — Preserva o comportamento de páginas estáticas no GitHub Pages.

## Design e comportamento

O visual foi pensado para ser simples e alinhado com a identidade Orenji:

- Fundo claro com laranja como cor principal;
- Folha verde como acento;
- Cards grandes com banner e logo da app;
- Clique no card para expandir e revelar descrição detalhada e link(s).

## Como testar localmente

1. Clone o repositório:

   git clone https://github.com/Orenji-Project/Orenji-link-landing-page.git

2. Abra `index.html` num navegador (não requer servidor, mas pode usar um servidor estático se preferir):

   - Com Python 3: `python -m http.server 8000` e abra `http://localhost:8000`.

3. Para atualizar as apps mostradas, edite `links.json` e recarregue a página.

## Como contribuir

- Atualize `links.json` para adicionar, remover ou editar entradas de apps.
- Submeta um pull request com a descrição das alterações.
- Para alterações de design edite `styles.css` e, se necessário, `script.js`.

## Deploy (GitHub Pages)

Esta página está pronta para publicação através do GitHub Pages. Nas definições do repositório escolha a branch `main` (ou a branch padrão) e o root como fonte se necessário.

## Notas técnicas

- A renderização dos cards é feita no cliente lendo `links.json` — isso facilita atualizações sem mexer no HTML.
- Mantenha imagens e ícones em `assets/` e referencie-os em `links.json`.

---

Se quiser, posso:

- Atualizar `links.json` com novas apps (se fornecer os dados);
- Adicionar instruções de build/CI se quiser servir a página com um fluxo de integração contínua;
- Localizar e corrigir qualquer link quebrado na página.
