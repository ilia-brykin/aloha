export default function HtmlAPI() {
  const codeHtml = `<a-rate
  v-model="model"
  :style="styleRate"
  :show-score="true"
  label="Your rating"
></a-rate>`;

  return {
    codeHtml,
  };
}
