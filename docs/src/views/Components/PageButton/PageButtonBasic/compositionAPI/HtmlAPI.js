export default function HtmlAPI() {
  const codeHtml = `<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-button
    class="a_btn a_btn_link"
    text="link"
    @click="onAlert('link')"
  ></a-button>
  <a-button
    class="a_btn a_btn_primary"
    text="primary"
    @click="onAlert('primary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_secondary"
    text="secondary"
    @click="onAlert('secondary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_tertiary"
    text="tertiary"
    @click="onAlert('tertiary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_success"
    text="success"
    @click="onAlert('success')"
  ></a-button>
  <a-button
    class="a_btn a_btn_info"
    text="info"
    @click="onAlert('info')"
  ></a-button>
  <a-button
    class="a_btn a_btn_warning"
    text="warning"
    @click="onAlert('warning')"
  ></a-button>
  <a-button
    class="a_btn a_btn_danger"
    text="danger"
    @click="onAlert('danger')"
  ></a-button>
  <a-button
    class="a_btn a_btn_dark"
    text="dark"
    @click="onAlert('dark')"
  ></a-button>
  <a-button
    class="a_btn a_btn_light"
    text="light"
    @click="onAlert('light')"
  ></a-button>
</div>`;

  return {
    codeHtml,
  };
}
