export default function HtmlAPI() {
  const codeHtml = `<a-input-currency
  v-model="model"
  label-position="top"
  label="Input"
  label-description="Aloha"
></a-input-currency>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
