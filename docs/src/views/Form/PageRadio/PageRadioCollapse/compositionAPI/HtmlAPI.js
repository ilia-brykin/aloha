export default function HtmlAPI() {
  const codeHtml = `<a-radio
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
  type="select"
  :collapse="true"
></a-radio>
<div>model: {{ model }}</div>
<a-radio
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
  type="select"
  :collapse="true"
  :is-collapsed="true"
></a-radio>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
