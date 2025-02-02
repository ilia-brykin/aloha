export default function HtmlAPI() {
  const codeHtml = `<a-one-checkbox
  v-model="model"
  :is-width-auto="true"
  label="is-width-auto='true'"
></a-one-checkbox>
<a-one-checkbox
  v-model="model"
  :is-width-auto="false"
  class="a_mt_3"
  label="is-width-auto='false'"
></a-one-checkbox>`;

  return {
    codeHtml,
  };
}
