export default function HtmlAPI() {
  const codeHtml = `<a-button
  class="a_btn a_btn_danger"
  text="_A_NOTIFICATION_EXAMPLE_DELETE_BTN_"
  @click="deleteDocument"
/>`;

  return {
    codeHtml,
  };
}
