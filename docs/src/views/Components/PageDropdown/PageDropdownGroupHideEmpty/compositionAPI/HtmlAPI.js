export default function HtmlAPI() {
  const codeHtml = `<a-one-checkbox
  v-model="isDevelopmentVisible"
  :is-width-auto="true"
  label="_A_DROPDOWN_BUTTON_TEXT_TOGGLE_DEVELOPMENT_"
></a-one-checkbox>

<a-one-checkbox
  v-model="isSettingsVisible"
  :is-width-auto="true"
  label="_A_DROPDOWN_BUTTON_TEXT_TOGGLE_SETTINGS_"
></a-one-checkbox>

<a-dropdown
  :actions="dropdownActions"
  :key-group="['group', 'section']"
  button-text="_A_DROPDOWN_BUTTON_TEXT_HIDE_EMPTY_GROUPS_"
></a-dropdown>`;

  return {
    codeHtml,
  };
}
