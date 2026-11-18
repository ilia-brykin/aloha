export default function HtmlAPI() {
  const codeHtml = `<a-tree
  :data="data"
  :is-expand-all="true"
  aria-label="Company structure"
>
  <template v-slot:node="{ item, label, isLeaf }">
    <span class="a_d_flex a_align_items_center a_gap_2">
      <span>{{ label }}</span>
      <span
        v-if="!isLeaf"
        class="a_badge a_badge_secondary a_pill_rounded"
      >{{ item.children.length }}</span>
    </span>
  </template>
</a-tree>`;

  return {
    codeHtml,
  };
}
