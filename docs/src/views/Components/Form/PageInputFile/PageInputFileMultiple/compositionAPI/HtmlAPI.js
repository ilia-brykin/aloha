export default function HtmlAPI() {
  const codeHtml = `<a-input-file
  v-model="modelReplace"
  class="a_mb_4"
  :is-multiple="true"
  label="is-multiple"
></a-input-file>
<a-input-file
  v-model="modelAppend"
  :is-multiple="true"
  :is-append="true"
  label="is-multiple, is-append"
></a-input-file>
<div>modelAppend: {{ modelAppend.map(file => file.name) }}</div>`;

  return {
    codeHtml,
  };
}
