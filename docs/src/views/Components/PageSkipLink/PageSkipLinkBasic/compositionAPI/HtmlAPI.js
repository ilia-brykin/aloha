export default function HtmlAPI() {
  const codeHtml = `<!-- App.vue: the first element of the page -->
<a-skip-link />

<header>...</header>
<nav>...</nav>

<main id="main">
  <router-view />
</main>`;

  return {
    codeHtml,
  };
}
