export default function HtmlAPI() {
  const codeHtml = `<a-textarea
  v-model="model"
  :is-label-float="false"
  label="Textarea"
></a-textarea>
<a-textarea
  v-model="model"
  :is-label-float="true"
  label="Textarea"
></a-textarea>`;

  return {
    codeHtml,
  };
}
