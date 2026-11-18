export default function HtmlAPI() {
  const codeHtml = `<a-rate
  v-model="model"
  :allow-half="true"
  :show-score="true"
  label="Your rating"
></a-rate>
<div>model: {{ model }}</div>`;

  return {
    codeHtml,
  };
}
