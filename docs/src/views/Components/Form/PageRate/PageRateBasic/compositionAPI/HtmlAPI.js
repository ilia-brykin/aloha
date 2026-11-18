export default function HtmlAPI() {
  const codeHtml = `<a-rate
  v-model="model"
  label="Your rating"
></a-rate>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
