export default function HtmlAPI() {
  const codeHtml = `<div 
  class="a_d_flex a_flex_wrap gap_1"
>
  <a-button
    class="a_btn a_btn_primary a_btn_large"
    text="large"
    @click="onAlert('large')"
  ></a-button>
  <a-button
    class="a_btn a_btn_primary a_btn_small"
    text="small"
    @click="onAlert('small')"
  ></a-button>
</div>`;

  return {
    codeHtml,
  };
}
