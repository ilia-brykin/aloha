export default function HtmlAPI() {
  const codeHtml = `<a-radio
  v-model="model1"
  key-id="id"
  key-label="label"
  label="Radio with retrieve"
  :url="url"
  :url-retrieve="urlRetrieve"
/>
<div>model1: {{ model1 }}</div>`;

  return {
    codeHtml,
  };
}
