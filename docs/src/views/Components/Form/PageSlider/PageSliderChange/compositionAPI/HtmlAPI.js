export default function HtmlAPI() {
  const codeHtml = `<a-slider
  :change="changeModel"
  :model-value="model"
  label="_A_SLIDER_BASIC_LABEL_"
></a-input>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
