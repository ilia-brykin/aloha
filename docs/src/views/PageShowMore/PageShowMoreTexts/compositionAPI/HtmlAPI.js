export default function HtmlAPI() {
  const codeHtml = `<a-show-more 
  :html="html"
  btn-text-more="Show more aloha"
  btn-text-less="Show less aloha"
></a-show-more>`;

  return {
    codeHtml,
  };
}
