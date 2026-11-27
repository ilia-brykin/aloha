export default function HtmlAPI() {
  const codeHtml = `<a-select
  v-model="placement"
  :data="placements"
  :deselectable="false"
  key-id="id"
  key-label="id"
  label="placement"
  type="select"
/>
<a-popover
  :placement="placement"
  button-text="_A_POPOVER_EXAMPLE_BUTTON_"
>
  <a-translation
    class="a_mb_0"
    tag="p"
    text="_A_POPOVER_EXAMPLE_TEXT_"
  />
</a-popover>`;

  return {
    codeHtml,
  };
}
