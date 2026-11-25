export default function HtmlAPI() {
  const codeHtml = `<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_SETTINGS_"
  mode="split"
  :indent="4"
  sort-keys
  :inline-arrays="60"
  empty-containers="{ }"
  format-on="blur"
/>`;

  return {
    codeHtml,
  };
}
