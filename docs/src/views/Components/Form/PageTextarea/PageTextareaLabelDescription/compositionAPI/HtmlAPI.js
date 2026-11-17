export default function HtmlAPI() {
  const codeHtml = `<a-textarea
  v-model="model"
  label-position="top"
  label="Textarea"
  label-description="Aloha"
></a-textarea>`;

  return {
    codeHtml,
  };
}
