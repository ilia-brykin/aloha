export default function HtmlAPI() {
  const codeHtml = `<!-- "warn" (default): a warning, the number is rounded -->
<a-json-editor
  v-model="modelWarn"
  label="_A_JSON_EDITOR_EXAMPLE_BIG_WARN_"
  model-type="string"
/>
<!-- "bigint": the integer stays exact as BigInt; "string": as a string -->
<a-json-editor
  v-model="modelBigint"
  label="_A_JSON_EDITOR_EXAMPLE_BIG_BIGINT_"
  model-type="string"
  big-numbers="bigint"
/>`;

  return {
    codeHtml,
  };
}
