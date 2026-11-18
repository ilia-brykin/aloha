export default function HtmlAPI() {
  const codeHtml = `<a-input-file
  v-model="model"
  :is-dropzone="true"
  :is-multiple="true"
  :is-append="true"
  accept=".pdf,.docx,image/*"
  accept-text="PDF, Word, images"
  :max-size="1024 * 1024"
  :max-files="3"
  label="Documents"
  @reject="onReject"
></a-input-file>
<div>reject: {{ rejected }}</div>`;

  return {
    codeHtml,
  };
}
