export default function HtmlAPI() {
  const codeHtml = `<a-date-input
  v-model="modelRange"
  range
  label="_A_DATE_INPUT_EXAMPLE_TRAVEL_"
/>
<pre>{{ modelRange }}</pre>
<a-date-input
  v-model="modelRangeDatetime"
  range
  mode="datetime"
  label="_A_DATE_INPUT_EXAMPLE_EVENT_"
  :default-time="['00:00', '23:59']"
/>
<pre>{{ modelRangeDatetime }}</pre>`;

  return {
    codeHtml,
  };
}
