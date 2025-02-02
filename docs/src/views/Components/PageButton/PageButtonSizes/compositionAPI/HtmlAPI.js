export default function HtmlAPI() {
  const codeHtml = `<a-button
  class="a_btn a_btn_primary a_btn_large"
  text="large"
  @click="onAlert('large')"
>
</a-button>
<a-button
  class="a_btn a_btn_primary a_btn_small a_ml_2"
  text="small"
  @click="onAlert('small')"
>
</a-button>`;

  return {
    codeHtml,
  };
}
