export default function HtmlAPI() {
  const codeHtml = `<a-alert 
  html="Alert success" 
  :is-visible="true" 
  type="success"
  :has-icon="true"
>
</a-alert>
<a-alert 
  html="Alert info" 
  :is-visible="true" 
  type="info"
  :has-icon="true"
>
</a-alert>
<a-alert 
  html="Alert warning" 
  :is-visible="true" 
  type="warning"
  :has-icon="true"
>
</a-alert>
<a-alert 
  html="Alert danger" 
  :is-visible="true" 
  type="danger"
  :has-icon="true"
>
</a-alert>`;

  return {
    codeHtml,
  };
}
