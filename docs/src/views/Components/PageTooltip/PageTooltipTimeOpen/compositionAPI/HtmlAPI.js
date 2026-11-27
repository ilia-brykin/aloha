export default function HtmlAPI() {
  const codeHtml = `<div class="a_d_flex a_flex_wrap a_gap_3">
  <a-tooltip
    v-for="time in times"
    :key="time"
    :time-open="time"
  >
    <a-button
      class="a_btn a_btn_secondary"
      :text="\`time-open: \${ time }\`"
    />

    <template v-slot:title>
      <span>{{ time }} ms</span>
    </template>
  </a-tooltip>
</div>`;

  return {
    codeHtml,
  };
}
