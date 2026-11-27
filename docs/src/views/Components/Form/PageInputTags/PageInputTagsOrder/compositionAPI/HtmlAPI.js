export default function HtmlAPI() {
  const codeHtml = `<a-input-tags
  v-model="model"
  :is-sortable="true"
  :tag-class="tagClass"
  label="_A_INPUT_TAGS_EXAMPLE_STEPS_"
  size="small"
/>
<pre>{{ model }}</pre>`;

  return {
    codeHtml,
  };
}
