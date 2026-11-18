export default function HtmlAPI() {
  const codeHtml = `<a-skeleton
  :count="4"
  style="--a_skeleton_group_gap: .75rem;"
>
  <template v-slot:template="{ index }">
    <div class="a_d_flex a_gap_3 a_align_items_center">
      <a-skeleton-item width="25%"></a-skeleton-item>
      <a-skeleton-item :width="\`\${ 50 - index * 8 }%\`"></a-skeleton-item>
      <a-skeleton-item width="15%"></a-skeleton-item>
      <a-skeleton-item
        class="a_ml_auto"
        variant="button"
        width="4rem"
      ></a-skeleton-item>
    </div>
  </template>
</a-skeleton>`;

  return {
    codeHtml,
  };
}
