export default function HtmlAPI() {
  const codeHtml = `<a-input
  v-model="searchModel"
  class="a_mb_3"
  label="Search"
  type="search"
></a-input>
<a-tree
  v-model:selected="selected"
  :json="json"
  :search-model="searchModel"
  :default-expand-level="1"
  aria-label="JSON"
></a-tree>
<div>selected: {{ selected }}</div>`;

  return {
    codeHtml,
  };
}
