export default function HtmlAPI() {
  const codeHtml = `<a-form
  v-model="model"
  :data="dataForm"
/>
<pre>{{ model }}</pre>`;

  return {
    codeHtml,
  };
}
