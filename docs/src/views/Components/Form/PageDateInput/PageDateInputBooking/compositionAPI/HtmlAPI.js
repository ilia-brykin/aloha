export default function HtmlAPI() {
  const codeHtml = `<a-date-input
  v-model="model"
  range
  label="_A_DATE_INPUT_EXAMPLE_STAY_"
  :months="2"
  :min-days="1"
  :max-days="14"
  show-today
  show-week-numbers
/>
<pre>{{ model }}</pre>`;

  return {
    codeHtml,
  };
}
