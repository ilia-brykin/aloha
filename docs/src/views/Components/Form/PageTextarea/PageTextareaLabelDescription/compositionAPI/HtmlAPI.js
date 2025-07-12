export default function HtmlAPI() {
  const codeHtml = `<a-textarea
  v-model="model"
  :is-label-float="false"
  label="Textarea"
  label-description="Aloha"
></a-textarea>`;

  return {
    codeHtml,
  };
}
