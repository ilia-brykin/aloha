export default function HtmlAPI() {
  const codeHtml = `<a-alert 
  html="Alert success"
  :is-visible="true"
  type="success"
  :has-icon="true"
  icon-class="a_width_6 a_height_6"
  alert-class="a_p_5"
  alert-content-class="a_text_center"
>
</a-alert>`;

  return {
    codeHtml,
  };
}
