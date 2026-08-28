export default function HtmlAPI() {
  const codeHtml = `<a-form
  v-model="model"
  :data="data"
  :show-errors="false"
  :show-required-text="false"
></a-form>
<pre>{{ model }}</pre>`;

  return {
    codeHtml,
  };
}
