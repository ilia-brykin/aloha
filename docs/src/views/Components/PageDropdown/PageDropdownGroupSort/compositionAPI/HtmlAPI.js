export default function HtmlAPI() {
  const codeHtml = `<a-dropdown
  :actions="dropdownActions"
  :key-group-label-callback="groupLabelCallback"
  button-text="_A_DROPDOWN_BUTTON_TEXT_ASC_GROUPS_"
  key-group="priority"
  sort-order-group="asc"
></a-dropdown>

<a-dropdown
  :actions="dropdownActions"
  :key-group-label-callback="groupLabelCallback"
  button-text="_A_DROPDOWN_BUTTON_TEXT_DESC_GROUPS_"
  class="a_ml_4"
  key-group="priority"
  sort-order-group="desc"
></a-dropdown>`;

  return {
    codeHtml,
  };
}
