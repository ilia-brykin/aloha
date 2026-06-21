export default function HtmlAPI() {
  const codeHtml = `<a-input-number
  v-model="model"
  :error-icon="errorIcon"
  errors="Aloha"
  label="Input number"
></a-input-number>`;

  return {
    codeHtml,
  };
}
