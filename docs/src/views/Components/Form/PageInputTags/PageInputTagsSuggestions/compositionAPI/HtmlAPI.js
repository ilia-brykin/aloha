export default function HtmlAPI() {
  const codeHtml = `<a-input-tags
  v-model="model"
  :data="skills"
  :is-add-all="true"
  key-group="area"
  label="_A_INPUT_TAGS_EXAMPLE_SKILLS_"
/>
<pre>{{ model }}</pre>`;

  return {
    codeHtml,
  };
}
