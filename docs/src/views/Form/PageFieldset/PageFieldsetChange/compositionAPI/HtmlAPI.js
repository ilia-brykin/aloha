export default function HtmlAPI() {
  const codeHtml = `<a-fieldset
  :change="changeModel"
  :children="children"
  :model-value="model"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
