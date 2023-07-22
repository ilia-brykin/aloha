export default function HtmlAPI() {
  const codeHtml = `<a-button
  class="a_btn a_btn_primary"
  text="primary"
  :aria-disabled="true"
  @click="onAlert('primary')"
>
</a-button>
<a-button
  class="a_btn a_btn_secondary a_ml_2"
  text="secondary"
  :aria-disabled="true"
  @click="onAlert('secondary')"
>
</a-button>
<a-button
  class="a_btn a_btn_tertiary a_ml_2"
  text="tertiary"
  :aria-disabled="true"
  @click="onAlert('tertiary')"
>
</a-button>
<a-button
  class="a_btn a_btn_success a_ml_2"
  text="success"
  :aria-disabled="true"
  @click="onAlert('success')"
>
</a-button>
<a-button
  class="a_btn a_btn_info a_ml_2"
  text="info"
  :aria-disabled="true"
  @click="onAlert('info')"
>
</a-button>
<a-button
  class="a_btn a_btn_warning a_ml_2"
  text="warning"
  :aria-disabled="true"
  @click="onAlert('warning')"
>
</a-button>
<a-button
  class="a_btn a_btn_danger a_ml_2"
  text="danger"
  :aria-disabled="true"
  @click="onAlert('danger')"
>
</a-button>
<a-button
  class="a_btn a_btn_dark a_ml_2"
  text="dark"
  :aria-disabled="true"
  @click="onAlert('dark')"
>
</a-button>
<a-button
  class="a_btn a_btn_light a_ml_2"
  text="light"
  :aria-disabled="true"
  @click="onAlert('light')"
></a-button>
<a-button
  class="a_ml_2"
  text="switch"
  :is-switch="true"
  :aria-disabled="true"
></a-button>
<a-button
  class="a_ml_2"
  text="switch active"
  :is-switch="true"
  :model-switch="true"
  :aria-disabled="true"
></a-button>
<a-button
  class="a_btn a_btn_outline_primary a_ml_2"
  text="outline-primary"
  :aria-disabled="true"
  @click="onAlert('outline-primary')"
>
</a-button>
<a-button
  class="a_btn a_btn_outline_secondary a_ml_2"
  text="outline-secondary"
  :aria-disabled="true"
  @click="onAlert('outline-secondary')"
>
</a-button>
<a-button
  class="a_btn a_btn_outline_tertiary a_ml_2"
  text="outline-tertiary"
  :aria-disabled="true"
  @click="onAlert('outline-tertiary')"
>
</a-button>
<a-button
  class="a_btn a_btn_outline_success a_ml_2"
  text="outline-success"
  :aria-disabled="true"
  @click="onAlert('outline-success')"
>
</a-button>
<a-button
  class="a_btn a_btn_outline_info a_ml_2"
  text="outline-info"
  :aria-disabled="true"
  @click="onAlert('outline-info')"
>
</a-button>
<a-button
  class="a_btn a_btn_outline_warning a_ml_2"
  text="outline-warning"
  :aria-disabled="true"
  @click="onAlert('outline-warning')"
>
</a-button>
<a-button
  class="a_btn a_btn_outline_danger a_ml_2"
  text="outline-danger"
  :aria-disabled="true"
  @click="onAlert('outline-danger')"
>
</a-button>
<a-button
  class="a_btn a_btn_outline_dark a_ml_2"
  text="outline-dark"
  :aria-disabled="true"
  @click="onAlert('outline-dark')"
>
</a-button>
<a-button
  class="a_btn a_btn_outline_light a_ml_2"
  text="outline-light"
  :aria-disabled="true"
  @click="onAlert('outline-light')"
>
</a-button>
<a-button
  class="a_btn a_btn_transparent_primary a_ml_2"
  text="transparent-primary"
  :aria-disabled="true"
  @click="onAlert('transparent-primary')"
>
</a-button>
<a-button
  class="a_btn a_btn_transparent_secondary a_ml_2"
  text="transparent-secondary"
  :aria-disabled="true"
  @click="onAlert('transparent-secondary')"
>
</a-button>
<a-button
  class="a_btn a_btn_transparent_tertiary a_ml_2"
  text="transparent-tertiary"
  :aria-disabled="true"
  @click="onAlert('transparent-tertiary')"
>
</a-button>
<a-button
  class="a_btn a_btn_transparent_success a_ml_2"
  text="transparent-success"
  :aria-disabled="true"
  @click="onAlert('transparent-success')"
>
</a-button>
<a-button
  class="a_btn a_btn_transparent_info a_ml_2"
  text="transparent-info"
  :aria-disabled="true"
  @click="onAlert('transparent-info')"
>
</a-button>
<a-button
  class="a_btn a_btn_transparent_warning a_ml_2"
  text="transparent-warning"
  :aria-disabled="true"
  @click="onAlert('transparent-warning')"
>
</a-button>
<a-button
  class="a_btn a_btn_transparent_danger a_ml_2"
  text="transparent-danger"
  :aria-disabled="true"
  @click="onAlert('transparent-danger')"
>
</a-button>
<a-button
  class="a_btn a_btn_transparent_dark a_ml_2"
  text="transparent-dark"
  :aria-disabled="true"
  @click="onAlert('transparent-dark')"
>
</a-button>
<a-button
  class="a_btn a_btn_transparent_light a_ml_2"
  text="transparent-light"
  :aria-disabled="true"
  @click="onAlert('transparent-light')"
>
</a-button>`;

  return {
    codeHtml,
  };
}
