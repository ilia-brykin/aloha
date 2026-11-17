export default function HtmlAPI() {
  const codeHtml = `<a-color-picker
  v-model="model"
  label="Color"
  :required="true"
  errors="Please choose a color"
  :error-icon="errorIcon"
></a-color-picker>`;

  return {
    codeHtml,
  };
}
