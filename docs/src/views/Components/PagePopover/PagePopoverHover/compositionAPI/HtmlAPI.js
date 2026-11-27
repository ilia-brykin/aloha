export default function HtmlAPI() {
  const codeHtml = `<a-popover
  :has-close-button="false"
  button-text="_A_POPOVER_EXAMPLE_HOVER_BUTTON_"
  trigger="hover"
>
  <a-translation
    class="a_mb_0"
    tag="p"
    text="_A_POPOVER_EXAMPLE_HOVER_TEXT_"
  />
</a-popover>`;

  return {
    codeHtml,
  };
}
