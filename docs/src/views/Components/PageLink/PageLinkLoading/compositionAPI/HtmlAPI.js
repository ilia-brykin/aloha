export default function HtmlAPI() {
  const codeHtml = `<a-link
  class="a_btn a_btn_primary"
  :loading="loading"
  loading-align="left"
  text="loading-align=\\"left\\""
  href="https://github.com/"
>
</a-link>
<a-link
  class="a_btn a_btn_primary a_ml_2"
  :loading="loading"
  loading-align="right"
  text="loading-align=\\"right\\""
  href="https://github.com/"
>
</a-link>
<a-button
  class="a_btn a_btn_secondary a_ml_5"
  text="a-button toggle"
  @click="toggleLoading"
>
</a-button>`;

  return {
    codeHtml,
  };
}
