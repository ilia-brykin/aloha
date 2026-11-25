export default function HtmlAPI() {
  const codeHtml = `<a-json-editor
  :model-value="model"
  label="_A_JSON_EDITOR_EXAMPLE_RESPONSE_"
  readonly
  :expand-level="2"
  :modes="['tree', 'code']"
/>`;

  return {
    codeHtml,
  };
}
