export default function HtmlAPI() {
  const codeHtml = `<a-one-checkbox
  :change="changeModel"
  :model-value="model"
  label="Aloha"
></a-one-checkbox>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
