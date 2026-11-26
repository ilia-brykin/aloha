export default function HtmlAPI() {
  const codeHtml = `<a-pagination-pages
  :limit="limit"
  :offset="offset"
  :show-edges="true"
  :total-count="totalCount"
  @update:offset="updateOffset"
/>`;

  return {
    codeHtml,
  };
}
