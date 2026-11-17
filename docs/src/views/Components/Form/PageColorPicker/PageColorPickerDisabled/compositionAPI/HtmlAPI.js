export default function HtmlAPI() {
  const codeHtml = `<a-color-picker
  v-model="model"
  label="disabled"
  :disabled="true"
></a-color-picker>
<a-color-picker
  v-model="model"
  label="readonly"
  :readonly="true"
></a-color-picker>`;

  return {
    codeHtml,
  };
}
