export default function HtmlAPI() {
  const codeHtml = `<a-input
  v-model="searchModel"
  class="a_mb_3"
  label="Search"
  type="search"
></a-input>
<a-tree
  :data="data"
  :search-model="searchModel"
  aria-label="Company structure"
></a-tree>`;

  return {
    codeHtml,
  };
}
