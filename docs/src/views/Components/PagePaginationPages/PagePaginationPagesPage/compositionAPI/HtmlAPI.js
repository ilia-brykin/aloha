export default function HtmlAPI() {
  const codeHtml = `<a-pagination-pages
  v-model:page="page"
  :limit="10"
  :total-count="87"
  @change="onChange"
/>
<pre>page: {{ page }}, change: {{ lastChange }}</pre>`;

  return {
    codeHtml,
  };
}
