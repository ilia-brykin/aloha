export default function HtmlAPI() {
  const codeHtml = `<a-input-number
  v-model="model"
  label-position="top"
  label="Input"
  label-description="Aloha"
></a-input-number>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
