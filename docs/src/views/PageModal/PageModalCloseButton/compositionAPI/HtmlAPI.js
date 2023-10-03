export default function HtmlAPI() {
  const codeHtml = `<a-button
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
></a-button>

<a-modal
  v-if="isModalVisible"
  header-text="Aloha"
  :close="closeModal"
  :close-button-attributes="{ textTag: 'strong' }"
  close-button-class="a_btn a_btn_danger"
  close-button-id="btn_close"
  close-button-text="_A_MODAL_PAGE_BTN_CLOSE_"
></a-modal>`;

  return {
    codeHtml,
  };
}
