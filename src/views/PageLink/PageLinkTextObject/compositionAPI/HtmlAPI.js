export default function HtmlAPI() {
  const codeHtml = `<a-link
  class="a_btn a_btn_primary"
  :text="{ mobile: 'Aloha', desktop: 'Aloha-desktop' }"
  href="https://github.com/"
>
</a-link>`;

  return {
    codeHtml,
  };
}
