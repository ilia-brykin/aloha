export default function HtmlAPI() {
  const codeHtml = `<a-button
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
  header-text="_A_MODAL_FORM_ELEMENTS_HEADER_"
  size="xl"
  class-columns="a_columns a_columns_count_12 a_columns_gap_3"
  class-column-default="a_column a_column_4 a_column_6_tablet a_column_12_mobile"
/>
<pre v-if="modelSaved">{{ modelSaved }}</pre>`;

  return {
    codeHtml,
  };
}
