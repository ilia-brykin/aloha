export default function HtmlAPI() {
  const codeHtml = `<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_SETTINGS_"
  :expand-level="2"
  @selection-change="onSelectionChange"
/>
<p>{{ paths.join(", ") }}</p>`;

  return {
    codeHtml,
  };
}
