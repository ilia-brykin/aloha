export default function HtmlAPI() {
  const codeHtml = `<a-dropdown
  :actions="dropdownActions"
  button-text="Aloha"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-text="Aloha 123"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  :button-text="{ desktop: 'Aloha desktop', mobile: 'Aloha mobile' }"
></a-dropdown>`;

  return {
    codeHtml,
  };
}
