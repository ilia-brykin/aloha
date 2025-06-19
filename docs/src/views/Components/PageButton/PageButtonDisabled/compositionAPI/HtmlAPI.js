export default function HtmlAPI() {
  const codeHtml = `<div 
  class="a_d_flex a_flex_wrap gap_1"
>
  <a-button
    class="a_btn a_btn_primary"
    text="primary"
    :disabled="true"
    @click="onAlert('primary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_secondary"
    text="secondary"
    :disabled="true"
    @click="onAlert('secondary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_tertiary"
    text="tertiary"
    :disabled="true"
    @click="onAlert('tertiary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_success"
    text="success"
    :disabled="true"
    @click="onAlert('success')"
  ></a-button>
  <a-button
    class="a_btn a_btn_info"
    text="info"
    :disabled="true"
    @click="onAlert('info')"
  ></a-button>
  <a-button
    class="a_btn a_btn_warning"
    text="warning"
    :disabled="true"
    @click="onAlert('warning')"
  ></a-button>
  <a-button
    class="a_btn a_btn_danger"
    text="danger"
    :disabled="true"
    @click="onAlert('danger')"
  ></a-button>
  <a-button
    class="a_btn a_btn_dark"
    text="dark"
    :disabled="true"
    @click="onAlert('dark')"
  ></a-button>
  <a-button
    class="a_btn a_btn_light"
    text="light"
    :disabled="true"
    @click="onAlert('light')"
  ></a-button>
  <a-button
    class="a_ml_2"
    text="switch"
    :is-switch="true"
    :disabled="true"
  ></a-button>
  <a-button
    class="a_ml_2"
    text="switch active"
    :is-switch="true"
    :model-switch="true"
    :disabled="true"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_primary"
    text="outline-primary"
    :disabled="true"
    @click="onAlert('outline-primary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_secondary"
    text="outline-secondary"
    :disabled="true"
    @click="onAlert('outline-secondary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_tertiary"
    text="outline-tertiary"
    :disabled="true"
    @click="onAlert('outline-tertiary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_success"
    text="outline-success"
    :disabled="true"
    @click="onAlert('outline-success')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_info"
    text="outline-info"
    :disabled="true"
    @click="onAlert('outline-info')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_warning"
    text="outline-warning"
    :disabled="true"
    @click="onAlert('outline-warning')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_danger"
    text="outline-danger"
    :disabled="true"
    @click="onAlert('outline-danger')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_dark"
    text="outline-dark"
    :disabled="true"
    @click="onAlert('outline-dark')"
  ></a-button>
  <a-button
    class="a_btn a_btn_outline_light"
    text="outline-light"
    :disabled="true"
    @click="onAlert('outline-light')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_primary"
    text="transparent-primary"
    :disabled="true"
    @click="onAlert('transparent-primary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_secondary"
    text="transparent-secondary"
    :disabled="true"
    @click="onAlert('transparent-secondary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_tertiary"
    text="transparent-tertiary"
    :disabled="true"
    @click="onAlert('transparent-tertiary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_success"
    text="transparent-success"
    :disabled="true"
    @click="onAlert('transparent-success')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_info"
    text="transparent-info"
    :disabled="true"
    @click="onAlert('transparent-info')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_warning"
    text="transparent-warning"
    :disabled="true"
    @click="onAlert('transparent-warning')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_danger"
    text="transparent-danger"
    :disabled="true"
    @click="onAlert('transparent-danger')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_dark"
    text="transparent-dark"
    :disabled="true"
    @click="onAlert('transparent-dark')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_light"
    text="transparent-light"
    :disabled="true"
    @click="onAlert('transparent-light')"
  ></a-button>
</div>`;

  return {
    codeHtml,
  };
}
