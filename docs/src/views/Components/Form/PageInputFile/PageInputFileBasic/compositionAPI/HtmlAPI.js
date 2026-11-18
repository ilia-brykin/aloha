export default function HtmlAPI() {
  const codeHtml = `<a-input-file
  v-model="model"
  label="Documents"
></a-input-file>
<div>model: {{ model ? model.name : "" }}</div>`;

  return {
    codeHtml,
  };
}
