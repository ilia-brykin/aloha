/* eslint-disable no-useless-escape */
export default function HtmlAPI() {
  const codeHtml = `<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-element
    class="a_btn a_btn_primary"
    :loading="loading"
    loading-align="left"
    text="loading-align=\"left\""
    type="button"
    @click="toggleLoading"
  ></a-element>
  <a-element
    class="a_btn a_btn_primary"
    :loading="loading"
    loading-align="right"
    text="loading-align=\"right\""
    type="button"
    @click="toggleLoading"
  ></a-element>
</div>`;

  return {
    codeHtml,
  };
}
