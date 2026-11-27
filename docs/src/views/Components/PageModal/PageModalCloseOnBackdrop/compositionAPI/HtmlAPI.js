export default function HtmlAPI() {
  const codeHtml = `<a-button
  id="btn_modal_close_on_backdrop"
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
/>

<a-modal
  v-if="isModalVisible"
  :close="closeModal"
  header-text="Aloha"
  :close-on-backdrop="true"
  body-html="_A_MODAL_EXAMPLE_CLOSE_ON_BACKDROP_BODY_"
/>`;

  return {
    codeHtml,
  };
}
