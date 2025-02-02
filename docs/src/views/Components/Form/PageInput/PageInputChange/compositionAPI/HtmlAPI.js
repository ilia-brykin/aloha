export default function HtmlAPI() {
  const codeHtml = `<a-input
  :change="changeModel"
  :model-value="model"
  label="Input"
></a-input>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
