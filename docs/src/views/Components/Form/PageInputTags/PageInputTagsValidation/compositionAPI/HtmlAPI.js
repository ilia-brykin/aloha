export default function HtmlAPI() {
  const codeHtml = `<a-input-tags
  v-model="model"
  :maxlength="40"
  :separators="['Enter', ',', ';', ' ']"
  :transform="transform"
  :validator="validator"
  label="_A_INPUT_TAGS_EXAMPLE_RECIPIENTS_"
/>
<pre>{{ model }}</pre>`;

  return {
    codeHtml,
  };
}
