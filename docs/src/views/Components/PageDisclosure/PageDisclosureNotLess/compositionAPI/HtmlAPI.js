export default function HtmlAPI() {
  const codeHtml = `<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
  :show-less="false"
></a-disclosure>`;

  return {
    codeHtml,
  };
}
