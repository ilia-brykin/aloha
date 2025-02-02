export default function HtmlAPI() {
  const codeHtml = `<a-switch
  v-model="model"
></a-switch>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
