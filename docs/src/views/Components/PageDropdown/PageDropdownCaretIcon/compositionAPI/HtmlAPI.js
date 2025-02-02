export default function HtmlAPI() {
  const codeHtml = `<a-dropdown
  :actions="dropdownActions"
  caret-icon="EjectFill"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  caret-icon="Gear"
></a-dropdown>`;

  return {
    codeHtml,
  };
}
