export default function HtmlAPI() {
  const codeHtml = `<a-element
  class="a_btn a_btn_primary"
  :text="{ mobile: 'Aloha', desktop: 'Aloha-desktop' }"
  type="button"
></a-element>`;

  return {
    codeHtml,
  };
}
