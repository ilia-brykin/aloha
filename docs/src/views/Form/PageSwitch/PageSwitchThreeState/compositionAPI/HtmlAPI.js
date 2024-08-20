export default function HtmlAPI() {
  const codeHtml = `<a-switch
  v-model="model"
  :default-value="null"
  :is-three-state="true"
  default-label="Default"
></a-switch>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
