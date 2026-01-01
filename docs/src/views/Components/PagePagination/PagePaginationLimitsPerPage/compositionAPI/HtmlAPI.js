export default function HtmlAPI() {
  const codeHtml = `<a-multiselect-ordered
  v-model="limitsPerPageModel"
  :data="limitsPerPageOptions"
  :is-data-simple-array="true"
  class="a_mb_4"
  label="_A_PAGINATION_LIMITS_PER_PAGE_LABEL_"
></a-multiselect-ordered>
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
  :limits-per-page="limitsPerPageModel"
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
