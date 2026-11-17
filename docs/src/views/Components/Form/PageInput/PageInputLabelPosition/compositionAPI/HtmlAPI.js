export default function HtmlAPI() {
  const codeHtml = `<a-input
  v-model="model"
  label="label-position: float"
  label-position="float"
></a-input>
<a-input
  v-model="model"
  label="label-position: inset"
  label-position="inset"
></a-input>
<a-input
  v-model="model"
  label="label-position: top"
  label-position="top"
></a-input>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
