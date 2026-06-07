export default function HtmlAPI() {
  const codeHtml = `<div class="a_btn_group">
  <a-button
    class="a_btn a_btn_primary"
    text="_A_CONFIRM_EXAMPLE_ASYNC_BTN_"
    @click="openConfirmLoading"
  ></a-button>

  <a-button
    id="btn_confirm_timeout"
    class="a_btn a_btn_secondary"
    text="_A_CONFIRM_EXAMPLE_TIMEOUT_BTN_"
    @click="openConfirmTimeout"
  ></a-button>
</div>`;

  return {
    codeHtml,
  };
}
