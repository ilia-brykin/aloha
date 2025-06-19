export default function HtmlAPI() {
  const codeHtml = `<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-element
    class="a_btn a_btn_primary a_btn_large"
    text="large"
    type="button"
    @click="onAlert('large')"
  ></a-element>
  <a-element
    class="a_btn a_btn_primary a_btn_small"
    text="small"
    type="button"
    @click="onAlert('small')"
  ></a-element>
</div>`;

  return {
    codeHtml,
  };
}
