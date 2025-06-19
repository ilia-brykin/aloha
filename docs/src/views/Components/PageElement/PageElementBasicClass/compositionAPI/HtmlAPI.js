export default function HtmlAPI() {
  const codeHtml = `<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-element
    class="a_btn a_btn_link"
    text="link"
    type="button"
    @click="onAlert('link')"
  ></a-element>
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
    class="a_btn a_btn_tertiary"
    text="tertiary"
    type="button"
    @click="onAlert('tertiary')"
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
  <a-element
    class="a_btn a_btn_warning"
    text="warning"
    type="button"
    @click="onAlert('warning')"
  ></a-element>
  <a-element
    class="a_btn a_btn_danger"
    text="danger"
    type="button"
    @click="onAlert('danger')"
  ></a-element>
  <a-element
    class="a_btn a_btn_dark"
    text="dark"
    type="button"
    @click="onAlert('dark')"
  ></a-element>
  <a-element
    class="a_btn a_btn_light"
    text="light"
    type="button"
    @click="onAlert('light')"
  ></a-element>
</div>`;

  return {
    codeHtml,
  };
}
