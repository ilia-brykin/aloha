export default function HtmlAPI() {
  const codeHtml = `<a-button
  class="a_btn a_btn_outline_primary"
  text="outline-primary"
  @click="onAlert('outline-primary')"
>
</a-button>
<a-button
  class="a_btn a_btn_outline_secondary a_ml_2"
  text="outline-secondary"
  @click="onAlert('outline-secondary')"
>
</a-button>
<a-button
  class="a_btn a_btn_outline_success a_ml_2"
  text="outline-success"
  @click="onAlert('outline-success')"
>
</a-button>
<a-button
  class="a_btn a_btn_outline_info a_ml_2"
  text="outline-info"
  @click="onAlert('outline-info')"
>
</a-button>
<a-button
  class="a_btn a_btn_outline_warning a_ml_2"
  text="outline-warning"
  @click="onAlert('outline-warning')"
>
</a-button>
<a-button
  class="a_btn a_btn_outline_danger a_ml_2"
  text="outline-danger"
  @click="onAlert('outline-danger')"
>
</a-button>
<a-button
  class="a_btn a_btn_outline_dark a_ml_2"
  text="outline-dark"
  @click="onAlert('outline-dark')"
>
</a-button>
<a-button
  class="a_btn a_btn_outline_light a_ml_2"
  text="outline-light"
  @click="onAlert('outline-light')"
>
</a-button>`;

  return {
    codeHtml,
  };
}
