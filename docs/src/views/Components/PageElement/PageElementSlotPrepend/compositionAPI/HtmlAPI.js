export default function HtmlAPI() {
  const codeHtml = `<a-element
  class="a_btn a_btn_primary"
  text="Aloha"
  type="text"
>
  <template
    v-slot:buttonPrepend
  >
    <span>(***)</span>
  </template>
</a-element>`;

  return {
    codeHtml,
  };
}
