export default function HtmlAPI() {
  const codeHtml = `<a-show-more 
  :html="html"
  btn-title-less="_A_SHOW_MORE_GROUP_TITLE_LESS_"
  btn-title-more="_A_SHOW_MORE_GROUP_TITLE_MORE_"
></a-show-more>`;

  return {
    codeHtml,
  };
}
