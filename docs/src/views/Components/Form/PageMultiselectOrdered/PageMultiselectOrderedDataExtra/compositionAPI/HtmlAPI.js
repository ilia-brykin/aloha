export default function HtmlAPI() {
  const codeHtml = `<a-multiselect-ordered
  v-model="model"
  :data="data"
  :data-extra="dataExtra"
  key-id="value"
  key-label="label"
  key-group="group"
  label="Grouped data extra"
  :search="true"
  :search-in-group="true"
></a-multiselect-ordered>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
