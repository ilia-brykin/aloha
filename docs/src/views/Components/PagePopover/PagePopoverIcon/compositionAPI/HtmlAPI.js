export default function HtmlAPI() {
  const codeHtml = `<a-popover
  button-class="a_btn a_btn_link"
  button-icon-left="ChatSquareText"
  button-text-screen-reader="_A_POPOVER_EXAMPLE_HELP_"
  button-title="_A_POPOVER_EXAMPLE_HELP_"
  header="_A_POPOVER_EXAMPLE_HELP_"
  placement="right"
>
  <a-translation
    class="a_mb_0"
    tag="p"
    text="_A_POPOVER_EXAMPLE_HELP_TEXT_"
  />
</a-popover>`;

  return {
    codeHtml,
  };
}
