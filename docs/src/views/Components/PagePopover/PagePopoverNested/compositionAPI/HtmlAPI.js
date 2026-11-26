export default function HtmlAPI() {
  const codeHtml = `<a-popover
  button-text="_A_POPOVER_EXAMPLE_BUTTON_"
  header="_A_POPOVER_EXAMPLE_HEADER_"
>
  <a-translation
    tag="p"
    text="_A_POPOVER_EXAMPLE_TEXT_"
  />
  <a-popover
    button-class="a_btn a_btn_link"
    button-text="_A_POPOVER_EXAMPLE_HELP_"
    placement="right"
  >
    <a-translation
      class="a_mb_0"
      tag="p"
      text="_A_POPOVER_EXAMPLE_HELP_TEXT_"
    />
  </a-popover>
</a-popover>`;

  return {
    codeHtml,
  };
}
