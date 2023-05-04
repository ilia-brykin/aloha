export default function HtmlAPI() {
  const codeHtml = `<a-alert 
  html="Alert success" 
  :is-visible="true" 
  type="success"
  :has-icon="true"
  icon="Cog"
>
</a-alert>
<a-alert 
  html="Alert info" 
  :is-visible="true" 
  type="info"
  :has-icon="true"
  icon="EyeOpen"
>
</a-alert>
<a-alert 
  html="Alert warning" 
  :is-visible="true" 
  type="warning"
  :has-icon="true"
  icon="EyeClose"
>
</a-alert>
<a-alert 
  html="Alert danger" 
  :is-visible="true" 
  type="danger"
  :has-icon="true"
  icon="Home"
>
</a-alert>
<a-alert 
  html="Alert primary" 
  :is-visible="true" 
  type="primary"
  :has-icon="true"
  icon="Lock"
>
</a-alert>`;

  return {
    codeHtml,
  };
}