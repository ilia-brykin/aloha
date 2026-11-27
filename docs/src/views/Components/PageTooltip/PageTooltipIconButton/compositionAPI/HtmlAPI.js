export default function HtmlAPI() {
  const codeHtml = `<a-tooltip
  :without-aria-describedby="true"
>
  <a-button
    aria-label="_A_TOOLTIP_EXAMPLE_SETTINGS_"
    class="a_btn a_btn_secondary"
    icon-left="Gear"
  />

  <template v-slot:title>
    <a-translation
      text="_A_TOOLTIP_EXAMPLE_SETTINGS_"
    />
  </template>
</a-tooltip>`;

  return {
    codeHtml,
  };
}
