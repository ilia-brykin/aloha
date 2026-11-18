export default function HtmlAPI() {
  const codeHtml = `<a-tree
  ref="treeRef"
  v-model="checked"
  :data="data"
  :is-checkbox="true"
  :default-expand-level="2"
  aria-label="Company structure"
></a-tree>
<div>model-value: {{ checked }}</div>
<div>getCheckedItems({ isLeafOnly: true }): {{ leafLabels }}</div>`;

  return {
    codeHtml,
  };
}
