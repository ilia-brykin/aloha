export default function HtmlAPI() {
  const codeHtml = `<a-pagination
  :count-all-rows="countAllRows"
  :has-rows="hasRows"
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
