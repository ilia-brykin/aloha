export default function HtmlAPI() {
  const codeHtml = `<a-show-more 
  :safe-html="html"
>
</a-show-more>`;

  return {
    codeHtml,
  };
}
