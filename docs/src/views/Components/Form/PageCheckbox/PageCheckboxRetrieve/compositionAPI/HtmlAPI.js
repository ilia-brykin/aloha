export default function HtmlAPI() {
  const codeHtml = `<a-checkbox
  v-model="model1"
  key-id="id"
  key-label="label"
  label="Checkbox with retrieve"
  :url="url"
  :url-retrieve="urlRetrieve"
/>
<div>model1: {{ model1 }}</div>`;

  return {
    codeHtml,
  };
}
