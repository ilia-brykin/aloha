export default function HtmlAPI() {
  const codeHtml = `<a-select-style
  v-model="model1"
  :data-extended="dataExtended"
  :filter-groups="['display', 'color']"
  label="Select"
  type="select"
></a-select-style>
<div>model1: {{ model1 }}</div>`;

  return {
    codeHtml,
  };
}
