export default function HtmlAPI() {
  const codeHtml = `<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_SETTINGS_"
  help-text="_A_JSON_EDITOR_EXAMPLE_SETTINGS_HELP_"
/>
<pre>{{ model }}</pre>`;

  return {
    codeHtml,
  };
}
