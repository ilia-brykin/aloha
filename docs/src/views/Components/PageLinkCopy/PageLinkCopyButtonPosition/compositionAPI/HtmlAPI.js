export default function HtmlAPI() {
  const codeHtml = `<a-link-copy
  button-position="left"
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
></a-link-copy>
<a-link-copy
  class="a_ml_2"
  button-position="right"
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
></a-link-copy>`;

  return {
    codeHtml,
  };
}
