export default function HtmlAPI() {
  const codeHtml = `<a-switch
  v-model="model"
  :false-value="0"
  :true-value="1"
></a-switch>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
