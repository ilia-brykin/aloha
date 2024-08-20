export default function HtmlAPI() {
  const codeHtml = `<a-input-currency
  v-model="model"
  :is-label-float="false"
  label="Input"
></a-input-currency>
<a-input-currency
  v-model="model"
  :is-label-float="true"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
