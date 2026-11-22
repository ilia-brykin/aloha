export default function HtmlAPI() {
  const codeHtml = `<a-button
  id="btn_modal_basic"
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
></a-button>

<a-modal
  v-if="isModalVisible"
  selector-close-ids="btn_modal_basic"
  header-text="Aloha"
  :close="closeModal"
></a-modal>`;

  return {
    codeHtml,
  };
}
