export default function HtmlAPI() {
  const codeHtml = `<a-button
  class="a_btn a_btn_primary"
  text="_A_NOTIFICATION_EXAMPLE_SHOW_BTN_"
  @click="add"
/>
<a-notification
  name="example_progress"
  :has-progress="true"
  placement="bottom-end"
  :width="360"
/>`;

  return {
    codeHtml,
  };
}
