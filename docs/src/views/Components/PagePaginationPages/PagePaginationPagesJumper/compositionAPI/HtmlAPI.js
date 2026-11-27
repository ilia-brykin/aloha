export default function HtmlAPI() {
  const codeHtml = `<a-pagination-pages
  :limit="limit"
  :offset="offset"
  :show-edges="true"
  :show-jumper="true"
  :total-count="totalCount"
  @update:offset="updateOffset"
/>`;

  return {
    codeHtml,
  };
}
