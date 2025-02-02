export default function HtmlAPI() {
  const codeHtml = `<a-disclosure
  :html-less="htmlLess"
  :html-more="htmlMore"
></a-disclosure>`;

  return {
    codeHtml,
  };
}
