export default function HtmlAPI() {
  const codeHtml = `<div class="a_d_flex a_flex_wrap a_gap_2">
  <a-button
    class="a_btn a_btn_primary"
    text="_A_NOTIFICATION_EXAMPLE_SAVE_BTN_"
    @click="save"
  />
  <a-button
    class="a_btn a_btn_secondary"
    text="_A_NOTIFICATION_EXAMPLE_CLEAR_BTN_"
    @click="clearNotifications"
  />
</div>`;

  return {
    codeHtml,
  };
}
