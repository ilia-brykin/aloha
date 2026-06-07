export default function HtmlAPI() {
  const codeHtml = `<a-dropdown
  :actions="dropdownActions"
  :in-body="true"
  button-text="_A_DROPDOWN_BUTTON_TEXT_IN_BODY_TRUE_"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  :in-body="false"
  button-text="_A_DROPDOWN_BUTTON_TEXT_IN_BODY_FALSE_"
></a-dropdown>`;

  return {
    codeHtml,
  };
}
