export default function HtmlAPI() {
  const codeHtml = `<a-tree
  v-model="checked"
  :data="data"
  :is-checkbox="true"
  :is-check-strictly="true"
  :is-expand-all="true"
  aria-label="Company structure"
></a-tree>
<div>model-value: {{ checked }}</div>`;

  return {
    codeHtml,
  };
}
