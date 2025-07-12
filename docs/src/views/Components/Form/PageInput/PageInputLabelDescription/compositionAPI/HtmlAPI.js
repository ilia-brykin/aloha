export default function HtmlAPI() {
  const codeHtml = `<a-input
  v-model="model"
  :is-label-float="false"
  label="Input"
  label-description="Aloha"
></a-input>`;

  return {
    codeHtml,
  };
}
