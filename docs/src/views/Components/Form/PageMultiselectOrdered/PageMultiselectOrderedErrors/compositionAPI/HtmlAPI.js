export default function HtmlAPI() {
  const codeHtml = `<a-multiselect-ordered
  v-model="model"
  :data="data"
  errors="Aloha"
  key-id="value"
  key-label="label"
  label="Select"
></a-multiselect-ordered>`;

  return {
    codeHtml,
  };
}
