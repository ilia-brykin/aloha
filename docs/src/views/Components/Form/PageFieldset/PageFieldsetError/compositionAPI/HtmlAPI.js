export default function HtmlAPI() {
  const codeHtml = `<a-fieldset
  v-model="model"
  :children="children"
  errors="Aloha"
  label="Fieldset"
></a-fieldset>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
