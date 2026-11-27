export default function HtmlAPI() {
  const codeHtml = `<a-button
  class="a_btn a_btn_outline_primary"
  text="_A_POPOVER_EXAMPLE_TOGGLE_"
  @click="isOpen = !isOpen"
/>
<a-popover
  v-model="isOpen"
  :close-on-click-outside="false"
  button-text="_A_POPOVER_EXAMPLE_BUTTON_"
  @close="lastEvent = { close: $event }"
  @open="lastEvent = { open: $event }"
>
  <a-translation
    class="a_mb_0"
    tag="p"
    text="_A_POPOVER_EXAMPLE_TEXT_"
  />
</a-popover>
<pre>v-model: {{ isOpen }}, {{ lastEvent }}</pre>`;

  return {
    codeHtml,
  };
}
