export default function HtmlAPI() {
  const codeHtml = `<a-pagination
  :count-all-rows="countAllRows"
  :limit="limit"
  :limits-per-page="limitsPerPage"
  :max-pages="maxPages"
  :offset="offset"
  :rows-length="rowsLength"
  :total-rows-count="totalRowsCount"
  @update:limit="updateLimit"
  @update:offset="updateOffset"
></a-pagination>`;

  return {
    codeHtml,
  };
}
