export default function HtmlAPI() {
  const codeHtml = `<a-select
  v-model="model"
  :data="data"
  :error-icon="errorIcon"
  errors="Aloha"
  key-id="id"
  key-label="label"
  label="Select"
  type="select"
></a-select>`;

  return {
    codeHtml,
  };
}
