export default function HtmlAPI() {
  const codeHtml = `<a-select-style
  v-model="model"
  label="label-position: float"
  label-position="float"
  type="select"
></a-select-style>
<a-select-style
  v-model="model"
  label="label-position: inset"
  label-position="inset"
  type="select"
></a-select-style>
<a-select-style
  v-model="model"
  label="label-position: top"
  label-position="top"
  type="select"
></a-select-style>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
