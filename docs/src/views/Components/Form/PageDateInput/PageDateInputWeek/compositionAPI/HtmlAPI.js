export default function HtmlAPI() {
  const codeHtml = `<a-date-input
  v-model="model"
  mode="week"
  label="_A_DATE_INPUT_EXAMPLE_WEEK_"
  show-today
/>
<pre>{{ model }}</pre>`;

  return {
    codeHtml,
  };
}
