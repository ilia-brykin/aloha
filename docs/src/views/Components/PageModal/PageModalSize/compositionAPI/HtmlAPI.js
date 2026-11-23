export default function HtmlAPI() {
  const codeHtml = `<div 
  class="a_btn_group"
  role="group"
>
  <a-button
    id="btn_modal_size_small"
    class="a_btn a_btn_outline_secondary"
    text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
    text-after=" (small)"
    @click="openModal('small')"
  ></a-button>
  <a-button
    id="btn_modal_size_large"
    class="a_btn a_btn_outline_secondary"
    text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
    text-after=" (large)"
    @click="openModal('large')"
  ></a-button>
  <a-button
    id="btn_modal_size_xl"
    class="a_btn a_btn_outline_secondary"
    text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
    text-after=" (xl)"
    @click="openModal('xl')"
  ></a-button>
  <a-button
    id="btn_modal_size_xxl"
    class="a_btn a_btn_outline_secondary"
    text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
    text-after=" (xxl)"
    @click="openModal('xxl')"
  ></a-button>
  <a-button
    id="btn_modal_size_fullscreen"
    class="a_btn a_btn_outline_secondary"
    text="_A_MODAL_PAGE_BTN_OPEN_MODAL_"
    text-after=" (fullscreen)"
    @click="openModal('fullscreen')"
  ></a-button>
</div>

<a-modal
  v-if="isModalVisible"
  :selector-close-ids="\`btn_modal_size_\${ sizeModal }\`"
  header-text="Aloha"
  :close="closeModal"
  :size="sizeModal"
></a-modal>`;

  return {
    codeHtml,
  };
}
