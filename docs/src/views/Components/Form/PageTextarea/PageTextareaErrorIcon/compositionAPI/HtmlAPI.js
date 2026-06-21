export default function HtmlAPI() {
  const codeHtml = `<a-textarea
  v-model="model"
  :error-icon="errorIcon"
  errors="Aloha"
  label="Textarea"
></a-textarea>`;

  return {
    codeHtml,
  };
}
