export default function HtmlAPI() {
  const codeHtml = `<!-- Enter, comma, semicolon or space add a recipient, at most 5 -->
<a-input-tags
  v-model="model"
  label="_A_INPUT_TAGS_EXAMPLE_RECIPIENTS_"
  :separators="['Enter', ',', ';', ' ']"
  :max-tags="5"
  :input-attributes="{ type: 'email', inputmode: 'email' }"
  help-text="_A_INPUT_TAGS_EXAMPLE_RECIPIENTS_HELP_"
/>`;

  return {
    codeHtml,
  };
}
