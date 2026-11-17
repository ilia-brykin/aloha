export default function HtmlAPI() {
  const codeHtml = `<a-input-currency
  v-model="model"
  label="label-position: float"
  label-position="float"
></a-input-currency>
<a-input-currency
  v-model="model"
  label="label-position: inset"
  label-position="inset"
></a-input-currency>
<a-input-currency
  v-model="model"
  label="label-position: top"
  label-position="top"
></a-input-currency>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
