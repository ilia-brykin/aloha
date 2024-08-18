export default function HtmlAPI() {
  const codeHtml = `<a-textarea
  v-model="model"
  errors="Aloha"
  label="Textarea"
></a-textarea>`;

  return {
    codeHtml,
  };
}
