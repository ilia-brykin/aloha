export default function HtmlAPI() {
  const codeHtml = `<a-button
  class="a_btn a_btn_outline_primary"
  text="total-count: 8"
  @click="totalCount = 8"
/>
<a-button
  class="a_btn a_btn_outline_primary"
  text="total-count: 80"
  @click="totalCount = 80"
/>
<a-pagination-pages
  v-model:page="page"
  :hide-on-single-page="true"
  :limit="10"
  :total-count="totalCount"
/>`;

  return {
    codeHtml,
  };
}
