export default function HtmlAPI() {
  const codeHtml = `<a-date-input
  v-model="modelUtc"
  mode="datetime"
  utc
  label="_A_DATE_INPUT_EXAMPLE_UTC_"
/>
<pre>{{ modelUtc }}</pre>
<a-date-input
  v-model="modelTokens"
  model-format="DD.MM.YYYY"
  label="_A_DATE_INPUT_EXAMPLE_TOKENS_"
/>
<pre>{{ modelTokens }}</pre>
<a-date-input
  v-model="modelTimestamp"
  mode="datetime"
  model-format="timestamp"
  label="_A_DATE_INPUT_EXAMPLE_TIMESTAMP_"
/>
<pre>{{ modelTimestamp }}</pre>`;

  return {
    codeHtml,
  };
}
