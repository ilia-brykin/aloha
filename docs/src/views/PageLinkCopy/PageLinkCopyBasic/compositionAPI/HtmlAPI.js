export default function HtmlAPI() {
  const codeHtml = `<a-link-copy
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
></a-link-copy>`;

  return {
    codeHtml,
  };
}
