export default function HtmlAPI() {
  const codeHtml = `<a-show-more 
  :html="html"
  :is-open-default="true"
></a-show-more>`;

  return {
    codeHtml,
  };
}
