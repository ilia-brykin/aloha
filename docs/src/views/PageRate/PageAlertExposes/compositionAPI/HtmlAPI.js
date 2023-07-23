export default function HtmlAPI() {
  const codeHtml = `<div
  class="a_btn_group"
>
  <a-button
    class="a_btn a_btn_outline_primary"
    text="_A_ALERT_GROUP_EXPOSES_BTN_CLOSE_"
    @click="closeAlert"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_primary"
    text="_A_ALERT_GROUP_EXPOSES_BTN_SHOW_"
    @click="showAlert"
  ></a-button>
</div>
<a-alert 
  ref="alertRef"
  alert-class="a_mt_3"
  html="Alert success"
  :is-visible="true"
  type="success"
  :closable="true"
  :remove-alert-on-close="true"
>
</a-alert>`;

  return {
    codeHtml,
  };
}
