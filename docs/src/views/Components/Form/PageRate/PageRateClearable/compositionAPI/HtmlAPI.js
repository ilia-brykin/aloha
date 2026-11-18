export default function HtmlAPI() {
  const codeHtml = `<a-rate
  v-model="model"
  :clearable="true"
  :show-text="true"
  label="Your rating"
  help-text="Click the same icon again to remove the rating"
></a-rate>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
