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
<a-pagination-pages
  mode="short"
  :limit="limit"
  :offset="offset"
  :total-count="totalCount"
  @update:offset="updateOffset"
></a-pagination-pages>`;

  return {
    codeHtml,
  };
}
