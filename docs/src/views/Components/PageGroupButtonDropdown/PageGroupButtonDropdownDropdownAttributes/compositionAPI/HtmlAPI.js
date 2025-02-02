export default function HtmlAPI() {
  const codeHtml = `<a-group-button-dropdown
  :actions="actions"
  :index-first-dropdown-action="2"
  :index-first-dropdown-action-mobile="2"
  :dropdown-attributes="{ buttonText: '_A_GROUP_BUTTON_DROPDOWN_OTHER_ACTIONS_', buttonClass: 'a_btn a_btn_primary' }"
></a-group-button-dropdown>
<a-group-button-dropdown
  class="a_mt_3"
  :actions="actions"
  :index-first-dropdown-action="1"
  :index-first-dropdown-action-mobile="1"
  :dropdown-attributes="{ buttonText: '_A_GROUP_BUTTON_DROPDOWN_OTHER_ACTIONS_', buttonIconLeft: 'Gear' }"
></a-group-button-dropdown>`;

  return {
    codeHtml,
  };
}
