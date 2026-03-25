export default function HtmlAPI() {
  const codeHtml = `<a-multiselect-ordered
  v-model="model1"
  key-id="id"
  key-label="label"
  label="Ordered list with retrieve"
  select-label="Add value"
  :url="url"
  :url-retrieve="urlRetrieve"
/>
<div>model1: {{ model1 }}</div>`;

  return {
    codeHtml,
  };
}
