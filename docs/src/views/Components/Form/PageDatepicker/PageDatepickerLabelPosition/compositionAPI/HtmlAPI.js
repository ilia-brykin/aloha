export default function HtmlAPI() {
  const codeHtml = `<a-datepicker
  v-model="model"
  label="label-position: float"
  label-position="float"
></a-datepicker>
<a-datepicker
  v-model="model"
  label="label-position: inset"
  label-position="inset"
></a-datepicker>
<a-datepicker
  v-model="model"
  label="label-position: top"
  label-position="top"
></a-datepicker>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
