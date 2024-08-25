export default function HtmlAPI() {
  const codeHtml = `<a-checkbox
  v-model="model"
  :data="data"
  :is-data-simple-array="true"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-checkbox>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
