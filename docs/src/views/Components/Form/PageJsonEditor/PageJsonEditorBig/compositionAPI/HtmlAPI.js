export default function HtmlAPI() {
  const codeHtml = `<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_LOG_"
  :expand-level="2"
  :array-page-size="1000"
  height="24rem"
  density="compact"
/>`;

  return {
    codeHtml,
  };
}
