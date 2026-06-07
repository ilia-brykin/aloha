export default function HtmlAPI() {
  const codeHtml = `<a-button
  class="a_btn a_btn_primary"
  text="_A_CONFIRM_EXAMPLE_BUTTONS_BTN_"
  @click="openConfirmLocal"
></a-button>`;

  return {
    codeHtml,
  };
}
