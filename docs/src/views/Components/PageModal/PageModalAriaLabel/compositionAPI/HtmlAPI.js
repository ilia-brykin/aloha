export default function HtmlAPI() {
  const codeHtml = `<a-button
  id="btn_modal_aria_label"
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
/>

<a-modal
  v-if="isModalVisible"
  :close="closeModal"
  :hide-header="true"
  aria-label="_A_MODAL_EXAMPLE_ARIA_LABEL_"
  body-html="_A_MODAL_EXAMPLE_ARIA_LABEL_BODY_"
/>`;

  return {
    codeHtml,
  };
}
