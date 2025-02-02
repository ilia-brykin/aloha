export default function HtmlAPI() {
  const codeHtml = `<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
  :is-open-default="true"
></a-disclosure>`;

  return {
    codeHtml,
  };
}
