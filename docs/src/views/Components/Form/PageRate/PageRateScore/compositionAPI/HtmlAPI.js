export default function HtmlAPI() {
  const codeHtml = `<a-rate
  v-model="model"
  class="a_mb_3"
  :show-score="true"
  label="show-score"
></a-rate>
<a-rate
  v-model="model"
  :show-score="true"
  score-template="{{value}} points"
  label="score-template"
></a-rate>`;

  return {
    codeHtml,
  };
}
