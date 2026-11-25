export default function HtmlAPI() {
  const codeHtml = `<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_TEMPLATE_"
  :variables="variables"
  :variable-values="variableValues"
  :rules="rules"
/>
<pre>{{ model }}</pre>`;

  return {
    codeHtml,
  };
}
