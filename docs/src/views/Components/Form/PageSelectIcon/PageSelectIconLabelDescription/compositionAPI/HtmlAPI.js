export default function HtmlAPI() {
  const codeHtml = `<a-select-icon
  v-model="model"
  :is-label-float="false"
  label="Select"
  label-description="Aloha"
></a-select-icon>`;

  return {
    codeHtml,
  };
}
