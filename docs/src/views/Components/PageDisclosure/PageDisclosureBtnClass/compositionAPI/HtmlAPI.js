export default function HtmlAPI() {
  const codeHtml = `<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
  btn-class="a_btn a_btn_primary"
  btn-parent-class="a_text_left"
></a-disclosure>`;

  return {
    codeHtml,
  };
}
