export default function HtmlAPI() {
  const codeHtml = `<a-button
  class="a_btn a_btn_primary"
  text="Aloha"
>
  <template
    v-slot:buttonPrepend
  >
    <span>(***)</span>
  </template>
</a-button>`;

  return {
    codeHtml,
  };
}
