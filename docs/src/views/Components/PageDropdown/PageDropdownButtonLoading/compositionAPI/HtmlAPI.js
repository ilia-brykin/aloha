export default function HtmlAPI() {
  const codeHtml = `<a-dropdown
  :actions="dropdownActions"
  button-text="_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"
  :button-loading="true"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-text="_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"
  :button-loading="true"
  button-loading-align="left"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-text="_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"
  :button-loading="true"
  button-loading-align="right"
></a-dropdown>`;

  return {
    codeHtml,
  };
}
