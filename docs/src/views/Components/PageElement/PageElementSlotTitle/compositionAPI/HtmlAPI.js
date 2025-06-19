export default function HtmlAPI() {
  const codeHtml = `<a-element
  :is-title-html="true"
  class="a_btn a_btn_primary"
  text="Aloha"
  type="text"
>
  <template
    v-slot:buttonTitle
  >
    <strong>(***Aloha***)</strong>
  </template>
</a-element>`;

  return {
    codeHtml,
  };
}
