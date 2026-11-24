export default function HtmlAPI() {
  const codeHtml = `<div class="a_d_flex a_flex_wrap a_gap_2">
  <a-button
    class="a_btn a_btn_danger"
    text="_A_NOTIFICATION_EXAMPLE_ERROR_BTN_"
    @click="addError"
  />
  <a-button
    class="a_btn a_btn_secondary"
    text="_A_NOTIFICATION_EXAMPLE_ERROR_ALL_BTN_"
    @click="addErrorWithoutDeduplicate"
  />
</div>`;

  return {
    codeHtml,
  };
}
