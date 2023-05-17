export default function HtmlAPI() {
  const codeHtml = `<a-link
  class="a_btn a_btn_primary"
  text="Aloha"
  :is-title-html="true"
  href="https://github.com/"
>
  <template
    v-slot:linkTitle
  >
    <strong>(***Aloha***)</strong>
  </template>
</a-link>`;

  return {
    codeHtml,
  };
}
