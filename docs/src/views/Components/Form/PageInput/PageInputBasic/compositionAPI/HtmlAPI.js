export default function HtmlAPI() {
  const codeHtml = `<a-input
  v-model="model"
  label="Input"
></a-input>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
