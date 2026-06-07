export default function HtmlAPI() {
  const codeHtml = `<a-dropdown
  :actions="dropdownActions"
  button-icon-left="Gear"
  button-text="_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-icon-right="Files"
  button-text="_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-icon-left="Duplicate"
  button-icon-right="Gear"
  button-text="_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  :button-icon-right="{ desktop: 'Gear', mobile: 'Files' }"
  button-text="_A_DROPDOWN_BUTTON_TEXT_EXAMPLE_"
></a-dropdown>`;

  return {
    codeHtml,
  };
}
