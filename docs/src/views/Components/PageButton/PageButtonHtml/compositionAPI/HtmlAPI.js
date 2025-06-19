/* eslint-disable no-useless-escape */
export default function HtmlAPI() {
  const codeHtml = `<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-button
    class="a_btn a_btn_primary"
    html="_A_BUTTON_EXAMPLE_HTML_"
  ></a-button>
  <a-button
    class="a_btn a_btn_primary"
    html="<span onclick='alert(\"Aloha\")'>Aloha</span>"
  ></a-button>
</div>`;

  return {
    codeHtml,
  };
}
