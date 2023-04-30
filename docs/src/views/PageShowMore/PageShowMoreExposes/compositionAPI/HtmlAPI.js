export default function HtmlAPI() {
  const codeHtml = `<a-show-more 
  ref="showMoreRef"
  :html="html"
>
</a-show-more>`;

  return {
    codeHtml,
  };
}
