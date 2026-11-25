export default function HtmlAPI() {
  const codeHtml = `<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_CONFIG_"
  model-type="string"
  mode="split"
/>`;

  return {
    codeHtml,
  };
}
