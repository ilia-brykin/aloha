export default function HtmlAPI() {
  const codeHtml = `<a-input-file
  v-model="model"
  class="a_mb_4"
  :required="true"
  label="Documents"
  label-description="The signed contract"
  help-text="Scan all pages into one file"
  text="Upload contract"
></a-input-file>
<a-input-file
  v-model="model"
  :is-dropzone="true"
  :required="true"
  errors="Please add the contract"
  label="Documents"
></a-input-file>`;

  return {
    codeHtml,
  };
}
