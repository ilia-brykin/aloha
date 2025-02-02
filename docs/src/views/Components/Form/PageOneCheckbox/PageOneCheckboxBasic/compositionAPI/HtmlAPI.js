export default function HtmlAPI() {
  const codeHtml = `<a-one-checkbox
  v-model="model"
  label="Aloha"
></a-one-checkbox>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
