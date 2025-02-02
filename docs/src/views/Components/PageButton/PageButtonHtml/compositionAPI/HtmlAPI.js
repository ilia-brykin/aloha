export default function HtmlAPI() {
  const codeHtml = `<a-button
  class="a_btn a_btn_primary"
  html="_A_BUTTON_EXAMPLE_HTML_"
>
</a-button>
<a-button
  class="a_btn a_btn_primary a_ml_2"
  html="<span onclick='alert(\\"Aloha\\")'>Aloha</button>"
>
</a-button>`;

  return {
    codeHtml,
  };
}
