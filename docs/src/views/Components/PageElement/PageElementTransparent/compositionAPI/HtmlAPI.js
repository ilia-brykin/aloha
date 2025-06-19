export default function HtmlAPI() {
  const codeHtml = `<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-element
    class="a_btn a_btn_transparent_primary"
    text="transparent-primary"
    type="button"
    @click="onAlert('transparent-primary')"
  ></a-element>
  <a-element
    class="a_btn a_btn_transparent_secondary"
    text="transparent-secondary"
    type="button"
    @click="onAlert('transparent-secondary')"
  ></a-element>
  <a-element
    class="a_btn a_btn_transparent_tertiary"
    text="transparent-tertiary"
    type="button"
    @click="onAlert('transparent-tertiary')"
  ></a-element>
  <a-element
    class="a_btn a_btn_transparent_success"
    text="transparent-success"
    type="button"
    @click="onAlert('transparent-success')"
  ></a-element>
  <a-element
    class="a_btn a_btn_transparent_info"
    text="transparent-info"
    type="button"
    @click="onAlert('transparent-info')"
  ></a-element>
  <a-element
    class="a_btn a_btn_transparent_warning"
    text="transparent-warning"
    type="button"
    @click="onAlert('transparent-warning')"
  ></a-element>
  <a-element
    class="a_btn a_btn_transparent_danger"
    text="transparent-danger"
    type="button"
    @click="onAlert('transparent-danger')"
  ></a-element>
  <a-element
    class="a_btn a_btn_transparent_dark"
    text="transparent-dark"
    type="button"
    @click="onAlert('transparent-dark')"
  ></a-element>
  <a-element
    class="a_btn a_btn_transparent_light"
    text="transparent-light"
    type="button"
    @click="onAlert('transparent-light')"
  ></a-element>
</div>`;

  return {
    codeHtml,
  };
}
