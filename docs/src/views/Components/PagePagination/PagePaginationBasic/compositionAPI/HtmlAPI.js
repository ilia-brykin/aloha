export default function HtmlAPI() {
  const codeHtml = `<div 
  class="page_pagination__items"
>
  <div 
    v-for="blockNumber in blockNumbers"
    :key="blockNumber"
    class="page_pagination__item"
  >
    <span class="page_pagination__item_index">{{ blockNumber }}</span>
  </div>
</div>
<a-pagination
  :count-all-rows="countAllRows"
  :limit="limit"
  :limits-per-page="limitsPerPage"
  :max-pages="maxPages"
  :offset="offset"
  :rows-length="rowsLength"
  @update:limit="updateLimit"
  @update:offset="updateOffset"
></a-pagination>`;

  return {
    codeHtml,
  };
}
