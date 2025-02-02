export default function HtmlAPI() {
  const codeHtml = `<a-show-more 
  :html="html"
  btn-class="a_btn a_btn_primary"
  btn-parent-class="a_text_left"
></a-show-more>`;

  return {
    codeHtml,
  };
}
