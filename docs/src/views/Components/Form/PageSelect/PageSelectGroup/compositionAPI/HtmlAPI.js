export default function HtmlAPI() {
  const codeHtml = `<a-select
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  :key-group="['alohaBR', 'aloha']"
  label="Aloha"
  type="select"
></a-select>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
