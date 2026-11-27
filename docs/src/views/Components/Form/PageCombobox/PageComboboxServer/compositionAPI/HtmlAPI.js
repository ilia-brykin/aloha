export default function HtmlAPI() {
  const codeHtml = `<a-combobox
  v-model="model"
  :search-timeout="300"
  :url="url"
  label="_A_COMBOBOX_EXAMPLE_SEARCH_"
  search-api-key="search"
/>`;

  return {
    codeHtml,
  };
}
