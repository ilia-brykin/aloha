export default function HtmlAPI() {
  const codeHtml = `<a-alert 
  html="Alert success"
  :is-visible="true"
  type="success"
  :closable="true"
>
</a-alert>
<a-alert 
  html="Alert danger"
  :is-visible="true"
  type="danger"
  :closable="true"
>
</a-alert>`;

  return {
    codeHtml,
  };
}
