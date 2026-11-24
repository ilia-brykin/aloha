export default function HtmlAPI() {
  const codeHtml = `<a-date-input
  v-model="model"
  label="_A_DATE_INPUT_EXAMPLE_BIRTHDAY_"
  help-text="_A_DATE_INPUT_EXAMPLE_BIRTHDAY_HELP_"
  max="2025-12-31"
/>
<pre>{{ model }}</pre>`;

  return {
    codeHtml,
  };
}
