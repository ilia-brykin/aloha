export default function HtmlAPI() {
  const codeHtml = `<div class="a_d_flex a_flex_wrap a_gap_3">
  <a-tooltip
    v-for="placement in placements"
    :key="placement"
    :placement="placement"
  >
    <a-button
      class="a_btn a_btn_secondary"
      :text="placement"
    />

    <template v-slot:title>
      <span>{{ placement }}</span>
    </template>
  </a-tooltip>
</div>`;

  return {
    codeHtml,
  };
}
