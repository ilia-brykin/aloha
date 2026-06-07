export default function HtmlAPI() {
  const codeHtml = `<div class="a_btn_group">
  <a-button
    id="btn_confirm_focus"
    class="a_btn a_btn_primary"
    text="_A_CONFIRM_EXAMPLE_FOCUS_BTN_"
    @click="openConfirmLocal"
  ></a-button>

  <a-button
    id="btn_confirm_focus_secondary"
    class="a_btn a_btn_secondary"
    text="_A_CONFIRM_EXAMPLE_FOCUS_SECONDARY_BTN_"
  ></a-button>
</div>`;

  return {
    codeHtml,
  };
}
