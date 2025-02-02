export default function HtmlAPI() {
  const codeHtml = `<a-link
  class="a_btn a_btn_primary"
  safe-html="_A_LINK_EXAMPLE_HTML_"
>
</a-link>
<a-link
  class="a_btn a_btn_primary a_ml_2"
  safe-html="<span onclick='alert(\\"Aloha\\")'>Aloha</button>"
>
</a-link>`;

  return {
    codeHtml,
  };
}
