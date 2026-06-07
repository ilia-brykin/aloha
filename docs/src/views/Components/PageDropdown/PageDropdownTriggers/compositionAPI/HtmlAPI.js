export default function HtmlAPI() {
  const codeHtml = `<a-dropdown
  :actions="dropdownActions"
  button-text="_A_DROPDOWN_BUTTON_TEXT_TRIGGER_CLICK_"
  :triggers="['click']"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-text="_A_DROPDOWN_BUTTON_TEXT_TRIGGER_FOCUS_"
  :triggers="['focus']"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-text="_A_DROPDOWN_BUTTON_TEXT_TRIGGER_HOVER_"
  :triggers="['hover']"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-text="_A_DROPDOWN_BUTTON_TEXT_TRIGGER_CLICK_FOCUS_"
  :triggers="['click', 'focus']"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-text="_A_DROPDOWN_BUTTON_TEXT_TRIGGER_CLICK_HOVER_"
  :triggers="['click', 'hover']"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-text="_A_DROPDOWN_BUTTON_TEXT_TRIGGER_FOCUS_HOVER_"
  :triggers="['focus', 'hover']"
></a-dropdown>
<a-dropdown
  class="a_ml_2"
  :actions="dropdownActions"
  button-text="_A_DROPDOWN_BUTTON_TEXT_TRIGGER_CLICK_FOCUS_HOVER_"
  :triggers="['click', 'focus', 'hover']"
></a-dropdown>`;

  return {
    codeHtml,
  };
}
