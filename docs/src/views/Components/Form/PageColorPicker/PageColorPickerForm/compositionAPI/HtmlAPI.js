export default function HtmlAPI() {
  const codeHtml = `<a-form
  v-model="model"
  :data="data"
></a-form>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
