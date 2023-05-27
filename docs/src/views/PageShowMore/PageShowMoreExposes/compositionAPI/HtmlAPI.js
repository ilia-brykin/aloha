export default function HtmlAPI() {
  const codeHtml = `<div
  class="a_btn_group"
>
  <a-button
    class="a_btn a_btn_outline_primary"
    text="_A_SHOW_MORE_TEXT_TOGGLE_WITH_IS_OPEN_"
    @click="toggleShowWithIsOpen"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_primary"
    text="_A_SHOW_MORE_TEXT_TOGGLE_WITH_TOGGLE_BUTTON_"
    @click="toggleShowWithToggleButton"
  ></a-button>
</div>
<a-show-more 
  ref="showMoreRef"
  :html="html"
></a-show-more>`;

  return {
    codeHtml,
  };
}
