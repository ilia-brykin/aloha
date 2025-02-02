export default function HtmlAPI() {
  const codeHtml = `<a-button
  class="a_btn a_btn_transparent_primary"
  text="transparent-primary"
  @click="onAlert('transparent-primary')"
>
</a-button>
<a-button
  class="a_btn a_btn_transparent_secondary a_ml_2"
  text="transparent-secondary"
  @click="onAlert('transparent-secondary')"
>
</a-button>
<a-button
  class="a_btn a_btn_transparent_tertiary a_ml_2"
  text="transparent-tertiary"
  @click="onAlert('transparent-tertiary')"
>
</a-button>
<a-button
  class="a_btn a_btn_transparent_success a_ml_2"
  text="transparent-success"
  @click="onAlert('transparent-success')"
>
</a-button>
<a-button
  class="a_btn a_btn_transparent_info a_ml_2"
  text="transparent-info"
  @click="onAlert('transparent-info')"
>
</a-button>
<a-button
  class="a_btn a_btn_transparent_warning a_ml_2"
  text="transparent-warning"
  @click="onAlert('transparent-warning')"
>
</a-button>
<a-button
  class="a_btn a_btn_transparent_danger a_ml_2"
  text="transparent-danger"
  @click="onAlert('transparent-danger')"
>
</a-button>
<a-button
  class="a_btn a_btn_transparent_dark a_ml_2"
  text="transparent-dark"
  @click="onAlert('transparent-dark')"
>
</a-button>
<a-button
  class="a_btn a_btn_transparent_light a_ml_2"
  text="transparent-light"
  @click="onAlert('transparent-light')"
>
</a-button>`;

  return {
    codeHtml,
  };
}
