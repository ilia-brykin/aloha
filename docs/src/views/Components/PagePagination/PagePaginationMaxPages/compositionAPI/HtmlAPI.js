export default function HtmlAPI() {
  const codeHtml = `<a-slider
  v-model="maxPages"
  :max="10"
  :min="1"
  :step="1"
  class="a_mb_4"
  label="_A_PAGINATION_MAX_PAGES_LABEL_"
></a-slider>
<div 
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
  :limit="limit"
  :limits-per-page="limitsPerPage"
  :max-pages="maxPages"
  :offset="offset"
  :rows-length="rowsLength"
  :total-count="totalCount"
  @update:limit="updateLimit"
  @update:offset="updateOffset"
></a-pagination>`;

  return {
    codeHtml,
  };
}
