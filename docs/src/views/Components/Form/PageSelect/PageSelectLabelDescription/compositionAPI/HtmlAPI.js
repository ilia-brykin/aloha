export default function HtmlAPI() {
  const codeHtml = `<a-select
  v-model="model"
  :data="data"
  label-position="top"
  key-id="id"
  key-label="label"
  label="Select"
  label-description="Aloha"
  type="select"
></a-select>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
