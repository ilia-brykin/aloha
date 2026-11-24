export default function HtmlAPI() {
  const codeHtml = `<a-button
  id="btn_modal_form_enter"
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
/>

<a-modal-form
  v-if="isModalVisible"
  v-model="model"
  :data-form="dataForm"
  :close="closeModal"
  :save="save"
  header-text="_A_MODAL_FORM_ENTER_HEADER_"
/>
<p
  v-if="saved"
  class="a_mt_3"
>{{ saved }}</p>`;

  return {
    codeHtml,
  };
}
