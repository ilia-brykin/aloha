export default function HtmlAPI() {
  const codeHtml = `<a-button
  class="a_btn a_btn_primary"
  :loading="loading"
  loading-align="left"
  text="loading-align=\\"left\\""
  @click="toggleLoading"
>
</a-button>
<a-button
  class="a_btn a_btn_primary a_ml_2"
  :loading="loading"
  loading-align="right"
  text="loading-align=\\"right\\""
  @click="toggleLoading"
>
</a-button>`;

  return {
    codeHtml,
  };
}
