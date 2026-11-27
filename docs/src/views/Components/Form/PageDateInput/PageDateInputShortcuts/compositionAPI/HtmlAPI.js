export default function HtmlAPI() {
  const codeHtml = `<a-date-input
  v-model="model"
  range
  clearable
  label="_A_DATE_INPUT_EXAMPLE_REPORT_PERIOD_"
  :shortcuts="shortcuts"
/>
<pre>{{ model }}</pre>`;

  return {
    codeHtml,
  };
}
