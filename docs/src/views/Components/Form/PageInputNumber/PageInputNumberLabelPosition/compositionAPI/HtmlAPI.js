export default function HtmlAPI() {
  const codeHtml = `<a-input-number
  v-model="model"
  label="label-position: float"
  label-position="float"
></a-input-number>
<a-input-number
  v-model="model"
  label="label-position: inset"
  label-position="inset"
></a-input-number>
<a-input-number
  v-model="model"
  label="label-position: top"
  label-position="top"
></a-input-number>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
