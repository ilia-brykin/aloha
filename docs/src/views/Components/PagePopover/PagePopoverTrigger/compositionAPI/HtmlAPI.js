export default function HtmlAPI() {
  const codeHtml = `<a-popover
  header="_A_POPOVER_EXAMPLE_NOTIFICATIONS_"
>
  <template #trigger="{ attributes }">
    <a-button
      v-bind="attributes"
      class="a_btn a_btn_primary"
      icon-left="Bell"
      text="_A_POPOVER_EXAMPLE_NOTIFICATIONS_"
    />
  </template>
  <a-translation
    class="a_mb_0"
    tag="p"
    text="_A_POPOVER_EXAMPLE_NOTIFICATIONS_TEXT_"
  />
</a-popover>`;

  return {
    codeHtml,
  };
}
