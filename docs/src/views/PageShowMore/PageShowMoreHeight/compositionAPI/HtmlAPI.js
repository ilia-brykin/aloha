export default function HtmlAPI() {
  const codeHtml = `<a-show-more 
  :html="html"
  :height="500"
></a-show-more>`;

  return {
    codeHtml,
  };
}
