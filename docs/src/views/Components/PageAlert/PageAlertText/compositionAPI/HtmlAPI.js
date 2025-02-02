export default function HtmlAPI() {
  const codeHtml = `<a-alert 
  :text="text"
  :is-visible="true"
  type="primary"
>
</a-alert>`;

  return {
    codeHtml,
  };
}
