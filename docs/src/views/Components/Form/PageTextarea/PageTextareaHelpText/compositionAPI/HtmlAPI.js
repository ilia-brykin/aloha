export default function HtmlAPI() {
  const codeHtml = `<a-textarea
  v-model="model"
  help-text="Aloha"
  label="Textarea"
></a-textarea>`;

  return {
    codeHtml,
  };
}
