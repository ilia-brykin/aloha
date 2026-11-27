export default function HtmlAPI() {
  const codeHtml = `<a-input-tags
  v-model="model"
  :data="languages"
  :is-data-simple-array="true"
  :is-only-from-list="true"
  :is-remove-all="true"
  :max-tags="6"
  :max-visible-tags="3"
  :min-length="0"
  :open-on-focus="true"
  label="_A_INPUT_TAGS_EXAMPLE_LANGUAGES_"
/>`;

  return {
    codeHtml,
  };
}
