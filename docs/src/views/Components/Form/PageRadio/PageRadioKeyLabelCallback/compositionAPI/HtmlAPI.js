export default function HtmlAPI() {
  const codeHtml = `<a-radio
  v-model="model"
  :data="data"
  :key-label-callback="onKeyLabelCallback"
  key-id="id"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
