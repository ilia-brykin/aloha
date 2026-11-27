export default function HtmlAPI() {
  const codeHtml = `<a-input-tags
  v-model="model"
  label="_A_INPUT_TAGS_EXAMPLE_KEYWORDS_"
  placeholder="_A_INPUT_TAGS_EXAMPLE_KEYWORDS_PLACEHOLDER_"
  help-text="_A_INPUT_TAGS_EXAMPLE_KEYWORDS_HELP_"
/>
<pre>{{ model }}</pre>`;

  return {
    codeHtml,
  };
}
