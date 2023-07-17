export default function HtmlAPI() {
  const codeHtml = `<a-dropdown
  :actions="dropdownActions"
  :in-body="true"
  button-text="in-body='true'"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  :in-body="false"
  button-text="in-body='false'"
></a-dropdown>`;

  return {
    codeHtml,
  };
}
