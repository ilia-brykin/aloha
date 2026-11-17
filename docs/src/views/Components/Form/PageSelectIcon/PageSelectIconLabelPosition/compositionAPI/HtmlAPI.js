export default function HtmlAPI() {
  const codeHtml = `<a-select-icon
  v-model="model"
  label="label-position: float"
  label-position="float"
  type="select"
></a-select-icon>
<a-select-icon
  v-model="model"
  label="label-position: inset"
  label-position="inset"
  type="select"
></a-select-icon>
<a-select-icon
  v-model="model"
  label="label-position: top"
  label-position="top"
  type="select"
></a-select-icon>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
