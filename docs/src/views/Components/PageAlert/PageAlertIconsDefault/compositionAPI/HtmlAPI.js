export default function HtmlAPI() {
  const codeHtml = `<a-alert 
  html="Alert success" 
  :is-visible="true" 
  type="success"
  :show-icon="true"
>
</a-alert>
<a-alert 
  html="Alert info" 
  :is-visible="true" 
  type="info"
  :show-icon="true"
>
</a-alert>
<a-alert 
  html="Alert warning" 
  :is-visible="true" 
  type="warning"
  :show-icon="true"
>
</a-alert>
<a-alert 
  html="Alert danger" 
  :is-visible="true" 
  type="danger"
  :show-icon="true"
>
</a-alert>`;

  return {
    codeHtml,
  };
}
