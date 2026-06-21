export default function HtmlAPI() {
  const codeHtml = `<a-input-currency
  v-model="model"
  :error-icon="errorIcon"
  errors="Aloha"
  label="Input currency"
></a-input-currency>`;

  return {
    codeHtml,
  };
}
