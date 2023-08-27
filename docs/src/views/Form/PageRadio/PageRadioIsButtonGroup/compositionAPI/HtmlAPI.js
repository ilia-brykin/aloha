export default function HtmlAPI() {
  const codeHtml = `<a-radio
  v-model="model"
  :data="data"
  :is-button-group="true"
  key-id="id"
  key-label="label"
  label="Aloha"
  type="select"
></a-radio>
<div>model: {{ model }}</div>
<a-radio
  v-model="model"
  :data="data"
  :is-button-group="true"
  :key-group="['alohaBR', 'aloha']"
  key-id="id"
  key-label="label"
  label="Aloha group"
></a-radio>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
