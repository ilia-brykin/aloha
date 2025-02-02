export default function HtmlAPI() {
  const codeHtml = `<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
></a-disclosure>`;

  return {
    codeHtml,
  };
}
