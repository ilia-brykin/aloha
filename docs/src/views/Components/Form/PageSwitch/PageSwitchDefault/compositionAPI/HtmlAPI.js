export default function HtmlAPI() {
  const codeHtml = `<a-switch
  v-model="model"
  :change="changeModel"
  :default="true"
></a-switch>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
