export default function HtmlAPI() {
  const codeHtml = `<a-show-more 
  :html="html"
  :show-less="false"
>
</a-show-more>`;

  return {
    codeHtml,
  };
}
