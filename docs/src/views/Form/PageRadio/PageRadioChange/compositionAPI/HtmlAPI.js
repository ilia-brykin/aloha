export default function HtmlAPI() {
  const codeHtml = `<a-radio
  :change="changeModel"
  :data="data"
  :model-value="model"
  label="Aloha"
></a-radio>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
