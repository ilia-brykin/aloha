export default function HtmlAPI() {
  const codeHtml = `<a-multiselect-ordered
  :change="changeModel"
  :model-value="model"
  :data="data"
  key-id="value"
  key-label="label"
  label="Select"
></a-multiselect-ordered>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
