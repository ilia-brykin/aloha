export default function HtmlAPI() {
  const codeHtml = `<a-link
  class="a_btn a_btn_primary"
  :title="['Aloha', '$(Aloha)']"
  text="Aloha"
  href="https://github.com/"
>
</a-link>`;

  return {
    codeHtml,
  };
}
