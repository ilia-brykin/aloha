export default function HtmlAPI() {
  const codeHtml = `<a-switch
  v-model="isDisabled"
  class="a_mb_4"
  label="_LBL_DISABLED_"
></a-switch>
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
<a-pagination-pages
  :disabled="isDisabled"
  :limit="limit"
  :max-pages="maxPages"
  :offset="offset"
  :total-count="totalCount"
  @update:offset="updateOffset"
></a-pagination-pages>`;

  return {
    codeHtml,
  };
}
