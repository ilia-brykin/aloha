export default function HtmlAPI() {
  const codeHtml = `<a-button
  id="btn_modal_form_delete"
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
/>

<a-modal-form
  v-if="isModalVisible"
  selector-close-ids="btn_modal_form_delete"
  v-model="model"
  :data-form="dataForm"
  :close="closeModal"
  :save="save"
  header-text="_A_MODAL_FORM_DELETE_HEADER_"
  size="large"
  class-columns="a_columns a_columns_count_12 a_columns_gap_3"
  class-column-default="a_column a_column_6 a_column_12_mobile"
>
  <template v-slot:modalFooterPrepend>
    <a-button
      class="a_btn a_btn_outline_danger"
      text="_A_MODAL_FORM_EXAMPLE_BTN_DELETE_"
      @click="remove"
    />
  </template>
</a-modal-form>

<a-translation
  v-if="status"
  class="a_mt_3"
  tag="p"
  role="status"
  :text="status"
/>`;

  return {
    codeHtml,
  };
}
