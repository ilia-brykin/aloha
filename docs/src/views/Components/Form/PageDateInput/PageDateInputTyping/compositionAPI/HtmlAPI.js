export default function HtmlAPI() {
  const codeHtml = `<a-date-input
  v-model="model"
  mode="datetime"
  auto-format
  show-time-list
  label="_A_DATE_INPUT_EXAMPLE_PICKUP_"
  :minute-step="30"
  min-time="08:00"
  max-time="18:00"
  :is-time-disabled="isLunch"
/>
<pre>{{ model }}</pre>`;

  return {
    codeHtml,
  };
}
