export default function HtmlAPI() {
  const codeHtml = `<a-button
  class="a_btn a_btn_primary"
  :text="isAlertVisible ? '_A_ALERT_GROUP_ANNOUNCE_BTN_HIDE_' : '_A_ALERT_GROUP_ANNOUNCE_BTN_SHOW_'"
  @click="toggleAlerts"
/>

<!-- default announce="alert": role="alert" aria-atomic="true" -->
<a-alert
  :is-visible="isAlertVisible"
  type="danger"
  text="_A_ALERT_GROUP_ANNOUNCE_TEXT_ALERT_"
/>

<!-- role="status" aria-atomic="true" -->
<a-alert
  :is-visible="isAlertVisible"
  announce="status"
  type="success"
  text="_A_ALERT_GROUP_ANNOUNCE_TEXT_STATUS_"
/>

<!-- no role and no aria-atomic -->
<a-alert
  :is-visible="isAlertVisible"
  announce="none"
  type="info"
  text="_A_ALERT_GROUP_ANNOUNCE_TEXT_NONE_"
/>

<!-- role and aria-atomic win over announce: role="status" aria-atomic="false" -->
<a-alert
  :is-visible="isAlertVisible"
  announce="alert"
  role="status"
  :aria-atomic="false"
  text="..."
/>`;

  return {
    codeHtml,
  };
}
