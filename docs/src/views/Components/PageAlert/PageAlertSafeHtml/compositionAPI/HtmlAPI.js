export default function HtmlAPI() {
  const codeHtml = `<a-alert 
  :html="html"
  :is-visible="true"
  type="primary"
>
</a-alert>`;

  return {
    codeHtml,
  };
}
