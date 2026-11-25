export default function HtmlAPI() {
  const codeHtml = `<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_PRODUCT_"
  :schema="schema"
  validate-on="blur"
/>`;

  return {
    codeHtml,
  };
}
