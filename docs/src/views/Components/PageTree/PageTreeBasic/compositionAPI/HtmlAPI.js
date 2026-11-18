export default function HtmlAPI() {
  const codeHtml = `<a-tree
  v-model:selected="selected"
  :data="data"
  aria-label="Company structure"
></a-tree>
<div>selected: {{ selected }}</div>`;

  return {
    codeHtml,
  };
}
