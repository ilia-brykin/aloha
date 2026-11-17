export default function HtmlAPI() {
  const codeHtml = `<a-color-picker
  v-model="model"
  label="Color"
></a-color-picker>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
