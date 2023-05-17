export default function HtmlAPI() {
  const codeHtml = `<a-button
  class="a_btn a_btn_link"
  text="link"
  @click="onAlert('link')"
>
</a-button>
<a-button
  class="a_btn a_btn_primary a_ml_2"
  text="primary"
  @click="onAlert('primary')"
>
</a-button>
<a-button
  class="a_btn a_btn_secondary a_ml_2"
  text="secondary"
  @click="onAlert('secondary')"
>
</a-button>
<a-button
  class="a_btn a_btn_success a_ml_2"
  text="success"
  @click="onAlert('success')"
>
</a-button>
<a-button
  class="a_btn a_btn_info a_ml_2"
  text="info"
  @click="onAlert('info')"
>
</a-button>
<a-button
  class="a_btn a_btn_warning a_ml_2"
  text="warning"
  @click="onAlert('warning')"
>
</a-button>
<a-button
  class="a_btn a_btn_danger a_ml_2"
  text="danger"
  @click="onAlert('danger')"
>
</a-button>
<a-button
  class="a_btn a_btn_dark a_ml_2"
  text="dark"
  @click="onAlert('dark')"
>
</a-button>
<a-button
  class="a_btn a_btn_light a_ml_2"
  text="light"
  @click="onAlert('light')"
>
</a-button>`;

  return {
    codeHtml,
  };
}
