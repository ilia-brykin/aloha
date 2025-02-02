export default function HtmlAPI() {
  const codeHtml = `<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
  :disabled="true"
></a-disclosure>`;

  return {
    codeHtml,
  };
}
