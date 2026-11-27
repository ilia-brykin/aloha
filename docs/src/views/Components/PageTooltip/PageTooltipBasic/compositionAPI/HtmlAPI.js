export default function HtmlAPI() {
  const codeHtml = `<a-tooltip>
  <a-button
    class="a_btn a_btn_primary"
    text="_A_TOOLTIP_EXAMPLE_SAVE_"
  />

  <template v-slot:title>
    <a-translation
      text="_A_TOOLTIP_EXAMPLE_SAVE_TITLE_"
    />
  </template>
</a-tooltip>`;

  return {
    codeHtml,
  };
}
