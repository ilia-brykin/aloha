export default function HtmlAPI() {
  const codeHtml = `<a-dropdown
  :actions="dropdownActions"
  :readonly="true"
  button-text="_A_DROPDOWN_BUTTON_TEXT_READONLY_TRUE_"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  :readonly="false"
  button-text="_A_DROPDOWN_BUTTON_TEXT_READONLY_FALSE_"
></a-dropdown>`;

  return {
    codeHtml,
  };
}
