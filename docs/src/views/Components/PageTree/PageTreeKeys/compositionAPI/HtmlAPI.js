export default function HtmlAPI() {
  const codeHtml = `<a-tree
  v-model:selected="selected"
  :data="data"
  key-id="uuid"
  key-label="meta.title"
  key-children="subordinates"
  :key-disabled="({ item }) => !item.active"
  :is-expand-all="true"
  aria-label="Employees"
></a-tree>
<div>selected: {{ selected }}</div>`;

  return {
    codeHtml,
  };
}
