export default function HtmlAPI() {
  const codeHtml = `<a-alert 
  text="Aloha"
  :is-visible="true"
  type="success"
  :btn-close-attributes="{ class: 'a_btn_close a_fs_3' }"
  :closable="true"
></a-alert>`;

  return {
    codeHtml,
  };
}
