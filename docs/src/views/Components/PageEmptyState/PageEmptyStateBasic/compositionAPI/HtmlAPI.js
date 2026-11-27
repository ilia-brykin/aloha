export default function HtmlAPI() {
  const codeHtml = `<a-empty-state
  class="a_tile"
  icon="Inbox"
  header-tag="h3"
  header-text="_A_EMPTY_STATE_EXAMPLE_BASIC_HEADER_"
  text="_A_EMPTY_STATE_EXAMPLE_BASIC_TEXT_"
>
  <a-button
    class="a_btn a_btn_primary"
    icon-left="PlusLg"
    text="_A_EMPTY_STATE_EXAMPLE_BASIC_BTN_"
  />
</a-empty-state>`;

  return {
    codeHtml,
  };
}
