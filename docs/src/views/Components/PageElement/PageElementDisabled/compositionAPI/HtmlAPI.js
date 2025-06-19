export default function HtmlAPI() {
  const codeHtml = `<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-element
    :disabled="true"
    class="a_btn a_btn_primary"
    text="primary"
    type="button"
    @click="onAlert('primary')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_secondary"
    text="secondary"
    type="button"
    @click="onAlert('secondary')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_tertiary"
    text="tertiary"
    type="button"
    @click="onAlert('tertiary')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_success"
    text="success"
    type="button"
    @click="onAlert('success')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_info"
    text="info"
    type="button"
    @click="onAlert('info')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_warning"
    text="warning"
    type="button"
    @click="onAlert('warning')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_danger"
    text="danger"
    type="button"
    @click="onAlert('danger')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_dark"
    text="dark"
    type="button"
    @click="onAlert('dark')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_light"
    text="light"
    type="button"
    @click="onAlert('light')"
  ></a-element>
  <a-element
    :disabled="true"
    :is-switch="true"
    text="switch"
    type="button"
  ></a-element>
  <a-element
    :disabled="true"
    :is-switch="true"
    :model-switch="true"
    text="switch active"
    type="button"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_outline_primary"
    text="outline-primary"
    type="button"
    @click="onAlert('outline-primary')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_outline_secondary"
    text="outline-secondary"
    type="button"
    @click="onAlert('outline-secondary')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_outline_tertiary"
    text="outline-tertiary"
    type="button"
    @click="onAlert('outline-tertiary')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_outline_success"
    text="outline-success"
    type="button"
    @click="onAlert('outline-success')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_outline_info"
    text="outline-info"
    type="button"
    @click="onAlert('outline-info')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_outline_warning"
    text="outline-warning"
    type="button"
    @click="onAlert('outline-warning')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_outline_danger"
    text="outline-danger"
    type="button"
    @click="onAlert('outline-danger')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_outline_dark"
    text="outline-dark"
    type="button"
    @click="onAlert('outline-dark')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_outline_light"
    text="outline-light"
    type="button"
    @click="onAlert('outline-light')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_transparent_primary"
    text="transparent-primary"
    type="button"
    @click="onAlert('transparent-primary')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_transparent_secondary"
    text="transparent-secondary"
    type="button"
    @click="onAlert('transparent-secondary')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_transparent_tertiary"
    text="transparent-tertiary"
    type="button"
    @click="onAlert('transparent-tertiary')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_transparent_success"
    text="transparent-success"
    type="button"
    @click="onAlert('transparent-success')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_transparent_info"
    text="transparent-info"
    type="button"
    @click="onAlert('transparent-info')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_transparent_warning"
    text="transparent-warning"
    type="button"
    @click="onAlert('transparent-warning')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_transparent_danger"
    text="transparent-danger"
    type="button"
    @click="onAlert('transparent-danger')"
  ></a-element>
  <a-element
    :disabled="true"
    class="a_btn a_btn_transparent_dark"
    text="transparent-dark"
    type="button"
    @click="onAlert('transparent-dark')"
  ></a-element>
  <a-element
    :disabled="true"
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
