export default function HtmlAPI() {
  const codeHtml = `<a-alert 
  ref="alertRef"
  html="Alert success"
  :is-visible="true"
  type="success"
>
</a-alert>`;

  return {
    codeHtml,
  };
}
