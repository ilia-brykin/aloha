export default function HtmlAPI() {
  const codeHtml = `<a-rate
  v-model="model"
  :max="10"
  :show-score="true"
  score-template="{{value}} / {{max}}"
  label="Your rating"
></a-rate>`;

  return {
    codeHtml,
  };
}
