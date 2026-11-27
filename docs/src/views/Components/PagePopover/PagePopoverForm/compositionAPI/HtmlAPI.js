export default function HtmlAPI() {
  const codeHtml = `<a-popover
  button-text="_A_POPOVER_EXAMPLE_RENAME_"
  header="_A_POPOVER_EXAMPLE_RENAME_"
>
  <a-input
    v-model="name"
    label="_A_POPOVER_EXAMPLE_NAME_"
  />
  <template #footer="{ close }">
    <a-button
      class="a_btn a_btn_secondary"
      text="_A_POPOVER_EXAMPLE_CANCEL_"
      @click="close"
    />
    <a-button
      class="a_btn a_btn_primary"
      text="_A_POPOVER_EXAMPLE_SAVE_"
      @click="save(close)"
    />
  </template>
</a-popover>
<p v-if="saved">{{ saved }}</p>`;

  return {
    codeHtml,
  };
}
