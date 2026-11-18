export default function HtmlAPI() {
  const codeHtml = `<a-input-file
  v-model="model"
  class="a_mb_4"
  :disabled="true"
  label="Documents"
></a-input-file>
<a-input-file
  v-model="model"
  :disabled="true"
  :is-dropzone="true"
  label="Documents"
></a-input-file>`;

  return {
    codeHtml,
  };
}
