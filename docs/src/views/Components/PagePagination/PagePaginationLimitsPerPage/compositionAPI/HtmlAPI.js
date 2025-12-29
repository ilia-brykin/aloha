export default function HtmlAPI() {
  const codeHtml = `<a-multiselect-ordered
  class="a_mb_4"
  v-model="limitsPerPageModel"
  :data="limitsPerPageOptions"
  key-id="value"
  key-label="label"
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
