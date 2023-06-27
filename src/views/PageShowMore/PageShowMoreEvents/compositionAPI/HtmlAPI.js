export default function HtmlAPI() {
  const codeHtml = `<a-show-more 
  :html="html"
  @toggle="onToggle"
>
</a-show-more>`;

  return {
    codeHtml,
  };
}
