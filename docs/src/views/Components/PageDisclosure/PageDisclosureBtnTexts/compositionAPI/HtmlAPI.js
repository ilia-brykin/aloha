export default function HtmlAPI() {
  const codeHtml = `<a-disclosure
  :text-less="textLess"
  :text-more="textMore"
  btn-text-less="Show less aloha"
  btn-text-more="Show more aloha"
></a-disclosure>`;

  return {
    codeHtml,
  };
}
