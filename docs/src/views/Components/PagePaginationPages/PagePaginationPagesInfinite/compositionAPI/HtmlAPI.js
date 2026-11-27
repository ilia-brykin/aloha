export default function HtmlAPI() {
  const codeHtml = `<a-pagination-pages
  :limit="limit"
  :total-count="totalCount"
  mode="infinite"
  @update:limit="updateLimit"
/>`;

  return {
    codeHtml,
  };
}
