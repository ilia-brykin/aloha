export default function HtmlAPI() {
  const codeHtml = `<a-select
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
  type="select"
></a-select>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
