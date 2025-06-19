/* eslint-disable no-useless-escape */
export default function HtmlAPI() {
  const codeHtml = `<div 
  class="a_d_flex a_flex_wrap gap_1"
>
  <a-button
    class="a_btn a_btn_primary"
    :loading="loading"
    loading-align="left"
    text="loading-align=\"left\""
    @click="toggleLoading"
  ></a-button>
  <a-button
    class="a_btn a_btn_primary"
    :loading="loading"
    loading-align="right"
    text="loading-align=\"right\""
    @click="toggleLoading"
  ></a-button>
</div>`;

  return {
    codeHtml,
  };
}
