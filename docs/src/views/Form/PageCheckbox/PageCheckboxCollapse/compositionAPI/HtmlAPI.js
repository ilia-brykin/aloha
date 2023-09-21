export default function HtmlAPI() {
  const codeHtml = `<a-checkbox
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
  type="select"
  :collapsible="true"
></a-checkbox>
<div>model: {{ model }}</div>
<a-checkbox
  v-model="model"
  :data="data"
  key-id="id"
  key-label="label"
  label="Aloha"
  type="select"
  :collapsible="true"
  :is-collapsed="true"
></a-checkbox>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
