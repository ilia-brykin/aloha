export default function HtmlAPI() {
  const codeHtml = `<a-button
  :is-title-html="true"
  class="a_btn a_btn_primary"
  text="Aloha"
>
  <template
    v-slot:buttonTitle
  >
    <strong>(***Aloha***)</strong>
  </template>
</a-button>`;

  return {
    codeHtml,
  };
}
