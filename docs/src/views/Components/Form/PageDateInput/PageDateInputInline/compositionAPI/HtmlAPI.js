export default function HtmlAPI() {
  const codeHtml = `<a-date-input
  v-model="model"
  inline
  range
  label="_A_DATE_INPUT_EXAMPLE_TRAVEL_"
/>
<pre>{{ model }}</pre>`;

  return {
    codeHtml,
  };
}
