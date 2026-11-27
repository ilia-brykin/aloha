export default function HtmlAPI() {
  const codeHtml = `<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_USERS_"
  search-in="values"
  search-filter
/>`;

  return {
    codeHtml,
  };
}
