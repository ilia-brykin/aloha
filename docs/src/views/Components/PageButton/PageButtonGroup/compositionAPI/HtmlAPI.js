export default function HtmlAPI() {
  const codeHtml = `<div
  class="a_btn_group"
>
  <a-button
    class="a_btn a_btn_primary"
    text="primary"
    @click="onAlert('primary')"
  >
  </a-button>
  <a-button
    class="a_btn a_btn_secondary"
    text="secondary"
    @click="onAlert('secondary')"
  >
  </a-button>
  <a-button
    class="a_btn a_btn_success"
    text="success"
    @click="onAlert('success')"
  >
  </a-button>
  <a-button
    class="a_btn a_btn_info"
    text="info"
    @click="onAlert('info')"
  >
  </a-button>
</div>
<div
  class="a_btn_group a_ml_3"
>
  <a-button
    class="a_btn a_btn_outline_primary"
    text="outline-primary"
    @click="onAlert('outline-primary')"
  >
  </a-button>
  <a-button
    class="a_btn a_btn_outline_secondary"
    text="outline-secondary"
    @click="onAlert('outline-secondary')"
  >
  </a-button>
  <a-button
    class="a_btn a_btn_outline_success"
    text="outline-success"
    @click="onAlert('outline-success')"
  >
  </a-button>
  <a-button
    class="a_btn a_btn_outline_info"
    text="outline-info"
    @click="onAlert('outline-info')"
  >
  </a-button>
</div>`;

  return {
    codeHtml,
  };
}
