export default function HtmlAPI() {
  const codeHtml = `<a-textarea
  v-model="model"
  label="Textarea"
></a-textarea>
<a-textarea
  v-model="model"
  class="a_mt_3"
  label-screen-reader="Textarea"
></a-textarea>`;

  return {
    codeHtml,
  };
}
