export default function HtmlAPI() {
  const codeHtml = `<a-input-file
  v-model="model"
  class="a_mb_4"
  :is-multiple="true"
  :is-append="true"
  label="Documents"
></a-input-file>
<a-input-file
  v-model="model"
  class="a_mb_4"
  :is-multiple="true"
  :is-removable="false"
  label="is-removable: false"
></a-input-file>
<a-input-file
  v-model="model"
  :is-multiple="true"
  :readonly="true"
  label="readonly"
></a-input-file>`;

  return {
    codeHtml,
  };
}
