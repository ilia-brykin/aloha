export default function HtmlAPI() {
  const codeHtml = `<a-pagination-pages
  v-model:page="page"
  :limit="10"
  :total-count="87"
  size="small"
/>
<a-pagination-pages
  v-model:page="page"
  :limit="10"
  :total-count="87"
/>
<a-pagination-pages
  v-model:page="page"
  :limit="10"
  :total-count="87"
  size="large"
/>`;

  return {
    codeHtml,
  };
}
