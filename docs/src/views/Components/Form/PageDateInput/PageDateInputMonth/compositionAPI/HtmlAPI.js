export default function HtmlAPI() {
  const codeHtml = `<a-date-input
  v-model="modelMonth"
  mode="month"
  label="_A_DATE_INPUT_EXAMPLE_BILLING_MONTH_"
/>
<pre>{{ modelMonth }}</pre>
<a-date-input
  v-model="modelYear"
  mode="year"
  label="_A_DATE_INPUT_EXAMPLE_CONSTRUCTION_YEAR_"
  max="2030"
/>
<pre>{{ modelYear }}</pre>`;

  return {
    codeHtml,
  };
}
