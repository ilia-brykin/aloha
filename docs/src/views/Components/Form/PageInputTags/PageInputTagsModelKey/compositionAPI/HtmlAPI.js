export default function HtmlAPI() {
  const codeHtml = `<a-input-tags
  v-model="model"
  :data="countries"
  :is-only-from-list="true"
  label="_A_INPUT_TAGS_EXAMPLE_COUNTRIES_"
  model-key="id"
/>
<pre>{{ model }}</pre>`;

  return {
    codeHtml,
  };
}
