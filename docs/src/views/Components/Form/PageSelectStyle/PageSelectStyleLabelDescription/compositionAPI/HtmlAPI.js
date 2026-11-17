export default function HtmlAPI() {
  const codeHtml = `<a-select-style
  v-model="model"
  label-position="top"
  label="Select"
  label-description="Aloha"
  type="select"
></a-select-style>`;

  return {
    codeHtml,
  };
}
