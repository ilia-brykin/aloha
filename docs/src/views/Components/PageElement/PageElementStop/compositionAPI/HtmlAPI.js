/* eslint-disable no-useless-escape */
export default function HtmlAPI() {
  const codeHtml = `<div
  @click="showAlert"
>
  <a-element
    :stop="true"
    class="a_btn a_btn_primary"
    text="stopPropagation: :stop=\"true\""
    type="button"
  ></a-element>
</div>
<div
  class="a_mt_4"
  @click="showAlert"
>
  <a-element
    :stop="false"
    class="a_btn a_btn_primary"
    text="stopPropagation: :stop=\"false\""
    type="button"
  ></a-element>
</div>`;

  return {
    codeHtml,
  };
}
