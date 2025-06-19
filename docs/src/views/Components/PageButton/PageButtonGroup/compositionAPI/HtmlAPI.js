export default function HtmlAPI() {
  const codeHtml = `<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <div
    class="a_btn_group"
    role="group"
  >
    <a-button
      class="a_btn a_btn_primary"
      text="primary"
      @click="onAlert('primary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_secondary"
      text="secondary"
      @click="onAlert('secondary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_success"
      text="success"
      @click="onAlert('success')"
    ></a-button>
    <a-button
      class="a_btn a_btn_info"
      text="info"
      @click="onAlert('info')"
    ></a-button>
  </div>
  <div
    class="a_btn_group"
    role="group"
  >
    <a-button
      class="a_btn a_btn_outline_primary"
      text="outline-primary"
      @click="onAlert('outline-primary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_secondary"
      text="outline-secondary"
      @click="onAlert('outline-secondary')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_success"
      text="outline-success"
      @click="onAlert('outline-success')"
    ></a-button>
    <a-button
      class="a_btn a_btn_outline_info"
      text="outline-info"
      @click="onAlert('outline-info')"
    ></a-button>
  </div>
</div>`;

  return {
    codeHtml,
  };
}
