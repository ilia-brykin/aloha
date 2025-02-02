export default function HtmlAPI() {
  const codeHtml = `<a-link-copy
  :button-options="{ class: 'a_btn a_btn_primary', text: 'copy' }"
  :link-options="{ class: 'a_btn a_btn_primary', text: 'https://github.com/', href: 'https://github.com/' }"
  text-copy="github"
></a-link-copy>
<a-link-copy
  class="a_ml_2"
  :button-options="{ iconLeft: 'FloppyDisk' }"
  :link-options="{ class: 'a_btn a_btn_secondary', text: 'https://github.com/', href: 'https://github.com/' }"
></a-link-copy>`;

  return {
    codeHtml,
  };
}
