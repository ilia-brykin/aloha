export default function HtmlAPI() {
  const codeHtml = `<a-radio
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
  :translate-data="true"
  type="select"
></a-radio>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
