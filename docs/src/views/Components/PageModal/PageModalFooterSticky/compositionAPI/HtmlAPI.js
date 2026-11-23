export default function HtmlAPI() {
  const codeHtml = `<a-button
  id="btn_modal_footer_sticky"
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
></a-button>

<a-modal
  v-if="isModalVisible"
  selector-close-ids="btn_modal_footer_sticky"
  :body-html="bodyHtml"
  :close="closeModal"
  :is-footer-sticky="true"
  header-text="Aloha"
></a-modal>`;

  return {
    codeHtml,
  };
}
