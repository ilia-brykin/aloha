export default function HtmlAPI() {
  const codeHtml = `<a-router-link-config
  v-model="model"
  :required="true"
  label="Aloha"
></a-router-link-config>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
