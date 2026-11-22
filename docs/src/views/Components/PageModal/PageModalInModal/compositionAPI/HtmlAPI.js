export default function HtmlAPI() {
  const codeHtml = `<a-button
  id="btn_modal_in_modal"
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
></a-button>

<a-modal
  v-if="isModalVisible"
  selector-close-ids="btn_modal_in_modal"
  :close="closeModal"
  header-text="Modal 1"
  size="xl"
>
  <template
    v-slot:modalBody
  >
    <a-button
      id="btn_modal_in_modal_2"
      class="a_btn a_btn_primary"
      text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
      @click="openModal2"
    ></a-button>
  </template>
</a-modal>

<a-modal
  v-if="isModal2Visible"
  selector-close-ids="btn_modal_in_modal_2"
  :close="closeModal2"
  header-text="Modal 2"
></a-modal>`;

  return {
    codeHtml,
  };
}
