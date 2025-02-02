export default function HtmlAPI() {
  const codeHtml = `<a-input-currency
  v-model="model"
  label="Input"
></a-input-currency>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
