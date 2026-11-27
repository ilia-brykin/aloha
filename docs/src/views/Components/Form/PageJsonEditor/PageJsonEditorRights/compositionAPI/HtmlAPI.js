export default function HtmlAPI() {
  const codeHtml = `<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_ACCOUNT_"
  :readonly-paths="['/id', '/created']"
  :locked-keys="['/email']"
  :hidden-paths="['/password']"
  :allowed-types="['string', 'number', 'boolean', 'object', 'array']"
  :max-depth="2"
/>`;

  return {
    codeHtml,
  };
}
