export default function HtmlAPI() {
  const codeHtml = `<a-datepicker
  v-model="model"
  :error-icon="errorIcon"
  errors="Aloha"
  label="Datepicker"
></a-datepicker>`;

  return {
    codeHtml,
  };
}
