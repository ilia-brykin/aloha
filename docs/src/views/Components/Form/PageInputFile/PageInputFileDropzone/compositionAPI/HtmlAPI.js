export default function HtmlAPI() {
  const codeHtml = `<a-input-file
  v-model="model"
  :is-dropzone="true"
  :is-multiple="true"
  :is-append="true"
  label="Documents"
></a-input-file>`;

  return {
    codeHtml,
  };
}
