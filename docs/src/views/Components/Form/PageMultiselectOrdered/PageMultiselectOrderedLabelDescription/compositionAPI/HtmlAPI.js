export default function HtmlAPI() {
  const codeHtml = `<a-multiselect-ordered
  v-model="model"
  :data="data"
  key-id="value"
  key-label="label"
  label="Select"
  label-description="Aloha"
></a-multiselect-ordered>`;

  return {
    codeHtml,
  };
}
