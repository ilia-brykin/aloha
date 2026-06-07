export default function HtmlAPI() {
  const codeHtml = `<a-dropdown
  :actions="dropdownActions"
  :key-group="['group', 'section', 'subsection']"
  button-text="_A_DROPDOWN_BUTTON_TEXT_GROUPED_ACTIONS_"
></a-dropdown>`;

  return {
    codeHtml,
  };
}
