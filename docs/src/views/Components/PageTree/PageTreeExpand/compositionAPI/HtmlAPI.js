export default function HtmlAPI() {
  const codeHtml = `<a-button
  class="a_btn a_btn_secondary a_btn_small"
  text="Expand all"
  @click="treeRef.expandAll()"
></a-button>
<a-button
  class="a_btn a_btn_secondary a_btn_small"
  text="Collapse all"
  @click="treeRef.collapseAll()"
></a-button>
<a-tree
  ref="treeRef"
  v-model:expanded="expanded"
  :data="data"
  :default-expand-level="1"
  aria-label="Company structure"
></a-tree>
<div>expanded: {{ expanded }}</div>

<a-tree
  :data="data"
  :is-accordion="true"
  aria-label="Company structure"
></a-tree>

<a-tree
  :data="data"
  :is-expand-on-click-node="false"
  aria-label="Company structure"
></a-tree>`;

  return {
    codeHtml,
  };
}
