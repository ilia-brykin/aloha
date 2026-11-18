export default function HtmlAPI() {
  const codeHtml = `<a-input-file
  :model-value="model"
  :is-dropzone="true"
  :is-multiple="true"
  :is-append="true"
  label="Documents"
  @update:model-value="onUpdateModel"
></a-input-file>`;

  return {
    codeHtml,
  };
}
