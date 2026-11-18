export default function HtmlAPI() {
  const codeHtml = `<a-rate
  v-model="model"
  label="Service"
  label-description="How satisfied are you with our service?"
  help-text="Click the same icon again to remove the rating"
  :clearable="true"
></a-rate>`;

  return {
    codeHtml,
  };
}
