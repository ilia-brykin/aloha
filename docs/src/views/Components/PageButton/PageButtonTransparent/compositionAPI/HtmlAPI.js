export default function HtmlAPI() {
  const codeHtml = `<div 
  class="a_d_flex a_flex_wrap a_align_items_start gap_1"
>
  <a-button
    class="a_btn a_btn_transparent_primary"
    text="transparent-primary"
    @click="onAlert('transparent-primary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_secondary"
    text="transparent-secondary"
    @click="onAlert('transparent-secondary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_tertiary"
    text="transparent-tertiary"
    @click="onAlert('transparent-tertiary')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_success"
    text="transparent-success"
    @click="onAlert('transparent-success')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_info"
    text="transparent-info"
    @click="onAlert('transparent-info')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_warning"
    text="transparent-warning"
    @click="onAlert('transparent-warning')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_danger"
    text="transparent-danger"
    @click="onAlert('transparent-danger')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_dark"
    text="transparent-dark"
    @click="onAlert('transparent-dark')"
  ></a-button>
  <a-button
    class="a_btn a_btn_transparent_light"
    text="transparent-light"
    @click="onAlert('transparent-light')"
  ></a-button>
</div>`;

  return {
    codeHtml,
  };
}
