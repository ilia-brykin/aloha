export default function HtmlAPI() {
  const codeHtml = `<a-switch
  :change="changeModel"
  :model-value="model"
></a-switch>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
