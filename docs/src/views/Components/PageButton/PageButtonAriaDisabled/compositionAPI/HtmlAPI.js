export default function HtmlAPI() {
  const codeHtml = `<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_primary"
    text="primary"
    @click="onAlert('primary')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_secondary"
    text="secondary"
    @click="onAlert('secondary')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_tertiary"
    text="tertiary"
    @click="onAlert('tertiary')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_success"
    text="success"
    @click="onAlert('success')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_info"
    text="info"
    @click="onAlert('info')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_warning"
    text="warning"
    @click="onAlert('warning')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_danger"
    text="danger"
    @click="onAlert('danger')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_dark"
    text="dark"
    @click="onAlert('dark')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_light"
    text="light"
    @click="onAlert('light')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    :is-switch="true"
    class="a_ml_2"
    text="switch"
  ></a-button>
  <a-button
    :aria-disabled="true"
    :is-switch="true"
    :model-switch="true"
    class="a_ml_2"
    text="switch active"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_outline_primary"
    text="outline-primary"
    @click="onAlert('outline-primary')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_outline_secondary"
    text="outline-secondary"
    @click="onAlert('outline-secondary')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_outline_tertiary"
    text="outline-tertiary"
    @click="onAlert('outline-tertiary')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_outline_success"
    text="outline-success"
    @click="onAlert('outline-success')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_outline_info"
    text="outline-info"
    @click="onAlert('outline-info')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_outline_warning"
    text="outline-warning"
    @click="onAlert('outline-warning')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_outline_danger"
    text="outline-danger"
    @click="onAlert('outline-danger')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_outline_dark"
    text="outline-dark"
    @click="onAlert('outline-dark')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_outline_light"
    text="outline-light"
    @click="onAlert('outline-light')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_transparent_primary"
    text="transparent-primary"
    @click="onAlert('transparent-primary')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_transparent_secondary"
    text="transparent-secondary"
    @click="onAlert('transparent-secondary')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_transparent_tertiary"
    text="transparent-tertiary"
    @click="onAlert('transparent-tertiary')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_transparent_success"
    text="transparent-success"
    @click="onAlert('transparent-success')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_transparent_info"
    text="transparent-info"
    @click="onAlert('transparent-info')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_transparent_warning"
    text="transparent-warning"
    @click="onAlert('transparent-warning')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_transparent_danger"
    text="transparent-danger"
    @click="onAlert('transparent-danger')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_transparent_dark"
    text="transparent-dark"
    @click="onAlert('transparent-dark')"
  ></a-button>
  <a-button
    :aria-disabled="true"
    class="a_btn a_btn_transparent_light"
    text="transparent-light"
    @click="onAlert('transparent-light')"
  ></a-button>
</div>`;

  return {
    codeHtml,
  };
}
