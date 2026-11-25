export default function HtmlAPI() {
  const codeHtml = `<a-json-editor
  v-model="model"
  label="_A_JSON_EDITOR_EXAMPLE_FEATURES_"
>
  <template v-slot:value-boolean="{ value }">
    <a-translation
      class="a_badge"
      :class="value ? 'a_badge_success' : 'a_badge_secondary'"
      tag="span"
      :text="value ? '_A_JSON_EDITOR_EXAMPLE_ON_' : '_A_JSON_EDITOR_EXAMPLE_OFF_'"
    />
  </template>
  <template v-slot:status="{ document }">
    <a-translation
      tag="span"
      text="_A_JSON_EDITOR_EXAMPLE_ACTIVE_COUNT_"
      :extra="{ count: Object.values(document || {}).filter(Boolean).length }"
    />
  </template>
</a-json-editor>`;

  return {
    codeHtml,
  };
}
