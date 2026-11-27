export default function HtmlAPI() {
  const codeHtml = `<a-date-input
  v-model="model"
  mode="quarter"
  range
  label="_A_DATE_INPUT_EXAMPLE_QUARTER_"
/>
<pre>{{ model }}</pre>`;

  return {
    codeHtml,
  };
}
