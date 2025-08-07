export default function HtmlAPI() {
  const codeHtml = `<a-alert 
  :closable="true"
  :is-visible="true"
  :remove-alert-on-close="true"
  html="Alert success"
  type="success"
></a-alert>
<a-alert 
  :closable="true"
  :is-visible="true"
  :remove-alert-on-close="true"
  html="Alert info"
  type="info"
></a-alert>
<a-alert 
  :closable="true"
  :is-visible="true"
  :remove-alert-on-close="true"
  html="Alert warning"
  type="warning"
></a-alert>
<a-alert 
  :closable="true"
  :is-visible="true"
  :remove-alert-on-close="true"
  html="Alert danger"
  type="danger"
></a-alert>
<a-alert 
  :closable="true"
  :is-visible="true"
  :remove-alert-on-close="true"
  html="Alert primary"
  type="primary"
></a-alert>
<a-alert 
  :closable="true"
  :is-visible="true"
  :remove-alert-on-close="true"
  html="Alert secondary"
  type="secondary"
></a-alert>
<a-alert 
  :closable="true"
  :is-visible="true"
  :remove-alert-on-close="true"
  html="Alert tertiary"
  type="tertiary"
></a-alert>
<a-alert 
  :closable="true"
  :is-visible="true"
  :remove-alert-on-close="true"
  html="Alert dark"
  type="dark"
></a-alert>
<a-alert 
  :closable="true"
  :is-visible="true"
  :remove-alert-on-close="true"
  html="Alert light"
  type="light"
></a-alert>`;

  return {
    codeHtml,
  };
}
