export default function HtmlAPI() {
  const codeHtml = `<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <div
    class="a_btn_group a_btn_group_large"
    role="group"
  >
    <a-element
      class="a_btn a_btn_primary"
      text="primary"
      type="button"
      @click="onAlert('primary')"
    ></a-element>
    <a-element
      class="a_btn a_btn_secondary"
      text="secondary"
      type="button"
      @click="onAlert('secondary')"
    ></a-element>
    <a-element
      class="a_btn a_btn_success"
      text="success"
      type="button"
      @click="onAlert('success')"
    ></a-element>
    <a-element
      class="a_btn a_btn_info"
      text="info"
      type="button"
      @click="onAlert('info')"
    ></a-element>
  </div>
  <div
    class="a_btn_group a_btn_group_small"
    role="group"
  >
    <a-element
      class="a_btn a_btn_outline_primary"
      text="outline-primary"
      type="button"
      @click="onAlert('outline-primary')"
    ></a-element>
    <a-element
      class="a_btn a_btn_outline_secondary"
      text="outline-secondary"
      type="button"
      @click="onAlert('outline-secondary')"
    ></a-element>
    <a-element
      class="a_btn a_btn_outline_success"
      text="outline-success"
      type="button"
      @click="onAlert('outline-success')"
    ></a-element>
    <a-element
      class="a_btn a_btn_outline_info"
      text="outline-info"
      type="button"
      @click="onAlert('outline-info')"
    ></a-element>
  </div>
</div>`;

  return {
    codeHtml,
  };
}
