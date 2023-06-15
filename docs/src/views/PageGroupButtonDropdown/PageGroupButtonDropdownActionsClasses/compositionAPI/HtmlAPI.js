export default function HtmlAPI() {
  const codeHtml = `<a-group-button-dropdown
  :actions="actions"
  :index-first-dropdown-action="6"
  :index-first-dropdown-action-mobile="6"
  :actions-classes="['a_btn a_btn_primary', 'a_btn a_btn_secondary', 'a_btn a_btn_info', 'a_btn a_btn_info', 'a_btn a_btn_info', 'a_btn a_btn_info']"
></a-group-button-dropdown>
<a-group-button-dropdown
  class="a_mt_3"
  :actions="actions"
  :index-first-dropdown-action="3"
  :index-first-dropdown-action-mobile="3"
  :actions-classes="['a_btn a_btn_primary', 'a_btn a_btn_secondary', 'a_btn a_btn_secondary', 'a_btn a_btn_primary']"
></a-group-button-dropdown>`;

  return {
    codeHtml,
  };
}
