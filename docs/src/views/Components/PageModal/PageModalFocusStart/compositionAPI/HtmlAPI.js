export default function HtmlAPI() {
  const codeHtml = `<a-button
  id="btn_modal_focus_start"
  class="a_btn a_btn_primary"
  text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
  @click="openModal"
/>

<a-modal
  v-if="isModalVisible"
  :close="closeModal"
  header-text="Aloha"
  focus-start-id="btn_modal_focus_start_continue"
>
  <template v-slot:modalBody>
    <a-translation
      tag="p"
      text="_A_MODAL_EXAMPLE_FOCUS_START_BODY_"
    />
    <a-button
      class="a_btn a_btn_secondary a_mr_2"
      text="_A_MODAL_EXAMPLE_BACK_"
    />
    <a-button
      id="btn_modal_focus_start_continue"
      class="a_btn a_btn_primary"
      text="_A_MODAL_EXAMPLE_CONTINUE_"
    />
  </template>
</a-modal>`;

  return {
    codeHtml,
  };
}
