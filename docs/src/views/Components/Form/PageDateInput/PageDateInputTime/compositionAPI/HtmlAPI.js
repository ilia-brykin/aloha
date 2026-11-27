export default function HtmlAPI() {
  const codeHtml = `<a-date-input
  v-model="modelDatetime"
  mode="datetime"
  label="_A_DATE_INPUT_EXAMPLE_APPOINTMENT_"
/>
<pre>{{ modelDatetime }}</pre>
<a-date-input
  v-model="modelTime"
  mode="time"
  label="_A_DATE_INPUT_EXAMPLE_START_TIME_"
/>
<pre>{{ modelTime }}</pre>`;

  return {
    codeHtml,
  };
}
