export default function HtmlAPI() {
  const codeHtml = `<a-dropdown
  :actions="dropdownActions"
  button-class="a_btn a_btn_primary"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-class="a_btn a_btn_success"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-class="a_btn a_btn_info"
></a-dropdown>`;

  return {
    codeHtml,
  };
}
