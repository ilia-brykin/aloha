export default function HtmlAPI() {
  const codeHtml = `<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
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
    class="a_btn a_btn_outline_tertiary"
    text="outline-tertiary"
    type="button"
    @click="onAlert('outline-tertiary')"
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
  <a-element
    class="a_btn a_btn_outline_warning"
    text="outline-warning"
    type="button"
    @click="onAlert('outline-warning')"
  ></a-element>
  <a-element
    class="a_btn a_btn_outline_danger"
    text="outline-danger"
    type="button"
    @click="onAlert('outline-danger')"
  ></a-element>
  <a-element
    class="a_btn a_btn_outline_dark"
    text="outline-dark"
    type="button"
    @click="onAlert('outline-dark')"
  ></a-element>
  <a-element
    class="a_btn a_btn_outline_light"
    text="outline-light"
    type="button"
    @click="onAlert('outline-light')"
  ></a-element>
</div>`;

  return {
    codeHtml,
  };
}
