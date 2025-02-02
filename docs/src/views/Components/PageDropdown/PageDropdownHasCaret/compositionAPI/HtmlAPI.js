export default function HtmlAPI() {
  const codeHtml = `<a-dropdown
  :actions="dropdownActions"
  :has-caret="true"
  button-text="Aloha"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  :has-caret="false"
  button-text="Aloha"
></a-dropdown>`;

  return {
    codeHtml,
  };
}
