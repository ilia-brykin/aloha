export default function HtmlAPI() {
  const codeHtml = `<a-date-input
  v-model="model"
  label="_A_DATE_INPUT_EXAMPLE_DELIVERY_"
  :min="min"
  :max="max"
  :is-date-disabled="isWeekend"
/>
<pre>{{ model }}</pre>`;

  return {
    codeHtml,
  };
}
