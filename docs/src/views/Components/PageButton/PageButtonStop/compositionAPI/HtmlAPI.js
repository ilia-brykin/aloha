export default function HtmlAPI() {
  const codeHtml = `<div
  @click="showAlert"
>
  <a-button
    class="a_btn a_btn_primary"
    text="stopPropagation: :stop=\\"true\\""
    :stop="true"
  ></a-button>
</div>
<div
  class="a_mt_4"
  @click="showAlert"
>
  <a-button
    class="a_btn a_btn_primary"
    text="stopPropagation: :stop=\\"false\\""
    :stop="false"
  ></a-button>
</div>`;

  return {
    codeHtml,
  };
}
