export default function HtmlAPI() {
  const codeHtml = `<a-input
  v-model="model"
  :error-icon="errorIcon"
  errors="Aloha"
  label="Input"
></a-input>`;

  return {
    codeHtml,
  };
}
