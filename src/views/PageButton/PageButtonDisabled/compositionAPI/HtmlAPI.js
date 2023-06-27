export default function HtmlAPI() {
  const codeHtml = `<a-button
  class="a_btn a_btn_primary"
  text="primary"
  :disabled="true"
  @click="onAlert('primary')"
>
</a-button>
<a-button
  class="a_btn a_btn_secondary a_ml_2"
  text="secondary"
  :disabled="true"
  @click="onAlert('secondary')"
>
</a-button>
<a-button
  class="a_btn a_btn_tertiary a_ml_2"
  text="tertiary"
  :disabled="true"
  @click="onAlert('tertiary')"
>
</a-button>
<a-button
  class="a_btn a_btn_success a_ml_2"
  text="success"
  :disabled="true"
  @click="onAlert('success')"
>
</a-button>
<a-button
  class="a_btn a_btn_info a_ml_2"
  text="info"
  :disabled="true"
  @click="onAlert('info')"
>
</a-button>
<a-button
  class="a_btn a_btn_warning a_ml_2"
  text="warning"
  :disabled="true"
  @click="onAlert('warning')"
>
</a-button>
<a-button
  class="a_btn a_btn_danger a_ml_2"
  text="danger"
  :disabled="true"
  @click="onAlert('danger')"
>
</a-button>
<a-button
  class="a_btn a_btn_dark a_ml_2"
  text="dark"
  :disabled="true"
  @click="onAlert('dark')"
>
</a-button>
<a-button
  class="a_btn a_btn_light a_ml_2"
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
  class="a_btn a_btn_outline_primary a_ml_2"
  text="outline-primary"
  :disabled="true"
  @click="onAlert('outline-primary')"
>
</a-button>
<a-button
  class="a_btn a_btn_outline_secondary a_ml_2"
  text="outline-secondary"
  :disabled="true"
  @click="onAlert('outline-secondary')"
>
</a-button>
<a-button
  class="a_btn a_btn_outline_tertiary a_ml_2"
  text="outline-tertiary"
  :disabled="true"
  @click="onAlert('outline-tertiary')"
>
</a-button>
<a-button
  class="a_btn a_btn_outline_success a_ml_2"
  text="outline-success"
  :disabled="true"
  @click="onAlert('outline-success')"
>
</a-button>
<a-button
  class="a_btn a_btn_outline_info a_ml_2"
  text="outline-info"
  :disabled="true"
  @click="onAlert('outline-info')"
>
</a-button>
<a-button
  class="a_btn a_btn_outline_warning a_ml_2"
  text="outline-warning"
  :disabled="true"
  @click="onAlert('outline-warning')"
>
</a-button>
<a-button
  class="a_btn a_btn_outline_danger a_ml_2"
  text="outline-danger"
  :disabled="true"
  @click="onAlert('outline-danger')"
>
</a-button>
<a-button
  class="a_btn a_btn_outline_dark a_ml_2"
  text="outline-dark"
  :disabled="true"
  @click="onAlert('outline-dark')"
>
</a-button>
<a-button
  class="a_btn a_btn_outline_light a_ml_2"
  text="outline-light"
  :disabled="true"
  @click="onAlert('outline-light')"
>
</a-button>`;

  return {
    codeHtml,
  };
}
