export default function HtmlAPI() {
  const codeHtml = `<a-link
  class="a_btn a_btn_primary"
  text="Aloha"
  href="https://github.com/"
>
  <template
    v-slot:linkPrepend
  >
    <span>(***)</span>
  </template>
</a-link>`;

  return {
    codeHtml,
  };
}
