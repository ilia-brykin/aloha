export default function HtmlAPI() {
  const codeHtml = `<a-input-file
  v-model="model"
  :is-dropzone="true"
  :is-multiple="true"
  :is-append="true"
  :is-preview="true"
  accept="image/*"
  label="Photos"
></a-input-file>`;

  return {
    codeHtml,
  };
}
