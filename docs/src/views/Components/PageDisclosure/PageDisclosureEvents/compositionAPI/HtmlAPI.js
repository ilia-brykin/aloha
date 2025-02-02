export default function HtmlAPI() {
  const codeHtml = `<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
  @toggle="onToggle"
></a-disclosure>`;

  return {
    codeHtml,
  };
}
