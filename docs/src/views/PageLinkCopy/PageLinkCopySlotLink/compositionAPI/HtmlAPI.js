export default function HtmlAPI() {
  const codeHtml = `<a-link-copy
  :link-options="{ class: 'a_btn a_btn_secondary', href: 'https://github.com/' }"
>
  <template
    v-slot:link
  >
    <strong>github.com</strong>
  </template>
</a-link-copy>`;

  return {
    codeHtml,
  };
}
