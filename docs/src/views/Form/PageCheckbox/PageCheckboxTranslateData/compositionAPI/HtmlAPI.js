export default function HtmlAPI() {
  const codeHtml = `<a-checkbox
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
  :translate-data="true"
  type="select"
></a-checkbox>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
