export default function HtmlAPI() {
  const codeHtml = `<a-rate
  v-model="model"
  :required="true"
  :errors="model ? undefined : 'Please rate the service'"
  label="Service"
></a-rate>`;

  return {
    codeHtml,
  };
}
