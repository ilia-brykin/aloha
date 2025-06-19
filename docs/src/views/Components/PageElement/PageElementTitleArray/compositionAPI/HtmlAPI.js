export default function HtmlAPI() {
  const codeHtml = `<a-element
  :title="['Aloha', '$(Aloha)']"
  class="a_btn a_btn_primary"
  text="Aloha"
  type="button"
></a-element>`;

  return {
    codeHtml,
  };
}
