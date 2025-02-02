export default function HtmlAPI() {
  const codeHtml = `<a-radio
  v-model="model"
  :data="data"
  :is-model-array="true"
  :key-group="['alohaBR', 'aloha']"
  key-id="id"
  key-label="label"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
