export default function HtmlAPI() {
  const codeHtml = `<a-disclosure
  :safe-html-less="htmlLess"
  :safe-html-more="htmlMore"
></a-disclosure>`;

  return {
    codeHtml,
  };
}
